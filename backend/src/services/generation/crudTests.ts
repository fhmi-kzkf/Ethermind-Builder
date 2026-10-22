import { FileOperation } from '../../types';
import { delegateName, resourcePath } from '../spec/naming';
import { overriddenCrudOps, SpecDefinition, SpecTable, SpecTableField } from '../spec/specSchema';
import {
  effectiveDefault,
  entityLabel,
  inboundRelations,
  isEmailField,
  isOptional,
  isPhoneField,
  listConfig,
  sampleExpression,
} from './entityModel';
import { accessFor } from './crudFiles';

const js = (value: unknown): string => JSON.stringify(value);

function usesUserRelation(spec: SpecDefinition): boolean {
  return spec.databaseSchema.some((e) => e.fields.some((f) => f.relation === 'User'));
}

/** tests/factories.js: one async builder per entity that creates required parents automatically. */
export function renderFactories(spec: SpecDefinition): FileOperation {
  const blocks: string[] = [];

  for (const entity of spec.databaseSchema) {
    const fields: string[] = [];
    for (const field of entity.fields) {
      if (field.relation) {
        if (isOptional(field) || !field.required) continue;
        const parent =
          field.relation === 'User' ? '(await createUser()).id' : `(await factories.${delegateName(field.relation)}()).id`;
        fields.push(`    ${field.name}: overrides.${field.name} ?? ${parent},`);
      } else if (field.required && effectiveDefault(field) === undefined) {
        fields.push(`    ${field.name}: ${sampleExpression(field)},`);
      }
    }
    const usesCounter = fields.some((line) => line.includes('${i}'));
    blocks.push(`export async function ${delegateName(entity.name)}Data(overrides = {}) {${usesCounter ? '\n  const i = nextId();' : ''}
  return {
${fields.join('\n')}
    ...overrides,
  };
}`);
  }

  const factoryEntries = spec.databaseSchema.map(
    (e) => `  async ${delegateName(e.name)}(overrides = {}) {
    return prisma.${delegateName(e.name)}.create({ data: await ${delegateName(e.name)}Data(overrides) });
  },`
  );

  const content = `${usesUserRelation(spec) ? "import { createUser } from './helpers/auth.js';\n" : ''}import { prisma } from './helpers/db.js';

let counter = 0;
const nextId = () => {
  counter += 1;
  return counter;
};

/** Persists a record, creating any required parent records first. */
export const factories = {
${factoryEntries.join('\n')}
};

${blocks.join('\n\n')}
`;
  return { path: 'tests/factories.js', content, description: 'Test data builders' };
}

function mutation(field: SpecTableField): { code: string; patch: string } | null {
  if (field.relation || field.unique) return null;
  if (field.values && field.values.length >= 2) return { code: js(field.values[1]), patch: js(field.values[1]) };
  if (field.values) return null;
  if (field.type === 'String' && !isEmailField(field) && !isPhoneField(field)) return { code: '`${current} diubah`', patch: 'string' };
  if (field.type === 'Int') return { code: 'current + 1', patch: 'number' };
  if (field.type === 'Boolean') return { code: '!current', patch: 'boolean' };
  return null;
}

/** A valid literal to send for `field` in a PATCH body. */
function patchLiteral(field: SpecTableField): string {
  if (field.values) return js(field.values[field.values.length > 1 ? 1 : 0]);
  if (field.type === 'Int') return '1';
  if (field.type === 'Boolean') return 'true';
  return "'x'";
}

