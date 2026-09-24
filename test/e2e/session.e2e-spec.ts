import { readFile } from 'node:fs/promises';

import { errorOf, startHarness } from './support/harness.js';
import { startStubApi, type Stub } from './support/stub-api.js';

function refreshCalls(stub: Stub): number {
    return stub.state.calls.filter((call) => call === 'POST /auth/refresh').length;
}

describe('session handling', () => {
    let stub: Stub;

    beforeEach(async () => {
        stub = await startStubApi();
    });

    afterEach(async () => {
        await stub.close();
    });

    it('refreshes once for four tools racing on an expired access token', async () => {
        const harness = await startHarness({
            apiUrl: stub.url,
            session: { access_token: 'access-old', expires_at: Date.now() - 1_000 },
        });

        try {
            const results = await Promise.all([
                harness.call('whoami', {}),
                harness.call('list_my_bookings', {}),
                harness.call('list_my_waitlist', {}),
                harness.call('whoami', {}),
            ]);

            for (const result of results) expect(result.isError).toBeFalsy();

            expect(refreshCalls(stub)).toBe(1);
            expect(stub.state.familyRevoked).toBe(false);
        } finally {
            await harness.close();
        }
    });

    it('refreshes once when four tools hit 401 TOKEN_EXPIRED together', async () => {
        stub.state.expiredAccessTokens.add('access-stale');
        const harness = await startHarness({
            apiUrl: stub.url,
            session: { access_token: 'access-stale', expires_at: Date.now() + 600_000 },
        });

        try {
            const results = await Promise.all([
                harness.call('whoami', {}),
                harness.call('list_my_bookings', {}),
                harness.call('list_my_waitlist', {}),
                harness.call('whoami', {}),
            ]);

            for (const result of results) expect(result.isError).toBeFalsy();

            expect(refreshCalls(stub)).toBe(1);
            expect(stub.state.familyRevoked).toBe(false);
        } finally {
            await harness.close();
        }
    });

    it('drops the stored session when the API reports a reused refresh token', async () => {
        stub.state.refreshOutcome = 'reused';
        const harness = await startHarness({
            apiUrl: stub.url,
            session: { expires_at: Date.now() - 1_000 },
        });

        try {
            const result = await harness.call('whoami', {});

            expect(result.isError).toBe(true);
            expect(errorOf(result).code).toBe('UNAUTHENTICATED');
            expect(errorOf(result).next_steps.join(' ')).toContain('auth_start');
            await expect(readFile(harness.sessionPath, 'utf8')).rejects.toMatchObject({ code: 'ENOENT' });
            expect(await harness.toolNames()).not.toContain('whoami');
        } finally {
            await harness.close();
        }
    });

    it('hides the personal tools again after signing out', async () => {
        const harness = await startHarness({ apiUrl: stub.url, session: {} });

        try {
            expect(await harness.toolNames()).toContain('list_my_bookings');
            await harness.call('logout', {});

            expect(await harness.toolNames()).not.toContain('list_my_bookings');
            await expect(readFile(harness.sessionPath, 'utf8')).rejects.toMatchObject({ code: 'ENOENT' });
        } finally {
            await harness.close();
        }
    });

    it('never lets a token out through a tool result', async () => {
        const harness = await startHarness({
            apiUrl: stub.url,
            elicit: () => ({ code: '123456', name: 'Alex' }),
        });

        try {
            await harness.call('auth_start', { phone: '491701234567' });
            const confirmed = await harness.call('auth_confirm', {});
            const stored = JSON.parse(await readFile(harness.sessionPath, 'utf8')) as {
                access_token: string;
            };
            const rendered = JSON.stringify(confirmed);

            expect(confirmed.isError).toBeFalsy();
            expect(rendered).not.toContain(stored.access_token);
            expect(rendered).not.toContain('refresh-');
            expect(rendered).not.toContain('491701234567');
        } finally {
            await harness.close();
        }
    });

    it('tells the model to ask again rather than resend a code after a wrong one', async () => {
        const harness = await startHarness({
            apiUrl: stub.url,
            elicit: () => ({ code: '000000' }),
        });

        try {
            await harness.call('auth_start', { phone: '491701234567' });
            const result = await harness.call('auth_confirm', {});

            expect(errorOf(result).code).toBe('OTP_INVALID');
            expect(errorOf(result).next_steps.join(' ')).toContain('do not request a new code');
        } finally {
            await harness.close();
        }
    });
});
