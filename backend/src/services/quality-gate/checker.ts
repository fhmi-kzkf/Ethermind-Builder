import fs from 'fs/promises';
import path from 'path';
import config from '../../config';
import { CommandExecutionResult, GateCheckResult, GateIssue, QualityGateType, SpecDefinition } from '../../types';
import { ownedPaths } from '../agents/ownership';
import { WorkspaceFileManager } from '../sandbox/fileManager';
import { Sandbox, sandbox as defaultSandbox } from '../sandbox/sandbox';

const GATE_DB_URL = 'file:../data/gate.db';
const REQUIRED_FILES = ['package.json', 'server.js', 'prisma/schema.prisma', 'src/app.js', 'src/routes/index.js', 'public/index.html', 'public/js/main.js'];
const SOURCE_DIR_PATTERN = /(?:^|[\s("'`/\\])((?:src|public|prisma|tests|scripts)[/\\][\w./\\-]+\.(?:js|prisma))/;

export interface LowCoverageFile {
  file: string;
  percent: number;
}

/**
 * What a tool printed, reduced to what explains the failure. Stack frames are noise (and bury the message that
 * says what is wrong), so they are dropped; when it is still too long the start and the end are kept.
 */
export const tail = (text: string, max = 1800): string => {
  const lines = text.split('\n').filter((line) => !/^\s+at\s/.test(line) && line.trim() !== '');
  const cleaned = lines.join('\n').trim();
  if (cleaned.length <= max) return cleaned;
  const head = Math.floor(max * 0.4);
  return `${cleaned.slice(0, head)}\n...\n${cleaned.slice(-(max - head))}`;
};

export class QualityGateChecker {
  constructor(
    private fm: WorkspaceFileManager,
    private spec: SpecDefinition,
    private jobId: string,
    private projectId: string,
    private sb: Sandbox = defaultSandbox
  ) {}

  /** Environment for commands that touch the throwaway gate database. */
  private gateEnv(extra: Record<string, string> = {}): Record<string, string> {
    return {
      NODE_ENV: 'test',
      DATABASE_URL: GATE_DB_URL,
      JWT_SECRET: 'gate-check-secret-gate-check-secret-0001',
      SEED_ADMIN_EMAIL: 'gate@example.com',
      SEED_ADMIN_PASSWORD: 'gate-check-password-1',
      BACKUP_INTERVAL_HOURS: '0',
      ...extra,
    };
  }

  private run(command: string, options: { env?: Record<string, string>; network?: boolean; timeoutMs?: number } = {}): Promise<CommandExecutionResult> {
    return this.sb.run(command, { cwd: this.fm.workspaceDir, env: options.env, network: options.network, timeoutMs: options.timeoutMs });
  }

  /** Maps an absolute or container path from tool output back to a path inside the workspace. */
  private toRelative(absolute: string): string | undefined {
    const normalized = absolute.replace(/\\/g, '/');
    const root = this.fm.workspaceDir.replace(/\\/g, '/');
    if (normalized.startsWith(`${root}/`)) return normalized.slice(root.length + 1);
    if (normalized.startsWith('/app/')) return normalized.slice(5);
    return SOURCE_DIR_PATTERN.exec(normalized)?.[1];
  }

  /** The file a tool complains about. Files agents write are preferred over the platform files that import them. */
  private fileFromOutput(output: string): string | undefined {
    const found = Array.from(output.matchAll(new RegExp(SOURCE_DIR_PATTERN.source, 'g'))).map((m) => m[1].replace(/\\/g, '/'));
    const written = found.find((f) => /^(src\/routes\/custom\/|public\/js\/pages\/|prisma\/seed\.data\.js|tests\/custom\/)/.test(f));
    return written ?? found[0];
  }

  private result(gate: QualityGateType, issues: GateIssue[], passedSummary: string, failedSummary: string, metrics?: Record<string, unknown>): GateCheckResult {
    const passed = issues.every((i) => i.severity === 'low' || i.severity === 'medium');
    return { gate, passed, summary: passed ? passedSummary : failedSummary, issues, metrics };
  }

  /**
   * Gates 1-5. Each one runs the real tool and reports what it found. When the build itself is broken the
   * test gate is reported as failed without running, so a missing file is never hidden behind noisy test output.
   */
  public async runStatic(
    options: { reuse?: GateCheckResult[] } = {}
  ): Promise<{ results: GateCheckResult[]; lowCoverage: LowCoverageFile[]; reused: string[] }> {
    await fs.mkdir(this.fm.runtimeDir, { recursive: true });
    await fs.mkdir(path.join(this.fm.workspaceDir, 'data'), { recursive: true });

    // A light round: only page files changed, so the build, the backend tests and the checklist cannot have
    // changed outcome. Their previous passing results are reused; lint and the static security scan still run.
    const previous = (gate: QualityGateType) => options.reuse?.find((r) => r.gate === gate && r.passed);
    const reusedBuild = previous('build_check');
    const reusedTests = previous('unit_test');
    const reusedChecklist = previous('launch_checklist');
    const light = Boolean(reusedBuild && reusedTests && reusedChecklist);

    const build = light ? (reusedBuild as GateCheckResult) : await this.checkBuild();
    const lint = await this.checkLint();

    let tests: GateCheckResult;
    let lowCoverage: LowCoverageFile[] = [];
    if (light) {
      tests = reusedTests as GateCheckResult;
    } else if (build.passed) {
      const outcome = await this.checkTests();
      tests = outcome.result;
      lowCoverage = outcome.lowCoverage;
    } else {
      tests = this.skipped('unit_test', 'Tes dilewati karena build belum lolos.');
    }

    const security = await this.checkSecurity(build.metrics?.installed === true, light);
    const checklist = light ? (reusedChecklist as GateCheckResult) : await this.checkLaunchChecklist(build.passed);

    return {
      results: [build, lint, tests, security, checklist],
      lowCoverage,
      reused: light ? ['build_check', 'unit_test', 'launch_checklist'] : [],
    };
  }

  /**
   * The checks that decide whether the app can run at all: dependencies, schema, seed, app load, lint.
   * Tests, audit and the checklist are left to runHardening so the client is not kept waiting for them.
   */
  public async runQuick(options: { reuse?: GateCheckResult[] } = {}): Promise<{ results: GateCheckResult[]; lowCoverage: LowCoverageFile[]; reused: string[] }> {
    await fs.mkdir(this.fm.runtimeDir, { recursive: true });
    await fs.mkdir(path.join(this.fm.workspaceDir, 'data'), { recursive: true });

    const reusedBuild = options.reuse?.find((r) => r.gate === 'build_check' && r.passed);
    const build = reusedBuild ?? (await this.checkBuild());
    const lint = await this.checkLint();
    return { results: [build, lint], lowCoverage: [], reused: reusedBuild ? ['build_check'] : [] };
  }

  /** The slow, thorough checks: backend tests with coverage, dependency audit, launch checklist. They report; they do not block delivery. */
  public async runHardening(): Promise<{ results: GateCheckResult[]; lowCoverage: LowCoverageFile[] }> {
    const outcome = await this.checkTests();
    const security = await this.checkSecurity(true);
    const checklist = await this.checkLaunchChecklist(true);
    return { results: [outcome.result, security, checklist], lowCoverage: outcome.lowCoverage };
  }

  private skipped(gate: QualityGateType, summary: string): GateCheckResult {
    return { gate, passed: false, summary, issues: [{ severity: 'high', category: 'skipped', message: summary }] };
  }

  /* ---------- gate 1: build ---------- */

  public async checkBuild(): Promise<GateCheckResult> {
    const issues: GateIssue[] = [];

    for (const file of [...REQUIRED_FILES, ...ownedPaths(this.spec).filter((p) => !p.startsWith('tests/'))]) {
      if (!this.fm.fileExists(file)) {
        issues.push({ severity: 'critical', category: 'missing_file', message: `File wajib belum ada: ${file}`, file });
      }
    }

    const install = await this.run('npm install --no-audit --no-fund', { network: true, timeoutMs: config.sandbox.installTimeoutMs });
    if (!install.success) {
      issues.push({ severity: 'critical', category: 'install', message: `npm install gagal:\n${tail(install.stderr || install.stdout)}`, file: 'package.json' });
      return this.result('build_check', issues, 'Build lolos.', 'Build gagal: dependensi tidak bisa dipasang.', { installed: false });
    }

    // A previous round leaves WAL files behind; resetting the schema on top of them corrupts the database.
    for (const suffix of ['', '-wal', '-shm', '-journal']) await fs.rm(path.join(this.fm.workspaceDir, 'data', `gate.db${suffix}`), { force: true });

    const steps: Array<{ command: string; label: string; file: string; env?: Record<string, string> }> = [
      { command: 'npx prisma format', label: 'prisma format', file: 'prisma/schema.prisma', env: this.gateEnv() },
      { command: 'npx prisma validate', label: 'prisma validate', file: 'prisma/schema.prisma', env: this.gateEnv() },
      { command: 'npx prisma db push --force-reset --skip-generate --accept-data-loss', label: 'prisma db push', file: 'prisma/schema.prisma', env: this.gateEnv() },
      { command: 'npm run db:seed', label: 'seed data', file: 'prisma/seed.data.js', env: this.gateEnv() },
      {
        command: `node -e "import('./src/app.js').then((m) => { m.createApp(); process.exit(0); }).catch((e) => { console.error(e.stack || e); process.exit(1); })"`,
        label: 'memuat aplikasi',
        file: 'src/routes/index.js',
        env: this.gateEnv(),
      },
    ];

    for (const step of steps) {
      const outcome = await this.run(step.command, { env: step.env, network: false });
      if (outcome.success) continue;
      const output = `${outcome.stderr}\n${outcome.stdout}`;
      issues.push({
        severity: 'critical',
        category: 'build',
        message: `${step.label} gagal:\n${tail(output)}`,
        file: this.fileFromOutput(output) ?? step.file,
      });
      break;
    }

    return this.result('build_check', issues, 'Build lolos: dependensi, skema, seed, dan aplikasi termuat.', 'Build gagal.', { installed: true });
  }

  /* ---------- gate 2: lint ---------- */

  public async checkLint(): Promise<GateCheckResult> {
    if (!this.fm.fileExists('node_modules/.bin/eslint') && !this.fm.fileExists('node_modules/eslint/package.json')) {
      return this.skipped('lint_typecheck', 'Lint dilewati karena dependensi belum terpasang.');
    }

    const outcome = await this.run('npx eslint . --format json', { network: false });
    const issues: GateIssue[] = [];

    try {
      const report = JSON.parse(outcome.stdout) as Array<{ filePath: string; messages: Array<{ severity: number; message: string; ruleId: string | null; line: number }> }>;
      let total = 0;
      for (const file of report) {
        for (const message of file.messages) {
          if (message.severity < 2) continue;
          total += 1;
          if (issues.length >= 25) continue;
          issues.push({
            severity: 'high',
            category: 'lint',
            message: `${message.ruleId ? `${message.ruleId}: ` : ''}${message.message}`,
            file: this.toRelative(file.filePath),
            line: message.line,
          });
        }
      }
      if (total > issues.length) issues.push({ severity: 'high', category: 'lint', message: `...dan ${total - issues.length} pelanggaran lint lain.` });
    } catch {
      if (!outcome.success) {
        issues.push({ severity: 'high', category: 'lint', message: `ESLint tidak berjalan:\n${tail(outcome.stderr || outcome.stdout)}`, file: this.fileFromOutput(outcome.stderr) });
      }
    }

    return this.result('lint_typecheck', issues, 'Lint bersih: tanpa error.', `Lint menemukan ${issues.length} masalah.`);
  }

  /* ---------- gate 3: tests ---------- */

  public async checkTests(): Promise<{ result: GateCheckResult; lowCoverage: LowCoverageFile[] }> {
    const issues: GateIssue[] = [];
    const reportRel = '.ethermind/vitest-report.json';
    await fs.rm(path.join(this.fm.workspaceDir, 'coverage'), { recursive: true, force: true });

    const outcome = await this.run(
      `npx vitest run --coverage --coverage.reporter=json-summary --reporter=json --outputFile=${reportRel}`,
      { network: false, timeoutMs: config.sandbox.commandTimeoutMs * 2 }
    );

    let total = 0;
    let failed = 0;
    try {
      const report = JSON.parse(await this.fm.readFile(reportRel)) as {
        numTotalTests: number;
        numFailedTests: number;
        testResults: Array<{ name: string; message?: string; assertionResults: Array<{ fullName: string; status: string; failureMessages: string[] }> }>;
      };
      total = report.numTotalTests;
      failed = report.numFailedTests;
      for (const suite of report.testResults) {
        const file = this.toRelative(suite.name);
        if (suite.assertionResults.length === 0 && suite.message) {
          issues.push({ severity: 'high', category: 'test', message: `Berkas tes tidak bisa dijalankan:\n${tail(suite.message, 900)}`, file });
        }
        for (const test of suite.assertionResults) {
          if (test.status !== 'failed' || issues.length >= 20) continue;
          issues.push({ severity: 'high', category: 'test', message: `Tes gagal: ${test.fullName}\n${tail(test.failureMessages.join('\n'), 700)}`, file });
        }
      }
    } catch {
      issues.push({ severity: 'high', category: 'test', message: `Vitest tidak menghasilkan laporan:\n${tail(outcome.stderr || outcome.stdout)}`, file: this.fileFromOutput(outcome.stderr || outcome.stdout) });
    }

    if (total > 0 && total < config.gates.minTests) {
      issues.push({ severity: 'high', category: 'test', message: `Hanya ${total} tes; minimal ${config.gates.minTests}. Tambahkan tes untuk logika bisnis dan kasus gagal.` });
    }

    issues.push(...(await this.findWeakTests()));

    let coverage: number | null = null;
    const lowCoverage: LowCoverageFile[] = [];
    try {
      const summary = JSON.parse(await this.fm.readFile('coverage/coverage-summary.json')) as Record<string, { lines: { pct: number } }>;
      coverage = summary.total.lines.pct;
      for (const [file, value] of Object.entries(summary)) {
        const relative = file === 'total' ? undefined : this.toRelative(file);
        if (relative && value.lines.pct < 60) lowCoverage.push({ file: relative, percent: value.lines.pct });
      }
      lowCoverage.sort((a, b) => a.percent - b.percent);
      if (failed === 0 && coverage < config.gates.minCoverage) {
        issues.push({
          severity: 'high',
          category: 'coverage',
          message: `Cakupan tes ${coverage}% di bawah minimum ${config.gates.minCoverage}%. File paling kurang teruji: ${lowCoverage.slice(0, 4).map((l) => `${l.file} (${l.percent}%)`).join(', ') || 'lihat laporan'}.`,
        });
      }
    } catch {
      if (failed === 0 && total > 0) issues.push({ severity: 'high', category: 'coverage', message: 'Laporan cakupan tes tidak tersedia.' });
    }

    const result = this.result(
      'unit_test',
      issues,
      `${total} tes lulus, cakupan ${coverage ?? '?'}%.`,
      failed > 0 ? `${failed} dari ${total} tes gagal.` : 'Tes belum memenuhi standar.',
      { total, failed, coverage }
    );
    return { result, lowCoverage };
  }

  /** Tests that cannot fail: no assertions at all, or assertions about constants. */
  private async findWeakTests(): Promise<GateIssue[]> {
    const issues: GateIssue[] = [];
    const files = (await this.fm.listFiles('tests')).filter((f) => f.endsWith('.test.js'));

    for (const file of files) {
      const text = await this.fm.readFile(file);
      const tests = (text.match(/^\s*(?:it|test)\(/gm) || []).length;
      const assertions = (text.match(/\bexpect\(/g) || []).length;
      if (assertions < tests) {
        issues.push({ severity: 'high', category: 'weak_test', message: `${file} punya ${tests} tes tetapi hanya ${assertions} assertion: ada tes tanpa assertion.`, file });
      }
      if (/expect\(\s*(?:true|false|1|0|'[^']*')\s*\)\.(?:toBe|toEqual)\(/.test(text)) {
        issues.push({ severity: 'high', category: 'weak_test', message: `${file} berisi assertion terhadap konstanta yang tidak bisa gagal.`, file });
      }
    }
    return issues;
  }

  /* ---------- gate 4: security ---------- */

  public async checkSecurity(installed: boolean, skipAudit = false): Promise<GateCheckResult> {
    const issues: GateIssue[] = [];
    const files = (await this.fm.listFiles()).filter((f) => /\.(js|json|html|prisma)$/.test(f) && !f.endsWith('package-lock.json'));

    const secretPatterns: Array<[string, RegExp]> = [
      ['kunci API (sk-...)', /\bsk-[A-Za-z0-9]{20,}/],
      ['kunci Google API', /AIza[0-9A-Za-z_-]{35}/],
      ['token GitHub', /ghp_[A-Za-z0-9]{36}/],
      ['private key', /-----BEGIN (?:RSA |EC )?PRIVATE KEY-----/],
      ['rahasia JWT tertanam di kode', /jwt\.sign\([^)]*,\s*['"`][^'"`]{3,}['"`]/],
      ['kata sandi tertanam di kode', /(?:password|passwd|secret)\s*[:=]\s*['"`][^'"`$\s]{6,}['"`]/i],
    ];
    const codePatterns: Array<[string, RegExp, string]> = [
      ['SQL dirangkai dengan string (SQL injection)', /\$(?:query|execute)Raw(?:Unsafe)?\(\s*[`'"][^)]*(?:\$\{|['"`]\s*\+)/, 'Gunakan Prisma Client atau tagged template $queryRaw`...${nilai}`.'],
      ['eval atau Function dinamis', /\b(?:eval|new Function)\s*\(/, 'Hapus penggunaan eval.'],
      ['CORS terbuka untuk semua origin', /origin\s*:\s*['"]\*['"]/, 'Batasi ke origin yang dibutuhkan.'],
      ['HTML dari string (XSS)', /\.(?:innerHTML|outerHTML)\s*=|insertAdjacentHTML|dangerouslySetInnerHTML/, 'Bangun elemen dengan h() dari lib/dom.js.'],
    ];
    const rawSqlAllowed = new Set(['src/db.js', 'src/lib/backup.js', 'scripts/restore.js', 'tests/helpers/db.js']);

    for (const file of files) {
      const isTest = file.startsWith('tests/');
      const text = await this.fm.readFile(file);

      // Tests and the vitest config hold deliberate fake credentials.
      const holdsTestSecrets = isTest || file === 'vitest.config.js';
      for (const [name, pattern] of secretPatterns) {
        if (holdsTestSecrets) continue;
        if (pattern.test(text) && !file.endsWith('.env.example')) {
          issues.push({ severity: 'critical', category: 'secret_leak', message: `Kemungkinan ${name} di ${file}.`, file, fixRecommendation: 'Baca nilai dari variabel lingkungan lewat src/config.js.' });
        }
      }
      for (const [name, pattern, fix] of codePatterns) {
        if (rawSqlAllowed.has(file) && name.startsWith('SQL')) continue;
        if (file === 'eslint.config.js') continue;
        if (pattern.test(text)) issues.push({ severity: 'critical', category: 'vulnerability', message: `${name} di ${file}.`, file, fixRecommendation: fix });
      }
    }

    let audited = false;
    if (skipAudit) {
      audited = true; // dependencies did not change in a light round
    } else if (installed) {
      const audit = await this.run(`npm audit --omit=dev --audit-level=${config.gates.auditLevel} --json`, { network: true, timeoutMs: 120000 });
      try {
        const report = JSON.parse(audit.stdout) as { metadata?: { vulnerabilities?: Record<string, number> }; vulnerabilities?: Record<string, { name: string; severity: string; via: unknown[] }>; error?: unknown };
        if (report.error) throw new Error('audit error');
        audited = true;
        const counts = report.metadata?.vulnerabilities ?? {};
        const blocking = (counts.critical ?? 0) + (counts.high ?? 0) + (config.gates.auditLevel === 'moderate' ? counts.moderate ?? 0 : 0);
        if (blocking > 0) {
          const names = Object.values(report.vulnerabilities ?? {}).filter((v) => ['critical', 'high', 'moderate'].includes(v.severity)).map((v) => `${v.name} (${v.severity})`);
          issues.push({ severity: 'critical', category: 'dependency', message: `npm audit menemukan ${blocking} kerentanan: ${names.slice(0, 8).join(', ')}.`, file: 'package.json', fixRecommendation: 'Naikkan versi paket yang rentan di package.json.' });
        }
      } catch {
        issues.push({ severity: 'high', category: 'audit_unavailable', message: `npm audit tidak bisa dijalankan sehingga dependensi belum terverifikasi:\n${tail(audit.stderr || audit.stdout, 500)}`, file: 'package.json' });
      }
    } else {
      issues.push({ severity: 'high', category: 'audit_unavailable', message: 'Dependensi belum terpasang, jadi npm audit tidak dijalankan.' });
    }

    return this.result('security_scan', issues, 'Pemindaian keamanan lolos: tanpa rahasia tertanam, injeksi, XSS, atau dependensi rentan.', 'Pemindaian keamanan menemukan masalah.', { audited });
  }

  /* ---------- gate 5: launch checklist ---------- */

  public async checkLaunchChecklist(buildPassed: boolean): Promise<GateCheckResult> {
    const issues: GateIssue[] = [];
    const add = (message: string, file?: string, severity: GateIssue['severity'] = 'high') => issues.push({ severity, category: 'checklist', message, file });

    for (const file of ['README.md', '.env.example', '.gitignore']) {
      if (!this.fm.fileExists(file)) add(`${file} belum ada.`, file);
    }
    if (this.fm.fileExists('public/index.html')) {
      const html = await this.fm.readFile('public/index.html');
      if (!/name="viewport"/.test(html)) add('Meta viewport belum ada di public/index.html.', 'public/index.html');
    }

    if (this.fm.fileExists('.env.example')) {
      const example = await this.fm.readFile('.env.example');
      const documented = new Set(Array.from(example.matchAll(/^([A-Z][A-Z0-9_]*)=/gm)).map((m) => m[1]));
      const scanned = [...(await this.fm.listFiles('src')), ...(await this.fm.listFiles('prisma')), ...(await this.fm.listFiles('scripts')), 'server.js'].filter((f) => f.endsWith('.js') && this.fm.fileExists(f));
      const used = new Map<string, string>();
      for (const file of scanned) {
        const text = await this.fm.readFile(file);
        for (const match of text.matchAll(/(?:process\.env|\benv)\.([A-Z][A-Z0-9_]*)/g)) if (!used.has(match[1])) used.set(match[1], file);
      }
      for (const [name, file] of used) {
        if (!documented.has(name)) add(`Variabel ${name} dipakai di ${file} tetapi tidak tercantum di .env.example.`, file);
      }
    }

    for (const page of this.spec.pages) {
      const relative = `public/js/pages/${page.route.replace(/^\/+|\/+$/g, '').replace(/[^A-Za-z0-9]+/g, '-').toLowerCase() || 'home'}.js`;
      if (!this.fm.fileExists(relative)) continue;
      const text = await this.fm.readFile(relative);
      if (!/export default/.test(text)) add(`${relative} tidak memiliki export default.`, relative);
      else if (page.kind !== 'crud' && !/\brender\s*\(/.test(text)) add(`${relative} tidak mendefinisikan render(data, ctx).`, relative);
    }

    // Demo data must never create accounts: the administrator is created separately with a real password.
    if (this.fm.fileExists('prisma/seed.data.js')) {
      const seed = await this.fm.readFile('prisma/seed.data.js');
      if (/\bprisma\.user\b|\bpasswordHash\b|\bbcrypt\b/.test(seed)) {
        add('prisma/seed.data.js membuat akun pengguna atau hash password. Data contoh tidak boleh membuat akun; hapus bagian itu.', 'prisma/seed.data.js');
      }
    }

    if (buildPassed) {
      const backupDir = path.join(this.fm.workspaceDir, 'backups-check');
      await fs.rm(backupDir, { recursive: true, force: true });
      const backup = await this.run('npm run backup', { env: this.gateEnv({ BACKUP_DIR: './backups-check' }), network: false });
      const created = (await fs.readdir(backupDir).catch(() => [])).filter((n) => n.endsWith('.db'));
      if (!backup.success || created.length === 0) {
        add(`Skrip backup tidak menghasilkan cadangan:\n${tail(backup.stderr || backup.stdout, 500)}`, 'scripts/backup.js', 'critical');
      }
      await fs.rm(backupDir, { recursive: true, force: true });
    }

    return this.result('launch_checklist', issues, 'Checklist grade launch terpenuhi.', 'Checklist grade launch belum lengkap.');
  }
}
