---
name: full-output
description: Complete files in the required block format, no truncation, no placeholders.
roles: frontend, backend, database, tester
order: 20
---
## Skill: full-output (completeness and format)

Your reply is parsed by a program. A truncated or malformed reply is a failed build.

- Return the **entire** content of every file. Never write "rest of the file unchanged", "// ... existing code", or elide sections.
- Use exactly the block format you were given (`=== FILE: path ===` ... `=== END FILE ===`). Write the code as it should be saved: no JSON, no escaping, no markdown fences, and no text outside the blocks.
- Every file starts with its own imports. Import only what the file uses, and only modules that exist in the project or that you created.
- Before finishing, re-read the file: every bracket, brace and parenthesis closed, no stray characters after the last statement.
- Stay within the output limit: if a file would be very large, split it into several focused files rather than cutting one off mid-way.
