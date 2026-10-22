# PRD: Platform AI App Builder (Chat → Aplikasi Siap Launch)

Oct 12, 2026 · @Fahmi

## 1. Ringkasan Eksekutif

Platform ini memungkinkan klien menjelaskan aplikasi yang diinginkan lewat chat, lalu sistem multi-agent AI membangun, mengetes, dan men-deploy aplikasi berkualitas siap launch tanpa developer manusia menulis kode dari nol. Chat hanyalah antarmuka tipis; seluruh pekerjaan kode dilakukan agent di balik layar dalam sandbox terisolasi.

**Proposisi nilai:** klien cukup bilang "saya mau aplikasi manajemen stok toko", lalu menerima aplikasi yang sudah live, bukan prototipe setengah jadi.

**Definisi "grade launch" (bukan MVP).** Sebuah aplikasi baru boleh diserahkan ke klien jika lolos semua gerbang berikut:

- Semua tes lulus: unit, integrasi, dan E2E.
- Autentikasi dan validasi input aman (tanpa SQL injection dan XSS yang terdeteksi).
- Error handling dan loading state ada di setiap alur utama UI.
- Tampilan responsif di mobile dan desktop.
- Environment variable dan rahasia terpisah dari kode.
- README, dokumentasi API, dan instruksi deploy tersedia.
- Backup database terjadwal dan bisa dipulihkan.

**Keputusan kunci.** Penyimpanan awal memakai SQLite lewat ORM supaya bisa pindah ke PostgreSQL tanpa menulis ulang. Mesin model memakai endpoint OpenAI-compatible (awalnya NVIDIA NIM) dengan framework agent yang model-agnostic, sehingga ganti model hanya ganti konfigurasi.

## 2. Latar Belakang & Masalah

Membuat aplikasi custom masih mahal dan lambat bagi UMKM, startup kecil, dan agensi: butuh developer frontend, backend, dan QA, serta berminggu-minggu sebelum ada hasil. Alat AI yang ada umumnya berhenti di prototipe sehingga klien tetap perlu developer untuk membuatnya layak produksi.

| Masalah | Dampak bagi klien |
| --- | --- |
| Biaya developer tinggi | Aplikasi sederhana pun sulit terjangkau |
| Waktu pengerjaan lama | Peluang bisnis lewat sebelum aplikasi jadi |
| Hasil AI berupa potongan kode | Tidak bisa langsung jalan, tanpa tes dan keamanan |
| Hasil tidak siap produksi | Klien tetap harus menyewa orang untuk merapikan |

**Peluang.** Agent yang menjalankan loop tulis, jalankan, baca error, perbaiki, dan tes ulang kini cukup mampu menghasilkan aplikasi multi-file yang bisa dites otomatis. Dengan quality gate yang ketat, hasilnya bisa mendekati standar siap launch.

## 3. Tujuan, Non-Tujuan & Metrik

Tujuan utama: klien menerima aplikasi live dan lolos semua gerbang kualitas hanya dengan percakapan, dengan campur tangan manusia seminimal mungkin.

**Tujuan**

- Mengubah permintaan bahasa natural menjadi spesifikasi yang disetujui klien.
- Membangun frontend, backend, database, dan tes secara otomatis.
- Men-deploy dan mengirim link aplikasi ke klien di chat.
- Mendukung revisi lanjutan ("tambah fitur laporan") di atas kode yang sudah ada.
- Menjaga biaya per build terkendali lewat batas budget dan tim model bertingkat.

**Non-tujuan (versi 1)**

- Aplikasi native iOS/Android; fokus pada web app responsif.
- Sistem dengan trafik sangat tinggi atau multi-region.
- Marketplace template dan plugin pihak ketiga.
- Menggantikan review manusia untuk klien dengan kebutuhan regulasi ketat.

**Metrik keberhasilan (target awal, usulan untuk divalidasi)**

| Metrik | Definisi | Target awal |
| --- | --- | --- |
| Tingkat lolos gerbang | Build yang lolos seluruh checklist tanpa campur tangan manusia | 70% |
| Waktu ke aplikasi live | Dari konfirmasi spesifikasi sampai link aktif, aplikasi sederhana | di bawah 60 menit |
| Biaya per build | Token model + infrastruktur, aplikasi sederhana | ditetapkan setelah pilot |
| Kepuasan klien | Rating setelah serah terima | 4 dari 5 |
| Revisi sukses | Permintaan revisi yang diterapkan tanpa merusak tes lama | 85% |

