import { mkdtemp, readFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

import { type ApiClient, type ApiRequest } from '../../src/api/client.js';
import { ApiError } from '../../src/api/errors.js';
import { SessionManager } from '../../src/auth/session.js';
import { SessionStore } from '../../src/auth/store.js';
import { createLogger } from '../../src/logger.js';

const logger = createLogger('silent');

function tokenPair(access: string): unknown {
    return {
        access_token: access,
        refresh_token: `refresh-${access}`,
        token_type: 'Bearer',
        expires_in: 300,
        user: { id: 'user-1', role: 'common-user', name: 'Alex', organization_ids: [] },
    };
}

function fakeClient(handler: (request: ApiRequest) => unknown): {
    client: ApiClient;
    calls: ApiRequest[];
} {
    const calls: ApiRequest[] = [];
    const client = {
        request: async (request: ApiRequest) => {
            calls.push(request);

            return {
                data: await handler(request),
                meta: undefined,
                status: 200,
                headers: new Headers(),
                replayed: false,
            };
        },
        clearCache: () => undefined,
    } as unknown as ApiClient;

    return { client, calls };
}

describe('SessionManager', () => {
    let directory: string;
    let path: string;

    beforeEach(async () => {
        directory = await mkdtemp(join(tmpdir(), 'smart-city-mcp-'));
        path = join(directory, 'session.json');
    });

    afterEach(async () => {
        await rm(directory, { recursive: true, force: true });
    });

    async function seed(expiresAt: number): Promise<SessionStore> {
        const store = new SessionStore(path, logger);
        await store.write({
            access_token: 'stale',
            refresh_token: 'refresh-stale',
            expires_at: expiresAt,
            user: { id: 'user-1', role: 'common-user', name: 'Alex' },
        });

        return store;
    }

    it('refreshes once for four callers racing on an expired token', async () => {
        const store = await seed(Date.now() + 1_000);
        const { client, calls } = fakeClient(async () => {
            await new Promise((resolve) => setTimeout(resolve, 20));

            return tokenPair('fresh');
        });
        const session = new SessionManager(client, store, logger);

        const tokens = await Promise.all([
            session.accessToken(),
            session.accessToken(),
            session.accessToken(),
            session.accessToken(),
        ]);

        expect(tokens).toEqual(['fresh', 'fresh', 'fresh', 'fresh']);
        expect(calls.filter((call) => call.path === '/auth/refresh')).toHaveLength(1);
    });

    it('does not refresh while the token is still comfortably valid', async () => {
        const store = await seed(Date.now() + 600_000);
        const { client, calls } = fakeClient(() => tokenPair('fresh'));
        const session = new SessionManager(client, store, logger);

        expect(await session.accessToken()).toBe('stale');
        expect(calls).toHaveLength(0);
    });

    it('refreshes again after the first refresh has settled', async () => {
        const store = await seed(Date.now() + 1_000);
        let issued = 0;
        const { client } = fakeClient(() => tokenPair(`fresh-${(issued += 1)}`));
        const session = new SessionManager(client, store, logger);

        expect(await session.accessToken()).toBe('fresh-1');
        expect(await session.reauthorize('fresh-1')).toBe('fresh-2');
    });

    it('wipes the store when the API says the token family was revoked', async () => {
        const store = await seed(Date.now() + 1_000);
        const { client } = fakeClient(() => {
            throw new ApiError({ status: 401, code: 'REFRESH_TOKEN_REUSED', message: 'reused' });
        });
        const session = new SessionManager(client, store, logger);

        expect(await session.accessToken()).toBeNull();
        expect(session.authenticated).toBe(false);
        await expect(readFile(path, 'utf8')).rejects.toMatchObject({ code: 'ENOENT' });
    });

    it('keeps the session when the refresh failed for a reason of its own', async () => {
        const store = await seed(Date.now() + 1_000);
        const { client } = fakeClient(() => {
            throw new ApiError({ status: 503, code: 'DEPENDENCY_UNAVAILABLE', message: 'down' });
        });
        const session = new SessionManager(client, store, logger);

        await expect(session.accessToken()).rejects.toMatchObject({ code: 'DEPENDENCY_UNAVAILABLE' });
        expect(session.authenticated).toBe(true);
    });

    it('tells listeners when a session appears and disappears', async () => {
        const store = new SessionStore(path, logger);
        const { client } = fakeClient(() => tokenPair('fresh'));
        const session = new SessionManager(client, store, logger);
        const seen: boolean[] = [];
        session.onChange((authenticated) => seen.push(authenticated));

        await session.adopt(tokenPair('fresh') as never);
        await session.forget();

        expect(seen).toEqual([true, false]);
    });

    it('does not re-announce on every refresh', async () => {
        const store = await seed(Date.now() + 1_000);
        const { client } = fakeClient(() => tokenPair('fresh'));
        const session = new SessionManager(client, store, logger);
        const seen: boolean[] = [];
        await session.init();
        session.onChange((authenticated) => seen.push(authenticated));

        await session.accessToken();
        await session.reauthorize('fresh');

        expect(seen).toEqual([]);
    });

    it('reuses a token another call already rotated instead of refreshing again', async () => {
        const store = await seed(Date.now() + 600_000);
        const { client, calls } = fakeClient(() => tokenPair('fresh'));
        const session = new SessionManager(client, store, logger);
        await session.init();

        expect(await session.reauthorize('long-gone')).toBe('stale');
        expect(calls).toHaveLength(0);
    });

    it('leaves no temporary file behind and keeps the mode across a rewrite', async () => {
        const { readdir, stat } = await import('node:fs/promises');
        const store = await seed(Date.now() + 600_000);
        await store.write({
            access_token: 'second',
            refresh_token: 'refresh-second',
            expires_at: Date.now() + 600_000,
            user: { id: 'user-1', role: 'common-user' },
        });

        expect((await readdir(directory)).sort()).toEqual(['session.json']);
        expect((await stat(path)).mode & 0o777).toBe(0o600);
        expect((await store.read())?.access_token).toBe('second');
    });

    it('writes the token pair 0600 and ignores a file it cannot trust', async () => {
        const store = await seed(Date.now() + 600_000);
        const { mode } = await import('node:fs').then(({ statSync }) => statSync(path));

        expect(mode & 0o777).toBe(0o600);

        await (await import('node:fs/promises')).writeFile(path, '{"nonsense":true}');
        expect(await store.read()).toBeNull();
    });
});
