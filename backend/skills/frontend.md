---
name: frontend
description: Frontend quality: states, responsiveness, accessibility, safe rendering, intentional layout.
roles: frontend
order: 30
---
## Skill: frontend

**States.** The router shows the loading skeleton while `load()` runs, an error with a retry button if it throws, and the empty state when `isEmpty()` is true. Use them: put every fetch in `load()`, never inside `render()`, and always provide `isEmpty` and `empty` for lists. Actions inside the page (save, delete, pay) go through `ctx.run(...)` so they show pending state and toast their failures. Confirm success with a toast, never `alert()`.

**Safe rendering (non-negotiable)**
- Build the page with `h()`. It turns strings into text nodes, so user data can never become markup. Do not look for a way to set HTML from a string; none exists and lint rejects it.
- No inline `style` attributes (blocked by the content security policy). Use the provided classes.
- Never put secrets in client code.

**Look and feel**
- All colors, radii, fonts and spacing come from the design tokens through the provided CSS classes. Do not write colors or new CSS. The look of this app was chosen for this client; your job is the layout and the interaction.
- Use `grid-auto` for card layouts, `stat-grid` for numbers, `stack` and `cluster` for flow. Keep one primary action per screen visually strongest (`variant: 'primary'`).
- Lead with what the user needs first. A dashboard shows today's numbers, then what needs action, in that order. A task screen (cashier, booking) puts the main task in the first viewport on a phone.
- Avoid filler: no decorative cards, no empty "coming soon" sections, no emoji as icons (use `icon()`), no stat that cannot be explained in one sentence.
- Numbers that people compare are right-aligned (`align: 'end'`) and formatted with `rupiah()` / `number()`.

**Forms**
- Use `form()` / `field()`: every input gets a visible label, correct `type`, and server validation errors appear next to the field. Do not hand-build inputs.

**Responsive and touch**
- Design for a 360px phone first. Tables already become labelled cards on small screens. Keep primary actions reachable without horizontal scrolling.

**Accessibility**
- Icon-only buttons need `ariaLabel`. Use real buttons for actions and links for navigation. Keep headings in order (the page title is the `<h1>`; use card titles for sections).
- Do not rely on color alone: pair status colors with text (`badge('Stok menipis', 'warning')`).
