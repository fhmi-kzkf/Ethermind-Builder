import { describe, expect, it } from 'vitest';
import { crc16, merchantName, parseQris, parseTlv, QrisError, toDynamicQris } from '../src/services/payments/qris';
import { makeStaticQris } from './helpers/qris';

const value = (payload: string, tag: string) => parseTlv(payload).find((f) => f.tag === tag)?.value;

describe('QRIS static to dynamic conversion', () => {
  const staticQris = makeStaticQris('Warung Uji');

  it('computes the standard CRC-16/CCITT-FALSE checksum', () => {
    // The published check value for this algorithm.
    expect(crc16('123456789')).toBe('29B1');
  });

  it('accepts a valid static code and reads the merchant name', () => {
    expect(value(staticQris, '01')).toBe('11');
    expect(merchantName(staticQris)).toBe('Warung Uji');
  });

  it('marks the code dynamic and writes the amount after the currency', () => {
    const dynamic = toDynamicQris(staticQris, 35123);
    expect(value(dynamic, '01')).toBe('12');
    expect(value(dynamic, '54')).toBe('35123');
    const tags = parseTlv(dynamic).map((f) => f.tag);
    expect(tags.indexOf('54')).toBe(tags.indexOf('53') + 1);
    expect(tags.filter((t) => t === '54')).toHaveLength(1);
    expect(tags[tags.length - 1]).toBe('63');
  });

  it('keeps every other field of the merchant code untouched', () => {
    const dynamic = toDynamicQris(staticQris, 100000);
    for (const tag of ['00', '26', '51', '52', '53', '58', '59', '60', '61', '62']) expect(value(dynamic, tag)).toBe(value(staticQris, tag));
  });

  it('produces a code whose own checksum is valid', () => {
    const dynamic = toDynamicQris(staticQris, 35999);
    expect(() => parseQris(dynamic)).not.toThrow();
    expect(dynamic.slice(-4)).toBe(crc16(dynamic.slice(0, -4)));
  });

  it('replaces an amount that is already there instead of adding a second one', () => {
    const again = toDynamicQris(toDynamicQris(staticQris, 1000), 2000);
    expect(parseTlv(again).filter((f) => f.tag === '54')).toEqual([{ tag: '54', value: '2000' }]);
  });

  it('rejects a code that was copied wrongly', () => {
    const broken = staticQris.slice(0, 40) + (staticQris[40] === '9' ? '8' : '9') + staticQris.slice(41);
    expect(() => toDynamicQris(broken, 1000)).toThrow(QrisError);
    expect(() => toDynamicQris('bukan qris', 1000)).toThrow(QrisError);
    expect(() => toDynamicQris(staticQris.slice(0, -2), 1000)).toThrow(QrisError);
  });

  it('rejects amounts that are not whole rupiah in range', () => {
    for (const bad of [0, -5, 10.5, 100_000_000, Number.NaN]) expect(() => toDynamicQris(staticQris, bad)).toThrow(QrisError);
  });
});
