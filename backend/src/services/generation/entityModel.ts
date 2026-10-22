import { humanize, lowerFirst, relationFieldName, resourcePath } from '../spec/naming';
import { SpecDefinition, SpecTable, SpecTableField } from '../spec/specSchema';
import { literal } from './literal';

const NON_NEGATIVE_NAME = /(price|harga|stock|stok|qty|quantity|jumlah|total|amount|nominal|cost|biaya|berat|weight|diskon|discount)/i;
const LONG_TEXT_NAME = /(description|deskripsi|notes?|catatan|alamat|address|keterangan|remarks?|komentar|comment)/i;
const EMAIL_NAME = /email$/i;
const PHONE_NAME = /(phone|telepon|telp|hp|whatsapp|wa)$/i;
const LABEL_FIELD_PRIORITY = ['name', 'nama', 'title', 'judul', 'label', 'code', 'kode', 'sku'];


export function fieldLabel(field: SpecTableField): string {
  return field.label || humanize(field.relation ? relationFieldName(field.name) : field.name);
}

export function entityLabel(entity: SpecTable): string {
  return entity.label || humanize(entity.name);
}

/** Lowercase noun for sentences: "Produk" -> "produk". */
export function entityNoun(entity: SpecTable): string {
  return entityLabel(entity).toLowerCase();
}

export function isLongText(field: SpecTableField): boolean {
  return field.type === 'String' && (field.format === 'longtext' || (!field.values && LONG_TEXT_NAME.test(field.name)));
}

export function isEmailField(field: SpecTableField): boolean {
  return field.type === 'String' && (field.format === 'email' || EMAIL_NAME.test(field.name));
}

export function isPhoneField(field: SpecTableField): boolean {
  return field.type === 'String' && (field.format === 'phone' || PHONE_NAME.test(field.name));
}

export function numericMin(field: SpecTableField): number | undefined {
  if (field.min !== undefined) return field.min;
  if (field.type === 'Int' || field.type === 'Float') {
    if (field.format === 'rupiah' || NON_NEGATIVE_NAME.test(field.name)) return 0;
  }
  return undefined;
}

/** The effective default: Booleans default to false when the planner gave none. */
export function effectiveDefault(field: SpecTableField): string | number | boolean | undefined {
  if (field.default !== undefined) return field.default;
  if (field.type === 'Boolean') return false;
  return undefined;
}

export function isOptional(field: SpecTableField): boolean {
  return !field.required && effectiveDefault(field) === undefined;
}

export function entityOf(spec: SpecDefinition, name: string): SpecTable | undefined {
  return spec.databaseSchema.find((e) => e.name === name);
}

/** The field that best names a record in a dropdown or table, e.g. "name" for Category. */
export function labelFieldOf(entity: SpecTable): string {
  const strings = entity.fields.filter((f) => f.type === 'String' && !f.relation && !f.values && !isLongText(f));
  for (const preferred of LABEL_FIELD_PRIORITY) {
    const hit = strings.find((f) => f.name.toLowerCase() === preferred);
    if (hit) return hit.name;
  }
  return strings.find((f) => f.required)?.name || strings[0]?.name || 'id';
}

export function inboundRelations(spec: SpecDefinition, target: string): Array<{ entity: SpecTable; field: SpecTableField }> {
  const result: Array<{ entity: SpecTable; field: SpecTableField }> = [];
  for (const entity of spec.databaseSchema) {
    for (const field of entity.fields) {
      if (field.relation === target) result.push({ entity, field });
    }
  }
  return result;
}

/* ---------- validation (zod) ---------- */

function stringMax(field: SpecTableField): number {
  return isLongText(field) ? 2000 : 200;
}

