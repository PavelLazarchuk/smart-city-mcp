import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { type z } from 'zod';

import {
    BOOKING_STATUSES,
    FORM_FIELD_TYPES,
    ORGANIZATION_STATUSES,
    SERVICE_STATUSES,
    SERVICE_TYPES,
    SLOT_TYPES,
    WAITLIST_STATUSES,
    createBookingSchema,
    joinWaitlistSchema,
    listOwnBookingsQuerySchema,
    otpRequestSchema,
    otpVerifySchema,
    refreshRequestSchema,
    rescheduleBookingSchema,
    serviceSlotsQuerySchema,
    updateSelfSchema,
} from '../../src/api/contracts.js';
import {
    ORGANIZATION_FIELDS,
    SERVICE_BOOKING_FIELDS,
    SERVICE_DETAIL_FIELDS,
    SERVICE_FORM_FIELDS,
    SERVICE_LIST_FIELDS,
    SERVICE_POLICY_FIELDS,
} from '../../src/api/fields.js';
import { ERROR_GUIDANCE, UNREACHABLE_CODES } from '../../src/mapping/errors.js';

interface JsonSchema {
    $ref?: string;
    type?: string;
    properties?: Record<string, JsonSchema>;
    required?: string[];
    enum?: string[];
    items?: JsonSchema;
    allOf?: JsonSchema[];
}

interface Operation {
    parameters?: { name: string; in: string; required?: boolean }[];
    requestBody?: { content?: Record<string, { schema?: JsonSchema }> };
    responses?: Record<string, unknown>;
}

const document = JSON.parse(
    readFileSync(fileURLToPath(new URL('../../src/api/generated/openapi.json', import.meta.url)), 'utf8'),
) as {
    paths: Record<string, Record<string, Operation>>;
    components: { schemas: Record<string, JsonSchema> };
};

const PREFIX = '/api/v1';

function operation(path: string, method: string): Operation {
    const found = document.paths[`${PREFIX}${path}`]?.[method];

    if (!found) throw new Error(`${method.toUpperCase()} ${path} is not in the OpenAPI document`);

    return found;
}

function schemaOf(name: string): JsonSchema {
    const found = document.components.schemas[name];

    if (!found) throw new Error(`${name} is not in the OpenAPI document`);

    return found;
}

function bodySchemaOf(path: string, method: string): JsonSchema {
    const ref = operation(path, method).requestBody?.content?.['application/json']?.schema?.$ref;

    if (!ref) throw new Error(`${method.toUpperCase()} ${path} declares no JSON body`);

    return schemaOf(ref.replace('#/components/schemas/', ''));
}

function queryNamesOf(path: string, method: string): Set<string> {
    return new Set(
        (operation(path, method).parameters ?? [])
            .filter((parameter) => parameter.in === 'query')
            .map((parameter) => parameter.name),
    );
}

function keysOf(schema: z.ZodType): string[] {
    const shape = (schema as unknown as { def: { shape?: Record<string, unknown> } }).def.shape;

    return Object.keys(shape ?? {}).sort();
}

function requiredKeysOf(schema: z.ZodType): string[] {
    const shape = (schema as unknown as { def: { shape?: Record<string, z.ZodType> } }).def.shape ?? {};

    return Object.entries(shape)
        .filter(([, value]) => !value.safeParse(undefined).success)
        .map(([key]) => key)
        .sort();
}

function errorCodesOf(path: string, method: string): string[] {
    const codes = new Set<string>();
    const walk = (node: unknown): void => {
        if (Array.isArray(node)) {
            for (const item of node) walk(item);

            return;
        }

        if (!node || typeof node !== 'object') return;

        for (const [key, value] of Object.entries(node)) {
            if (key === 'enum' && Array.isArray(value)) for (const code of value) codes.add(String(code));
            else walk(value);
        }
    };
    walk(operation(path, method).responses ?? {});

    return [...codes];
}

describe('request bodies', () => {
    const cases: [string, string, string, z.ZodType][] = [
        ['/services/{id}/bookings', 'post', 'CreateBookingDto', createBookingSchema],
        ['/bookings/{booking_id}/reschedule', 'post', 'RescheduleBookingDto', rescheduleBookingSchema],
        ['/services/{id}/waitlist', 'post', 'JoinWaitlistDto', joinWaitlistSchema],
        ['/auth/otp/request', 'post', 'OtpRequestDto', otpRequestSchema],
        ['/auth/otp/verify', 'post', 'OtpVerifyDto', otpVerifySchema],
        ['/auth/refresh', 'post', 'RefreshDto', refreshRequestSchema],
    ];

    it.each(cases)('%s %s matches %s', (path, method, name, schema) => {
        const documented = bodySchemaOf(path, method);

        expect(documented).toBe(schemaOf(name));
        expect(keysOf(schema)).toEqual(Object.keys(documented.properties ?? {}).sort());
        expect(requiredKeysOf(schema)).toEqual([...(documented.required ?? [])].sort());
    });

    it('updateSelfSchema stays the subset of the user account this server may write', () => {
        expect(keysOf(updateSelfSchema)).toEqual(['email', 'name']);
        expect(requiredKeysOf(updateSelfSchema)).toEqual([]);
    });
});

