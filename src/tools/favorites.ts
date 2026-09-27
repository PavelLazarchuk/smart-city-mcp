import { type McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { z } from 'zod';

import {
    type FavoriteResource,
    type FavoriteType,
    type OrganizationDetail,
    type ServiceResource,
    FAVORITE_TYPES,
    objectIdSchema,
} from '../api/contracts.js';
import { ORGANIZATION_LABEL_FIELDS, SERVICE_LABEL_FIELDS, fieldsParam } from '../api/fields.js';
import { confirmArg, confirmWrite, type ToolContext } from './context.js';
import { DATA_NOTICE, plural, runPersonalTool } from './registry.js';

const favoriteView = z.looseObject({
    type: z.enum(FAVORITE_TYPES),
    id: z.string(),
    organization_id: z.string(),
    available: z.boolean(),
    label: z.string().nullable(),
    created_at: z.string(),
});

const typeArg = z.enum(FAVORITE_TYPES).describe('`service` or `organization`.');
const targetIdArg = objectIdSchema.describe(
    'The `id` of a service (search_services, get_service) or of an organization (list_organizations).',
);

export interface FavoriteView {
    type: FavoriteType;
    id: string;
    organization_id: string;
    available: boolean;
    label: string | null;
    address?: string;
    price?: number | null;
    currency?: string;
    duration_minutes?: number | null;
    status?: string;
    created_at: string;
    note?: string;
}

export function favoriteViewOf(favorite: FavoriteResource): FavoriteView {
    const base = {
        type: favorite.type,
        id: favorite.id,
        organization_id: favorite.organization_id,
        available: favorite.available,
        created_at: favorite.created_at,
    };
    const unavailable = favorite.available
        ? {}
        : {
              note:
                  favorite.type === 'service'
                      ? 'Not on offer right now: the organization unpublished or removed it. It stays saved and comes back if they restore it.'
                      : 'This organization is gone.',
          };

    if (favorite.type === 'organization') {
        const organization = favorite.organization;

        return {
            ...base,
            label: organization?.main_label ?? null,
            ...(organization?.address ? { address: organization.address } : {}),
            ...(organization ? { status: organization.status } : {}),
            ...unavailable,
        };
    }

    const service = favorite.service;

    return {
        ...base,
        label: service?.label ?? null,
        ...(service
            ? {
                  ...(service.address ? { address: service.address } : {}),
                  price: service.price,
                  ...(service.currency ? { currency: service.currency } : {}),
                  duration_minutes: service.duration_minutes,
              }
            : {}),
        ...unavailable,
    };
}

async function labelOf(ctx: ToolContext, type: FavoriteType, id: string): Promise<string> {
    if (type === 'organization') {
        const { data } = await ctx.client.request<OrganizationDetail>({
            path: `/organizations/${id}`,
            query: { fields: fieldsParam(ORGANIZATION_LABEL_FIELDS) },
            cache: true,
        });

        return data.main_label;
    }

    const { data } = await ctx.client.request<ServiceResource>({
        path: `/services/${id}`,
        query: { fields: fieldsParam(SERVICE_LABEL_FIELDS) },
        cache: true,
    });

    return data.label;
}

async function knownLabelOf(ctx: ToolContext, type: FavoriteType, id: string): Promise<string | null> {
    try {
        return await labelOf(ctx, type, id);
    } catch {
        return null;
    }
}

export function registerFavoriteTools(server: McpServer, ctx: ToolContext): void {
    const write = ctx.config.write;

    server.registerTool(
        'list_favorites',
        {
            title: 'My favorites',
            description: [
                'Services and organizations the person saved, newest first. Pass a service’s `id` to',
                'get_service or find_slots, an organization’s `id` to get_organization or search_services.',
                '`available: false` means the item is not on offer right now; `note` says why.',
                write ? 'Save or drop one with add_favorite / remove_favorite.' : '',
                DATA_NOTICE,
            ]
                .filter(Boolean)
                .join(' '),
            annotations: { readOnlyHint: true, openWorldHint: true },
            inputSchema: {
                type: typeArg.optional().describe('Only services or only organizations; leave out for both.'),
                limit: z.number().int().min(1).max(25).default(10),
                page: z
                    .number()
                    .int()
                    .min(1)
                    .max(10)
                    .default(1)
                    .describe(
                        'For more than `limit` favorites: the next page, while `total` says there are more.',
                    ),
            },
            outputSchema: {
                total: z.number().nullable(),
                page: z.number(),
                items: z.array(favoriteView),
            },
        },
        runPersonalTool(
            'list_favorites',
            ctx,
            async (args: { type?: FavoriteType; limit: number; page: number }) => {
                const { data, meta } = await ctx.client.request<FavoriteResource[]>({
                    path: '/me/favorites',
                    query: { type: args.type, limit: args.limit, page: args.page },
                    auth: true,
                });
                const items = (data ?? []).map(favoriteViewOf);
                const total = (meta?.['total'] as number | null | undefined) ?? items.length;
                const more = total !== null && args.page * args.limit < total;

                return {
                    summary: `${plural(items.length, 'favorite', 'favorites')}${more ? ` of ${total}; call again with page ${args.page + 1} for more` : ''}.`,
                    data: { total, page: args.page, items },
                };
            },
        ),
    );

    if (!write) return;

    server.registerTool(
        'add_favorite',
        {
            title: 'Save to favorites',
            description: [
                'Saves a service or an organization to the person’s favorites, only when they ask to.',
                'Saving one that is already saved changes nothing. An account keeps up to 100.',
            ].join(' '),
            annotations: { idempotentHint: true, openWorldHint: true },
            inputSchema: { type: typeArg, id: targetIdArg, confirm: confirmArg },
            outputSchema: { saved: z.boolean(), type: z.enum(FAVORITE_TYPES), id: z.string() },
        },
        runPersonalTool(
            'add_favorite',
            ctx,
            async (args: { type: FavoriteType; id: string; confirm?: boolean }) => {
                const label = await labelOf(ctx, args.type, args.id);
                await confirmWrite(ctx, `Save "${label}" to your favorites?`, args.confirm);
                await ctx.client.request({
                    method: 'PUT',
                    path: `/me/favorites/${args.type}/${args.id}`,
                    auth: true,
                });

                return {
                    summary: `"${label}" is in the favorites.`,
                    data: { saved: true, type: args.type, id: args.id },
                };
            },
        ),
    );

    server.registerTool(
        'remove_favorite',
        {
            title: 'Remove from favorites',
            description: [
                'Removes a service or an organization from the person’s favorites, only when they ask to.',
                'Take `type` and `id` from list_favorites. Removing one that is not saved changes nothing.',
            ].join(' '),
            annotations: { destructiveHint: true, idempotentHint: true, openWorldHint: true },
            inputSchema: { type: typeArg, id: targetIdArg, confirm: confirmArg },
            outputSchema: { removed: z.boolean(), type: z.enum(FAVORITE_TYPES), id: z.string() },
        },
        runPersonalTool(
            'remove_favorite',
            ctx,
            async (args: { type: FavoriteType; id: string; confirm?: boolean }) => {
                const label = await knownLabelOf(ctx, args.type, args.id);
                const what = label ? `"${label}"` : `this ${args.type}`;
                await confirmWrite(ctx, `Remove ${what} from your favorites?`, args.confirm);
                await ctx.client.request({
                    method: 'DELETE',
                    path: `/me/favorites/${args.type}/${args.id}`,
                    auth: true,
                });

                return {
                    summary: `${label ? `"${label}"` : `The ${args.type}`} is no longer in the favorites.`,
                    data: { removed: true, type: args.type, id: args.id },
                };
            },
        ),
    );
}