## 4. Persona & Pengguna Target

Tiga peran utama memakai platform: klien yang meminta aplikasi, operator (Anda dan tim) yang mengawasi mutu, dan admin sistem.

| Persona | Siapa | Kebutuhan utama | Kekhawatiran |
| --- | --- | --- | --- |
| Klien non-teknis | Pemilik UMKM, manajer operasional, founder tanpa tim teknis | Mendeskripsikan kebutuhan dengan bahasa biasa dan menerima aplikasi jadi | Hasil tidak sesuai, biaya tak terduga, tidak paham istilah teknis |
| Klien semi-teknis | Freelancer, agensi kecil | Kontrol atas stack, akses kode, revisi cepat | Kode berantakan dan sulit dikembangkan lanjut |
| Operator | Pemilik platform dan reviewer | Memantau job, meninjau hasil, mengintervensi build yang gagal | Biaya token membengkak, kualitas tidak konsisten |
| Admin sistem | Pengelola infrastruktur | Mengatur kuota, akses, log, dan keamanan | Sandbox bocor, penyalahgunaan |

## 5. Ruang Lingkup

**Dalam lingkup (V1)**

- Web app CRUD dan dashboard: manajemen stok, booking, CRM sederhana, katalog, form dan laporan.
- Autentikasi pengguna dengan peran dasar (admin dan pengguna).
- Database SQLite lewat ORM dan migration.
- Tes otomatis, linter, dan pemindaian keamanan dasar.
- Deploy otomatis ke satu target hosting, plus kode yang bisa diunduh.
- Revisi lanjutan per proyek.

**Di luar lingkup (V1)**

- Pembayaran dan integrasi pihak ketiga yang kompleks (ditambahkan sebagai modul pada V2).
- Aplikasi real-time skala besar dan pemrosesan data berat.
- Kepatuhan khusus seperti HIPAA atau PCI.

**Asumsi**

- Satu stack standar (React/Next.js + Tailwind, API Node.js/TypeScript, SQLite) agar agent konsisten dan template starter bisa dipakai.
- Model awal via NVIDIA NIM hosted; kuota gratis cukup untuk pengembangan, tidak untuk produksi klien berbayar.
- Review manusia tetap ada sebelum serah terima pada fase awal.

## 6. User Journey & User Stories

**Perjalanan klien dari permintaan sampai aplikasi live**

1. Klien login dan membuka chat, lalu menjelaskan aplikasi yang diinginkan.
2. Agent perencana mengajukan pertanyaan klarifikasi (maksimal beberapa pertanyaan, pilihan tap) tentang pengguna, fitur utama, dan data.
3. Sistem menampilkan spesifikasi ringkas: daftar fitur, halaman, dan tabel data. Klien menyetujui atau meminta perubahan.
4. Job build masuk antrean; klien melihat progres langsung di chat ("membuat skema database", "menjalankan tes").
5. Agent frontend, backend, database, dan tester bekerja dan saling memperbaiki sampai gerbang kualitas lolos.
6. Aplikasi di-deploy ke URL pratinjau; klien menerima link beserta ringkasan fitur dan kredensial awal.
7. Klien meminta revisi lewat chat; agent melanjutkan dari kode proyek yang tersimpan, lalu menjalankan ulang seluruh tes.
8. Setelah klien puas, aplikasi dipromosikan ke produksi dan kode bisa diunduh.

**User stories utama**

| ID | Sebagai | Saya ingin | Agar |
| --- | --- | --- | --- |
| US-01 | Klien | menjelaskan aplikasi dengan bahasa biasa | tidak perlu paham teknis |
| US-02 | Klien | menyetujui spesifikasi sebelum build dimulai | hasil sesuai harapan dan tidak ada biaya sia-sia |
| US-03 | Klien | melihat progres build secara langsung | tahu sistem sedang bekerja dan berapa lama lagi |
| US-04 | Klien | menerima link aplikasi yang sudah live | langsung bisa dipakai |
| US-05 | Klien | meminta revisi lewat chat | aplikasi berkembang tanpa mulai dari nol |
| US-06 | Klien | mengunduh kode dan dokumentasi | tidak terkunci pada platform |
| US-07 | Operator | meninjau laporan tes dan keamanan tiap build | memastikan mutu sebelum serah terima |
| US-08 | Operator | menghentikan atau mengulang job yang macet | mengendalikan biaya token |
| US-09 | Admin | mengatur kuota dan batas budget per proyek | biaya operasional tidak membengkak |

