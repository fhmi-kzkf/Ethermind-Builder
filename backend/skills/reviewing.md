---
name: reviewing
description: Reviewer checklist for launch-grade quality, security, and slop detection.
roles: reviewer
order: 30
---
## Skill: reviewing (launch-grade checklist)

Review like someone who will be paged if this breaks. Report only real problems you can point to, each with a file and a concrete fix. Do not pad the list with style preferences, and do not pass a build because it "looks fine".

**Security (severity critical or high)**
- Injection: SQL built by concatenation, shell commands from user input, unescaped user data in `innerHTML` or templates (XSS).
- Auth (server side only; the platform handles sign-in, hashing and headers, and browser pages are not a security boundary): routes missing authentication; missing ownership or role checks (a user can read or edit another user's record by changing an ID); passwords stored or logged in plain text; JWT secret hardcoded.
- Secrets: API keys, tokens, or passwords in code, config committed to the repo, or the logs.
- Data exposure: password hashes or internal fields in responses; stack traces or SQL errors returned to the client; CORS `*` on authenticated routes.
- Input: missing validation on body, query, or params; unbounded list endpoints.

**Reliability (high or medium)**
- Missing loading, empty, or error state in any data-driven view.
- Unhandled promise rejections; empty `catch` blocks; errors swallowed so the UI shows success on failure.
- Writes that need a transaction but have none; unique rules enforced only in code.
- Behavior the spec lists but the code does not implement, or endpoints that return hardcoded data.

**Slop (medium)**
- Placeholder or lorem text, `TODO`, generic sample data, buttons without handlers, `alert()` feedback, dead code, comments that restate the code, tests that cannot fail.
- Visual defaults: gradient-on-everything, emoji as icons, identical card grids with no hierarchy, text that fails contrast.

**Accessibility and responsiveness (medium)**
- Inputs without labels, icon buttons without `aria-label`, no visible focus, tap targets under 44px, horizontal scroll at 360px width.

**Verdict rules**
- `passed` is false if there is any critical or high issue, or two or more medium issues in the same category.
- Each issue's `fixRecommendation` must be specific enough for the coder agent to apply without guessing (what to change, in which function).
