---
name: testing
description: Tests that can actually fail: behavior, edge cases, auth, no tautologies.
roles: tester
order: 30
---
## Skill: testing

A test that cannot fail is slop. `expect(app).toBeDefined()`, `expect(true).toBe(true)`, and snapshot-everything tests do not count.

- Test behavior through the public interface: call the real route with a real request (supertest) and assert on status code, response body shape, and the resulting database state.
- For every endpoint in the spec cover: the happy path, validation failure (400 with the standard error shape), not found (404), unauthenticated (401), and wrong-role or wrong-owner (403).
- Cover the edge cases specific to the domain: duplicate unique value, zero and negative quantities, stock that would go below zero, empty list, page beyond the last page, very long strings.
- Each test is independent: set up its own data, clean up after, no reliance on execution order. Use a separate test database, never the dev one.
- Name tests by behavior: `rejects a sale that exceeds available stock`, not `test1` or `works correctly`.
- Assert exact values that matter (computed totals, status transitions), not just "is truthy".
- No `sleep` or fixed timeouts to wait for things; await the actual condition.
- Do not mock the database or the module under test. Mock only true external services (email, payment, third-party APIs).
- E2E (Playwright) covers the main user journeys on a desktop and a mobile viewport: log in, create, edit, delete, and see the empty and error states.
- If a test you wrote would still pass after breaking the feature, rewrite it.
