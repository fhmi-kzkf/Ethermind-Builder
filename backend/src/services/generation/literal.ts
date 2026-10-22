/** Pretty-prints a JSON-compatible value as a JavaScript literal with single quotes. */
export function literal(value: unknown, indent = 0): string {
  const pad = ' '.repeat(indent);
  if (value === null || typeof value !== 'object') {
    return typeof value === 'string' ? `'${value.replace(/\\/g, '\\\\').replace(/'/g, "\\'")}'` : String(value);
  }
  if (Array.isArray(value)) {
    if (value.length === 0) return '[]';
    const inline = `[${value.map((v) => literal(v)).join(', ')}]`;
    if (inline.length <= 80 && !inline.includes('\n')) return inline;
    return `[\n${value.map((v) => `${pad}  ${literal(v, indent + 2)}`).join(',\n')},\n${pad}]`;
  }
  const entries = Object.entries(value as Record<string, unknown>);
  if (entries.length === 0) return '{}';
  const key = (k: string) => (/^[A-Za-z_$][\w$]*$/.test(k) ? k : `'${k}'`);
  const inline = `{ ${entries.map(([k, v]) => `${key(k)}: ${literal(v)}`).join(', ')} }`;
  if (inline.length <= 90 && !inline.includes('\n')) return inline;
  return `{\n${entries.map(([k, v]) => `${pad}  ${key(k)}: ${literal(v, indent + 2)}`).join(',\n')},\n${pad}}`;
}
