# Ethermind AI App Builder: Backend

Backend multi-agent untuk platform **Chat → Aplikasi Siap Launch** (lihat PRD di folder induk). Klien mengobrol, planner menyusun spesifikasi, lalu agent membangun aplikasi nyata (Express + Prisma/SQLite + UI tanpa build step), mengujinya, dan menjalankannya.

Tidak ada simulator dan tidak ada hasil bawaan: tanpa API key model, chat dan build ditolak dengan pesan jelas. Sebuah build hanya berstatus `completed` setelah **semua gerbang lolos terhadap aplikasi yang benar-benar berjalan**.

## Alur

1. **Chat** (`POST /api/projects/:id/messages`) langsung dibalas `202` dengan balasan `pending`; planner bekerja di latar belakang dan UI memuat balasan lewat `GET /messages`. Kegagalan AI menjadi pesan `error` yang bisa dikirim ulang, bukan chat yang macet.
2. **Spesifikasi** divalidasi (Zod + aturan semantik). Spek cacat dikembalikan ke planner beserta daftar masalahnya (3 percobaan), tidak pernah diganti spek bawaan.
3. **Build** (`POST /spec/approve`): bagian yang bisa ditentukan dari spek dibuat oleh kode (skema Prisma, API CRUD, layar CRUD, tema, tes CRUD, dokumentasi). Agent hanya menulis yang butuh pertimbangan: data contoh, endpoint logika bisnis, halaman khusus, dan tesnya.
4. **Gerbang** (maks. `MAX_REMEDIATION_ROUNDS` putaran perbaikan otomatis, dengan keluaran lint/tes yang sebenarnya):

   | Gerbang | Yang dijalankan |
   | --- | --- |
   | `build_check` | file wajib, `npm install`, `prisma validate` dan `db push`, seed, aplikasi termuat |
   | `lint_typecheck` | ESLint (termasuk larangan `innerHTML`, `alert`, `eval`, catch kosong) |
   | `unit_test` | vitest + coverage (minimum `GATE_MIN_COVERAGE`, default 70%), deteksi tes tanpa assertion |
   | `security_scan` | rahasia tertanam, SQL mentah, XSS, `npm audit` |
   | `launch_checklist` | README, `.env.example` lengkap, backup benar-benar dijalankan |
   | `ai_review` | reviewer membaca kode tulisan agent terhadap kontrak spek |
   | `smoke_test` | server dijalankan, lalu health, halaman, setiap skrip, dan setiap endpoint dipanggil lewat HTTP |

   Bila masih gagal, job menjadi `needs_review` (diteruskan ke operator), bukan "selesai".
   **Belum ada gerbang E2E browser (Playwright)**; PRD menyebutnya, tetapi membutuhkan image browser di sandbox.
5. **Revisi** (`POST /revisions`): planner menerapkan permintaan ke spek yang ada; hanya bagian buatan tangan yang berubah yang ditulis ulang, lalu seluruh gerbang dijalankan lagi. Data pratinjau bersifat sementara (database dibuat ulang tiap build).

## Menjalankan

```bash
cd backend
npm install
cp .env.example .env        # isi NVIDIA_API_KEY, lihat bagian Konfigurasi
npx prisma db push          # dev. Produksi: npx prisma migrate deploy
npm run dev                 # http://localhost:4000
npm test                    # tes cepat (tanpa jaringan)
npm run test:build          # build penuh sungguhan, butuh jaringan dan beberapa menit
```

## Memilih model

ID model harus ada di endpoint Anda (`GET {base}/models`) dan **katalog NIM gratis tidak stabil**: ada model yang terdaftar tetapi menggantung atau kehabisan kuota, dan statusnya berubah. Pilihan default berdasarkan pengukuran (kecepatan token pertama, total waktu, JSON valid):

| Peran | Model | Catatan |
| --- | --- | --- |
| Reviewer | `nvidia/nemotron-3-ultra-550b-a55b` | paling kuat, tetapi ~30 token/dtk; keluarannya kecil |
| Planner, orkestrator, coder | `nvidia/nemotron-3-super-120b-a12b` | token pertama ~0,7 dtk, ~2x lebih cepat dari Ultra. Spek 3 ribu token memakan ~45 dtk di Super vs ~100 dtk di Ultra |
| Chat cepat | `poolside/laguna-xs-2.1` | tercepat saat tersedia, tetapi kadang 503 |
| Cadangan | `MODEL_FALLBACKS` | dicoba berurutan |

Ketahanan: balasan di-*stream*; model yang tidak mengirim token pertama dalam `LLM_FIRST_TOKEN_TIMEOUT_MS` (chat cepat: `LLM_FAST_FIRST_TOKEN_TIMEOUT_MS`) atau diam lebih dari `LLM_IDLE_TIMEOUT_MS` ditinggalkan. Model yang baru gagal dilewati beberapa menit (*circuit breaker*; 404/410 selama 1 jam). Untuk chat, model cadangan ikut berlomba setelah `LLM_HEDGE_AFTER_MS`. Ukur ulang bila provider berubah.

