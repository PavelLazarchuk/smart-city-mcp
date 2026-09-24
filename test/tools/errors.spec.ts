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
            new ApiError({ status: 422, code: 'SLOT_FULL', message: 'The slot is fully booked.' }),
        );

        expect(failure.message).toBe(ERROR_GUIDANCE['SLOT_FULL']?.message);
        expect(failure.next_steps.join(' ')).toContain('join_waitlist');
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

    it('names a transport failure as such', () => {
        expect(toToolError(new TransportError('down')).code).toBe('TRANSPORT_ERROR');
    });

    it('still answers for a code it has never seen', () => {
        expect(guidanceFor('SOMETHING_NEW').next_steps).toHaveLength(1);
    });
});
