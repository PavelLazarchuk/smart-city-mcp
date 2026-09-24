import { type ApiError, TransportError, isApiError, type ApiErrorDetail } from '../api/errors.js';

export interface ErrorGuidance {
    message: string;
    next_steps: string[];
}

export interface ToolError {
    code: string;
    message: string;
    details: ApiErrorDetail[];
    next_steps: string[];
    request_id?: string;
    retry_after_seconds?: number;
}

export const ERROR_GUIDANCE: Record<string, ErrorGuidance> = {
    SLOT_FULL: {
        message: 'That time is fully booked.',
        next_steps: ['join_waitlist for this slot', 'find_slots for a neighbouring day'],
    },
    SLOT_EXPIRED: {
        message: 'That slot is in the past.',
        next_steps: ['find_slots again to get current times'],
    },
    SLOT_TIME_REQUIRED: {
        message: 'This slot needs a time and none was sent.',
        next_steps: ['find_slots again and book one of the returned candidates'],
    },
    SLOT_NOT_BOOKABLE: {
        message: 'This slot type cannot be booked.',
        next_steps: ['find_slots again and book one of the returned candidates'],
    },
    SLOT_NOT_FOUND: {
        message: 'That option or slot no longer exists on the service.',
        next_steps: ['find_slots again'],
    },
    SLOT_NOT_FULL: {
        message: 'The slot still has free places, so a waitlist entry is not needed.',
        next_steps: ['create_booking for this slot'],
    },
    OPTION_DISABLED: {
        message: 'That option of the service is switched off.',
        next_steps: ['find_slots again and pick another option'],
    },
    BOOKING_LEAD_TIME: {
        message: 'That time starts too soon to be booked.',
        next_steps: ['find_slots again and offer the earliest candidate that is still allowed'],
    },
    BOOKING_TOO_FAR_AHEAD: {
        message: 'That date is beyond the booking horizon of the service.',
        next_steps: [
            'read max_advance_days from get_service and offer a date inside it',
            'find_slots inside that horizon',
        ],
    },
    BOOKING_LIMIT_REACHED: {
        message: 'You already hold the maximum number of active bookings for this service.',
        next_steps: ['list_my_bookings', 'cancel_booking for one of them, then book again'],
    },
    BOOKING_ALREADY_EXISTS: {
        message: 'You already have a booking for this slot.',
        next_steps: ['get_booking to show the existing one'],
    },
    BOOKING_FIELDS_INVALID: {
        message: 'The booking form was rejected.',
        next_steps: ['ask the person again for the fields named in details, and only those'],
    },
    BOOKING_DOCUMENTS_REQUIRED: {
        message: 'Required documents were not confirmed.',
        next_steps: ['ask the person to confirm the documents named in details'],
    },
    BOOKING_CANCEL_DEADLINE_PASSED: {
        message: 'The cancellation deadline for this booking has passed.',
        next_steps: ['suggest contacting the organization directly'],
    },
    BOOKING_NOT_ACTIVE: {
        message: 'This booking is finished or already cancelled.',
        next_steps: ['get_booking to show its current status'],
    },
    BOOKING_NOT_FOUND: {
        message: 'No booking with that id belongs to this account.',
        next_steps: ['list_my_bookings'],
    },
    BOOKING_STATUS_TRANSITION: {
        message: 'This booking cannot move to that status from its current one.',
        next_steps: ['get_booking to show its current status'],
    },
    IDEMPOTENCY_IN_PROGRESS: {
        message: 'The same booking is still being processed.',
        next_steps: ['wait a moment, then list_my_bookings to see whether it went through'],
    },
    IDEMPOTENCY_KEY_REUSED: {
        message: 'The same slot was already booked with different form answers.',
        next_steps: ['list_my_bookings', 'cancel the existing booking before booking with new answers'],
    },
    SERVICE_NOT_PUBLISHED: {
        message: 'This service is not published right now.',
        next_steps: ['search_services for a similar service'],
    },
    SERVICE_NOT_FOUND: {
        message: 'No such service.',
        next_steps: ['search_services'],
    },
    ORGANIZATION_CLOSED: {
        message: 'The organization is temporarily closed.',
        next_steps: [
            'get_organization for closed_reason and closed_until',
            'list_organizations for a nearby alternative',
        ],
    },
    ORGANIZATION_NOT_FOUND: {
        message: 'No such organization.',
        next_steps: ['list_organizations'],
    },
    NEWS_NOT_FOUND: { message: 'No such news item.', next_steps: ['list_news'] },
    INFOSECTION_NOT_FOUND: { message: 'No such info section.', next_steps: ['get_info_sections'] },
    CATEGORY_NOT_FOUND: { message: 'No such category.', next_steps: ['search_services'] },
    WAITLIST_ALREADY_JOINED: {
        message: 'You are already on the waitlist for this slot.',
        next_steps: ['list_my_waitlist'],
    },
    WAITLIST_NOT_FOUND: {
        message: 'No waitlist entry with that id belongs to this account.',
        next_steps: ['list_my_waitlist'],
    },
    OTP_INVALID: {
        message: 'That code is not right.',
        next_steps: ['ask for the code again with auth_confirm; do not request a new code yet'],
    },
    OTP_EXPIRED: {
        message: 'That code has expired.',
        next_steps: ['auth_start to send a new code'],
    },
    OTP_ATTEMPTS_EXCEEDED: {
        message: 'Too many wrong codes for this number.',
        next_steps: ['auth_start to send a new code'],
    },
    LOGIN_METHOD_DISABLED: {
        message: 'This server has one-time-code sign-in switched off, so this account cannot sign in here.',
        next_steps: ['say so plainly; there is no way around it from this side'],
    },
    PHONE_COUNTRY_NOT_SUPPORTED: {
        message: 'That phone number is outside the country this city API serves.',
        next_steps: ['ask for a local number'],
    },
    REFRESH_TOKEN_REUSED: {
        message: 'The session was revoked. The stored tokens have been discarded.',
        next_steps: ['auth_start to sign in again'],
    },
    SESSION_REVOKED: {
        message: 'The session was revoked.',
        next_steps: ['auth_start to sign in again'],
    },
    TOKEN_EXPIRED: {
        message: 'The session expired and could not be renewed.',
        next_steps: ['auth_start to sign in again'],
    },
    TOKEN_INVALID: {
        message: 'The stored session is not valid any more.',
        next_steps: ['auth_start to sign in again'],
    },
    UNAUTHENTICATED: {
        message: 'This needs a signed-in account.',
        next_steps: ['auth_start with the phone number, then auth_confirm'],
    },
    FORBIDDEN: {
        message: 'This account may not do that.',
        next_steps: ['say so plainly; do not retry'],
    },
    RATE_LIMITED: {
        message: 'The request budget for this window is used up.',
        next_steps: ['wait retry_after_seconds before calling again; do not retry silently'],
    },
    USER_NOT_FOUND: {
        message: 'That account no longer exists.',
        next_steps: ['auth_start to sign in again'],
    },
    VALIDATION_ERROR: {
        message: 'The arguments were rejected.',
        next_steps: ['fix the fields named in details and call again'],
    },
    FIELDS_NOT_ALLOWED: {
        message: 'A requested field does not exist on that resource.',
        next_steps: ['drop the unknown field and call again'],
    },
    PAGE_OUT_OF_RANGE: {
        message: 'That page is beyond the supported depth.',
        next_steps: ['narrow the search instead of paging further'],
    },
    NOT_FOUND: { message: 'Not found.', next_steps: [] },
    INTERNAL_ERROR: {
        message: 'The API failed on its side.',
        next_steps: ['try again later; report request_id if it keeps happening'],
    },
    SERIALIZATION_ERROR: {
        message: 'The API produced a response it could not serialize.',
        next_steps: ['try again later; report request_id if it keeps happening'],
    },
    DEPENDENCY_UNAVAILABLE: {
        message: 'A dependency of the API is unavailable.',
        next_steps: ['try again later'],
    },
    TRANSPORT_ERROR: {
        message: 'The API could not be reached.',
        next_steps: ['check SMART_CITY_API_URL and that the API is running'],
    },
    CONFIRMATION_REQUIRED: {
        message: 'This write needs the person to agree first.',
        next_steps: ['show the summary in the message, then call again with confirm: true'],
    },
    NOT_CONFIRMED: {
        message: 'The person did not confirm, so nothing was sent.',
        next_steps: ['ask what to change, or drop the request'],
    },
    WRITE_DISABLED: {
        message: 'This server runs read-only.',
        next_steps: [
            'say so plainly; SMART_CITY_MCP_WRITE=true is needed and that is the operator\u2019s call',
        ],
    },
};

