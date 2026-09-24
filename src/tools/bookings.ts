import { createHash } from 'node:crypto';
import { type McpServer, type RegisteredTool } from '@modelcontextprotocol/sdk/server/mcp.js';
import { z } from 'zod';

import {
    type BookingCreated,
    type BookingResource,
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
import { ApiError, isApiError } from '../api/errors.js';
import {
    type ElicitationSchema,
    documentsToConfirm,
    elicitationSchemaFor,
    missingDocuments,
    validateAnswers,
} from '../mapping/form.js';
import { redactBooking, redactWaitlistEntry } from '../mapping/redact.js';
import { dateOnlyIn, isoAtIn, shiftDateOnly } from '../mapping/time.js';
import { confirmWrite, elicit, supportsElicitation, type ToolContext } from './context.js';
import { DATA_NOTICE, plural, runTool } from './registry.js';

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

const confirmArg = z.boolean().optional().describe('Only needed on clients without elicitation');

export interface BookingTools {
    personal: RegisteredTool[];
}

export function registerBookingTools(server: McpServer, ctx: ToolContext): BookingTools {
    const personal: RegisteredTool[] = [];

    personal.push(
        server.registerTool(
            'list_my_bookings',
            {
                title: 'My bookings',
                description: [
                    'Bookings of the signed-in account, with the instant each one starts and the',
                    'instant after which it can no longer be cancelled.',
                    'Names, phone numbers and form answers are left out; only the field keys come back.',
                    DATA_NOTICE,
                ].join(' '),
                annotations: { readOnlyHint: true, openWorldHint: true },
                inputSchema: {
                    status: z
                        .enum([...BOOKING_STATUSES, 'active', 'all'])
                        .default('active')
                        .describe('"active" is pending plus confirmed'),
                    date_from: z.iso.date().optional(),
                    date_to: z.iso.date().optional(),
                    limit: z.number().int().min(1).max(25).default(10),
                },
                outputSchema: { total: z.number().nullable(), items: z.array(bookingView) },
            },
            runTool(
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
                    const items = (data ?? []).map((booking) =>
                        redactBooking(booking, { pii: ctx.config.pii }),
                    );

                    return {
                        summary: `You have ${plural(items.length, 'booking', 'bookings')}.`,
                        data: { total: meta?.['total'] ?? items.length, items },
                    };
                },
            ),
        ),
    );

    personal.push(
        server.registerTool(
            'get_booking',
            {
                title: 'Get one booking',
                description: `One booking of the signed-in account. ${DATA_NOTICE}`,
                annotations: { readOnlyHint: true, openWorldHint: true },
                inputSchema: { booking_id: uuidSchema },
                outputSchema: { booking: bookingView },
            },
            runTool('get_booking', ctx, async (args: { booking_id: string }) => {
                const { data } = await ctx.client.request<BookingResource>({
                    path: `/bookings/${args.booking_id}`,
                    auth: true,
                });

                return {
                    summary: `"${data.service_label}" — ${data.status}.`,
                    data: { booking: redactBooking(data, { pii: ctx.config.pii }) },
                };
            }),
        ),
    );

    personal.push(
        server.registerTool(
            'list_my_waitlist',
            {
                title: 'My waitlist entries',
                description: `Slots the signed-in account is queueing for. ${DATA_NOTICE}`,
                annotations: { readOnlyHint: true, openWorldHint: true },
                inputSchema: { limit: z.number().int().min(1).max(25).default(10) },
                outputSchema: { total: z.number().nullable(), items: z.array(waitlistView) },
            },
            runTool('list_my_waitlist', ctx, async (args: { limit: number }) => {
                const { data, meta } = await ctx.client.request<WaitlistEntry[]>({
                    path: '/me/waitlist',
                    query: { limit: args.limit },
                    auth: true,
                });
                const items = (data ?? []).map((entry) =>
                    redactWaitlistEntry(entry, { pii: ctx.config.pii }),
                );

                return {
                    summary: `You are queueing for ${plural(items.length, 'slot', 'slots')}.`,
                    data: { total: meta?.['total'] ?? items.length, items },
                };
            }),
        ),
    );

    if (!ctx.config.write) {
        for (const tool of personal) tool.disable();

        return { personal };
    }

    personal.push(
        server.registerTool(
            'create_booking',
            {
                title: 'Book a slot',
                description: [
                    'Books one candidate returned by find_slots. Pass its `option_id`, `slot_id` and,',
                    'for a `date_time` candidate, its `time` exactly as they came back.',
                    'Required form fields are asked of the person, not invented; required documents are',
                    'read out and only sent once the person confirms them.',
                    'The whole booking is confirmed by the person before anything is sent.',
                ].join(' '),
                annotations: { idempotentHint: true, openWorldHint: true },
                inputSchema: {
                    service_id: objectIdSchema,
                    option_id: uuidSchema,
                    slot_id: uuidSchema,
                    time: timeOfDaySchema.optional().describe('Required for a date_time candidate'),
                    info: z.string().trim().max(1000).optional(),
                    fields: z
                        .record(fieldKeySchema, z.unknown())
                        .optional()
                        .describe('Answers already known; anything missing is asked of the person'),
                    documents: z.array(fieldKeySchema).max(30).optional(),
                    confirm: confirmArg,
                },
                outputSchema: {
                    booking: z.looseObject({ booking_id: z.string(), status: z.string() }),
                    already_existed: z.boolean(),
                    starts_at: z.string().nullable(),
                    cancel_deadline_at: z.string().nullable(),
                    needs_organization_confirmation: z.boolean(),
                },
            },
            runTool(
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
                        bookingSummary(service, candidate, fields, documents, deadline),
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
                        summary: result.replayed
                            ? 'This booking already existed; nothing new was created.'
                            : pending
                              ? 'Request sent. The organization still has to confirm it.'
                              : 'Booked.',
                        data: {
                            booking: result.data,
                            already_existed: result.replayed,
                            starts_at: candidate.starts_at,
                            cancel_deadline_at: deadline,
                            needs_organization_confirmation: pending,
                        },
                    };
                },
            ),
        ),
    );

    personal.push(
        server.registerTool(
            'confirm_booking',
            {
                title: 'Confirm my booking',
                description:
                    'Moves a booking the person owns from pending to confirmed, where the service asks for it.',
                annotations: { idempotentHint: true, openWorldHint: true },
                inputSchema: { booking_id: uuidSchema, confirm: confirmArg },
                outputSchema: { booking: bookingView },
            },
            runTool('confirm_booking', ctx, async (args: { booking_id: string; confirm?: boolean }) => {
                const booking = await loadBooking(ctx, args.booking_id);
                await confirmWrite(
                    ctx,
                    `Confirm your booking of "${booking.service_label}" on ${whenOf(ctx, booking.starts_at)}?`,
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
        ),
    );

    personal.push(
        server.registerTool(
            'cancel_booking',
            {
                title: 'Cancel a booking',
                description: [
                    'Cancels a booking of the signed-in account. This frees the place for someone else',
                    'and cannot be undone; after cancel_deadline_at the API refuses it outright.',
                ].join(' '),
                annotations: { destructiveHint: true, openWorldHint: true },
                inputSchema: { booking_id: uuidSchema, confirm: confirmArg },
                outputSchema: { cancelled: z.boolean(), booking_id: z.string() },
            },
            runTool('cancel_booking', ctx, async (args: { booking_id: string; confirm?: boolean }) => {
                const booking = await loadBooking(ctx, args.booking_id);
                await confirmWrite(
                    ctx,
                    `Cancel "${booking.service_label}" on ${whenOf(ctx, booking.starts_at)}? The place goes back to the queue.`,
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
        ),
    );

    personal.push(
        server.registerTool(
            'reschedule_booking',
            {
                title: 'Move a booking',
                description: [
                    'Moves a booking to another candidate from find_slots in one call.',
                    'Cancelling and rebooking would lose the place if the new slot fills in between.',
                ].join(' '),
                annotations: { destructiveHint: true, openWorldHint: true },
                inputSchema: {
                    booking_id: uuidSchema,
                    slot_id: uuidSchema,
                    option_id: uuidSchema.optional(),
                    time: timeOfDaySchema.optional(),
                    confirm: confirmArg,
                },
                outputSchema: { booking: bookingView },
            },
            runTool(
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
                        `Move "${booking.service_label}" from ${whenOf(ctx, booking.starts_at)} to ${whenOf(ctx, target.starts_at)}?`,
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
        ),
    );

    personal.push(
        server.registerTool(
            'join_waitlist',
            {
                title: 'Join a waitlist',
                description: [
                    'Queues for a candidate that find_slots reported as full (`available: 0`).',
                    'A slot with free places is refused: book it instead.',
                ].join(' '),
                annotations: { openWorldHint: true },
                inputSchema: {
                    service_id: objectIdSchema,
                    option_id: uuidSchema,
                    slot_id: uuidSchema,
                    time: timeOfDaySchema.optional(),
                    confirm: confirmArg,
                },
                outputSchema: { entry: waitlistView },
            },
            runTool(
                'join_waitlist',
                ctx,
                async (args: {
                    service_id: string;
                    option_id: string;
                    slot_id: string;
                    time?: string;
                    confirm?: boolean;
                }) => {
                    await confirmWrite(
                        ctx,
                        `Join the waitlist for this slot${args.time ? ` at ${args.time}` : ''}? You are told by SMS if a place frees up.`,
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
                        summary: `You are on the waitlist for "${data.service_label}".`,
                        data: { entry: redactWaitlistEntry(data, { pii: ctx.config.pii }) },
                    };
                },
            ),
        ),
    );

    personal.push(
        server.registerTool(
            'leave_waitlist',
            {
                title: 'Leave a waitlist',
                description: 'Removes a waitlist entry of the signed-in account.',
                annotations: { destructiveHint: true, openWorldHint: true },
                inputSchema: { waitlist_id: uuidSchema, confirm: confirmArg },
                outputSchema: { left: z.boolean(), waitlist_id: z.string() },
            },
            runTool('leave_waitlist', ctx, async (args: { waitlist_id: string; confirm?: boolean }) => {
                const entry = await findWaitlistEntry(ctx, args.waitlist_id);
                const what = entry ? `the waitlist for "${entry.service_label}"` : 'this waitlist entry';
                await confirmWrite(
                    ctx,
                    `Leave ${what}? You stop being told if a place frees up.`,
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
        ),
    );

    for (const tool of personal) tool.disable();

    return { personal };
}

async function loadBooking(ctx: ToolContext, bookingId: string): Promise<BookingResource> {
    const { data } = await ctx.client.request<BookingResource>({
        path: `/bookings/${bookingId}`,
        auth: true,
    });

    return data;
}

function whenOf(ctx: ToolContext, isoInstant: string | null): string {
    return isoInstant ? isoAtIn(new Date(isoInstant), ctx.config.timeZone) : 'no fixed time';
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
    const candidate = data.items.find(
        (item) => item.slot_id === args.slot_id && (item.time ?? undefined) === args.time,
    );

    if (!candidate)
        throw new ApiError({
            status: 404,
            code: 'SLOT_NOT_FOUND',
            message: 'That candidate is not on offer any more.',
        });

    return candidate;
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
            message: 'The form carries a field this service does not have.',
            details: first.details,
        });

    const asked = new Set(first.details.map((detail) => (detail.path ?? '').split('.')[1]));
    const missing = fields.filter((field) => asked.has(field.key));

    if (!supportsElicitation(ctx) || missing.length === 0)
        throw new ApiError({
            status: 422,
            code: 'BOOKING_FIELDS_INVALID',
            message: 'The booking form is not filled in.',
            details: first.details,
        });

    const outcome = await elicit(
        ctx,
        `"${service.label}" asks for a few details before the booking can be sent.`,
        elicitationSchemaFor(missing),
    );

    if (!outcome.accepted)
        throw new ApiError({ status: 400, code: 'NOT_CONFIRMED', message: 'The form was not filled in.' });

    const second = validateAnswers(fields, { ...known, ...outcome.content });

    if (second.details.length > 0)
        throw new ApiError({
            status: 422,
            code: 'BOOKING_FIELDS_INVALID',
            message: 'The booking form is still not valid.',
            details: second.details,
        });

    return second.values;
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
            message: 'Read the documents out and pass the confirmed keys in `documents`.',
            details: documents.map((document) => ({
                path: `documents.${document.key}`,
                message: `Confirm "${document.label}"`,
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
            message: 'The documents were not confirmed.',
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
            details: stillMissing.map((key) => ({ path: `documents.${key}`, message: 'Not confirmed' })),
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
): string {
    const organization = service.organization;
    const lines = [
        `Service: ${service.label}`,
        `Option: ${candidate.option_label}`,
        candidate.starts_at ? `When: ${candidate.starts_at}` : 'When: no fixed time (application)',
        organization ? `Organization: ${organization.main_label}` : null,
        (organization?.address ?? service.address)
            ? `Address: ${organization?.address ?? service.address}`
            : null,
        deadline ? `Can be cancelled until: ${deadline}` : 'Cancellation deadline: none set',
        Object.keys(fields).length > 0 ? `Form fields sent: ${Object.keys(fields).join(', ')}` : null,
        documents.length > 0 ? `Documents confirmed: ${documents.join(', ')}` : null,
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
