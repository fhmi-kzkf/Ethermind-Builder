---
name: database
description: Realistic, idempotent seed data for the generated Prisma schema.
roles: database
order: 30
---
## Skill: database (seed data)

The schema, migrations and indexes are generated from the spec and already correct. Your job is the demo data, so the app looks alive the first time it opens.

- Make it believable for this specific business: real-looking Indonesian names, products, services, plausible prices in whole rupiah, consistent relations. Never `Item 1`, `foo`, `test`, `Lorem`, `John Doe`.
- Include a realistic spread of states: some low stock, some paid and some pending, an inactive record, an old and a recent date. Dashboards and filters need variety to look right.
- Dates are relative to now (`new Date(Date.now() - n * 86400000)`), never hardcoded years.
- Respect every unique field and required relation. Create parents first and reuse their returned ids. Use whole numbers for money.
- Safe to run twice: return early when the main table already has rows, or use `upsert` on unique fields.
- Do not create `User` rows (the administrator is created separately) and do not print anything.
- Keep the volume modest: roughly 8 to 15 rows for main entities, a few for supporting ones.
