# Arsitektur — Ethermind AI App Builder

Dokumen ini menjelaskan bagaimana sistem disusun, mengapa tiap keputusan diambil, dan di mana kode tertentu berada. Untuk cara memakai lihat [README](../README.md); untuk endpoint lihat [API.md](API.md).

---

## 1. Gambaran Umum

Sistem terdiri dari dua aplikasi dan satu direktori referensi:

```
frontend/  React 19 + Vite SPA            → UI chat, dashboard, builder, admin
backend/   Express + TypeScript API       → pipeline multi-agent + quality gates
reference/ hasil crawl lovable.dev        → bahan riset antarmuka (tidak di-serve)
```

Kerangka keputusan utama (dari PRD):

- **SQLite via Prisma** dulu supaya bisa jadi **PostgreSQL** tanpa menulis ulang kode.
- **Endpoint OpenAI-compatible** (NVIDIA NIM dulu, Groq opsional) dengan router model-agnostic: ganti model = ganti konfigurasi.
- **Satu stack standar** untuk aplikasi klien (Express + Prisma/SQLite + UI tanpa build step) sehingga generator, template, dan tes konsisten.

## 2. Backend — Lapisan HTTP

```
src/
├── server.ts / app.ts      bootstrap, helmet, CORS whitelist, trust proxy
├── routes/index.ts         /api/health, /api/models, mount sub-route
├── middleware/
│   ├── auth.ts             Bearer JWT, verifikasi ke DB tiap request
│   ├── validator.ts        validasi body via Zod
│   ├── rateLimiter.ts      limiter in-memory per prefix (auth 10 req/15 mnt)
│   └── errorHandler.ts     response error tercentral + express-async-errors
└── controllers/            satu controller per domain resource
```

Semua endpoint hidup di `/api`. Format respons mengikuti pola `{ success, data }`; error `{ error, details? }`. Akses menghormati kepemilikan: job/proyek/pesan/spek/ekspor hanya untuk pemilik; peran `operator`/`admin` melihat semua.

## 3. Data Model (Prisma)

Skema: `backend/prisma/schema.prisma`; baseline migrasi `prisma/migrations/0_init`.

| Model | Peran |
| --- | --- |
| `User` | email, hash password (bcryptjs), role `client`\|`operator`\|`admin`, kuota token |
| `Project` | proyek milik user; nama, status |
| `Message` | pesan chat (`user`/`agent`/`error`), pendamping UI polling `GET /messages` |
| `Spec` | spesifikasi JSON tervalidasi + status (draft, approved) |
| `Job` | proses build: status antrean → berjalan → completed / needs_review / failed, event history |
| `TokenUsage` | pembukuan token per panggilan model |

Database pratinjau aplikasi klien **dibuat ulang tiap build** — data pratinjau bersifat sementara. Firestore (Firebase) dipakai sebagai sync metadata opsional untuk operasi; rute `/api/firebase/*` khusus admin dan tidak pernah disentuh tes.

## 4. Pipeline Agent

```
chat ──▶ plannerAgent ──▶ specSchema (Zod + semantik) ──▶ approve ──▶ jobQueue
                                                                            │
                ┌───────────────────────────────────────────────────────────┘
                ▼
        orchestrator (agentIO, ownership, platformLimits, platformGuide)
                │
                ├─ databaseAgent ──▶ prismaSchema + CRUD (generation/)
                ├─ backendAgent  ──▶ routes & logika bisnis (fileBlocks)
                ├─ frontendAgent ──▶ halaman & tema (designSystem: kontras WCAG)
                │
                ▼
        testerAgent → quality-gate/checker ◀── reviewerAgent (ai_review)
                │
       remediationAgent ◀── keluaran lint/tes sebenarnya
                │  (loop maks. MAX_REMEDIATION_ROUNDS)
                ▼
        previewManager → pratinjau live; exportManager → ZIP
```

