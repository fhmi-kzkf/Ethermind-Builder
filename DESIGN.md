# Ethermind: design direction

Dial: ENERGY 2 / RHYTHM 3 / MOTION 2

Ethermind is a tool for small-business owners in Indonesia who describe what they need in their own words and get a working app. The direction follows the reference study in `docs/lovable-style-reference.md`: warm parchment paper, near-black ink, an achromatic interface, and one prismatic gradient as the single colour moment. We keep its restraint and its structure. We do not copy its copy, its font, its logo or its customer proof.

Owner decision (recorded for R-01 and R-37): the hero carries the reference's prismatic gradient. It is a named pattern, kept on purpose as the brand moment and limited as described below.

## Identity

- **Surface:** parchment `#fcfbf8` for the page, warm sand `#f7f4ed` for bands, white for the prompt box and cards, one warm beige border `#e7e4dc`.
- **Achromatic interface:** buttons are near-black or outlined, never coloured. Marks (current page, step numbers, active tab) use ink. Status colours (green, amber, red) appear only for real states and always with text.
- **The gradient:** `--prism`, the reference's sky blue, vivid blue, pink, red and orange. It appears as a soft horizon glow behind the hero prompt box, fading into parchment on every side, and as the fill of the round send button inside the prompt box. It never sits behind text, on buttons with labels, badges, icons or cards. Text over the hero is on parchment, and the prompt box and chips are solid.
- **Links and focus:** indigo `#3451b2` (6.8:1 on parchment), used for inline links and the focus ring only.
- **The mark:** a heavy capital "E" built from three round-ended bars, one above the other, the way a story becomes a design and then an app. The middle bar carries the prism (the same one as the hero horizon) and is the only colour in the mark. The prism bar can also stand alone as a marker, for example while the AI is thinking. The app icon is the paper "E" on an ink tile; next to the wordmark the bare ink "E" is used. Files: `frontend/public/favicon.svg`, `Logo` in `frontend/src/components/ui.tsx`.
- **Identity motif:** the dotted leader of a warung price list (`.leader`), used for prices and for what the client receives.
- **Inverse moment:** one dark panel (`.panel-dark`) on the home page, as in the reference.
- **Real product shots:** screenshots of apps the platform really built, labelled as such. No illustrations, no 3D, no fake terminal.
- **Light only:** the identity is the paper tone and the app is read for long stretches. If a dark theme is ever added it ships complete in both modes.

## Tokens (`frontend/src/styles/tokens.css`)

| Role | Value | Notes |
|------|-------|-------|
| Background | `#fcfbf8` | page |
| Warm surface | `#f7f4ed` | section bands, notes |
| Surface | `#ffffff` | cards, inputs, prompt box |
| Line | `#e7e4dc` | decorative dividers |
| Line strong | `#8f8c83` | edges of controls, 3.4:1 on white |
| Ink | `#1c1c1c` | text, primary button, marks |
| Muted | `#5f5f5d` | secondary text, 6.2:1 on parchment |
| Link / focus | `#3451b2` | 6.8:1 on parchment |
| Prism | `#82bcff`, `#2483ff`, `#ff66f4`, `#ff3029`, `#fe7b02` | hero only; the send arrow is ink, 4.7:1 or better on every stop |
| Ok / warn / bad | `#1d6b3f` / `#8a5a00` / `#b3261e` | each on its own soft background, above 5:1 |

## Type

Plus Jakarta Sans Variable (`@fontsource-variable`, self-hosted). The reference uses a proprietary face, so a substitute is required; this one was designed in Indonesia, reads well at small sizes and has a warm geometric voice. Headings use weight 560 with -0.03em tracking, body 400, UI labels 600. Body 16px / 1.6. Numbers use tabular figures.

## Shape and elevation

Buttons, chips and the model select are pills. Panels use 14px, the prompt box and the dark panel 22px, tags 6px, inputs 8px. Only the prompt box, menus, dialogs and the hero screenshot lift off the page. The navbar is the one translucent element (light blur).

## Layout rhythm

Sections change composition on purpose: a centred hero over the gradient, the product screenshot, a sticky heading beside a numbered list, plain rows of stories, a dark inverse panel with a dotted list, a framed note. No three-card feature rows, no bento, no logo bar, no pricing towers.

## Motion

GSAP (`frontend/src/motion/`), owner request. Every movement has one job, and nothing loops:

- Hero: the headline words rise in first, then the lead, the prompt box and the chips, so the eye starts at the action. The gradient horizon fades in once (1.6s), then trails the page slightly as the hero scrolls away (scroll-driven depth).
- Sections: the screenshot, steps and story rows enter as they are reached, once.
- Price list: each row appears, then its dotted leader is drawn left to right, like a menu being written.
- View changes (except home and the builder): a 0.3s fade and 10px rise, so a click visibly lands.
- Marketing pages (Contoh, Harga, Keamanan, Syarat, Privasi): the page head lands top to bottom, sections, plans, cards, facts and rows enter as they are reached, dotted leaders are drawn.
- Work screens (builder, dashboard, admin): things that appear on their own enter once and quickly (0.25 to 0.45 s): chat messages, build log lines, quality checks, project rows, tab contents, dialogs, notices. Long lists move only their last 14 items. Status tags change colour with a short transition.
- Hover feedback on rows, plans, cards, chips and buttons.

With `prefers-reduced-motion: reduce` nothing moves and everything is shown at once.

## Voice

Bahasa Indonesia, plain and specific. Sentence case. Verbs for actions ("Mulai merancang", "Pakai cerita ini", "Lanjutkan"). Errors say what failed and what to do next. No exclamation marks in success messages, no em dashes, no emoji, no buzzwords. Claims are limited to what the code does. What the platform cannot do (file upload, voice, WhatsApp or email, online payment, offline use) is stated on the home page and in the AI's answers.

## Accessibility baseline

Skip link, real landmarks, one h1 per page, visible focus ring on every control, dialogs that trap focus and close on Escape, 44px targets on phones, no information carried by colour alone, tables that scroll inside their own region.