## 7. Kebutuhan Fungsional

Prioritas: **P0** wajib untuk rilis pertama, **P1** penting setelah rilis pertama, **P2** nilai tambah.

| ID | Modul | Kebutuhan | Prioritas |
| --- | --- | --- | --- |
| FR-01 | Akun | Registrasi, login, reset password, dan sesi aman untuk klien | P0 |
| FR-02 | Chat | Antarmuka chat dengan riwayat percakapan per proyek | P0 |
| FR-03 | Chat | Pertanyaan klarifikasi interaktif (opsi tap) sebelum build | P0 |
| FR-04 | Spesifikasi | Agent perencana menghasilkan spesifikasi (fitur, halaman, tabel data) yang bisa disetujui atau direvisi klien | P0 |
| FR-05 | Job build | Antrean job dengan status (menunggu, berjalan, gagal, selesai), retry otomatis, dan pembatalan | P0 |
| FR-06 | Orkestrasi agent | Agent frontend, backend, database, tester, dan reviewer berjalan terkoordinasi dalam satu proyek | P0 |
| FR-07 | Sandbox | Setiap job berjalan di container terisolasi dengan batas CPU, memori, waktu, dan jaringan | P0 |
| FR-08 | Quality gate | Build hanya dianggap selesai jika semua gerbang (tes, linter, keamanan, checklist grade launch) lolos | P0 |
| FR-09 | Progres | Streaming progres real-time ke chat lewat SSE atau WebSocket | P0 |
| FR-10 | Template | Template starter (auth, layout, setup tes) agar agent tidak mulai dari nol | P0 |
| FR-11 | Deploy | Deploy otomatis ke URL pratinjau dan produksi, lalu kirim link ke chat | P0 |
| FR-12 | Proyek | Penyimpanan kode, sesi agent, dan versi per proyek untuk revisi lanjutan | P0 |
| FR-13 | Revisi | Permintaan perubahan di atas kode yang ada dengan tes regresi otomatis | P1 |
| FR-14 | Ekspor | Unduh kode sumber, README, dan dokumentasi API | P1 |
| FR-15 | Biaya | Batas budget token dan jumlah langkah per job, dengan peringatan dan penghentian otomatis | P0 |
| FR-16 | Dashboard operator | Daftar job, log agent, laporan tes dan keamanan, serta tombol intervensi | P1 |
| FR-17 | Backup | Backup SQLite terjadwal dan prosedur pemulihan untuk aplikasi klien | P1 |
| FR-18 | Notifikasi | Email atau chat saat build selesai atau gagal | P1 |
| FR-19 | Billing | Paket langganan atau pembayaran per proyek | P2 |
| FR-20 | Domain | Domain kustom untuk aplikasi klien | P2 |

## 8. Kebutuhan Non-Fungsional

Angka di bawah adalah target awal yang diusulkan; validasi lewat pilot sebelum dijadikan komitmen ke klien.

| Kategori | Kebutuhan | Target awal |
| --- | --- | --- |
| Performa platform | Respons chat dan tampilan status job | di bawah 2 detik |
| Performa aplikasi hasil | Waktu muat halaman utama aplikasi klien | di bawah 3 detik di koneksi 4G |
| Waktu build | Aplikasi sederhana (CRUD + auth) dari spesifikasi ke live | di bawah 60 menit |
| Reliabilitas | Job yang gagal di tengah jalan dapat dilanjutkan dari checkpoint | wajib |
| Ketersediaan | Platform chat dan antrean | 99% pada fase awal |
| Keamanan | Sandbox terisolasi, rahasia tidak masuk kode, dependensi dipindai | wajib |
| Skalabilitas | Worker build dapat ditambah horizontal; beberapa job paralel | mulai 3 job paralel |
| Portabilitas | Tidak terkunci vendor model atau database | model dan DB dapat diganti lewat konfigurasi |
| Observabilitas | Log agent, metrik biaya dan durasi per job, serta pelacakan error | wajib |
| Kepatuhan data | Data klien terisolasi per tenant; penghapusan data atas permintaan | wajib |
| Aksesibilitas | Aplikasi hasil memenuhi dasar WCAG AA (kontras, label, navigasi keyboard) | target |
| Kualitas kode | Linter lolos, struktur proyek konsisten, cakupan tes minimum | cakupan 70% garis kode (usulan) |

