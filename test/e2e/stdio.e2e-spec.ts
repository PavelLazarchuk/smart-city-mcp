import { spawn } from 'node:child_process';
import { execFileSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

import { startStubApi, type Stub } from './support/stub-api.js';

const root = fileURLToPath(new URL('../..', import.meta.url));

interface Run {
    stdout: string;
    stderr: string;
}

function request(id: number, method: string, params: Record<string, unknown> = {}): string {
    return `${JSON.stringify({ jsonrpc: '2.0', id, method, params })}\n`;
}

async function runServer(apiUrl: string): Promise<Run> {
    const child = spawn(process.execPath, ['dist/main.js'], {
        cwd: root,
        env: {
            ...process.env,
            SMART_CITY_API_URL: apiUrl,
            SMART_CITY_SESSION_PATH: `${root}/.jest-cache/stdio-session.json`,
            SMART_CITY_MCP_WRITE: 'false',
            LOG_LEVEL: 'debug',
        },
        stdio: ['pipe', 'pipe', 'pipe'],
    });
    let stdout = '';
    let stderr = '';
    child.stdout.on('data', (chunk: Buffer) => (stdout += chunk.toString('utf8')));
    child.stderr.on('data', (chunk: Buffer) => (stderr += chunk.toString('utf8')));

    child.stdin.write(
        request(1, 'initialize', {
            protocolVersion: '2025-06-18',
            capabilities: {},
            clientInfo: { name: 'stdio-check', version: '0' },
        }),
    );
    child.stdin.write(`${JSON.stringify({ jsonrpc: '2.0', method: 'notifications/initialized' })}\n`);
    child.stdin.write(request(2, 'tools/list'));
    child.stdin.write(request(3, 'tools/call', { name: 'search_services', arguments: { q: 'x-ray' } }));
    child.stdin.write(request(4, 'resources/templates/list'));

    await new Promise((resolve) => setTimeout(resolve, 1_500));
    child.kill('SIGTERM');
    await new Promise((resolve) => child.on('exit', resolve));

    return { stdout, stderr };
}

describe('stdio transport', () => {
    let stub: Stub;

    beforeAll(async () => {
        if (!existsSync(`${root}/dist/main.js`))
            execFileSync('npx', ['tsc', '-p', 'tsconfig.build.json'], { cwd: root, stdio: 'inherit' });

        stub = await startStubApi();
    });

    afterAll(async () => {
        await stub.close();
    });

    it('writes nothing but protocol frames to stdout', async () => {
        const run = await runServer(stub.url);
        const lines = run.stdout.split('\n').filter((line) => line.trim().length > 0);

        expect(lines.length).toBeGreaterThanOrEqual(4);

        for (const line of lines) {
            const frame = JSON.parse(line) as { jsonrpc?: string };

            expect(frame.jsonrpc).toBe('2.0');
        }
    });

    it('logs to stderr, and the log carries no token', async () => {
        const run = await runServer(stub.url);

        expect(run.stderr).toContain('"level"');
        expect(run.stderr).not.toContain('access-');
        expect(run.stderr).not.toContain('refresh-');
    });

    it('refuses to start on an invalid environment, on stderr, without a stack dump on stdout', async () => {
        const child = spawn(process.execPath, ['dist/main.js'], {
            cwd: root,
            env: { ...process.env, SMART_CITY_API_URL: 'not-a-url' },
            stdio: ['pipe', 'pipe', 'pipe'],
        });
        let stdout = '';
        let stderr = '';
        child.stdout.on('data', (chunk: Buffer) => (stdout += chunk.toString('utf8')));
        child.stderr.on('data', (chunk: Buffer) => (stderr += chunk.toString('utf8')));
        const code = await new Promise<number | null>((resolve) => child.on('exit', resolve));

        expect(code).toBe(1);
        expect(stdout).toBe('');
        expect(stderr).toContain('SMART_CITY_API_URL');
    });
});