/** tests/<resource>.crud.test.js for one entity. */
export function renderCrudTests(spec: SpecDefinition, entity: SpecTable): FileOperation {
  const resource = resourcePath(entity.name);
  const base = `/api/${resource}`;
  const model = delegateName(entity.name);
  const disabled = overriddenCrudOps(spec, entity);
  const enabled = (op: string) => !disabled.has(op);
  const authOn = spec.auth.mode !== 'none';
  const access = accessFor(spec, entity);
  const { searchFields } = listConfig(spec, entity);
  const requiredFields = entity.fields.filter((f) => f.required && effectiveDefault(f) === undefined);
  const uniqueField = entity.fields.find((f) => f.unique && !f.relation);
  const searchField = entity.fields.find(
    (f) => searchFields.includes(f.name) && f.type === 'String' && !isEmailField(f) && !isPhoneField(f) && !f.unique
  );
  const changeField = entity.fields.find((f) => mutation(f));
  const restrictedBy = inboundRelations(spec, entity.name).filter(({ field }) => field.required && !isOptional(field));

  const writeRole = authOn ? (access.write.includes('*') ? spec.auth.roles[0] : access.write[0]) : null;
  const deniedRole = authOn && !access.write.includes('*') ? spec.auth.roles.find((r) => !access.write.includes(r)) : undefined;

  const imports = [
    "import { beforeEach, describe, expect, it } from 'vitest';",
    "import { client } from './helpers/app.js';",
    "import { prisma, resetDb } from './helpers/db.js';",
    `import { factories${enabled('create') ? `, ${model}Data` : ''} } from './factories.js';`,
  ];
  if (authOn) imports.splice(2, 0, "import { signIn } from './helpers/auth.js';");

  const setup = authOn
    ? `  let api;

  beforeEach(async () => {
    await resetDb();
    ({ agent: api } = await signIn(${js(writeRole)}));
  });`
    : `  let api;

  beforeEach(async () => {
    await resetDb();
    api = await client();
  });`;

  const tests: string[] = [];

  if (enabled('create')) {
    tests.push(`  it('creates a record and returns it with status 201', async () => {
    const payload = JSON.parse(JSON.stringify(await ${model}Data()));
    const res = await api.post(${js(base)}).send(payload);

    expect(res.status).toBe(201);
    expect(typeof res.body.data.id).toBe('string');
    expect(res.body.data).toMatchObject(payload);
    expect(await prismaCount()).toBe(1);
  });`);

    if (requiredFields.length > 0) {
      tests.push(`  it('rejects an empty body and names every missing required field', async () => {
    const res = await api.post(${js(base)}).send({});

    expect(res.status).toBe(400);
    expect(res.body.error.code).toBe('VALIDATION_FAILED');
    const fields = res.body.error.details.map((d) => d.field);
    for (const name of ${js(requiredFields.map((f) => f.name))}) {
      expect(fields).toContain(name);
    }
    expect(await prismaCount()).toBe(0);
  });`);
    }

    if (uniqueField) {
      tests.push(`  it('rejects a duplicate ${uniqueField.name} with 409', async () => {
    const existing = await factories.${model}();
    const payload = JSON.parse(JSON.stringify(await ${model}Data({ ${uniqueField.name}: existing.${uniqueField.name} })));
    const res = await api.post(${js(base)}).send(payload);

    expect(res.status).toBe(409);
    expect(res.body.error.code).toBe('CONFLICT');
  });`);
    }
  }

  if (enabled('list')) {
    tests.push(`  it('lists records with pagination metadata', async () => {
    await factories.${model}();
    await factories.${model}();
    await factories.${model}();

    const first = await api.get(${js(base)}).query({ limit: 2 });
    expect(first.status).toBe(200);
    expect(first.body.data).toHaveLength(2);
    expect(first.body.meta).toEqual({ page: 1, limit: 2, total: 3, totalPages: 2 });

    const second = await api.get(${js(base)}).query({ limit: 2, page: 2 });
    expect(second.body.data).toHaveLength(1);
  });

  it('returns an empty list instead of an error when there is no data', async () => {
    const res = await api.get(${js(base)});

    expect(res.status).toBe(200);
    expect(res.body.data).toEqual([]);
    expect(res.body.meta.total).toBe(0);
  });`);

    if (searchField) {
      tests.push(`  it('finds records by text with ?q', async () => {
    await factories.${model}({ ${searchField.name}: 'Zebra Unik' });
    await factories.${model}();

    const res = await api.get(${js(base)}).query({ q: 'zebra' });

    expect(res.status).toBe(200);
    expect(res.body.data).toHaveLength(1);
    expect(res.body.data[0].${searchField.name}).toBe('Zebra Unik');
  });`);
    }
  }

  if (enabled('get')) {
    tests.push(`  it('reads one record by id and returns 404 for an unknown id', async () => {
    const record = await factories.${model}();

    const found = await api.get(\`${base}/\${record.id}\`);
    expect(found.status).toBe(200);
    expect(found.body.data.id).toBe(record.id);

    const missing = await api.get(${js(`${base}/tidak-ada`)});
    expect(missing.status).toBe(404);
    expect(missing.body.error.code).toBe('NOT_FOUND');
  });`);
  }

  if (enabled('update')) {
    if (changeField) {
      const change = mutation(changeField) as { code: string; patch: string };
      // Only declared when the new value is derived from it; an unused variable would fail the app's own lint.
      const currentLine = change.code.includes('current') ? `    const current = record.${changeField.name};\n` : '';
      tests.push(`  it('updates only the fields that were sent', async () => {
    const record = await factories.${model}();
${currentLine}    const next = ${change.code};

    const res = await api.patch(\`${base}/\${record.id}\`).send({ ${changeField.name}: next });

    expect(res.status).toBe(200);
    expect(res.body.data.${changeField.name}).toBe(next);
    expect(res.body.data.id).toBe(record.id);
  });`);
    }
    tests.push(`  it('rejects an update with no changes', async () => {
    const record = await factories.${model}();
    const res = await api.patch(\`${base}/\${record.id}\`).send({});

    expect(res.status).toBe(400);
  });`);

    if (changeField) {
      tests.push(`  it('returns 404 when updating a record that does not exist', async () => {
    const res = await api.patch(${js(`${base}/tidak-ada`)}).send({ ${changeField.name}: ${patchLiteral(changeField)} });

    expect(res.status).toBe(404);
  });`);
    }
  }

  if (enabled('delete')) {
    tests.push(`  it('deletes a record and it is gone afterwards', async () => {
    const record = await factories.${model}();

    const res = await api.delete(\`${base}/\${record.id}\`);
    expect(res.status).toBe(204);

    expect(await prismaCount()).toBe(0);
  });`);

    for (const { entity: child, field } of restrictedBy.slice(0, 1)) {
      const childModel = delegateName(child.name);
      tests.push(`  it('refuses to delete a record that ${entityLabel(child)} still points to', async () => {
    const parent = await factories.${model}();
    await factories.${childModel}({ ${field.name}: parent.id });

    const res = await api.delete(\`${base}/\${parent.id}\`);

    expect(res.status).toBe(409);
    expect(await prismaCount()).toBe(1);
  });`);
    }
  }

  if (authOn) {
    tests.push(`  it('requires sign-in', async () => {
    const anonymous = await client();

    expect((await anonymous.get(${js(base)})).status).toBe(401);
    expect((await anonymous.post(${js(base)}).send({})).status).toBe(401);
  });`);

    if (deniedRole) {
      tests.push(`  it('does not let the ${deniedRole} role change data', async () => {
    const { agent: denied } = await signIn(${js(deniedRole)});
    const record = await factories.${model}();

    expect((await denied.post(${js(base)}).send({})).status).toBe(403);
    expect((await denied.delete(\`${base}/\${record.id}\`)).status).toBe(403);
    expect(await prismaCount()).toBe(1);
  });`);
    }
  }

  const content = `${imports.join('\n')}

const prismaCount = () => prisma.${model}.count();

describe(${js(`${entityLabel(entity)} (${base})`)}, () => {
${setup}

${tests.join('\n\n')}
});
`;

  return { path: `tests/${resource}.crud.test.js`, content, description: `Generated API tests for ${entity.name}` };
}