## 10. Desain Agent & Quality Gate

Hasil "grade launch" datang dari loop agent (tulis, jalankan, baca error, perbaiki, tes ulang) dan gerbang otomatis, bukan dari satu kali generate teks. Setiap agent punya system prompt, daftar tool, dan skill sendiri.

| Agent | Tanggung jawab | Tool utama | Keluaran |
| --- | --- | --- | --- |
| Orchestrator | Mengelola alur, membagi tugas, memantau budget dan langkah | antrean job, status proyek | rencana kerja dan keputusan lanjut atau berhenti |
| Planner | Mengubah permintaan klien menjadi spesifikasi dan arsitektur | baca template, tanya klien | dokumen spesifikasi, skema data, daftar halaman |
| Frontend | Membangun UI responsif dengan loading dan error state | tulis file, jalankan dev server, linter | halaman dan komponen |
| Backend | Membangun API, autentikasi, validasi, dan akses data lewat ORM | tulis file, jalankan server, migration | endpoint dan logika bisnis |
| Database | Merancang skema SQLite dan migration | ORM, migration runner | skema dan seed data |
| Tester | Menulis dan menjalankan unit, integrasi, dan E2E (Playwright) | jalankan tes, baca log | laporan tes |
| Reviewer | Memeriksa keamanan dan kualitas kode terhadap checklist | analisis statis, pemindai dependensi | laporan temuan dan perbaikan |
| DevOps | Menyiapkan environment, deploy, dan backup | build, deploy, backup | URL live dan dokumentasi deploy |

**Quality gate (semua wajib lolos sebelum job selesai)**

1. Build berhasil tanpa error.
2. Linter dan type check bersih.
3. Semua tes unit dan integrasi lulus.
4. Tes E2E alur utama lulus di desktop dan mobile.
5. Pemindaian keamanan: dependensi, rahasia di kode, pola SQL injection dan XSS.
6. Checklist grade launch terpenuhi (error handling, loading state, responsif, env terpisah, README, backup).
7. Smoke test di URL pratinjau setelah deploy.

Jika sebuah gerbang gagal, agent terkait memperbaiki dan seluruh gerbang dijalankan ulang, sampai lolos atau batas langkah dan budget habis. Job yang habis batas ditandai "perlu tinjauan manusia", bukan dianggap selesai.

**Pengaman agent**

- Batas langkah, token, dan waktu per job.
- Tool dibatasi per peran (misalnya agent frontend tidak punya akses deploy).
- Hook otomatis menjalankan tes dan linter setelah setiap perubahan besar.
- Checkpoint di tiap tahap supaya job bisa dilanjutkan setelah gagal.

## 11. Strategi Model AI

Platform memakai NVIDIA NIM (endpoint OpenAI-compatible) sebagai mesin model awal, dengan lapisan abstraksi supaya model bisa diganti lewat konfigurasi tanpa mengubah kode agent.

**Prinsip**

- **Model-agnostic.** Semua panggilan model lewat satu adapter dengan format OpenAI-compatible. Claude Agent SDK tidak dipakai karena khusus model Claude; gunakan framework terbuka seperti OpenHands, Aider, Cline, OpenCode, atau LangGraph (dipilih lewat evaluasi di fase 0).
- **Tool calling stabil adalah kriteria utama.** Agent bergantung pada tool calling (tulis file, jalankan perintah), jadi pilih model berdasarkan uji tool calling, bukan skor benchmark saja.
- **Model bertingkat.** Model terkuat untuk perencanaan dan review, model menengah untuk penulisan kode, model kecil untuk tugas ringan (klasifikasi, format dokumen).
- **Rencana keluar.** Kuota gratis hanya untuk pengembangan dan pilot; sebelum melayani klien berbayar, pindah ke model berbayar atau self-host dan cek syarat lisensi NVIDIA terbaru.

