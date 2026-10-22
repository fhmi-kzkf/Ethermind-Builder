import { GateIssue } from '../../types';
import { WorkspaceFileManager } from '../sandbox/fileManager';

const UNUSED = /^no-unused-vars: '([^']+)' is (?:defined|assigned a value) but never used/;
const NAMED_IMPORT = /import\s+(?:([A-Za-z_$][\w$]*)\s*,\s*)?\{([^}]*)\}\s*from\s*(['"][^'"]+['"])[ \t]*;?[ \t]*\r?\n?/g;
const DEFAULT_IMPORT = /import\s+([A-Za-z_$][\w$]*)\s+from\s*(['"][^'"]+['"])[ \t]*;?[ \t]*\r?\n?/g;

/** Removes the named bindings from import statements. A statement left with nothing is deleted. */
export function removeUnusedImports(source: string, unused: Set<string>): string {
  const localName = (specifier: string) => specifier.split(/\s+as\s+/).pop()!.trim();

  let result = source.replace(NAMED_IMPORT, (statement, defaultName: string | undefined, list: string, from: string) => {
    const keptNames = list
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean)
      .filter((specifier) => !unused.has(localName(specifier)));
    const keepDefault = defaultName && !unused.has(defaultName) ? defaultName : undefined;

    if (keptNames.length === 0 && !keepDefault) return '';
    if (keptNames.length === list.split(',').map((s) => s.trim()).filter(Boolean).length && keepDefault === defaultName) return statement;
    const parts = [keepDefault, keptNames.length > 0 ? `{ ${keptNames.join(', ')} }` : undefined].filter(Boolean);
    return `import ${parts.join(', ')} from ${from};\n`;
  });

  result = result.replace(DEFAULT_IMPORT, (statement, name: string) => (unused.has(name) ? '' : statement));
  return result;
}

/**
 * Fixes the one lint finding that never needs a model: imports that are not used. Returns the files it
 * changed and the issues that still need someone to look at them.
 */
export async function autoFixUnusedImports(
  fm: WorkspaceFileManager,
  issues: GateIssue[]
): Promise<{ changed: string[]; remaining: GateIssue[] }> {
  const unusedByFile = new Map<string, Set<string>>();
  for (const issue of issues) {
    const name = issue.file ? UNUSED.exec(issue.message)?.[1] : undefined;
    if (!name || !issue.file) continue;
    unusedByFile.set(issue.file, (unusedByFile.get(issue.file) ?? new Set()).add(name));
  }

  const changed: string[] = [];
  const fixedNames = new Map<string, Set<string>>();
  for (const [file, names] of unusedByFile) {
    if (!fm.fileExists(file)) continue;
    const before = await fm.readFile(file);
    const after = removeUnusedImports(before, names);
    if (after === before) continue;

    await fm.writeFile(file, after);
    changed.push(file);

    // Only names that really left the file count as fixed; a variable that is not an import stays for the model.
    fixedNames.set(file, new Set(Array.from(names).filter((name) => !new RegExp(`\\b${name.replace(/\$/g, '\\$')}\\b`).test(after))));
  }

  const remaining = issues.filter((issue) => {
    const name = issue.file ? UNUSED.exec(issue.message)?.[1] : undefined;
    return !(name && issue.file && fixedNames.get(issue.file)?.has(name));
  });
  return { changed, remaining };
}
