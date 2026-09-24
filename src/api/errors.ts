export interface ApiErrorDetail {
    path?: string;
    message: string;
    [key: string]: unknown;
}

export class ApiError extends Error {
    readonly status: number;
    readonly code: string;
    readonly details: ApiErrorDetail[];
    readonly requestId: string | undefined;
    readonly retryAfterSeconds: number | undefined;

    constructor(init: {
        status: number;
        code: string;
        message: string;
        details?: ApiErrorDetail[];
        requestId?: string;
        retryAfterSeconds?: number;
    }) {
        super(init.message);
        this.name = 'ApiError';
        this.status = init.status;
        this.code = init.code;
        this.details = init.details ?? [];
        this.requestId = init.requestId;
        this.retryAfterSeconds = init.retryAfterSeconds;
    }
}

export class TransportError extends Error {
    override readonly cause: unknown;

    constructor(message: string, cause?: unknown) {
        super(message);
        this.name = 'TransportError';
        this.cause = cause;
    }
}

export function isApiError(error: unknown): error is ApiError {
    return error instanceof ApiError;
}

interface Envelope {
    error?: { code?: unknown; message?: unknown; details?: unknown; request_id?: unknown };
}

export function apiErrorFrom(status: number, body: unknown, retryAfterSeconds?: number): ApiError {
    const envelope = (body ?? {}) as Envelope;
    const error = envelope.error ?? {};
    const code = typeof error.code === 'string' ? error.code : fallbackCode(status);

    return new ApiError({
        status,
        code,
        message: typeof error.message === 'string' ? error.message : `Request failed with ${status}`,
        details: Array.isArray(error.details) ? (error.details as ApiErrorDetail[]) : [],
        requestId: typeof error.request_id === 'string' ? error.request_id : undefined,
        retryAfterSeconds,
    });
}

function fallbackCode(status: number): string {
    if (status === 401) return 'UNAUTHENTICATED';

    if (status === 403) return 'FORBIDDEN';

    if (status === 404) return 'NOT_FOUND';

    if (status === 429) return 'RATE_LIMITED';

    return status >= 500 ? 'INTERNAL_ERROR' : 'VALIDATION_ERROR';
}