**Tahap penggunaan model**

| Tahap | Pilihan | Catatan |
| --- | --- | --- |
| Pengembangan dan uji | NIM hosted (build.nvidia.com), kuota gratis | Ada rate limit; syarat dapat berubah, cek langsung di situs NVIDIA |
| Pilot dengan klien terbatas | NIM hosted atau API berbayar murah, model coding terbaik hasil evaluasi | Pantau tingkat lolos gerbang dan biaya |
| Produksi klien berbayar | Self-host NIM di GPU sendiri, atau API berbayar; model frontier untuk planning dan review jika perlu | Lisensi produksi komersial biasanya berbayar; verifikasi dulu |

**Evaluasi model (fase 0).** Uji 2 sampai 3 model coding dengan tugas standar "CRUD sederhana + tes", lalu ukur: tingkat tool call valid, jumlah iterasi perbaikan, dan persentase lolos checklist tanpa bantuan manusia. Hasilnya menentukan model dan framework yang dipakai.

**Pengendalian biaya dan limit.** Antrean dengan retry dan backoff untuk rate limit, caching konteks yang berulang, template starter agar agent tidak menulis dari nol, dan batas budget per job.

## 12. Model Data (SQLite)

Database platform memakai SQLite lewat ORM (Prisma atau Drizzle) dengan migration, sehingga pindah ke PostgreSQL cukup mengganti konfigurasi. Aplikasi yang dibangun untuk klien juga memakai SQLite per aplikasi pada tahap awal.

| Tabel | Isi utama | Relasi |
| --- | --- | --- |
| users | id, email, password\_hash, role (client, operator, admin), created\_at | satu user punya banyak proyek |
| projects | id, user\_id, name, status, repo\_path, stack, created\_at | punya banyak percakapan, spesifikasi, job |
| conversations | id, project\_id, created\_at | punya banyak pesan |
| messages | id, conversation\_id, role (user, assistant, system), content, created\_at | milik satu percakapan |
| specs | id, project\_id, version, content (JSON), approved\_at | versi spesifikasi yang disetujui klien |
| jobs | id, project\_id, spec\_id, type (build, revision), status, step\_count, token\_budget, tokens\_used, started\_at, finished\_at | punya banyak job\_events dan gate\_results |
| job\_events | id, job\_id, agent, event\_type, payload, created\_at | sumber data streaming progres dan audit |
| gate\_results | id, job\_id, gate, passed, report, created\_at | hasil tiap quality gate |
| versions | id, project\_id, job\_id, commit\_ref, created\_at | riwayat kode per build |
| deployments | id, project\_id, version\_id, environment (preview, production), url, status | satu versi bisa punya beberapa deploy |
| usage\_records | id, project\_id, job\_id, model, input\_tokens, output\_tokens, cost\_estimate | dasar pelacakan biaya |
| agent\_sessions | id, job\_id, agent, state (JSON), checkpoint | memungkinkan job dilanjutkan |

**Catatan teknis SQLite**

- Aktifkan mode WAL dan satu proses penulis agar tulis bersamaan tidak saling blokir.
- Semua perubahan skema lewat migration yang berversi; tidak ada perubahan manual.
- Backup terjadwal (salinan file konsisten) disimpan di lokasi terpisah dan diuji pulihnya berkala.
- Titik pindah ke PostgreSQL: banyak pengguna menulis bersamaan, lebih dari satu server aplikasi, atau data yang tumbuh besar.

## 13. Desain API & Streaming Progres

API platform berbentuk REST berformat JSON, dengan satu kanal streaming (SSE) untuk progres job. Semua endpoint kecuali registrasi dan login butuh autentikasi.

