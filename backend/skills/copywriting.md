---
name: copywriting
description: UI text that sounds like a real product, in the language of the spec (default Bahasa Indonesia).
roles: frontend
order: 40
---
## Skill: copywriting (all user-visible text)

- Write in the language of the spec. Default to natural Bahasa Indonesia, plain and direct, the way the client's own staff would say it. Use "Anda" or a neutral form consistently, not a mix.
- Name things with the client's domain words from the spec ("Stok", "Pelanggan", "Pesanan"), not generic ones ("Items", "Entries", "Data").
- Buttons say the action and object: "Simpan produk", "Hapus pesanan", not "Submit", "OK", "Klik di sini".
- Empty states say what is missing and the next step. Error messages say what happened and what to do. Confirmations for destructive actions name the thing being deleted.
- No filler or hype: avoid "Selamat datang di aplikasi kami", "solusi terbaik", "revolusioner", "powerful", "seamless", "tingkatkan produktivitas Anda". Say what the screen does.
- No lorem ipsum, no "Judul di sini", no sample names like "John Doe". Seed and sample data must look like real data for this business (real-looking product names, plausible prices in Rupiah, valid dates).
- Format for the locale: Rupiah as `Rp 25.000`, dates as `13 Okt 2026`, thousands separated with a dot. Use `Intl.NumberFormat('id-ID')` and `Intl.DateTimeFormat('id-ID')`.
- Keep it short. If a sentence can lose a word without losing meaning, lose it.
- Do not use em dashes or emoji in UI text.
