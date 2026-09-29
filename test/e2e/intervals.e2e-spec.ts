import { errorOf, startHarness, structured, type ElicitResponder } from './support/harness.js';
import { IDS, startStubApi, type Stub } from './support/stub-api.js';
import { dateOnlyIn, shiftDateOnly } from '../../src/mapping/time.js';

const rangeDay = (): string => shiftDateOnly(dateOnlyIn(new Date(), 'Europe/Berlin'), IDS.rangeSlotDays);

function answering(address: string | null, asked: string[] = []): ElicitResponder {
    return (message, schema) => {
        asked.push(message);
        const properties = Object.keys((schema as { properties?: Record<string, unknown> }).properties ?? {});

        if (properties.includes('confirm')) return { confirm: true };

        if (properties.includes('address')) return address === null ? null : { address };

        if (properties.includes('passport')) return { passport: true };

        if (properties.includes('insurance_number')) return { insurance_number: 'A1234567' };

        return {};
    };
}

const target = {
    service_id: IDS.service,
    option_id: IDS.visitOption,
    slot_id: IDS.rangeSlot,
};

describe('booking a free interval', () => {
    let stub: Stub;

    beforeEach(async () => {
        stub = await startStubApi();
    });

    afterEach(async () => {
        await stub.close();
    });

    it('offers free intervals with the bounds to choose from, clipped to the part of day', async () => {
        const harness = await startHarness({ apiUrl: stub.url });

        try {
            const whole = structured<{ items: Record<string, unknown>[] }>(
                await harness.call('find_slots', { service_id: IDS.service, when: rangeDay() }),
            );

            expect(whole.items).toEqual([
                expect.objectContaining({
                    child_type: 'time_range',
                    time: '09:00',
                    needs_address: true,
                    range: {
                        from: '09:00',
                        to: '12:00',
                        step_minutes: 30,
                        min_minutes: 60,
                        max_minutes: null,
                    },
                }),
                expect.objectContaining({ time: '14:00', range: expect.objectContaining({ to: '16:00' }) }),
            ]);

            const afternoon = structured<{ items: Record<string, unknown>[] }>(
                await harness.call('find_slots', {
                    service_id: IDS.service,
                    when: rangeDay(),
                    part_of_day: 'afternoon',
                }),
            );

            expect(afternoon.items.map((item) => item['time'])).toEqual(['14:00']);
        } finally {
            await harness.close();
        }
    });

    it('checks the chosen start and end against the interval before anything is sent', async () => {
        const harness = await startHarness({
            apiUrl: stub.url,
            write: true,
            session: {},
            elicit: answering('Main st. 1'),
        });

        try {
            const cases: [Record<string, unknown>, string][] = [
                [{ time: '09:00' }, 'SLOT_TIME_REQUIRED'],
                [{ time: '09:15', end_time: '10:15' }, 'SLOT_RANGE_INVALID'],
                [{ time: '09:00', end_time: '09:30' }, 'SLOT_RANGE_INVALID'],
                [{ time: '11:30', end_time: '14:30' }, 'SLOT_FULL'],
                [{ time: '10:00', end_time: '09:00' }, 'VALIDATION_ERROR'],
            ];

            for (const [times, code] of cases)
                expect(errorOf(await harness.call('create_booking', { ...target, ...times })).code).toBe(
                    code,
                );

            expect(
                errorOf(
                    await harness.call('create_booking', {
                        service_id: IDS.service,
                        option_id: IDS.option,
                        slot_id: IDS.slot,
                        time: '10:00',
                        end_time: '11:00',
                    }),
                ).code,
            ).toBe('VALIDATION_ERROR');
            expect(stub.state.calls).not.toContain(`POST /services/${IDS.service}/bookings`);
        } finally {
            await harness.close();
        }
    });

    it('asks the person for the address and books the chosen part of the interval', async () => {
        const asked: string[] = [];
        const harness = await startHarness({
            apiUrl: stub.url,
            write: true,
            session: {},
            elicit: answering('Main st. 1, apt. 5', asked),
        });

        try {
            const created = await harness.call('create_booking', {
                ...target,
                time: '09:30',
                end_time: '10:30',
            });

            expect(created.isError).toBeFalsy();
            expect(structured<{ starts_at: string; ends_at: string }>(created)).toMatchObject({
                starts_at: expect.stringContaining('T09:30:00'),
                ends_at: expect.stringContaining('T10:30:00'),
            });
            expect(stub.state.bookings[0]).toMatchObject({
                child_type: 'time_range',
                time: '09:30',
                end_time: '10:30',
                address: 'Main st. 1, apt. 5',
            });

            const summary = asked.find((message) => message.startsWith('Book this?')) ?? '';
            expect(summary).toContain('09:30–10:30');
            expect(summary).toContain('Visit to: Main st. 1, apt. 5');
        } finally {
            await harness.close();
        }
    });

    it('reports a repeated booking of the same interval as already existing', async () => {
        const harness = await startHarness({
            apiUrl: stub.url,
            write: true,
            session: {},
            elicit: answering('Main st. 1'),
        });

        try {
            const booking = { ...target, time: '09:30', end_time: '10:30', address: 'Main st. 1' };
            const first = await harness.call('create_booking', booking);
            const again = await harness.call('create_booking', booking);

            expect(first.isError).toBeFalsy();
            expect(structured<{ already_existed: boolean }>(again)).toMatchObject({
                already_existed: true,
                booking: {
                    booking_id: structured<{ booking: { booking_id: string } }>(first).booking.booking_id,
                },
            });
            expect(
                stub.state.calls.filter((call) => call === `POST /services/${IDS.service}/bookings`),
            ).toHaveLength(1);

            const overlap = await harness.call('create_booking', {
                ...booking,
                time: '10:00',
                end_time: '11:00',
            });
            expect(errorOf(overlap).code).toBe('SLOT_FULL');
        } finally {
            await harness.close();
        }
    });

    it('recognises a repeat and lets the booking shrink once the whole interval is booked', async () => {
        const harness = await startHarness({
            apiUrl: stub.url,
            write: true,
            session: {},
            elicit: answering('Main st. 1'),
        });

        try {
            const booking = { ...target, time: '14:00', end_time: '16:00', address: 'Main st. 1' };
            const first = structured<{ booking: { booking_id: string } }>(
                await harness.call('create_booking', booking),
            );
            const again = await harness.call('create_booking', booking);

            expect(structured<{ already_existed: boolean }>(again)).toMatchObject({
                already_existed: true,
                booking: { booking_id: first.booking.booking_id },
            });

            await harness.call('create_booking', { ...target, time: '09:00', end_time: '12:00' });
            const shrunk = await harness.call('reschedule_booking', {
                booking_id: first.booking.booking_id,
                slot_id: IDS.rangeSlot,
                time: '14:00',
                end_time: '15:00',
            });

            expect(shrunk.isError).toBeFalsy();
            expect(stub.state.reschedules).toEqual([
                { slot_id: IDS.rangeSlot, time: '14:00', end_time: '15:00' },
            ]);
        } finally {
            await harness.close();
        }
    });

    it('lets a booking grow into its own interval and keeps its address', async () => {
        const harness = await startHarness({
            apiUrl: stub.url,
            write: true,
            session: {},
            elicit: answering('Main st. 1'),
        });

        try {
            const created = structured<{ booking: { booking_id: string } }>(
                await harness.call('create_booking', { ...target, time: '09:30', end_time: '10:30' }),
            );
            const moved = await harness.call('reschedule_booking', {
                booking_id: created.booking.booking_id,
                slot_id: IDS.rangeSlot,
                time: '09:30',
                end_time: '11:00',
            });

            expect(moved.isError).toBeFalsy();
            expect(stub.state.reschedules).toEqual([
                { slot_id: IDS.rangeSlot, time: '09:30', end_time: '11:00' },
            ]);

            const offGrid = await harness.call('reschedule_booking', {
                booking_id: created.booking.booking_id,
                slot_id: IDS.rangeSlot,
                time: '09:45',
                end_time: '11:00',
            });

            expect(errorOf(offGrid).code).toBe('SLOT_RANGE_INVALID');
        } finally {
            await harness.close();
        }
    });

    it('sends nothing when the person gives no address', async () => {
        const harness = await startHarness({
            apiUrl: stub.url,
            write: true,
            session: {},
            elicit: answering(null),
        });

        try {
            const result = await harness.call('create_booking', {
                ...target,
                time: '09:00',
                end_time: '10:00',
            });

            expect(errorOf(result).code).toBe('NOT_CONFIRMED');
            expect(stub.state.bookings).toHaveLength(0);
        } finally {
            await harness.close();
        }
    });

    it('asks for the address as an argument on a client that cannot ask the person', async () => {
        const harness = await startHarness({ apiUrl: stub.url, write: true, session: {} });

        try {
            const result = await harness.call('create_booking', {
                ...target,
                time: '09:00',
                end_time: '10:00',
                confirm: true,
            });

            expect(errorOf(result).code).toBe('BOOKING_ADDRESS_REQUIRED');
            expect(errorOf(result).next_steps.join(' ')).toContain('`address`');
            expect(stub.state.calls).not.toContain(`POST /services/${IDS.service}/bookings`);
        } finally {
            await harness.close();
        }
    });

    it('has no waitlist for a free interval', async () => {
        const harness = await startHarness({
            apiUrl: stub.url,
            write: true,
            session: {},
            elicit: answering('Main st. 1'),
        });

        try {
            const result = await harness.call('join_waitlist', { ...target, time: '09:00' });

            expect(errorOf(result).code).toBe('WAITLIST_NOT_SUPPORTED');
            expect(stub.state.calls).not.toContain(`POST /services/${IDS.service}/waitlist`);
        } finally {
            await harness.close();
        }
    });
});