| Endpoint | Fungsi |
| --- | --- |
| POST /auth/register, POST /auth/login | Daftar dan masuk |
| GET /projects, POST /projects | Daftar dan buat proyek |
| GET /projects/:id | Detail proyek, status, dan URL deploy |
| POST /projects/:id/messages | Kirim pesan chat; balasan agent datang lewat stream |
| GET /projects/:id/spec | Spesifikasi versi terbaru |
| POST /projects/:id/spec/approve | Setujui spesifikasi dan mulai build |
| POST /projects/:id/revisions | Ajukan revisi di atas versi terakhir |
| GET /jobs/:id | Status, langkah, dan penggunaan token job |
| GET /jobs/:id/events (SSE) | Stream progres real-time |
| POST /jobs/:id/cancel | Batalkan job |
| GET /jobs/:id/gates | Hasil quality gate |
| GET /projects/:id/export | Unduh kode dan dokumentasi |
| GET /admin/jobs, POST /admin/jobs/:id/retry | Dashboard operator: pantau dan ulangi job |

**Event stream.** Tiap event berisi job\_id, agent, tipe (misalnya started, file\_written, test\_run, gate\_passed, gate\_failed, deployed, failed), pesan singkat ramah klien, dan waktu. Chat menampilkan pesan singkat; detail teknis hanya tampil di dashboard operator.

**Konvensi.** Pagination untuk daftar, kode error konsisten, rate limit per pengguna, dan idempotency key pada pembuatan job agar klik ganda tidak membuat dua build.

## 14. Kebutuhan UI/UX

Prinsip desain: klien non-teknis harus selalu tahu apa yang terjadi, apa yang diminta darinya, dan apa hasilnya, tanpa melihat istilah teknis.

| Halaman | Isi dan perilaku |
| --- | --- |
| Landing dan login | Penjelasan singkat, contoh hasil, registrasi dan login |
| Daftar proyek | Kartu proyek dengan status (draf, membangun, live, perlu tinjauan) dan tombol proyek baru |
| Chat proyek | Percakapan, pertanyaan klarifikasi berupa tombol pilihan, kartu spesifikasi yang bisa disetujui, dan kartu progres build |
| Detail build | Garis waktu tahap (rencana, frontend, backend, tes, deploy) dengan status dan pesan singkat |
| Pratinjau dan hasil | Tautan aplikasi live, ringkasan fitur, kredensial awal, tombol minta revisi dan unduh kode |
| Riwayat versi | Daftar versi dan deploy, dengan opsi kembali ke versi sebelumnya |
| Dashboard operator | Antrean job, log agent, laporan gate, biaya per job, tombol hentikan atau ulangi |
| Pengaturan | Profil, kuota, dan tagihan |

**State yang wajib dirancang di setiap halaman:** loading, kosong, error dengan langkah selanjutnya, dan berhasil. Tampilan responsif untuk mobile karena banyak klien akan membuka dari ponsel.

**Pola khusus chat build**

- Pesan progres bahasa awam ("sedang membuat halaman login"), bukan log teknis.
- Estimasi waktu kasar dan opsi dibatalkan.
- Klien tidak bisa mengirim permintaan baru yang bertabrakan saat build berjalan; permintaan masuk antrean revisi.
- Setiap kegagalan menjelaskan apa yang terjadi dan apa yang sedang dilakukan sistem.

## 15. Keamanan, Sandbox & Kepatuhan

Agent yang bisa menjalankan perintah dengan input dari klien adalah permukaan serangan terbesar platform ini, jadi isolasi adalah syarat wajib, bukan fitur tambahan.

| Risiko | Kontrol |
| --- | --- |
| Kode atau perintah berbahaya dari agent atau dari input klien | Setiap job berjalan di container Docker terisolasi, tanpa hak root, dengan batas CPU, memori, disk, dan waktu |
| Kebocoran antar klien | Satu container dan satu folder proyek per job; data dan rahasia dipisah per tenant |
| Akses jaringan bebas dari sandbox | Egress dibatasi ke daftar domain yang diizinkan (registry paket, API model) |
| Rahasia (API key, token) tercecer | Disimpan di secret manager atau env variable; tidak boleh masuk kode atau log; pemindaian rahasia di gate |
| Prompt injection lewat permintaan atau dokumen klien | Tool dibatasi per peran, tindakan berisiko perlu persetujuan, konten klien diperlakukan sebagai data |
| Dependensi rentan | Pemindaian dependensi dan penguncian versi di setiap build |
| Akses tidak sah ke platform | Password di-hash, sesi aman, rate limit, peran pengguna dan kontrol akses di setiap endpoint |
| Biaya meledak karena agent macet | Batas langkah, token, dan waktu; penghentian otomatis |
| Hilangnya data klien | Backup terjadwal dan uji pemulihan |

