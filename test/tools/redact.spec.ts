import { type BookingResource, type UserResource } from '../../src/api/contracts.js';
import { maskEmail, maskPhone, redactBooking, redactUser } from '../../src/mapping/redact.js';

const booking = {
    id: 'booking-1',
    service_id: 'service-1',
    organization_id: 'organization-1',
    option_id: 'option-1',
    slot_id: 'slot-1',
    child_type: 'date_time',
    service_label: 'X-ray',
    date: '2026-10-01',
    time: '14:00',
    starts_at: '2026-10-01T12:00:00Z',
    cancel_deadline_at: '2026-09-30T12:00:00Z',
    user_id: 'user-1',
    person: 'Alex Schmidt',
    phone: '491701234567',
    info: 'by the side entrance',
    fields: { insurance_number: 'A123456789', surname: 'Schmidt' },
    documents: ['passport'],
    status: 'confirmed',
    confirmed_at: null,
    finished_at: null,
    created_at: '2026-09-20T09:00:00Z',
} as unknown as BookingResource;

describe('redactBooking', () => {
    it('keeps the answers out and the keys in', () => {
        const view = redactBooking(booking, { pii: false });

        expect(view.form_field_keys).toEqual(['insurance_number', 'surname']);
        expect(view.fields).toBeUndefined();
        expect(view.person).toBeUndefined();
        expect(view.phone).toBeUndefined();
        expect(JSON.stringify(view)).not.toContain('A123456789');
        expect(JSON.stringify(view)).not.toContain('Alex Schmidt');
    });

    it('keeps the instants, which are what the person is told', () => {
        const view = redactBooking(booking, { pii: false });

        expect(view.starts_at).toBe('2026-10-01T12:00:00Z');
        expect(view.cancel_deadline_at).toBe('2026-09-30T12:00:00Z');
    });

    it('opens up only when SMART_CITY_MCP_PII says so', () => {
        const view = redactBooking(booking, { pii: true });

        expect(view.person).toBe('Alex Schmidt');
        expect(view.fields).toEqual(booking.fields);
    });

    it('explains a slot type that has no clock time', () => {
        const view = redactBooking({ ...booking, child_type: 'apply' }, { pii: false });

        expect(view.note).toMatch(/Application/);
    });
});

describe('masking', () => {
    it('leaves only the last four digits of a phone number', () => {
        expect(maskPhone('491701234567')).toBe('••••4567');
        expect(maskPhone('123')).toBe('••••');
        expect(maskPhone(undefined)).toBeUndefined();
    });

    it('keeps the domain of an e-mail and nothing else', () => {
        expect(maskEmail('alex.schmidt@example.com')).toBe('a•••@example.com');
        expect(maskEmail('broken')).toBe('•••');
    });

    it('masks the account by default', () => {
        const user = {
            id: 'user-1',
            role: 'common-user',
            name: 'Alex',
            phone: '491701234567',
            email: 'alex@example.com',
            organization_ids: [],
            created_at: '2026-01-01T00:00:00Z',
            updated_at: '2026-01-01T00:00:00Z',
        } as unknown as UserResource;

        expect(redactUser(user, { pii: false }).phone).toBe('••••4567');
        expect(redactUser(user, { pii: true }).phone).toBe('491701234567');
    });
});
