import { relationFieldName, resourcePath } from '../spec/naming';
import { SpecDefinition } from '../spec/specSchema';
import { isOptional, prismaDefault, prismaType } from './entityModel';

interface ModelDraft {
  name: string;
  lines: string[];
  usedNames: Set<string>;
  indexes: string[];
}

function camel(kebab: string): string {
  return kebab.replace(/-([a-z])/g, (_m, c: string) => c.toUpperCase());
}

/** "StockMovement" -> "stockMovements", the name of the list on the other side of a relation. */
function inverseName(source: string): string {
  return camel(resourcePath(source));
}

const USER_FIELDS = [
  'id String @id @default(uuid())',
  'email String @unique',
  'name String',
  'role String',
  'active Boolean @default(true)',
  'passwordHash String',
  'createdAt DateTime @default(now())',
  'updatedAt DateTime @updatedAt',
];

/** Prisma schema generated from the approved spec. SQLite for now; nothing here is SQLite-specific. */
export function renderPrismaSchema(spec: SpecDefinition): string {
  const drafts = new Map<string, ModelDraft>();

  if (spec.auth.mode !== 'none') {
    drafts.set('User', {
      name: 'User',
      lines: USER_FIELDS.map((l) => `  ${l}`),
      usedNames: new Set(['id', 'email', 'name', 'role', 'active', 'passwordHash', 'createdAt', 'updatedAt']),
      indexes: [],
    });
  }

  for (const entity of spec.databaseSchema) {
    const lines = ['  id String @id @default(uuid())'];
    const used = new Set<string>(['id', 'createdAt', 'updatedAt']);
    const indexes: string[] = [];

    for (const field of entity.fields) {
      used.add(field.name);
      const optional = isOptional(field);
      const unique = field.unique ? ' @unique' : '';
      lines.push(`  ${field.name} ${prismaType(field)}${optional ? '?' : ''}${unique}${prismaDefault(field)}`);
      if (field.relation || (field.values && !field.unique)) indexes.push(field.name);
    }
    lines.push('  createdAt DateTime @default(now())', '  updatedAt DateTime @updatedAt');

    drafts.set(entity.name, { name: entity.name, lines, usedNames: used, indexes });
  }

  // Relations are added after every model exists so inverse sides can be attached to any target.
  for (const entity of spec.databaseSchema) {
    const source = drafts.get(entity.name) as ModelDraft;
    for (const field of entity.fields) {
      if (!field.relation) continue;

      const target = drafts.get(field.relation);
      if (!target) throw new Error(`${entity.name}.${field.name} points at unknown model ${field.relation}`);

      const optional = isOptional(field);
      const relationName = `${entity.name}_${field.name}`;
      const relationField = relationFieldName(field.name);
      const onDelete = optional ? 'SetNull' : 'Restrict';

      source.lines.push(
        `  ${relationField} ${field.relation}${optional ? '?' : ''} @relation("${relationName}", fields: [${field.name}], references: [id], onDelete: ${onDelete})`
      );
      source.usedNames.add(relationField);

      let inverse = inverseName(entity.name);
      if (target.usedNames.has(inverse)) inverse = `${inverse}By${relationField.charAt(0).toUpperCase()}${relationField.slice(1)}`;
      target.lines.push(`  ${inverse} ${entity.name}[] @relation("${relationName}")`);
      target.usedNames.add(inverse);
    }
  }

  const models = Array.from(drafts.values()).map((draft) => {
    const indexLines = draft.indexes.map((name) => `  @@index([${name}])`);
    return `model ${draft.name} {\n${[...draft.lines, ...(indexLines.length ? ['', ...indexLines] : [])].join('\n')}\n}`;
  });

  return `datasource db {
  provider = "sqlite"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

${models.join('\n\n')}
`;
}
