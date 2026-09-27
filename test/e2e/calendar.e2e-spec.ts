import { errorOf, startHarness, structured, textOf } from './support/harness.js';
import { IDS, startStubApi, type Stub } from './support/stub-api.js';

const BOOKING_ID = '77777777-7777-4777-8777-777777777777';
const APPLY_BOOKING_ID = '88888888-8888-4888-8888-888888888888';

function seedBookings(stub: Stub): void {
    const base = {
        service_id: IDS.service,
        organization_id: IDS.organization,
        option_id: IDS.option,
        slot_id: IDS.slot,
        service_label: 'Chest X-ray',
        date: null,
        time: null,
        starts_at: null,
        cancel_deadline_at: null,
        user_id: IDS.user,
        person: 'Alex',
        phone: '491701234567',
        info: '',
        fields: {},
        documents: [],
        status: 'confirmed',
        confirmed_at: null,
        finished_at: null,
        created_at: '2026-01-01T00:00:00Z',
    };
    stub.state.bookings.push(
        { ...base, id: BOOKING_ID, child_type: 'date_time', created_by: '64b7f0c2a1b2c3d4e5f6aaaa' },
        { ...base, id: APPLY_BOOKING_ID, child_type: 'apply', created_by: IDS.user },
    );
}

describe('calendar', () => {
    let stub: Stub;

    beforeEach(async () => {
        stub = await startStubApi();
        seedBookings(stub);
    });

    afterEach(async () => {
        await stub.close();
    });

    it('hands a booking over as an .ics attachment', async () => {
        const harness = await startHarness({ apiUrl: stub.url, session: {} });

        try {
            const result = await harness.call('get_booking_calendar', { booking_id: BOOKING_ID });
            const data = structured<{ ics: string; mime_type: string; uri: string }>(result);
            const attachment = result.content.find((part) => part.type === 'resource');

            expect(result.isError).toBeFalsy();
            expect(data.ics).toContain('BEGIN:VCALENDAR');
            expect(data.mime_type).toBe('text/calendar');
            expect(attachment).toMatchObject({
                resource: { uri: data.uri, mimeType: 'text/calendar', text: data.ics },
            });
        } finally {
            await harness.close();
        }
    });

    it('serves the same file through its resource URI once signed in', async () => {
        const harness = await startHarness({ apiUrl: stub.url, session: {} });

        try {
            const read = await harness.client.readResource({
                uri: `smartcity://me/bookings/${BOOKING_ID}/calendar.ics`,
            });
            const first = read.contents[0];

            expect(first && 'text' in first ? String(first.text) : '').toContain('BEGIN:VEVENT');
        } finally {
            await harness.close();
        }
    });

    it('refuses the calendar resource without a session and without calling the API', async () => {
        const harness = await startHarness({ apiUrl: stub.url });

        try {
            const before = stub.state.calls.length;

            await expect(
                harness.client.readResource({ uri: `smartcity://me/bookings/${BOOKING_ID}/calendar.ics` }),
            ).rejects.toThrow();
            expect(stub.state.calls.slice(before)).toEqual([]);
        } finally {
            await harness.close();
        }
    });

    it('explains that an undated booking has nothing to put in a calendar', async () => {
        const harness = await startHarness({ apiUrl: stub.url, session: {} });

        try {
            const result = await harness.call('get_booking_calendar', { booking_id: APPLY_BOOKING_ID });

            expect(errorOf(result).code).toBe('BOOKING_NOT_DATED');
            expect(textOf(result)).toContain('schedules it later');
        } finally {
            await harness.close();
        }
    });

    it('marks a booking the staff made for the person', async () => {
        const harness = await startHarness({ apiUrl: stub.url, session: {} });

        try {
            const listed = structured<{ items: { id: string; booked_by_staff?: boolean }[] }>(
                await harness.call('list_my_bookings', {}),
            );

            expect(listed.items.find((item) => item.id === BOOKING_ID)?.booked_by_staff).toBe(true);
            expect(
                listed.items.find((item) => item.id === APPLY_BOOKING_ID)?.booked_by_staff,
            ).toBeUndefined();
        } finally {
            await harness.close();
        }
    });

    it('builds the subscription link on the configured API base and revokes it', async () => {
        const harness = await startHarness({
            apiUrl: stub.url,
            write: true,
            session: {},
            elicit: () => ({ confirm: true }),
        });

        try {
            const created = structured<{ url: string; webcal_url: string }>(
                await harness.call('create_calendar_link', {}),
            );
            const token = stub.state.calendarToken ?? '';

            expect(token).not.toBe('');
            expect(created.url).toBe(`${stub.url}/me/bookings.ics?token=${token}`);
            expect(created.webcal_url).toBe(created.url.replace(/^http:/, 'webcal:'));

            const revoked = await harness.call('revoke_calendar_link', {});

            expect(revoked.isError).toBeFalsy();
            expect(stub.state.calendarToken).toBeNull();
        } finally {
            await harness.close();
        }
    });
});
