import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { RemediationAgent } from '../src/services/agents/remediationAgent';
import llmClient from '../src/services/llm/client';
import llmRouter from '../src/services/llm/router';
import { QualityGateChecker } from '../src/services/quality-gate/checker';
import { WorkspaceFileManager } from '../src/services/sandbox/fileManager';
import { shopSpec } from './fixtures/specs';
import { useScriptedLlm } from './helpers/scriptedLlm';

const block = (path: string, content: string) => `=== FILE: ${path} ===\n${content}\n=== END FILE ===`;
const issue = (file: string | undefined, message: string, line?: number) => ({ severity: 'high' as const, category: 'lint', file, line, message });

describe('repairing code, one file per model call', () => {
  const spec = shopSpec();
  const fm = new WorkspaceFileManager('remediation', 'job');

  beforeEach(async () => {
    llmRouter.health.reset();
    await fm.initWorkspace();
    await fm.writeFile('src/routes/custom/sales.js', 'export default 1;\nconst brokenSales = (;\n');
    await fm.writeFile('public/js/pages/home.js', 'export default {};\nconst brokenHome = );\n');
    await fm.writeFile('public/js/pages/pos.js', 'export default { fine: true };\n');
  });

  afterEach(async () => {
    llmClient.setClientForTesting(null);
    await fm.cleanWorkspace();
  });

  it('asks for each broken file separately and shows the model only that file', async () => {
    const script = useScriptedLlm({
      remediation: ({ task }) => {
        const file = /file=(.+)$/.exec(task)![1];
        return block(file, `export default '${file} repaired';`);
      },
    });

    const changed = await RemediationAgent.fix(spec, fm, [issue('src/routes/custom/sales.js', 'Parsing error: Unexpected token ;', 2), issue('public/js/pages/home.js', 'Parsing error: Unexpected token )', 2)], 'p', '');

    expect(changed.sort()).toEqual(['public/js/pages/home.js', 'src/routes/custom/sales.js']);
    expect(script.calls.map((c) => c.task).sort()).toEqual(['remediation file=public/js/pages/home.js', 'remediation file=src/routes/custom/sales.js']);

    const salesCall = script.calls.find((c) => c.task.endsWith('sales.js'))!;
    expect(salesCall.user).toContain('brokenSales');
    expect(salesCall.user).not.toContain('brokenHome');
    expect(salesCall.user).toContain('code around line 2');
    expect(await fm.readFile('public/js/pages/home.js')).toContain('home.js repaired');
    expect(await fm.readFile('public/js/pages/pos.js')).toBe('export default { fine: true };\n');
  });

  it('does not let one failing file stop the others from being repaired', async () => {
    useScriptedLlm({
      remediation: ({ task }) => {
        if (task.endsWith('home.js')) throw new Error('model down');
        return block('src/routes/custom/sales.js', 'export default 2;');
      },
    });

    const changed = await RemediationAgent.fix(spec, fm, [issue('src/routes/custom/sales.js', 'x'), issue('public/js/pages/home.js', 'y')], 'p', '');

    expect(changed).toEqual(['src/routes/custom/sales.js']);
  });

  it('reports the failure when no file could be repaired at all', async () => {
    useScriptedLlm({ remediation: () => { throw new Error('model down'); } });

    await expect(RemediationAgent.fix(spec, fm, [issue('src/routes/custom/sales.js', 'x')], 'p', '')).rejects.toThrow();
  });

  it('ignores a reply that holds a file other than the one asked for', async () => {
    useScriptedLlm({ remediation: () => `${block('src/app.js', 'process.exit(1);')}\n${block('src/routes/custom/other.js', 'x')}` });

    const changed = await RemediationAgent.fix(spec, fm, [issue('src/routes/custom/sales.js', 'x')], 'p', '');

    expect(changed).toEqual([]);
    expect(fm.fileExists('src/app.js')).toBe(false);
    expect(await fm.readFile('src/routes/custom/sales.js')).toContain('brokenSales');
  });

  it('never writes a reply labelled with another path over the file it was asked to repair', async () => {
    useScriptedLlm({ remediation: () => block('public/js/pages/pos.js', 'export default "wrong file";') });

    const changed = await RemediationAgent.fix(spec, fm, [issue('src/routes/custom/sales.js', 'x')], 'p', '');

    expect(changed).toEqual([]);
    expect(await fm.readFile('src/routes/custom/sales.js')).toContain('brokenSales');
    expect(await fm.readFile('public/js/pages/pos.js')).toBe('export default { fine: true };\n');
  });

  it('spreads findings that name no file over a few files of the right side, never all of them', async () => {
    const script = useScriptedLlm({ remediation: ({ task }) => block(/file=(.+)$/.exec(task)![1], 'export default 3;') });

    await RemediationAgent.fix(spec, fm, [issue(undefined, 'penjualan.js resets cart state on every render')], 'p', '');

    const asked = script.calls.map((c) => c.task);
    expect(asked.length).toBeGreaterThan(0);
    expect(asked.length).toBeLessThanOrEqual(4);
    expect(asked.every((t) => !t.includes('public/'))).toBe(true);
    expect(script.calls[0].user).toContain('penjualan.js resets cart state');
  });
});

describe('seed data must not create accounts', () => {
  const fm = new WorkspaceFileManager('seedrule', 'job');
  afterEach(() => fm.cleanWorkspace());

  it('flags a seed that creates users or password hashes', async () => {
    await fm.initWorkspace();
    await fm.writeFile('prisma/seed.data.js', "export default async (prisma) => { await prisma.user.create({ data: { passwordHash: 'x' } }); };\n");

    const result = await new QualityGateChecker(fm, shopSpec(), 'j', 'p').checkLaunchChecklist(false);

    expect(result.issues.some((i) => i.file === 'prisma/seed.data.js' && i.message.includes('akun'))).toBe(true);
    expect(result.passed).toBe(false);
  });

  it('accepts a seed that only creates business data', async () => {
    await fm.initWorkspace();
    await fm.writeFile('prisma/seed.data.js', 'export default async (prisma) => { await prisma.product.count(); };\n');

    const result = await new QualityGateChecker(fm, shopSpec(), 'j', 'p').checkLaunchChecklist(false);

    expect(result.issues.some((i) => i.file === 'prisma/seed.data.js')).toBe(false);
  });
});