**Kepatuhan dan legal**

- Syarat layanan dan kebijakan privasi, termasuk siapa pemilik kode yang dihasilkan.
- Penghapusan data atas permintaan klien.
- Pengungkapan bahwa aplikasi dibuat oleh AI dan melalui review otomatis; untuk klien dengan kebutuhan regulasi, review manusia tetap disarankan.
- Cek syarat lisensi tiap model dan framework yang dipakai (termasuk lisensi NVIDIA untuk penggunaan komersial) sebelum menerima klien berbayar.

## 16. Model Bisnis & Biaya

Harga belum ditetapkan; angka akan ditentukan setelah pilot mengukur biaya nyata per build. Struktur yang diusulkan:

| Model | Cara kerja | Cocok untuk |
| --- | --- | --- |
| Per proyek | Harga tetap per aplikasi, termasuk sejumlah revisi | Klien yang butuh satu aplikasi |
| Langganan | Biaya bulanan dengan kuota build dan revisi | Klien yang terus mengembangkan aplikasi |
| Jasa penuh | Platform dipakai internal, klien dikenai biaya proyek | Fase awal dengan review manusia |

**Komponen biaya operasional yang perlu dilacak**

- Token model per build dan per revisi (dicatat di usage\_records).
- Komputasi sandbox dan worker.
- Hosting aplikasi klien dan penyimpanan backup.
- Lisensi model atau GPU jika self-host.
- Waktu review manusia pada fase awal.

**Pengendalian biaya.** Template starter, model bertingkat, caching konteks, batas budget per job, dan antrean untuk tugas yang tidak perlu real-time. Harga jual ditetapkan dari biaya rata-rata per build hasil pilot ditambah margin dan biaya review.

**Tahap gratis.** Selama development dan pilot, memakai kuota gratis NIM hosted menekan biaya token, tetapi tidak dijadikan dasar komitmen ke klien berbayar.

## 18. Risiko, Mitigasi & Pertanyaan Terbuka

| Risiko | Dampak | Mitigasi |
| --- | --- | --- |
| Model open-source lebih sering salah di proyek multi-file | Banyak iterasi, build lambat, hasil tidak lolos gerbang | Quality gate otomatis, template starter, stack tunggal, evaluasi model di fase 0 |
| Rate limit dan kuota gratis NIM | Job tersendat, tidak layak untuk klien berbayar | Antrean dengan retry, rencana pindah ke model berbayar atau self-host |
| Syarat atau lisensi NIM berubah | Tidak boleh dipakai komersial | Cek lisensi sebelum klien berbayar; adapter model-agnostic |
| Spesifikasi klien ambigu | Hasil tidak sesuai harapan | Pertanyaan klarifikasi dan persetujuan spesifikasi sebelum build |
| Revisi merusak fitur lama | Regresi | Tes regresi otomatis, versi kode, opsi kembali ke versi sebelumnya |
| Biaya token membengkak | Margin hilang | Batas budget, model bertingkat, caching |
| Celah keamanan di aplikasi hasil | Reputasi dan risiko hukum | Reviewer agent, pemindaian otomatis, review manusia di fase awal |
| SQLite tidak cukup saat pengguna bertambah | Performa dan konkurensi | ORM dan migration sejak awal; titik pindah ke PostgreSQL ditetapkan |
| Sandbox bocor | Kebocoran data klien | Container tanpa root, batas jaringan, isolasi per tenant |

**Pertanyaan terbuka**

- [ ] Stack standar apa yang dikunci untuk V1 (usulan: Next.js, Node.js/TypeScript, SQLite)?
- [ ] Framework agent mana yang dipakai setelah evaluasi di fase 0?
- [ ] Target hosting aplikasi klien: Vercel, Railway, Fly.io, atau server sendiri?
- [ ] Berapa harga dan kuota paket setelah pilot?
- [ ] Apakah review manusia wajib sebelum serah terima, dan sampai kapan?
- [ ] Jenis aplikasi apa yang menjadi templat pertama (usulan: manajemen stok)?
- [ ] Apakah klien memiliki hak penuh atas kode yang dihasilkan?