export const UNREACHABLE_CODES: ReadonlySet<string> = new Set([
    'CONFLICT',
    'PAYLOAD_TOO_LARGE',
    'UNSUPPORTED_MEDIA_TYPE',
    'INVALID_CREDENTIALS',
    'LOGIN_IDENTIFIER_REQUIRED',
    'PASSWORD_TOO_SHORT',
    'PASSWORD_TOO_LONG',
    'PASSWORD_TOO_WEAK',
    'PASSWORD_UNCHANGED',
    'LOGIN_TOO_SHORT',
    'ACCOUNT_HAS_NO_PASSWORD',
    'LOGIN_TAKEN',
    'PHONE_TAKEN',
    'ADMIN_IDENTIFIER_REQUIRED',
    'CLIENT_PHONE_REQUIRED',
    'ADMIN_PASSWORD_REQUIRED',
    'ADMIN_PHONE_REQUIRED',
    'LAST_SUPER_ADMIN',
    'SELF_ROLE_CHANGE',
    'IMAGE_NOT_FOUND',
    'ARCHIVE_NOT_FOUND',
    'CATEGORY_ORGANIZATION_MISMATCH',
    'REORDER_MISMATCH',
    'INCLUDE_NOT_ALLOWED',
    'OPTION_NOT_FOUND',
    'OPTION_HAS_BOOKINGS',
    'SLOT_HAS_BOOKINGS',
    'SLOT_NOT_DATED',
    'SLOT_NOT_LIMITED',
    'SLOT_NOT_TIMED',
    'SESSION_NOT_FOUND',
    'SERVICE_MODIFIED',
    'SLOT_TIME_BOOKED',
    'SLOT_DATE_TAKEN',
    'SLOT_TIME_OUT_OF_RANGE',
    'SLOT_BULK_TOO_LARGE',
    'SERVICE_SLUG_TAKEN',
    'SERVICE_NOT_DELETED',
    'NEWS_SLUG_TAKEN',
    'WEBHOOK_NOT_FOUND',
    'FILE_REQUIRED',
    'FILE_TYPE_NOT_ALLOWED',
    'FILE_TOO_LARGE',
    'IMAGE_TOO_LARGE',
    'IMAGE_UNREADABLE',
    'SMS_DELIVERY_FAILED',
    'SMS_BUDGET_EXCEEDED',
    'ARCHIVE_SERVICE_MISMATCH',
]);

export function guidanceFor(code: string): ErrorGuidance {
    return (
        ERROR_GUIDANCE[code] ?? {
            message: 'The API refused the request.',
            next_steps: ['report the code to the person; do not retry blindly'],
        }
    );
}

export function toToolError(error: unknown): ToolError {
    if (isApiError(error)) return fromApiError(error);

    if (error instanceof TransportError)
        return { code: 'TRANSPORT_ERROR', details: [], ...guidanceFor('TRANSPORT_ERROR') };

    return {
        code: 'INTERNAL_ERROR',
        details: [],
        ...guidanceFor('INTERNAL_ERROR'),
        message: error instanceof Error ? error.message : 'Unexpected failure.',
    };
}

function fromApiError(error: ApiError): ToolError {
    const guidance = guidanceFor(error.code);

    return {
        code: error.code,
        message: guidance.message,
        next_steps: guidance.next_steps,
        details: error.details,
        ...(error.requestId ? { request_id: error.requestId } : {}),
        ...(error.retryAfterSeconds !== undefined ? { retry_after_seconds: error.retryAfterSeconds } : {}),
    };
}
