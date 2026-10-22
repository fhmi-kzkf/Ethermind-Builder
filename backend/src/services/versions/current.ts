import path from 'path';

/**
 * A project's active version is the job whose workspace folder the project points to (`<projectId>_<jobId>`).
 * Nothing else records it, so this is the one place that reads it back.
 */
export function jobIdFromRepoPath(repoPath: string | null | undefined, projectId: string): string | null {
  if (!repoPath) return null;
  const name = path.basename(repoPath);
  return name.startsWith(`${projectId}_`) ? name.slice(projectId.length + 1) : null;
}
