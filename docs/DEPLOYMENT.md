# Deployment — Panduan Produksi

Panduan menyiapkan **Ethermind AI App Builder** untuk lingkungan produksi. Sistem **menolak start** bila syarat wajib tidak dipenuhi — itu fitur desain keamanan, bukan bug.

---

## 1. Topologi Target

```
┌─── Caddy (TLS) ──────────────────────────────────────────────┐
│  app.example.com        → frontend build (static) + /api → :4000
│  *.apps.example.com     → gerbang aplikasi :4100 (sertifikat wildcard)
└───────────────────────────────────────────────────────────────┘
        │
        ├── backend :4000 + gerbang :4100 (satu proses Node)
        │       ├── pratinjau  pv-xxxx.apps.example.com
        │       └── link live  nama-pengguna.apps.example.com
        ├── aplikasi klien: proses/kontainer di 127.0.0.1:5100-5200 (tidak dibuka ke internet)
        ├── SQLite platform + SQLite tiap aplikasi live (storage/live-data/<proyek>/app.db)
        └── Docker daemon → sandbox build/tes/run aplikasi klien
```

- Satu VPS memadai untuk V1. Berkas siap pakai ada di folder `deploy/` (`Caddyfile`, `ethermind-api.service`).
- Di belakang proxy: set `TRUST_PROXY=true` dan `NODE_ENV=production`.
- **Port 5100-5200 dan 4100 tidak dibuka di firewall.** Hanya Caddy (80/443) yang menghadap internet; aplikasi klien hanya bisa dijangkau lewat gerbang, yang membatasi laju.

## 2. Environment Wajib `backend/.env`

Server **menolak start** bila salah satu syarat ini tidak dipenuhi:

| Syarat | Keterangan |
| --- | --- |
| `JWT_SECRET` | Minimal 32 karakter, bukan nilai bawaan |
| `NVIDIA_API_KEY` atau `OPENAI_API_KEY` | Minimal satu kunci model; tanpa itu chat dan build ditolak |
| `CORS_ORIGINS` | Whitelist origin nyata (mis. `https://app.ethermind.example`); kosong atau `*` ditolak |
| `SANDBOX_MODE=docker` | Mode `local` di produksi butuh `ALLOW_UNSAFE_LOCAL_SANDBOX=true` — jangan gunakan |
| `DEMO_LOGIN` | Tidak boleh `true` saat `NODE_ENV=production` |
| `BOOTSTRAP_ADMIN_EMAIL` / `BOOTSTRAP_ADMIN_PASSWORD` | Admin pertama; password minimal 12 karakter |

Opsional produksi lain:

```ini
MODEL_FALLBACKS=nvidia/nemotron-3-super-120b-a12b,openai/gpt-oss-20b,poolside/laguna-xs-2.1
GROQ_API_KEY=...        # opsional; model groq:* ikut dalam rantai failover
GROQ_PLAN=developer     # 250K TPM — cocok untuk build (plan free hanya muat chat)
MAX_CONCURRENT_JOBS=3   # sesuaikan CPU/RAM
STORAGE_DIR=/var/lib/ethermind/storage
WORKSPACES_DIR=/var/lib/ethermind/storage/workspaces
EXPORTS_DIR=/var/lib/ethermind/storage/exports
```

Firebase (opsional, untuk SSO dan Firestore): `FIREBASE_PROJECT_ID`, `FIREBASE_CLIENT_EMAIL`, `FIREBASE_PRIVATE_KEY`, `FIREBASE_DATABASE_URL`, `FIREBASE_STORAGE_BUCKET`, atau satu file `FIREBASE_SERVICE_ACCOUNT_KEY`. Jangan pernah menyimpan `serviceAccountKey.json` nyata di repo (sudah di-ignore).

## 3. Langkah Provisioning

