import { type McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { z } from 'zod';

import { type OtpRequested, type TokenPair, type UserResource, phoneSchema } from '../api/contracts.js';
import { ApiError } from '../api/errors.js';
import { type ElicitationSchema } from '../mapping/form.js';
import { redactUser } from '../mapping/redact.js';
import { confirmArg, confirmWrite, elicit, supportsElicitation, type ToolContext } from './context.js';
import { plural, runPersonalTool, runTool } from './registry.js';

const accountView = z.looseObject({
    id: z.string(),
    role: z.string(),
    name: z.string().optional(),
    phone: z.string().optional(),
    email: z.string().optional(),
});

const OTP_CODE = /^\d{4,10}$/;

const CODE_SCHEMA: ElicitationSchema = {
    type: 'object',
    properties: {
        code: {
            type: 'string',
            title: 'Code from the SMS',
            description: 'Digits only',
            minLength: 4,
            maxLength: 20,
        },
        name: {
            type: 'string',
            title: 'Your name',
            description: 'Needed on your first sign-in; leave empty to keep the name you already have.',
            maxLength: 120,
        },
    },
    required: ['code'],
};

export function registerAccountTools(server: McpServer, ctx: ToolContext): void {
    let pendingPhone: string | null = null;

    server.registerTool(
        'auth_start',
        {
            title: 'Sign in: send SMS code',
            description: [
                'Step 1 of 2 of sign-in: sends a one-time code by SMS. Call it when a tool answers',
                'UNAUTHENTICATED or the person asks to sign in; a new number gets an account on its first',
                'sign-in. Ask the person for their phone number, never guess it. Then do what this tool',
                'answers to finish with auth_confirm. Send a new code only if the last one expired',
                '(OTP_EXPIRED), was tried too often (OTP_ATTEMPTS_EXCEEDED) or never arrived.',
            ].join(' '),
            annotations: { openWorldHint: true },
            inputSchema: {
                phone: phoneSchema.describe(
                    'Country code and number as digits only: no "+", spaces or dashes.',
                ),
            },
            outputSchema: { phone: z.string(), expires_in: z.number() },
        },
        runTool('auth_start', ctx, async (args: { phone: string }) => {
            const { data } = await ctx.client.request<OtpRequested>({
                method: 'POST',
                path: '/auth/otp/request',
                body: { phone: args.phone },
            });
            pendingPhone = args.phone;
            const sent = `Code sent by SMS, valid for ${durationOf(data.expires_in)}.`;

            return {
                summary: supportsElicitation(ctx)
                    ? `${sent} Call auth_confirm now without \`code\`: it asks the person for the code.`
                    : `${sent} Ask the person for the code from the SMS, then call auth_confirm with it as \`code\`.`,
                data: { phone: data.phone, expires_in: data.expires_in },
            };
        }),
    );

    server.registerTool(
        'auth_confirm',
        {
            title: 'Sign in: enter SMS code',
            description: [
                'Step 2 of 2 of sign-in, right after auth_start. Do what auth_start answered: either call',
                'this without `code` — the app then asks the person for it, so the code never passes through',
                'the chat — or pass the code the person gave you as `code`. After sign-in, retry the tool',
                'that answered UNAUTHENTICATED.',
            ].join(' '),
            annotations: { openWorldHint: true },
            inputSchema: {
                phone: phoneSchema.optional().describe('Leave out: the number given to auth_start is used.'),
                code: z
                    .string()
                    .trim()
                    .max(20)
                    .optional()
                    .describe('The code from the SMS; only when auth_start said to pass it.'),
                name: z
                    .string()
                    .trim()
                    .min(1)
                    .max(120)
                    .optional()
                    .describe(
                        'The person’s name, only if they gave it. Saved on the account; bookings carry it.',
                    ),
            },
            outputSchema: { account: accountView },
        },
        runTool('auth_confirm', ctx, async (args: { phone?: string; code?: string; name?: string }) => {
            const phone = args.phone ?? pendingPhone;

            if (!phone)
                throw new ApiError({
                    status: 400,
                    code: 'VALIDATION_ERROR',
                    message:
                        'No phone number for this sign-in: call auth_start first, or pass the same `phone` it got.',
                });

            const answers = supportsElicitation(ctx) ? await askForCode(ctx) : codeFromArguments(args);
            const code = answers.code.replace(/[\s-]/g, '');

            if (!OTP_CODE.test(code))
                throw new ApiError({
                    status: 400,
                    code: 'OTP_INVALID',
                    message: 'A code is 4 to 10 digits.',
                });

            const { data } = await ctx.client.request<TokenPair>({
                method: 'POST',
                path: '/auth/otp/verify',
                body: {
                    phone,
                    code,
                    ...(answers.name ? { name: answers.name } : {}),
                },
            });
            await ctx.session.adopt(data);
            pendingPhone = null;

            return {
                summary: signedInSummary(data.user.name, ctx.config.write),
                data: { account: redactUser(data.user, { pii: ctx.config.pii }) },
            };
        }),
    );

    server.registerTool(
        'whoami',
        {
            title: 'Who am I',
            description: [
                'The account the person is signed in with: name, phone and e-mail. Phone and e-mail may',
                'come back masked; that is expected. Answers UNAUTHENTICATED when nobody is signed in.',
            ].join(' '),
            annotations: { readOnlyHint: true, openWorldHint: true },
            inputSchema: {},
            outputSchema: { account: accountView },
        },
        runPersonalTool('whoami', ctx, async () => {
            const { data } = await ctx.client.request<UserResource>({ path: '/auth/me', auth: true });

            return {
                summary: data.name ? `Signed in as ${data.name}.` : 'Signed in; the account has no name yet.',
                data: { account: redactUser(data, { pii: ctx.config.pii }) },
            };
        }),
    );

    server.registerTool(
        'logout',
        {
            title: 'Sign out',
            description: [
                'Signs the person out on this device; only when they ask to. Afterwards the account, booking',
                'and waitlist tools answer UNAUTHENTICATED until they sign in again.',
            ].join(' '),
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
            'update_contact_details',
            {
                title: 'Update e-mail or name',
                description: [
                    'Changes the e-mail and/or name on the person’s account; use only values the person gave.',
                    'With an e-mail set, reminders and freed-place notices go by e-mail instead of SMS;',
                    '`email: null` removes it and switches back to SMS. The phone number cannot be changed here.',
                ].join(' '),
                annotations: { idempotentHint: true, openWorldHint: true },
                inputSchema: {
                    email: z
                        .email()
                        .max(254)
                        .nullable()
                        .optional()
                        .describe('The new e-mail; null removes it; leave out to keep it.'),
                    name: z
                        .string()
                        .trim()
                        .min(1)
                        .max(120)
                        .optional()
                        .describe('The new name, shown on bookings; leave out to keep it.'),
                    confirm: confirmArg,
                },
                outputSchema: { account: accountView },
            },
            runPersonalTool(
                'update_contact_details',
                ctx,
                async (args: { email?: string | null; name?: string; confirm?: boolean }) => {
                    const user = ctx.session.user;

                    if (!user)
                        throw new ApiError({
                            status: 401,
                            code: 'UNAUTHENTICATED',
                            message: 'Nobody is signed in.',
                        });

                    const body: Record<string, string | null> = {};

                    if (args.email !== undefined) body['email'] = args.email;

                    if (args.name !== undefined) body['name'] = args.name;

                    if (Object.keys(body).length === 0)
                        throw new ApiError({
                            status: 400,
                            code: 'VALIDATION_ERROR',
                            message: 'Pass `email`, `name` or both.',
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

interface CodeAnswers {
    code: string;
    name?: string;
}

async function askForCode(ctx: ToolContext): Promise<CodeAnswers> {
    const outcome = await elicit(ctx, 'Enter the code from the SMS.', CODE_SCHEMA);

    if (!outcome.accepted)
        throw new ApiError({
            status: 400,
            code: 'SIGN_IN_CANCELLED',
            message: 'The person closed the sign-in prompt.',
        });

    const code = outcome.content['code'];
    const name = outcome.content['name'];

    if (typeof code !== 'string' || code.length === 0)
        throw new ApiError({ status: 400, code: 'OTP_INVALID', message: 'No code was entered.' });

    return {
        code,
        name: typeof name === 'string' && name.trim().length > 0 ? name.trim() : undefined,
    };
}

function codeFromArguments(args: { code?: string; name?: string }): CodeAnswers {
    if (!args.code)
        throw new ApiError({
            status: 400,
            code: 'CODE_REQUIRED',
            message: 'No code was given, and this app cannot ask the person for it.',
        });

    return { code: args.code, name: args.name };
}

function signedInSummary(name: string | undefined, write: boolean): string {
    if (name) return `Signed in as ${name}.`;

    return write
        ? 'Signed in. The account has no name yet, and bookings carry one: ask the person for their name and save it with update_contact_details.'
        : 'Signed in.';
}

function durationOf(seconds: number): string {
    return seconds % 60 === 0
        ? plural(seconds / 60, 'minute', 'minutes')
        : plural(seconds, 'second', 'seconds');
}

function summaryOf(body: Record<string, string | null>): string {
    const lines = Object.entries(body).map(([key, value]) => `${key}: ${value ?? '(removed)'}`);

    return `Change your account:\n${lines.join('\n')}`;
}
