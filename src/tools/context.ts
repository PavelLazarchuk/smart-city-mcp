import { type McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';

import { type ApiClient } from '../api/client.js';
import { ApiError } from '../api/errors.js';
import { type SessionManager } from '../auth/session.js';
import { type McpConfig } from '../config.js';
import { type Logger } from '../logger.js';
import { type ElicitationSchema } from '../mapping/form.js';

export class ToolBudget {
    private spent = 0;

    constructor(private readonly max: number) {}

    spend(tool: string): void {
        this.spent += 1;

        if (this.spent <= this.max) return;

        throw new ApiError({
            status: 429,
            code: 'RATE_LIMITED',
            message: `This session's budget of ${this.max} tool calls is used up (last: ${tool}).`,
        });
    }
}

export interface ToolContext {
    config: McpConfig;
    client: ApiClient;
    session: SessionManager;
    logger: Logger;
    budget: ToolBudget;
    server: McpServer;
}

export function supportsElicitation(ctx: ToolContext): boolean {
    return ctx.server.server.getClientCapabilities()?.elicitation !== undefined;
}

export interface ElicitOutcome {
    accepted: boolean;
    content: Record<string, unknown>;
}

export async function elicit(
    ctx: ToolContext,
    message: string,
    requestedSchema: ElicitationSchema,
): Promise<ElicitOutcome> {
    const result = await ctx.server.server.elicitInput({
        message,
        requestedSchema: requestedSchema as never,
    });

    return {
        accepted: result.action === 'accept',
        content: result.content ?? {},
    };
}

const CONFIRM_SCHEMA: ElicitationSchema = {
    type: 'object',
    properties: { confirm: { type: 'boolean', title: 'Go ahead' } },
    required: ['confirm'],
};

export async function confirmWrite(ctx: ToolContext, summary: string, confirmed?: boolean): Promise<void> {
    if (supportsElicitation(ctx)) {
        const outcome = await elicit(ctx, summary, CONFIRM_SCHEMA);

        if (!outcome.accepted || outcome.content['confirm'] !== true)
            throw new ApiError({
                status: 400,
                code: 'NOT_CONFIRMED',
                message: 'The person did not confirm.',
            });

        return;
    }

    if (confirmed === true) return;

    throw new ApiError({
        status: 400,
        code: 'CONFIRMATION_REQUIRED',
        message: `Show this to the person and call again with confirm: true.\n\n${summary}`,
    });
}