```bash
# 1. Ambil kode dan dependensi
git clone <repo> && cd Ethermind_builder
cd backend && npm ci

# 2. Bangun image sandbox Docker (sekali)
npm run sandbox:build

# 3. Database
npx prisma migrate deploy
# (database dev yang dibuat db push dapat ditandai:)
# npx prisma migrate resolve --applied 0_init

# 4. Build dan jalankan
npm run build
npm start            # node dist/server.js di :4000

# 5. Frontend
cd ../frontend && npm ci
npm run build        # dist/ dilayani Nginx/Caddy
```

Contoh unit systemd (`/etc/systemd/system/ethermind-api.service`):

```ini
[Unit]
Description=Ethermind AI App Builder API
After=network.target docker.service

[Service]
WorkingDirectory=/opt/ethermind/backend
ExecStart=/usr/bin/node dist/server.js
EnvironmentFile=/opt/ethermind/backend/.env
Restart=on-failure
LimitNOFILE=16384

[Install]
WantedBy=multi-user.target
```

## 4. Sandbox (Keamanan Eksekusi Kode)

| Mode | Sifat | Untuk produksi? |
| --- | --- | --- |
| `docker` | tanpa root, batas memori/CPU/proses, jaringan mati saat tes | Ya, direkomendasikan |
| `local` | kode dijalankan di host dengan environment tersaring (tanpa secret platform) | Tidak — khusus dev |

**Catatan status:** jalur Docker sudah ditulis di kode (`backend/sandbox/Dockerfile` dan skrip `sandbox:build`) tetapi **belum diuji** di lingkungan pengembangan ini (daemon Docker tidak berjalan saat penulisan). Uji satu smoke build melalui Docker di server produksi sebelum dijadikan konfigurasi final.

## 5. Antrean & Ketahanan

- Job yang masih antre saat server restart akan diantrekan ulang otomatis.
- Job yang sedang berjalan saat server mati ditandai `failed`; operator bisa `POST /api/jobs/:id/retry`.
- Pasang restart policy (`Restart=on-failure`) dan health check yang menguji `GET /api/health`.
- Konkurensi model: `LLM_MAX_CONCURRENT=6` (semua job); turunkan bila provider sering 503/429.

## 5a. Alamat Aplikasi, Gerbang, dan Link Live

Setiap aplikasi klien punya alamat sendiri di bawah satu domain wildcard (`APPS_DOMAIN`):

| Alamat | Isi |
| --- | --- |
| `pv-<13 huruf pertama id proyek>.apps.example.com` | pratinjau, hanya untuk pemilik yang membukanya dari builder |
| `<nama>.apps.example.com` | link live, publik, nama dipilih pemilik (3-30 karakter) |

Cara kerja: satu rekaman DNS wildcard dan satu sertifikat wildcard (tantangan DNS) melayani semua aplikasi, jadi menambah aplikasi tidak mengubah apa pun di luar database. Gerbang (`backend/src/services/gateway`) membaca nama dari alamat, mencari aplikasinya, lalu meneruskan permintaan.

**Env yang perlu diisi:**

```ini
APPS_DOMAIN=apps.example.com     # kosong = pratinjau pakai host:port dan link live nonaktif
GATEWAY_PORT=4100                # gerbang mendengarkan di 127.0.0.1 (GATEWAY_HOST untuk mengubahnya)
PREVIEW_IDLE_MINUTES=20          # pratinjau tidur setelah sekian menit tanpa kunjungan
LIVE_IDLE_MINUTES=120            # link live tidur setelah sekian menit tanpa kunjungan
WAKE_TIMEOUT_MS=25000            # lama pengunjung menunggu app tidur menyala sebelum halaman "sedang menyala"
GATEWAY_RATE_LIMIT=300           # permintaan per pengunjung per aplikasi per menit
MAX_PROJECTS_PER_USER=30
MAX_LIVE_APPS_PER_USER=3
```

Untuk mencoba di komputer sendiri: `APPS_DOMAIN=localhost`, `APPS_SCHEME=http`, `APPS_PUBLIC_PORT=4100`. Peramban membuka `*.localhost` sebagai komputer sendiri.

