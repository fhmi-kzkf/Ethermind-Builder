import archiver from 'archiver';
import fs from 'fs';
import fsPromises from 'fs/promises';
import path from 'path';
import config from '../../config';

export class ExportManager {
  /**
   * Archives a workspace into a downloadable ZIP file
   */
  public static async createExportZip(workspaceDir: string, projectId: string): Promise<string> {
    await fsPromises.mkdir(config.storage.exportsDir, { recursive: true });

    const zipFileName = `${projectId}-${Date.now()}.zip`;
    const zipFilePath = path.join(config.storage.exportsDir, zipFileName);

    return new Promise((resolve, reject) => {
      const output = fs.createWriteStream(zipFilePath);
      const archive = archiver('zip', {
        zlib: { level: 9 }, // Maximum compression
      });

      output.on('close', () => {
        resolve(zipFilePath);
      });

      archive.on('error', (err) => {
        reject(err);
      });

      archive.pipe(output);

      // Source code and docs only: no installed packages, databases, backups, or platform runtime state.
      archive.glob('**/*', {
        dot: true,
        cwd: workspaceDir,
        ignore: ['node_modules/**', '.git/**', '.env', 'dist/**', '.ethermind/**', 'data/*.db*', 'data/*.db-*', 'backups/**', 'backups-check/**', 'coverage/**'],
      });

      archive.finalize();
    });
  }
}
