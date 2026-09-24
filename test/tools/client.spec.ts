import { createServer, type Server } from 'node:http';
import { type AddressInfo } from 'node:net';

import { ApiClient } from '../../src/api/client.js';
import { TransportError } from '../../src/api/errors.js';
import { loadConfig } from '../../src/config.js';
import { createLogger } from '../../src/logger.js';

const logger = createLogger('silent');

interface Stub {
    url: string;
    hits: string[];
    close(): Promise<void>;
}

async function serve(handler: (url: URL, respond: Respond) => void): Promise<Stub> {
    const hits: string[] = [];
    const server: Server = createServer((request, response) => {
        const url = new URL(request.url ?? '/', 'http://stub');
        hits.push(url.pathname + url.search);
        handler(url, (status, body, headers = {}) => {
            response.writeHead(status, { 'content-type': 'application/json', ...headers });
            response.end(body === undefined ? '' : JSON.stringify(body));
        });
    });
    await new Promise<void>((resolve) => server.listen(0, '127.0.0.1', resolve));
    const { port } = server.address() as AddressInfo;

    return {
        url: `http://127.0.0.1:${port}/api/v1`,
        hits,
        close: () =>
            new Promise((resolve) => {
                server.closeAllConnections();
                server.close(() => resolve());
            }),
    };
}

type Respond = (status: number, body?: unknown, headers?: Record<string, string>) => void;

function clientFor(stub: Stub, options: { timeoutMs?: number; cacheTtlMs?: number } = {}): ApiClient {
    return new ApiClient(loadConfig({ SMART_CITY_API_URL: stub.url }), logger, options);
}

describe('ApiClient', () => {
    it('gives up on an API that never answers', async () => {
        const stub = await serve(() => undefined);

        try {
            await expect(
                clientFor(stub, { timeoutMs: 150 }).request({ path: '/services' }),
            ).rejects.toBeInstanceOf(TransportError);
        } finally {
            await stub.close();
        }
    }, 20_000);

    it('serves a 304 from the cache instead of an empty body', async () => {
        let served = 0;
        const stub = await serve((url, respond) => {
            served += 1;

            if (served === 1)
                return respond(200, { data: [{ id: 'a' }], meta: { total: 1 } }, { etag: '"v1"' });

            return respond(304, undefined, { etag: '"v1"' });
        });

        try {
            const client = clientFor(stub, { cacheTtlMs: 10 });
            const first = await client.request<{ id: string }[]>({ path: '/services', cache: true });
            await new Promise((resolve) => setTimeout(resolve, 30));
            const warm = await client.request<{ id: string }[]>({ path: '/services', cache: true });

            expect(first.data).toEqual([{ id: 'a' }]);
            expect(warm.data).toEqual([{ id: 'a' }]);
            expect(warm.meta).toEqual({ total: 1 });
            expect(stub.hits).toHaveLength(2);
        } finally {
            await stub.close();
        }
    });

    it('still answers a 304 after a write cleared the cache mid-flight', async () => {
        let served = 0;
        const stub = await serve((url, respond) => {
            served += 1;

            if (served === 1) return respond(200, { data: { id: 'a' } }, { etag: '"v1"' });

            return respond(304, undefined, { etag: '"v1"' });
        });

        try {
            const client = clientFor(stub, { cacheTtlMs: 10 });
            await client.request({ path: '/services/a', cache: true });
            await new Promise((resolve) => setTimeout(resolve, 30));
            const pending = client.request<{ id: string }>({ path: '/services/a', cache: true });
            client.clearCache();

            expect((await pending).data).toEqual({ id: 'a' });
        } finally {
            await stub.close();
        }
    });

    it('retries a failed GET once and never a POST', async () => {
        let attempts = 0;
        const stub = await serve((url, respond) => {
            attempts += 1;

            if (url.pathname.endsWith('/flaky') && attempts === 1) return respond(500, { error: {} });

            return respond(200, { data: { ok: true } });
        });

        try {
            const client = clientFor(stub);
            const result = await client.request<{ ok: boolean }>({ path: '/flaky' });

            expect(result.data).toEqual({ ok: true });
            expect(stub.hits).toHaveLength(2);
        } finally {
            await stub.close();
        }
    });

    it('passes a wait time on for a 429 only, though every answer carries RateLimit-Reset', async () => {
        const stub = await serve((url, respond) =>
            url.pathname.endsWith('/busy')
                ? respond(
                      429,
                      { error: { code: 'RATE_LIMITED' } },
                      { 'retry-after': '7', 'ratelimit-reset': '60' },
                  )
                : respond(422, { error: { code: 'OTP_INVALID' } }, { 'ratelimit-reset': '60' }),
        );

        try {
            const client = clientFor(stub);

            await expect(
                client.request({ method: 'POST', path: '/auth/otp/verify', body: {} }),
            ).rejects.toMatchObject({ code: 'OTP_INVALID', retryAfterSeconds: undefined });
            await expect(client.request({ method: 'POST', path: '/busy', body: {} })).rejects.toMatchObject({
                code: 'RATE_LIMITED',
                retryAfterSeconds: 7,
            });
        } finally {
            await stub.close();
        }
    });

    it('does not repeat a POST that failed', async () => {
        const stub = await serve((url, respond) => respond(500, { error: { code: 'INTERNAL_ERROR' } }));

        try {
            await expect(
                clientFor(stub).request({ method: 'POST', path: '/services/x/bookings', body: {} }),
            ).rejects.toMatchObject({ code: 'INTERNAL_ERROR' });
            expect(stub.hits).toHaveLength(1);
        } finally {
            await stub.close();
        }
    });
});
