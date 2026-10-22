const IRREGULAR_PLURALS: Record<string, string> = {
  person: 'people',
  child: 'children',
  man: 'men',
  woman: 'women',
};

export function lowerFirst(value: string): string {
  return value.charAt(0).toLowerCase() + value.slice(1);
}

export function upperFirst(value: string): string {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

/** "StockMovement" -> ["Stock", "Movement"] */
function words(name: string): string[] {
  return name.replace(/([a-z0-9])([A-Z])/g, '$1 $2').split(/[\s_-]+/).filter(Boolean);
}

export function kebab(name: string): string {
  return words(name)
    .map((w) => w.toLowerCase())
    .join('-');
}

export function humanize(name: string): string {
  const text = words(name).join(' ').toLowerCase();
  return upperFirst(text);
}

function pluralizeWord(word: string): string {
  const lower = word.toLowerCase();
  if (IRREGULAR_PLURALS[lower]) return IRREGULAR_PLURALS[lower];
  if (/(s|x|z|ch|sh)$/.test(lower)) return `${lower}es`;
  if (/[^aeiou]y$/.test(lower)) return `${lower.slice(0, -1)}ies`;
  return `${lower}s`;
}

/** Entity name to its REST resource segment: "StockMovement" -> "stock-movements". */
export function resourcePath(entity: string): string {
  const parts = words(entity).map((w) => w.toLowerCase());
  const last = parts.pop() as string;
  return [...parts, pluralizeWord(last)].join('-');
}

/** Name of the Prisma client delegate: "StockMovement" -> "stockMovement". */
export function delegateName(entity: string): string {
  return lowerFirst(entity);
}

/** Foreign key field to the name of its relation field: "productId" -> "product". */
export function relationFieldName(fkField: string): string {
  return fkField.replace(/Id$/, '');
}
