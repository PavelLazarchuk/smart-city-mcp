import { type LogLevel } from './config.js';

const ORDER: Record<LogLevel, number> = { silent: 0, error: 1, warn: 2, info: 3, debug: 4 };

const SECRET_KEYS = new Set([
    'access_token',
    'refresh_token',
    'authorization',
    'code',
    'password',
    'new_password',
    'current_password',
    'phone',
    'idempotency-key',
]);

export type LogFields = Record<string, unknown>;

export interface Logger {
    error(message: string, fields?: LogFields): void;
    warn(message: string, fields?: LogFields): void;
    info(message: string, fields?: LogFields): void;
    debug(message: string, fields?: LogFields): void;
}

export function redact(fields: LogFields): LogFields {
    const out: LogFields = {};

    for (const [key, value] of Object.entries(fields)) {
        if (SECRET_KEYS.has(key.toLowerCase())) {
            out[key] = '[redacted]';
            continue;
        }

        out[key] =
            value && typeof value === 'object' && !Array.isArray(value) ? redact(value as LogFields) : value;
    }

    return out;
}

export function createLogger(level: LogLevel, sink: NodeJS.WritableStream = process.stderr): Logger {
    const write = (at: LogLevel, message: string, fields?: LogFields): void => {
        if (ORDER[at] > ORDER[level]) return;

        const payload = { level: at, time: new Date().toISOString(), msg: message, ...redact(fields ?? {}) };
        sink.write(`${JSON.stringify(payload)}\n`);
    };

    return {
        error: (message, fields) => write('error', message, fields),
        warn: (message, fields) => write('warn', message, fields),
        info: (message, fields) => write('info', message, fields),
        debug: (message, fields) => write('debug', message, fields),
    };
}
