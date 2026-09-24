import { createRequire } from 'node:module';

const pkg = createRequire(import.meta.url)('../package.json') as { name: string; version: string };

export const SERVER_NAME = pkg.name;
export const SERVER_VERSION = pkg.version;
export const USER_AGENT = `${pkg.name}/${pkg.version}`;

export const SUPPORTED_API_MAJORS = [1] as const;
