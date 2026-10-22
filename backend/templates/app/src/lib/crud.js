import { Router } from 'express';
import { prisma } from '../db.js';
import { requireRole } from '../middleware/auth.js';
import { wrap } from './async.js';
import { AppError, notFound } from './errors.js';
import { parse, parsePagination } from './validate.js';

const OPS = ['list', 'get', 'create', 'update', 'delete'];

function coerceFilter(value, type) {
  if (type === 'boolean') return value === 'true';
  if (type === 'number') return Number(value);
  return value;
}

/**
 * Standard REST resource for one Prisma model:
 *   GET /           paginated list with ?page, ?limit, ?q (search), ?sort=field:dir, and exact-match filters
 *   GET /:id        one record
 *   POST /          create (validated by `schema`)
 *   PATCH|PUT /:id  partial update (validated by `schema.partial()`)
 *   DELETE /:id     delete
 * Responses are `{ data }` or `{ data, meta }`; errors are `{ error: { code, message, details? } }`.
 *
 * `disable` lists operations (list, get, create, update, delete) that a hand-written route replaces.
 */
export function createCrudRouter({
  model,
  schema,
  searchFields = [],
  filters = {},
  sortable = [],
  orderBy = { createdAt: 'desc' },
  include,
  access = {},
  disable = [],
}) {
  const delegate = prisma[model];
  if (!delegate) throw new Error(`Unknown Prisma model delegate: ${model}`);
  for (const op of disable) {
    if (!OPS.includes(op)) throw new Error(`Unknown CRUD operation: ${op}`);
  }

  const router = Router();
  const canRead = requireRole(...(access.read || ['*']));
  const canWrite = requireRole(...(access.write || ['*']));
  const enabled = (op) => !disable.includes(op);
  const partial = schema.partial();

  if (enabled('list')) {
    router.get(
      '/',
      canRead,
      wrap(async (req, res) => {
        const { page, limit, skip } = parsePagination(req.query);
        const where = {};

        const q = typeof req.query.q === 'string' ? req.query.q.trim() : '';
        if (q && searchFields.length > 0) {
          where.OR = searchFields.map((field) => ({ [field]: { contains: q } }));
        }
        for (const [field, type] of Object.entries(filters)) {
          const raw = req.query[field];
          if (typeof raw === 'string' && raw !== '') where[field] = coerceFilter(raw, type);
        }

        let order = orderBy;
        if (typeof req.query.sort === 'string') {
          const [field, dir] = req.query.sort.split(':');
          if (sortable.includes(field)) order = { [field]: dir === 'asc' ? 'asc' : 'desc' };
        }

        const [total, rows] = await Promise.all([
          delegate.count({ where }),
          delegate.findMany({ where, orderBy: order, skip, take: limit, include }),
        ]);

        res.json({ data: rows, meta: { page, limit, total, totalPages: Math.max(1, Math.ceil(total / limit)) } });
      })
    );
  }

  if (enabled('get')) {
    router.get(
      '/:id',
      canRead,
      wrap(async (req, res) => {
        const row = await delegate.findUnique({ where: { id: req.params.id }, include });
        if (!row) throw notFound();
        res.json({ data: row });
      })
    );
  }

  if (enabled('create')) {
    router.post(
      '/',
      canWrite,
      wrap(async (req, res) => {
        const data = parse(schema, req.body);
        const row = await delegate.create({ data, include });
        res.status(201).json({ data: row });
      })
    );
  }

  if (enabled('update')) {
    const update = wrap(async (req, res) => {
      const data = parse(partial, req.body);
      if (Object.keys(data).length === 0) {
        throw new AppError(400, 'VALIDATION_FAILED', 'Tidak ada data yang diubah');
      }
      const row = await delegate.update({ where: { id: req.params.id }, data, include });
      res.json({ data: row });
    });
    router.patch('/:id', canWrite, update);
    router.put('/:id', canWrite, update);
  }

  if (enabled('delete')) {
    router.delete(
      '/:id',
      canWrite,
      wrap(async (req, res) => {
        await delegate.delete({ where: { id: req.params.id } });
        res.status(204).end();
      })
    );
  }

  return router;
}