describe('query parameters', () => {
    it('serviceSlotsQuerySchema only asks for parameters the slots route accepts', () => {
        const documented = queryNamesOf('/services/{id}/slots', 'get');

        for (const key of keysOf(serviceSlotsQuerySchema)) expect(documented).toContain(key);
    });

    it('listOwnBookingsQuerySchema only asks for parameters /me/bookings accepts', () => {
        const documented = queryNamesOf('/me/bookings', 'get');

        for (const key of keysOf(listOwnBookingsQuerySchema)) expect(documented).toContain(key);
    });

    it('the reads this server issues accept the filters it sends', () => {
        expect([...queryNamesOf('/services', 'get')]).toEqual(
            expect.arrayContaining([
                'q',
                'tags',
                'category_id',
                'organization_id',
                'facets',
                'include',
                'fields',
            ]),
        );
        expect([...queryNamesOf('/services/nearby', 'get')]).toEqual(
            expect.arrayContaining(['lat', 'lng', 'radius_m', 'limit', 'tags', 'include', 'fields']),
        );
        expect([...queryNamesOf('/organizations/nearby', 'get')]).toEqual(
            expect.arrayContaining(['lat', 'lng', 'radius_m', 'main_category', 'limit']),
        );
        expect([...queryNamesOf('/news', 'get')]).toEqual(
            expect.arrayContaining(['q', 'rubric', 'enabled', 'organization_id']),
        );
        expect([...queryNamesOf('/infosections', 'get')]).toEqual(
            expect.arrayContaining(['enabled', 'organization_id']),
        );
    });
});

describe('sparse field lists', () => {
    const cases: [string, readonly string[], string][] = [
        ['SERVICE_LIST_FIELDS', SERVICE_LIST_FIELDS, 'MaskedServiceResponseDto'],
        ['SERVICE_DETAIL_FIELDS', SERVICE_DETAIL_FIELDS, 'MaskedServiceResponseDto'],
        ['SERVICE_POLICY_FIELDS', SERVICE_POLICY_FIELDS, 'MaskedServiceResponseDto'],
        ['SERVICE_BOOKING_FIELDS', SERVICE_BOOKING_FIELDS, 'MaskedServiceResponseDto'],
        ['SERVICE_FORM_FIELDS', SERVICE_FORM_FIELDS, 'MaskedServiceResponseDto'],
        ['ORGANIZATION_FIELDS', ORGANIZATION_FIELDS, 'OrganizationDetailDto'],
    ];

    it.each(cases)('%s names only top-level keys of %s', (_name, fields, dto) => {
        const known = Object.keys(schemaOf(dto).properties ?? {});

        for (const field of fields) expect(known).toContain(field);
    });
});

describe('enumerations', () => {
    it('match the ones the document declares', () => {
        const enumOf = (dto: string, property: string): string[] =>
            (schemaOf(dto).properties?.[property]?.enum ?? []).slice().sort();

        expect([...SLOT_TYPES].sort()).toEqual(enumOf('BookingCreatedResponseDto', 'child_type'));
        expect([...SERVICE_TYPES].sort()).toEqual(enumOf('CreateOptionDto', 'service_type'));
        expect([...SERVICE_STATUSES].sort()).toEqual(enumOf('SetServiceStatusDto', 'status'));
        expect([...BOOKING_STATUSES].sort()).toEqual(enumOf('BookingResourceDto', 'status'));
        expect([...WAITLIST_STATUSES].sort()).toEqual(enumOf('WaitlistEntryResponseDto', 'status'));
        expect([...ORGANIZATION_STATUSES].sort()).toEqual(enumOf('OrganizationResponseDto', 'status'));
        expect([...FORM_FIELD_TYPES].sort()).toEqual(
            (
                schemaOf('MaskedServiceResponseDto').properties?.['form_fields']?.items?.properties?.['type']
                    ?.enum ?? []
            )
                .slice()
                .sort(),
        );
    });
});

describe('error codes', () => {
    const surface: [string, string][] = [
        ['/services', 'get'],
        ['/services/nearby', 'get'],
        ['/services/{id}', 'get'],
        ['/services/{id}/slots', 'get'],
        ['/services/{id}/bookings', 'post'],
        ['/services/{id}/waitlist', 'post'],
        ['/organizations', 'get'],
        ['/organizations/nearby', 'get'],
        ['/organizations/{id}', 'get'],
        ['/organizations/{id}/news', 'get'],
        ['/organizations/{id}/infosections', 'get'],
        ['/news', 'get'],
        ['/infosections', 'get'],
        ['/categories', 'get'],
        ['/auth/otp/request', 'post'],
        ['/auth/otp/verify', 'post'],
        ['/auth/refresh', 'post'],
        ['/auth/logout', 'post'],
        ['/auth/me', 'get'],
        ['/me/bookings', 'get'],
        ['/me/waitlist', 'get'],
        ['/bookings/{booking_id}', 'get'],
        ['/bookings/{booking_id}', 'delete'],
        ['/bookings/{booking_id}/confirm', 'post'],
        ['/bookings/{booking_id}/reschedule', 'post'],
        ['/waitlist/{id}', 'delete'],
        ['/users/{id}', 'patch'],
        ['/health/info', 'get'],
    ];

    it('every code the reachable surface can return has a row or is declared unreachable', () => {
        const uncovered = new Set<string>();

        for (const [path, method] of surface) {
            for (const code of errorCodesOf(path, method)) {
                if (!ERROR_GUIDANCE[code] && !UNREACHABLE_CODES.has(code))
                    uncovered.add(`${code} (${method.toUpperCase()} ${path})`);
            }
        }

        expect([...uncovered]).toEqual([]);
    });

    it('no code is both explained and declared unreachable', () => {
        const both = Object.keys(ERROR_GUIDANCE).filter((code) => UNREACHABLE_CODES.has(code));

        expect(both).toEqual([]);
    });
});
