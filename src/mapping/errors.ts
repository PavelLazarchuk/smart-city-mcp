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

const SIGN_IN_AGAIN = [
    'tell the person to sign in again: ask for their phone number, then auth_start and auth_confirm',
];
const NEW_CODE = ['call auth_start again with the same phone number for a new code, then auth_confirm'];
const LATER = ['try once more later; if it keeps failing, tell the person and give them the request id'];

export const ERROR_GUIDANCE: Record<string, ErrorGuidance> = {
    SLOT_FULL: {
        message: 'That time is fully booked.',
        next_steps: ['offer the person join_waitlist for this candidate', 'or find_slots for another time'],
    },
    SLOT_EXPIRED: {
        message: 'That time has already passed.',
        next_steps: ['find_slots again for current times'],
    },
    SLOT_TIME_REQUIRED: {
        message: 'This candidate has a start time, and none was sent.',
        next_steps: ['call again with the `time` of the chosen find_slots candidate'],
    },
    SLOT_NOT_BOOKABLE: {
        message: 'This slot type cannot be booked.',
        next_steps: ['find_slots again and book one of the returned candidates'],
    },
    SLOT_NOT_FOUND: {
        message: 'That time is not on offer any more.',
        next_steps: ['find_slots again and let the person choose again'],
    },
    SLOT_NOT_FULL: {
        message: 'That time still has free places, so no waitlist is needed.',
        next_steps: ['create_booking for it instead'],
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
        message: 'That date is beyond how far ahead this service can be booked.',
        next_steps: ['find_slots for a date within `booking_policy.max_advance_days` of get_service'],
    },
    BOOKING_LIMIT_REACHED: {
        message: 'The person already has the most active bookings this service allows.',
        next_steps: [
            'tell the person and show them list_my_bookings',
            'cancel one only if the person asks to, then book again',
        ],
    },
    BOOKING_ALREADY_EXISTS: {
        message: 'The person already has a booking for this time.',
        next_steps: ['list_my_bookings to show it'],
    },
    BOOKING_FIELDS_INVALID: {
        message: 'The booking form is not accepted.',
        next_steps: [
            'ask the person for the fields listed below, then call again; drop a field marked "Unknown field", it is not on this form',
        ],
    },
    BOOKING_DOCUMENTS_REQUIRED: {
        message: 'Required documents were not confirmed.',
        next_steps: [
            'read the documents listed below to the person',
            'call again with the keys they confirm in `documents`',
        ],
    },
    BOOKING_CANCEL_DEADLINE_PASSED: {
        message: 'The cancellation deadline for this booking has passed.',
        next_steps: [
            'tell the person to contact the organization directly (get_organization, list_info_sections)',
        ],
    },
    BOOKING_NOT_ACTIVE: {
        message: 'This booking is finished or already cancelled.',
        next_steps: ['get_booking to show its current status'],
    },
    BOOKING_NOT_FOUND: {
        message: 'No booking with that id belongs to this account.',
        next_steps: ['list_my_bookings for the right `id`'],
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
        message: 'This time was already booked with different form answers.',
        next_steps: [
            'list_my_bookings to show the existing booking',
            'to change the answers, cancel it first, and only if the person asks to',
        ],
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
    INFOSECTION_NOT_FOUND: { message: 'No such info section.', next_steps: ['list_info_sections'] },
    CATEGORY_NOT_FOUND: { message: 'No such category.', next_steps: ['search_services'] },
    WAITLIST_ALREADY_JOINED: {
        message: 'The person is already on the waitlist for this time.',
        next_steps: ['list_my_waitlist'],
    },
    WAITLIST_NOT_FOUND: {
        message: 'No waitlist entry with that id belongs to this account.',
        next_steps: ['list_my_waitlist for the right `id`'],
    },
    OTP_INVALID: {
        message: 'That code is not right.',
        next_steps: [
            'ask the person to check the code, then call auth_confirm again',
            'do not request a new code with auth_start yet',
        ],
    },
    OTP_EXPIRED: {
        message: 'That code has expired.',
        next_steps: NEW_CODE,
    },
    OTP_ATTEMPTS_EXCEEDED: {
        message: 'Too many wrong codes for this number.',
        next_steps: NEW_CODE,
    },
    CODE_REQUIRED: {
        message: 'The app cannot ask the person for the code, so it has to come through the chat.',
        next_steps: [
            'ask the person for the code from the SMS, then call auth_confirm again with it as `code`',
        ],
    },
    SIGN_IN_CANCELLED: {
        message: 'The person closed the sign-in prompt.',
        next_steps: [
            'ask whether they want to try again; if so, call auth_confirm again — the same SMS code works until it expires',
        ],
    },
    LOGIN_METHOD_DISABLED: {
        message: 'This server has one-time-code sign-in switched off, so this account cannot sign in here.',
        next_steps: ['say so plainly; there is no way around it from this side'],
    },
    PHONE_COUNTRY_NOT_SUPPORTED: {
        message: 'That phone number is outside the country this city serves.',
        next_steps: ['ask the person for a local number'],
    },
    REFRESH_TOKEN_REUSED: {
        message: 'The session was revoked, and the stored sign-in has been cleared.',
        next_steps: SIGN_IN_AGAIN,
    },
    SESSION_REVOKED: {
        message: 'The session was revoked.',
        next_steps: SIGN_IN_AGAIN,
    },
    TOKEN_EXPIRED: {
        message: 'The session expired and could not be renewed.',
        next_steps: SIGN_IN_AGAIN,
    },
    TOKEN_INVALID: {
        message: 'The stored session is not valid any more.',
        next_steps: SIGN_IN_AGAIN,
    },
    UNAUTHENTICATED: {
        message: 'Nobody is signed in.',
        next_steps: [
            'ask the person for their phone number, call auth_start, then auth_confirm',
            'then call this tool again',
        ],
    },
    FORBIDDEN: {
        message: 'This account may not do that.',
        next_steps: ['say so plainly; do not retry'],
    },
    RATE_LIMITED: {
        message: 'The API asks to slow down.',
        next_steps: ['tell the person about the delay; do not call again before the wait is over'],
    },
    TOOL_BUDGET_EXHAUSTED: {
        message: 'This session’s limit of tool calls is used up.',
        next_steps: [
            'stop calling tools and tell the person',
            'tools work again only after the app restarts this server',
        ],
    },
    USER_NOT_FOUND: {
        message: 'That account no longer exists.',
        next_steps: SIGN_IN_AGAIN,
    },
    VALIDATION_ERROR: {
        message: 'The arguments were rejected.',
        next_steps: ['fix the arguments and call again; ask the person when a value has to come from them'],
    },
    FIELDS_NOT_ALLOWED: {
        message: 'This server asked the API for a field it does not have.',
        next_steps: ['tell the person this is a problem of the server; retrying will not help'],
    },
    PAGE_OUT_OF_RANGE: {
        message: 'That page is beyond the supported depth.',
        next_steps: ['narrow the search instead of paging further'],
    },
    NOT_FOUND: { message: 'Not found.', next_steps: [] },
    INTERNAL_ERROR: {
        message: 'The API failed on its side.',
        next_steps: LATER,
    },
    SERIALIZATION_ERROR: {
        message: 'The API produced a response it could not serialize.',
        next_steps: LATER,
    },
    DEPENDENCY_UNAVAILABLE: {
        message: 'A dependency of the API is unavailable.',
        next_steps: ['try again later'],
    },
    TRANSPORT_ERROR: {
        message: 'The Smart City API could not be reached.',
        next_steps: [
            'tell the person the service cannot be reached right now',
            'if they run this server themselves: check that the API is up and SMART_CITY_API_URL is right',
        ],
    },
    CONFIRMATION_REQUIRED: {
        message: 'Nothing was sent: the person has to approve this first.',
        next_steps: [
            'show the person the summary above and ask whether to go ahead',
            'only after a clear yes, call again with the same arguments and confirm: true',
        ],
    },
    NOT_CONFIRMED: {
        message: 'The person did not confirm, so nothing was sent.',
        next_steps: ['ask what to change, or drop the request'],
    },
    WRITE_DISABLED: {
        message: 'This server runs read-only.',
        next_steps: ['say so plainly; SMART_CITY_MCP_WRITE=true is needed and that is the operator’s call'],
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
        message: error.fromApi ? guidance.message : error.message,
        next_steps: guidance.next_steps,
        details: error.details,
        ...(error.requestId ? { request_id: error.requestId } : {}),
        ...(error.retryAfterSeconds !== undefined ? { retry_after_seconds: error.retryAfterSeconds } : {}),
    };
}
