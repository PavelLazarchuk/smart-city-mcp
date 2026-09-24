import { homedir } from 'node:os';
import { join } from 'node:path';

import { loadConfig } from '../../src/config.js';
import { createLogger, redact } from '../../src/logger.js';

const MINIMAL = { SMART_CITY_API_URL: 'http://localhost:8080/api/v1' };

describe('loadConfig', () => {
    it('refuses to start on a bad environment instead of failing later', () => {
        expect(() => loadConfig({})).toThrow(/SMART_CITY_API_URL/);
        expect(() => loadConfig({ ...MINIMAL, SMART_CITY_TZ: 'Nowhere/Nothing' })).toThrow(/time zone/);
        expect(() => loadConfig({ ...MINIMAL, SMART_CITY_MCP_TOOL_BUDGET: 'lots' })).toThrow();
    });

    it('is read-only and PII-free until told otherwise', () => {
        const config = loadConfig(MINIMAL);

        expect(config.write).toBe(false);
        expect(config.pii).toBe(false);
        expect(config.toolBudget).toBe(40);
        expect(config.logLevel).toBe('warn');
        expect(config.timeZoneExplicit).toBe(false);
    });

    it('drops the trailing slash so paths do not double up', () => {
        expect(loadConfig({ SMART_CITY_API_URL: 'http://localhost:8080/api/v1/' }).apiUrl).toBe(
            'http://localhost:8080/api/v1',
        );
    });

    it('takes the zone from the environment when it is given', () => {
        const config = loadConfig({ ...MINIMAL, SMART_CITY_TZ: 'Asia/Calcutta' });

        expect(config.timeZone).toBe('Asia/Calcutta');
        expect(config.timeZoneExplicit).toBe(true);
    });

    it('expands a leading ~ in the session path, since no shell does it for an env file', () => {
        const path = (value: string): string =>
            loadConfig({ ...MINIMAL, SMART_CITY_SESSION_PATH: value }).sessionPath;

        expect(path('~/.smart-city-mcp/session.json')).toBe(
            join(homedir(), '.smart-city-mcp', 'session.json'),
        );
        expect(path('/tmp/session.json')).toBe('/tmp/session.json');
    });
});

describe('logger', () => {
    it('redacts secrets by name, at any depth', () => {
        const fields = redact({
            url: 'http://x/api',
            body: { refresh_token: 'secret', phone: '491701234567', slot_id: 'slot-1' },
        });

        expect(fields).toEqual({
            url: 'http://x/api',
            body: { refresh_token: '[redacted]', phone: '[redacted]', slot_id: 'slot-1' },
        });
    });

    it('writes nothing above the configured level', () => {
        const lines: string[] = [];
        const sink = { write: (line: string) => lines.push(line) } as unknown as NodeJS.WritableStream;
        const logger = createLogger('warn', sink);
        logger.debug('quiet');
        logger.info('quiet');
        logger.warn('loud');

        expect(lines).toHaveLength(1);
        expect(JSON.parse(lines[0]!)).toMatchObject({ level: 'warn', msg: 'loud' });
    });
});
