import {
    dateOnlyIn,
    instantOf,
    isSupportedTimeZone,
    isoAtIn,
    localTimeOf,
    resolveWindow,
    shiftDateOnly,
    weekdayOfDateOnly,
    withinPartOfDay,
} from '../../src/mapping/time.js';

const BERLIN = 'Europe/Berlin';

describe('time zones', () => {
    it('accepts living aliases that supportedValuesOf would reject', () => {
        expect(isSupportedTimeZone('Asia/Calcutta')).toBe(true);
        expect(isSupportedTimeZone('Europe/Berlin')).toBe(true);
        expect(isSupportedTimeZone('Nowhere/Nothing')).toBe(false);
        expect(isSupportedTimeZone('; rm -rf /')).toBe(false);
    });

    it('reads the date in the zone, not in the process', () => {
        expect(dateOnlyIn(new Date('2026-09-22T22:30:00Z'), BERLIN)).toBe('2026-09-23');
        expect(dateOnlyIn(new Date('2026-09-22T22:30:00Z'), 'UTC')).toBe('2026-09-22');
    });

    it('carries the zone offset through the DST switch', () => {
        expect(isoAtIn(new Date('2026-10-25T00:30:00Z'), BERLIN)).toBe('2026-10-25T02:30:00+02:00');
        expect(isoAtIn(new Date('2026-10-25T01:30:00Z'), BERLIN)).toBe('2026-10-25T02:30:00+01:00');
    });

    it('turns a local wall clock into an instant', () => {
        expect(instantOf('2026-07-01', '09:00', BERLIN).toISOString()).toBe('2026-07-01T07:00:00.000Z');
        expect(instantOf('2026-01-15', '09:00', BERLIN).toISOString()).toBe('2026-01-15T08:00:00.000Z');
    });

    it('shifts dates across month and year ends', () => {
        expect(shiftDateOnly('2026-02-28', 1)).toBe('2026-03-01');
        expect(shiftDateOnly('2026-01-01', -1)).toBe('2025-12-31');
        expect(weekdayOfDateOnly('2026-09-23')).toBe(3);
    });
});

describe('resolveWindow', () => {
    const now = new Date('2026-09-22T22:30:00Z');

    it('leaves the horizon to the API when "when" is absent', () => {
        expect(resolveWindow({}, BERLIN, now)).toEqual({ after: undefined, before: undefined });
    });

    it('resolves today and tomorrow in the organization zone', () => {
        expect(resolveWindow({ when: 'today' }, BERLIN, now)).toMatchObject({
            from: '2026-09-23',
            to: '2026-09-23',
        });
        expect(resolveWindow({ when: 'today' }, 'UTC', now)).toMatchObject({
            from: '2026-09-22',
            to: '2026-09-22',
        });
        expect(resolveWindow({ when: 'tomorrow' }, BERLIN, now)).toMatchObject({
            from: '2026-09-24',
            to: '2026-09-24',
        });
    });

    it('runs weeks Monday to Sunday and never backwards', () => {
        expect(resolveWindow({ when: 'this_week' }, BERLIN, now)).toMatchObject({
            from: '2026-09-23',
            to: '2026-09-27',
        });
        expect(resolveWindow({ when: 'next_week' }, BERLIN, now)).toMatchObject({
            from: '2026-09-28',
            to: '2026-10-04',
        });
    });

    it('takes an explicit date as a single day', () => {
        expect(resolveWindow({ when: '2026-12-31' }, BERLIN, now)).toMatchObject({
            from: '2026-12-31',
            to: '2026-12-31',
        });
    });

    it('passes instants through untouched', () => {
        expect(resolveWindow({ after: '2026-09-23T10:00:00+02:00' }, BERLIN, now).after).toBe(
            '2026-09-23T10:00:00+02:00',
        );
    });

    it('refuses a word it does not know', () => {
        expect(() => resolveWindow({ when: 'sometime' }, BERLIN, now)).toThrow(/Unsupported/);
    });
});

describe('parts of day', () => {
    it('reads the wall clock out of the offset the API sent', () => {
        expect(localTimeOf('2026-10-01T09:30:00+02:00')).toBe('09:30');
        expect(localTimeOf('2026-10-01T09:30:00Z')).toBe('09:30');
    });

    it('splits the day on the documented boundaries', () => {
        expect(withinPartOfDay('2026-10-01T11:59:00+02:00', 'morning')).toBe(true);
        expect(withinPartOfDay('2026-10-01T12:00:00+02:00', 'morning')).toBe(false);
        expect(withinPartOfDay('2026-10-01T12:00:00+02:00', 'afternoon')).toBe(true);
        expect(withinPartOfDay('2026-10-01T17:00:00+02:00', 'afternoon')).toBe(false);
        expect(withinPartOfDay('2026-10-01T17:00:00+02:00', 'evening')).toBe(true);
        expect(withinPartOfDay('2026-10-01T23:59:00+02:00', 'evening')).toBe(true);
    });
});
