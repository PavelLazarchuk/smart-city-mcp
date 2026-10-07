import { ApiError, TransportError, apiErrorFrom } from '../../src/api/errors.js';
import { ERROR_GUIDANCE, guidanceFor, toToolError } from '../../src/mapping/errors.js';

describe('apiErrorFrom', () => {
    it('unwraps the envelope', () => {
        const error = apiErrorFrom(422, {
            error: {
                code: 'SLOT_FULL',
                message: 'The slot is fully booked.',
                details: [{ path: 'slot_id', message: 'full' }],
                request_id: 'req-1',
            },
        });

        expect(error.code).toBe('SLOT_FULL');
        expect(error.requestId).toBe('req-1');
        expect(error.details).toHaveLength(1);
    });

    it('falls back to the status when the body is not an envelope', () => {
        expect(apiErrorFrom(404, '<html>').code).toBe('NOT_FOUND');
        expect(apiErrorFrom(429, undefined).code).toBe('RATE_LIMITED');
        expect(apiErrorFrom(503, {}).code).toBe('INTERNAL_ERROR');
    });
});

describe('toToolError', () => {
    it('replaces the API message with this server’s own wording', () => {
        const failure = toToolError(
            apiErrorFrom(422, { error: { code: 'SLOT_FULL', message: 'The slot is fully booked.' } }),
        );

        expect(failure.message).toBe(ERROR_GUIDANCE['SLOT_FULL']?.message);
        expect(failure.next_steps.join(' ')).toContain('join_waitlist');
    });

    it('keeps the message of a refusal raised here, which already says what happened', () => {
        const failure = toToolError(
            new ApiError({
                status: 400,
                code: 'CONFIRMATION_REQUIRED',
                message: 'Nothing was sent yet. The person has to approve this:\n\nBook this?',
            }),
        );

        expect(failure.message).toContain('Book this?');
        expect(failure.next_steps.join(' ')).toContain('confirm: true');
    });

    it('keeps the wait time so the model does not retry silently', () => {
        const failure = toToolError(
            new ApiError({
                status: 429,
                code: 'RATE_LIMITED',
                message: 'x',
                retryAfterSeconds: 42,
            }),
        );

        expect(failure.retry_after_seconds).toBe(42);
    });

    it('passes the end of a suspension on, so the person hears until when', () => {
        const failure = toToolError(
            apiErrorFrom(422, {
                error: {
                    code: 'BOOKING_SUSPENDED',
                    message: 'Booking this service is suspended for your account.',
                    details: [{ path: 'until', message: '2026-10-15T09:00:00.000Z' }],
                },
            }),
        );

        expect(failure.details).toEqual([{ path: 'until', message: '2026-10-15T09:00:00.000Z' }]);
        expect(failure.next_steps.join(' ')).toContain('do not retry');
    });

    it('passes on the date of the booking that is too close, and which rule it broke', () => {
        const detail = {
            path: 'organization.booking_policy.min_interval_days',
            message: 'Another booking on 2026-10-12 is less than 14 day(s) away',
        };
        const failure = toToolError(
            apiErrorFrom(422, {
                error: { code: 'BOOKING_TOO_FREQUENT', message: 'x', details: [detail] },
            }),
        );

        expect(failure.details).toEqual([detail]);
        expect(failure.next_steps.join(' ')).toContain('get_organization');
    });

    it('points an organization-wide limit at the organization, not the service', () => {
        const failure = toToolError(
            apiErrorFrom(422, { error: { code: 'BOOKING_ORGANIZATION_LIMIT_REACHED', message: 'x' } }),
        );

        expect(failure.message).toMatch(/organization/);
        expect(failure.next_steps.join(' ')).toContain('list_my_bookings');
    });

    it('names a transport failure as such', () => {
        expect(toToolError(new TransportError('down')).code).toBe('TRANSPORT_ERROR');
    });

    it('still answers for a code it has never seen', () => {
        expect(guidanceFor('SOMETHING_NEW').next_steps).toHaveLength(1);
    });
});
