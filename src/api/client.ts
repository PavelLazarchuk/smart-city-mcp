import { type McpConfig } from '../config.js';
import { type Logger } from '../logger.js';
import { USER_AGENT } from '../version.js';
import { type CachedResponse, ResponseCache } from './cache.js';
import { ApiError, TransportError, apiErrorFrom } from './errors.js';

export type QueryValue = string | number | boolean | undefined | null;

export interface ApiRequest {
    path: string;
    method?: 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE';
    query?: Record<string, QueryValue>;
    body?: unknown;
    auth?: boolean;
    idempotencyKey?: string;
    cache?: boolean;
}

export interface ApiResult<T> {
    data: T;
    meta: Record<string, unknown> | undefined;
    status: number;
    headers: Headers;
    replayed: boolean;
}

export interface RateLimitState {
    limit: number | null;
    remaining: number | null;
    resetSeconds: number | null;
    observedAt: number;
}

export interface TokenProvider {
    accessToken(): Promise<string | null>;
    reauthorize(usedToken: string): Promise<string | null>;
}

const RETRYABLE_AUTH_CODES = new Set(['TOKEN_EXPIRED', 'TOKEN_INVALID', 'SESSION_REVOKED']);
const CATALOGUE_TTL_MS = 60_000;
const RETRY_DELAY_MS = 250;
const REQUEST_TIMEOUT_MS = 15_000;

function sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

function numberHeader(headers: Headers, name: string): number | null {
    const raw = headers.get(name);
    const value = raw === null ? Number.NaN : Number(raw);

    return Number.isFinite(value) ? value : null;
}

function bucketOf(path: string): string {
    return path.startsWith('/auth') ? 'auth' : 'default';
}

export class ApiClient {
    private tokens: TokenProvider | undefined;
    private readonly cache: ResponseCache;
    private readonly limits = new Map<string, RateLimitState>();

    private readonly timeoutMs: number;

    constructor(
        private readonly config: McpConfig,
        private readonly logger: Logger,
        options: { timeoutMs?: number; cacheTtlMs?: number } = {},
    ) {
        this.timeoutMs = options.timeoutMs ?? REQUEST_TIMEOUT_MS;
        this.cache = new ResponseCache(options.cacheTtlMs ?? CATALOGUE_TTL_MS);
    }

    useTokens(provider: TokenProvider): void {
        this.tokens = provider;
    }

    clearCache(): void {
        this.cache.clear();
    }

    async request<T>(request: ApiRequest): Promise<ApiResult<T>> {
        const method = request.method ?? 'GET';
        const bucket = bucketOf(request.path);
        const url = this.urlOf(request.path, request.query);
        const cacheable = request.cache === true && method === 'GET' && request.auth !== true;
        const fresh = cacheable ? this.cache.fresh(url) : undefined;

        if (fresh !== undefined) {
            this.logger.debug('cache hit', { url });

            return { ...this.served(fresh), headers: new Headers() } as ApiResult<T>;
        }

        this.assertBudget(bucket, url);

        const revalidating = cacheable ? this.cache.stale(url) : undefined;
        const etag = cacheable ? this.cache.etagOf(url) : undefined;
        const send = async (token: string | null): Promise<Response> =>
            this.send(url, method, request, token, etag);

        let token = request.auth === true ? await this.requireToken() : null;
        let response = await this.attempt(() => send(token), method);

        if (response.status === 401 && request.auth === true) {
            const body = await this.readBody(response);
            const error = apiErrorFrom(401, body);

            if (!RETRYABLE_AUTH_CODES.has(error.code)) throw error;

            const refreshed = await this.tokens?.reauthorize(token ?? '');

            if (!refreshed) throw error;

            token = refreshed;
            response = await this.attempt(() => send(token), method);
        }

        this.observeLimits(bucket, response.headers);

        if (response.status === 304 && revalidating) {
            this.cache.set(url, revalidating, etag);

            return { ...this.served(revalidating), headers: response.headers } as ApiResult<T>;
        }

        const body = await this.readBody(response);

        if (!response.ok)
            throw apiErrorFrom(
                response.status,
                body,
                response.status === 429 ? this.retryAfter(response.headers) : undefined,
            );

        const envelope = (body ?? {}) as { data?: unknown; meta?: Record<string, unknown> };
        const data = (envelope.data ?? undefined) as T;

        if (cacheable)
            this.cache.set(url, { data, meta: envelope.meta }, response.headers.get('etag') ?? undefined);

        return {
            data,
            meta: envelope.meta,
            status: response.status,
            headers: response.headers,
            replayed: response.headers.get('idempotency-replayed') === 'true',
        };
    }

