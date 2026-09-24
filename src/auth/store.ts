import { chmod, mkdir, readFile, rename, rm, writeFile } from 'node:fs/promises';
import { dirname } from 'node:path';
import { z } from 'zod';

import { type Logger } from '../logger.js';

export const storedSessionSchema = z.object({
    access_token: z.string().min(1),
    refresh_token: z.string().min(1),
    expires_at: z.number().int().positive(),
    user: z.object({
        id: z.string().min(1),
        role: z.string().min(1),
        name: z.string().optional(),
        phone: z.string().optional(),
        email: z.string().optional(),
    }),
});
export type StoredSession = z.infer<typeof storedSessionSchema>;

export class SessionStore {
    constructor(
        private readonly path: string,
        private readonly logger: Logger,
    ) {}

    async read(): Promise<StoredSession | null> {
        try {
            const parsed = storedSessionSchema.safeParse(JSON.parse(await readFile(this.path, 'utf8')));

            if (!parsed.success) {
                this.logger.warn('session file ignored: it does not match the expected shape');

                return null;
            }

            return parsed.data;
        } catch (error) {
            if ((error as NodeJS.ErrnoException).code !== 'ENOENT')
                this.logger.warn('session file unreadable', { path: this.path });

            return null;
        }
    }

    async write(session: StoredSession): Promise<void> {
        await mkdir(dirname(this.path), { recursive: true, mode: 0o700 });

        const pending = `${this.path}.${process.pid}.tmp`;
        await writeFile(pending, `${JSON.stringify(session)}\n`, { mode: 0o600 });
        await chmod(pending, 0o600);

        try {
            await rename(pending, this.path);
        } catch (error) {
            await rm(pending, { force: true });

            throw error;
        }
    }

    async clear(): Promise<void> {
        await rm(this.path, { force: true });
    }
}
