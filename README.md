# smart-city-mcp

An MCP server over the [Smart City API](../smart-city-api), for the **client profile**: search the
service catalogue, read what a service asks for, sign in by one-time code, and manage your own
bookings. It speaks HTTP to the API and imports nothing from it except the generated client types.

Transport is **stdio** only. Administrator and operations profiles, remote hosting and OAuth are out
of scope here.

## Requirements

- Node.js >= 22
- A reachable Smart City API (`GET /health/info` is used at startup to check the version)

## Getting started

```bash
npm install
npm run build
SMART_CITY_API_URL=http://localhost:8080/api/v1 node dist/main.js
```

Copy `.env.example` for the full list of settings. The environment is validated by a zod schema at
startup: an invalid value stops the process with a message on stderr rather than surfacing as
`undefined` later.

### Wiring it into a client

```json
{
    "mcpServers": {
        "smart-city": {
            "command": "node",
            "args": ["/absolute/path/to/smart-city-mcp/dist/main.js"],
            "env": {
                "SMART_CITY_API_URL": "http://localhost:8080/api/v1",
                "SMART_CITY_TZ": "Europe/Berlin",
                "SMART_CITY_MCP_WRITE": "true"
            }
        }
    }
}
```

## Configuration

| Variable                     | Default                          | What it does                                            |
| ---------------------------- | -------------------------------- | ------------------------------------------------------- |
| `SMART_CITY_API_URL`         | —                                | Base URL including the `/api/v1` prefix. Required.      |
| `SMART_CITY_TZ`              | zone of the process              | Fallback zone where an organization has none.           |
| `SMART_CITY_MCP_WRITE`       | `false`                          | Whether the writing tools are registered at all.        |
| `SMART_CITY_MCP_PII`         | `false`                          | Whether personal data is returned unmasked.             |
| `SMART_CITY_SESSION_PATH`    | `~/.smart-city-mcp/session.json` | Where the token pair is stored, `0600`.                 |
| `SMART_CITY_MCP_TOOL_BUDGET` | `40`                             | Tool calls per process before calls are refused.        |
| `LOG_LEVEL`                  | `warn`                           | `silent`…`debug`. stderr only — stdout is the protocol. |

## What it exposes

**Public tools**, available without a session: `search_services`, `find_services_nearby`,
`get_service`, `find_slots`, `list_organizations`, `get_organization`, `list_news`,
`get_info_sections`.

**Personal tools**, registered but disabled until a session exists, which is what emits
`notifications/tools/list_changed`: `whoami`, `logout`, `list_my_bookings`, `get_booking`,
`list_my_waitlist`.

**Writing tools**, only when `SMART_CITY_MCP_WRITE=true`: `create_booking`, `confirm_booking`,
`cancel_booking`, `reschedule_booking`, `join_waitlist`, `leave_waitlist`, `set_contact_email`.

**Resources**: `smartcity://service/{id}`, `smartcity://service/{id}/form`,
`smartcity://organization/{id}`, `smartcity://me/bookings` (updated after every write of its own).

**Prompts**: `book_a_service`, `my_bookings`, `required_documents`.

## How it behaves

**Signing in.** `auth_start` sends the one-time code; `auth_confirm` asks the person for it through
MCP elicitation, so the code is typed by the human and never enters the conversation as tool
arguments. A first sign-in also asks for a name, because a booking carries one. Clients without
elicitation may pass `code` as an argument instead — the only way to sign in there.

**Refreshing.** Reusing a refresh token revokes the whole session family on this API, and a model
happily runs four tools at once. Refreshes therefore go through a single-flight slot: concurrent
callers await one shared `POST /auth/refresh`. The access token is renewed 30 seconds before it
expires, and a `401 TOKEN_EXPIRED` is retried exactly once.

**Time.** Nothing calls `new Date()` outside `src/mapping/time.ts`. Dates resolve in the
organization's own zone, which travels with the service through `?include=organization`. Tools take
`when` (`today`, `tomorrow`, `this_week`, `next_week` or `YYYY-MM-DD`) and `part_of_day`
(`morning` < 12:00, `afternoon` 12:00–17:00, `evening` ≥ 17:00) instead of a computed date, and
answer with ISO instants that carry their offset.

