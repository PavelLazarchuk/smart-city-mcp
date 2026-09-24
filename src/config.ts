import { homedir } from 'node:os';
import { join } from 'node:path';
import { z } from 'zod';

import { isSupportedTimeZone } from './mapping/time.js';

export const LOG_LEVELS = ['silent', 'error', 'warn', 'info', 'debug'] as const;
export type LogLevel = (typeof LOG_LEVELS)[number];

const timeZone = z.string().trim().max(64).refine(isSupportedTimeZone, 'Must be an IANA time zone name');

const apiUrl = z
    .string()
    .trim()
    .refine((value) => !/\s/.test(value), 'Must not contain whitespace')
    .pipe(z.url({ protocol: /^https?$/ }));

const envSchema = z.object({
    SMART_CITY_API_URL: apiUrl,
    SMART_CITY_TZ: timeZone.optional(),
    SMART_CITY_MCP_WRITE: z.stringbool().default(false),
    SMART_CITY_MCP_PII: z.stringbool().default(false),
    SMART_CITY_SESSION_PATH: z.string().trim().min(1).optional(),
    SMART_CITY_MCP_TOOL_BUDGET: z.coerce.number().int().min(1).max(10_000).default(40),
    LOG_LEVEL: z.enum(LOG_LEVELS).default('warn'),
});

export interface McpConfig {
    apiUrl: string;
    timeZone: string;
    timeZoneExplicit: boolean;
    write: boolean;
    pii: boolean;
    sessionPath: string;
    toolBudget: number;
    logLevel: LogLevel;
}

function processTimeZone(): string {
    return Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC';
}

export function defaultSessionPath(): string {
    return join(homedir(), '.smart-city-mcp', 'session.json');
}

function expandHome(path: string | undefined): string | undefined {
    if (path === '~') return homedir();

    return path?.startsWith('~/') ? join(homedir(), path.slice(2)) : path;
}

export function loadConfig(env: NodeJS.ProcessEnv = process.env): McpConfig {
    const parsed = envSchema.safeParse(env);

    if (!parsed.success) {
        const lines = parsed.error.issues.map(
            (issue) => `  ${issue.path.map(String).join('.') || '(root)'}: ${issue.message}`,
        );

        throw new Error(`Invalid environment:\n${lines.join('\n')}`);
    }

    const value = parsed.data;

    return {
        apiUrl: value.SMART_CITY_API_URL.replace(/\/+$/, ''),
        timeZone: value.SMART_CITY_TZ ?? processTimeZone(),
        timeZoneExplicit: value.SMART_CITY_TZ !== undefined,
        write: value.SMART_CITY_MCP_WRITE,
        pii: value.SMART_CITY_MCP_PII,
        sessionPath: expandHome(value.SMART_CITY_SESSION_PATH) ?? defaultSessionPath(),
        toolBudget: value.SMART_CITY_MCP_TOOL_BUDGET,
        logLevel: value.LOG_LEVEL,
    };
}
