---
name: backend
description: Backend quality: validation, consistent errors, authorization, safe data access, config.
roles: backend
order: 30
---
## Skill: backend

**Validation and errors**
- Validate every input at the boundary (body, query, params, headers) with a schema (Zod). Reject unknown fields. Coerce types explicitly. Limit string lengths and array sizes.
- One error shape everywhere: `{ "error": { "code": "VALIDATION_FAILED", "message": "...", "details": [...] } }`. Machine-readable `code`, human-readable `message` in the client's language, `details` only for field errors.
- Correct status codes: 200 read/update, 201 create, 204 delete, 400 validation, 401 not authenticated, 403 not allowed, 404 not found, 409 conflict, 429 rate limited, 500 unexpected.
- Never leak internals: no stack traces, SQL, file paths, or library error text in responses. Log the detail server-side with context; return a generic message.
- Wrap async handlers so a thrown error reaches the central error handler. Do not repeat try/catch in every route when a handler wrapper does it.

**Auth and authorization**
- Hash passwords with bcrypt or argon2. Never log or return password hashes or tokens.
- Check authentication **and** authorization on every protected route: role, and ownership of the specific record. "Logged in" is not "allowed".
- Never trust IDs or roles from the client body for permission decisions. Derive the user from the verified session or token.
- Rate-limit login and any expensive or write-heavy endpoint.

**Data access**
- Use the ORM or parameterized queries only. Never build SQL by string concatenation.
- Select only the fields the response needs; never return whole user rows.
- Every list endpoint paginates (`limit` with a cap, `offset` or cursor) and has a stable sort order.
- Multi-step writes that must succeed together run in a transaction.
- Make create endpoints safe to retry where the spec implies it (idempotency key or unique constraint).
- Persist everything in the database through Prisma. Never keep business state in module variables or in memory.

**Config and security**
- Never read `process.env` in route code and never hardcode secrets (the launch checklist fails the build if an environment variable is used but not documented). The platform already provides configuration, security headers, rate limiting, the health check and sessions.
- Every endpoint listed in the task exists, with the method, path, roles and response shape given. Do not rename or skip any, and do not add endpoints that were not asked for.
