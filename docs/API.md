# API — Ethermind AI App Builder

Referensi endpoint backend. Base URL dev: `http://localhost:4000/api` (frontend Vite mem-proxy `/api` otomatis).

- **Auth**: `Authorization: Bearer <JWT>` untuk semua endpoint, kecuali `register`, `login`, `firebase-sso`/`sso`, `demo`, `health`, dan `models`.
- **Format sukses**: `{ "success": true, "data": {...} }`
- **Format error**: `{ "error": "pesan", "details": [ ... ] (opsional) }` dengan status HTTP semantik (400 validasi, 401 auth, 403 peran/kepemilikan, 404 resource, 409 konflik, 429 rate limit).
- **Rate limit credentials**: 10 permintaan / 15 menit per IP untuk `register`, `login`, `sso`, `demo`.

---

## 1. Platform

### `GET /api/health`

```json
{
  "status": "ok",
  "platform": "Ethermind AI App Builder API",
  "version": "1.0.0",
  "timestamp": "2026-10-21T00:00:00.000Z",
  "llmConfigured": true,
  "sandbox": "local"
}
```

Tidak butuh token. Catatan: bila `llmConfigured: false`, chat dan build akan ditolak — isi API key model terlebih dahulu.

### `GET /api/models`

Daftar model tersedia + harga per tier:

```json
{ "models": [ { "id": "nvidia/nemotron-3-super-120b-a12b", "role": "coder", "..." } ], "pricing": { "..." } }
```

---

## 2. Auth — `/api/auth`

| Method | Path | Body | Keterangan |
| --- | --- | --- | --- |
| POST | `/auth/register` | `{ email, password, role? }` | `role` selalu dipaksa `client` (public). Respons: `{ user, token }` |
| POST | `/auth/login` | `{ email, password }` | Respons: `{ user, token }` |
| POST | `/auth/firebase-sso` | `{ idToken, email, name?, photoUrl?, provider? }` | Hanya `idToken` Firebase terverifikasi; email dari token, bukan dari body klien |
| POST | `/auth/sso` | sama | Alias `firebase-sso` |
| POST | `/auth/demo` | – | Akun demo hanya jika `NODE_ENV=development` |
| GET | `/auth/me` | – | Profil penelepon |
| POST | `/auth/staff` | `{ email, password, role: "operator"\|"admin" }` | Khusus `admin` — membuat operator/admin |

Contoh login:

```bash
curl -X POST http://localhost:4000/api/auth/login \
  -H 'Content-Type: application/json' \
  -d '{"email":"you@example.com","password":"Password123!"}'
```

---

## 3. Proyek — `/api/projects`

Semua endpoint scoped ke pemiliknya.

| Method | Path | Keterangan |
| --- | --- | --- |
| GET | `/projects` | Daftar proyek milik penelepon |
| POST | `/projects` | `{ name }` → buat proyek |
| GET | `/projects/:id` | Proyek penuh (termasuk status job terakhir) |
| DELETE | `/projects/:id` | Hapus proyek |
| POST | `/projects/:id/preview/start` | Jalankan aplikasi pratinjau di port 5100–5200; status apakah bisa dijalankan |
| GET | `/projects/:id/credentials` | Kredensial awal aplikasi klien (email/password/url) |

### Chat

| Method | Path | Keterangan |
| --- | --- | --- |
| GET | `/projects/:id/messages` | Semua pesan; sumber balasannya UI polling |
| POST | `/projects/:id/messages` | `{ text }` → `202 Accepted`, pesan tersimpan; planner bekerja di latar belakang |

```bash
curl -X POST http://localhost:4000/api/projects/<p_id>/messages \
  -H "Authorization: Bearer $TOKEN" -H 'Content-Type: application/json' \
  -d '{"text":"Aplikasi manajemen stok toko dengan laporan penjualan"}'
```

Penting: planner bekerja secara background; kegagalan AI menjadi pesan bernilai `error` yang bisa dikirim ulang.

### Spec & build

