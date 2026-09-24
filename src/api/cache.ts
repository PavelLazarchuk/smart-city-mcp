export interface CachedResponse {
    data: unknown;
    meta: Record<string, unknown> | undefined;
}

interface Entry {
    etag: string | undefined;
    payload: CachedResponse;
    expiresAt: number;
}

export class ResponseCache {
    private readonly entries = new Map<string, Entry>();

    constructor(
        private readonly ttlMs: number,
        private readonly max = 200,
    ) {}

    fresh(key: string): CachedResponse | undefined {
        const entry = this.entries.get(key);

        return entry && entry.expiresAt > Date.now() ? entry.payload : undefined;
    }

    etagOf(key: string): string | undefined {
        return this.entries.get(key)?.etag;
    }

    stale(key: string): CachedResponse | undefined {
        return this.entries.get(key)?.payload;
    }

    set(key: string, payload: CachedResponse, etag?: string): void {
        if (this.entries.size >= this.max) {
            const oldest = this.entries.keys().next();

            if (!oldest.done) this.entries.delete(oldest.value);
        }

        this.entries.set(key, { etag, payload, expiresAt: Date.now() + this.ttlMs });
    }

    touch(key: string): void {
        const entry = this.entries.get(key);

        if (entry) entry.expiresAt = Date.now() + this.ttlMs;
    }

    clear(): void {
        this.entries.clear();
    }
}
