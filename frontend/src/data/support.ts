/**
 * Where a client can reach a person. Left empty until the owner supplies a real address: nothing is shown for an
 * empty field, and no chat widget is faked. Set `email` and/or `whatsapp` (digits with country code, e.g. 62812...).
 */
export const SUPPORT: { email: string; whatsapp: string } = { email: '', whatsapp: '' };

export function supportLinks(): Array<{ label: string; href: string }> {
  const links: Array<{ label: string; href: string }> = [];
  if (SUPPORT.email) links.push({ label: 'Kirim email', href: `mailto:${SUPPORT.email}` });
  if (SUPPORT.whatsapp) links.push({ label: 'Chat WhatsApp', href: `https://wa.me/${SUPPORT.whatsapp.replace(/\D/g, '')}` });
  return links;
}
