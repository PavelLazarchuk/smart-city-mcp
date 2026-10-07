import { type ServiceSlots, type SlotCandidate } from '../../src/api/contracts.js';
import { flattenSlots, openingFor, rangeProblem } from '../../src/mapping/slots.js';

const NOW = new Date('2026-10-01T08:00:00Z');

function candidate(overrides: Partial<SlotCandidate>): SlotCandidate {
    return {
        option_id: 'option-1',
        option_label: 'Consultation',
        service_type: 'service_apply',
        slot_id: 'slot-1',
        slot_label: 'Slot',
        child_type: 'date_time',
        date: '2026-10-01',
        time: '14:00',
        starts_at: '2026-10-01T14:00:00+02:00',
        ends_at: '2026-10-01T14:30:00+02:00',
        limit: 3,
        booked_count: 0,
        available: 3,
        ...overrides,
    };
}

function response(items: SlotCandidate[], total = items.length): ServiceSlots {
    return {
        service_id: 'service-1',
        organization_id: 'organization-1',
        timezone: 'Europe/Berlin',
        from: '2026-10-01',
        to: '2026-10-31',
        total,
        items,
    };
}

describe('flattenSlots', () => {
    it('drops slot types that cannot be booked at all', () => {
        const result = flattenSlots(
            response([candidate({}), candidate({ slot_id: 'slot-2', child_type: 'pickup' })]),
            { now: NOW },
        );

        expect(result.items).toHaveLength(1);
        expect(result.dropped.not_bookable).toBe(1);
    });

    it('drops a date_time entry without a time, which the API would refuse anyway', () => {
        const result = flattenSlots(response([candidate({ time: null })]), { now: NOW });

        expect(result.items).toEqual([]);
        expect(result.dropped.not_bookable).toBe(1);
    });

    it('drops times that already passed today', () => {
        const result = flattenSlots(
            response([
                candidate({ slot_id: 'past', starts_at: '2026-10-01T09:00:00+02:00', time: '09:00' }),
                candidate({}),
            ]),
            { now: NOW },
        );

        expect(result.items.map((item) => item.slot_id)).toEqual(['slot-1']);
        expect(result.dropped.past).toBe(1);
    });

    it('applies lead_time_minutes before the person is offered the slot', () => {
        const soon = candidate({ slot_id: 'soon', starts_at: '2026-10-01T10:30:00+02:00', time: '10:30' });
        const result = flattenSlots(response([soon, candidate({})]), {
            now: NOW,
            policy: {
                lead_time_minutes: 120,
                max_active_per_user: null,
                max_advance_days: null,
                cancel_deadline_minutes: null,
                late_cancel: 'forbid',
                requires_confirmation: false,
                no_show_limit: null,
                no_show_window_days: null,
                no_show_suspension_days: null,
                min_interval_days: null,
                no_show_after_minutes: null,
            },
        });

        expect(result.items.map((item) => item.slot_id)).toEqual(['slot-1']);
        expect(result.dropped.lead_time).toBe(1);
    });

    it('filters by part of day in the organization zone', () => {
        const morning = candidate({
            slot_id: 'morning',
            starts_at: '2026-10-01T11:00:00+02:00',
            time: '11:00',
        });
        const result = flattenSlots(response([morning, candidate({})]), {
            now: NOW,
            partOfDay: 'morning',
        });

        expect(result.items.map((item) => item.slot_id)).toEqual(['morning']);
        expect(result.dropped.part_of_day).toBe(1);
    });

    it("keeps today's whole-day slot, which the API still accepts", () => {
        const wholeDay = candidate({
            slot_id: 'today',
            child_type: 'date',
            time: null,
            starts_at: '2026-10-01T00:00:00+02:00',
            ends_at: null,
        });
        const result = flattenSlots(response([wholeDay]), { now: NOW });

        expect(result.items.map((item) => item.slot_id)).toEqual(['today']);
        expect(result.items[0]?.note).toMatch(/Whole day/);
    });

    it('skips the lead time when the service sets none, rather than treating it as zero', () => {
        const wholeDay = candidate({
            slot_id: 'today',
            child_type: 'date',
            time: null,
            starts_at: '2026-10-01T00:00:00+02:00',
            ends_at: null,
        });
        const withLeadTime = flattenSlots(response([wholeDay]), {
            now: NOW,
            policy: {
                lead_time_minutes: 60,
                max_active_per_user: null,
                max_advance_days: null,
                cancel_deadline_minutes: null,
                late_cancel: 'forbid',
                requires_confirmation: false,
                no_show_limit: null,
                no_show_window_days: null,
                no_show_suspension_days: null,
                min_interval_days: null,
                no_show_after_minutes: null,
            },
        });

        expect(withLeadTime.items).toEqual([]);
        expect(withLeadTime.dropped.lead_time).toBe(1);
    });

    it('does not judge a whole-day slot by the part of day', () => {
        const wholeDay = candidate({
            slot_id: 'whole',
            child_type: 'date',
            time: null,
            starts_at: '2026-10-02T00:00:00+02:00',
            ends_at: null,
        });
        const result = flattenSlots(response([wholeDay]), { now: NOW, partOfDay: 'evening' });

        expect(result.items.map((item) => item.slot_id)).toEqual(['whole']);
        expect(result.dropped.part_of_day).toBe(0);
    });

    it('keeps a full slot and marks it, because that is the way into the waitlist', () => {
        const result = flattenSlots(response([candidate({ available: 0, booked_count: 3 })]), { now: NOW });

        expect(result.items[0]?.full).toBe(true);
    });

    it('treats a null limit as "no cap", not as "no places"', () => {
        const result = flattenSlots(response([candidate({ limit: null, available: null })]), { now: NOW });

        expect(result.items[0]?.full).toBe(false);
        expect(result.items[0]?.available).toBeNull();
    });

    it('sorts by start and puts dateless applications last', () => {
        const apply = candidate({
            slot_id: 'apply',
            child_type: 'apply',
            date: null,
            time: null,
            starts_at: null,
            ends_at: null,
        });
        const later = candidate({ slot_id: 'later', starts_at: '2026-10-02T09:00:00+02:00', time: '09:00' });
        const result = flattenSlots(response([apply, later, candidate({})]), { now: NOW });

        expect(result.items.map((item) => item.slot_id)).toEqual(['slot-1', 'later', 'apply']);
        expect(result.items[2]?.note).toMatch(/Application/);
    });

    it('drops a callback window without a time, which the API would refuse anyway', () => {
        const result = flattenSlots(response([candidate({ child_type: 'callback', time: null })]), {
            now: NOW,
        });

        expect(result.dropped.not_bookable).toBe(1);
    });

    it('describes a callback window and flags a visit that needs an address', () => {
        const result = flattenSlots(
            response([candidate({ child_type: 'callback', service_type: 'service_visit' })]),
            { now: NOW },
        );

        expect(result.items[0]).toMatchObject({ needs_address: true, note: expect.stringMatching(/phones/) });
    });

    describe('time_range', () => {
        const opening = (overrides: Partial<SlotCandidate> = {}): SlotCandidate =>
            candidate({
                child_type: 'time_range',
                time: '08:00',
                starts_at: '2026-10-02T08:00:00+02:00',
                ends_at: '2026-10-02T14:00:00+02:00',
                date: '2026-10-02',
                limit: 1,
                available: 1,
                range: { step_minutes: 30, min_minutes: 60, max_minutes: null },
                ...overrides,
            });

        it('offers the free interval with the bounds to choose from', () => {
            const result = flattenSlots(response([opening()]), { now: NOW });

            expect(result.items[0]).toMatchObject({
                time: '08:00',
                starts_at: '2026-10-02T08:00:00+02:00',
                range: { from: '08:00', to: '14:00', step_minutes: 30, min_minutes: 60, max_minutes: null },
                full: false,
            });
        });

        it('starts the interval at the part of day instead of dropping it', () => {
            const result = flattenSlots(response([opening()]), { now: NOW, partOfDay: 'afternoon' });

            expect(result.items[0]).toMatchObject({
                time: '12:00',
                starts_at: '2026-10-02T12:00:00+02:00',
                range: { from: '12:00', to: '14:00' },
            });
        });

        it('drops the interval when too little of it is left in the part of day', () => {
            const result = flattenSlots(response([opening()]), { now: NOW, partOfDay: 'evening' });

            expect(result.items).toEqual([]);
            expect(result.dropped.part_of_day).toBe(1);
        });

        it('moves the start past the lead time onto the next step of the grid', () => {
            const today = opening({
                date: '2026-10-01',
                starts_at: '2026-10-01T10:00:00+02:00',
                ends_at: '2026-10-01T14:00:00+02:00',
                time: '10:00',
            });
            const result = flattenSlots(response([today]), {
                now: NOW,
                policy: {
                    lead_time_minutes: 100,
                    max_active_per_user: null,
                    max_advance_days: null,
                    cancel_deadline_minutes: null,
                    late_cancel: 'forbid',
                    requires_confirmation: false,
                    no_show_limit: null,
                    no_show_window_days: null,
                    no_show_suspension_days: null,
                    min_interval_days: null,
                    no_show_after_minutes: null,
                },
            });

            expect(result.items[0]).toMatchObject({ time: '12:00', range: { from: '12:00', to: '14:00' } });
        });

        it('counts an interval the lead time leaves too short as a lead-time drop', () => {
            const today = opening({
                date: '2026-10-01',
                starts_at: '2026-10-01T10:00:00+02:00',
                ends_at: '2026-10-01T12:00:00+02:00',
                time: '10:00',
            });
            const result = flattenSlots(response([today]), {
                now: NOW,
                policy: {
                    lead_time_minutes: 100,
                    max_active_per_user: null,
                    max_advance_days: null,
                    cancel_deadline_minutes: null,
                    late_cancel: 'forbid',
                    requires_confirmation: false,
                    no_show_limit: null,
                    no_show_window_days: null,
                    no_show_suspension_days: null,
                    min_interval_days: null,
                    no_show_after_minutes: null,
                },
            });

            expect(result.items).toEqual([]);
            expect(result.dropped.lead_time).toBe(1);
        });

        it('finds the free interval that holds a chosen start and end, and checks the grid and length', () => {
            const windows = [
                opening({ time: '08:00', ends_at: '2026-10-02T10:00:00+02:00' }),
                opening({ time: '12:00', ends_at: '2026-10-02T14:00:00+02:00' }),
            ];

            expect(openingFor(windows, '12:30', '14:00')?.time).toBe('12:00');
            expect(openingFor(windows, '09:30', '12:30')).toBeUndefined();

            const second = windows[1]!;
            expect(rangeProblem(second, '12:00', '13:00')).toBeNull();
            expect(rangeProblem(second, '12:15', '13:15')).toMatch(/grid/);
            expect(rangeProblem(second, '12:00', '12:30')).toMatch(/at least 60/);
            expect(
                rangeProblem(
                    { ...second, range: { step_minutes: 30, min_minutes: 60, max_minutes: 60 } },
                    '12:00',
                    '13:30',
                ),
            ).toMatch(/at most 60/);
        });
    });

    it('trims the list and still reports how many matched', () => {
        const many = Array.from({ length: 12 }, (_unused, index) =>
            candidate({
                slot_id: `slot-${index}`,
                time: `1${index % 10}:00`,
                starts_at: `2026-10-0${(index % 5) + 2}T14:00:00+02:00`,
            }),
        );
        const result = flattenSlots(response(many, 40), { now: NOW, limit: 5 });

        expect(result.items).toHaveLength(5);
        expect(result.total_found).toBe(12);
        expect(result.truncated_by_api).toBe(true);
    });
});
