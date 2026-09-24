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
const tagsArg = z
    .string()
    .trim()
    .min(1)
    .max(200)
    .optional()
    .describe('Comma-separated tags copied from `facets.tags` of an earlier result; never invent tags.');
const organizationIdArg = objectIdSchema.describe(
    'From list_organizations, or the `organization_id` of a service.',
);
const serviceIdArg = objectIdSchema.describe(
    'The `id` of a service from search_services or find_services_nearby.',
);

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
                'Start here when the person names something they need. Returns published services;',
                'pass an item’s `id` to get_service or find_slots.',
                '`strategy` says how the items matched: `query` — by the words; `tags` or `filter` — a',
                'looser fallback, so check each item fits before offering it; `none` — nothing matched.',
                'Without arguments it browses all services. With real coordinates, use',
                'find_services_nearby instead.',
                DATA_NOTICE,
            ].join(' '),
            annotations: { readOnlyHint: true, openWorldHint: true },
            inputSchema: {
                q: z
                    .string()
                    .trim()
                    .min(1)
                    .max(200)
                    .optional()
                    .describe('The person’s request in their own words. Leave out to browse or filter only.'),
                tags: tagsArg,
                category_id: objectIdSchema
                    .optional()
                    .describe('From `suggested_categories` or `facets.categories` of an earlier result.'),
                organization_id: organizationIdArg.optional(),
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

            if (page.items.length > 0) {
                const found = plural(page.items.length, 'service', 'services');

                return {
                    summary:
                        strategy === 'query'
                            ? `Found ${found}.`
                            : `Found ${found} by a looser match (${strategy}); check they fit the request.`,
                    data: {
                        strategy,
                        total: page.total,
                        items: page.items,
                        ...(facets ? { facets } : {}),
                    },
                };
            }

            const categories = await topCategories(ctx, input.organization_id);

            return {
                summary: 'Nothing matched; see `hint`.',
                data: {
                    strategy: 'none',
                    total: 0,
                    items: [],
                    ...(facets ? { facets } : {}),
                    hint:
                        categories.length > 0
                            ? 'Offer the person one of `suggested_categories`, or ask which organization they mean (find it with list_organizations).'
                            : 'Ask the person to put it differently, or which organization they mean (find it with list_organizations).',
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
                'Services within `radius_m` of a point, each with `distance_m`. Use it only with real',
                'coordinates, shared by the person or provided by the app. Never estimate coordinates',
                'from a place name — a guessed point returns services from the wrong area; with only a',
                'name, use search_services or list_organizations.',
                DATA_NOTICE,
            ].join(' '),
            annotations: { readOnlyHint: true, openWorldHint: true },
            inputSchema: {
                lat: z.number().min(-90).max(90),
                lng: z.number().min(-180).max(180),
                radius_m: z.number().int().min(1).max(200_000).default(5000).describe('In metres.'),
                tags: tagsArg,
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
            title: 'Get service details',
            description: [
                'One service in full: price, duration, working hours, organization (address, time zone),',
                '`booking_policy` (how soon and how far ahead it can be booked, cancellation deadline),',
                '`form_fields` the booking asks for and `required_documents` to bring. Use it for "what do',
                'I need / how much" questions and before booking. It has no times: use find_slots.',
                DATA_NOTICE,
            ].join(' '),
            annotations: { readOnlyHint: true, openWorldHint: true },
            inputSchema: { service_id: serviceIdArg },
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
                'Bookable times (candidates) of one service, earliest first. Pass the person’s words as',
                '`when` and `part_of_day`; they are resolved in the organization’s time zone, so never',
                'compute dates yourself.',
                ctx.config.write
                    ? 'Pass a candidate’s `option_id`, `slot_id` and `time` unchanged to create_booking or reschedule_booking. `full: true` means no places are left: offer join_waitlist instead.'
                    : '`full: true` means no places are left.',
                'For later times, call again with `after` set to the last candidate’s `starts_at`.',
                DATA_NOTICE,
            ].join(' '),
            annotations: { readOnlyHint: true, openWorldHint: true },
            inputSchema: {
                service_id: serviceIdArg,
                when: z
                    .string()
                    .optional()
                    .describe(
                        'today, tomorrow, this_week (today to Sunday), next_week (Monday to Sunday), or a date ' +
                            'YYYY-MM-DD. Leave out to search from today on.',
                    ),
                part_of_day: z
                    .enum(PART_OF_DAY_VALUES)
                    .optional()
                    .describe(
                        'morning is before 12:00, afternoon 12:00–17:00, evening from 17:00, organization’s ' +
                            'local time. Whole-day and no-time candidates are not filtered by it.',
                    ),
                after: z
                    .string()
                    .optional()
                    .describe('ISO date-time with offset; only later times come back.'),
                before: z
                    .string()
                    .optional()
                    .describe('ISO date-time with offset; only earlier times come back.'),
                option_id: uuidSchema
                    .optional()
                    .describe('Only this option of the service: an `option_id` from an earlier candidate.'),
                only_available: z
                    .boolean()
                    .default(false)
                    .describe(
                        ctx.config.write
                            ? 'true hides full candidates; keep false if the person might join a waitlist.'
                            : 'true hides full candidates.',
                    ),
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
                        ? 'Everything in this window starts too soon to be booked. Try a later day.'
                        : 'Nothing bookable in this window. Try another `when`, or leave out `part_of_day`.'
                    : undefined;
            const full = flat.items.filter((item) => item.full).length;

            return {
                summary: hint
                    ? 'No bookable times in this window; see `hint`.'
                    : `${plural(flat.items.length, 'candidate', 'candidates')}${full > 0 ? ` (${full} full)` : ''} of ${flat.total_found} found, times in ${data.timezone}.`,
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
                'Organizations that provide the services. Use it to find an `organization_id` when the',
                'person names an institution, then pass it to search_services, get_organization, list_news',
                'or list_info_sections. Search either by name (`q`) or around a point (`lat` + `lng`), not',
                'both. Use coordinates only if the person or the app gave them — never estimate them.',
                DATA_NOTICE,
            ].join(' '),
            annotations: { readOnlyHint: true, openWorldHint: true },
            inputSchema: {
                q: z.string().trim().min(1).max(200).optional().describe('Part of the organization’s name.'),
                main_category: z
                    .string()
                    .trim()
                    .min(1)
                    .max(200)
                    .optional()
                    .describe('Exactly as in `main_category` of an earlier result.'),
                lat: z.number().min(-90).max(90).optional(),
                lng: z.number().min(-180).max(180).optional(),
                radius_m: z
                    .number()
                    .int()
                    .min(1)
                    .max(200_000)
                    .optional()
                    .describe('In metres; 5000 if left out.'),
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

            if (nearby && input.q !== undefined)
                throw new ApiError({
                    status: 400,
                    code: 'VALIDATION_ERROR',
                    message:
                        'Search by `q` or around a point, not both: the search around a point ignores the name.',
                    details: [{ path: 'q', message: 'Leave out q, or lat and lng' }],
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
            title: 'Get organization details',
            description: [
                'One organization: address, location, working hours, holidays, time zone and `status`.',
                'When `status` is `temporarily_closed`, `closed_reason` and `closed_until` say why and until',
                'when. For its phones, links and other reference texts, use list_info_sections.',
                DATA_NOTICE,
            ].join(' '),
            annotations: { readOnlyHint: true, openWorldHint: true },
            inputSchema: { organization_id: organizationIdArg },
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
            description: [
                'News from the city and its organizations. Filter by `organization_id`, by words (`q`) or',
                'by section (`rubric`).',
                DATA_NOTICE,
            ].join(' '),
            annotations: { readOnlyHint: true, openWorldHint: true },
            inputSchema: {
                q: z.string().trim().min(1).max(200).optional(),
                rubric: z
                    .string()
                    .trim()
                    .min(1)
                    .max(100)
                    .optional()
                    .describe('A news section, exactly as in `rubric` of an earlier result.'),
                organization_id: organizationIdArg.optional(),
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
        'list_info_sections',
        {
            title: 'Contacts and reference info',
            description: [
                'Reference blocks organizations publish: phone numbers, addresses, links, short texts. Use it',
                'for "how do I contact …" and practical questions get_organization does not answer. Pass',
                '`organization_id`: without it, the blocks of all organizations come back mixed.',
                DATA_NOTICE,
            ].join(' '),
            annotations: { readOnlyHint: true, openWorldHint: true },
            inputSchema: { organization_id: organizationIdArg.optional(), limit: limitArg },
            outputSchema: {
                total: z.number().nullable(),
                items: z.array(z.looseObject({ id: z.string(), label: z.string(), control: z.string() })),
            },
        },
        runTool('list_info_sections', ctx, async (input: InfoSectionsArgs) => {
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
