import { z } from 'zod';
import { FileOperation } from '../../types';
import { WorkspaceFileManager } from '../sandbox/fileManager';

export const FilesSchema = z.object({
  files: z.array(z.object({ path: z.string().min(1), content: z.string().min(1) })).min(1),
});

export class AgentOutputError extends Error {
  constructor(agent: string, message: string) {
    super(`${agent}: ${message}`);
    this.name = 'AgentOutputError';
  }
}

function normalize(filePath: string): string {
  return filePath.replace(/\\/g, '/').replace(/^\.?\//, '');
}

/**
 * Writes the files a model returned, but only those inside `allowed`. Anything else is dropped,
 * so a model can never overwrite code the platform generates itself. Throws when nothing usable remains.
 */
export async function writeAllowedFiles(
  agent: string,
  fm: WorkspaceFileManager,
  files: Array<{ path: string; content: string }>,
  allowed: (relPath: string) => boolean
): Promise<FileOperation[]> {
  const written: FileOperation[] = [];
  const rejected: string[] = [];

  for (const file of files) {
    const relPath = normalize(file.path);
    if (!allowed(relPath)) {
      rejected.push(relPath);
      continue;
    }
    await fm.writeFile(relPath, file.content.endsWith('\n') ? file.content : `${file.content}\n`);
    written.push({ path: relPath, content: file.content, description: `Written by ${agent}` });
  }

  if (rejected.length > 0) console.warn(`[${agent}] Ignored files outside its scope: ${rejected.join(', ')}`);
  if (written.length === 0) {
    throw new AgentOutputError(agent, `model tidak mengembalikan file yang valid (ditolak: ${rejected.join(', ') || 'tidak ada'})`);
  }
  return written;
}

export async function readIfExists(fm: WorkspaceFileManager, relPath: string): Promise<string | null> {
  return fm.fileExists(relPath) ? fm.readFile(relPath) : null;
}

/** Compact description of the spec's data model for prompts. */
export function describeEntities(spec: import('../../types').SpecDefinition): string {
  return spec.databaseSchema
    .map((entity) => {
      const fields = entity.fields
        .map((f) => `${f.name}: ${f.type}${f.required ? '' : '?'}${f.unique ? ' unique' : ''}${f.relation ? ` -> ${f.relation}` : ''}${f.values ? ` (${f.values.join('|')})` : ''}${f.format === 'rupiah' ? ' rupiah' : ''}`)
        .join(', ');
      return `- ${entity.name}${entity.internal ? ' (internal: no standard API)' : ''}: ${fields}`;
    })
    .join('\n');
}

export function describeEndpoint(endpoint: import('../../types').SpecEndpoint, mountPrefix: string): string {
  const relative = endpoint.path.slice(mountPrefix.length) || '/';
  const lines = [
    `- ${endpoint.method} ${relative}  (full path ${endpoint.path})${endpoint.overridesCrud ? '  [replaces the generated standard CRUD route]' : ''}`,
    `  does: ${endpoint.description}`,
    `  roles: ${endpoint.roles?.join(', ') || 'any signed-in user'}`,
  ];
  if (endpoint.request) lines.push(`  request body: ${endpoint.request}`);
  if (endpoint.response) lines.push(`  response data: ${endpoint.response}`);
  return lines.join('\n');
}
