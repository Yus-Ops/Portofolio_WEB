# Portofolio Web — Yusuf Ahmad

Website portofolio pribadi dengan positioning **Machine Learning Engineering**. Menampilkan profil, proyek ML, skill, dan formulir kontak.

## 🚀 Live Demo

**Website:** [https://portofolio-web-yus.vercel.app/](https://portofolio-web-yus.vercel.app/)

## 🛠️ Tech Stack

- **ReactJS** + **Vite** — frontend & tooling
- **Tailwind CSS** + **Material UI** — styling & komponen
- **Framer Motion** & **AOS** — animasi dan transisi
- **Lucide** — ikon
- **SweetAlert2** — dialog notifikasi
- **Web3Forms** — pengiriman formulir kontak (tanpa backend/database)

> Konten portofolio (proyek, skill) bersifat **statis** dan disimpan di `src/data/projects.js`.
> Tidak ada database — situs tetap ringan dan andal untuk dibuka kapan saja.

## 📋 Prasyarat

- **Node.js** 18.x atau lebih baru
- **npm** (atau yarn)

## 🏃 Menjalankan Secara Lokal

```bash
# 1. Install dependencies
npm install
# Jika ada konflik peer dependency:
npm install --legacy-peer-deps

# 2. Jalankan dev server
npm run dev
```

Buka URL yang tampil di terminal (biasanya `http://localhost:5173`).

Perintah lain:

```bash
npm run build    # Build produksi ke folder dist/
npm run preview  # Preview hasil build secara lokal
npm run lint     # Jalankan ESLint
```

## 🔧 Environment Variables

Salin `.env.example` menjadi `.env` di root proyek, lalu isi key-nya:

```env
# Access key Web3Forms untuk formulir kontak (daftar gratis di https://web3forms.com)
VITE_WEB3FORMS_KEY=your-web3forms-access-key
```

- Semua variabel harus diawali `VITE_` agar terbaca oleh Vite.
- Restart dev server setelah membuat/mengubah `.env`.
- Jangan commit file `.env` (sudah ada di `.gitignore`). Gunakan `.env.example` sebagai acuan.

## 🗂️ Struktur Singkat

```
src/
├── App.jsx              # Routing & layout utama (Home, About, Portofolio, Contact, Footer)
├── Pages/               # Section halaman (Home, About, Portofolio, Footer, dll.)
├── components/          # Komponen UI (Navbar, CardProject, Contact, ProjectDetail, dll.)
└── data/projects.js     # Sumber data statis: daftar proyek
```

> Logo tech stack tersimpan sebagai aset lokal di `public/tech/`.
> Timeline pengalaman pada section About diedit lewat array `EXPERIENCES` di `src/Pages/About.jsx`.

- Halaman detail proyek tersedia di rute `/project/:id` dan membaca langsung dari `src/data/projects.js`.

## 📦 Menambah / Mengubah Proyek

Edit `src/data/projects.js`. Setiap proyek memuat: `id`, `Title`, `Description`, `Img`,
`Link` (live demo, boleh kosong), `Github`, `Features[]`, dan `TechStack[]`.
Taruh screenshot proyek di `public/` lalu rujuk pada field `Img`.

## ☁️ Deployment

Proyek di-deploy ke **Vercel**. File `vercel.json` mengarahkan semua route ke `/`
agar client-side routing (rute `/project/:id`) berfungsi pada deep link.