    private served(cached: CachedResponse): Omit<ApiResult<unknown>, 'headers'> {
        return { data: cached.data, meta: cached.meta, status: 200, replayed: false };
    }

    private async requireToken(): Promise<string> {
        const token = await this.tokens?.accessToken();

        if (!token)
            throw new ApiError({
                status: 401,
                code: 'UNAUTHENTICATED',
                message: 'Nobody is signed in.',
            });

        return token;
    }

    private urlOf(path: string, query?: Record<string, QueryValue>): string {
        const url = new URL(`${this.config.apiUrl}${path}`);

        for (const [key, value] of Object.entries(query ?? {})) {
            if (value === undefined || value === null || value === '') continue;

            url.searchParams.set(key, String(value));
        }

        return url.toString();
    }

    private async send(
        url: string,
        method: string,
        request: ApiRequest,
        token: string | null,
        etag?: string,
    ): Promise<Response> {
        const headers = new Headers({ accept: 'application/json', 'user-agent': USER_AGENT });

        if (token) headers.set('authorization', `Bearer ${token}`);

        if (request.idempotencyKey) headers.set('idempotency-key', request.idempotencyKey);

        if (etag) headers.set('if-none-match', etag);

        if (request.body !== undefined) headers.set('content-type', 'application/json');

        this.logger.debug('request', { method, url });

        try {
            return await fetch(url, {
                method,
                headers,
                body: request.body === undefined ? undefined : JSON.stringify(request.body),
                signal: AbortSignal.timeout(this.timeoutMs),
            });
        } catch (error) {
            const timedOut = error instanceof Error && error.name === 'TimeoutError';

            throw new TransportError(
                `${method} ${url} ${timedOut ? `timed out after ${this.timeoutMs} ms` : 'failed'}`,
                error,
            );
        }
    }

    private async attempt(run: () => Promise<Response>, method: string): Promise<Response> {
        try {
            const response = await run();

            if (response.status >= 500 && method === 'GET') {
                await sleep(RETRY_DELAY_MS);

                return await run();
            }

            return response;
        } catch (error) {
            if (method !== 'GET') throw error;

            await sleep(RETRY_DELAY_MS);

            return await run();
        }
    }

    private async readBody(response: Response): Promise<unknown> {
        if (response.status === 204) return undefined;

        const text = await response.text();

        if (text.length === 0) return undefined;

        try {
            return JSON.parse(text);
        } catch {
            throw new TransportError(`The API answered ${response.status} with a non-JSON body`);
        }
    }

    private retryAfter(headers: Headers): number | undefined {
        return numberHeader(headers, 'retry-after') ?? numberHeader(headers, 'ratelimit-reset') ?? undefined;
    }

    private observeLimits(bucket: string, headers: Headers): void {
        if (headers.get('ratelimit-limit') === null) return;

        this.limits.set(bucket, {
            limit: numberHeader(headers, 'ratelimit-limit'),
            remaining: numberHeader(headers, 'ratelimit-remaining'),
            resetSeconds: numberHeader(headers, 'ratelimit-reset'),
            observedAt: Date.now(),
        });
    }

    private assertBudget(bucket: string, url: string): void {
        const observed = this.limits.get(bucket);

        if (!observed) return;

        const { remaining, resetSeconds, observedAt } = observed;

        if (remaining === null || remaining > 0 || resetSeconds === null) return;

        const waitSeconds = Math.ceil(resetSeconds - (Date.now() - observedAt) / 1000);

        if (waitSeconds <= 0) return;

        this.logger.warn('rate limit exhausted', { url, waitSeconds });

        throw new ApiError({
            status: 429,
            code: 'RATE_LIMITED',
            message: 'The API asks to slow down.',
            retryAfterSeconds: waitSeconds,
        });
    }
}
