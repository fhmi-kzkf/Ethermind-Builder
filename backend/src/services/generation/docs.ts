import { resourcePath } from '../spec/naming';
import { SpecDefinition } from '../spec/specSchema';
import { entityLabel } from './entityModel';

export function renderEnvExample(spec: SpecDefinition): string {
  const authOn = spec.auth.mode !== 'none';
  const sections = [
    `# Lingkungan
NODE_ENV=production
PORT=3000
# Sqlite. Path relatif dibaca dari folder prisma/
DATABASE_URL="file:../data/app.db"
# true bila aplikasi berjalan di belakang proxy (Nginx, Caddy, load balancer)
TRUST_PROXY=false
# Alamat situs yang boleh menampilkan aplikasi ini di dalam iframe, dipisah spasi. Kosong berarti tidak boleh dibingkai.
FRAME_ANCESTORS=`,
    `# Pencadangan database
BACKUP_DIR=./backups
BACKUP_INTERVAL_HOURS=24
BACKUP_KEEP=14`,
    `# Isi data contoh saat menjalankan npm run db:seed. Set false pada deployment sungguhan.
SEED_DEMO_DATA=true`,
  ];

  if (authOn) {
    sections.push(`# Login (wajib): buat dengan  node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
JWT_SECRET=
# true bila aplikasi diakses lewat HTTPS
COOKIE_SECURE=false
SESSION_TTL_HOURS=8
# Akun administrator pertama, dibuat oleh npm run db:seed
SEED_ADMIN_EMAIL=admin@example.com
SEED_ADMIN_PASSWORD=`);
  }

  return `${sections.join('\n\n')}\n`;
}

function describeRoles(spec: SpecDefinition): string {
  if (spec.auth.mode === 'none') return 'Aplikasi ini tidak memakai login: siapa pun yang bisa membuka alamatnya dapat melihat dan mengubah data. Pasang di jaringan tertutup atau tambahkan login sebelum dibuka ke publik.';
  const roles = spec.auth.roles.map((r) => `\`${r}\``).join(', ');
  return `Aplikasi memakai login dengan peran: ${roles}. Peran \`${spec.auth.roles[0]}\` mengelola pengguna.`;
}

export function renderReadme(spec: SpecDefinition): string {
  const authOn = spec.auth.mode !== 'none';
  const entityRows = spec.databaseSchema
    .map((e) => `| ${entityLabel(e)} | \`/api/${resourcePath(e.name)}\` | ${e.fields.map((f) => `\`${f.name}\``).join(', ')} |`)
    .join('\n');
  const customRows = spec.apiEndpoints.length
    ? spec.apiEndpoints.map((e) => `| \`${e.method}\` | \`${e.path}\` | ${e.description || '-'} |`).join('\n')
    : '| - | - | Tidak ada endpoint khusus |';

  return `# ${spec.title}

${spec.summary}

${describeRoles(spec)}

## Menjalankan

Prasyarat: Node.js 20.11 atau lebih baru.

\`\`\`bash
npm install
cp .env.example .env     # lalu isi nilainya${authOn ? '\n                         # JWT_SECRET dan SEED_ADMIN_PASSWORD wajib diisi' : ''}
npm run db:setup         # membuat tabel dan mengisi data awal
npm start
\`\`\`

Aplikasi berjalan di \`http://localhost:3000\` (ubah dengan \`PORT\`).${authOn ? '\n\nMasuk dengan email dari `SEED_ADMIN_EMAIL` dan kata sandi dari `SEED_ADMIN_PASSWORD`, lalu segera ganti kata sandi di menu Akun.' : ''}

## Perintah

| Perintah | Fungsi |
| --- | --- |
| \`npm start\` | Menjalankan server |
| \`npm run dev\` | Server dengan muat ulang otomatis |
| \`npm run db:setup\` | Membuat skema database lalu mengisi data awal |
| \`npm test\` | Menjalankan seluruh tes |
| \`npm run test:coverage\` | Tes dengan laporan cakupan |
| \`npm run lint\` | Memeriksa kualitas kode |
| \`npm run backup\` | Membuat cadangan database sekarang |
| \`npm run restore -- <file>\` | Memulihkan database dari cadangan (hentikan server dulu) |

## Konfigurasi

Semua pengaturan lewat variabel lingkungan. Daftar lengkap dan penjelasannya ada di \`.env.example\`.

## API

Semua respons berformat JSON. Sukses: \`{ "data": ... }\`, daftar juga membawa \`"meta"\` (halaman, batas, total). Gagal: \`{ "error": { "code", "message", "details" } }\`.

Setiap data punya endpoint standar: \`GET /\` (daftar, dengan \`?page\`, \`?limit\`, \`?q\`, \`?sort=kolom:asc|desc\`), \`GET /:id\`, \`POST /\`, \`PATCH /:id\`, \`DELETE /:id\`.

| Data | Alamat | Kolom |
| --- | --- | --- |
${entityRows}

Endpoint khusus:

| Metode | Alamat | Fungsi |
| --- | --- | --- |
${customRows}

\`GET /api/health\` memeriksa server dan database, cocok untuk pemantauan.${authOn ? '\n\nLogin: `POST /api/auth/login`, `POST /api/auth/logout`, `GET /api/auth/me`, `POST /api/auth/change-password`.' : ''}

## Cadangan dan pemulihan

Server membuat cadangan otomatis setiap \`BACKUP_INTERVAL_HOURS\` jam ke folder \`BACKUP_DIR\` dan menyimpan \`BACKUP_KEEP\` salinan terakhir. Cadangan memakai snapshot SQLite yang konsisten, aman dibuat saat server berjalan.

Memulihkan: hentikan server, jalankan \`npm run restore -- backups/<nama-file>.db\`, lalu nyalakan lagi. Salinan database sebelumnya disimpan dengan akhiran \`.before-restore\`.

Salin juga folder cadangan ke tempat lain (bukan hanya di server yang sama).

## Keamanan

- Kebijakan CSP ketat, tanpa skrip atau gaya inline.
- Semua masukan divalidasi di server dengan skema Zod; keluaran di antarmuka disusun lewat DOM, tidak lewat string HTML.
- Akses database hanya lewat Prisma (query berparameter).${authOn ? '\n- Kata sandi disimpan dengan bcrypt, sesi memakai cookie HttpOnly, percobaan masuk dibatasi, permintaan lintas situs ditolak.' : ''}
- Set \`TRUST_PROXY=true\`${authOn ? ' dan `COOKIE_SECURE=true`' : ''} saat berjalan di belakang HTTPS.

## Struktur

\`\`\`
server.js            titik masuk
src/app.js           middleware dan rute dasar
src/routes/          satu berkas per data, plus custom/ untuk logika khusus
src/lib/             crud, validasi, error, backup
prisma/              skema database dan seed
public/              antarmuka (ES modules, tanpa langkah build)
tests/               tes API
\`\`\`
`;
}
