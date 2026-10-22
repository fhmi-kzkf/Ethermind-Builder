import { crc16 } from '../../src/services/payments/qris';

const field = (tag: string, value: string) => `${tag}${String(value.length).padStart(2, '0')}${value}`;

/** A well-formed static QRIS for a made-up merchant, with a valid checksum. Never the real merchant's code. */
export function makeStaticQris(name = 'Toko Uji'): string {
  const body =
    field('00', '01') +
    field('01', '11') +
    field('26', field('00', 'ID.CO.UJI.WWW') + field('01', 'ID1000000000001') + field('02', 'UJI0001') + field('03', 'UME')) +
    field('51', field('00', 'ID.CO.QRIS.WWW') + field('02', 'ID1000000000001') + field('03', 'UME')) +
    field('52', '8999') +
    field('53', '360') +
    field('58', 'ID') +
    field('59', name) +
    field('60', 'JAKARTA') +
    field('61', '10110') +
    field('62', field('05', 'A01')) +
    '6304';
  return body + crc16(body);
}
