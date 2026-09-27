import { type McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { z } from 'zod';

import { type CalendarToken, uuidSchema } from '../api/contracts.js';
import { confirmArg, confirmWrite, type ToolContext } from './context.js';
import { DATA_NOTICE, runPersonalTool } from './registry.js';

export const BOOKING_CALENDAR_URI = 'smartcity://me/bookings/{id}/calendar.ics';
export const CALENDAR_MIME_TYPE = 'text/calendar';
const CALENDAR_FILE_NAME = 'booking.ics';

export function bookingCalendarUri(bookingId: string): string {
    return BOOKING_CALENDAR_URI.replace('{id}', bookingId);
}

export async function bookingCalendar(ctx: ToolContext, bookingId: string): Promise<string> {
    const { data } = await ctx.client.request<string>({
        path: `/bookings/${bookingId}/calendar.ics`,
        auth: true,
        responseType: 'text',
    });

    return data;
}

export function registerCalendarTools(server: McpServer, ctx: ToolContext): void {
    server.registerTool(
        'get_booking_calendar',
        {
            title: 'Booking as a calendar file',
            description: [
                'One of the person’s bookings as an iCalendar (.ics) file, for "add it to my calendar".',
                'The file comes back as an attachment and as `ics`; hand it to the person to open in their',
                'calendar app. A booking without a date (an application the organization schedules later)',
                'has no file: BOOKING_NOT_DATED.',
                DATA_NOTICE,
            ].join(' '),
            annotations: { readOnlyHint: true, openWorldHint: true },
            inputSchema: {
                booking_id: uuidSchema.describe('The `id` of a booking from list_my_bookings.'),
            },
            outputSchema: {
                booking_id: z.string(),
                file_name: z.string(),
                mime_type: z.string(),
                uri: z.string(),
                ics: z.string(),
            },
        },
        runPersonalTool('get_booking_calendar', ctx, async (args: { booking_id: string }) => {
            const ics = await bookingCalendar(ctx, args.booking_id);
            const uri = bookingCalendarUri(args.booking_id);

            return {
                summary: `Calendar file ${CALENDAR_FILE_NAME} for the booking is attached.`,
                data: {
                    booking_id: args.booking_id,
                    file_name: CALENDAR_FILE_NAME,
                    mime_type: CALENDAR_MIME_TYPE,
                    uri,
                    ics,
                },
                attachments: [
                    { type: 'resource', resource: { uri, mimeType: CALENDAR_MIME_TYPE, text: ics } },
                ],
            };
        }),
    );

    if (!ctx.config.write) return;

    server.registerTool(
        'create_calendar_link',
        {
            title: 'Subscribe a calendar to my bookings',
            description: [
                'Makes a private link a phone or desktop calendar subscribes to, so every booking shows up',
                'there and stays current (moved and cancelled ones included), from 30 days back on. Only',
                'when the person asks for it. A link made earlier stops working. Anyone with the link sees',
                'the bookings, so give it to the person alone and do not repeat it later in the chat.',
            ].join(' '),
            annotations: { openWorldHint: true },
            inputSchema: { confirm: confirmArg },
            outputSchema: { url: z.string(), webcal_url: z.string() },
        },
        runPersonalTool('create_calendar_link', ctx, async (args: { confirm?: boolean }) => {
            await confirmWrite(
                ctx,
                'Create a private calendar link for your bookings? Anyone who has it sees them. A link made earlier stops working.',
                args.confirm,
            );
            const { data } = await ctx.client.request<CalendarToken>({
                method: 'POST',
                path: '/me/calendar-token',
                auth: true,
            });
            const feed = new URL(`${ctx.config.apiUrl}/me/bookings.ics`);
            feed.searchParams.set('token', data.token);
            const url = feed.toString();

            return {
                summary: [
                    'Calendar link created. Give the person `webcal_url` to open on their phone, or `url` to',
                    'paste into their calendar app as a subscription ("from URL"); it is private.',
                ].join(' '),
                data: { url, webcal_url: url.replace(/^https?:/, 'webcal:') },
            };
        }),
    );

    server.registerTool(
        'revoke_calendar_link',
        {
            title: 'Stop the calendar link',
            description: [
                'Turns off the private calendar link made by create_calendar_link; subscribed calendars',
                'stop receiving the bookings. Use it when the person asks, or thinks the link leaked.',
            ].join(' '),
            annotations: { destructiveHint: true, idempotentHint: true, openWorldHint: true },
            inputSchema: { confirm: confirmArg },
            outputSchema: { revoked: z.boolean() },
        },
        runPersonalTool('revoke_calendar_link', ctx, async (args: { confirm?: boolean }) => {
            await confirmWrite(
                ctx,
                'Turn off your calendar link? Calendars subscribed to it stop showing your bookings.',
                args.confirm,
            );
            await ctx.client.request({ method: 'DELETE', path: '/me/calendar-token', auth: true });

            return { summary: 'The calendar link no longer works.', data: { revoked: true } };
        }),
    );
}
