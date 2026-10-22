import { spawn } from 'child_process';
import fs from 'fs';
import os from 'os';
import path from 'path';
import { afterEach, describe, expect, it } from 'vitest';
import { SandboxSecurityError, WorkspaceFileManager } from '../src/services/sandbox/fileManager';
import { isPidAlive, killProcessTree, Sandbox, scrubbedEnv } from '../src/services/sandbox/sandbox';

const dirs: string[] = [];
const tempDir = () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'ethermind-sbx-'));
  dirs.push(dir);
  return dir;
};

afterEach(() => {
  delete process.env.NVIDIA_API_KEY;
  delete process.env.FIREBASE_PRIVATE_KEY;
  for (const dir of dirs.splice(0)) fs.rmSync(dir, { recursive: true, force: true });
});

describe('sandbox environment', () => {
  it('passes a child process the basics and none of the platform secrets', () => {
    process.env.NVIDIA_API_KEY = 'nvapi-secret-value';
    process.env.FIREBASE_PRIVATE_KEY = 'private-key-material';

    const env = scrubbedEnv({ PORT: '4000' });

    expect(Object.keys(env).some((k) => k.toLowerCase() === 'path')).toBe(true);
    expect(env.PORT).toBe('4000');
    expect(env.CI).toBe('true');
    expect(JSON.stringify(env)).not.toContain('nvapi-secret-value');
    expect(JSON.stringify(env)).not.toContain('private-key-material');
    expect(env.JWT_SECRET).toBeUndefined();
    expect(env.DATABASE_URL).toBeUndefined();
  });

  it('runs code written by a model without exposing the platform\'s secrets to it', async () => {
    process.env.NVIDIA_API_KEY = 'nvapi-secret-value';
    const sandbox = new Sandbox('local');

    const result = await sandbox.run(`node -e "console.log(process.env.NVIDIA_API_KEY || 'tidak-terlihat')"`, { cwd: tempDir() });

    expect(result.success).toBe(true);
    expect(result.stdout.trim()).toBe('tidak-terlihat');
  });

  it('reports exit codes and both output streams', async () => {
    const sandbox = new Sandbox('local');

    const failing = await sandbox.run(`node -e "console.log('keluar'); console.error('galat'); process.exit(3)"`, { cwd: tempDir() });

    expect(failing.success).toBe(false);
    expect(failing.exitCode).toBe(3);
    expect(failing.stdout).toContain('keluar');
    expect(failing.stderr).toContain('galat');
  });

  it('stops a command that runs past its time limit', async () => {
    const sandbox = new Sandbox('local');
    const started = Date.now();

    const result = await sandbox.run(`node -e "setInterval(() => {}, 1000)"`, { cwd: tempDir(), timeoutMs: 1500 });

    expect(result.exitCode).toBe(124);
    expect(result.stderr).toContain('batas waktu');
    expect(Date.now() - started).toBeLessThan(8000);
  });

  it('kills a whole process tree, not just the parent', async () => {
    const child = spawn(process.execPath, ['-e', 'setInterval(() => {}, 1000)'], { stdio: 'ignore', detached: process.platform !== 'win32' });
    const pid = child.pid as number;
    expect(isPidAlive(pid)).toBe(true);

    killProcessTree(pid);
    await new Promise((resolve) => setTimeout(resolve, 600));

    expect(isPidAlive(pid)).toBe(false);
  });
});

describe('workspace file manager', () => {
  const manager = () => new WorkspaceFileManager('proj', 'job');

  it('keeps every path inside the workspace', async () => {
    const fm = manager();
    await fm.initWorkspace();

    await expect(fm.writeFile('../escape.txt', 'x')).rejects.toBeInstanceOf(SandboxSecurityError);
    expect(() => fm.resolveSafePath('a/../../escape.txt')).toThrow(SandboxSecurityError);
    expect(() => fm.resolveSafePath(path.resolve('/etc/passwd'))).toThrow(SandboxSecurityError);
    expect(() => fm.resolveSafePath(`../${path.basename(fm.workspaceDir)}-evil/x`)).toThrow(SandboxSecurityError);

    await fm.writeFile('src/ok.js', 'export {};');
    expect(await fm.readFile('src/ok.js')).toBe('export {};');
    await fm.cleanWorkspace();
  });

  it('lists source files but not installed packages, data, or runtime state', async () => {
    const fm = manager();
    await fm.initWorkspace();
    for (const file of ['src/a.js', 'node_modules/x/index.js', 'data/app.db', '.ethermind/runtime.json', 'coverage/x.json', 'backups/b.db']) await fm.writeFile(file, 'x');

    expect(await fm.listFiles()).toEqual(['src/a.js']);
    await fm.cleanWorkspace();
  });

  it('copies a previous version for a revision without its packages, data or secrets', async () => {
    const source = manager();
    await source.initWorkspace();
    for (const file of ['src/a.js', 'package.json', 'node_modules/x/i.js', 'data/app.db', '.ethermind/runtime.json']) await source.writeFile(file, 'x');

    const copy = new WorkspaceFileManager('proj', 'job-revision');
    await copy.cloneFrom(source.workspaceDir);

    expect(await copy.listFiles()).toEqual(['package.json', 'src/a.js']);
    expect(copy.fileExists('.ethermind/runtime.json')).toBe(false);
    await source.cleanWorkspace();
    await copy.cleanWorkspace();
  });
});
