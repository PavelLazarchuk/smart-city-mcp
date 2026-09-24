import { formatInTimeZone, fromZonedTime } from 'date-fns-tz';

const IANA_NAME = /^[A-Za-z][A-Za-z0-9_+-]*(\/[A-Za-z0-9_+-]+)*$/;
const DATE_ONLY = /^\d{4}-\d{2}-\d{2}$/;

export const WHEN_VALUES = ['today', 'tomorrow', 'this_week', 'next_week'] as const;
export type When = (typeof WHEN_VALUES)[number];

export const PART_OF_DAY_VALUES = ['morning', 'afternoon', 'evening'] as const;
export type PartOfDay = (typeof PART_OF_DAY_VALUES)[number];

export const PART_OF_DAY_BOUNDS: Record<PartOfDay, { from: string; to: string }> = {
    morning: { from: '00:00', to: '12:00' },
    afternoon: { from: '12:00', to: '17:00' },
    evening: { from: '17:00', to: '24:00' },
};

export function isSupportedTimeZone(timeZone: string): boolean {
    if (!IANA_NAME.test(timeZone)) return false;

    try {
        new Intl.DateTimeFormat('en-CA', { timeZone });

        return true;
    } catch {
        return false;
    }
}

export function dateOnlyIn(instant: Date, timeZone: string): string {
    return formatInTimeZone(instant, timeZone, 'yyyy-MM-dd');
}

export function isoAtIn(instant: Date, timeZone: string): string {
    return formatInTimeZone(instant, timeZone, "yyyy-MM-dd'T'HH:mm:ssXXX");
}

export function instantOf(date: string, time: string | null | undefined, timeZone: string): Date {
    return fromZonedTime(`${date}T${time ?? '00:00'}:00`, timeZone);
}

export function shiftDateOnly(date: string, days: number): string {
    const [year = 0, month = 1, day = 1] = date.split('-').map(Number);
    const shifted = new Date(Date.UTC(year, month - 1, day + days));

    return shifted.toISOString().slice(0, 10);
}

/** 0 = Sunday. */
export function weekdayOfDateOnly(date: string): number {
    const [year = 0, month = 1, day = 1] = date.split('-').map(Number);

    return new Date(Date.UTC(year, month - 1, day)).getUTCDay();
}

function mondayOf(date: string): string {
    const weekday = weekdayOfDateOnly(date);

    return shiftDateOnly(date, weekday === 0 ? -6 : 1 - weekday);
}

export interface WindowInput {
    when?: string;
    after?: string;
    before?: string;
}

export interface ResolvedWindow {
    from?: string;
    to?: string;
    after?: string;
    before?: string;
}

export function resolveWindow(input: WindowInput, timeZone: string, now: Date = new Date()): ResolvedWindow {
    const today = dateOnlyIn(now, timeZone);
    const window: ResolvedWindow = { after: input.after, before: input.before };

    if (input.when === undefined) return window;

    if (DATE_ONLY.test(input.when)) return { ...window, from: input.when, to: input.when };

    switch (input.when) {
        case 'today':
            return { ...window, from: today, to: today };
        case 'tomorrow': {
            const tomorrow = shiftDateOnly(today, 1);

            return { ...window, from: tomorrow, to: tomorrow };
        }
        case 'this_week': {
            const sunday = shiftDateOnly(mondayOf(today), 6);

            return { ...window, from: today, to: sunday };
        }
        case 'next_week': {
            const monday = shiftDateOnly(mondayOf(today), 7);

            return { ...window, from: monday, to: shiftDateOnly(monday, 6) };
        }
        default:
            throw new Error(`Unsupported "when": ${input.when}`);
    }
}

export function localTimeOf(iso: string): string {
    return iso.slice(11, 16);
}

export function withinPartOfDay(iso: string, part: PartOfDay): boolean {
    const bounds = PART_OF_DAY_BOUNDS[part];
    const time = localTimeOf(iso);

    return time >= bounds.from && time < bounds.to;
}

export function isDateOnly(value: string): boolean {
    return DATE_ONLY.test(value);
}

export function isPast(iso: string, now: Date = new Date()): boolean {
    return Date.parse(iso) <= now.getTime();
}

const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export function humanDate(date: string): string {
    const [year = 0, month = 1, day = 1] = date.split('-').map(Number);

    return `${WEEKDAYS[weekdayOfDateOnly(date)] ?? ''} ${day} ${MONTHS[month - 1] ?? ''} ${year}`;
}

export function humanInstant(iso: string, timeZone: string): string {
    return formatInTimeZone(new Date(iso), timeZone, 'EEE d MMM yyyy, HH:mm');
}

export function describeWhen(date: string | null, time: string | null): string {
    if (!date) return 'no fixed time (the organization schedules it)';

    return time ? `${humanDate(date)}, ${time}` : `${humanDate(date)} (whole day)`;
}
