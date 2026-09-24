import { startHarness, structured, type Harness } from './support/harness.js';

const apiUrl = process.env['SMART_CITY_E2E_API_URL'];
const serviceId = process.env['SMART_CITY_E2E_SERVICE_ID'];
const accessToken = process.env['SMART_CITY_E2E_ACCESS_TOKEN'];
const refreshToken = process.env['SMART_CITY_E2E_REFRESH_TOKEN'];

const live = apiUrl ? describe : describe.skip;
const withService = apiUrl && serviceId ? it : it.skip;
const withSession = apiUrl && accessToken && refreshToken ? it : it.skip;

live('against a live API', () => {
    let harness: Harness;

    beforeAll(async () => {
        harness = await startHarness({
            apiUrl: apiUrl!,
            session:
                accessToken && refreshToken
                    ? {
                          access_token: accessToken,
                          refresh_token: refreshToken,
                          expires_at: Date.now() + 60_000,
                          user: { id: 'live', role: 'common-user' },
                      }
                    : undefined,
        });
    });

    afterAll(async () => {
        await harness.close();
    });

    it('accepts the sparse field lists and includes this server sends', async () => {
        const result = await harness.call('search_services', { limit: 3 });

        expect(result.isError).toBeFalsy();

        const data = structured<{ items: Record<string, unknown>[] }>(result);

        for (const item of data.items) expect(item).not.toHaveProperty('options');
    });

    it('reads organizations, news and info sections', async () => {
        for (const tool of ['list_organizations', 'list_news', 'get_info_sections']) {
            const result = await harness.call(tool, { limit: 3 });

            expect({ tool, error: result.isError ?? false }).toEqual({ tool, error: false });
        }
    });

    withService('flattens real slots into bookable candidates', async () => {
        const detail = await harness.call('get_service', { service_id: serviceId! });

        expect(detail.isError).toBeFalsy();

        const slots = await harness.call('find_slots', { service_id: serviceId! });

        expect(slots.isError).toBeFalsy();

        const data = structured<{
            timezone: string;
            items: { child_type: string; starts_at: string | null }[];
        }>(slots);

        expect(data.timezone).toMatch(/^[A-Za-z]+(\/[A-Za-z_+-]+)*$/);

        for (const item of data.items) {
            expect(['date_time', 'date', 'apply']).toContain(item.child_type);

            if (item.starts_at) expect(Date.parse(item.starts_at)).toBeGreaterThan(Date.now());
        }
    });

    withSession('reads the account and its bookings without leaking the phone number', async () => {
        const me = await harness.call('whoami', {});

        expect(me.isError).toBeFalsy();
        expect(JSON.stringify(me)).toMatch(/••••|"phone":null|^(?!.*"phone")/s);

        const mine = await harness.call('list_my_bookings', {});

        expect(mine.isError).toBeFalsy();
        expect(JSON.stringify(mine)).not.toContain('"person"');
    });
});