## Konfigurasi produksi

Server **menolak start** bila:

- `JWT_SECRET` bawaan atau kurang dari 32 karakter
- tidak ada `NVIDIA_API_KEY`/`OPENAI_API_KEY`
- `CORS_ORIGINS` kosong atau berisi `*`
- `SANDBOX_MODE=local` tanpa `ALLOW_UNSAFE_LOCAL_SANDBOX=true`
- `DEMO_LOGIN=true`

Lainnya:

- **Sandbox**: produksi memakai Docker (`npm run sandbox:build` sekali; tanpa root-cap, batas memori/CPU/proses, jaringan mati saat tes). Mode `local` menjalankan kode hasil model di host dengan environment yang disaring (tanpa secret platform) dan hanya untuk pengembangan. **Jalur Docker sudah ditulis tetapi belum diuji di lingkungan ini** (daemon Docker tidak berjalan).
- **Admin pertama**: set `BOOTSTRAP_ADMIN_EMAIL` dan `BOOTSTRAP_ADMIN_PASSWORD` (min. 12 karakter). Pendaftaran publik selalu membuat `client`; operator dan admin dibuat admin lewat `POST /api/auth/staff`. `PUBLIC_REGISTRATION=false` menutup pendaftaran.
- **Database**: `prisma migrate deploy` (baseline di `prisma/migrations/0_init`). Database dev yang dibuat dengan `db push` bisa ditandai: `prisma migrate resolve --applied 0_init`.
- **Antrean**: job yang menunggu diantrekan ulang saat start; job yang sedang berjalan saat server mati ditandai `failed` agar bisa diulang.
- Di belakang proxy: `TRUST_PROXY=true`.
- Pembersihan disk workspace lama (`storage/workspaces`) **belum otomatis**.

## Keamanan

- Registrasi tidak bisa memilih peran; login dibatasi laju; token diverifikasi ke database tiap request.
- Job, proyek, pesan, spek, dan ekspor hanya bisa diakses pemiliknya (operator/admin melihat semua).
- Login SSO hanya menerima `idToken` Firebase yang terverifikasi; tidak ada fallback ke email dari klien. Tombol demo hanya hidup di `NODE_ENV=development`.
- Rute `/api/firebase/*` khusus admin. Tes tidak pernah menyentuh Firebase.

## Struktur

```
backend/
├── prisma/               skema platform dan migrasi
├── skills/               aturan kualitas yang ditambahkan ke prompt tiap agent (SKILLS_ENABLED)
├── sandbox/Dockerfile    image tempat kode klien dipasang, dites, dijalankan
├── templates/app         aplikasi klien (nyata, bisa dites sendiri); app-auth = tambahan bila ada login
├── src/services/
│   ├── agents/           planner, database, backend, frontend, tester, reviewer, remediation, orchestrator
│   ├── generation/       spek → skema, rute, halaman, tes, dokumentasi
│   ├── spec/             skema spek, validasi, sistem desain (kontras WCAG otomatis)
│   ├── llm/              router: streaming, failover, hedging, retry JSON, anggaran token
│   ├── quality-gate/     checker dan smoke test
│   ├── sandbox/          Docker atau lokal; file manager anti path traversal
│   └── deployment/       pratinjau (aplikasi klien berjalan penuh), ekspor ZIP
└── tests/                tes cepat; tests/slow = build penuh
```

## Groq dan batas rate limit

Model yang ditulis `groq:<id>` (misalnya `groq:openai/gpt-oss-120b`) berjalan di Groq; tanpa prefix berjalan di NVIDIA NIM. Isi `GROQ_API_KEY` untuk mengaktifkannya. Tanpa kunci, model Groq dilewati dan rantai failover memakai NIM.

Setiap panggilan ke Groq melewati pembatas (`src/services/llm/rateLimiter.ts`) yang menjaga RPM, TPM, RPD, dan TPD per model:

- Panggilan ditahan secukupnya, berurutan, alih-alih dikirim lalu ditolak 429.
- Panjang balasan dibatasi agar muat di sisa TPM. Bila tidak ada ruang untuk balasan yang berguna (kurang dari 1.500 token), model dilewati.
- Bila harus menunggu lebih dari `GROQ_MAX_QUEUE_MS`, panggilan pindah ke model berikutnya (NIM), jadi build tetap jalan saat batas Groq tercapai.
- 429 dari Groq memblokir model itu selama `retry-after`, tanpa menandainya rusak.
- TPM yang dilaporkan Groq di header `x-ratelimit-limit-tokens` dipakai bila lebih rendah dari konfigurasi.

`GROQ_PLAN=free` (8K TPM, 200K TPD) hanya cukup untuk chat: satu prompt build lebih besar dari 8K token. `GROQ_PLAN=developer` (250K TPM) cocok untuk build. Angka persis akun ada di halaman Limits Groq; timpa dengan `GROQ_RPM/TPM/RPD/TPD`.
