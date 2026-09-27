import {
    ADDRESS_SERVICE_TYPES,
    BOOKABLE_SLOT_TYPES,
    TIMED_SLOT_TYPES,
    type BookingPolicy,
    type ServiceSlots,
    type SlotCandidate,
} from '../api/contracts.js';
import {
    PART_OF_DAY_BOUNDS,
    type PartOfDay,
    instantOf,
    isoAtIn,
    localTimeOf,
    withinPartOfDay,
} from './time.js';

export const MAX_CANDIDATES = 6;

const MINUTE = 60_000;

export interface RangeView {
    from: string;
    to: string;
    step_minutes: number;
    min_minutes: number;
    max_minutes: number | null;
}

export interface SlotView {
    option_id: string;
    option_label: string;
    service_type: string;
    slot_id: string;
    slot_label: string;
    child_type: 'date_time' | 'date' | 'apply' | 'time_range' | 'callback';
    starts_at: string | null;
    ends_at: string | null;
    time: string | null;
    available: number | null;
    full: boolean;
    range?: RangeView;
    needs_address?: true;
    note: string | undefined;
}

export interface FlattenOptions {
    policy?: BookingPolicy | null;
    partOfDay?: PartOfDay;
    now?: Date;
    limit?: number;
}

type Dropped = { not_bookable: number; past: number; lead_time: number; part_of_day: number };

export interface FlattenResult {
    items: SlotView[];
    total_found: number;
    truncated_by_api: boolean;
    dropped: Dropped;
}

const NOTES: Record<string, string> = {
    apply: 'Application without a time: the organization schedules it later.',
    date: 'Whole day: the organization assigns the time.',
    time_range:
        'Free interval: pick a start and an end inside `range`, on its `step_minutes` grid and between `min_minutes` and `max_minutes` long (null: no upper limit); pass them as `time` and `end_time`.',
    callback: 'Call-back window: the organization phones the person between `time` and `ends_at`.',
};

export function flattenSlots(response: ServiceSlots, options: FlattenOptions = {}): FlattenResult {
    const now = options.now ?? new Date();
    // `null` is "no lead time" (API skips the check), not zero.
    const leadTimeMinutes = options.policy?.lead_time_minutes ?? null;
    const dropped: Dropped = { not_bookable: 0, past: 0, lead_time: 0, part_of_day: 0 };
    const items: SlotView[] = [];

    for (const candidate of response.items) {
        if (!BOOKABLE_SLOT_TYPES.includes(candidate.child_type)) {
            dropped.not_bookable += 1;
            continue;
        }

        if (TIMED_SLOT_TYPES.includes(candidate.child_type) && !candidate.time) {
            dropped.not_bookable += 1;
            continue;
        }

        if (candidate.child_type === 'time_range') {
            const opening = openingOf(candidate, response.timezone, now, leadTimeMinutes, options.partOfDay);

            if (typeof opening === 'string') dropped[opening] += 1;
            else items.push(opening);

            continue;
        }

        if (candidate.starts_at) {
            const startsAt = Date.parse(candidate.starts_at);

            if (candidate.time !== null && startsAt <= now.getTime()) {
                dropped.past += 1;
                continue;
            }

            if (leadTimeMinutes !== null && startsAt - now.getTime() < leadTimeMinutes * MINUTE) {
                dropped.lead_time += 1;
                continue;
            }

            if (
                candidate.time !== null &&
                options.partOfDay &&
                !withinPartOfDay(candidate.starts_at, options.partOfDay)
            ) {
                dropped.part_of_day += 1;
                continue;
            }
        }

        items.push(viewOf(candidate));
    }

    items.sort(byStart);

    return {
        items: items.slice(0, options.limit ?? MAX_CANDIDATES),
        total_found: items.length,
        truncated_by_api: response.total > response.items.length,
        dropped,
    };
}

function openingOf(
    candidate: SlotCandidate,
    timeZone: string,
    now: Date,
    leadTimeMinutes: number | null,
    partOfDay: PartOfDay | undefined,
): SlotView | keyof Dropped {
    const { range, date, starts_at: startsAt, ends_at: endsAt } = candidate;

    if (!range || !date || !startsAt || !endsAt) return 'not_bookable';

    const start = Date.parse(startsAt);
    const end = Date.parse(endsAt);
    const floors: { reason: keyof Dropped; at: number }[] = [{ reason: 'past', at: now.getTime() + 1 }];

    if (leadTimeMinutes !== null)
        floors.push({ reason: 'lead_time', at: now.getTime() + leadTimeMinutes * MINUTE });

    if (partOfDay)
        floors.push({
            reason: 'part_of_day',
            at: instantOf(date, PART_OF_DAY_BOUNDS[partOfDay].from, timeZone).getTime(),
        });

    const floor = floors.reduce((highest, next) => (next.at > highest.at ? next : highest));
    const step = range.step_minutes * MINUTE;
    const first = floor.at <= start ? start : start + Math.ceil((floor.at - start) / step) * step;

    if (first + range.min_minutes * MINUTE > end) return floor.reason;

    const opening = isoAtIn(new Date(first), timeZone);

    if (partOfDay && !withinPartOfDay(opening, partOfDay)) return 'part_of_day';

    return {
        ...viewOf(candidate),
        starts_at: opening,
        time: localTimeOf(opening),
        range: { from: localTimeOf(opening), to: localTimeOf(endsAt), ...range },
    };
}

function viewOf(candidate: SlotCandidate): SlotView {
    return {
        option_id: candidate.option_id,
        option_label: candidate.option_label,
        service_type: candidate.service_type,
        slot_id: candidate.slot_id,
        slot_label: candidate.slot_label,
        child_type: candidate.child_type as SlotView['child_type'],
        starts_at: candidate.starts_at,
        ends_at: candidate.ends_at,
        time: candidate.time,
        available: candidate.available,
        // `null` means unlimited.
        full: candidate.available === 0,
        ...(ADDRESS_SERVICE_TYPES.includes(candidate.service_type) ? { needs_address: true as const } : {}),
        note: NOTES[candidate.child_type],
    };
}

function byStart(left: SlotView, right: SlotView): number {
    if (left.starts_at === right.starts_at) return left.option_label.localeCompare(right.option_label);

    if (left.starts_at === null) return 1;

    if (right.starts_at === null) return -1;

    return left.starts_at < right.starts_at ? -1 : 1;
}

function minutesOf(time: string): number {
    return Number(time.slice(0, 2)) * 60 + Number(time.slice(3, 5));
}

export function openingFor(openings: SlotCandidate[], from: string, to: string): SlotCandidate | undefined {
    return openings.find(
        (opening) =>
            opening.time !== null &&
            opening.ends_at !== null &&
            opening.time <= from &&
            to <= localTimeOf(opening.ends_at),
    );
}

export function rangeProblem(opening: SlotCandidate, from: string, to: string): string | null {
    const range = opening.range;

    if (!range || opening.time === null) return null;

    const length = minutesOf(to) - minutesOf(from);
    const offset = minutesOf(from) - minutesOf(opening.time);

    if (offset % range.step_minutes !== 0 || length % range.step_minutes !== 0)
        return `Start and end must fall on the ${range.step_minutes}-minute grid from ${opening.time}`;

    if (length < range.min_minutes) return `Must be at least ${range.min_minutes} minutes long`;

    if (range.max_minutes !== null && length > range.max_minutes)
        return `Must be at most ${range.max_minutes} minutes long`;

    return null;
}
