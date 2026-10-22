import prisma from '../../db/prisma';
import previewManager from '../deployment/previewManager';
import { WorkspaceFileManager } from '../sandbox/fileManager';

import { jobIdFromRepoPath } from './current';

export { jobIdFromRepoPath };

/** An error the client can be told about, with the HTTP status that fits it. */
export class VersionError extends Error {
  constructor(public readonly status: 404 | 409, message: string) {
    super(message);
    this.name = 'VersionError';
  }
}

export interface VersionItem {
  id: string;
  jobId: string | null;
  summary: string;
  kind: 'build' | 'revision';
  /** The client's own words for a revision. */
  request: string | null;
  specVersion: number | null;
  createdAt: string;
  active: boolean;
  /** False when the version's files are no longer on the server, so it cannot be restored. */
  available: boolean;
}

function filesExist(projectId: string, jobId: string | null): boolean {
  if (!jobId) return false;
  return new WorkspaceFileManager(projectId, jobId).fileExists('package.json');
}

export async function listVersions(projectId: string): Promise<VersionItem[]> {
  const project = await prisma.project.findUnique({ where: { id: projectId }, select: { repoPath: true } });
  const activeJob = jobIdFromRepoPath(project?.repoPath, projectId);
  const versions = await prisma.version.findMany({
    where: { projectId },
    orderBy: { createdAt: 'desc' },
    include: { job: { select: { type: true, prompt: true, spec: { select: { version: true } } } } },
  });

  return versions.map((v) => ({
    id: v.id,
    jobId: v.jobId,
    summary: v.summary,
    kind: v.job?.type === 'revision' ? 'revision' : 'build',
    request: v.job?.prompt ?? null,
    specVersion: v.job?.spec?.version ?? null,
    createdAt: v.createdAt.toISOString(),
    active: Boolean(v.jobId) && v.jobId === activeJob,
    available: filesExist(projectId, v.jobId),
  }));
}

export interface RestoreResult {
  alreadyActive: boolean;
  previewUrl?: string;
  /** The version is active but its preview could not be started; the client can start it from the preview tab. */
  previewError?: string;
}

/** Makes an earlier version the project's current one. Later versions stay in the history. */
export async function restoreVersion(projectId: string, versionId: string): Promise<RestoreResult> {
  const project = await prisma.project.findUnique({ where: { id: projectId } });
  if (!project) throw new VersionError(404, 'Proyek tidak ditemukan');
  if (project.status !== 'ready' && project.status !== 'live') {
    throw new VersionError(409, project.status === 'building' ? 'Aplikasi sedang dibangun. Tunggu sampai selesai.' : 'Versi hanya bisa dikembalikan saat aplikasi berstatus siap.');
  }

  const version = await prisma.version.findFirst({ where: { id: versionId, projectId } });
  if (!version || !version.jobId) throw new VersionError(404, 'Versi tidak ditemukan');
  if (!filesExist(projectId, version.jobId)) throw new VersionError(409, 'Berkas versi ini sudah tidak ada di server, jadi tidak bisa dikembalikan.');

  if (jobIdFromRepoPath(project.repoPath, projectId) === version.jobId) return { alreadyActive: true };

  const fm = new WorkspaceFileManager(projectId, version.jobId);
  await prisma.project.update({ where: { id: projectId }, data: { repoPath: fm.workspaceDir } });

  const conversation = await prisma.conversation.findUnique({ where: { projectId } });
  if (conversation) {
    await prisma.message.create({
      data: {
        conversationId: conversation.id,
        role: 'assistant',
        content: `Aplikasi dikembalikan ke versi "${version.summary}". Versi setelahnya tetap ada di riwayat.`,
        metadata: JSON.stringify({ type: 'version_restored', versionId: version.id }),
      },
    });
  }

  // The preview of the version that was running is stopped, then the restored one is started with its own data.
  await previewManager.stopAllForProject(projectId);
  try {
    return { alreadyActive: false, previewUrl: await previewManager.restart(projectId) };
  } catch (error) {
    return { alreadyActive: false, previewError: (error as Error).message };
  }
}
