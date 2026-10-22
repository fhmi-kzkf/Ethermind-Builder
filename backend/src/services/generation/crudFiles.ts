import { FileOperation } from '../../types';
import { delegateName, resourcePath } from '../spec/naming';
import { customEndpointGroups, overriddenCrudOps, SpecDefinition, SpecTable } from '../spec/specSchema';
import { entityLabel, entityNoun, listConfig, uiColumns, uiFields, zodExpression } from './entityModel';
import { literal } from './literal';

export function slugForRoute(route: string): string {
  return route.replace(/^\/+|\/+$/g, '').replace(/[^A-Za-z0-9]+/g, '-').toLowerCase() || 'home';
}

export function accessFor(spec: SpecDefinition, entity: SpecTable): { read: string[]; write: string[] } {
  if (spec.auth.mode === 'none') return { read: ['*'], write: ['*'] };
  return { read: entity.access?.read?.length ? entity.access.read : ['*'], write: entity.access?.write?.length ? entity.access.write : ['*'] };
}

/** src/routes/<resource>.js: the standard REST resource for one entity. */
export function renderEntityRoute(spec: SpecDefinition, entity: SpecTable): FileOperation {
  const { searchFields, filters, sortable, include } = listConfig(spec, entity);
  const access = accessFor(spec, entity);
  const disabled = Array.from(overriddenCrudOps(spec, entity));

  const schemaLines = entity.fields.map((field) => `  ${field.name}: ${zodExpression(field)},`);
  const options: string[] = [
    `  model: ${literal(delegateName(entity.name))}`,
    `  schema`,
    `  searchFields: ${literal(searchFields)}`,
    `  filters: ${literal(filters)}`,
    `  sortable: ${literal(sortable)}`,
    `  orderBy: { createdAt: 'desc' }`,
  ];
  if (Object.keys(include).length > 0) options.push(`  include: ${literal(include, 2)}`);
  if (spec.auth.mode !== 'none') options.push(`  access: ${literal(access)}`);
  if (disabled.length > 0) options.push(`  disable: ${literal(disabled)}`);

  const content = `import { z } from 'zod';
import { createCrudRouter } from '../lib/crud.js';

const schema = z.object({
${schemaLines.join('\n')}
});

export default createCrudRouter({
${options.join(',\n')},
});
`;
  return { path: `src/routes/${resourcePath(entity.name)}.js`, content, description: `REST resource for ${entity.name}` };
}

/** src/routes/index.js: mounts platform routes, hand-written custom routes, then the generated resources. */
export function renderRoutesIndex(spec: SpecDefinition): FileOperation {
  const imports: string[] = ["import { Router } from 'express';"];
  const mounts: string[] = [];

  if (spec.auth.mode !== 'none') {
    imports.push("import authRoutes from './auth.js';");
    mounts.push("router.use('/auth', authRoutes);");
    if (spec.auth.mode === 'multi_role') {
      imports.push("import usersRoutes from './users.js';");
      mounts.push("router.use('/users', usersRoutes);");
    }
  }

  const groups = customEndpointGroups(spec);
  const customNames = new Map<string, string>();
  for (const segment of groups.keys()) {
    const name = `custom${Array.from(customNames.keys()).length + 1}`;
    customNames.set(segment, name);
    imports.push(`import ${name} from './custom/${segment}.js';`);
  }
  if (customNames.size > 0) mounts.push('', '// Hand-written endpoints come first so they can extend or replace a generated resource.');
  for (const [segment, name] of customNames) mounts.push(`router.use('/${segment}', ${name});`);

  const resourceMounts: string[] = [];
  for (const entity of spec.databaseSchema) {
    if (entity.internal) continue;
    const resource = resourcePath(entity.name);
    const name = `${delegateName(entity.name)}Routes`;
    imports.push(`import ${name} from './${resource}.js';`);
    resourceMounts.push(`router.use('/${resource}', ${name});`);
  }
  if (resourceMounts.length > 0) mounts.push('', ...resourceMounts);

  const content = `${imports.join('\n')}

const router = Router();

${mounts.join('\n').replace(/^\n/, '')}

export default router;
`;
  return { path: 'src/routes/index.js', content, description: 'API route table' };
}

/** public/js/pages/<slug>.js for a "crud" page: the whole list/create/edit/delete screen from the entity. */
export function renderCrudPage(spec: SpecDefinition, entity: SpecTable, page: SpecDefinition['pages'][number]): FileOperation {
  const access = accessFor(spec, entity);
  const config: Record<string, unknown> = {
    title: page.name,
    subtitle: page.purpose || undefined,
    endpoint: `/api/${resourcePath(entity.name)}`,
    singular: entityNoun(entity),
    columns: uiColumns(spec, entity),
    fields: uiFields(spec, entity),
  };
  if (spec.auth.mode !== 'none' && !access.write.includes('*')) config.writeRoles = access.write;

  const defined = Object.fromEntries(Object.entries(config).filter(([, v]) => v !== undefined));
  const content = `import { crudPage } from '../lib/crud-page.js';

export default crudPage(${literal(defined)});
`;
  return { path: `public/js/pages/${slugForRoute(page.route)}.js`, content, description: `${entityLabel(entity)} management page` };
}