Prinsip pembagian kerja (`agents/ownership.ts`): bagian yang bisa diturunkan dari spek ditulis oleh **kode generator** (`services/generation/`), bukan model — skema Prisma, API CRUD, layar CRUD, tema, tes CRUD, README/.env.example/model docs. Model hanya menulis yang butuh pertimbangan data contoh, endpoint logika bisnis, halaman khusus, dan tesnya. Ini mengurangi biaya token dan mencegah variasi liar.

Spesifikasi cacat dikembalikan ke planner beserta daftar masalah (maks. 3 percobaan). Tidak pernah ada spek bawaan.

## 5. LLM Router (`services/llm/`)

Semua panggilan model lewat `client.ts` + `router.ts`:

- **Per-role model** dari env: `MODEL_PLANNER`, `MODEL_ORCHESTRATOR`, `MODEL_CODER`, `MODEL_REVIEWER`, `MODEL_FAST`, `MODEL_FALLBACKS` (dicoba berurutan).
- **Streaming** dengan pengaman waktu: tanpa token pertama dalam `LLM_FIRST_TOKEN_TIMEOUT_MS` (atau `LLM_FAST_FIRST_TOKEN_TIMEOUT_MS` untuk chat cepat), atau diam lebih dari `LLM_IDLE_TIMEOUT_MS` → ditinggalkan.
- **Circuit breaker** model baru gagal dilewati beberapa menit; 404/410 diblokir 1 jam.
- **Hedging** untuk chat: model cadangan ikut berlomba setelah `LLM_HEDGE_AFTER_MS`.
- **Retry JSON** pada `jsonParser.ts` untuk keluaran JSON dari model yang kadang terpotong.
- **Pembatasan laju Groq** (`rateLimiter.ts`): menahan panggilan agar muat RPM/TPM/RPD/TPD per model; balasan dibatasi agar muat di TPM sisa; bila ruangnya `<1.500` token → model dilewati; menunggu > `GROQ_MAX_QUEUE_MS` → pindah ke model berikutnya; header `x-ratelimit-limit-tokens` Groq dipakai bila lebih ketat.
- **Anggaran & konkurensi**: `DEFAULT_TOKEN_BUDGET`, `LLM_MAX_CONCURRENT`, `semaphore.ts`.

Model ID yang ditulis `groq:<id>` berjalan di Groq; tanpa prefix, di NVIDIA NIM. `pricing.ts` menyimpan katalog `AVAILABLE_MODELS` + `PLATFORM_PRICING` yang disajikan oleh `GET /api/models`.

## 6. Sandbox (`services/sandbox/`)

Aplikasi klien di-*build*, di-*test*, dan di-*run* di sandbox:

| Mode | Keterangan |
| --- | --- |
| `docker` | image `ethermind-sandbox:node22` (backend/sandbox/Dockerfile): tanpa root, batas memori/CPU/proses, jaringan mati saat tes |
| `local` | kode dijalankan di host dengan environment tersaring (tanpa secret platform). Hanya dev; produksi menolak start bila `local` tanpa `ALLOW_UNSAFE_LOCAL_SANDBOX=true` |

`fileManager.ts` melarang path traversal (semua tulisan file dikunci ke workspace). Workspaces dipisah per job/pengguna di `STORAGE_DIR/workspaces`, mengikuti pola `{taskId}_{userId}`.

## 7. Antrean & Ketahanan (`services/queue/`)

- `jobQueue.ts`: `MAX_CONCURRENT_JOBS` menjalankan job secara konkuren; status job disimpan di DB, progres dikirim via `services/sse/sseManager.ts`.
- `resume.ts` / `resumable.ts`: job yang menunggu diantrekan ulang saat server start; job yang sedang jalan saat server mati ditandai `failed` agar operator bisa `POST /jobs/:id/retry`.

## 8. Quality Gates (`services/quality-gate/`)

Urutan gerbang:

1. `build_check` — file wajib ada; `npm install`, `prisma validate`, `db push`, seed, aplikasi termuat
2. `lint_typecheck` — ESLint + larangan khusus (`innerHTML`, `alert`, `eval`, catch kosong)
3. `unit_test` — vitest + coverage min. `GATE_MIN_COVERAGE` (70%); deteksi tes tanpa assertion
4. `security_scan` — rahasia tertanam, SQL mentah, XSS, `npm audit`
5. `launch_checklist` — README, `.env.example` lengkap; backup benar-benar dijalankan
6. `ai_review` — reviewerAgent membaca kode terhadap kontrak spek
7. `smoke_test` — server dijalankan; health, halaman, setiap endpoint GET/POST dipanggil HTTP

