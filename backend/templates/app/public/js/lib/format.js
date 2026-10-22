const LOCALE = 'id-ID';

const rupiahFormat = new Intl.NumberFormat(LOCALE, {
  style: 'currency',
  currency: 'IDR',
  maximumFractionDigits: 0,
});
const numberFormat = new Intl.NumberFormat(LOCALE);
const dateFormat = new Intl.DateTimeFormat(LOCALE, { day: 'numeric', month: 'short', year: 'numeric' });
const dateTimeFormat = new Intl.DateTimeFormat(LOCALE, {
  day: 'numeric',
  month: 'short',
  year: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
});

const EMPTY = '-';
const isBlank = (value) => value === null || value === undefined || value === '';

export function rupiah(value) {
  return isBlank(value) ? EMPTY : rupiahFormat.format(Number(value));
}

export function number(value) {
  return isBlank(value) ? EMPTY : numberFormat.format(Number(value));
}

export function date(value) {
  if (isBlank(value)) return EMPTY;
  const parsed = new Date(value);
  return Number.isNaN(parsed.getTime()) ? EMPTY : dateFormat.format(parsed);
}

export function dateTime(value) {
  if (isBlank(value)) return EMPTY;
  const parsed = new Date(value);
  return Number.isNaN(parsed.getTime()) ? EMPTY : dateTimeFormat.format(parsed);
}

export function yesNo(value) {
  return value ? 'Ya' : 'Tidak';
}

/** Reads "product.name" style paths from nested API objects. */
export function pick(object, path) {
  return path.split('.').reduce((current, key) => (current === null || current === undefined ? current : current[key]), object);
}

/** "2026-10-13T00:00:00.000Z" -> "2026-10-13T07:00" for datetime-local inputs, in the viewer's time zone. */
export function toDateTimeInput(value) {
  if (isBlank(value)) return '';
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) return '';
  const offsetMs = parsed.getTimezoneOffset() * 60000;
  return new Date(parsed.getTime() - offsetMs).toISOString().slice(0, 16);
}
