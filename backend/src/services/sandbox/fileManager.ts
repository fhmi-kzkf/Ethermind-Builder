import fs from 'fs/promises';
import fsSync from 'fs';
import path from 'path';
import config from '../../config';

/** Folders that hold installed packages, data or runtime state rather than source code. */
export const NON_SOURCE_DIRS = new Set(['node_modules', '.git', 'dist', 'data', 'backups', 'coverage', '.ethermind']);

export class SandboxSecurityError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'SandboxSecurityError';
  }
}

export class WorkspaceFileManager {
  public readonly workspaceDir: string;

  constructor(public readonly projectId: string, public readonly jobId: string) {
    this.workspaceDir = path.resolve(config.storage.workspacesDir, `${projectId}_${jobId}`);
  }

  /**
   * Resolve and assert that relative path stays strictly within sandbox
   */
  public resolveSafePath(relPath: string): string {
    const absolutePath = path.resolve(this.workspaceDir, relPath);
    const relative = path.relative(this.workspaceDir, absolutePath);

    if (relative.startsWith('..') || path.isAbsolute(relative)) {
      throw new SandboxSecurityError(`Path traversal attempt blocked: ${relPath}`);
    }

    return absolutePath;
  }

  /** Where the platform keeps per-workspace runtime state (secrets, logs). Never exported or shown to agents. */
  public get runtimeDir(): string {
    return path.join(this.workspaceDir, '.ethermind');
  }

  /**
   * Starts this workspace as a copy of another one's source, leaving out installed packages,
   * databases and runtime state.
   */
  public async cloneFrom(sourceDir: string): Promise<void> {
    await fs.mkdir(this.workspaceDir, { recursive: true });
    await fs.cp(sourceDir, this.workspaceDir, {
      recursive: true,
      filter: (source) => !NON_SOURCE_DIRS.has(path.basename(source)),
    });
  }

  /**
   * Initializes workspace directory
   */
  public async initWorkspace(): Promise<void> {
    await fs.mkdir(this.workspaceDir, { recursive: true });
  }

  /**
   * Write file to sandbox
   */
  public async writeFile(relPath: string, content: string): Promise<string> {
    const safePath = this.resolveSafePath(relPath);
    await fs.mkdir(path.dirname(safePath), { recursive: true });
    await fs.writeFile(safePath, content, 'utf-8');
    return safePath;
  }

  /**
   * Read file from sandbox
   */
  public async readFile(relPath: string): Promise<string> {
    const safePath = this.resolveSafePath(relPath);
    return await fs.readFile(safePath, 'utf-8');
  }

  /**
   * Check if file exists
   */
  public fileExists(relPath: string): boolean {
    const safePath = this.resolveSafePath(relPath);
    return fsSync.existsSync(safePath);
  }

  /**
   * Recursively list all files in workspace, ignoring build artifacts
   */
  public async listFiles(dir = ''): Promise<string[]> {
    const targetDir = this.resolveSafePath(dir);
    if (!fsSync.existsSync(targetDir)) return [];

    const results: string[] = [];
    const entries = await fs.readdir(targetDir, { withFileTypes: true });

    for (const entry of entries) {
      if (NON_SOURCE_DIRS.has(entry.name)) continue;

      const relEntryPath = dir ? path.join(dir, entry.name) : entry.name;
      if (entry.isDirectory()) {
        const subFiles = await this.listFiles(relEntryPath);
        results.push(...subFiles);
      } else {
        results.push(relEntryPath.replace(/\\/g, '/'));
      }
    }

    return results;
  }

  /**
   * Delete file from sandbox
   */
  public async deleteFile(relPath: string): Promise<void> {
    const safePath = this.resolveSafePath(relPath);
    if (fsSync.existsSync(safePath)) {
      await fs.unlink(safePath);
    }
  }

  /**
   * Clean up entire workspace
   */
  public async cleanWorkspace(): Promise<void> {
    if (fsSync.existsSync(this.workspaceDir)) {
      await fs.rm(this.workspaceDir, { recursive: true, force: true });
    }
  }
}
