import { mkdtemp, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { Client } from '@modelcontextprotocol/sdk/client/index.js';
import { InMemoryTransport } from '@modelcontextprotocol/sdk/inMemory.js';
import { ElicitRequestSchema, type CallToolResult } from '@modelcontextprotocol/sdk/types.js';

import { type StoredSession } from '../../../src/auth/store.js';
import { loadConfig } from '../../../src/config.js';
import { createLogger } from '../../../src/logger.js';
import { createServer, type BuiltServer } from '../../../src/server.js';

export type ElicitResponder = (message: string, schema: unknown) => Record<string, unknown> | null;

export interface HarnessOptions {
    apiUrl: string;
    write?: boolean;
    pii?: boolean;
    budget?: number;
    session?: Partial<StoredSession>;
    elicit?: ElicitResponder;
}

export interface Harness {
    client: Client;
    built: BuiltServer;
    sessionPath: string;
    toolNames(): Promise<string[]>;
    call(name: string, args?: Record<string, unknown>): Promise<CallToolResult>;
    close(): Promise<void>;
}

export async function startHarness(options: HarnessOptions): Promise<Harness> {
    const directory = await mkdtemp(join(tmpdir(), 'smart-city-mcp-e2e-'));
    const sessionPath = join(directory, 'session.json');

    if (options.session) {
        const session: StoredSession = {
            access_token: 'access-seed',
            refresh_token: 'refresh-seed',
            expires_at: Date.now() + 600_000,
            user: { id: 'user-seed', role: 'common-user', name: 'Alex' },
            ...options.session,
        };
        await writeFile(sessionPath, JSON.stringify(session), { mode: 0o600 });
    }

    const config = loadConfig({
        SMART_CITY_API_URL: options.apiUrl,
        SMART_CITY_MCP_WRITE: options.write ? 'true' : 'false',
        SMART_CITY_MCP_PII: options.pii ? 'true' : 'false',
        SMART_CITY_SESSION_PATH: sessionPath,
        SMART_CITY_MCP_TOOL_BUDGET: String(options.budget ?? 100),
        SMART_CITY_TZ: 'Europe/Berlin',
        LOG_LEVEL: 'silent',
    });
    const built = await createServer(config, createLogger('silent'));
    const client = new Client(
        { name: 'e2e', version: '0.0.0' },
        { capabilities: options.elicit ? { elicitation: {} } : {} },
    );

    if (options.elicit) {
        const responder = options.elicit;
        client.setRequestHandler(ElicitRequestSchema, (request) => {
            const params = request.params as { message?: string; requestedSchema?: unknown };
            const content = responder(params.message ?? '', params.requestedSchema);

            return content === null ? { action: 'decline' } : { action: 'accept', content };
        });
    }

    const [clientTransport, serverTransport] = InMemoryTransport.createLinkedPair();
    await Promise.all([built.server.connect(serverTransport), client.connect(clientTransport)]);

    return {
        client,
        built,
        sessionPath,
        toolNames: async () => (await client.listTools()).tools.map((tool) => tool.name).sort(),
        call: (name, args = {}) => client.callTool({ name, arguments: args }) as Promise<CallToolResult>,
        close: async () => {
            await client.close();
            await built.close();
            await rm(directory, { recursive: true, force: true });
        },
    };
}

export function structured<T = Record<string, unknown>>(result: CallToolResult): T {
    return result.structuredContent as T;
}

export function errorOf(result: CallToolResult): { code: string; next_steps: string[] } {
    return (result.structuredContent as { error: { code: string; next_steps: string[] } }).error;
}
