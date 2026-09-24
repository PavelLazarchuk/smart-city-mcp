import { errorOf, startHarness, structured, textOf, type ElicitResponder } from './support/harness.js';
import { IDS, startStubApi, type Stub } from './support/stub-api.js';

const acceptEverything: ElicitResponder = (_message, schema) => {
    const properties = Object.keys((schema as { properties?: Record<string, unknown> }).properties ?? {});

    if (properties.includes('confirm')) return { confirm: true };

    if (properties.includes('passport')) return { passport: true };

    if (properties.includes('insurance_number')) return { insurance_number: 'A1234567' };

    return {};
};

describe('booking a slot', () => {
    let stub: Stub;

    beforeEach(async () => {
        stub = await startStubApi();
    });

    afterEach(async () => {
        await stub.close();
    });

    it('goes from a phrase to a booking that shows up in the list', async () => {
        const harness = await startHarness({
            apiUrl: stub.url,
            write: true,
            session: {},
            elicit: acceptEverything,
        });

        try {
            const found = structured<{ items: { id: string }[] }>(
                await harness.call('search_services', { q: 'x-ray' }),
            );

            expect(found.items[0]?.id).toBe(IDS.service);

            const service = structured<{ service: { label: string } }>(
                await harness.call('get_service', { service_id: IDS.service }),
            );

            expect(service.service.label).toBe('Chest X-ray');

            const slots = structured<{ items: { slot_id: string; time: string }[] }>(
                await harness.call('find_slots', { service_id: IDS.service, when: 'tomorrow' }),
            );
            const candidate = slots.items[0]!;

            const created = await harness.call('create_booking', {
                service_id: IDS.service,
                option_id: IDS.option,
                slot_id: candidate.slot_id,
                time: candidate.time,
            });

            expect(created.isError).toBeFalsy();
            expect(structured<{ already_existed: boolean }>(created).already_existed).toBe(false);

            const mine = structured<{ items: { slot_id: string }[] }>(
                await harness.call('list_my_bookings', {}),
            );

            expect(mine.items).toHaveLength(1);
            expect(mine.items[0]?.slot_id).toBe(candidate.slot_id);
        } finally {
            await harness.close();
        }
    });

    it('sends the answers the person gave and keeps them out of the reply', async () => {
        const harness = await startHarness({
            apiUrl: stub.url,
            write: true,
            session: {},
            elicit: acceptEverything,
        });

        try {
            await harness.call('create_booking', {
                service_id: IDS.service,
                option_id: IDS.option,
                slot_id: IDS.slot,
                time: '10:00',
            });

            expect(stub.state.bookings[0]).toMatchObject({
                fields: { insurance_number: 'A1234567' },
                documents: ['passport'],
            });

            const mine = structured<{ items: { form_field_keys: string[] }[] }>(
                await harness.call('list_my_bookings', {}),
            );

            expect(mine.items[0]?.form_field_keys).toEqual(['insurance_number']);
            expect(JSON.stringify(mine)).not.toContain('A1234567');
        } finally {
            await harness.close();
        }
    });

    it('replays the same booking instead of creating a second one', async () => {
        const harness = await startHarness({
            apiUrl: stub.url,
            write: true,
            session: {},
            elicit: acceptEverything,
        });

        try {
            const args = {
                service_id: IDS.service,
                option_id: IDS.option,
                slot_id: IDS.slot,
                time: '10:00',
            };
            const first = await harness.call('create_booking', args);
            const second = await harness.call('create_booking', args);

            expect(structured<{ already_existed: boolean }>(first).already_existed).toBe(false);
            expect(second.isError).toBeFalsy();
            expect(structured<{ already_existed: boolean }>(second).already_existed).toBe(true);
            expect(stub.state.bookings).toHaveLength(1);
        } finally {
            await harness.close();
        }
    });

    it('books again after a cancellation instead of replaying the dead booking', async () => {
        const harness = await startHarness({
            apiUrl: stub.url,
            write: true,
            session: {},
            elicit: acceptEverything,
        });

        try {
            const args = {
                service_id: IDS.service,
                option_id: IDS.option,
                slot_id: IDS.slot,
                time: '10:00',
            };
            const first = structured<{ booking: { booking_id: string } }>(
                await harness.call('create_booking', args),
            );
            await harness.call('cancel_booking', { booking_id: first.booking.booking_id });

            const again = await harness.call('create_booking', args);
            const data = structured<{ already_existed: boolean; booking: { booking_id: string } }>(again);

            expect(again.isError).toBeFalsy();
            expect(data.already_existed).toBe(false);
            expect(stub.state.bookings.filter((row) => row['status'] === 'confirmed')).toHaveLength(1);
        } finally {
            await harness.close();
        }
    });

    it('books a slot beyond the API\u2019s default 30-day window', async () => {
        const harness = await startHarness({
            apiUrl: stub.url,
            write: true,
            session: {},
            elicit: acceptEverything,
        });

        try {
            const when = new Date(Date.now() + IDS.farSlotDays * 86_400_000).toISOString().slice(0, 10);
            const slots = structured<{ items: { slot_id: string; time: string }[] }>(
                await harness.call('find_slots', { service_id: IDS.service, when }),
            );

            expect(slots.items.map((item) => item.slot_id)).toEqual([IDS.farSlot]);

            const created = await harness.call('create_booking', {
                service_id: IDS.service,
                option_id: IDS.option,
                slot_id: IDS.farSlot,
                time: '11:00',
            });

            expect(created.isError).toBeFalsy();
            expect(stub.state.bookings).toHaveLength(1);
        } finally {
            await harness.close();
        }
    });

    it('reads both ends of a move out instead of two uuids', async () => {
        const asked: string[] = [];
        const harness = await startHarness({
            apiUrl: stub.url,
            write: true,
            session: {},
            elicit: (message, schema) => {
                asked.push(message);

                return acceptEverything(message, schema);
            },
        });

        try {
            const first = structured<{ booking: { booking_id: string } }>(
                await harness.call('create_booking', {
                    service_id: IDS.service,
                    option_id: IDS.option,
                    slot_id: IDS.slot,
                    time: '10:00',
                }),
            );
            asked.length = 0;
            await harness.call('reschedule_booking', {
                booking_id: first.booking.booking_id,
                option_id: IDS.option,
                slot_id: IDS.farSlot,
                time: '11:00',
            });
            const prompt = asked.join('\n');
            const day = String.raw`\w{3} \d{1,2} \w{3} \d{4}, \d{2}:\d{2}`;

            expect(prompt).toContain('Chest X-ray');
            expect(prompt).toMatch(new RegExp(`from ${day} to ${day}`));
            expect(prompt).not.toContain(IDS.farSlot);
        } finally {
            await harness.close();
        }
    });

    it('turns a full slot into a waitlist offer, and the waitlist accepts it', async () => {
        const harness = await startHarness({
            apiUrl: stub.url,
            write: true,
            session: {},
            elicit: acceptEverything,
        });

        try {
            const refused = await harness.call('create_booking', {
                service_id: IDS.service,
                option_id: IDS.option,
                slot_id: IDS.fullSlot,
                time: '14:00',
            });

            expect(refused.isError).toBe(true);
            expect(errorOf(refused).code).toBe('SLOT_FULL');
            expect(errorOf(refused).next_steps.join(' ')).toContain('join_waitlist');

            const queued = await harness.call('join_waitlist', {
                service_id: IDS.service,
                option_id: IDS.option,
                slot_id: IDS.fullSlot,
                time: '14:00',
            });

            expect(queued.isError).toBeFalsy();
            expect(structured<{ entry: { status: string } }>(queued).entry.status).toBe('waiting');
        } finally {
            await harness.close();
        }
    });

    it('sends nothing when the person declines', async () => {
        const harness = await startHarness({
            apiUrl: stub.url,
            write: true,
            session: {},
            elicit: (_message, schema) => {
                const properties = Object.keys(
                    (schema as { properties?: Record<string, unknown> }).properties ?? {},
                );

                if (properties.includes('confirm')) return null;

                return acceptEverything(_message, schema);
            },
        });

        try {
            const result = await harness.call('create_booking', {
                service_id: IDS.service,
                option_id: IDS.option,
                slot_id: IDS.slot,
                time: '10:00',
            });

            expect(errorOf(result).code).toBe('NOT_CONFIRMED');
            expect(stub.state.bookings).toHaveLength(0);
        } finally {
            await harness.close();
        }
    });

    it('demands an explicit confirm on a client that cannot ask the person', async () => {
        const harness = await startHarness({ apiUrl: stub.url, write: true, session: {} });

        try {
            const refused = await harness.call('create_booking', {
                service_id: IDS.service,
                option_id: IDS.option,
                slot_id: IDS.slot,
                time: '10:00',
                fields: { insurance_number: 'A1234567' },
                documents: ['passport'],
            });

            expect(errorOf(refused).code).toBe('CONFIRMATION_REQUIRED');
            expect(textOf(refused)).toContain('CONFIRMATION_REQUIRED');
            expect(textOf(refused)).toContain('Service: Chest X-ray');
            expect(textOf(refused)).toContain('Documents to bring: Passport');
            expect(textOf(refused)).toContain('confirm: true');
            expect(stub.state.bookings).toHaveLength(0);

            const accepted = await harness.call('create_booking', {
                service_id: IDS.service,
                option_id: IDS.option,
                slot_id: IDS.slot,
                time: '10:00',
                fields: { insurance_number: 'A1234567' },
                documents: ['passport'],
                confirm: true,
            });

            expect(accepted.isError).toBeFalsy();
        } finally {
            await harness.close();
        }
    });

    it('puts the next step in the text block, where every client reads it', async () => {
        const harness = await startHarness({
            apiUrl: stub.url,
            write: true,
            session: {},
            elicit: acceptEverything,
        });

        try {
            const refused = await harness.call('create_booking', {
                service_id: IDS.service,
                option_id: IDS.option,
                slot_id: IDS.fullSlot,
                time: '14:00',
            });
            const text = textOf(refused);

            expect(text).toContain('SLOT_FULL');
            expect(text).toContain('join_waitlist');
            expect(text).not.toMatch(/Wait \d+ seconds/);
        } finally {
            await harness.close();
        }
    });

    it('asks for the time of a timed candidate instead of calling it gone', async () => {
        const harness = await startHarness({ apiUrl: stub.url, write: true, session: {} });

        try {
            const result = await harness.call('create_booking', {
                service_id: IDS.service,
                option_id: IDS.option,
                slot_id: IDS.slot,
            });

            expect(errorOf(result).code).toBe('SLOT_TIME_REQUIRED');
            expect(textOf(result)).toContain('`time`');
        } finally {
            await harness.close();
        }
    });

    it('names a missing form field the way the form does', async () => {
        const harness = await startHarness({ apiUrl: stub.url, write: true, session: {} });

        try {
            const result = await harness.call('create_booking', {
                service_id: IDS.service,
                option_id: IDS.option,
                slot_id: IDS.slot,
                time: '10:00',
            });

            expect(errorOf(result).code).toBe('BOOKING_FIELDS_INVALID');
            expect(textOf(result)).toContain('fields.insurance_number: Required — "Insurance number"');
        } finally {
            await harness.close();
        }
    });

    it('refuses a waitlist for a time with free places before asking the person', async () => {
        let asked = 0;
        const harness = await startHarness({
            apiUrl: stub.url,
            write: true,
            session: {},
            elicit: (message, schema) => {
                asked += 1;

                return acceptEverything(message, schema);
            },
        });

        try {
            const result = await harness.call('join_waitlist', {
                service_id: IDS.service,
                option_id: IDS.option,
                slot_id: IDS.slot,
                time: '10:00',
            });

            expect(errorOf(result).code).toBe('SLOT_NOT_FULL');
            expect(asked).toBe(0);
            expect(stub.state.calls).not.toContain(`POST /services/${IDS.service}/waitlist`);
        } finally {
            await harness.close();
        }
    });

    it('refuses a form the API would refuse, without spending the booking attempt', async () => {
        const harness = await startHarness({ apiUrl: stub.url, write: true, session: {} });

        try {
            const result = await harness.call('create_booking', {
                service_id: IDS.service,
                option_id: IDS.option,
                slot_id: IDS.slot,
                time: '10:00',
                confirm: true,
            });

            expect(errorOf(result).code).toBe('BOOKING_FIELDS_INVALID');
            expect(stub.state.calls).not.toContain(`POST /services/${IDS.service}/bookings`);
        } finally {
            await harness.close();
        }
    });
});