**Tidur dan bangun.** Aplikasi yang tidak dikunjungi lebih lama dari batasnya dihentikan (RAM dibebaskan, data tetap di disk). Kunjungan berikutnya menyalakannya lagi: pengunjung menunggu beberapa detik, atau melihat halaman yang memuat ulang sendiri bila lebih lama dari `WAKE_TIMEOUT_MS`. Bila semua port terpakai, aplikasi yang paling lama tidak dikunjungi (pratinjau lebih dulu, live paling akhir) dihentikan untuk memberi tempat.

**Data live terpisah dari versi.** Database link live ada di `storage/live-data/<id proyek>/app.db`, di luar folder versi mana pun. Menerbitkan versi lain memasang kode baru di atas data yang ada (`npm run db:push`); perubahan struktur yang akan menghapus data **ditolak**, data tidak disentuh. Pratinjau tetap direset seperti biasa. Menghapus proyek menghapus data live-nya.

**Hak memakai link live:** termasuk di paket Pro dan terbuka setelah pembayaran QRIS dikonfirmasi. Bila `QRIS_STATIC` kosong (tanpa penagihan), semua orang boleh. Operator dan admin selalu boleh.

**Batas yang perlu diketahui:**

- Satu proses aplikasi per aplikasi yang menyala. RAM per aplikasi belum diukur di server nyata: ukur dulu (`docker stats` atau `ps`), lalu atur `PREVIEW_IDLE_MINUTES`, `LIVE_IDLE_MINUTES`, dan jumlah port.
- Gerbang meneruskan HTTP biasa. WebSocket tidak diteruskan (aplikasi yang dibuat tidak memakainya).
- Domain milik pelanggan sendiri (mis. `warung.com`) belum didukung. Rancangannya: sertifikat otomatis Caddy dengan endpoint `ask` yang hanya menyetujui domain yang terdaftar di database.
- Isolasi aplikasi klien bertumpu pada Docker (memori, CPU, jumlah proses, tanpa kapabilitas). Untuk isolasi lebih kuat (gVisor atau microVM) perlu pekerjaan terpisah.

## 5b. Kapasitas dan Skala

- Menu **Admin → Kapasitas server** (`GET /api/admin/system`) menampilkan memori, disk, aplikasi menyala, antrean, aktivitas gerbang, cadangan dan pembersihan terakhir, dan peringatan dengan bahasa biasa (disk di bawah 15%, memori di bawah 10%, port terpakai lebih dari 80%, antrean panjang, belum ada cadangan).
- Hambatan pertama biasanya **batas laju penyedia model AI** (token per menit), bukan server. Antrean build menampilkan nomor antrean dan perkiraan kasar waktu mulai ke pengguna. Untuk banyak pengguna: paket Groq berbayar, penyedia cadangan, dan `LLM_MAX_CONCURRENT` yang sesuai.
- Disk: satu workspace hasil build sekitar 200 MB (hampir semuanya `node_modules`). Pembersihan harian (lihat bagian 6) membuang `node_modules` versi lama yang tidak dipakai; versi itu dipasang ulang otomatis saat dibuka lagi.
- Kapan satu server tidak cukup: pindahkan database platform ke PostgreSQL, tambah server aplikasi, dan buat gerbang tahu aplikasi mana ada di server mana. Belum dikerjakan.

## 6. Backup & Pemulihan

| Objek | Metode |
| --- | --- |
| Database platform + database tiap link live | **Otomatis harian** ke `storage/backups/<tanggal>/` (`VACUUM INTO`, aman saat aplikasi menulis), disimpan `BACKUP_KEEP_DAYS` hari. Jalankan sekarang dari Admin → Kapasitas server. File rahasia aplikasi (`runtime.json`) sengaja tidak ikut. **Salin `storage/backups` ke luar server** (mesin lain atau object storage), karena cadangan satu disk tidak menolong bila disk hilang. Litestream bisa ditambahkan untuk hampir-real-time |
| `storage/workspaces` | rsync/snapshot objek storage harian — kode aplikasi klien ada di sini |
| `storage/exports` | Bisa dibangun ulang dari workspace; tidak wajib didaur lama |
| `.env` / service account | Simpan di secret manager (Vault/AWS SSM/1Password); tidak pernah di repo |
| Aplikasi klien | Gerbang `launch_checklist` di pipeline klien sendiri benar-benar menjalankan backup dan memverifikasi restore |

