import { readFile } from 'node:fs/promises';

import { errorOf, startHarness, textOf } from './support/harness.js';
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
        } finally {
            await harness.close();
        }
    });

    it('refuses the personal tools again after signing out', async () => {
        const harness = await startHarness({ apiUrl: stub.url, session: {} });

        try {
            expect((await harness.call('list_my_bookings', {})).isError).toBeFalsy();
            await harness.call('logout', {});

            expect(errorOf(await harness.call('list_my_bookings', {})).code).toBe('UNAUTHENTICATED');
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
            expect(textOf(result)).not.toMatch(/Wait \d+ seconds/);
        } finally {
            await harness.close();
        }
    });

    it('lets the app ask for the code when it can', async () => {
        const harness = await startHarness({ apiUrl: stub.url, elicit: () => ({ code: '123456' }) });

        try {
            const started = await harness.call('auth_start', { phone: '491701234567' });

            expect(textOf(started)).toContain('Call auth_confirm now without `code`');
        } finally {
            await harness.close();
        }
    });

    it('has the model ask for the code when the app cannot, and takes it as typed', async () => {
        const harness = await startHarness({ apiUrl: stub.url });

        try {
            const started = await harness.call('auth_start', { phone: '491701234567' });

            expect(textOf(started)).toContain('Ask the person for the code from the SMS');

            const empty = await harness.call('auth_confirm', {});

            expect(errorOf(empty).code).toBe('CODE_REQUIRED');
            expect(textOf(empty)).toContain('ask the person for the code');

            const confirmed = await harness.call('auth_confirm', { code: '123 456' });

            expect(confirmed.isError).toBeFalsy();
            expect(textOf(confirmed)).toContain('Signed in as Alex.');
        } finally {
            await harness.close();
        }
    });

    it('reads a closed code prompt as a cancelled sign-in', async () => {
        const harness = await startHarness({ apiUrl: stub.url, elicit: () => null });

        try {
            await harness.call('auth_start', { phone: '491701234567' });
            const result = await harness.call('auth_confirm', {});

            expect(errorOf(result).code).toBe('SIGN_IN_CANCELLED');
            expect(textOf(result)).toContain('call auth_confirm again');
        } finally {
            await harness.close();
        }
    });

    it('asks for a name when the account has none, since a booking carries one', async () => {
        stub.state.userName = '';
        const harness = await startHarness({ apiUrl: stub.url, write: true });

        try {
            await harness.call('auth_start', { phone: '491701234567' });
            const confirmed = await harness.call('auth_confirm', { code: '123456' });

            expect(confirmed.isError).toBeFalsy();
            expect(textOf(confirmed)).toContain('ask the person for their name');
            expect(textOf(confirmed)).toContain('update_contact_details');
        } finally {
            await harness.close();
        }
    });
});
