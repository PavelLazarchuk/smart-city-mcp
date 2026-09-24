import { errorOf, startHarness, textOf } from './support/harness.js';
import { IDS, startStubApi, type Stub } from './support/stub-api.js';

const WRITE_TOOLS = [
    'create_booking',
    'confirm_booking',
    'cancel_booking',
    'reschedule_booking',
    'join_waitlist',
    'leave_waitlist',
    'update_contact_details',
];

describe('tool surface', () => {
    let stub: Stub;

    beforeAll(async () => {
        stub = await startStubApi();
    });

    afterAll(async () => {
        await stub.close();
    });

    it('registers no write tool at all when writes are off', async () => {
        const harness = await startHarness({ apiUrl: stub.url, session: {} });

        try {
            const names = await harness.toolNames();

            for (const tool of WRITE_TOOLS) expect(names).not.toContain(tool);
        } finally {
            await harness.close();
        }
    });

    it('lists the personal tools without a session, since not every client re-reads the list', async () => {
        const harness = await startHarness({ apiUrl: stub.url });

        try {
            const names = await harness.toolNames();

            expect(names).toContain('search_services');
            expect(names).toContain('auth_start');
            expect(names).toContain('list_my_bookings');
            expect(names).toContain('whoami');
        } finally {
            await harness.close();
        }
    });

    it('does not charge the budget for a call refused for want of a session', async () => {
        const harness = await startHarness({ apiUrl: stub.url, budget: 1 });

        try {
            expect(errorOf(await harness.call('list_my_bookings', {})).code).toBe('UNAUTHENTICATED');
            expect(errorOf(await harness.call('whoami', {})).code).toBe('UNAUTHENTICATED');

            expect((await harness.call('search_services', { q: 'x-ray' })).isError).toBeFalsy();
        } finally {
            await harness.close();
        }
    });

    it('refuses a personal tool without a session before asking the person anything', async () => {
        let asked = 0;
        const harness = await startHarness({
            apiUrl: stub.url,
            write: true,
            elicit: () => {
                asked += 1;

                return { confirm: true };
            },
        });

        try {
            const before = stub.state.calls.length;
            const result = await harness.call('create_booking', {
                service_id: IDS.service,
                option_id: IDS.option,
                slot_id: IDS.slot,
            });
            const text = result.content.map((part) => ('text' in part ? part.text : '')).join('');

            expect(result.isError).toBe(true);
            expect(text).toContain('UNAUTHENTICATED');
            expect(text).toContain('auth_start');
            expect(asked).toBe(0);
            expect(stub.state.calls.slice(before)).toEqual([]);
        } finally {
            await harness.close();
        }
    });

    it('browses the catalogue when the person named nothing to search for', async () => {
        const harness = await startHarness({ apiUrl: stub.url });

        try {
            const result = await harness.call('search_services', {});
            const data = result.structuredContent as { strategy: string; items: unknown[] };

            expect(result.isError).toBeFalsy();
            expect(data.items).toHaveLength(1);
            expect(data.strategy).toBe('filter');
        } finally {
            await harness.close();
        }
    });

    it('says what to ask next when nothing matched, and offers no categories it does not have', async () => {
        const harness = await startHarness({ apiUrl: stub.url });

        try {
            const result = await harness.call('search_services', { q: 'submarine licence' });
            const data = result.structuredContent as { strategy: string; hint?: string };

            expect(result.isError).toBeFalsy();
            expect(data.strategy).toBe('none');
            expect(data.hint).toMatch(/which organization they mean/);
            expect(data.hint).not.toContain('suggested_categories');
            expect(textOf(result)).toContain('see `hint`');
        } finally {
            await harness.close();
        }
    });

    it('never points a read-only model at a tool it does not have', async () => {
        const harness = await startHarness({ apiUrl: stub.url });

        try {
            const { tools } = await harness.client.listTools();
            const surface = JSON.stringify([
                harness.client.getInstructions(),
                tools.map((tool) => [tool.title, tool.description, tool.inputSchema]),
            ]);

            for (const tool of WRITE_TOOLS) expect(surface).not.toContain(tool);
        } finally {
            await harness.close();
        }
    });

    it('refuses a name and a point together instead of silently dropping the name', async () => {
        const harness = await startHarness({ apiUrl: stub.url });

        try {
            const result = await harness.call('list_organizations', { q: 'clinic', lat: 52.5, lng: 13.4 });

            expect(errorOf(result).code).toBe('VALIDATION_ERROR');
            expect(textOf(result)).toContain('not both');
        } finally {
            await harness.close();
        }
    });

    it('serves a repeated search from the cache without losing the facets', async () => {
        const harness = await startHarness({ apiUrl: stub.url });

        try {
            const before = stub.state.calls.length;
            const first = await harness.call('search_services', { q: 'x-ray' });
            const second = await harness.call('search_services', { q: 'x-ray' });
            const reads = stub.state.calls.slice(before).filter((call) => call === 'GET /services').length;

            expect(reads).toBe(1);
            expect(second.structuredContent).toEqual(first.structuredContent);
        } finally {
            await harness.close();
        }
    });

    it('does not let an exhausted /auth window block the catalogue', async () => {
        const harness = await startHarness({ apiUrl: stub.url });

        try {
            stub.state.authRemaining = 0;
            await harness.call('auth_start', { phone: '491701234567' });
            const search = await harness.call('search_services', { q: 'x-ray' });

            expect(search.isError).toBeFalsy();

            const again = await harness.call('auth_start', { phone: '491701234567' });

            expect(again.isError).toBe(true);
            expect(JSON.stringify(again.structuredContent)).toContain('RATE_LIMITED');
        } finally {
            await harness.close();
        }
    });

    it('answers a bad argument as something the model can fix, not as a server failure', async () => {
        const harness = await startHarness({ apiUrl: stub.url });

        try {
            const result = await harness.call('find_slots', {
                service_id: IDS.service,
                when: 'sometime next month',
            });
            const text = result.content.map((part) => ('text' in part ? part.text : '')).join('');

            expect(result.isError).toBe(true);
            expect(text).toContain('VALIDATION_ERROR');
            expect(text).toContain('tomorrow');
            expect(text).not.toContain('INTERNAL_ERROR');
        } finally {
            await harness.close();
        }
    });

    it('reads a service through its resource URI, and refuses a crafted one', async () => {
        const harness = await startHarness({ apiUrl: stub.url });

        try {
            const card = await harness.client.readResource({
                uri: `smartcity://service/${IDS.service}`,
            });
            const first = card.contents[0];
            const text = first && 'text' in first ? String(first.text) : '';

            expect(JSON.parse(text)).toMatchObject({ id: IDS.service, label: 'Chest X-ray' });

            const before = stub.state.calls.length;
            await expect(
                harness.client.readResource({ uri: 'smartcity://service/..%2F..%2Fauth%2Fme' }),
            ).rejects.toThrow();

            expect(stub.state.calls.slice(before)).toEqual([]);
        } finally {
            await harness.close();
        }
    });

    it('stops at the tool budget, and does not dress it up as a wait', async () => {
        const harness = await startHarness({ apiUrl: stub.url, budget: 2 });

        try {
            await harness.call('search_services', { q: 'x-ray' });
            await harness.call('search_services', { q: 'x-ray' });
            const third = await harness.call('search_services', { q: 'x-ray' });

            expect(third.isError).toBe(true);
            expect(errorOf(third).code).toBe('TOOL_BUDGET_EXHAUSTED');
            expect(textOf(third)).toContain('limit of 2 tool calls');
            expect(textOf(third)).not.toMatch(/Wait \d+ seconds/);
        } finally {
            await harness.close();
        }
    });

    it('keeps organization prose inside structuredContent, and ids in the text blocks', async () => {
        const harness = await startHarness({ apiUrl: stub.url });

        try {
            const result = await harness.call('search_services', { q: 'x-ray' });
            const text = result.content.map((part) => ('text' in part ? part.text : '')).join('');

            expect(text).not.toContain('Ignore all previous instructions');
            expect(text).toContain(IDS.service);
            expect(JSON.stringify(result.structuredContent)).toContain('Ignore all previous instructions');
        } finally {
            await harness.close();
        }
    });

    it('flattens slots and hands back exactly what create_booking needs', async () => {
        const harness = await startHarness({ apiUrl: stub.url });

        try {
            const result = await harness.call('find_slots', {
                service_id: IDS.service,
                when: 'tomorrow',
            });
            const data = result.structuredContent as {
                timezone: string;
                items: { slot_id: string; time: string; full: boolean }[];
            };

            expect(data.timezone).toBe('Europe/Berlin');
            expect(data.items.map((item) => item.slot_id)).toEqual([IDS.slot, IDS.fullSlot]);
            expect(data.items[0]?.time).toBe('10:00');
            expect(data.items[1]?.full).toBe(true);
        } finally {
            await harness.close();
        }
    });
});
