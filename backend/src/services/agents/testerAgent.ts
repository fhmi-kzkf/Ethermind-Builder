import { FileOperation, SpecDefinition } from '../../types';
import llmRouter from '../llm/router';
import { mapLimit } from '../llm/semaphore';
import { WorkspaceFileManager } from '../sandbox/fileManager';
import { customEndpointGroups } from '../spec/specSchema';
import { describeEndpoint, readIfExists, writeAllowedFiles } from './agentIO';
import { fileFormatInstructions, parseFileBlocks } from './fileBlocks';
import { customRoutePath } from './backendAgent';
import { TEST_GUIDE } from './platformGuide';

export const customTestPath = (segment: string) => `tests/custom/${segment}.test.js`;

export class TesterAgent {
  /**
   * Tests for the generated CRUD resources are generated too. This agent tests what is hand-written:
   * the custom endpoints and their business rules.
   */
  public static async execute(
    spec: SpecDefinition,
    fm: WorkspaceFileManager,
    projectId: string,
    jobId: string,
    overrideModel?: string,
    options: { only?: string[]; onFile?: (path: string, label: string) => void } = {}
  ): Promise<FileOperation[]> {
    const written: FileOperation[] = [];

    await mapLimit(Array.from(customEndpointGroups(spec).entries()), 2, async ([segment, endpoints]) => {
      if (options.only && !options.only.includes(segment)) return;

      const routeFile = await readIfExists(fm, customRoutePath(segment));
      if (!routeFile) return;
      const path = customTestPath(segment);

      const systemPrompt = `You are a test engineer writing a vitest file that verifies business logic through HTTP.

${TEST_GUIDE}

${fileFormatInstructions(path)}`;

      const userPrompt = `TASK: custom-tests segment=${segment}
App: ${spec.title}
Login: ${spec.auth.mode === 'none' ? 'disabled (do not import signIn)' : `enabled, roles: ${spec.auth.roles.join(', ')}`}

Endpoints under /api/${segment} (the contract, not the implementation):
${endpoints.map((e) => describeEndpoint(e, `/api/${segment}`)).join('\n')}

Implementation to test (${customRoutePath(segment)}):
${routeFile}

Write ${path}. Test the contract; if the implementation contradicts the contract, write the test the contract demands (a failing test is the correct outcome and gets fixed).`;

      const response = await llmRouter.completeStructured({
        role: 'tester',
        systemPrompt,
        userPrompt,
        projectId,
        jobId,
        overrideModel,
        parser: parseFileBlocks,
      });

      written.push(...(await writeAllowedFiles('TesterAgent', fm, response.data.files, (p) => p === path)));
      options.onFile?.(path, segment);
    });

    return written;
  }

  /** Adds tests for files the coverage report shows as under-tested. */
  public static async improveCoverage(
    spec: SpecDefinition,
    fm: WorkspaceFileManager,
    projectId: string,
    jobId: string,
    lowCoverage: Array<{ file: string; percent: number }>,
    overrideModel?: string
  ): Promise<FileOperation[]> {
    const sources: string[] = [];
    for (const item of lowCoverage.slice(0, 4)) {
      const content = await readIfExists(fm, item.file);
      if (content) sources.push(`--- ${item.file} (${item.percent}% of lines covered)\n${content}`);
    }
    if (sources.length === 0) return [];

    const path = 'tests/custom/coverage-gaps.test.js';
    const systemPrompt = `You are a test engineer closing coverage gaps with meaningful tests.

${TEST_GUIDE}

${fileFormatInstructions(path)}`;

    const userPrompt = `TASK: coverage-gaps
App: ${spec.title}
Login: ${spec.auth.mode === 'none' ? 'disabled' : `enabled, roles: ${spec.auth.roles.join(', ')}`}

These source files have too little test coverage. Write tests that exercise their uncovered branches (error paths, edge cases, permission checks) through HTTP.

${sources.join('\n\n')}`;

    const response = await llmRouter.completeStructured({ role: 'tester', systemPrompt, userPrompt, projectId, jobId, overrideModel, parser: parseFileBlocks });
    return writeAllowedFiles('TesterAgent', fm, response.data.files, (p) => p === path);
  }
}