function zodBase(field: SpecTableField): string {
  const messages = `required_error: 'Wajib diisi'`;
  switch (field.type) {
    case 'String': {
      if (field.relation) return `z.string({ ${messages} }).min(1, 'Wajib diisi')`;
      if (field.values) {
        return `z.enum([${field.values.map((v) => literal(v)).join(', ')}], { errorMap: () => ({ message: 'Pilih salah satu pilihan yang tersedia' }) })`;
      }
      const max = stringMax(field);
      let expr = `z.string({ ${messages}, invalid_type_error: 'Harus berupa teks' }).trim().min(1, 'Wajib diisi').max(${max}, 'Maksimal ${max} karakter')`;
      if (isEmailField(field)) expr += `.email('Format email belum benar')`;
      if (isPhoneField(field)) expr += `.regex(/^[0-9+\\-\\s()]{6,20}$/, 'Format nomor telepon belum benar')`;
      return expr;
    }
    case 'Int':
    case 'Float': {
      let expr = `z.number({ ${messages}, invalid_type_error: 'Harus berupa angka' })`;
      if (field.type === 'Int') expr += `.int('Harus berupa bilangan bulat')`;
      const min = numericMin(field);
      if (min !== undefined) expr += `.min(${min}, 'Tidak boleh kurang dari ${min}')`;
      if (field.max !== undefined) expr += `.max(${field.max}, 'Tidak boleh lebih dari ${field.max}')`;
      return expr;
    }
    case 'Boolean':
      return `z.boolean({ ${messages}, invalid_type_error: 'Harus ya atau tidak' })`;
    case 'DateTime':
      return `z.coerce.date({ errorMap: () => ({ message: 'Tanggal belum valid' }) })`;
    default:
      throw new Error(`Unsupported field type: ${field.type}`);
  }
}

export function zodExpression(field: SpecTableField): string {
  const base = zodBase(field);
  const fallback = effectiveDefault(field);
  if (fallback !== undefined) {
    if (field.type === 'DateTime' && fallback === 'now') return `${base}.default(() => new Date())`;
    return `${base}.default(${literal(fallback)})`;
  }
  return field.required ? base : `${base}.nullish()`;
}

/* ---------- Prisma ---------- */

export function prismaType(field: SpecTableField): string {
  return field.type;
}

export function prismaDefault(field: SpecTableField): string {
  const fallback = effectiveDefault(field);
  if (fallback === undefined) return '';
  if (field.type === 'DateTime' && fallback === 'now') return ' @default(now())';
  if (typeof fallback === 'string') return ` @default(${JSON.stringify(fallback)})`;
  return ` @default(${fallback})`;
}

/* ---------- UI configuration ---------- */

const SUCCESS_WORDS = /^(aktif|active|lunas|paid|selesai|done|completed|tersedia|available|diterima|approved|berhasil|success)$/i;
const WARNING_WORDS = /^(pending|menunggu|proses|diproses|process|processing|draft|baru|new|sebagian|partial)$/i;
const DANGER_WORDS = /^(batal|dibatalkan|cancel|cancelled|canceled|gagal|failed|nonaktif|inactive|ditolak|rejected|habis|overdue|terlambat)$/i;

function toneFor(value: string): 'success' | 'warning' | 'danger' | 'neutral' {
  if (SUCCESS_WORDS.test(value)) return 'success';
  if (WARNING_WORDS.test(value)) return 'warning';
  if (DANGER_WORDS.test(value)) return 'danger';
  return 'neutral';
}

function valueLabel(value: string): string {
  return humanize(value.replace(/[_-]+/g, ' ').replace(/\s+/g, ' ').trim());
}

export interface UiColumn {
  key: string;
  label: string;
  type?: string;
  align?: string;
  values?: Record<string, { label: string; tone: string }>;
}

export function uiColumns(spec: SpecDefinition, entity: SpecTable, max = 6): UiColumn[] {
  const columns: UiColumn[] = [];

  for (const field of entity.fields) {
    if (columns.length >= max) break;
    if (isLongText(field)) continue;

    if (field.relation) {
      const target = entityOf(spec, field.relation);
      const labelKey = target ? labelFieldOf(target) : 'id';
      columns.push({ key: `${relationFieldName(field.name)}.${labelKey}`, label: fieldLabel(field) });
    } else if (field.values) {
      const values: UiColumn['values'] = {};
      for (const value of field.values) values[value] = { label: valueLabel(value), tone: toneFor(value) };
      columns.push({ key: field.name, label: fieldLabel(field), type: 'badge', values });
    } else if (field.type === 'Int' || field.type === 'Float') {
      columns.push({ key: field.name, label: fieldLabel(field), type: field.format === 'rupiah' ? 'money' : 'number', align: 'end' });
    } else if (field.type === 'Boolean') {
      columns.push({ key: field.name, label: fieldLabel(field), type: 'boolean' });
    } else if (field.type === 'DateTime') {
      columns.push({ key: field.name, label: fieldLabel(field), type: 'datetime' });
    } else {
      columns.push({ key: field.name, label: fieldLabel(field) });
    }
  }
  return columns;
}

