import { z } from 'zod';

import { type FormField, type RequiredDocument } from '../api/contracts.js';
import { type ApiErrorDetail } from '../api/errors.js';

const PHONE = /^\d{8,15}$/;
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const DATE = /^\d{4}-\d{2}-\d{2}$/;
const DEFAULT_MAX_LENGTH = 1000;

export interface FormValidation {
    details: ApiErrorDetail[];
    values: Record<string, unknown>;
}

export function validateAnswers(fields: FormField[], answers: Record<string, unknown>): FormValidation {
    const details: ApiErrorDetail[] = [];
    const declared = new Map(fields.map((field) => [field.key, field]));
    const values: Record<string, unknown> = {};

    for (const key of Object.keys(answers)) {
        if (!declared.has(key)) details.push({ path: `fields.${key}`, message: 'Unknown field' });
    }

    for (const field of fields) {
        const path = `fields.${field.key}`;
        const value = answers[field.key];

        if (value === undefined || value === null || value === '') {
            if (field.required) details.push({ path, message: 'Required' });

            continue;
        }

        const problem = problemOf(field, value);

        if (problem) {
            details.push({ path, message: problem });
            continue;
        }

        values[field.key] = value;
    }

    return { details, values };
}

export function problemOf(field: FormField, value: unknown): string | null {
    const max = field.max_length ?? DEFAULT_MAX_LENGTH;

    switch (field.type) {
        case 'text':
        case 'textarea':
            if (typeof value !== 'string') return 'Must be a string';

            return value.length > max ? `Must be at most ${max} characters` : null;
        case 'phone':
            return typeof value === 'string' && PHONE.test(value) ? null : 'Must be a phone number';
        case 'email':
            return typeof value === 'string' && EMAIL.test(value) && value.length <= 254
                ? null
                : 'Must be an e-mail address';
        case 'number':
            return typeof value === 'number' && Number.isFinite(value) ? null : 'Must be a number';
        case 'boolean':
            return typeof value === 'boolean' ? null : 'Must be true or false';
        case 'date':
            return typeof value === 'string' && DATE.test(value) && !Number.isNaN(Date.parse(value))
                ? null
                : 'Must be a date (YYYY-MM-DD)';
        case 'select':
            return typeof value === 'string' && (field.options ?? []).includes(value)
                ? null
                : `Must be one of: ${(field.options ?? []).join(', ')}`;
        default:
            return 'Unsupported field type';
    }
}

export function formSchema(fields: FormField[]): z.ZodType<Record<string, unknown>> {
    return z.record(z.string(), z.unknown()).superRefine((answers, ctx) => {
        for (const detail of validateAnswers(fields, answers).details) {
            ctx.addIssue({
                code: 'custom',
                message: detail.message,
                path: (detail.path ?? '').split('.').slice(1),
            });
        }
    });
}

type PrimitiveSchema =
    | {
          type: 'string';
          title: string;
          description?: string;
          minLength?: number;
          maxLength?: number;
          format?: string;
      }
    | { type: 'string'; title: string; description?: string; enum: string[] }
    | { type: 'number'; title: string; description?: string }
    | { type: 'boolean'; title: string; description?: string };

export interface ElicitationSchema {
    type: 'object';
    properties: Record<string, PrimitiveSchema>;
    required?: string[];
}

export function elicitationSchemaFor(fields: FormField[]): ElicitationSchema {
    const properties: Record<string, PrimitiveSchema> = {};

    for (const field of fields) properties[field.key] = primitiveOf(field);

    const required = fields.filter((field) => field.required).map((field) => field.key);

    return { type: 'object', properties, ...(required.length > 0 ? { required } : {}) };
}

function primitiveOf(field: FormField): PrimitiveSchema {
    const head = { title: field.label, ...(field.placeholder ? { description: field.placeholder } : {}) };

    switch (field.type) {
        case 'select':
            return { type: 'string', ...head, enum: field.options ?? [] };
        case 'number':
            return { type: 'number', ...head };
        case 'boolean':
            return { type: 'boolean', ...head };
        case 'email':
            return { type: 'string', ...head, format: 'email' };
        case 'date':
            return { type: 'string', ...head, format: 'date' };
        default:
            return { type: 'string', ...head, maxLength: field.max_length ?? DEFAULT_MAX_LENGTH };
    }
}

export interface DocumentPrompt {
    key: string;
    label: string;
    required: boolean;
}

export function documentsToConfirm(documents: RequiredDocument[]): DocumentPrompt[] {
    return documents.map((document) => ({
        key: document.key,
        label: document.label,
        required: document.required,
    }));
}

export function missingDocuments(documents: RequiredDocument[], confirmed: string[]): string[] {
    return documents
        .filter((document) => document.required && !confirmed.includes(document.key))
        .map((document) => document.key);
}
