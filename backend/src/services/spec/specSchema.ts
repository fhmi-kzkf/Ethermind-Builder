import { z } from 'zod';
import { delegateName, relationFieldName, resourcePath } from './naming';

export const FIELD_TYPES = ['String', 'Int', 'Float', 'Boolean', 'DateTime'] as const;
export const PAGE_ICONS = ['home', 'box', 'users', 'chart', 'cart', 'file', 'settings', 'calendar', 'wallet', 'tag', 'truck', 'list'] as const;
export const AUTH_MODES = ['none', 'single_role', 'multi_role'] as const;
export const TYPOGRAPHY = ['neutral-sans', 'humanist-sans', 'geometric-sans', 'editorial-serif', 'mono'] as const;

const hex = z.string().regex(/^#[0-9a-fA-F]{6}$/, 'must be a 6-digit hex color like #1a2b3c');

const PaletteSchema = z.object({
  background: hex,
  surface: hex,
  text: hex,
  mutedText: hex,
  border: hex,
  accent: hex,
});

const DesignSchema = z
  .object({
    theme: z.enum(['light', 'dark']).default('light'),
    personality: z.string().max(240).default(''),
    palette: PaletteSchema.optional(),
    typography: z.enum(TYPOGRAPHY).default('neutral-sans'),
    radius: z.enum(['sharp', 'soft', 'round']).default('soft'),
    density: z.enum(['compact', 'comfortable']).default('comfortable'),
    navStyle: z.enum(['sidebar', 'topbar']).default('sidebar'),
    // Legacy fields from specs saved before the design system existed.
    primaryColor: hex.optional(),
    cardRadius: z.string().optional(),
    fontFamily: z.string().optional(),
  })
  .default({});

const FieldSchema = z.object({
  name: z.string(),
  type: z.string(),
  required: z.boolean().default(true),
  unique: z.boolean().optional(),
  relation: z.string().optional(),
  values: z.array(z.string().min(1)).min(2).optional(),
  default: z.union([z.string(), z.number(), z.boolean()]).optional(),
  label: z.string().optional(),
  format: z.enum(['rupiah', 'email', 'phone', 'longtext']).optional(),
  min: z.number().optional(),
  max: z.number().optional(),
});

const EntitySchema = z.object({
  name: z.string(),
  label: z.string().optional(),
  fields: z.array(FieldSchema).min(1),
  internal: z.boolean().optional(),
  access: z
    .object({
      read: z.array(z.string()).optional(),
      write: z.array(z.string()).optional(),
    })
    .optional(),
});

const PageSchema = z.object({
  route: z.string(),
  name: z.string().min(1),
  purpose: z.string().default(''),
  components: z.array(z.string()).default([]),
  kind: z.enum(['crud', 'dashboard', 'custom']).default('custom'),
  entity: z.string().optional(),
  roles: z.array(z.string()).optional(),
  icon: z.enum(PAGE_ICONS).optional(),
});

const EndpointSchema = z.object({
  method: z.enum(['GET', 'POST', 'PUT', 'DELETE', 'PATCH']),
  path: z.string(),
  description: z.string().default(''),
  roles: z.array(z.string()).optional(),
  overridesCrud: z.boolean().optional(),
  /** JSON body the endpoint accepts, as a compact shape, e.g. { items: [{ productId, quantity }], method }. */
  request: z.string().optional(),
  /** JSON the endpoint returns inside { data: ... }, as a compact shape, e.g. { todayTotal: number, lowStock: [{ id, name, stock }] }. */
  response: z.string().optional(),
});

const AuthSchema = z
  .object({
    mode: z.enum(AUTH_MODES).default('none'),
    roles: z.array(z.string().regex(/^[a-z][a-z0-9_]*$/, 'role names are lowercase snake_case')).default([]),
  })
  .default({});

export const SpecSchema = z.object({
  title: z.string().min(2).max(80),
  summary: z.string().default(''),
  targetUsers: z.array(z.string()).default([]),
  techStack: z.any().optional(),
  features: z
    .array(
      z.object({
        name: z.string(),
        description: z.string().default(''),
        priority: z.enum(['must_have', 'should_have', 'nice_to_have']).default('must_have'),
        // Models list several roles for one feature as an array; that is the same information as a comma-separated string.
        userRole: z.preprocess((v) => (Array.isArray(v) ? v.filter((r) => typeof r === 'string').join(', ') : v), z.string().default('')),
      })
    )
    .default([]),
  pages: z.array(PageSchema).min(1),
  databaseSchema: z.array(EntitySchema).min(1),
  apiEndpoints: z.array(EndpointSchema).default([]),
  auth: AuthSchema,
  designGuidelines: DesignSchema,
});

export type SpecDefinition = z.infer<typeof SpecSchema>;
export type SpecFeature = SpecDefinition['features'][number];
export type SpecPage = SpecDefinition['pages'][number];
export type SpecTable = SpecDefinition['databaseSchema'][number];
export type SpecTableField = SpecTable['fields'][number];
export type SpecEndpoint = SpecDefinition['apiEndpoints'][number];
export type DesignGuidelines = SpecDefinition['designGuidelines'];

export const GENERATED_STACK = {
  frontend: 'Vanilla ES modules (no build step) + design tokens',
  backend: 'Node.js 22 / Express 4',
  database: 'SQLite via Prisma ORM',
  styling: 'Per-project design tokens',
} as const;

const AUTO_FIELDS = new Set(['id', 'createdAt', 'updatedAt']);

/**
 * Accepts raw JSON from the planner (or a spec saved by an older version) and returns a normalized
 * spec. Throws a ZodError for structural problems; semantic problems are reported by validateSpec.
 */
export function parseSpec(raw: unknown): SpecDefinition {
  const spec = SpecSchema.parse(cleanRawSpec(raw));

  spec.techStack = { ...GENERATED_STACK };

  if (spec.auth.mode === 'none') spec.auth.roles = [];

  for (const entity of spec.databaseSchema) {
    entity.fields = entity.fields.filter((f) => !AUTO_FIELDS.has(f.name));
    for (const field of entity.fields) {
      field.type = normalizeFieldType(field.type);
    }
  }

  // Standard CRUD endpoints are generated for every entity. Keep only custom ones the planner declared.
  // An endpoint flagged as replacing a standard route that does not exist (for example /api/transaksi when the table is
  // Transaction) is simply a custom endpoint. Dropping the flag is safer than failing the whole spec over it.
  for (const endpoint of spec.apiEndpoints) {
    if (endpoint.overridesCrud && !isStandardCrud(spec, endpoint)) delete endpoint.overridesCrud;
  }
  spec.apiEndpoints = spec.apiEndpoints.filter((e) => !isStandardCrud(spec, e) || e.overridesCrud);

  return spec;
}

/**
 * Models often write `null` for "not applicable" (a GET endpoint's "request") or a one-item "values" list.
 * Neither is a real mistake, so they are repaired here instead of costing a full regeneration round trip.
 */
export function cleanRawSpec(value: unknown): unknown {
  if (Array.isArray(value)) return value.map(cleanRawSpec);
  if (value === null || typeof value !== 'object') return value;

  const cleaned: Record<string, unknown> = {};
  for (const [key, item] of Object.entries(value as Record<string, unknown>)) {
    if (item === null || item === undefined) continue;
    if (key === 'values' && Array.isArray(item) && item.filter((v) => typeof v === 'string' && v.trim()).length < 2) continue;
    cleaned[key] = cleanRawSpec(item);
  }
  return cleaned;
}

export function normalizeFieldType(type: string): string {
  const t = type.trim().toLowerCase();
  if (['string', 'text', 'varchar'].includes(t)) return 'String';
  if (['int', 'integer', 'bigint'].includes(t)) return 'Int';
  if (['float', 'number', 'double', 'decimal', 'real'].includes(t)) return 'Float';
  if (['bool', 'boolean'].includes(t)) return 'Boolean';
  if (['datetime', 'date', 'timestamp'].includes(t)) return 'DateTime';
  return type;
}

export function isStandardCrud(spec: SpecDefinition, endpoint: SpecEndpoint): boolean {
  const path = endpoint.path.replace(/\/+$/, '');
  return spec.databaseSchema.some((entity) => {
    const base = `/api/${resourcePath(entity.name)}`;
    if (path === base) return endpoint.method === 'GET' || endpoint.method === 'POST';
    if (path === `${base}/:id`) return ['GET', 'PUT', 'PATCH', 'DELETE'].includes(endpoint.method);
    return false;
  });
}

/** Which standard CRUD operations the planner replaced with custom handlers. */
export function overriddenCrudOps(spec: SpecDefinition, entity: SpecTable): Set<string> {
  const base = `/api/${resourcePath(entity.name)}`;
  const ops = new Set<string>();
  for (const e of spec.apiEndpoints) {
    if (!e.overridesCrud) continue;
    const path = e.path.replace(/\/+$/, '');
    if (path === base && e.method === 'GET') ops.add('list');
    if (path === base && e.method === 'POST') ops.add('create');
    if (path === `${base}/:id` && e.method === 'GET') ops.add('get');
    if (path === `${base}/:id` && (e.method === 'PUT' || e.method === 'PATCH')) ops.add('update');
    if (path === `${base}/:id` && e.method === 'DELETE') ops.add('delete');
  }
  return ops;
}

/** Endpoints beyond standard CRUD, grouped by the first path segment after /api/. */
export function customEndpointGroups(spec: SpecDefinition): Map<string, SpecEndpoint[]> {
  const groups = new Map<string, SpecEndpoint[]>();
  for (const endpoint of spec.apiEndpoints) {
    const segment = endpoint.path.replace(/^\/api\//, '').split('/')[0];
    const list = groups.get(segment) || [];
    list.push(endpoint);
    groups.set(segment, list);
  }
  return groups;
}

const RESERVED_ENTITY_NAMES = new Set(['Session', 'Prisma', 'PrismaClient']);

/**
 * Returns human-readable problems, phrased so they can be fed back to the planner model verbatim.
 * An empty array means the spec is buildable.
 */
export function validateSpec(spec: SpecDefinition): string[] {
  const errors: string[] = [];
  const entityNames = new Set<string>();
  const resources = new Set<string>();

  for (const entity of spec.databaseSchema) {
    if (!/^[A-Z][A-Za-z0-9]*$/.test(entity.name)) {
      errors.push(`Entity "${entity.name}": name must be PascalCase singular, like "Product" or "StockMovement".`);
    }
    if (entityNames.has(entity.name)) errors.push(`Entity "${entity.name}" is defined more than once.`);
    entityNames.add(entity.name);

    if (RESERVED_ENTITY_NAMES.has(entity.name)) {
      errors.push(`Entity name "${entity.name}" is reserved. Choose another name.`);
    }
    if (spec.auth.mode !== 'none' && entity.name === 'User') {
      errors.push(
        'Entity "User" is created automatically when auth is enabled (fields: email, name, role). Remove it, or name your domain entity differently (for example "Staff" or "Customer").'
      );
    }

    const resource = resourcePath(entity.name);
    if (resources.has(resource)) errors.push(`Entity "${entity.name}" maps to the same API path /api/${resource} as another entity.`);
    resources.add(resource);

    const fieldNames = new Set<string>();
    for (const field of entity.fields) {
      if (!/^[a-z][A-Za-z0-9]*$/.test(field.name)) {
        errors.push(`${entity.name}.${field.name}: field name must be camelCase.`);
      }
      if (fieldNames.has(field.name)) errors.push(`${entity.name}.${field.name} is defined more than once.`);
      fieldNames.add(field.name);

      if (!(FIELD_TYPES as readonly string[]).includes(field.type)) {
        errors.push(`${entity.name}.${field.name}: type "${field.type}" is not supported. Use one of ${FIELD_TYPES.join(', ')}.`);
      }
      if (field.values && field.type !== 'String') {
        errors.push(`${entity.name}.${field.name}: "values" (fixed choices) is only allowed on String fields.`);
      }
      if (field.relation && !/Id$/.test(field.name)) {
        errors.push(`${entity.name}.${field.name}: a relation field must be named like "productId" (ending in Id).`);
      }
      if (field.relation && field.type !== 'String') {
        errors.push(`${entity.name}.${field.name}: a relation (foreign key) field must have type String.`);
      }
    }
  }

  for (const entity of spec.databaseSchema) {
    for (const field of entity.fields) {
      if (field.relation && !entityNames.has(field.relation) && !(field.relation === 'User' && spec.auth.mode !== 'none')) {
        errors.push(`${entity.name}.${field.name}: relation target "${field.relation}" does not exist.`);
      }
    }
  }

  const routes = new Set<string>();
  for (const page of spec.pages) {
    if (!page.route.startsWith('/')) errors.push(`Page "${page.name}": route must start with "/".`);
    if (spec.auth.mode !== 'none' && ['/users', '/account', '/login'].includes(page.route)) {
      errors.push(`Page route "${page.route}" is reserved by the platform when login is enabled.`);
    }
    if (routes.has(page.route)) errors.push(`Page route "${page.route}" is used by more than one page.`);
    routes.add(page.route);

    if (page.kind === 'crud') {
      if (!page.entity || !entityNames.has(page.entity)) {
        errors.push(`Page "${page.name}" is kind "crud" but its "entity" is missing or does not exist.`);
      } else if (spec.databaseSchema.find((e) => e.name === page.entity)?.internal) {
        errors.push(`Page "${page.name}" is kind "crud" but entity "${page.entity}" is internal (it has no standard API). Use kind "custom".`);
      }
    }
    for (const role of page.roles || []) {
      if (!spec.auth.roles.includes(role)) errors.push(`Page "${page.name}": role "${role}" is not in auth.roles.`);
    }
  }
  if (!routes.has('/')) errors.push('There must be a page with route "/" (the landing view after opening the app).');

  if (spec.auth.mode !== 'none' && spec.auth.roles[0] !== 'admin') {
    errors.push('When login is enabled, auth.roles must start with "admin" (the first role is the administrator who manages users).');
  }
  if (spec.auth.mode === 'multi_role' && spec.auth.roles.length < 2) {
    errors.push('auth.mode "multi_role" needs at least two roles in auth.roles.');
  }
  if (spec.auth.mode === 'single_role' && spec.auth.roles.length !== 1) {
    errors.push('auth.mode "single_role" needs exactly one role in auth.roles.');
  }
  for (const entity of spec.databaseSchema) {
    for (const role of [...(entity.access?.read || []), ...(entity.access?.write || [])]) {
      if (role !== '*' && !spec.auth.roles.includes(role)) {
        errors.push(`Entity "${entity.name}": access role "${role}" is not in auth.roles.`);
      }
    }
  }

  const seen = new Set<string>();
  for (const endpoint of spec.apiEndpoints) {
    if (!endpoint.path.startsWith('/api/')) errors.push(`Endpoint ${endpoint.method} ${endpoint.path}: path must start with /api/.`);
    if (/^\/api\/(auth|health)(\/|$)/.test(endpoint.path)) {
      errors.push(`Endpoint ${endpoint.method} ${endpoint.path}: /api/auth and /api/health are provided by the platform.`);
    }
    const key = `${endpoint.method} ${endpoint.path}`;
    if (seen.has(key)) errors.push(`Endpoint ${key} is listed more than once.`);
    seen.add(key);
    if (endpoint.overridesCrud && !isStandardCrud({ ...spec, apiEndpoints: [] }, endpoint)) {
      errors.push(`Endpoint ${key}: "overridesCrud" is set but it does not match a standard CRUD route of any entity.`);
    }
    for (const role of endpoint.roles || []) {
      if (!spec.auth.roles.includes(role)) errors.push(`Endpoint ${key}: role "${role}" is not in auth.roles.`);
    }
    if (!endpoint.response?.trim()) {
      errors.push(`Endpoint ${key}: "response" is required, describing the JSON returned inside { data }, e.g. "{ total: number, rows: [{ id, name }] }".`);
    }
    if (['POST', 'PUT', 'PATCH'].includes(endpoint.method) && !endpoint.request?.trim()) {
      errors.push(`Endpoint ${key}: "request" is required, describing the JSON body, e.g. "{ items: [{ productId, quantity }] }".`);
    }
  }

  for (const entity of spec.databaseSchema) {
    if (!entity.label) errors.push(`Entity "${entity.name}": "label" (display name in Indonesian, e.g. "Produk") is required.`);
    for (const field of entity.fields) {
      if (!field.label) errors.push(`${entity.name}.${field.name}: "label" (display name in Indonesian) is required.`);
      if (field.relation && entity.fields.some((f) => f.name === relationFieldName(field.name))) {
        errors.push(`${entity.name}.${field.name}: another field is already named "${relationFieldName(field.name)}", which the relation needs.`);
      }
    }
  }

  return errors;
}

export function entityByName(spec: SpecDefinition, name: string): SpecTable | undefined {
  return spec.databaseSchema.find((e) => e.name === name);
}

export { delegateName };