export interface UiField {
  name: string;
  label: string;
  type: string;
  required: boolean;
  options?: Array<{ value: string; label: string }>;
  relation?: { endpoint: string; labelKey: string };
  hint?: string;
  min?: number;
  max?: number;
  step?: string;
  maxlength?: number;
  inputmode?: string;
  autocomplete?: string;
  defaultValue?: string | number | boolean;
}

export function uiFields(spec: SpecDefinition, entity: SpecTable): UiField[] {
  return entity.fields.map((field): UiField => {
    const base = { name: field.name, label: fieldLabel(field), required: field.required && effectiveDefault(field) === undefined };
    const fallback = effectiveDefault(field);
    const defaultValue = fallback !== undefined && fallback !== 'now' ? { defaultValue: fallback } : {};

    if (field.relation) {
      const target = entityOf(spec, field.relation);
      return { ...base, type: 'select', relation: { endpoint: `/api/${resourcePath(field.relation)}`, labelKey: target ? labelFieldOf(target) : 'id' } };
    }
    if (field.values) {
      return { ...base, ...defaultValue, type: 'select', options: field.values.map((v) => ({ value: v, label: valueLabel(v) })) };
    }
    switch (field.type) {
      case 'Int':
      case 'Float': {
        const min = numericMin(field);
        return {
          ...base,
          ...defaultValue,
          type: 'number',
          step: field.type === 'Int' ? '1' : 'any',
          inputmode: field.type === 'Int' ? 'numeric' : 'decimal',
          ...(min !== undefined ? { min } : {}),
          ...(field.max !== undefined ? { max: field.max } : {}),
          ...(field.format === 'rupiah' ? { hint: 'Dalam Rupiah, tanpa titik atau koma' } : {}),
        };
      }
      case 'Boolean':
        return { ...base, ...defaultValue, type: 'checkbox', required: false };
      case 'DateTime':
        return { ...base, type: 'datetime-local' };
      default:
        if (isLongText(field)) return { ...base, type: 'textarea', maxlength: stringMax(field) };
        if (isEmailField(field)) return { ...base, type: 'email', maxlength: 200, inputmode: 'email', autocomplete: 'off' };
        if (isPhoneField(field)) return { ...base, type: 'tel', maxlength: 20, inputmode: 'tel', autocomplete: 'off' };
        return { ...base, ...defaultValue, type: 'text', maxlength: stringMax(field) };
    }
  });
}

/* ---------- list endpoint configuration ---------- */

export function listConfig(spec: SpecDefinition, entity: SpecTable) {
  const searchFields = entity.fields.filter((f) => f.type === 'String' && !f.relation && !f.values).slice(0, 4).map((f) => f.name);
  const filters: Record<string, string> = {};
  for (const field of entity.fields) {
    if (field.relation || field.values) filters[field.name] = 'string';
    else if (field.type === 'Boolean') filters[field.name] = 'boolean';
  }
  const sortable = [...entity.fields.filter((f) => !f.relation && !isLongText(f)).map((f) => f.name), 'createdAt'];

  const include: Record<string, { select: Record<string, true> }> = {};
  for (const field of entity.fields) {
    if (!field.relation) continue;
    const target = entityOf(spec, field.relation);
    const labelKey = target ? labelFieldOf(target) : field.relation === 'User' ? 'name' : 'id';
    include[relationFieldName(field.name)] = { select: { id: true, [labelKey]: true } };
  }

  return { searchFields, filters, sortable, include };
}

/* ---------- test data ---------- */

/** JS source for one field's sample value inside a factory. Generated code may refer to the counter `i`. */
export function sampleExpression(field: SpecTableField): string {
  if (field.relation) throw new Error('relations are handled by the factory generator');
  if (field.values) return literal(field.values[0]);
  switch (field.type) {
    case 'String': {
      if (isEmailField(field)) return '`pengguna${i}@contoh.test`';
      if (isPhoneField(field)) return '`0812345${String(i).padStart(5, "0")}`';
      return `\`${fieldLabel(field)} contoh \${i}\``;
    }
    case 'Int': {
      const min = numericMin(field);
      return String(Math.max(min ?? 1, 1));
    }
    case 'Float':
      return String(Math.max(numericMin(field) ?? 1, 1) + 0.5);
    case 'Boolean':
      return 'true';
    case 'DateTime':
      return "new Date('2026-01-15T08:00:00.000Z')";
    default:
      return 'null';
  }
}

export { lowerFirst };
