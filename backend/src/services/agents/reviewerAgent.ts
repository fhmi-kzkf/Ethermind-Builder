import { z } from 'zod';
import { GateCheckResult, GateIssue, SpecDefinition } from '../../types';
import llmRouter from '../llm/router';
import { WorkspaceFileManager } from '../sandbox/fileManager';
import { listOwnedFiles } from './ownership';
import { describeEndpoint } from './agentIO';

const MAX_CHARS = 60_000;

const ReviewSchema = z.object({
  summary: z.string().default(''),
  issues: z
    .array(
      z.object({
        severity: z.enum(['critical', 'high', 'medium', 'low']),
        category: z.string().default('quality'),
        message: z.string().min(1),
        file: z.string().optional(),
        fixRecommendation: z.string().optional(),
      })
    )
    .default([]),
});

export class ReviewerAgent {
  /**
   * Reads the hand-written parts of the app against the spec and reports concrete defects.
   * The verdict is computed here, not taken from the model: any critical or high issue fails it.
   * Throws when the model is unavailable; the caller decides what that means for the build.
   */
  public static async execute(
    spec: SpecDefinition,
    fm: WorkspaceFileManager,
    projectId: string,
    jobId: string
  ): Promise<GateCheckResult> {
    const owned = await listOwnedFiles(spec, fm);
    let budget = MAX_CHARS;
    const sections: string[] = [];
    const included = new Set<string>();

    for (const file of owned) {
      const content = await fm.readFile(file);
      if (content.length > budget) continue;
      budget -= content.length;
      included.add(file);
      sections.push(`--- ${file}\n${content}`);
    }

    const systemPrompt = `You are a strict code reviewer for business web apps that will go to real clients. You report only real defects you can point to in the code you are given, each with the file and a specific fix. You do not report style preferences, and you do not invent problems.

Return JSON only:
{ "summary": "one sentence", "issues": [ { "severity": "critical|high|medium|low", "category": "security|correctness|reliability|accessibility|slop", "message": "what is wrong and why it matters", "file": "path from the list", "fixRecommendation": "what to change, and where" } ] }
If the code is sound, return an empty issues array.

How to judge:
- Report at most 6 findings, the most important first. Fewer is better than padding.
- "critical" and "high" are only for: wrong money, stock or totals; data loss or corruption; a crash or dead screen on the main path; a security hole an unauthorized person can reach on the server; an endpoint or response shape that does not match the contract; a page that calls an endpoint that does not exist. Everything else is "medium" or "low".
- The platform already enforces sign-in, roles, validation, hashing of passwords, rate limiting and security headers on the server. The browser pages are not a security boundary, so never report missing client-side authentication or authorization checks, and never comment on password hashing settings.
- Do not report: pagination of small lists, time-zone subtleties, naming, or ideas for extra features.
- A finding must name the file and show what is wrong in this code, not a general best practice.`;

    const userPrompt = `TASK: review
App: ${spec.title}. ${spec.summary}
Login: ${spec.auth.mode === 'none' ? 'disabled' : `enabled, roles ${spec.auth.roles.join(', ')}`}

Business rules and contracts the code must satisfy:
${spec.apiEndpoints.map((e) => describeEndpoint(e, '/api')).join('\n') || '(no custom endpoints)'}

Pages that were written by hand: ${spec.pages.filter((p) => p.kind !== 'crud').map((p) => `${p.name} (${p.route}): ${p.purpose}`).join('; ') || 'none'}

Hand-written files (the standard CRUD API, schema and screens are generated and already tested):
${sections.join('\n\n') || '(none)'}

Check: business rules actually enforced (including inside transactions), authorization on every route, input validation, response shapes matching the contracts above, frontend calling only existing endpoints and handling failures, and anything that looks generic, placeholder, or fake.`;

    const response = await llmRouter.completeStructured({
      role: 'reviewer',
      systemPrompt,
      userPrompt,
      projectId,
      jobId,
      schema: ReviewSchema,
    });

    const issues: GateIssue[] = response.data.issues.map((issue) => ({
      ...issue,
      file: issue.file && included.has(issue.file) ? issue.file : undefined,
    }));
    const blocking = issues.filter((i) => i.severity === 'critical' || i.severity === 'high');

    return {
      gate: 'ai_review',
      passed: blocking.length === 0,
      summary: response.data.summary || (blocking.length === 0 ? 'Tidak ada cacat serius yang ditemukan.' : `${blocking.length} temuan serius.`),
      issues,
    };
  }
}
