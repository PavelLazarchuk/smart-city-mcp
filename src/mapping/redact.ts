import { type BookingResource, type UserResource, type WaitlistEntry } from '../api/contracts.js';

export interface RedactOptions {
    pii: boolean;
}

const SLOT_NOTES: Record<string, string> = {
    apply: 'Application without a time: the organization schedules it later.',
    date: 'Whole day: the organization assigns the time.',
    callback: 'Call-back: the organization phones the person between `starts_at` and `ends_at`.',
};

const CHECK_IN_STATUSES: readonly string[] = ['pending', 'confirmed', 'no_show'];

function textOf(value: unknown): string | undefined {
    return typeof value === 'string' ? value : undefined;
}

export function maskPhone(phone: string | undefined): string | undefined {
    if (!phone) return undefined;

    return phone.length <= 4 ? '••••' : `••••${phone.slice(-4)}`;
}

export function maskEmail(email: string | undefined): string | undefined {
    if (!email) return undefined;

    const at = email.lastIndexOf('@');

    if (at <= 0) return '•••';

    return `${email.slice(0, 1)}•••${email.slice(at)}`;
}

export interface BookingView {
    id: string;
    service_id: string;
    service_label: string;
    organization_id: string;
    option_id: string;
    slot_id: string;
    child_type: string;
    starts_at: string | null;
    ends_at: string | null;
    cancel_deadline_at: string | null;
    status: string;
    confirmed_at: string | null;
    created_at: string;
    checkin_code?: string;
    arrived_at?: string;
    booked_by_staff?: true;
    note?: string;
    status_note?: string;
    form_field_keys: string[];
    documents: string[];
    info?: string;
    person?: string;
    phone?: string;
    address?: string;
    fields?: Record<string, unknown>;
}

export function redactBooking(booking: BookingResource, options: RedactOptions): BookingView {
    const view: BookingView = {
        id: booking.id,
        service_id: booking.service_id,
        service_label: booking.service_label,
        organization_id: booking.organization_id,
        option_id: booking.option_id,
        slot_id: booking.slot_id,
        child_type: booking.child_type,
        starts_at: booking.starts_at,
        ends_at: booking.ends_at,
        cancel_deadline_at: booking.cancel_deadline_at,
        status: booking.status,
        confirmed_at: booking.confirmed_at,
        created_at: booking.created_at,
        form_field_keys: Object.keys(booking.fields ?? {}),
        documents: booking.documents ?? [],
    };
    const note = SLOT_NOTES[booking.child_type];

    const createdBy: unknown = booking.created_by;

    if (typeof createdBy === 'string' && createdBy !== booking.user_id) view.booked_by_staff = true;

    if (note) view.note = note;

    const code = textOf(booking.checkin_code);

    if (code && CHECK_IN_STATUSES.includes(booking.status)) view.checkin_code = code;

    if (booking.arrived_at) view.arrived_at = booking.arrived_at;

    if (booking.late_cancel)
        view.status_note = 'Cancelled after the cancellation deadline, so it counts as a missed booking.';

    if (booking.info) view.info = booking.info;

    if (options.pii) {
        view.person = booking.person;
        view.phone = booking.phone;
        view.fields = booking.fields;

        const address = textOf(booking.address);

        if (address) view.address = address;
    }

    return view;
}

export interface WaitlistView {
    id: string;
    service_id: string;
    service_label: string;
    organization_id: string;
    option_id: string;
    slot_id: string;
    status: string;
    notified_at: string | null;
    created_at: string;
    person?: string;
    phone?: string;
}

export function redactWaitlistEntry(entry: WaitlistEntry, options: RedactOptions): WaitlistView {
    return {
        id: entry.id,
        service_id: entry.service_id,
        service_label: entry.service_label,
        organization_id: entry.organization_id,
        option_id: entry.option_id,
        slot_id: entry.slot_id,
        status: entry.status,
        notified_at: entry.notified_at,
        created_at: entry.created_at,
        ...(options.pii ? { person: entry.person, phone: entry.phone } : {}),
    };
}

export interface AccountView {
    id: string;
    role: string;
    name?: string;
    phone?: string;
    email?: string;
}

export function redactUser(user: UserResource, options: RedactOptions): AccountView {
    return {
        id: user.id,
        role: user.role,
        name: user.name,
        phone: options.pii ? user.phone : maskPhone(user.phone),
        email: options.pii ? user.email : maskEmail(user.email),
    };
}
