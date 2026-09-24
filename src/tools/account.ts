import { type McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { z } from 'zod';

import { type OtpRequested, type TokenPair, type UserResource, phoneSchema } from '../api/contracts.js';
import { ApiError } from '../api/errors.js';
import { type ElicitationSchema } from '../mapping/form.js';
import { redactUser } from '../mapping/redact.js';
import { confirmWrite, elicit, supportsElicitation, type ToolContext } from './context.js';
import { runPersonalTool, runTool } from './registry.js';

const accountView = z.looseObject({
    id: z.string(),
    role: z.string(),
    name: z.string().optional(),
    phone: z.string().optional(),
    email: z.string().optional(),
});

const CODE_SCHEMA: ElicitationSchema = {
    type: 'object',
    properties: {
        code: { type: 'string', title: 'Code from the SMS', maxLength: 10 },
        name: { type: 'string', title: 'Your name (only asked on a first sign-in)', maxLength: 120 },
    },
    required: ['code'],
};

export function registerAccountTools(server: McpServer, ctx: ToolContext): void {
    let pendingPhone: string | null = null;

    server.registerTool(
        'auth_start',
        {
            title: 'Start signing in',
            description: [
                'Sends a one-time code by SMS to the phone number of the client account.',
                'The code itself is asked for by auth_confirm, not by this tool.',
                'Call it when a personal tool (bookings, waitlist, account) answers UNAUTHENTICATED.',
            ].join(' '),
            annotations: { openWorldHint: true },
            inputSchema: { phone: phoneSchema.describe('E.164 digits, no plus sign') },
            outputSchema: { phone: z.string(), expires_in: z.number() },
        },
        runTool('auth_start', ctx, async (args: { phone: string }) => {
            const { data } = await ctx.client.request<OtpRequested>({
                method: 'POST',
                path: '/auth/otp/request',
                body: { phone: args.phone },
            });
            pendingPhone = args.phone;

            return {
                summary: `Code sent. It is valid for ${data.expires_in} seconds. Call auth_confirm next.`,
                data: { phone: data.phone, expires_in: data.expires_in },
            };
        }),
    );

    server.registerTool(
        'auth_confirm',
        {
            title: 'Finish signing in',
            description: [
                'Asks the person for the code from the SMS and exchanges it for a session.',
                'On a client that supports elicitation the code is typed by the person and never',
                'reaches the conversation; only a client without elicitation needs `code` as an argument.',
                'A first sign-in also asks for a name, because a booking carries it.',
            ].join(' '),
            annotations: { openWorldHint: true },
            inputSchema: {
                phone: phoneSchema.optional().describe('Defaults to the number auth_start used'),
                code: z
                    .string()
                    .regex(/^\d{4,10}$/)
                    .optional()
                    .describe('Only for clients without elicitation'),
                name: z.string().trim().min(1).max(120).optional(),
            },
            outputSchema: { account: accountView },
        },
        runTool('auth_confirm', ctx, async (args: { phone?: string; code?: string; name?: string }) => {
            const phone = args.phone ?? pendingPhone;

            if (!phone)
                throw new ApiError({
                    status: 400,
                    code: 'VALIDATION_ERROR',
                    message: 'Call auth_start first, or pass the phone number.',
                });

            const answers = supportsElicitation(ctx)
                ? await askForCode(ctx)
                : { code: args.code, name: args.name };

            if (!answers.code)
                throw new ApiError({
                    status: 400,
                    code: 'OTP_INVALID',
                    message: 'No code was given.',
                });

            const { data } = await ctx.client.request<TokenPair>({
                method: 'POST',
                path: '/auth/otp/verify',
                body: {
                    phone,
                    code: answers.code,
                    ...(answers.name ? { name: answers.name } : {}),
                },
            });
            await ctx.session.adopt(data);
            pendingPhone = null;

            return {
                summary: `Signed in as ${data.user.name ?? 'this account'}. Personal tools are available now.`,
                data: { account: redactUser(data.user, { pii: ctx.config.pii }) },
            };
        }),
    );

    server.registerTool(
        'whoami',
        {
            title: 'Who am I',
            description: 'The signed-in account. The phone number and e-mail come back masked.',
            annotations: { readOnlyHint: true, openWorldHint: true },
            inputSchema: {},
            outputSchema: { account: accountView },
        },
        runPersonalTool('whoami', ctx, async () => {
            const { data } = await ctx.client.request<UserResource>({ path: '/auth/me', auth: true });

            return {
                summary: `Signed in as ${data.name ?? data.id}.`,
                data: { account: redactUser(data, { pii: ctx.config.pii }) },
            };
        }),
    );

    server.registerTool(
        'logout',
        {
            title: 'Sign out',
            description: 'Revokes the session on the server and deletes the stored token pair.',
            annotations: { destructiveHint: true, openWorldHint: true },
            inputSchema: {},
            outputSchema: { signed_out: z.boolean() },
        },
        runPersonalTool('logout', ctx, async () => {
            await ctx.session.signOut();

            return { summary: 'Signed out.', data: { signed_out: true } };
        }),
    );

    if (ctx.config.write) {
        server.registerTool(
            'set_contact_email',
            {
                title: 'Set the contact e-mail or name',
                description: [
                    'Changes the e-mail and name on the signed-in account, and nothing else.',
                    'The e-mail is what switches reminders from SMS to mail.',
                    'The account id comes from the session, never from an argument.',
                ].join(' '),
                annotations: { idempotentHint: true, openWorldHint: true },
                inputSchema: {
                    email: z.email().max(254).nullable().optional().describe('null clears it'),
                    name: z.string().trim().min(1).max(120).optional(),
                    confirm: z.boolean().optional().describe('Only needed on clients without elicitation'),
                },
                outputSchema: { account: accountView },
            },
            runPersonalTool(
                'set_contact_email',
                ctx,
                async (args: { email?: string | null; name?: string; confirm?: boolean }) => {
                    const user = ctx.session.user;

                    if (!user)
                        throw new ApiError({
                            status: 401,
                            code: 'UNAUTHENTICATED',
                            message: 'No session.',
                        });

                    const body: Record<string, string | null> = {};

                    if (args.email !== undefined) body['email'] = args.email;

                    if (args.name !== undefined) body['name'] = args.name;

                    if (Object.keys(body).length === 0)
                        throw new ApiError({
                            status: 400,
                            code: 'VALIDATION_ERROR',
                            message: 'Pass an e-mail, a name, or both.',
                        });

                    await confirmWrite(ctx, summaryOf(body), args.confirm);
                    const { data } = await ctx.client.request<UserResource>({
                        method: 'PATCH',
                        path: `/users/${user.id}`,
                        body,
                        auth: true,
                    });

                    return {
                        summary: 'Account updated.',
                        data: { account: redactUser(data, { pii: ctx.config.pii }) },
                    };
                },
            ),
        );
    }
}

async function askForCode(ctx: ToolContext): Promise<{ code?: string; name?: string }> {
    const outcome = await elicit(
        ctx,
        'Enter the code from the SMS. If this is your first sign-in, add your name as well.',
        CODE_SCHEMA,
    );

    if (!outcome.accepted)
        throw new ApiError({ status: 400, code: 'NOT_CONFIRMED', message: 'Sign-in was cancelled.' });

    const code = outcome.content['code'];
    const name = outcome.content['name'];

    return {
        code: typeof code === 'string' ? code : undefined,
        name: typeof name === 'string' && name.length > 0 ? name : undefined,
    };
}

function summaryOf(body: Record<string, string | null>): string {
    const lines = Object.entries(body).map(([key, value]) => `${key}: ${value ?? '(cleared)'}`);

    return `Change your account:\n${lines.join('\n')}`;
}
