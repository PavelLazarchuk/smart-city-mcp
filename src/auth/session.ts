import { type ApiClient, type TokenProvider } from '../api/client.js';
import { type TokenPair } from '../api/contracts.js';
import { ApiError, isApiError } from '../api/errors.js';
import { type Logger } from '../logger.js';
import { type SessionStore, type StoredSession } from './store.js';

const REFRESH_SKEW_MS = 30_000;

const FATAL_REFRESH_CODES = new Set([
    'REFRESH_TOKEN_REUSED',
    'SESSION_REVOKED',
    'TOKEN_INVALID',
    'UNAUTHENTICATED',
]);

export type SessionListener = (authenticated: boolean) => void;

export class SessionManager implements TokenProvider {
    private state: StoredSession | null = null;
    private loaded = false;
    private announced: boolean | null = null;
    private refreshing: Promise<string | null> | null = null;
    private readonly listeners = new Set<SessionListener>();

    constructor(
        private readonly client: ApiClient,
        private readonly store: SessionStore,
        private readonly logger: Logger,
    ) {}

    async init(): Promise<void> {
        if (this.loaded) return;

        this.state = await this.store.read();
        this.loaded = true;
        this.announced = this.state !== null;
    }

    get user(): StoredSession['user'] | null {
        return this.state?.user ?? null;
    }

    get authenticated(): boolean {
        return this.state !== null;
    }

    onChange(listener: SessionListener): void {
        this.listeners.add(listener);
    }

    async accessToken(): Promise<string | null> {
        await this.init();

        if (!this.state) return null;

        if (this.state.expires_at - Date.now() > REFRESH_SKEW_MS) return this.state.access_token;

        return await this.refresh();
    }

    async reauthorize(usedToken: string): Promise<string | null> {
        await this.init();

        if (!this.state) return null;

        if (this.state.access_token !== usedToken) return this.state.access_token;

        return await this.refresh();
    }

    async adopt(pair: TokenPair): Promise<StoredSession> {
        const session: StoredSession = {
            access_token: pair.access_token,
            refresh_token: pair.refresh_token,
            expires_at: Date.now() + pair.expires_in * 1000,
            user: {
                id: pair.user.id,
                role: pair.user.role,
                name: pair.user.name,
                phone: pair.user.phone,
                email: pair.user.email,
            },
        };
        this.state = session;
        this.loaded = true;
        await this.store.write(session);
        this.announce(true);

        return session;
    }

    async signOut(): Promise<void> {
        await this.init();

        if (this.state) {
            try {
                await this.client.request({ method: 'POST', path: '/auth/logout', auth: true });
            } catch (error) {
                this.logger.warn('logout call failed; dropping the local session anyway', {
                    code: isApiError(error) ? error.code : 'TRANSPORT',
                });
            }
        }

        await this.forget();
    }

    async forget(): Promise<void> {
        this.state = null;
        this.loaded = true;
        await this.store.clear();
        this.client.clearCache();
        this.announce(false);
    }

    private refresh(): Promise<string | null> {
        if (this.refreshing) return this.refreshing;

        const run = this.performRefresh().finally(() => {
            this.refreshing = null;
        });
        this.refreshing = run;

        return run;
    }

    private async performRefresh(): Promise<string | null> {
        const current = this.state;

        if (!current) return null;

        try {
            const { data } = await this.client.request<TokenPair>({
                method: 'POST',
                path: '/auth/refresh',
                body: { refresh_token: current.refresh_token },
            });
            const session = await this.adopt(data);

            return session.access_token;
        } catch (error) {
            if (isApiError(error) && FATAL_REFRESH_CODES.has(error.code)) {
                this.logger.warn('session ended by the API', { code: error.code });
                await this.forget();

                return null;
            }

            throw error instanceof ApiError
                ? error
                : new ApiError({
                      status: 503,
                      code: 'DEPENDENCY_UNAVAILABLE',
                      message: 'The session could not be refreshed.',
                  });
        }
    }

    private announce(authenticated: boolean): void {
        if (this.announced === authenticated) return;

        this.announced = authenticated;

        for (const listener of this.listeners) listener(authenticated);
    }
}
