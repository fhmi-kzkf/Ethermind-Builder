import { FileOperation, SpecDefinition } from '../../types';
import llmRouter from '../llm/router';
import { mapLimit } from '../llm/semaphore';
import { WorkspaceFileManager } from '../sandbox/fileManager';
import { customEndpointGroups } from '../spec/specSchema';
import { describeEndpoint, describeEntities, readIfExists, writeAllowedFiles } from './agentIO';
import { fileFormatInstructions, parseFileBlocks } from './fileBlocks';
import { BACKEND_GUIDE, RESPONSE_CONTRACT } from './platformGuide';

export const customRoutePath = (segment: string) => `src/routes/custom/${segment}.js`;

export class BackendAgent {
  /**
   * Standard CRUD for every entity is generated. This agent writes the endpoints that carry business
   * logic (checkout, reports, status changes), one file per URL segment.
   * `only` limits the work to some segments; `instructions` carries a change request per segment.
   */
  public static async execute(
    spec: SpecDefinition,
    fm: WorkspaceFileManager,
    projectId: string,
    jobId: string,
    overrideModel?: string,
    options: { only?: string[]; instructions?: Record<string, string>; fresh?: boolean; onFile?: (path: string, label: string) => void } = {}
  ): Promise<FileOperation[]> {
    const written: FileOperation[] = [];
    const schema = await fm.readFile('prisma/schema.prisma');

    await mapLimit(Array.from(customEndpointGroups(spec).entries()), 2, async ([segment, endpoints]) => {
      if (options.only && !options.only.includes(segment)) return;

      const path = customRoutePath(segment);
      const existing = options.fresh ? null : await readIfExists(fm, path);
      const instruction = options.instructions?.[segment];

      const systemPrompt = `You are a senior backend engineer writing one Express router file for a business web app.

${BACKEND_GUIDE}

${RESPONSE_CONTRACT}

${fileFormatInstructions(path)}`;

      const userPrompt = `TASK: backend-route segment=${segment}
App: ${spec.title}. ${spec.summary}
Login: ${spec.auth.mode === 'none' ? 'disabled (do not use requireRole)' : `enabled, roles: ${spec.auth.roles.join(', ')}`}

Prisma schema:
${schema}

Data model summary:
${describeEntities(spec)}

Implement every endpoint below in ${path} (mounted at /api/${segment}):
${endpoints.map((e) => describeEndpoint(e, `/api/${segment}`)).join('\n')}

The response data must match the stated shape exactly: the frontend is written against it.
Business rules in the descriptions are requirements, not suggestions.
${existing ? `\nCurrent ${path}:\n${existing}\n` : ''}${instruction ? `\nChange requested: ${instruction}\n` : ''}`;

      const response = await llmRouter.completeStructured({
        role: 'backend',
        systemPrompt,
        userPrompt,
        projectId,
        jobId,
        overrideModel,
        parser: parseFileBlocks,
      });

      written.push(...(await writeAllowedFiles('BackendAgent', fm, response.data.files, (p) => p === path)));
      options.onFile?.(path, segment);
    });

    return written;
  }
}