| Method | Path | Keterangan |
| --- | --- | --- |
| GET | `/projects/:id/spec` | Spec saat ini (Zod tervalidasi) + status |
| POST | `/projects/:id/spec/approve` | Menyetujui spec dan memulai **Job** build. Respons berisi job id |

### Revisi

| Method | Path | Keterangan |
| --- | --- | --- |
| POST | `/projects/:id/revisions` | `{ text }` → planner memperbarui spec, build ulang, seluruh gerbang dijalankan lagi |

### Ekspor

| Method | Path | Keterangan |
| --- | --- | --- |
| GET | `/projects/:id/export` | Unduh ZIP kode build proyek (archiver, application/zip) |

---

## 4. Job — `/api/jobs`

| Method | Path | Keterangan |
| --- | --- | --- |
| GET | `/jobs/:id` | Detail job (status, step, gate summary) |
| GET | `/jobs/:id/events` | Stream SSE — event progres real-time |
| POST | `/jobs/:id/cancel` | Permintaan batal |
| POST | `/jobs/:id/resume` | Lanjutkan job yang sempat terputus |
| POST | `/jobs/:id/retry` | Ulang job `failed` |
| GET | `/jobs/:id/gates` | Status per gerbang |

SSE: event `data:` ter-format JSON; gunakan `EventSource` dengan `?token=` (header tak bisa di-set oleh EventSource) — token tetap di-verifikasi ke DB.

---

## 5. Admin — `/api/admin`

Cukup `operator`/`admin`.

| Method | Path | Keterangan |
| --- | --- | --- |
| GET | `/admin/jobs` | Semua job |
| GET | `/admin/metrics` | Metrik agregat platform |
| POST | `/admin/jobs/:id/intervene` | Intervensi manual: jalankan ulang, ubah spec, ubah status |

---

## 6. Admin Firestore — `/api/firebase` (opsional)

Khusus admin. Rute ini dipakai bila Firestore aktif untuk sinkronisasi operasional dan tidak pernah disentuh oleh test suite.

---

## 7. Tipe bersama

Skema tampilan inti ada di `frontend/src/types/index.ts` dan `backend/src/types/index.ts`.

| Tipe | Ringkas |
| --- | --- |
| `User` | id, email, role (`client`/`operator`/`admin`), kuota token |
| `Project` | id, name, status, latestJob? |
| `Message` | id, role (`user`/`agent`/`error`), text, createdAt + pending? |
| `Spec` | JSON spec: features, pages, tables, auth, theme |
| `Job` | id, status (`queued`/`running`/`completed`/`failed`/`needs_review`), steps, gates, tokenUsage |
| `AppCredentials` | email, password, url, running |

## 8. Contoh alur end-to-end (CLI)

```bash
# 1) Login
TOKEN=$(curl -s -X POST localhost:4000/api/auth/login \
  -H 'Content-Type: application/json' \
  -d '{"email":"you@example.com","password":"Password123!"}' | jq -r .data.token)

# 2) Buat proyek
PID=$(curl -s -X POST localhost:4000/api/projects \
  -H "Authorization: Bearer $TOKEN" -H 'Content-Type: application/json' \
  -d '{"name":"Aplikasi Manajemen Stok Toko"}' | jq -r .data.id)

# 3) Chat: ceritakan aplikasi
curl -s -X POST localhost:4000/api/projects/$PID/messages \
  -H "Authorization: Bearer $TOKEN" -H 'Content-Type: application/json' \
  -d '{"text":"Manajemen stok toko: barang, transaksi masuk/keluar, laporan mingguan"}'

# 4) Pantau jawaban planner
curl -s localhost:4000/api/projects/$PID/messages -H "Authorization: Bearer $TOKEN"

# 5) Setujui spec → mulai build
curl -s -X POST localhost:4000/api/projects/$PID/spec/approve -H "Authorization: Bearer $TOKEN"

# 6) Ikuti progres via SSE
curl -s -N "localhost:4000/api/jobs/<JID>/events?token=$TOKEN"
```

Catatan: `/auth/register`, `/auth/sso`, `/jobs/:id/events` (dengan `?token=`), dan detail `/admin/*` dapat berubah seiring penyempurnaan multi-tenant.
