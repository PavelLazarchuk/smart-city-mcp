import { type McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { z } from 'zod';

import {
    type CategoryResource,
    type InfoSectionResource,
    type NewsResource,
    type OrganizationDetail,
    type OrganizationResource,
    type ServiceResource,
    type ServiceSlots,
    objectIdSchema,
    uuidSchema,
} from '../api/contracts.js';
import {
    ORGANIZATION_FIELDS,
    SERVICE_DETAIL_FIELDS,
    SERVICE_LIST_FIELDS,
    SERVICE_POLICY_FIELDS,
    fieldsParam,
} from '../api/fields.js';
import { flattenSlots, MAX_CANDIDATES } from '../mapping/slots.js';
import {
    PART_OF_DAY_VALUES,
    WHEN_VALUES,
    isDateOnly,
    type PartOfDay,
    resolveWindow,
} from '../mapping/time.js';
import { ApiError } from '../api/errors.js';
import { type ToolContext } from './context.js';
import { DATA_NOTICE, plural, runTool } from './registry.js';

const DEFAULT_LIMIT = 10;
const MAX_LIMIT = 25;
const SLOT_FETCH_LIMIT = 100;

const limitArg = z.number().int().min(1).max(MAX_LIMIT).default(DEFAULT_LIMIT);

const facetBucket = z.looseObject({ value: z.string(), count: z.number() });
const includedOrganization = z
    .looseObject({
        id: z.string(),
        main_label: z.string(),
        main_category: z.string().optional(),
        address: z.string().optional(),
        status: z.string(),
        timezone: z.string(),
    })
    .optional();

const serviceCard = z.looseObject({
    id: z.string(),
    label: z.string(),
    description: z.string().optional(),
    tags: z.array(z.string()),
    address: z.string().optional(),
    duration_minutes: z.number().nullable(),
    price: z.number().nullable(),
    currency: z.string().optional(),
    organization_id: z.string(),
    category_id: z.string().nullable(),
    organization: includedOrganization,
    distance_m: z.number().optional(),
});

const slotView = z.looseObject({
    option_id: z.string(),
    option_label: z.string(),
    slot_id: z.string(),
    slot_label: z.string(),
    child_type: z.string(),
    starts_at: z.string().nullable(),
    ends_at: z.string().nullable(),
    time: z.string().nullable(),
    available: z.number().nullable(),
    full: z.boolean(),
    note: z.string().optional(),
});

type ServiceCard = ServiceResource;

interface SearchArgs {
    q?: string;
    tags?: string;
    category_id?: string;
    organization_id?: string;
    limit: number;
}

interface NearbyArgs {
    lat: number;
    lng: number;
    radius_m: number;
    tags?: string;
    limit: number;
}

interface FindSlotsArgs {
    service_id: string;
    when?: string;
    part_of_day?: PartOfDay;
    after?: string;
    before?: string;
    option_id?: string;
    only_available: boolean;
    limit: number;
}

interface ListOrganizationsArgs {
    q?: string;
    main_category?: string;
    lat?: number;
    lng?: number;
    radius_m?: number;
    limit: number;
}

interface ListNewsArgs {
    q?: string;
    rubric?: string;
    organization_id?: string;
    limit: number;
}

interface InfoSectionsArgs {
    organization_id?: string;
    limit: number;
}

interface Page<T> {
    items: T[];
    total: number | null;
}

async function listServices(
    ctx: ToolContext,
    query: Record<string, string | number | boolean | undefined>,
): Promise<{ page: Page<ServiceCard>; facets?: unknown }> {
    const result = await ctx.client.request<ServiceCard[]>({
        path: '/services',
        query: { ...query, include: 'organization', fields: fieldsParam(SERVICE_LIST_FIELDS) },
        cache: true,
    });

    return {
        page: { items: result.data ?? [], total: (result.meta?.['total'] as number | null) ?? null },
        facets: result.meta?.['facets'],
    };
}

function tagTermsOf(q: string): string[] {
    return [
        ...new Set(
            q
                .toLowerCase()
                .split(/[^\p{L}\p{N}]+/u)
                .filter((word) => word.length >= 3),
        ),
    ].slice(0, 5);
}

async function cascade(
    ctx: ToolContext,
    args: { q?: string; tags?: string; category_id?: string; organization_id?: string; limit: number },
): Promise<{ strategy: string; page: Page<ServiceCard>; facets?: unknown }> {
    const base = {
        limit: args.limit,
        category_id: args.category_id,
        organization_id: args.organization_id,
        status: 'published',
        facets: true,
    };

    if (args.q) {
        const direct = await listServices(ctx, { ...base, tags: args.tags, q: args.q });

        if (direct.page.items.length > 0) return { strategy: 'query', ...direct };

        const terms = tagTermsOf(args.q);

        if (terms.length > 0) {
            const byTag = await listServices(ctx, { ...base, tags: terms.join(',') });

            if (byTag.page.items.length > 0) return { strategy: 'tags', ...byTag };
        }
    }

    if (args.tags) {
        const tagged = await listServices(ctx, { ...base, tags: args.tags });

        if (tagged.page.items.length > 0) return { strategy: 'tags', ...tagged };
    }

    if (args.category_id || args.organization_id || !(args.q ?? args.tags)) {
        const scoped = await listServices(ctx, base);

        if (scoped.page.items.length > 0) return { strategy: 'filter', ...scoped };
    }

    return { strategy: 'none', page: { items: [], total: 0 } };
}

async function topCategories(ctx: ToolContext, organizationId?: string): Promise<CategoryResource[]> {
    const result = await ctx.client.request<CategoryResource[]>({
        path: '/categories',
        query: { organization_id: organizationId, enabled: true, limit: MAX_LIMIT },
        cache: true,
    });

    return result.data ?? [];
}

export interface ServiceContext {
    service: ServiceCard;
    timeZone: string;
}

export async function loadServiceContext(ctx: ToolContext, serviceId: string): Promise<ServiceContext> {
    const { data } = await ctx.client.request<ServiceCard>({
        path: `/services/${serviceId}`,
        query: { include: 'organization', fields: fieldsParam(SERVICE_POLICY_FIELDS) },
        cache: true,
    });

    return { service: data, timeZone: data.organization?.timezone ?? ctx.config.timeZone };
}

export function registerCatalogueTools(server: McpServer, ctx: ToolContext): void {
    server.registerTool(
        'search_services',
        {
            title: 'Search services',
            description: [
                'Finds published services by free text, tags, category or organization.',
                'The search walks from the phrase down to tags and plain filters and stops at the first',
                'non-empty result; `strategy` says which step answered.',
                DATA_NOTICE,
            ].join(' '),
            annotations: { readOnlyHint: true, openWorldHint: true },
            inputSchema: {
                q: z.string().trim().min(1).max(200).optional().describe('What the person asked for'),
                tags: z.string().trim().min(1).max(200).optional().describe('Comma separated exact tags'),
                category_id: objectIdSchema.optional(),
                organization_id: objectIdSchema.optional(),
                limit: limitArg,
            },
            outputSchema: {
                strategy: z.enum(['query', 'tags', 'filter', 'none']),
                total: z.number().nullable(),
                items: z.array(serviceCard),
                facets: z
                    .looseObject({
                        tags: z.array(facetBucket),
                        categories: z.array(facetBucket),
                        organizations: z.array(facetBucket),
                    })
                    .optional(),
                hint: z.string().optional(),
                suggested_categories: z
                    .array(z.looseObject({ id: z.string(), label: z.string(), organization_id: z.string() }))
                    .optional(),
            },
        },
        runTool('search_services', ctx, async (input: SearchArgs) => {
            const { strategy, page, facets } = await cascade(ctx, input);

            if (page.items.length > 0)
                return {
                    summary: `Found ${plural(page.items.length, 'service', 'services')} (${strategy}).`,
                    data: {
                        strategy,
                        total: page.total,
                        items: page.items,
                        ...(facets ? { facets } : {}),
                    },
                };

            const categories = await topCategories(ctx, input.organization_id);

            return {
                summary: 'Nothing matched. Ask which organization or district the person means.',
                data: {
                    strategy: 'none',
                    total: 0,
                    items: [],
                    ...(facets ? { facets } : {}),
                    hint: 'Nothing matched. Ask the person to name the organization or the district, or pick one of suggested_categories.',
                    suggested_categories: categories.map((category) => ({
                        id: category.id,
                        label: category.label,
                        organization_id: category.organization_id,
                    })),
                },
            };
        }),
    );

    server.registerTool(
        'find_services_nearby',
        {
            title: 'Find services nearby',
            description: [
                'Services within a radius of a point.',
                'Coordinates must come from the person or the client, never from the model guessing a',
                'city centre: a guessed point finds services in the wrong district.',
                DATA_NOTICE,
            ].join(' '),
            annotations: { readOnlyHint: true, openWorldHint: true },
            inputSchema: {
                lat: z.number().min(-90).max(90),
                lng: z.number().min(-180).max(180),
                radius_m: z.number().int().min(1).max(200_000).default(5000),
                tags: z.string().trim().min(1).max(200).optional(),
                limit: limitArg,
            },
            outputSchema: { total: z.number(), items: z.array(serviceCard) },
        },
        runTool('find_services_nearby', ctx, async (input: NearbyArgs) => {
            const { data } = await ctx.client.request<ServiceCard[]>({
                path: '/services/nearby',
                query: { ...input, include: 'organization', fields: fieldsParam(SERVICE_LIST_FIELDS) },
                cache: true,
            });
            const items = data ?? [];

            return {
                summary: `Found ${plural(items.length, 'service', 'services')} within ${input.radius_m} m.`,
                data: { total: items.length, items },
            };
        }),
    );

    server.registerTool(
        'get_service',
        {
            title: 'Get a service',
            description: [
                'One service with its booking policy, form fields and required documents.',
                'Slots are not included; call find_slots for those.',
                DATA_NOTICE,
            ].join(' '),
            annotations: { readOnlyHint: true, openWorldHint: true },
            inputSchema: { service_id: objectIdSchema },
            outputSchema: { service: z.looseObject({ id: z.string(), label: z.string() }) },
        },
        runTool('get_service', ctx, async ({ service_id: serviceId }: { service_id: string }) => {
            const { data } = await ctx.client.request<ServiceCard>({
                path: `/services/${serviceId}`,
                query: { include: 'organization,category', fields: fieldsParam(SERVICE_DETAIL_FIELDS) },
                cache: true,
            });

            return { summary: `Service "${data.label}".`, data: { service: data } };
        }),
    );

    server.registerTool(
        'find_slots',
        {
            title: 'Find bookable times',
            description: [
                'Bookable candidates for a service, already flattened and trimmed.',
                'Dates are resolved in the organization’s own time zone, so pass `when` and',
                '`part_of_day` rather than computing a date yourself.',
                'Every candidate carries the exact `option_id`, `slot_id` and `time` create_booking needs.',
                DATA_NOTICE,
            ].join(' '),
            annotations: { readOnlyHint: true, openWorldHint: true },
            inputSchema: {
                service_id: objectIdSchema,
                when: z
                    .string()
                    .optional()
                    .describe(`One of ${WHEN_VALUES.join(', ')} or a YYYY-MM-DD date`),
                part_of_day: z.enum(PART_OF_DAY_VALUES).optional(),
                after: z.string().optional().describe('ISO instant; nothing earlier is returned'),
                before: z.string().optional().describe('ISO instant; nothing later is returned'),
                option_id: uuidSchema.optional(),
                only_available: z.boolean().default(false),
                limit: z.number().int().min(1).max(MAX_LIMIT).default(MAX_CANDIDATES),
            },
            outputSchema: {
                service_id: z.string(),
                service_label: z.string(),
                timezone: z.string(),
                from: z.string(),
                to: z.string(),
                total_found: z.number(),
                truncated_by_api: z.boolean(),
                items: z.array(slotView),
                dropped: z.looseObject({
                    not_bookable: z.number(),
                    past: z.number(),
                    lead_time: z.number(),
                    part_of_day: z.number(),
                }),
                hint: z.string().optional(),
            },
        },
        runTool('find_slots', ctx, async (input: FindSlotsArgs) => {
            if (input.when && !isDateOnly(input.when) && !WHEN_VALUES.includes(input.when as never))
                throw new ApiError({
                    status: 400,
                    code: 'VALIDATION_ERROR',
                    message: 'Unsupported "when".',
                    details: [
                        {
                            path: 'when',
                            message: `Must be a YYYY-MM-DD date or one of ${WHEN_VALUES.join(', ')}`,
                        },
                    ],
                });

            const { service, timeZone } = await loadServiceContext(ctx, input.service_id);
            const window = resolveWindow(input, timeZone);
            const { data } = await ctx.client.request<ServiceSlots>({
                path: `/services/${input.service_id}/slots`,
                query: {
                    from: window.from,
                    to: window.to,
                    after: window.after,
                    before: window.before,
                    option_id: input.option_id,
                    only_available: input.only_available ? true : undefined,
                    limit: SLOT_FETCH_LIMIT,
                },
                cache: true,
            });
            const flat = flattenSlots(data, {
                policy: service.booking_policy,
                partOfDay: input.part_of_day,
                limit: input.limit,
            });
            const hint =
                flat.items.length === 0
                    ? flat.dropped.lead_time > 0
                        ? 'Everything in this window starts too soon for the booking policy. Try a later day.'
                        : 'Nothing free in this window. Widen `when` or drop `part_of_day`.'
                    : undefined;

            return {
                summary: `${plural(flat.items.length, 'candidate', 'candidates')} of ${flat.total_found} found in ${data.timezone}.`,
                data: {
                    service_id: data.service_id,
                    service_label: service.label,
                    timezone: data.timezone,
                    from: data.from,
                    to: data.to,
                    total_found: flat.total_found,
                    truncated_by_api: flat.truncated_by_api,
                    items: flat.items,
                    dropped: flat.dropped,
                    ...(hint ? { hint } : {}),
                },
            };
        }),
    );

    server.registerTool(
        'list_organizations',
        {
            title: 'List organizations',
            description: [
                'Organizations of the city, optionally around a point.',
                'Coordinates come from the person or the client, never from a guess.',
                DATA_NOTICE,
            ].join(' '),
            annotations: { readOnlyHint: true, openWorldHint: true },
            inputSchema: {
                q: z.string().trim().min(1).max(200).optional(),
                main_category: z.string().trim().min(1).max(200).optional(),
                lat: z.number().min(-90).max(90).optional(),
                lng: z.number().min(-180).max(180).optional(),
                radius_m: z.number().int().min(1).max(200_000).optional(),
                limit: limitArg,
            },
            outputSchema: {
                total: z.number().nullable(),
                items: z.array(
                    z.looseObject({
                        id: z.string(),
                        main_label: z.string(),
                        address: z.string().optional(),
                        status: z.string(),
                        timezone: z.string(),
                    }),
                ),
            },
        },
        runTool('list_organizations', ctx, async (input: ListOrganizationsArgs) => {
            const nearby = input.lat !== undefined && input.lng !== undefined;

            if ((input.lat === undefined) !== (input.lng === undefined))
                throw new ApiError({
                    status: 400,
                    code: 'VALIDATION_ERROR',
                    message: 'A point needs both coordinates.',
                    details: [{ path: 'lat', message: 'lat and lng go together' }],
                });

            const { data, meta } = await ctx.client.request<OrganizationResource[]>({
                path: nearby ? '/organizations/nearby' : '/organizations',
                query: nearby
                    ? {
                          lat: input.lat,
                          lng: input.lng,
                          radius_m: input.radius_m ?? 5000,
                          main_category: input.main_category,
                          limit: input.limit,
                      }
                    : { q: input.q, main_category: input.main_category, limit: input.limit },
                cache: true,
            });
            const items = data ?? [];

            return {
                summary: `Found ${plural(items.length, 'organization', 'organizations')}.`,
                data: { total: meta?.['total'] ?? items.length, items },
            };
        }),
    );

    server.registerTool(
        'get_organization',
        {
            title: 'Get an organization',
            description: ['One organization: address, working hours, zone and status.', DATA_NOTICE].join(
                ' ',
            ),
            annotations: { readOnlyHint: true, openWorldHint: true },
            inputSchema: { organization_id: objectIdSchema },
            outputSchema: {
                organization: z.looseObject({ id: z.string(), main_label: z.string() }),
            },
        },
        runTool(
            'get_organization',
            ctx,
            async ({ organization_id: organizationId }: { organization_id: string }) => {
                const { data } = await ctx.client.request<OrganizationDetail>({
                    path: `/organizations/${organizationId}`,
                    query: { fields: fieldsParam(ORGANIZATION_FIELDS) },
                    cache: true,
                });

                return { summary: `Organization "${data.main_label}".`, data: { organization: data } };
            },
        ),
    );

    server.registerTool(
        'list_news',
        {
            title: 'List news',
            description: ['City or organization news.', DATA_NOTICE].join(' '),
            annotations: { readOnlyHint: true, openWorldHint: true },
            inputSchema: {
                q: z.string().trim().min(1).max(200).optional(),
                rubric: z.string().trim().min(1).max(100).optional(),
                organization_id: objectIdSchema.optional(),
                limit: limitArg,
            },
            outputSchema: {
                total: z.number().nullable(),
                items: z.array(
                    z.looseObject({ id: z.string(), label: z.string(), date: z.string().optional() }),
                ),
            },
        },
        runTool('list_news', ctx, async (input: ListNewsArgs) => {
            const { data, meta } = await ctx.client.request<NewsResource[]>({
                path: '/news',
                query: {
                    q: input.q,
                    rubric: input.rubric,
                    organization_id: input.organization_id,
                    enabled: true,
                    limit: input.limit,
                },
                cache: true,
            });
            const items = data ?? [];

            return {
                summary: `Found ${plural(items.length, 'news item', 'news items')}.`,
                data: { total: meta?.['total'] ?? items.length, items },
            };
        }),
    );

    server.registerTool(
        'get_info_sections',
        {
            title: 'Get info sections',
            description: [
                'Reference blocks an organization publishes: addresses, phones, links, plain text.',
                DATA_NOTICE,
            ].join(' '),
            annotations: { readOnlyHint: true, openWorldHint: true },
            inputSchema: { organization_id: objectIdSchema.optional(), limit: limitArg },
            outputSchema: {
                total: z.number().nullable(),
                items: z.array(z.looseObject({ id: z.string(), label: z.string(), control: z.string() })),
            },
        },
        runTool('get_info_sections', ctx, async (input: InfoSectionsArgs) => {
            const { data, meta } = await ctx.client.request<InfoSectionResource[]>({
                path: '/infosections',
                query: {
                    organization_id: input.organization_id,
                    enabled: true,
                    limit: input.limit,
                },
                cache: true,
            });
            const items = data ?? [];

            return {
                summary: `Found ${plural(items.length, 'info section', 'info sections')}.`,
                data: { total: meta?.['total'] ?? items.length, items },
            };
        }),
    );
}
