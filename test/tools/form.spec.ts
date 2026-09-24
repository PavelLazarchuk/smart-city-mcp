import { type FormField } from '../../src/api/contracts.js';
import {
    documentsToConfirm,
    elicitationSchemaFor,
    formSchema,
    missingDocuments,
    validateAnswers,
} from '../../src/mapping/form.js';

function field(overrides: Partial<FormField> & Pick<FormField, 'key' | 'type'>): FormField {
    return {
        label: overrides.key,
        required: false,
        max_length: null,
        ...overrides,
    };
}

describe('validateAnswers', () => {
    it('rejects a key the service never declared', () => {
        const result = validateAnswers([field({ key: 'note', type: 'text' })], { nope: 'x' });

        expect(result.details).toContainEqual({ path: 'fields.nope', message: 'Unknown field' });
    });

    it('treats empty string, null and undefined alike as missing', () => {
        const fields = [field({ key: 'surname', type: 'text', required: true })];

        for (const value of ['', null, undefined]) {
            expect(validateAnswers(fields, { surname: value }).details).toEqual([
                { path: 'fields.surname', message: 'Required' },
            ]);
        }
    });

    it('checks each type the way the API checks it', () => {
        const fields = [
            field({ key: 'note', type: 'text', max_length: 4 }),
            field({ key: 'mobile', type: 'phone' }),
            field({ key: 'mail', type: 'email' }),
            field({ key: 'count', type: 'number' }),
            field({ key: 'agreed', type: 'boolean' }),
            field({ key: 'birthday', type: 'date' }),
            field({ key: 'kind', type: 'select', options: ['a', 'b'] }),
        ];
        const result = validateAnswers(fields, {
            note: 'toolong',
            mobile: '123',
            mail: 'nope',
            count: Number.NaN,
            agreed: 'yes',
            birthday: '31.12.2026',
            kind: 'c',
        });

        expect(result.details.map((detail) => detail.message)).toEqual([
            'Must be at most 4 characters',
            'Must be a phone number',
            'Must be an e-mail address',
            'Must be a number',
            'Must be true or false',
            'Must be a date (YYYY-MM-DD)',
            'Must be one of the options',
        ]);
    });

    it('returns only the declared values, dropping the empty ones', () => {
        const fields = [field({ key: 'note', type: 'text' }), field({ key: 'count', type: 'number' })];

        expect(validateAnswers(fields, { note: 'hi', count: undefined }).values).toEqual({ note: 'hi' });
    });

    it('defaults the text limit to 1000 characters', () => {
        const fields = [field({ key: 'note', type: 'text' })];

        expect(validateAnswers(fields, { note: 'x'.repeat(1000) }).details).toEqual([]);
        expect(validateAnswers(fields, { note: 'x'.repeat(1001) }).details).toHaveLength(1);
    });
});

describe('formSchema', () => {
    it('fails with the field name on the issue path', () => {
        const schema = formSchema([field({ key: 'mobile', type: 'phone', required: true })]);
        const result = schema.safeParse({ mobile: 'abc' });

        expect(result.success).toBe(false);
        expect(result.error?.issues[0]?.path).toEqual(['mobile']);
    });

    it('accepts a valid form', () => {
        const schema = formSchema([field({ key: 'mobile', type: 'phone', required: true })]);

        expect(schema.safeParse({ mobile: '491701234567' }).success).toBe(true);
    });
});

describe('elicitationSchemaFor', () => {
    it('maps every field type onto a primitive the client can render', () => {
        const schema = elicitationSchemaFor([
            field({ key: 'note', type: 'textarea', max_length: 200, required: true }),
            field({ key: 'kind', type: 'select', options: ['a', 'b'] }),
            field({ key: 'count', type: 'number' }),
            field({ key: 'agreed', type: 'boolean' }),
            field({ key: 'mail', type: 'email' }),
            field({ key: 'birthday', type: 'date' }),
        ]);

        expect(schema.properties['note']).toMatchObject({ type: 'string', maxLength: 200 });
        expect(schema.properties['kind']).toMatchObject({ type: 'string', enum: ['a', 'b'] });
        expect(schema.properties['count']).toMatchObject({ type: 'number' });
        expect(schema.properties['agreed']).toMatchObject({ type: 'boolean' });
        expect(schema.properties['mail']).toMatchObject({ format: 'email' });
        expect(schema.properties['birthday']).toMatchObject({ format: 'date' });
        expect(schema.required).toEqual(['note']);
    });
});

describe('documents', () => {
    const documents = [
        { key: 'passport', label: 'Passport', required: true },
        { key: 'photo', label: 'Photo', required: false },
    ];

    it('names the required ones that were not confirmed', () => {
        expect(missingDocuments(documents, [])).toEqual(['passport']);
        expect(missingDocuments(documents, ['passport'])).toEqual([]);
    });

    it('lists all of them for reading out', () => {
        expect(documentsToConfirm(documents)).toHaveLength(2);
    });
});
