import { type McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { z } from 'zod';

function userMessage(text: string): {
    messages: { role: 'user'; content: { type: 'text'; text: string } }[];
} {
    return { messages: [{ role: 'user', content: { type: 'text', text } }] };
}

export function registerPrompts(server: McpServer): void {
    server.registerPrompt(
        'book_a_service',
        {
            title: 'Book a service',
            description: 'Walks from a plain request to a confirmed booking.',
            argsSchema: {
                request: z.string().describe('What the person wants, in their own words'),
                when: z.string().optional().describe('When they would like it, in their own words'),
            },
        },
        ({ request, when }) =>
            userMessage(
                [
                    `I need: ${request}.`,
                    when ? `Preferred time: ${when}.` : '',
                    'Find the service with search_services, read it with get_service, then find_slots',
                    'using `when` and `part_of_day` rather than computing dates yourself.',
                    'Offer me at most five candidates with their times, then book the one I pick.',
                    'Do not invent form answers: they are asked of me.',
                ]
                    .filter(Boolean)
                    .join(' '),
            ),
    );

    server.registerPrompt(
        'my_bookings',
        {
            title: 'What am I booked for',
            description: 'Lists the active bookings with their times and cancellation deadlines.',
            argsSchema: {},
        },
        () =>
            userMessage(
                [
                    'Show what I am booked for.',
                    'Use list_my_bookings, and for each one say the service, when it starts and until',
                    'when it can still be cancelled. Group by day, nearest first.',
                ].join(' '),
            ),
    );

    server.registerPrompt(
        'required_documents',
        {
            title: 'What do I need to bring',
            description: 'Reads out the documents and form fields a service asks for.',
            argsSchema: { service: z.string().describe('The service, in the person’s own words') },
        },
        ({ service }) =>
            userMessage(
                [
                    `What do I need for: ${service}?`,
                    'Find it with search_services, then get_service, and read out required_documents',
                    'and the form fields it asks for. Do not book anything.',
                ].join(' '),
            ),
    );
}
