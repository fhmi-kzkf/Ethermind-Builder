import { ChildProcess, spawn, spawnSync } from 'child_process';
import path from 'path';
import config from '../../config';
import { CommandExecutionResult } from '../../types';

export interface SandboxRunOptions {
  cwd: string;
  timeoutMs?: number;
  env?: Record<string, string>;
  /** Docker only: set false to run with no network at all. Defaults to true. */
  network?: boolean;
  /** A folder outside the workspace that holds the app's data (the live app's database). Mounted at /data in Docker. */
  dataDir?: string;
}

export interface RunningApp {
  runtime: 'process' | 'docker';
  port: number;
  pid?: number;
  containerName?: string;
  stop(): Promise<void>;
}

export class SandboxUnavailableError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'SandboxUnavailableError';
  }
}

/** Variables a local child process needs to find node and npm. Nothing else from the platform is passed on. */
const LOCAL_ENV_ALLOWLIST = [
  'PATH', 'Path', 'PATHEXT', 'SystemRoot', 'SYSTEMROOT', 'ComSpec', 'COMSPEC', 'TEMP', 'TMP', 'TMPDIR',
  'HOME', 'USERPROFILE', 'APPDATA', 'LOCALAPPDATA', 'ProgramData', 'ProgramFiles', 'ProgramFiles(x86)',
  'WINDIR', 'NUMBER_OF_PROCESSORS', 'PROCESSOR_ARCHITECTURE', 'LANG', 'LC_ALL', 'HTTP_PROXY', 'HTTPS_PROXY', 'NO_PROXY',
];

const MAX_OUTPUT = 200_000;

function trimOutput(text: string): string {
  if (text.length <= MAX_OUTPUT) return text;
  const head = text.slice(0, 40_000);
  const tail = text.slice(-(MAX_OUTPUT - 40_000));
  return `${head}\n... [${text.length - MAX_OUTPUT} characters omitted] ...\n${tail}`;
}

export function scrubbedEnv(extra: Record<string, string> = {}): Record<string, string> {
  const env: Record<string, string> = {};
  for (const key of LOCAL_ENV_ALLOWLIST) {
    const value = process.env[key];
    if (value !== undefined) env[key] = value;
  }
  return { ...env, CI: 'true', NO_COLOR: '1', npm_config_update_notifier: 'false', npm_config_fund: 'false', ...extra };
}

export function killProcessTree(pid: number): void {
  try {
    if (process.platform === 'win32') {
      spawnSync('taskkill', ['/pid', String(pid), '/T', '/F'], { stdio: 'ignore' });
    } else {
      process.kill(-pid, 'SIGKILL');
    }
  } catch {
    // The process already exited.
  }
}

export function isPidAlive(pid: number): boolean {
  try {
    process.kill(pid, 0);
    return true;
  } catch {
    return false;
  }
}

function collect(child: ChildProcess, timeoutMs: number, onTimeout: () => void) {
  return new Promise<{ code: number | null; stdout: string; stderr: string; timedOut: boolean }>((resolve) => {
    let stdout = '';
    let stderr = '';
    let timedOut = false;
    const timer = setTimeout(() => {
      timedOut = true;
      onTimeout();
    }, timeoutMs);

    child.stdout?.on('data', (chunk) => {
      if (stdout.length < MAX_OUTPUT * 2) stdout += chunk.toString();
    });
    child.stderr?.on('data', (chunk) => {
      if (stderr.length < MAX_OUTPUT * 2) stderr += chunk.toString();
    });
    child.on('error', (error) => {
      clearTimeout(timer);
      resolve({ code: 1, stdout, stderr: `${stderr}${error.message}`, timedOut });
    });
    child.on('close', (code) => {
      clearTimeout(timer);
      resolve({ code, stdout, stderr, timedOut });
    });
  });
}

export class Sandbox {
  private dockerChecked = false;

  constructor(private readonly mode: 'docker' | 'local' = config.sandbox.mode) {}

  public get runtime(): 'docker' | 'local' {
    return this.mode;
  }

  /** Fails fast with a clear message when Docker is the mode but is not usable. */
  public async ensureReady(): Promise<void> {
    if (this.mode === 'local' || this.dockerChecked) return;

    const info = spawnSync('docker', ['info', '--format', '{{.ServerVersion}}'], { encoding: 'utf8' });
    if (info.status !== 0) {
      throw new SandboxUnavailableError(
        'Docker tidak berjalan. Nyalakan Docker, atau (hanya untuk pengembangan) set SANDBOX_MODE=local.'
      );
    }

    const image = spawnSync('docker', ['image', 'inspect', config.sandbox.image], { encoding: 'utf8' });
    if (image.status !== 0) {
      const build = spawnSync('docker', ['build', '-t', config.sandbox.image, config.sandbox.dockerfileDir], { encoding: 'utf8' });
      if (build.status !== 0) {
        throw new SandboxUnavailableError(`Gagal membangun image sandbox ${config.sandbox.image}: ${build.stderr.slice(-500)}`);
      }
    }
    this.dockerChecked = true;
  }

