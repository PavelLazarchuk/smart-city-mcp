export const SERVICE_LIST_FIELDS = [
    'label',
    'description',
    'tags',
    'address',
    'duration_minutes',
    'price',
    'currency',
    'status',
    'organization_id',
    'category_id',
    'organization',
] as const;

export const SERVICE_DETAIL_FIELDS = [
    ...SERVICE_LIST_FIELDS,
    'booking_policy',
    'form_fields',
    'required_documents',
    'working_hours',
    'holidays',
    'blackout_dates',
    'category',
] as const;

export const SERVICE_POLICY_FIELDS = [
    'label',
    'duration_minutes',
    'booking_policy',
    'organization_id',
    'organization',
] as const;

export const SERVICE_BOOKING_FIELDS = [
    'label',
    'address',
    'duration_minutes',
    'booking_policy',
    'form_fields',
    'required_documents',
    'organization_id',
    'organization',
] as const;

export const SERVICE_FORM_FIELDS = ['label', 'form_fields', 'required_documents'] as const;

export const ORGANIZATION_FIELDS = [
    'main_label',
    'main_category',
    'address',
    'location',
    'working_hours',
    'holidays',
    'timezone',
    'status',
    'closed_reason',
    'closed_until',
] as const;

export function fieldsParam(fields: readonly string[]): string {
    return fields.join(',');
}
