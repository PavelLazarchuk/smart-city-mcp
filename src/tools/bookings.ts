import { createHash } from 'node:crypto';
import { type McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { z } from 'zod';

import {
    type BookingCreated,
    type BookingResource,
    type FormField,
    type ServiceResource,
    type ServiceSlots,
    type SlotCandidate,
    type WaitlistEntry,
    BOOKING_STATUSES,
    fieldKeySchema,
    objectIdSchema,
    timeOfDaySchema,
    uuidSchema,
} from '../api/contracts.js';
import { type ApiResult } from '../api/client.js';
import { SERVICE_BOOKING_FIELDS, fieldsParam } from '../api/fields.js';
import { ApiError, type ApiErrorDetail, isApiError } from '../api/errors.js';
import {
    type ElicitationSchema,
    documentsToConfirm,
    elicitationSchemaFor,
    missingDocuments,
    validateAnswers,
} from '../mapping/form.js';
import { redactBooking, redactWaitlistEntry } from '../mapping/redact.js';
import { dateOnlyIn, describeWhen, humanInstant, isPast, isoAtIn, shiftDateOnly } from '../mapping/time.js';
import { confirmArg, confirmWrite, elicit, supportsElicitation, type ToolContext } from './context.js';
import { DATA_NOTICE, plural, runPersonalTool } from './registry.js';

export const MY_BOOKINGS_URI = 'smartcity://me/bookings';

const ACTIVE_BOOKING_STATUSES: readonly string[] = ['pending', 'confirmed'];

interface BookingTarget {
    service_id: string;
    option_id: string;
    slot_id: string;
    time?: string;
}

const SLOT_LOOKUP_LIMIT = 200;
const SLOT_LOOKUP_DAYS = 365;

const bookingView = z.looseObject({
    id: z.string(),
    service_id: z.string(),
    service_label: z.string(),
    organization_id: z.string(),
    option_id: z.string(),
    slot_id: z.string(),
    child_type: z.string(),
    starts_at: z.string().nullable(),
    cancel_deadline_at: z.string().nullable(),
    status: z.string(),
    created_at: z.string(),
});

const waitlistView = z.looseObject({
    id: z.string(),
    service_id: z.string(),
    service_label: z.string(),
    option_id: z.string(),
    slot_id: z.string(),
    status: z.string(),
    created_at: z.string(),
});

const bookingIdArg = uuidSchema.describe('The `id` of a booking from list_my_bookings.');
const candidateArg = uuidSchema.describe('From the chosen find_slots candidate.');
const candidateTimeArg = timeOfDaySchema
    .optional()
    .describe('The chosen candidate’s `time` (HH:mm); required when its `child_type` is `date_time`.');

export function registerBookingTools(server: McpServer, ctx: ToolContext): void {
    const write = ctx.config.write;

    server.registerTool(
        'list_my_bookings',
        {
            title: 'My bookings',
            description: [
                'The person’s bookings, each with `starts_at` and `cancel_deadline_at` (the last moment it',
                'can be cancelled); active ones by default. An item’s `id` is the',
                write
                    ? '`booking_id` for get_booking, confirm_booking, reschedule_booking and cancel_booking.'
                    : '`booking_id` for get_booking.',
                'Form answers may be hidden: `form_field_keys` lists which fields were filled.',
                DATA_NOTICE,
            ].join(' '),
            annotations: { readOnlyHint: true, openWorldHint: true },
            inputSchema: {
                status: z
                    .enum([...BOOKING_STATUSES, 'active', 'all'])
                    .default('active')
                    .describe('"active" is pending plus confirmed.'),
                date_from: z.iso.date().optional().describe('YYYY-MM-DD, by the booking’s date.'),
                date_to: z.iso.date().optional().describe('YYYY-MM-DD, by the booking’s date.'),
                limit: z.number().int().min(1).max(25).default(10),
            },
            outputSchema: { total: z.number().nullable(), items: z.array(bookingView) },
        },
        runPersonalTool(
            'list_my_bookings',
            ctx,
            async (args: { status: string; date_from?: string; date_to?: string; limit: number }) => {
                const { data, meta } = await ctx.client.request<BookingResource[]>({
                    path: '/me/bookings',
                    query: {
                        status: args.status,
                        date_from: args.date_from,
                        date_to: args.date_to,
                        limit: args.limit,
                    },
                    auth: true,
                });
                const items = (data ?? []).map((booking) => redactBooking(booking, { pii: ctx.config.pii }));

                return {
                    summary: `${plural(items.length, 'booking', 'bookings')}.`,
                    data: { total: meta?.['total'] ?? items.length, items },
                };
            },
        ),
    );

    server.registerTool(
        'get_booking',
        {
            title: 'Get one booking',
            description: [
                'One of the person’s bookings with its current `status` (pending, confirmed, completed,',
                'no_show, cancelled), start and cancellation deadline.',
                DATA_NOTICE,
            ].join(' '),
            annotations: { readOnlyHint: true, openWorldHint: true },
            inputSchema: {
                booking_id: uuidSchema.describe(
                    write
                        ? 'The `id` from list_my_bookings, or `booking.booking_id` from create_booking.'
                        : 'The `id` from list_my_bookings.',
                ),
            },
            outputSchema: { booking: bookingView },
        },
        runPersonalTool('get_booking', ctx, async (args: { booking_id: string }) => {
            const { data } = await ctx.client.request<BookingResource>({
                path: `/bookings/${args.booking_id}`,
                auth: true,
            });

            return {
                summary: `"${data.service_label}" — ${data.status}.`,
                data: { booking: redactBooking(data, { pii: ctx.config.pii }) },
            };
        }),
    );

    server.registerTool(
        'list_my_waitlist',
        {
            title: 'My waitlist entries',
            description: [
                'Full slots the person is queueing for. When a place frees up, the first in line gets an SMS',
                'or e-mail (`status: notified`); nothing is booked automatically.',
                write
                    ? 'Book it with create_booking if the person still wants it. An item’s `id` is the `waitlist_id` for leave_waitlist.'
                    : '',
                DATA_NOTICE,
            ]
                .filter(Boolean)
                .join(' '),
            annotations: { readOnlyHint: true, openWorldHint: true },
            inputSchema: { limit: z.number().int().min(1).max(25).default(10) },
            outputSchema: { total: z.number().nullable(), items: z.array(waitlistView) },
        },
        runPersonalTool('list_my_waitlist', ctx, async (args: { limit: number }) => {
            const { data, meta } = await ctx.client.request<WaitlistEntry[]>({
                path: '/me/waitlist',
                query: { limit: args.limit },
                auth: true,
            });
            const items = (data ?? []).map((entry) => redactWaitlistEntry(entry, { pii: ctx.config.pii }));

            return {
                summary: `Queueing for ${plural(items.length, 'slot', 'slots')}.`,
                data: { total: meta?.['total'] ?? items.length, items },
            };
        }),
    );

    if (!write) return;

    server.registerTool(
        'create_booking',
        {
            title: 'Book a time',
            description: [
                'Books the candidate the person chose from find_slots: pass `service_id` and the candidate’s',
                '`option_id`, `slot_id` and `time` exactly as returned. For a `full: true` candidate use',
                'join_waitlist instead. Never fill `fields` or `documents` yourself; pass only what the',
                'person said. Anything missing is asked of the person, or comes back as',
                'BOOKING_FIELDS_INVALID / BOOKING_DOCUMENTS_REQUIRED for you to ask them. The person',
                'approves a summary before anything is sent. Repeating the same booking is safe: it returns',
                '`already_existed: true` and creates no duplicate.',
            ].join(' '),
            annotations: { idempotentHint: true, openWorldHint: true },
            inputSchema: {
                service_id: objectIdSchema.describe('The `service_id` you passed to find_slots.'),
                option_id: candidateArg,
                slot_id: candidateArg,
                time: candidateTimeArg,
                info: z
                    .string()
                    .trim()
                    .max(1000)
                    .optional()
                    .describe(
                        'A comment for the organization, in the person’s own words; only if they gave one.',
                    ),
                fields: z
                    .record(fieldKeySchema, z.unknown())
                    .optional()
                    .describe(
                        'Form answers keyed by `form_fields[].key` of get_service; only what the person said.',
                    ),
                documents: z
                    .array(fieldKeySchema)
                    .max(30)
                    .optional()
                    .describe(
                        'Keys of `required_documents` of get_service that the person confirmed they will bring.',
                    ),
                confirm: confirmArg,
            },
            outputSchema: {
                booking: z.looseObject({ booking_id: z.string(), status: z.string() }),
                already_existed: z.boolean(),
                starts_at: z.string().nullable(),
                cancel_deadline_at: z.string().nullable(),
                needs_confirmation: z.boolean(),
            },
        },
        runPersonalTool(
            'create_booking',
            ctx,
            async (args: {
                service_id: string;
                option_id: string;
                slot_id: string;
                time?: string;
                info?: string;
                fields?: Record<string, unknown>;
                documents?: string[];
                confirm?: boolean;
            }) => {
                const service = await loadBookingService(ctx, args.service_id);
                const candidate = await findCandidate(ctx, service, args);
                const fields = await collectFields(ctx, service, args.fields ?? {});
                const documents = await collectDocuments(ctx, service, args.documents ?? []);
                const timeZone = service.organization?.timezone ?? ctx.config.timeZone;
                const deadline = cancelDeadlineOf(candidate, service, timeZone);

                await confirmWrite(
                    ctx,
                    bookingSummary(service, candidate, fields, documents, deadline, timeZone),
                    args.confirm,
                );

                const body = {
                    option_id: args.option_id,
                    slot_id: args.slot_id,
                    ...(args.time ? { time: args.time } : {}),
                    ...(args.info ? { info: args.info } : {}),
                    ...(Object.keys(fields).length > 0 ? { fields } : {}),
                    ...(documents.length > 0 ? { documents } : {}),
                };
                const result = await book(ctx, args, body);
                await touchBookings(ctx);
                const pending = result.data.status === 'pending';

                return {
                    summary: [
                        result.replayed
                            ? 'This booking already existed; nothing new was created.'
                            : pending
                              ? 'Booked as `pending`: this service asks for each booking to be confirmed. Tell the person; they can confirm it now or later with confirm_booking, or the organization may confirm it.'
                              : 'Booked.',
                        deadline !== null && isPast(deadline)
                            ? 'It cannot be cancelled: the cancellation deadline has already passed.'
                            : '',
                    ]
                        .filter(Boolean)
                        .join(' '),
                    data: {
                        booking: result.data,
                        already_existed: result.replayed,
                        starts_at: candidate.starts_at,
                        cancel_deadline_at: deadline,
                        needs_confirmation: pending,
                    },
                };
            },
        ),
    );

    server.registerTool(
        'confirm_booking',
        {
            title: 'Confirm a pending booking',
            description: [
                'Some services ask for each booking to be confirmed; their bookings start as `pending`. Call',
                'this when the person confirms one; it becomes `confirmed`. Only for `pending` bookings.',
            ].join(' '),
            annotations: { idempotentHint: true, openWorldHint: true },
            inputSchema: {
                booking_id: uuidSchema.describe(
                    'The `id` of a pending booking from list_my_bookings, or `booking.booking_id` from create_booking.',
                ),
                confirm: confirmArg,
            },
            outputSchema: { booking: bookingView },
        },
        runPersonalTool('confirm_booking', ctx, async (args: { booking_id: string; confirm?: boolean }) => {
            const booking = await loadBooking(ctx, args.booking_id);
            await confirmWrite(
                ctx,
                `Confirm your booking of "${booking.service_label}"${bookingDay(booking)}?`,
                args.confirm,
            );
            const { data } = await ctx.client.request<BookingResource>({
                method: 'POST',
                path: `/bookings/${args.booking_id}/confirm`,
                auth: true,
            });
            await touchBookings(ctx);

            return {
                summary: `"${data.service_label}" is confirmed.`,
                data: { booking: redactBooking(data, { pii: ctx.config.pii }) },
            };
        }),
    );

    server.registerTool(
        'cancel_booking',
        {
            title: 'Cancel a booking',
            description: [
                'Cancels one of the person’s bookings; the place goes to someone else and this cannot be',
                'undone. After `cancel_deadline_at` the cancel is refused and the person has to contact the',
                'organization. To change the time, use reschedule_booking instead — cancelling first may',
                'lose the place.',
            ].join(' '),
            annotations: { destructiveHint: true, openWorldHint: true },
            inputSchema: { booking_id: bookingIdArg, confirm: confirmArg },
            outputSchema: { cancelled: z.boolean(), booking_id: z.string() },
        },
        runPersonalTool('cancel_booking', ctx, async (args: { booking_id: string; confirm?: boolean }) => {
            const booking = await loadBooking(ctx, args.booking_id);
            await confirmWrite(
                ctx,
                `Cancel "${booking.service_label}"${bookingDay(booking)}? The place goes to someone else.`,
                args.confirm,
            );
            await ctx.client.request({
                method: 'DELETE',
                path: `/bookings/${args.booking_id}`,
                auth: true,
            });
            await touchBookings(ctx);

            return {
                summary: `"${booking.service_label}" is cancelled.`,
                data: { cancelled: true, booking_id: args.booking_id },
            };
        }),
    );

    server.registerTool(
        'reschedule_booking',
        {
            title: 'Reschedule a booking',
            description: [
                'Moves one of the person’s bookings to another time of the same service in one step, keeping',
                'the current place until the new one is secured. First call find_slots with the booking’s',
                '`service_id` and let the person choose; then pass that candidate’s ids here.',
            ].join(' '),
            annotations: { destructiveHint: true, openWorldHint: true },
            inputSchema: {
                booking_id: bookingIdArg,
                slot_id: candidateArg,
                option_id: uuidSchema
                    .optional()
                    .describe('From the chosen candidate; leave out to keep the current option.'),
                time: candidateTimeArg,
                confirm: confirmArg,
            },
            outputSchema: { booking: bookingView },
        },
        runPersonalTool(
            'reschedule_booking',
            ctx,
            async (args: {
                booking_id: string;
                slot_id: string;
                option_id?: string;
                time?: string;
                confirm?: boolean;
            }) => {
                const booking = await loadBooking(ctx, args.booking_id);
                const service = await loadBookingService(ctx, booking.service_id);
                const target = await findCandidate(ctx, service, {
                    service_id: booking.service_id,
                    option_id: args.option_id ?? booking.option_id,
                    slot_id: args.slot_id,
                    time: args.time,
                });
                await confirmWrite(
                    ctx,
                    `Move "${booking.service_label}" from ${describeWhen(localOf(booking.date), localOf(booking.time))} to ${describeWhen(target.date, target.time)}?`,
                    args.confirm,
                );
                const { data } = await ctx.client.request<BookingResource>({
                    method: 'POST',
                    path: `/bookings/${args.booking_id}/reschedule`,
                    body: {
                        slot_id: args.slot_id,
                        ...(args.option_id ? { option_id: args.option_id } : {}),
                        ...(args.time ? { time: args.time } : {}),
                    },
                    auth: true,
                });
                await touchBookings(ctx);

                return {
                    summary: `"${data.service_label}" was moved.`,
                    data: { booking: redactBooking(data, { pii: ctx.config.pii }) },
                };
            },
        ),
    );

    server.registerTool(
        'join_waitlist',
        {
            title: 'Join a waitlist',
            description: [
                'Puts the person in the queue for a candidate that find_slots returned with `full: true`.',
                'When a place frees up, the first in line gets an SMS or e-mail and then books it with',
                'create_booking; nothing is booked automatically. A candidate with free places is refused',
                '(SLOT_NOT_FULL): book it instead.',
            ].join(' '),
            annotations: { openWorldHint: true },
            inputSchema: {
                service_id: objectIdSchema.describe('The `service_id` you passed to find_slots.'),
                option_id: candidateArg,
                slot_id: candidateArg,
                time: candidateTimeArg,
                confirm: confirmArg,
            },
            outputSchema: { entry: waitlistView },
        },
        runPersonalTool(
            'join_waitlist',
            ctx,
            async (args: {
                service_id: string;
                option_id: string;
                slot_id: string;
                time?: string;
                confirm?: boolean;
            }) => {
                const service = await loadBookingService(ctx, args.service_id);
                const candidate = await findCandidate(ctx, service, args);

                if (candidate.available !== 0)
                    throw new ApiError({
                        status: 422,
                        code: 'SLOT_NOT_FULL',
                        message: 'That time still has free places.',
                    });

                await confirmWrite(
                    ctx,
                    `Join the waitlist for "${service.label}"${onDay(candidate.date, candidate.time)}? You get an SMS or e-mail when a place frees up.`,
                    args.confirm,
                );
                const { data } = await ctx.client.request<WaitlistEntry>({
                    method: 'POST',
                    path: `/services/${args.service_id}/waitlist`,
                    body: {
                        option_id: args.option_id,
                        slot_id: args.slot_id,
                        ...(args.time ? { time: args.time } : {}),
                    },
                    auth: true,
                });

                return {
                    summary: `On the waitlist for "${data.service_label}".`,
                    data: { entry: redactWaitlistEntry(data, { pii: ctx.config.pii }) },
                };
            },
        ),
    );

    server.registerTool(
        'leave_waitlist',
        {
            title: 'Leave a waitlist',
            description: 'Takes the person off a waitlist; they are no longer told when a place frees up.',
            annotations: { destructiveHint: true, openWorldHint: true },
            inputSchema: {
                waitlist_id: uuidSchema.describe('The `id` of an entry from list_my_waitlist.'),
                confirm: confirmArg,
            },
            outputSchema: { left: z.boolean(), waitlist_id: z.string() },
        },
        runPersonalTool('leave_waitlist', ctx, async (args: { waitlist_id: string; confirm?: boolean }) => {
            const entry = await findWaitlistEntry(ctx, args.waitlist_id);
            const what = entry
                ? `the waitlist for "${entry.service_label}"${onDay(localOf(entry.date), localOf(entry.time))}`
                : 'this waitlist entry';
            await confirmWrite(
                ctx,
                `Leave ${what}? You stop being told when a place frees up.`,
                args.confirm,
            );
            await ctx.client.request({
                method: 'DELETE',
                path: `/waitlist/${args.waitlist_id}`,
                auth: true,
            });

            return {
                summary: 'Waitlist entry removed.',
                data: { left: true, waitlist_id: args.waitlist_id },
            };
        }),
    );
}

async function loadBooking(ctx: ToolContext, bookingId: string): Promise<BookingResource> {
    const { data } = await ctx.client.request<BookingResource>({
        path: `/bookings/${bookingId}`,
        auth: true,
    });

    return data;
}

function localOf(value: unknown): string | null {
    return typeof value === 'string' ? value : null;
}

function onDay(date: string | null, time: string | null): string {
    return date ? ` on ${describeWhen(date, time)}` : '';
}

function bookingDay(booking: BookingResource): string {
    return onDay(localOf(booking.date), localOf(booking.time));
}

async function loadBookingService(ctx: ToolContext, serviceId: string): Promise<ServiceResource> {
    const { data } = await ctx.client.request<ServiceResource>({
        path: `/services/${serviceId}`,
        query: { include: 'organization', fields: fieldsParam(SERVICE_BOOKING_FIELDS) },
        cache: true,
    });

    return data;
}

async function findCandidate(
    ctx: ToolContext,
    service: ServiceResource,
    args: BookingTarget,
): Promise<SlotCandidate> {
    const timeZone = service.organization?.timezone ?? ctx.config.timeZone;
    const from = dateOnlyIn(new Date(), timeZone);
    const { data } = await ctx.client.request<ServiceSlots>({
        path: `/services/${args.service_id}/slots`,
        query: {
            from,
            to: shiftDateOnly(from, service.booking_policy?.max_advance_days ?? SLOT_LOOKUP_DAYS),
            option_id: args.option_id,
            limit: SLOT_LOOKUP_LIMIT,
        },
        cache: true,
    });
    const offered = data.items.filter((item) => item.slot_id === args.slot_id);
    const candidate = offered.find((item) => (item.time ?? undefined) === args.time);

    if (candidate) return candidate;

    if (args.time === undefined && offered.some((item) => item.time))
        throw new ApiError({
            status: 422,
            code: 'SLOT_TIME_REQUIRED',
            message: 'This candidate has a start time: pass its `time`.',
        });

    if (args.time !== undefined && offered.length > 0 && offered.every((item) => !item.time))
        throw new ApiError({
            status: 400,
            code: 'VALIDATION_ERROR',
            message: 'This candidate has no start time: leave `time` out.',
            details: [{ path: 'time', message: 'Not used for this candidate' }],
        });

    throw new ApiError({
        status: 404,
        code: 'SLOT_NOT_FOUND',
        message: 'That time is not on offer any more.',
    });
}

async function findWaitlistEntry(ctx: ToolContext, waitlistId: string): Promise<WaitlistEntry | null> {
    const { data } = await ctx.client.request<WaitlistEntry[]>({
        path: '/me/waitlist',
        query: { limit: 25 },
        auth: true,
    });

    return (data ?? []).find((entry) => entry.id === waitlistId) ?? null;
}

async function collectFields(
    ctx: ToolContext,
    service: ServiceResource,
    known: Record<string, unknown>,
): Promise<Record<string, unknown>> {
    const fields = service.form_fields ?? [];

    if (fields.length === 0) return {};

    const first = validateAnswers(fields, known);

    if (first.details.length === 0) return first.values;

    const unknown = first.details.filter((detail) => detail.message === 'Unknown field');

    if (unknown.length > 0)
        throw new ApiError({
            status: 422,
            code: 'BOOKING_FIELDS_INVALID',
            message: `This service’s form has only these fields: ${fields.map((field) => field.key).join(', ')}.`,
            details: unknown,
        });

    const asked = new Set(first.details.map((detail) => (detail.path ?? '').split('.')[1]));
    const missing = fields.filter((field) => asked.has(field.key));

    if (!supportsElicitation(ctx) || missing.length === 0)
        throw new ApiError({
            status: 422,
            code: 'BOOKING_FIELDS_INVALID',
            message: 'The booking form is not filled in.',
            details: labelled(first.details, fields),
        });

    const outcome = await elicit(
        ctx,
        `"${service.label}" asks for a few details before the booking can be sent.`,
        elicitationSchemaFor(missing),
    );

    if (!outcome.accepted)
        throw new ApiError({
            status: 400,
            code: 'NOT_CONFIRMED',
            message: 'The person closed the form, so nothing was sent.',
        });

    const second = validateAnswers(fields, { ...known, ...outcome.content });

    if (second.details.length > 0)
        throw new ApiError({
            status: 422,
            code: 'BOOKING_FIELDS_INVALID',
            message: 'The booking form is still not valid.',
            details: labelled(second.details, fields),
        });

    return second.values;
}

function labelled(details: ApiErrorDetail[], fields: FormField[]): ApiErrorDetail[] {
    return details.map((detail) => {
        const field = fields.find((candidate) => `fields.${candidate.key}` === detail.path);

        return field ? { ...detail, message: `${detail.message} — "${field.label}"` } : detail;
    });
}

async function collectDocuments(
    ctx: ToolContext,
    service: ServiceResource,
    confirmed: string[],
): Promise<string[]> {
    const documents = documentsToConfirm(service.required_documents ?? []);

    if (documents.length === 0) return [];

    if (missingDocuments(service.required_documents ?? [], confirmed).length === 0) return confirmed;

    if (!supportsElicitation(ctx))
        throw new ApiError({
            status: 422,
            code: 'BOOKING_DOCUMENTS_REQUIRED',
            message: 'The person has not confirmed the documents to bring.',
            details: documents.map((document) => ({
                path: `documents.${document.key}`,
                message: `"${document.label}" (${document.required ? 'required' : 'optional'})`,
            })),
        });

    const schema: ElicitationSchema = {
        type: 'object',
        properties: Object.fromEntries(
            documents.map((document) => [
                document.key,
                {
                    type: 'boolean' as const,
                    title: document.required ? `${document.label} (required)` : document.label,
                },
            ]),
        ),
        required: documents.filter((document) => document.required).map((document) => document.key),
    };
    const outcome = await elicit(ctx, 'Bring these with you. Confirm the ones you have:', schema);

    if (!outcome.accepted)
        throw new ApiError({
            status: 400,
            code: 'NOT_CONFIRMED',
            message: 'The person closed the documents prompt, so nothing was sent.',
        });

    const answered = documents
        .filter((document) => outcome.content[document.key] === true)
        .map((document) => document.key);
    const stillMissing = missingDocuments(service.required_documents ?? [], answered);

    if (stillMissing.length > 0)
        throw new ApiError({
            status: 422,
            code: 'BOOKING_DOCUMENTS_REQUIRED',
            message: 'Some required documents were not confirmed.',
            details: stillMissing.map((key) => ({
                path: `documents.${key}`,
                message: `"${documents.find((document) => document.key === key)?.label ?? key}" (required)`,
            })),
        });

    return answered;
}

function cancelDeadlineOf(
    candidate: SlotCandidate,
    service: ServiceResource,
    timeZone: string,
): string | null {
    const minutes = service.booking_policy?.cancel_deadline_minutes;

    if (minutes === null || minutes === undefined || !candidate.starts_at) return null;

    return isoAtIn(new Date(Date.parse(candidate.starts_at) - minutes * 60_000), timeZone);
}

function bookingSummary(
    service: ServiceResource,
    candidate: SlotCandidate,
    fields: Record<string, unknown>,
    documents: string[],
    deadline: string | null,
    timeZone: string,
): string {
    const organization = service.organization;
    const labelOf = (items: { key: string; label: string }[], key: string): string =>
        items.find((item) => item.key === key)?.label ?? key;
    const lines = [
        `Service: ${service.label}`,
        `Option: ${candidate.option_label}`,
        `When: ${describeWhen(candidate.date, candidate.time)}`,
        organization ? `Organization: ${organization.main_label}` : null,
        (organization?.address ?? service.address)
            ? `Address: ${organization?.address ?? service.address}`
            : null,
        deadline === null
            ? 'Cancellation deadline: none'
            : isPast(deadline)
              ? 'Cannot be cancelled once booked: the cancellation deadline has passed'
              : `Can be cancelled until: ${humanInstant(deadline, timeZone)}`,
        Object.keys(fields).length > 0
            ? `Form answers sent: ${Object.keys(fields)
                  .map((key) => labelOf(service.form_fields ?? [], key))
                  .join(', ')}`
            : null,
        documents.length > 0
            ? `Documents to bring: ${documents.map((key) => labelOf(service.required_documents ?? [], key)).join(', ')}`
            : null,
    ].filter((line): line is string => line !== null);

    return `Book this?\n${lines.join('\n')}`;
}

function idempotencyKeyFor(ctx: ToolContext, args: BookingTarget, salt: string): string {
    const parts = [
        ctx.session.user?.id ?? 'anonymous',
        args.service_id,
        args.option_id,
        args.slot_id,
        args.time ?? '',
        salt,
    ];

    return createHash('sha256').update(parts.join('\u0000')).digest('hex');
}

async function book(
    ctx: ToolContext,
    args: BookingTarget,
    body: Record<string, unknown>,
): Promise<ApiResult<BookingCreated>> {
    const send = (salt: string): Promise<ApiResult<BookingCreated>> =>
        ctx.client.request<BookingCreated>({
            method: 'POST',
            path: `/services/${args.service_id}/bookings`,
            body,
            auth: true,
            idempotencyKey: idempotencyKeyFor(ctx, args, salt),
        });
    const result = await send('');

    if (!result.replayed) return result;

    const dead = await deadBookingIdOf(ctx, result.data.booking_id);

    return dead ? await send(dead) : result;
}

async function deadBookingIdOf(ctx: ToolContext, bookingId: string): Promise<string | null> {
    try {
        const { data } = await ctx.client.request<BookingResource>({
            path: `/bookings/${bookingId}`,
            auth: true,
        });

        return ACTIVE_BOOKING_STATUSES.includes(data.status) ? null : bookingId;
    } catch (error) {
        return isApiError(error) && error.status === 404 ? bookingId : null;
    }
}

async function touchBookings(ctx: ToolContext): Promise<void> {
    ctx.client.clearCache();

    try {
        await ctx.server.server.sendResourceUpdated({ uri: MY_BOOKINGS_URI });
    } catch (error) {
        ctx.logger.debug('resource update notification skipped', { reason: String(error) });
    }
}