  public async run(command: string, options: SandboxRunOptions): Promise<CommandExecutionResult> {
    await this.ensureReady();
    const timeoutMs = options.timeoutMs ?? config.sandbox.commandTimeoutMs;
    const started = Date.now();

    const result =
      this.mode === 'docker' ? await this.runInDocker(command, options, timeoutMs) : await this.runLocally(command, options, timeoutMs);

    const exitCode = result.timedOut ? 124 : result.code ?? 1;
    return {
      command,
      exitCode,
      stdout: trimOutput(result.stdout),
      stderr: trimOutput(result.timedOut ? `${result.stderr}\nPerintah dihentikan: melewati batas waktu ${Math.round(timeoutMs / 1000)} detik.` : result.stderr),
      durationMs: Date.now() - started,
      success: exitCode === 0,
    };
  }

  private async runLocally(command: string, options: SandboxRunOptions, timeoutMs: number) {
    const child = spawn(command, {
      cwd: options.cwd,
      env: scrubbedEnv(options.env),
      shell: true,
      detached: process.platform !== 'win32',
      windowsHide: true,
    });
    return collect(child, timeoutMs, () => child.pid && killProcessTree(child.pid));
  }

  private dockerArgs(options: SandboxRunOptions, extra: string[]): string[] {
    const args = [
      '--init',
      '-v', `${path.resolve(options.cwd)}:/app`,
      ...(options.dataDir ? ['-v', `${path.resolve(options.dataDir)}:/data`] : []),
      '-w', '/app',
      '--memory', config.sandbox.memory,
      '--cpus', config.sandbox.cpus,
      '--pids-limit', '512',
      '--cap-drop', 'ALL',
      '--security-opt', 'no-new-privileges',
      ...extra,
    ];
    if (typeof process.getuid === 'function') args.push('--user', `${process.getuid()}:${process.getgid?.() ?? process.getuid()}`);
    args.push('-e', 'CI=true', '-e', 'NO_COLOR=1', '-e', 'HOME=/tmp', '-e', 'npm_config_update_notifier=false', '-e', 'npm_config_fund=false');
    for (const [key, value] of Object.entries(options.env || {})) args.push('-e', `${key}=${value}`);
    return args;
  }

  private async runInDocker(command: string, options: SandboxRunOptions, timeoutMs: number) {
    const name = `ethermind-run-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`;
    const args = ['run', '--rm', '--name', name, ...this.dockerArgs(options, options.network === false ? ['--network', 'none'] : []), config.sandbox.image, 'sh', '-c', command];
    const child = spawn('docker', args, { windowsHide: true });
    return collect(child, timeoutMs, () => {
      spawnSync('docker', ['kill', name], { stdio: 'ignore' });
    });
  }

  /** Starts the generated app and keeps it running until stop() is called. */
  public async startApp(options: { workspaceDir: string; port: number; name: string; env: Record<string, string>; dataDir?: string }): Promise<RunningApp> {
    await this.ensureReady();

    if (this.mode === 'docker') {
      spawnSync('docker', ['rm', '-f', options.name], { stdio: 'ignore' });
      const args = [
        // Only the gateway reaches an app, on loopback. A restart policy would bring sleeping apps back after a reboot, so a crash is retried a few times and nothing more.
        'run', '-d', '--name', options.name, '--restart', 'on-failure:3',
        '-p', `127.0.0.1:${options.port}:3000`,
        ...this.dockerArgs({ cwd: options.workspaceDir, env: { ...options.env, PORT: '3000' }, dataDir: options.dataDir }, []),
        config.sandbox.image, 'node', 'server.js',
      ];
      const started = spawnSync('docker', args, { encoding: 'utf8' });
      if (started.status !== 0) throw new Error(`Gagal menjalankan container: ${started.stderr.slice(-400)}`);
      return {
        runtime: 'docker',
        port: options.port,
        containerName: options.name,
        stop: async () => {
          spawnSync('docker', ['rm', '-f', options.name], { stdio: 'ignore' });
        },
      };
    }

    const child = spawn(process.execPath, ['server.js'], {
      cwd: options.workspaceDir,
      env: scrubbedEnv({ ...options.env, PORT: String(options.port) }),
      detached: process.platform !== 'win32',
      stdio: 'ignore',
      windowsHide: true,
    });
    child.unref();
    const pid = child.pid as number;
    return { runtime: 'process', port: options.port, pid, stop: async () => killProcessTree(pid) };
  }

  /** Stops an app that a previous platform process started. */
  public static stopRecorded(record: { pid?: number | null; containerName?: string | null }): void {
    if (record.containerName) spawnSync('docker', ['rm', '-f', record.containerName], { stdio: 'ignore' });
    if (record.pid) killProcessTree(record.pid);
  }
}

export const sandbox = new Sandbox();
export default sandbox;
