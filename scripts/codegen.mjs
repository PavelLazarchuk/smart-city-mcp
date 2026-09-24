import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import openapiTS, { astToString } from 'openapi-typescript';

const here = dirname(fileURLToPath(import.meta.url));
const outDir = resolve(here, '..', 'src', 'api', 'generated');

function sourceOf() {
    const explicit = process.argv[2];

    if (explicit) return explicit;

    const base = process.env.SMART_CITY_API_URL;

    if (!base) {
        throw new Error('Pass a URL or a file path, or set SMART_CITY_API_URL');
    }

    return new URL('/api/docs-json', base).toString();
}

async function loadDocument(source) {
    if (!/^https?:\/\//.test(source)) return JSON.parse(await readFile(resolve(source), 'utf8'));

    const response = await fetch(source, { headers: { accept: 'application/json' } });

    if (!response.ok) throw new Error(`${source} answered ${response.status}`);

    return await response.json();
}

const source = sourceOf();
const document = await loadDocument(source);
const types = astToString(await openapiTS(document));

await mkdir(outDir, { recursive: true });
await writeFile(resolve(outDir, 'openapi.json'), `${JSON.stringify(document, null, 4)}\n`);
await writeFile(resolve(outDir, 'schema.d.ts'), types);

const paths = Object.keys(document.paths ?? {}).length;
process.stderr.write(`generated from ${source}: ${paths} paths\n`);
