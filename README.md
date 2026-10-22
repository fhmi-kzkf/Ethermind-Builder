# Ethermind AI App Builder

> **Platform Chat → Aplikasi Siap Launch.** Klien menjelaskan aplikasi lewat chat; sistem multi-agent AI menyusun spesifikasi, membangun frontend + backend + database, menguji, lalu menjalankan aplikasinya secara live dengan link pratinjau dan kode yang bisa diunduh.

Repositori monorepo milik **Ethermind Agency** berisi dua aplikasi utama:

| Bagian | Stack | Port dev |
| --- | --- | --- |
| [`backend/`](backend/) | Node.js 22 · Express · TypeScript · Prisma/SQLite · Firebase Admin · pipeline multi-agent (OpenAI-compatible: NVIDIA NIM / Groq) | `http://localhost:4000` |
| [`frontend/`](frontend/) | React 19 · TypeScript · Vite · Firebase Client SDK (SSO) | `http://localhost:3000` |

---

## Daftar Isi

- [Ringkasan](#ringkasan)
- [Fitur Utama](#fitur-utama)
- [Arsitektur Singkat](#arsitektur-singkat)
- [Struktur Repositori](#struktur-repositori)
- [Prasyarat](#prasyarat)
- [Menjalankan Secara Lokal](#menjalankan-secara-lokal)
- [Konfigurasi Environment](#konfigurasi-environment)
- [Alur Penggunaan](#alur-penggunaan)
- [Quality Gates](#quality-gates)
- [Skrip yang Tersedia](#skrip-yang-tersedia)
- [Testing](#testing)
- [Dokumentasi Lanjutan](#dokumentasi-lanjutan)
- [Status & Catatan Produksi](#status--catatan-produksi)
- [Keamanan](#keamanan)
- [Lisensi](#lisensi)

---

## Ringkasan

Platform ini dibangun sesuai PRD *"Platform AI App Builder (Chat → Aplikasi Siap Launch)"* (lihat folder induk). Proposisinya sederhana: klien bilang *"saya mau aplikasi manajemen stok toko"*, lalu menerima aplikasi yang **sudah live dan lolos semua gerbang kualitas** — bukan prototipe setengah jadi.

Prinsip penting yang berlaku di seluruh kode:

- **Tidak ada simulator, tidak ada hasil bawaan.** Tanpa API key model, chat dan build ditolak dengan pesan jelas.
- **Build hanya berstatus `completed` setelah semua gerbang lolos terhadap aplikasi yang benar-benar berjalan.**
- Spek cacat dikembalikan ke planner untuk diperbaiki (maks. 3 percobaan), tidak pernah diganti spek dummy.
- Bila gerbang tetap gagal setelah `MAX_REMEDIATION_ROUNDS`, job menjadi `needs_review` dan diteruskan ke operator.

## Fitur Utama

- **Chat dengan klarifikasi** — planner mengajukan pertanyaan (pilihan tap) tentang pengguna, fitur, dan data sebelum menyusun spesifikasi.
- **Spesifikasi tervalidasi** — Zod + aturan semantik + sistem desain dengan kontras WCAG otomatis.
- **Build aplikasi nyata** — Express + Prisma (SQLite) + UI responsif, lengkap dengan API CRUD, tes, seed, README, dan `.env.example`.
- **Quality gates** — build check, lint/typecheck, unit test + coverage minimum, security scan, launch checklist, AI review, dan smoke test HTTP nyata.
- **Pratinjau live** — aplikasi klien dijalankan penuh di port pratinjau; kredensial awal dikirim ke chat.
- **Revisi lanjutan** — permintaan revisi diterapkan ke spek dan kode yang sudah ada, lalu seluruh gerbang dijalankan ulang.
- **Ekspor ZIP** — kode aplikasi klien dapat diunduh beserta dokumentasinya.
- **Dashboard operator/admin** — metrik, semua job, dan intervensi manual pada job yang gagal.
- **SSO Firebase** — login Google/GitHub di frontend; `idToken` diverifikasi di backend, tanpa fallback email klien.
- **Rate limit inferensi** — model `groq:*` dibatasi RPM/TPM/RPD/TPD per model dengan pemindahan otomatis ke NIM.

## Arsitektur Singkat

```
 ┌─────────────────────────── FRONTEND (React 19 + Vite) ───────────────────────────┐
 │  Hero / TemplateGallery → ProjectBuilder (chat + progres) → ProjectDashboard     │
 │  AuthModal (email + Firebase SSO Google/GitHub)      AdminDashboard (operator)   │
 └───────────────────────────────┬──────────────────────────────────────────────────┘
                                 │  REST + SSE (/api, proxied oleh Vite dev)
 ┌───────────────────────────────▼──────────────────────────────────────────────────┐
 │                     BACKEND (Express + TypeScript, port 4000)                     │
 │                                                                                   │
 │  Auth & RBAC ── Project ── Chat ── Spec ── Revision ── Export ── Job               │
 │        │                                                                          │
 │        │            ┌──────────── AGENT PIPELINE (queue) ────────────┐            │
 │        │            │ Planner → Generator → Tester → Reviewer        │            │
 │        │            │ → Remediation (loop sampai gates lolos)        │            │
 │        │            └───────┬───────────────────────┬────────────────┘            │
 │        │                    │                       │                             │
 │        │            LLM Router (NIM/Groq,          Sandbox (Docker / local)      │
 │        │            failover, hedging,             — jalankan build, tes,        │
 │        │            circuit breaker)               smoke test klien              │
 │        │                    │                       │                             │
 │        │            Quality Gates (7 gerbang)       Preview Manager              │
 │        │                    └────────┬──────────────┘   Storage (workspaces/     │
 │        │                             │                    exports/)             │
 │        ▼                             ▼                                          │
 │  SQLite (Prisma) ◄──── Firestore (sync metadata, opsional)                       │
 └───────────────────────────────────────────────────────────────────────────────────┘
```

Detail lengkap: [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md).

## Struktur Repositori

```
Ethermind_builder/
├── backend/                 # API + pipeline multi-agent
│   ├── src/
│   │   ├── config/          # env & validasi konfigurasi startup
│   │   ├── controllers/     # project, chat, spec, revision, job, export, admin, auth
│   │   ├── db/              # Prisma client
│   │   ├── middleware/      # auth, errorHandler, rateLimiter, validator (Zod)
│   │   ├── routes/          # auth, project, job, admin, firebase
│   │   ├── services/
│   │   │   ├── agents/      # planner, backend, frontend, database, tester, reviewer, remediation, orchestrator
│   │   │   ├── generation/  # spek → skema Prisma, rute CRUD, halaman, tes, dokumen
│   │   │   ├── spec/        # skema spek, validasi semantik, design system
│   │   │   ├── llm/         # router: streaming, failover, hedging, rate limit, pricing
│   │   │   ├── quality-gate/# checker + smoke test
│   │   │   ├── sandbox/     # Docker atau lokal; file manager anti path traversal
│   │   │   ├── queue/       # job queue, resume, resumable
│   │   │   ├── sse/         # SSE manager (progres build real-time)
│   │   │   ├── deployment/  # preview manager + ekspor ZIP
│   │   │   ├── firebase/    # admin SDK + Firestore
│   │   │   └── skills/      # aturan kualitas ke prompt agent
│   │   ├── app.ts
│   │   └── server.ts
│   ├── prisma/              # skema + migrasi
│   ├── sandbox/             # Dockerfile image sandbox
│   ├── skills/              # anti-slop, frontend.md, backend.md, database.md, testing.md, dll.
│   ├── templates/           # app (starter klien), app-auth (varian dengan login)
│   ├── tests/               # tes cepat (vitest); tests/slow = build penuh
│   └── .env.example
├── frontend/                # SPA React + Vite
│   ├── src/
│   │   ├── components/      # Hero, Navbar, ProjectBuilder, AuthModal, dll.
│   │   ├── pages/           # Templates, Pricing, Security, Customers, Community
│   │   ├── services/        # api.ts (REST client), firebase.ts (SSO)
│   │   └── types/
│   └── .env.example
├── reference/               # hasil crawling referensi (lovable.dev)
├── docs/                    # dokumentasi teknis (arsitektur, API, deploy, contributing)
├── DESIGN.md                # style reference antarmuka (palet, tipografi, komponen)
└── PRD Platform AI App Builder …md   # PRD sumber kebutuhan
```

## Prasyarat

| Alat | Versi | Keterangan |
| --- | --- | --- |
| Node.js | ≥ 20 (disarankan 22) | backend dan frontend |
| npm | ≥ 10 | manajer paket |
| Docker | opsional, untuk produksi | image sandbox `ethermind-sandbox:node22` |
| API key model | wajib | `NVIDIA_API_KEY` (NIM) dan/atau `GROQ_API_KEY` |

## Menjalankan Secara Lokal

### 1) Backend

```bash
cd backend
npm install
cp .env.example .env        # isi NVIDIA_API_KEY (lihat bagian Konfigurasi Environment)
npx prisma db push          # dev. Produksi: npx prisma migrate deploy
npm run dev                 # http://localhost:4000
```

Cek kesehatan: `curl http://localhost:4000/api/health` → `{"status":"ok", "llmConfigured":true, ...}`

### 2) Frontend

```bash
cd frontend
npm install
cp .env.example .env        # opsional: isi VITE_FIREBASE_* untuk SSO
npm run dev                 # http://localhost:3000 (proxy /api → :4000)
```

`npm run dev -- --host 0.0.0.0` bila perlu diakses dari device lain (mis. uji responsif mobile di jaringan LAN).

Tanpa env `VITE_FIREBASE_*`, frontend tetap berjalan normal memakai autentikasi email/password dari REST API backend.

## Konfigurasi Environment

Salin `backend/.env.example` → `backend/.env` dan `frontend/.env.example` → `frontend/.env`, lalu sesuaikan. Variabel kunci backend:

| Variabel | Wajib | Keterangan |
| --- | --- | --- |
| `NVIDIA_API_KEY` | ✅ | API key NVIDIA NIM (endpoint OpenAI-compatible). Server **menolak start** tanpa ini (atau `OPENAI_API_KEY`). |
| `MODEL_PLANNER` / `MODEL_ORCHESTRATOR` / `MODEL_CODER` / `MODEL_REVIEWER` / `MODEL_FAST` | – | ID model per peran agent. Model `groq:<id>` berjalan di Groq; tanpa prefix di NIM. |
| `MODEL_FALLBACKS` | – | Daftar model dicoba berurutan saat model utama timeout/error. |
| `GROQ_API_KEY` / `GROQ_PLAN` | – | Mengaktifkan model Groq; `free` cukup untuk chat, `developer` untuk build. |
| `JWT_SECRET` | ✅ | Minimal 32 karakter, bawaan ditolak. |
| `DATABASE_URL` | ✅ | `file:./dev.db` (SQLite) — ORM dipilih agar bisa pindah ke PostgreSQL tanpa menulis ulang. |
| `CORS_ORIGINS` | ✅ (produksi) | Whitelist origin; kosong/`*` ditolak di produksi. |
| `SANDBOX_MODE` | – | `docker` (produksi, `npm run sandbox:build` dahulu) atau `local` (dev, butuh `ALLOW_UNSAFE_LOCAL_SANDBOX=true`). |
| `MAX_CONCURRENT_JOBS`, `DEFAULT_TOKEN_BUDGET`, `MAX_REMEDIATION_ROUNDS` | – | Batas antrean, anggaran token, dan putaran perbaikan otomatis. |
| `FIREBASE_*` | – | Service account (file JSON atau env vars) untuk Firestore/SSO admin. |
| `BOOTSTRAP_ADMIN_EMAIL` / `BOOTSTRAP_ADMIN_PASSWORD` | ✅ (produksi) | Admin pertama (password min. 12 karakter). |
| `DEMO_LOGIN` | – | `true` hanya boleh di `NODE_ENV=development`; produksi menolak start. |

Versi lengkap dengan komentar ada di [`backend/.env.example`](backend/.env.example).

**Pilihan model default (berdasarkan pengukuran):**

| Peran | Model | Catatan |
| --- | --- | --- |
| Planner, orkestrator, coder | `nvidia/nemotron-3-super-120b-a12b` | token pertama ~0,7 dtk; spek ~45 dtk |
| Reviewer | `nvidia/nemotron-3-ultra-550b-a55b` | paling kuat, ~30 token/dtk |
| Chat cepat | `poolside/laguna-xs-2.1` | tercepat saat tersedia, kadang 503 |
| Cadangan | `MODEL_FALLBACKS` | dicoba berurutan |

ID model harus ada di endpoint provider (`GET {base}/models`); katalog NIM gratis tidak stabil. Lihat [backend README](backend/README.md#memilih-model) untuk detail ketahanan (first-token timeout, idle timeout, hedging, circuit breaker).

## Alur Penggunaan

1. **Login/registrasi** → peran: registrasi publik selalu membuat `client`; operator/admin hanya dibuat oleh admin lewat `POST /api/auth/staff`.
2. **Ceritakan aplikasi** — dari Hero prompt, template, atau proyek baru; builder otomatis mengirim pesan pertama.
3. **Klarifikasi & spesifikasi** — planner bertanya (pilihan tap), lalu menampilkan spek ringkas: fitur, halaman, tabel data.
4. **Setujui spesifikasi** (`Approve`) → job build masuk antrean dengan progres real-time: *"membuat skema database"*, *"menjalankan tes"*, dst.
5. **Gerbang kualitas berjalan** — lihat tabel di bawah; bila gagal, hasil `needs_review` dan operator harus mengintervensi.
6. **Terima aplikasi live** — link pratinjau + kredensial awal muncul di chat. Kode dapat diunduh (`GET /api/projects/:id/export`).
7. **Revisi lanjutan** — *"tambah fitur laporan"* diterapkan ke kode proyek yang ada, lalu seluruh gerbang dijalankan ulang.

## Quality Gates

Setiap build wajib melewati tujuh gerbang:

| # | Gerbang | Yang dijalankan |
| --- | --- | --- |
| 1 | `build_check` | File wajib, `npm install`, `prisma validate` + `db push`, seed, aplikasi termuat |
| 2 | `lint_typecheck` | ESLint termasuk larangan `innerHTML`, `alert`, `eval`, catch kosong |
| 3 | `unit_test` | Vitest + coverage min. `GATE_MIN_COVERAGE` (default 70%); deteksi tes tanpa assertion |
| 4 | `security_scan` | Rahasia tertanam, SQL mentah, XSS, `npm audit` |
| 5 | `launch_checklist` | README, `.env.example` lengkap, backup benar-benar dijalankan |
| 6 | `ai_review` | Reviewer membaca kode agent terhadap kontrak spek |
| 7 | `smoke_test` | Server klien dijalankan; health, halaman, setiap endpoint dipanggil lewat HTTP |

> **Belum ada gerbang E2E browser (Playwright)** — disebut di PRD, membutuhkan image browser di sandbox. Dijelaskan lebih lanjut di `docs/ARCHITECTURE.md`.

## Skrip yang Tersedia

**Backend** (`cd backend`):

| Skrip | Fungsi |
| --- | --- |
| `npm run dev` | Dev server (tsx watch) di :4000 |
| `npm run build` / `npm start` | Compile `tsc` → `dist/server.js` |
| `npm test` | Tes cepat (tanpa jaringan) |
| `npm run test:build` | Build penuh sungguhan; butuh jaringan + beberapa menit |
| `npm run prisma:generate` / `prisma:migrate` / `prisma:deploy` / `prisma:studio` | Workflow database |
| `npm run sandbox:build` | Bangun image `ethermind-sandbox:node22` |

**Frontend** (`cd frontend`):

| Skrip | Fungsi |
| --- | --- |
| `npm run dev` | Dev server di :3000 (proxy `/api` ke :4000) |
| `npm run build` | `tsc -b` + build produksi Vite |
| `npm run lint` | Oxlint |
| `npm run preview` | Sajikan hasil build produksi lokal |

## Testing

```bash
# Backend
cd backend
npm test                    # tes cepat: unit/integrasi tanpa jaringan
npm run test:build          # build penuh + seluruh gerbang (butuh API key & waktu)
```

Backend punya dua konfigurasi vitest: `vitest.config.ts` (cepat) dan `vitest.slow.config.ts` (build end-to-end). Frontend saat ini memakai lint (`npm run lint`) dan typecheck (`npm run build` menjalankan `tsc -b`); belum ada test runner UI.

## Dokumentasi Lanjutan

| Dokumen | Isi |
| --- | --- |
| [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) | Arsitektur sistem, pipeline agent, LLM router, sandbox, data model |
| [`docs/API.md`](docs/API.md) | Referensi endpoint REST + SSE, format error, contoh request |
| [`docs/DEPLOYMENT.md`](docs/DEPLOYMENT.md) | Panduan produksi: env wajib, Docker sandbox, migrasi, checklist |
| [`docs/CONTRIBUTING.md`](docs/CONTRIBUTING.md) | Konvensi kode, branch, commit, workflow PR |
| [`backend/README.md`](backend/README.md) | Detail backend: pilih model, Groq rate limit, keamanan |
| [`DESIGN.md`](DESIGN.md) | Style reference UI (palet parchment, pill buttons, tipografi 480) |
| [PRD](<PRD Platform AI App Builder (Chat  Aplikasi Siap Launch).md>) | Kebutuhan sumber, user stories, metrik |

## Status & Catatan Produksi

Hal yang **sudah** ada versus yang **belum** (per dokumen internal):

| Status | Item |
| --- | --- |
| ✅ | 7 quality gates mesin nyata; smoke test HTTP penuh |
| ✅ | Job queue dengan resume saat restart; job `failed` dapat diulang |
| ✅ | Rate limiter Groq (RPM/TPM/RPD/TPD) + failover ke NIM |
| ✅ | Sandbox lokal dengan environment tersaring; jalur Docker ditulis |
| 🔶 | **Sandbox Docker belum diuji** (daemon tidak berjalan saat penulisan) |
| 🔶 | **Gerbang E2E Playwright belum ada** |
| 🔶 | **Pembersihan disk `storage/` belum otomatis** |
| 🔶 | **Deployment ke cloud nyata belum dilakukan** — lihat [`docs/DEPLOYMENT.md`](docs/DEPLOYMENT.md) |

## Keamanan

- Server produksi menolak start bila `JWT_SECRET` lemah, API key model kosong, `CORS_ORIGINS` kosong/`*`, `SANDBOX_MODE=local` tanpa `ALLOW_UNSAFE_LOCAL_SANDBOX=true`, atau `DEMO_LOGIN=true`.
- Registrasi tidak bisa memilih peran; login dibatasi laju; token diverifikasi ke database tiap request.
- Resource (job, proyek, pesan, spek, ekspor) hanya bisa diakses pemiliknya; operator/admin melihat semua.
- SSO Firebase hanya menerima `idToken` terverifikasi — tidak ada fallback ke email klien.
- Rute `/api/firebase/*` khusus admin; tes tidak pernah menyentuh Firebase.
- Kode klien dijalankan di sandbox terisolasi (Docker di produksi: tanpa root, batas memori/CPU/proses, jaringan mati saat tes).

Jangan pernah commit `serviceAccountKey.json`, `.env`, atau file `*.db` — semuanya sudah di-ignore; tetap periksa `git status` sebelum commit.

## Lisensi

MIT — milik Ethermind Agency. Lihat `package.json` di masing-masing paket.
