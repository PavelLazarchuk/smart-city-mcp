import {
    BOOKABLE_SLOT_TYPES,
    type BookingPolicy,
    type ServiceSlots,
    type SlotCandidate,
} from '../api/contracts.js';
import { type PartOfDay, withinPartOfDay } from './time.js';

export const MAX_CANDIDATES = 6;

export interface SlotView {
    option_id: string;
    option_label: string;
    slot_id: string;
    slot_label: string;
    child_type: 'date_time' | 'date' | 'apply';
    starts_at: string | null;
    ends_at: string | null;
    time: string | null;
    available: number | null;
    full: boolean;
    note: string | undefined;
}

export interface FlattenOptions {
    policy?: BookingPolicy | null;
    partOfDay?: PartOfDay;
    now?: Date;
    limit?: number;
}

export interface FlattenResult {
    items: SlotView[];
    total_found: number;
    truncated_by_api: boolean;
    dropped: { not_bookable: number; past: number; lead_time: number; part_of_day: number };
}

const NOTES: Record<string, string> = {
    apply: 'Application without a time: the organization schedules it later.',
    date: 'Whole day: the organization assigns the time.',
};

export function flattenSlots(response: ServiceSlots, options: FlattenOptions = {}): FlattenResult {
    const now = options.now ?? new Date();
    // `null` is "no lead time" (API skips the check), not zero.
    const leadTimeMinutes = options.policy?.lead_time_minutes ?? null;
    const dropped = { not_bookable: 0, past: 0, lead_time: 0, part_of_day: 0 };
    const items: SlotView[] = [];

    for (const candidate of response.items) {
        if (!BOOKABLE_SLOT_TYPES.includes(candidate.child_type)) {
            dropped.not_bookable += 1;
            continue;
        }

        if (candidate.child_type === 'date_time' && !candidate.time) {
            dropped.not_bookable += 1;
            continue;
        }

        if (candidate.starts_at) {
            const startsAt = Date.parse(candidate.starts_at);

            if (candidate.time !== null && startsAt <= now.getTime()) {
                dropped.past += 1;
                continue;
            }

            if (leadTimeMinutes !== null && startsAt - now.getTime() < leadTimeMinutes * 60_000) {
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

function viewOf(candidate: SlotCandidate): SlotView {
    return {
        option_id: candidate.option_id,
        option_label: candidate.option_label,
        slot_id: candidate.slot_id,
        slot_label: candidate.slot_label,
        child_type: candidate.child_type as SlotView['child_type'],
        starts_at: candidate.starts_at,
        ends_at: candidate.ends_at,
        time: candidate.time,
        available: candidate.available,
        // `null` means unlimited.
        full: candidate.available === 0,
        note: NOTES[candidate.child_type],
    };
}

function byStart(left: SlotView, right: SlotView): number {
    if (left.starts_at === right.starts_at) return left.option_label.localeCompare(right.option_label);

    if (left.starts_at === null) return 1;

    if (right.starts_at === null) return -1;

    return left.starts_at < right.starts_at ? -1 : 1;
}
