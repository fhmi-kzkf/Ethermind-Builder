import prisma from '../../db/prisma';
import { WorkspaceFileManager } from '../sandbox/fileManager';

/** True when the agents finished writing code for this job (checkpoint 5) and the workspace is still on disk. */
export async function hasResumableCode(job: { id: string; projectId: string }): Promise<boolean> {
  const checkpoints = await prisma.agentSession.count({ where: { jobId: job.id, checkpoint: { gte: 5 } } });
  return checkpoints > 0 && new WorkspaceFileManager(job.projectId, job.id).fileExists('package.json');
}
