import { FileOperation, SpecDefinition } from '../../types';
import llmRouter from '../llm/router';
import { WorkspaceFileManager } from '../sandbox/fileManager';
import { describeEntities, readIfExists, writeAllowedFiles } from './agentIO';
import { fileFormatInstructions, parseFileBlocks } from './fileBlocks';

const SEED_PATH = 'prisma/seed.data.js';

export class DatabaseAgent {
  /**
   * The schema itself is generated from the spec (see generation/prismaSchema). What needs a model is
   * the demo data: realistic records that make the app look alive the moment it opens.
   */
  public static async execute(
    spec: SpecDefinition,
    fm: WorkspaceFileManager,
    projectId: string,
    jobId: string,
    overrideModel?: string,
    instruction?: string
  ): Promise<FileOperation[]> {
    const schema = await fm.readFile('prisma/schema.prisma');
    const existing = await readIfExists(fm, SEED_PATH);

    const systemPrompt = `You write seed data for a small business web app. The Prisma schema already exists; you only write ${SEED_PATH}.

The file must be an ES module with a default export: export default async function seedDemoData(prisma) { ... }
It receives the Prisma client. It must be safe to run twice: start with a check such as "if ((await prisma.product.count()) > 0) return;" for the main entity, or use upsert on unique fields.
Do not create User records (the administrator is created separately). Do not log anything.

${fileFormatInstructions(SEED_PATH)}`;

    const userPrompt = `TASK: seed-data
Business: ${spec.title}. ${spec.summary}
Who uses it: ${spec.targetUsers.join(', ') || 'staff of the business'}

Prisma schema:
${schema}

Entities:
${describeEntities(spec)}

Write realistic demo data for this specific business, in Bahasa Indonesia: believable names, plausible prices in rupiah (integers), valid relations, dates within the last 30 days (compute them from new Date()), and a mix of states (for example some low stock, some paid and some pending where the schema has such fields). Roughly 8 to 15 records for the main entities, fewer for supporting ones. Create parents before children and keep ids from create() results. Respect every unique field.
${existing ? `\nCurrent ${SEED_PATH}:\n${existing}\n` : ''}${instruction ? `\nChange requested: ${instruction}\n` : ''}`;

    const response = await llmRouter.completeStructured({
      role: 'database',
      systemPrompt,
      userPrompt,
      projectId,
      jobId,
      overrideModel,
      parser: parseFileBlocks,
    });

    return writeAllowedFiles('DatabaseAgent', fm, response.data.files, (p) => p === SEED_PATH);
  }
}
