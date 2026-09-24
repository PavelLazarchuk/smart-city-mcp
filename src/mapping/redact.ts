import { type BookingResource, type UserResource, type WaitlistEntry } from '../api/contracts.js';

export interface RedactOptions {
    pii: boolean;
}

const SLOT_NOTES: Record<string, string> = {
    apply: 'Application without a time: the organization schedules it later.',
    date: 'Whole day: the organization assigns the time.',
};

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
    cancel_deadline_at: string | null;
    status: string;
    confirmed_at: string | null;
    created_at: string;
    note?: string;
    form_field_keys: string[];
    documents: string[];
    info?: string;
    person?: string;
    phone?: string;
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
        cancel_deadline_at: booking.cancel_deadline_at,
        status: booking.status,
        confirmed_at: booking.confirmed_at,
        created_at: booking.created_at,
        form_field_keys: Object.keys(booking.fields ?? {}),
        documents: booking.documents ?? [],
    };
    const note = SLOT_NOTES[booking.child_type];

    if (note) view.note = note;

    if (booking.info) view.info = booking.info;

    if (options.pii) {
        view.person = booking.person;
        view.phone = booking.phone;
        view.fields = booking.fields;
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
