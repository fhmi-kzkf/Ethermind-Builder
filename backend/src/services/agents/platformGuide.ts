/**
 * What the generated app's own libraries offer. Agents write code against this contract, so it must
 * match templates/app exactly. Keep it short: it is sent with every code-writing call.
 */

export const RESPONSE_CONTRACT = `API conventions (every endpoint, generated or hand-written):
- Success: { "data": <result> }. Lists also carry "meta": { page, limit, total, totalPages }.
- Failure: { "error": { "code", "message", "details"? } } with a matching HTTP status. Validation failures use 400, code "VALIDATION_FAILED" and details: [{ field, message }].
- Messages shown to people are in Bahasa Indonesia.`;

export const BACKEND_GUIDE = `Backend runtime (Node 22, ES modules, Express 4, Prisma on SQLite). Your route file is mounted at /api/<segment>, so define paths relative to it ('/', '/checkout', '/:id/adjust').

Available imports (paths relative to src/routes/custom/<segment>.js):
  import { Router } from 'express';
  import { z } from 'zod';
  import { prisma } from '../../db.js';                         // Prisma client; models are delegates, e.g. prisma.product
  import { wrap } from '../../lib/async.js';                    // wrap(async (req, res) => {...}) forwards thrown errors
  import { parse } from '../../lib/validate.js';                // parse(zodSchema, req.body) -> data, or throws a 400 with field details
  import { AppError, notFound, conflict, badRequest } from '../../lib/errors.js';   // new AppError(status, 'CODE', 'Pesan Indonesia')
  import { requireRole } from '../../middleware/auth.js';       // requireRole('admin', 'kasir') or requireRole('*') for any signed-in user

Rules:
- Default export a Router. Use wrap() on every async handler. Respond with res.json({ data }) (201 for creates). Never send raw errors.
- Protect each route with requireRole(...) using the roles listed for the endpoint. req.user = { id, email, name, role } is set when signed in.
- Validate every body, query and param with zod through parse(). Money is an integer number of rupiah.
- Work that must succeed or fail together (for example a sale plus stock decrement) goes in prisma.$transaction(async (tx) => {...}). Check conditions inside the transaction (for example enough stock) and throw conflict('Stok tidak cukup') to roll back.
- Use only the Prisma models and fields in the schema you are given. Do not invent fields.
- No console.log, no TODO, no placeholder data.`;

export const FRONTEND_GUIDE = `Frontend runtime (browser ES modules, no framework, no build step). A page is a module at public/js/pages/<slug>.js whose default export is:
  export default {
    title: 'Judul halaman',
    async load(ctx) { return data },            // optional. The router shows a loading skeleton, and an error state with a retry button if this throws.
    isEmpty(data) { return false },             // optional. true shows the empty state instead of render().
    empty: { title, message, action: { label, onClick } },
    render(data, ctx) { return <Node> },        // must return a DOM node
  };
ctx = { params, query, user, navigate(path), reload(), toast, setQuery(patch), run(asyncFn, { success, button }) }.
  ctx.run() executes an action, toasts the error if it fails and returns undefined on failure. Call ctx.reload() after a successful change.

Imports (paths relative to public/js/pages/):
  import { h, icon } from '../lib/dom.js';
    h('div', { class: 'card', onclick: fn }, 'text', childNode)   builds elements. Strings become text, so data can never become markup.
    There is NO innerHTML. Never try to set HTML from strings. Inline style attributes are blocked by CSP: use the CSS classes below.
    icon('plus' | 'edit' | 'trash' | 'search' | 'x' | 'check' | 'alert' | 'home' | 'box' | 'users' | 'chart' | 'cart' | 'file' | 'settings' | 'calendar' | 'wallet' | 'tag' | 'truck' | 'list')
  import { api } from '../lib/api.js';
    await api.get('/api/x', { page: 1, q: 'abc' }) | api.post(path, body) | api.patch(path, body) | api.delete(path). Resolves to the parsed JSON ({ data, meta? }); throws ApiError (message, details[{field,message}]).
  import { rupiah, number, date, dateTime, yesNo, pick } from '../lib/format.js';   // rupiah(25000) -> "Rp 25.000"
  import { button, badge, card, statCard, pageHeader, dataTable, pagination, searchInput, field, form, dialog, confirmDialog, stateEmpty, stateError, stateLoading, withPending, toast } from '../lib/ui.js';
    button({ label, icon, variant: 'primary'|'secondary'|'ghost'|'danger', onClick, type, disabled, ariaLabel })   (icon-only buttons need ariaLabel)
    pageHeader({ title, subtitle, actions: [button...] })      card({ title, children: [nodes] })      statCard({ label, value, hint, tone: 'neutral'|'success'|'warning'|'danger' })
    dataTable({ columns: [{ key, label, render?(row), align?: 'end' }], rows, caption, actions?(row) -> [nodes] })      badge(text, 'neutral'|'success'|'warning'|'danger'|'accent')
    form({ fields: [{ name, label, type: 'text'|'number'|'email'|'tel'|'textarea'|'select'|'checkbox'|'datetime-local', required, options: [{ value, label }], value, hint, min, step }], submitLabel, onSubmit(values) /* throw ApiError to show server errors */, onCancel })  -> { el }
    dialog({ title, body: node }) -> { close() }        confirmDialog({ title, message, confirmLabel, danger }) -> Promise<boolean>
  Standard CRUD list/create/edit/delete screens are generated for you; write only what the spec marks as custom or dashboard.

CSS classes available (never write new CSS files): page, page-header, stack, cluster, grid-auto (responsive card grid), stat-grid (responsive stat cards), card, toolbar, muted, sr-only, badge-*, btn-*, table, input, field, label.
Structure (important): build the page from small named pieces, then assemble them. Write "const summary = h('div', { class: 'stat-grid' }, ...);" and "const table = dataTable({...});" as separate statements, and finish with "return h('div', { class: 'page' }, header, summary, table);". Do not nest more than three h() calls deep in one expression, and keep the file under about 120 lines. Deeply nested one-expression pages are the most common cause of unbalanced brackets.
Layout rules: put the page content in <div class="page"> ... </div>. Use stack/cluster/grid-auto for layout. Every list or table must handle zero rows, every action must show pending state and failure through ctx.run(). Texts are in Bahasa Indonesia, specific to the business, no placeholder wording. Format money with rupiah() and dates with date()/dateTime().`;

export const TEST_GUIDE = `Test runtime: vitest + supertest. Test files are tests/custom/<segment>.test.js.
Helpers (paths relative to tests/custom/):
  import { describe, it, expect, beforeEach } from 'vitest';
  import { client } from '../helpers/app.js';        // await client() -> supertest instance for the app (anonymous)
  import { prisma, resetDb } from '../helpers/db.js'; // call await resetDb() in beforeEach
  import { signIn } from '../helpers/auth.js';       // const { agent } = await signIn('admin') -> supertest agent already signed in (only when login is enabled)
  import { factories } from '../factories.js';       // await factories.product({ stock: 3 }) persists a record with all required parents; every entity has one
Rules:
- Assert behaviour through HTTP: status code, response body, and database state afterwards (prisma.x.count / findUnique).
- Cover for each endpoint: the happy path, validation failure (400 + error.code), not found/conflict rules from the description, unauthenticated (401) and wrong role (403) when login is enabled, and the exact numbers it computes.
- Every test must be able to fail: no expect(true), no toBeDefined-only tests. Name tests by behaviour.`;
