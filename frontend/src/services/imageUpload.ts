export const ACCEPTED_IMAGE_TYPES = ['image/png', 'image/jpeg', 'image/webp'];
export const MAX_IMAGES = 3;

/** Longest side after shrinking. A screen or a sketch stays readable at this size, and it keeps the reading cheap and quick. */
const MAX_SIDE = 1600;
/** Under the server's limit of 4 MB, so base64 and the request around it never tip it over. */
const MAX_BYTES = 3_500_000;

/** Blob URLs of pictures already shown, by attachment id, so a picture is never downloaded twice. */
export const imageCache = new Map<string, string>();

function toBlob(canvas: HTMLCanvasElement, quality: number): Promise<Blob> {
  return new Promise((resolve, reject) => canvas.toBlob((blob) => (blob ? resolve(blob) : reject(new Error('Gambar tidak bisa diproses.'))), 'image/jpeg', quality));
}

function readBase64(blob: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result).replace(/^data:[^;]+;base64,/, ''));
    reader.onerror = () => reject(new Error('Gambar tidak bisa dibaca.'));
    reader.readAsDataURL(blob);
  });
}

/** Checks a picked file, shrinks it, and returns it ready to upload together with a local preview. */
export async function prepareImage(file: File): Promise<{ base64: string; previewUrl: string }> {
  if (!ACCEPTED_IMAGE_TYPES.includes(file.type)) throw new Error('Hanya gambar PNG, JPEG, atau WebP yang bisa dilampirkan.');

  let bitmap: ImageBitmap;
  try {
    bitmap = await createImageBitmap(file);
  } catch {
    throw new Error('Berkas ini tidak bisa dibuka sebagai gambar.');
  }

  const scale = Math.min(1, MAX_SIDE / Math.max(bitmap.width, bitmap.height));
  const canvas = document.createElement('canvas');
  canvas.width = Math.max(1, Math.round(bitmap.width * scale));
  canvas.height = Math.max(1, Math.round(bitmap.height * scale));
  const context = canvas.getContext('2d');
  if (!context) throw new Error('Gambar tidak bisa diproses di browser ini.');
  // JPEG has no transparency: a transparent screenshot would turn black without a white base.
  context.fillStyle = '#ffffff';
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
  bitmap.close();

  let quality = 0.85;
  let blob = await toBlob(canvas, quality);
  while (blob.size > MAX_BYTES && quality > 0.5) {
    quality -= 0.1;
    blob = await toBlob(canvas, quality);
  }
  if (blob.size > MAX_BYTES) throw new Error('Gambar masih terlalu besar setelah dikecilkan. Pakai gambar yang lebih kecil.');

  return { base64: await readBase64(blob), previewUrl: URL.createObjectURL(blob) };
}
