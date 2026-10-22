import { FileOperation, SpecDefinition, SpecPage } from '../../types';
import { slugForRoute } from '../generation/crudFiles';
import llmRouter from '../llm/router';
import { mapLimit } from '../llm/semaphore';
import { WorkspaceFileManager } from '../sandbox/fileManager';
import { resourcePath } from '../spec/naming';
import { describeEndpoint, describeEntities, readIfExists, writeAllowedFiles } from './agentIO';
import { fileFormatInstructions, parseFileBlocks } from './fileBlocks';
import { FRONTEND_GUIDE, RESPONSE_CONTRACT } from './platformGuide';

export const pagePath = (page: SpecPage) => `public/js/pages/${slugForRoute(page.route)}.js`;

/** Pages the agent has to write: everything that is not a generated standard CRUD screen. */
export function agentPages(spec: SpecDefinition): SpecPage[] {
  return spec.pages.filter((p) => p.kind !== 'crud');
}

export class FrontendAgent {
  public static async execute(
    spec: SpecDefinition,
    fm: WorkspaceFileManager,
    projectId: string,
    jobId: string,
    overrideModel?: string,
    options: { only?: string[]; instructions?: Record<string, string>; fresh?: boolean; onFile?: (path: string, label: string) => void } = {}
  ): Promise<FileOperation[]> {
    const written: FileOperation[] = [];
    const pages = agentPages(spec).filter((p) => !options.only || options.only.includes(p.route));

    const standardApis = spec.databaseSchema
      .filter((e) => !e.internal)
      .map((e) => `- /api/${resourcePath(e.name)}  list (GET ?page&limit&q) / get / create / update / delete for ${e.label}. List rows include related records as objects, e.g. a "productId" field also arrives as "product: { id, name }".`)
      .join('\n');
    const customApis = spec.apiEndpoints.map((e) => describeEndpoint(e, '/api')).join('\n') || '(none)';

    // Pages are independent of each other, so two are written at a time.
    await mapLimit(pages, 2, async (page) => {
      const path = pagePath(page);
      // A rewrite starts from a blank page: showing the broken version only invites the same structure again.
      const existing = options.fresh ? null : await readIfExists(fm, path);
      const instruction = options.instructions?.[page.route];
      const design = spec.designGuidelines;

      const systemPrompt = `You are a senior frontend engineer writing one page module for a business web app. You build intentional, accessible interfaces, not generic templates.

${FRONTEND_GUIDE}

${RESPONSE_CONTRACT}

${fileFormatInstructions(path)}`;

      const userPrompt = `TASK: frontend-page route=${page.route}
App: ${spec.title}. ${spec.summary}
Users: ${spec.targetUsers.join(', ') || 'staff of the business'}
Tone of the product: ${design.personality || 'clear and practical'}
Login: ${spec.auth.mode === 'none' ? 'disabled' : `enabled, roles: ${spec.auth.roles.join(', ')}; signed-in user is ctx.user`}

Page to write: "${page.name}" at route ${page.route} (${page.kind})
Purpose: ${page.purpose}
Components the planner had in mind: ${page.components.join(', ') || 'none specified'}
${page.roles?.length ? `Visible to roles: ${page.roles.join(', ')}` : ''}

Data model:
${describeEntities(spec)}

Standard APIs you can call:
${standardApis || '(none)'}

Custom endpoints (exact shapes):
${customApis}

Only call endpoints listed above. Use the exact response shapes. ${page.kind === 'dashboard' ? 'This is a dashboard: lead with the few numbers the user checks first, then the lists that need action, in order of importance. Do not fill space with decoration.' : 'Design the interaction around the real task of the person using it: the fewest steps for the most frequent action.'}
Write the page as the default export described in the guide, saved at ${path}.
${existing ? `\nCurrent ${path}:\n${existing}\n` : ''}${instruction ? `\nChange requested: ${instruction}\n` : ''}`;

      const response = await llmRouter.completeStructured({
        role: 'frontend',
        systemPrompt,
        userPrompt,
        projectId,
        jobId,
        overrideModel,
        parser: parseFileBlocks,
      });

      written.push(...(await writeAllowedFiles('FrontendAgent', fm, response.data.files, (p) => p === path)));
      options.onFile?.(path, page.name);
    });

    return written;
  }
}