**Pembersihan harian otomatis** (`CLEANUP_ENABLED`): (1) `node_modules` versi lama yang bukan versi aktif, bukan versi live, dan tidak sedang berjalan, setelah `CLEANUP_NODE_MODULES_DAYS` hari; (2) seluruh workspace build gagal atau dibatalkan setelah `CLEANUP_FAILED_DAYS` hari; (3) workspace yatim (tanpa proyek atau job) yang lebih dari sehari; (4) berkas ekspor lebih dari `CLEANUP_EXPORT_DAYS` hari. Data aplikasi, versi aktif, versi live, dan pekerjaan yang masih berjalan atau menunggu keputusan tidak disentuh. Lihat dulu hasilnya dengan "Lihat yang akan dibersihkan" di Admin.

## 7. Checklist Final

- [ ] `NODE_ENV=production`, `TRUST_PROXY=true`
- [ ] `JWT_SECRET` baru (≥ 32 karakter), tidak dipakai di dev
- [ ] `NVIDIA_API_KEY` / `GROQ_API_KEY` terpasang — `GET /api/health` membalas `llmConfigured: true`
- [ ] `CORS_ORIGINS` berisi daftar origin nyata, bukan `*`
- [ ] `SANDBOX_MODE=docker` dan satu smoke build sukses lewat image sandbox
- [ ] `prisma migrate deploy` sukses; file DB berada di direktori data yang dieksklusif untuk backup
- [ ] `BOOTSTRAP_ADMIN_*` membuat admin pertama; login operator bekerja
- [ ] `DEMO_LOGIN` tidak di-set true
- [ ] Reverse proxy menerapkan TLS dan mengoper header `X-Forwarded-*` dengan benar
- [ ] Firewall hanya membuka 80/443 (dan SSH). Port 4000, 4100, dan 5100–5200 **tertutup** dari luar
- [ ] `APPS_DOMAIN` diisi, DNS wildcard `*.apps...` menunjuk ke server, sertifikat wildcard terbit (Caddy dengan plugin DNS)
- [ ] Satu pratinjau dan satu link live dicoba dari peramban, termasuk bangun-dari-tidur (hentikan prosesnya, buka lagi)
- [ ] Node 22+ di server (cadangan database live memakai `node:sqlite`)
- [ ] `storage/backups` disalin ke tempat lain secara berkala
- [ ] Backup terjadwal berjalan dan restore pernah diuji
- [ ] Monitoring: kirim log lokal ke sistem log terpusat (Loki/Sentry); disk `storage/` dipantau dengan alert ruang < 20%

## 8. Pemecahan Masalah Umum

| Gejala | Penyebab umum | Tindakan |
| --- | --- | --- |
| Server mati: "JWT_SECRET too short/weak" | Env belum diisi dari `.env.example` | Buat secret baru: `openssl rand -hex 32` |
| Server mati: "no provider keys" | `NVIDIA_API_KEY` kosong | Isi minimal satu kunci model |
| Server mati: `CORS_ORIGINS` kosong/`*` | Belum whitelist | Daftar origin nyata dipisah koma |
| Chat ditolak, `llmConfigured: false` | Kunci model belum dipasang | Isi kunci, restart server |
| Selamanya "queued" | `MAX_CONCURRENT_JOBS` penuh atau job lama macet | Cek `GET /api/admin/jobs`; intervensi/retry |
| Build gagal `build_check` | Image sandbox belum dibangun | `npm run sandbox:build` |
| `preview/start` gagal | Rentang 5100–5200 tertutup firewall | Buka rentang atau ubah `PREVIEW_PORT_START/END` |
| Model sering 503/timeout | Katalog provider berubah | Cek `GET {base}/models`; perbarui `MODEL_FALLBACKS` |
