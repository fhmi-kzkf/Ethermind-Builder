# Ethermind AI App Builder — Frontend

SPA **React 19 + TypeScript + Vite** untuk platform Chat → Aplikasi Siap Launch. Frontend hanyalah antarmuka tipis; seluruh pekerjaan berat berada di [backend](../backend). Di sini: mengobrol, menyetujui spesifikasi, memantau progres build, membuka pratinjau, dan mengunduh ekspor kode.

## Menjalankan

```bash
npm install
cp .env.example .env        # opsional: isi VITE_FIREBASE_* untuk SSO Google/GitHub
npm run dev                 # http://localhost:3000 (proxy /api → http://localhost:4000)
```

Backend harus hidup di :4000 — tanpa itu semua panggilan `/api` gagal.

| Skrip | Fungsi |
| --- | --- |
| `npm run dev` | Dev server + HMR di :3000 |
| `npm run build` | `tsc -b` (typecheck) + build produksi Vite → `dist/` |
| `npm run lint` | Oxlint |
| `npm run preview` | Menyajikan hasil build produksi secara lokal |

## Views & Routing

Routing memakai hash (`App.tsx`):

| Hash | View | Isi |
| --- | --- | --- |
| `#home` (default) | Hero + SocialProof + FeatureCards + TemplateGallery | Prompt mulai-build; akun tamu dibuat otomatis |
| `#templates` | TemplatesPage | Galeri template siap pakai |
| `#pricing` | PricingPage | Pemilihan paket kuota token |
| `#security` | SecurityPage | Ringkasan keamanan platform |
| `#customers` | CustomersPage | Cerita pelanggan |
| `#community` | CommunityPage | Ide aplikasi dari komunitas |
| `#projects` | ProjectDashboard | Daftar proyek milik user (butuh login) |
| (builder) | ProjectBuilder | Chat + klarifikasi + progres build real-time + pratinjau + ekspor |
| `#admin` | AdminDashboard | Operator/admin: semua job, metrik, intervensi |

## Struktur

```
frontend/src/
├── App.tsx                  # router hash + state global + modal proyek baru
├── components/
│   ├── Navbar.tsx           # nav persisten + tipe AppView
│   ├── Hero.tsx             # prompt awal (gradien horizon ala DESIGN.md)
│   ├── ProjectBuilder.tsx   # chat + job events + pratinjau + ekspor
│   ├── ProjectDashboard.tsx # daftar proyek milik user
│   ├── AdminDashboard.tsx   # operator/admin
│   ├── AuthModal.tsx        # login/register + Firebase SSO (Google/GitHub)
│   └── ...                  # TemplateGallery, FeatureCards, Footer, dll.
├── pages/                   # halaman marketing statis
├── services/
│   ├── api.ts               # ApiClient REST + token di localStorage + SSE
│   └── firebase.ts          # client SDK; kirim idToken ke /api/auth/sso
└── types/                   # tipe bersama (Project, Message, Spec, Job, User)
```

## Autentikasi

Dua jalur:

1. **Email/password** — register/login ke `/api/auth/*`; JWT disimpan di `localStorage` dengan kunci `ethermind_auth_token`.
2. **Firebase SSO** — bila `VITE_FIREBASE_*` terisi: popup Google/GitHub, lalu `idToken` diverifikasi sisi server (`POST /api/auth/sso`). Email selalu diambil dari token, bukan dari klien.

Tanpa env Firebase, frontend tetap berjalan penuh dengan jalur 1 (silent fallback di `services/firebase.ts`).

## Konfigurasi

Variabel dibaca via `import.meta.env` di `src/services/firebase.ts`:

| Env | Fungsi |
| --- | --- |
| `VITE_FIREBASE_API_KEY` | Kredensial web Firebase |
| `VITE_FIREBASE_AUTH_DOMAIN` | Domain auth |
| `VITE_FIREBASE_PROJECT_ID` | ID proyek Firebase |
| `VITE_FIREBASE_STORAGE_BUCKET` | Bucket storage |
| `VITE_FIREBASE_MESSAGING_SENDER_ID` | Sender ID |
| `VITE_FIREBASE_APP_ID` | App ID |

Proxy dev (`vite.config.ts`): port `3000`, `/api` → `http://localhost:4000`.

## Kerangka Desain

UI mengikuti [`../DESIGN.md`](../DESIGN.md): kanvas parchment `#fcfbf8`, permukaan kartu `#f7f4ed`, border `#eceae4`, teks `#1c1c1c`, satu keluarga font weight 400/480/600, letter-spacing `-0.025em`, semua tombol pill `9999px`, dan satu gradien prisma yang hanya muncul di hero.

## Catatan Build & Deploy

- Folder `public/` saat ini masih memuat aset salinan proyek referensi; bundler hanya memasukkan yang direferensikan — periksa `dist/` setelah build bila ukurannya membengkak.
- Target deploy: static hosting untuk `dist/` + backend terpisah. Detail: [`../docs/DEPLOYMENT.md`](../docs/DEPLOYMENT.md).
- Belum ada test runner UI — kualitas dikunci lewat `tsc -b` dan oxlint; Vitest adalah kontribusi yang dibutuhkan (lihat [CONTRIBUTING](../docs/CONTRIBUTING.md)).