`autofix.ts` menerapkan perbaikan aman otomatis. Bila masih gagal, job mendapat status `needs_review`, bukan `completed`.

**Belum ada gerbang E2E browser (Playwright)** — disebut di PRD, tetapi memerlukan image browser di sandbox. Saat ini smoke test HTTP berperan sebagai jaring-selamat berbasis jaringan, sementara pemeriksaan statis (`lint_typecheck`, `security_scan`) menutupi XSS deterministik.

## 9. Deployment Aplikasi Klien (`services/deployment/`)

- `previewManager.ts`: menjalankan aplikasi klien penuh pada port antara `PREVIEW_PORT_START`–`PREVIEW_PORT_END` (5100–5200); link + kredensial awal dikirim ke chat. Data pratinjau sementara (DB dibuat ulang per build).
- `exportManager.ts`: membuat ZIP workspace (archiver) yang diunduh lewat `GET /api/projects/:id/export`; nama aman diambil dari nama proyek via `spec/naming.ts`.

## 10. Frontend

- `services/api.ts`: client REST (`ApiClient`) dengan manajemen token di `localStorage` (`ethermind_auth_token`).
- `services/firebase.ts`: Firebase Client SDK untuk SSO (Google/GitHub), mengirim `idToken` ke `POST /api/auth/firebase-sso`. Tanpa env `VITE_FIREBASE_*`, frontend tetap memakai auth email/password backend.
- `App.tsx`: router berbasis hash (`#home`, `#templates`, …) + modal proyek baru; `ProjectBuilder` memuat pesan via `GET /messages` dan job event via SSE; `AdminDashboard` untuk operator.
- View responsif mengikuti `DESIGN.md` (palet parchment `#fcfbf8`/`#f7f4ed`, border `#eceae4`, pill radius 9999px, satu keluarga font, letter-spacing -0.025em).

### Aset publik

Folder `frontend/public/` saat ini menampung aset statis dari proyek referensi (salinan bawaan), bukan artefak yang di-serve oleh SPA; Vite hanya memakai yang benar-benar direferensikan. Folder ini menunggu pembersihan.

## 11. Keputusan Kunci (Anotasi)

| Keputusan | Alasan |
| --- | --- |
| `202 Accepted` untuk `POST /messages` | Balasan dibuat di latar belakang (planner memakan waktu karena ukuran LLM); UI memuat via `GET /messages`. Kegagalan AI jadi pesan `error` yang dapat dikirim ulang — chat tidak pernah macet. |
| EventSource via `?token=` | browser EventSource tak bisa set header; token tetap diverifikasi seperti request lain, dan job dicek kepemilikannya. |
| Generator berbasis kode untuk CRUD | Menekan biaya token, mengurangi variasi, membuat tes deterministik |
| Preview DB dibuat ulang | Hindari data menempel; smoke test selalu nyata |
| SQLite → Prisma | PRD: bisa naik ke PostgreSQL di produksi |
| Failover NIM↔Groq | Katalog NIM gratis tidak stabil; Groq free-tier hanya muat chat, build dialihkan otomatis |

## 12. Membaca Kode — Titik Masuk

| Ingin memahami… | Mulai dari |
| --- | --- |
| bootstrap & safety startup | `backend/src/config/index.ts`, `server.ts` |
| alur chat → spek | `backend/src/controllers/chatController.ts`, `specController.ts` |
| pipeline build | `backend/src/services/agents/orchestrator.ts` |
| gerbang | `backend/src/services/quality-gate/checker.ts` |
| pemilihan model | `backend/src/services/llm/router.ts`, `pricing.ts` |
| sandbox | `backend/src/services/sandbox/sandbox.ts` |
| komponen UI | `frontend/src/components/*.tsx` (mulai dari `ProjectBuilder.tsx`) |
