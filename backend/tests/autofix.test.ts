import { afterEach, describe, expect, it } from 'vitest';
import { autoFixUnusedImports, removeUnusedImports } from '../src/services/quality-gate/autofix';
import { WorkspaceFileManager } from '../src/services/sandbox/fileManager';

describe('removing unused imports', () => {
  it('drops only the unused names and keeps the rest of the statement', () => {
    const source = "import { h, icon } from '../lib/dom.js';\nimport { rupiah, number, date } from '../lib/format.js';\nexport default { render: () => h('div', null, rupiah(1)) };\n";

    const result = removeUnusedImports(source, new Set(['icon', 'number', 'date']));

    expect(result).toBe("import { h } from '../lib/dom.js';\nimport { rupiah } from '../lib/format.js';\nexport default { render: () => h('div', null, rupiah(1)) };\n");
  });

  it('deletes a statement when nothing in it is used', () => {
    const source = "import { icon } from '../lib/dom.js';\nimport { api } from '../lib/api.js';\nexport default api;\n";

    expect(removeUnusedImports(source, new Set(['icon']))).toBe("import { api } from '../lib/api.js';\nexport default api;\n");
  });

  it('understands aliases, default imports and mixed imports', () => {
    const source = "import Foo, { a as b, c } from './x.js';\nimport def from './y.js';\nconsole.log(c);\n";

    expect(removeUnusedImports(source, new Set(['Foo', 'b', 'def']))).toBe("import { c } from './x.js';\nconsole.log(c);\n");
  });

  it('leaves statements alone when none of their names are unused', () => {
    const source = "import { a, b } from './x.js';\nexport { a, b };\n";

    expect(removeUnusedImports(source, new Set(['zzz']))).toBe(source);
  });

  it('handles multi-line import lists', () => {
    const source = "import {\n  button,\n  card,\n  stateEmpty,\n} from '../lib/ui.js';\nexport default [button, card];\n";

    expect(removeUnusedImports(source, new Set(['stateEmpty']))).toBe("import { button, card } from '../lib/ui.js';\nexport default [button, card];\n");
  });
});

describe('autofix on a workspace', () => {
  const fm = new WorkspaceFileManager('autofix', 'job');
  afterEach(() => fm.cleanWorkspace());

  it('fixes unused imports, and leaves unused variables that are not imports for the model', async () => {
    await fm.initWorkspace();
    await fm.writeFile('public/js/pages/a.js', "import { h, icon } from '../lib/dom.js';\nconst leftover = 1;\nexport default { render: () => h('div') };\n");
    const issues = [
      { severity: 'high' as const, category: 'lint', file: 'public/js/pages/a.js', line: 1, message: "no-unused-vars: 'icon' is defined but never used." },
      { severity: 'high' as const, category: 'lint', file: 'public/js/pages/a.js', line: 2, message: "no-unused-vars: 'leftover' is assigned a value but never used." },
      { severity: 'high' as const, category: 'lint', file: 'public/js/pages/a.js', line: 9, message: 'Parsing error: Unexpected token )' },
    ];

    const result = await autoFixUnusedImports(fm, issues);

    expect(result.changed).toEqual(['public/js/pages/a.js']);
    expect(result.remaining.map((i) => i.message)).toEqual(["no-unused-vars: 'leftover' is assigned a value but never used.", 'Parsing error: Unexpected token )']);
    expect(await fm.readFile('public/js/pages/a.js')).not.toContain('icon');
    expect(await fm.readFile('public/js/pages/a.js')).toContain('const leftover = 1;');
  });

  it('does nothing when there is nothing to fix', async () => {
    await fm.initWorkspace();
    const result = await autoFixUnusedImports(fm, [{ severity: 'high', category: 'test', message: 'Tes gagal: x' }]);

    expect(result.changed).toEqual([]);
    expect(result.remaining).toHaveLength(1);
  });
});
