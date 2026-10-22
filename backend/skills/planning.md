---
name: planning
description: Specs that fit one real business instead of a generic CRUD template.
roles: planner
order: 30
---
## Skill: planning (spec quality)

A good spec reads like it was written by someone who has worked in this business for a week.

- **Start from the daily task**, not from the data. Ask what the user does most often (ringing up a sale, confirming a booking, recording a delivery) and make that the shortest path in the app. Management screens come second.
- **Name things the way the client does.** Use the client's own words for entities, fields and pages. If they say "nota", do not write "invoice".
- **Include only what the business needs.** Three to seven pages is typical. Do not add analytics, notifications, settings or integrations nobody asked for. A feature that cannot be explained in one sentence of the client's words does not belong.
- **Model reality.** Capture the rules that cause real trouble: stock cannot go negative, a booking cannot overlap, a paid invoice cannot be edited. Put such rules in the descriptions of the custom endpoints that enforce them.
- **Dashboards answer questions**: what happened today, what needs action now. Name the exact numbers.
- **Design is a decision.** Pick the palette, type and density from the customer's world: a bakery, a law office and a workshop should not look alike. Warm and rounded for hospitality, restrained and dense for finance, plain and high-contrast for field workers on phones. Keep a restrained palette: one accent, neutral surfaces, readable text. Avoid default blue-purple gradients and decorative colors.
- **Phones first** when staff work on the floor; **dense tables** when they sit at a desk.
- **Be specific in text**: realistic Bahasa Indonesia labels, no placeholder wording, no marketing language.
