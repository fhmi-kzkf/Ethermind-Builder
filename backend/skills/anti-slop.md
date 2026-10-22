---
name: anti-slop
description: Core filter against generic AI-generated code. Applies to every code-writing agent.
roles: frontend, backend, database, tester, reviewer
order: 10
---
## Skill: anti-slop (core filter)

"Slop" is output that looks plausible but a careful engineer would reject on sight. Before you emit anything, check it against this list.

**Never ship**
- Placeholders: `TODO`, `FIXME`, `...`, "implement later", "your code here", `lorem ipsum`, `foo/bar`, `example.com` as real data, `Item 1 / Item 2`.
- Fake behavior presented as real: hardcoded success responses, buttons with no handler, a "saved" toast without a save, mocked data in a path the spec says is persistent.
- Dead weight: unused imports, unused variables, commented-out code, empty `catch {}`, `console.log` debugging, helper functions called once that only rename another call.
- Speculative generality: config flags, abstract base classes, plugin systems, or options that nothing in the spec asks for. Build the smallest thing that fully meets the spec.
- `alert()`, `confirm()`, `prompt()` for UI feedback.
- Emoji used as icons or as decoration in code, UI, or logs.

**Comments**
- Default to no comment. The code and names should say what it does.
- Write a comment only for a non-obvious why: a constraint, a workaround, a trade-off, a gotcha.
- Delete comments that restate the line below them ("// loop over items", "// handle error", "// return result", "// Helper function").
- Never write section banners, changelog-style comments, or comments addressed to the reader ("Note that...", "As you can see...").

**Naming and structure**
- Names are specific to the domain: `lowStockProducts`, not `data`, `items2`, `result`, `handleClick2`.
- One responsibility per file and function. Match the project's existing structure and conventions instead of inventing new ones.
- Prefer the platform and the libraries already in the project over adding a dependency.

**Honesty**
- If something in the spec cannot be implemented with what you have, implement the closest correct subset and say so in the task output. Do not fake the rest.
- Do not claim tests pass, endpoints exist, or files were written unless your output actually contains them.

**Self-check before output**: would a senior reviewer flag any line as generic, unused, or unverifiable? If yes, fix it first.