**Slots.** `find_slots` flattens the API's candidates and drops what cannot be booked, mirroring the
API's own rules: a past _time_, a `date_time` entry without a time, anything inside
`lead_time_minutes` where the service sets one. A whole day is not a time, so today's `date` slot
survives and no part of the day is read into it. A full slot is marked rather than hidden, since
that is the way into the waitlist, and at most six candidates come back alongside `total_found`.

**Booking.** The form is validated against the service's own `form_fields` before anything is sent,
so a wrong answer costs a question and not a booking attempt. Required fields are asked of the
person; required documents are read out and only confirmed keys are sent. Every write is confirmed
by the person, and the idempotency key is derived:

```
Idempotency-Key = sha256(user_id, service_id, option_id, slot_id, time ?? '')
```

A repeat of the same booking replays the original `201` and is reported as "this already existed",
instead of colliding as a second booking the way a random key would. The idempotency record outlives
the booking by up to a day, so a replay pointing at a booking the person has since cancelled is
re-sent with that dead booking's id as salt — a fresh key that is still derived, not random.

**Errors.** `src/mapping/errors.ts` maps each API code to this server's own wording plus the next
step to take. Those next steps are written into the text block, not only into `structuredContent`:
an error result cannot match the tool's declared `outputSchema`, so a client that validates
structured content would otherwise drop them — `SLOT_FULL` points at `join_waitlist`, `OTP_INVALID` says to ask for the code again
rather than send a new one. The contract test walks the OpenAPI document and fails when a reachable
code has neither a row nor an explicit "cannot happen here".

**Personal data.** Off by default: phone numbers are masked to the last four digits, form answers
come back as keys only, and the name on a booking not at all. `SMART_CITY_MCP_PII=true` opens it up.

**Text from the database.** Labels, descriptions, news bodies and info sections are written by
organizations. They stay inside `structuredContent` under their own keys, and every tool that
returns them says in its description that they are data to relay, not instructions to follow.

## The API contract

The client types come from the API's OpenAPI document and are committed, so an API change shows up
as a reviewable diff instead of a surprise at runtime:

```bash
npm run codegen                                    # from SMART_CITY_API_URL
npm run codegen http://localhost:8080/api/docs-json # or an explicit source
npm run codegen ./some/openapi.json
```

`src/api/contracts.ts` holds hand-copied zod schemas for everything this server sends.
`test/contract/openapi.spec.ts` diffs them against the committed document — request bodies, query
parameters, enumerations, the sparse `fields=` lists and the error-code table — so drift fails a
test rather than a call.

## Tests

```bash
npm test           # everything
npm run test:unit  # mappings and the contract check, no network
npm run test:e2e   # the server driven over MCP, plus the stdio checks
```

The e2e suite runs the real server against a strict in-process stand-in for the API
(`test/e2e/support/stub-api.ts`) that rotates refresh tokens, revokes the family on reuse, replays an
`Idempotency-Key`, refuses a full slot and refuses a waitlist entry on a free one. It covers the
whole booking path, the parallel-refresh race, the double-booking replay, the read-only tool list and
the purity of stdout.

To run the same tools against a running API as well:

```bash
SMART_CITY_E2E_API_URL=http://localhost:8080/api/v1 \
SMART_CITY_E2E_SERVICE_ID=<published service id> \
SMART_CITY_E2E_ACCESS_TOKEN=<client access token> \
SMART_CITY_E2E_REFRESH_TOKEN=<client refresh token> \
npm run test:e2e
```

Without `SMART_CITY_E2E_API_URL` that suite skips. The service and token variables are optional and
unlock the slot and personal-tool checks.

## Layout

```
src/
  main.ts            stdio entry point
  server.ts          registration and the session gate on the personal tools
  config.ts          zod schema for the environment
  logger.ts          stderr only, secrets redacted by an explicit list of names
  api/
    generated/       openapi.json and the types from npm run codegen
    contracts.ts     copied request schemas, checked by the contract test
    fields.ts        the sparse fields= lists
    client.ts        envelope, retries, rate limits, ETag cache, token attachment
    errors.ts        the error envelope as a thrown ApiError
  auth/              token store (0600) and the single-flight session
  tools/             catalogue, account, bookings
  mapping/           time, slots, form, errors, redact
  resources.ts
  prompts.ts
test/
  tools/             unit tests for the mappings
  contract/          the OpenAPI diff
  e2e/               the server over MCP, against the stub or a live API
```
