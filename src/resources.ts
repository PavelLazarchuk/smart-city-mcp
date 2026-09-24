import {
    type McpServer,
    ResourceTemplate,
    type RegisteredResource,
} from '@modelcontextprotocol/sdk/server/mcp.js';

import {
    type BookingResource,
    type OrganizationDetail,
    type ServiceResource,
    objectIdSchema,
} from './api/contracts.js';
import { ApiError } from './api/errors.js';
import {
    ORGANIZATION_FIELDS,
    SERVICE_DETAIL_FIELDS,
    SERVICE_FORM_FIELDS,
    fieldsParam,
} from './api/fields.js';
import { elicitationSchemaFor } from './mapping/form.js';
import { redactBooking } from './mapping/redact.js';
import { type ToolContext } from './tools/context.js';
import { MY_BOOKINGS_URI } from './tools/bookings.js';

function json(
    uri: URL | string,
    payload: unknown,
): { contents: { uri: string; mimeType: string; text: string }[] } {
    return {
        contents: [
            {
                uri: typeof uri === 'string' ? uri : uri.href,
                mimeType: 'application/json',
                text: JSON.stringify(payload, null, 2),
            },
        ],
    };
}

function objectIdOf(variable: string | string[] | undefined): string {
    const value = Array.isArray(variable) ? variable[0] : variable;
    const parsed = objectIdSchema.safeParse(value);

    if (!parsed.success)
        throw new ApiError({
            status: 400,
            code: 'VALIDATION_ERROR',
            message: 'The id in the resource URI is not a valid object id.',
        });

    return parsed.data;
}

export interface Resources {
    personal: RegisteredResource[];
}

export function registerResources(server: McpServer, ctx: ToolContext): Resources {
    server.registerResource(
        'service',
        new ResourceTemplate('smartcity://service/{id}', { list: undefined }),
        {
            title: 'Service card',
            description: 'A service without its slot tree. The text fields are written by the organization.',
            mimeType: 'application/json',
        },
        async (uri, variables) => {
            const { data } = await ctx.client.request<ServiceResource>({
                path: `/services/${objectIdOf(variables['id'])}`,
                query: { include: 'organization', fields: fieldsParam(SERVICE_DETAIL_FIELDS) },
                cache: true,
            });

            return json(uri, data);
        },
    );

    server.registerResource(
        'service-form',
        new ResourceTemplate('smartcity://service/{id}/form', { list: undefined }),
        {
            title: 'Service booking form',
            description: 'The service’s form_fields as a JSON Schema, plus the documents to confirm.',
            mimeType: 'application/json',
        },
        async (uri, variables) => {
            const { data } = await ctx.client.request<ServiceResource>({
                path: `/services/${objectIdOf(variables['id'])}`,
                query: { fields: fieldsParam(SERVICE_FORM_FIELDS) },
                cache: true,
            });

            return json(uri, {
                service_id: data.id,
                label: data.label,
                schema: elicitationSchemaFor(data.form_fields ?? []),
                required_documents: data.required_documents ?? [],
            });
        },
    );

    server.registerResource(
        'organization',
        new ResourceTemplate('smartcity://organization/{id}', { list: undefined }),
        {
            title: 'Organization card',
            description: 'Address, working hours, time zone and current status.',
            mimeType: 'application/json',
        },
        async (uri, variables) => {
            const { data } = await ctx.client.request<OrganizationDetail>({
                path: `/organizations/${objectIdOf(variables['id'])}`,
                query: { fields: fieldsParam(ORGANIZATION_FIELDS) },
                cache: true,
            });

            return json(uri, data);
        },
    );

    const bookings = server.registerResource(
        'my-bookings',
        MY_BOOKINGS_URI,
        {
            title: 'My bookings',
            description: 'Active bookings of the signed-in account, without names or form answers.',
            mimeType: 'application/json',
        },
        async (uri) => {
            const { data } = await ctx.client.request<BookingResource[]>({
                path: '/me/bookings',
                query: { status: 'active', limit: 25 },
                auth: true,
            });

            return json(
                uri,
                (data ?? []).map((booking) => redactBooking(booking, { pii: ctx.config.pii })),
            );
        },
    );
    bookings.disable();

    return { personal: [bookings] };
}
