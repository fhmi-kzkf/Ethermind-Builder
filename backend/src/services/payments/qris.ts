/**
 * QRIS is an EMV merchant-presented QR: a flat list of tag-length-value fields that ends with a CRC16 over the whole text.
 * A static code (tag 01 = "11") has no amount, so the payer types one. A dynamic code (tag 01 = "12") carries the amount in
 * tag 54, which is how one printed merchant code can be turned into a per-order code without a payment gateway.
 */

export class QrisError extends Error {}

export interface TlvField {
  tag: string;
  value: string;
}

export function parseTlv(payload: string): TlvField[] {
  const fields: TlvField[] = [];
  let i = 0;
  while (i < payload.length) {
    if (i + 4 > payload.length) throw new QrisError('Data QRIS terpotong.');
    const tag = payload.slice(i, i + 2);
    const length = Number(payload.slice(i + 2, i + 4));
    if (!/^\d{2}$/.test(tag) || !Number.isInteger(length) || i + 4 + length > payload.length) throw new QrisError('Data QRIS tidak valid.');
    fields.push({ tag, value: payload.slice(i + 4, i + 4 + length) });
    i += 4 + length;
  }
  return fields;
}

/** CRC-16/CCITT-FALSE (polynomial 0x1021, start 0xFFFF), the checksum EMV QR uses. */
export function crc16(text: string): string {
  let crc = 0xffff;
  for (let i = 0; i < text.length; i++) {
    crc ^= text.charCodeAt(i) << 8;
    for (let bit = 0; bit < 8; bit++) crc = crc & 0x8000 ? ((crc << 1) ^ 0x1021) & 0xffff : (crc << 1) & 0xffff;
  }
  return crc.toString(16).toUpperCase().padStart(4, '0');
}

const field = (tag: string, value: string) => `${tag}${String(value.length).padStart(2, '0')}${value}`;

/** Throws unless the text is a well-formed QRIS whose checksum matches. Returns its fields. */
export function parseQris(payload: string): TlvField[] {
  if (!payload.startsWith('000201')) throw new QrisError('Teks ini bukan QRIS (kode awal tidak cocok).');
  if (payload.length < 12 || payload.slice(-8, -4) !== '6304') throw new QrisError('QRIS tidak berakhir dengan checksum.');
  const body = payload.slice(0, -4);
  if (crc16(body) !== payload.slice(-4).toUpperCase()) throw new QrisError('Checksum QRIS tidak cocok: teks QRIS rusak atau salah salin.');
  return parseTlv(payload);
}

/** The merchant name printed on the code (tag 59), for showing the buyer who they are paying. */
export function merchantName(staticPayload: string): string {
  return parseQris(staticPayload).find((f) => f.tag === '59')?.value ?? '';
}

/** Rupiah only, whole numbers: the amount field is written without decimals. */
export function toDynamicQris(staticPayload: string, amount: number): string {
  if (!Number.isInteger(amount) || amount < 1 || amount > 99_999_999) throw new QrisError('Nominal harus bilangan bulat rupiah antara 1 dan 99.999.999.');
  const fields = parseQris(staticPayload).filter((f) => f.tag !== '63' && f.tag !== '54');

  const out: TlvField[] = [];
  for (const f of fields) {
    out.push(f.tag === '01' ? { tag: '01', value: '12' } : f);
    // Tag 54 sits after the currency (53) and before the country (58), as the spec orders its tags.
    if (f.tag === '53') out.push({ tag: '54', value: String(amount) });
  }
  if (!out.some((f) => f.tag === '54')) throw new QrisError('QRIS tidak memuat kode mata uang (tag 53), sehingga nominal tidak bisa disisipkan.');

  const body = out.map((f) => field(f.tag, f.value)).join('') + '6304';
  return body + crc16(body);
}
