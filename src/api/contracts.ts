// Copies of the API's schemas, checked by test/contract/openapi.spec.ts.
import { z } from 'zod';

import { type components } from './generated/schema.js';

export const SLOT_TYPES = ['date_time', 'date', 'apply', 'delivery', 'paycard'] as const;
export type SlotType = (typeof SLOT_TYPES)[number];
export const BOOKABLE_SLOT_TYPES: readonly SlotType[] = ['date_time', 'date', 'apply'];

export const SERVICE_TYPES = ['service_apply', 'service_payment', 'service_delivery'] as const;
export const SERVICE_STATUSES = ['draft', 'published', 'archived'] as const;
export const BOOKING_STATUSES = ['pending', 'confirmed', 'completed', 'no_show', 'cancelled'] as const;
export const WAITLIST_STATUSES = ['waiting', 'notified'] as const;
export const ORGANIZATION_STATUSES = ['active', 'temporarily_closed'] as const;
export const FORM_FIELD_TYPES = [
    'text',
    'textarea',
    'number',
    'date',
    'boolean',
    'select',
    'phone',
    'email',
] as const;
export type FormFieldType = (typeof FORM_FIELD_TYPES)[number];

export const objectIdSchema = z.string().regex(/^[a-f0-9]{24}$/i, 'Must be a valid object id');
export const uuidSchema = z.uuid();
export const phoneSchema = z
    .string()
    .regex(/^\d{8,15}$/, 'Must be a phone number in E.164 digits without the plus sign');
export const nameSchema = z.string().trim().min(1).max(120);
export const emailSchema = z.string().trim().toLowerCase().pipe(z.email().max(254));
export const dateOnlySchema = z.iso.date();
export const timeOfDaySchema = z.string().regex(/^([01]\d|2[0-3]):[0-5]\d$/, 'Must be HH:mm');
export const isoDateTimeSchema = z.iso.datetime({ offset: true });
export const fieldKeySchema = z.string().regex(/^[a-z][a-z0-9_]{0,39}$/, 'Must be snake_case');

export const otpRequestSchema = z.object({ phone: phoneSchema });

export const otpVerifySchema = z.object({
    phone: phoneSchema,
    code: z.string().regex(/^\d{4,10}$/, 'Must be the numeric verification code'),
    name: nameSchema.optional(),
    email: emailSchema.optional(),
});

export const refreshRequestSchema = z.object({ refresh_token: z.string().min(1) });

export const updateSelfSchema = z.object({ name: nameSchema, email: emailSchema.nullable() }).partial();

export const createBookingSchema = z.object({
    option_id: uuidSchema,
    slot_id: uuidSchema,
    time: timeOfDaySchema.optional(),
    info: z.string().trim().max(1000).optional(),
    fields: z.record(fieldKeySchema, z.unknown()).optional(),
    documents: z.array(fieldKeySchema).max(30).optional(),
});
export type CreateBookingInput = z.infer<typeof createBookingSchema>;

export const rescheduleBookingSchema = z.object({
    option_id: uuidSchema.optional(),
    slot_id: uuidSchema,
    time: timeOfDaySchema.optional(),
});

export const joinWaitlistSchema = z.object({
    option_id: uuidSchema,
    slot_id: uuidSchema,
    time: timeOfDaySchema.optional(),
});

export const bookingStatusFilterSchema = z.enum([...BOOKING_STATUSES, 'active', 'all']);

export const listOwnBookingsQuerySchema = z.object({
    page: z.coerce.number().int().min(1).optional(),
    limit: z.coerce.number().int().min(1).optional(),
    status: bookingStatusFilterSchema.optional(),
    date_from: dateOnlySchema.optional(),
    date_to: dateOnlySchema.optional(),
});

export const serviceSlotsQuerySchema = z.object({
    from: dateOnlySchema.optional(),
    to: dateOnlySchema.optional(),
    after: isoDateTimeSchema.optional(),
    before: isoDateTimeSchema.optional(),
    option_id: uuidSchema.optional(),
    only_available: z.boolean().optional(),
    limit: z.coerce.number().int().min(1).max(200).optional(),
});

export type ServiceSlots = components['schemas']['ServiceSlotsResponseDto'];
export type SlotCandidate = ServiceSlots['items'][number];
export type ServiceResource = components['schemas']['MaskedServiceResponseDto'];
export type BookingResource = components['schemas']['BookingResourceDto'];
export type BookingCreated = components['schemas']['BookingCreatedResponseDto'];
export type WaitlistEntry = components['schemas']['WaitlistEntryResponseDto'];
export type TokenPair = components['schemas']['TokenPairResponseDto'];
export type OtpRequested = components['schemas']['OtpRequestResponseDto'];
export type UserResource = components['schemas']['UserResponseDto'];
export type OrganizationResource = components['schemas']['OrganizationResponseDto'];
export type OrganizationDetail = components['schemas']['OrganizationDetailDto'];
export type NewsResource = components['schemas']['NewsResponseDto'];
export type InfoSectionResource = components['schemas']['InfoSectionResponseDto'];
export type CategoryResource = components['schemas']['CategoryResponseDto'];

export type FormField = NonNullable<ServiceResource['form_fields']>[number];
export type RequiredDocument = NonNullable<ServiceResource['required_documents']>[number];
export type BookingPolicy = ServiceResource['booking_policy'];
export type IncludedOrganization = NonNullable<ServiceResource['organization']>;

export interface BuildInfo {
    version: string;
    commit: string | null;
    env: string;
    node: string;
    started_at: string;
    uptime_seconds: number;
}
