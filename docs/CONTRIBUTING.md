# Panduan Kontribusi — Ethermind AI App Builder

## Filosofi

Repositori ini berdiri di atas prinsip yang mudah dilanggar tanpa disadari oleh perubahan baru. Setiap PR wajib menjaga:

1. **Tidak ada simulator atau hasil fiktif** — tanpa API key model, chat dan build harus tetap ditolak; tiap gerbang menguji hal yang nyata.
2. **`completed` hanya bila semua gerbang lolos** — jangan pernah jalan pintas status job.
3. **Generator kode lebih diutamakan daripada model** — bila keluaran bisa diturunkan dari spek, tulis kode deterministik (`services/generation/`), bukan prompt.
4. **Bagian sensitif tidak punya fallback** — SSO tidak pernah memakai email dari klien; sandbox tidak mengetahui secret platform.

## Setup Dev

```bash
cd backend
npm install
cp .env.example .env          # isi NVIDIA_API_KEY
npx prisma db push
npm run dev                   # :4000

cd ../frontend
npm install
cp .env.example .env
npm run dev                   # :3000 (proxy /api ke :4000)
```

## Alur Kerja Git

1. Branch dari `main` dengan nama deskriptif: `feat/chat-attachments`, `fix/smoke-timeout`, `docs/api-revision`.
2. Satu PR = satu topik. Sebutkan gerbang atau modul yang disentuh di deskripsi.
3. Sebelum minta review, pastikan semua ini lulus:

```bash
cd backend && npm test          # tes cepat tanpa jaringan
npm run build                   # tsc bersih
cd ../frontend
npm run build                   # tsc -b + vite build
npm run lint                    # oxlint
```

4. Bila mengubah gerbang, smoke test, validator, atau kode generator: jalankan minimal satu `npm run test:build` di backend (butuh jaringan dan API key, berlangsung beberapa menit).

## Konvensi Kode

- **TypeScript ketat**: `tsc` harus bersih; hindari `any` tersebar bebas, gunakan tipe dari `src/types`.
- **Validasi via Zod**: endpoint baru mendefinisikan skema dan memasang `validateBody(schema)` — tidak ada parsing manual.
- **Kepemilikan resource**: tiap endpoint resource memeriksa pemilik; peran dibatasi lewat `requireRole`.
- **Error tercentral**: tulis lewat `express-async-errors` atau `next(err)`; format error dari `errorHandler.ts`.
- **Path aman**: semua penulisan file ke filesystem wajib lewat `services/sandbox/fileManager.ts` (anti path traversal).
- **Menyentuh gerbang = jalankan gerbang**: perubahan pada checker, smoke test, atau autofix memerlukan bukti lulus gerbang pada build nyata.
- **UI mengikuti `DESIGN.md` (root)**: palet parchment (`#fcfbf8` / `#f7f4ed`), border `#eceae4`, pill 9999px, satu keluarga font, letter-spacing `-0.025em`.
- **Aturan kualitas agent**: teks untuk prompt agent diletakkan rapi di `backend/skills/`, dipakai otomatis saat `SKILLS_ENABLED=true`.

## Contoh Commit Message

Konvensional ringkas, kata kerja imperatif:

```text
feat: tambah gerbang deteksi dark-pattern copy
fix: smoke test tidak menggantung saat endpoint 404
docs: revisi aturan Groq di backend README
refactor: pindahkan ketahanan streaming ke sseManager
test: tambahkan kasus verifikasi token tiap request
chore: upgrade prisma ke 5.22.1
```

## Fokus Review

- Apakah perubahan membuat status `completed` bisa dicapai tanpa bukti nyata?
- Apakah endpoint baru menjaga kepemilikan, dan apakah itu diuji?
- Apakah perubahan menyentuh sandbox atau pembatasan eksekusi? Jelaskan alur amannya.
- Apakah variabel env/dependensi baru tercatat di `.env.example` dan di dokumentasi?

## Tugas yang Dibuka untuk Kontributor

- Uji sandbox Docker end-to-end minimal satu kali.
- Tambahkan gerbang E2E (Playwright) di image sandbox browser.
- Buat pembersihan otomatis `storage/workspaces`.
- Tambahkan test runner di frontend (Vitest) — saat ini hanya lint dan typecheck.
