# CLAUDE.md — Panduan Pengembangan Portofolio Web Yusuf Ahmad

## Konteks Proyek

Repositori ini berisi kode untuk web portofolio pribadi
(`https://portofolio-web-yus.vercel.app/`, domain: `yus.my.id`).
Basis kode awalnya merupakan hasil *clone* dari *template* milik orang lain
(**kreator asli: "Eki Zulfar Rachman" / "ekizr"**).

Tujuan utama:
1. Membersihkan sisa kode, teks *dummy*, metadata, atau aset dari kreator asli.
2. Mempersonalisasi desain, struktur, dan konten agar 100% mencerminkan identitas Yusuf.
3. Refaktor kode agar lebih rapi, efisien, dan mudah di-*maintenance*.

Positioning portofolio ini **fokus pada Machine Learning Engineering** — desain dan konten
harus mencerminkan satu identitas yang konsisten, bukan generalis web/lainnya.

---

## Aturan Kerja & Prioritas

* **JANGAN ubah section `Home` dan `About Me`.** Keduanya sudah final (konten & struktur).
  Section selain itu boleh diubah/ditingkatkan.
* **Kerjakan frontend lebih dulu, baru backend.** Selesaikan UI, konten, dan responsivitas
  sebelum menyentuh logika data/backend.
* **Pembersihan template (PRIORITAS):** Cari dan ganti semua jejak kreator asli, khususnya:
  - Tag `<head>`: `meta description`, `meta keywords`, `<title>`, dan tag Open Graph/Twitter
    yang masih memuat nama "Eki Zulfar Rachman"/"ekizr" atau mendeskripsikan pemilik sebagai
    "pengembang web/front-end". Ganti dengan metadata Yusuf yang berfokus pada Machine Learning.
  - File SEO statis: `index.html`, `sitemap.xml`, `robots.txt`, `manifest`, favicon, dan
    aset gambar (mis. `Meta.png`) milik kreator asli.

---

## Profil Developer (Konten yang Harus Dimasukkan)

* **Nama:** Yusuf Ahmad
* **Peran:** Mahasiswa tingkat akhir Teknik Informatika, Universitas Islam Sultan Agung (UNISSULA).
* **Fokus:** Machine Learning & Deep Learning — Computer Vision, NLP berbahasa Indonesia, dan MLOps
  (deployment & monitoring model di produksi).
* **Posisi yang dituju:** Machine Learning Engineer (magang).

### Tech Stack
* **Bahasa:** Python, SQL
* **Machine Learning / DL:** TensorFlow, Keras, scikit-learn, IndoBERT, Hugging Face, EfficientNet, CNN, Transfer Learning
* **MLOps & Tools:** Docker, Git, MLflow, DagsHub, Prometheus, Grafana, TensorFlow Lite, TensorFlow.js
* **Data:** pandas, NumPy, Matplotlib

---

## Daftar Proyek Unggulan untuk Portofolio

Tampilkan secara menarik. Tiap proyek sebaiknya memuat: masalah yang diselesaikan,
pendekatan/tech stack, hasil terukur, dan link repo GitHub.

* **Sistem Deteksi Duplikasi Judul Skripsi (Tugas Akhir):** Sistem berbasis NLP untuk mengukur
  kemiripan teks judul skripsi guna mencegah duplikasi topik penelitian.
* **Sistem Klasifikasi Dengue (DBD) End-to-End:** Klasifikasi diagnosis dengue dari data hematologi
  dengan pipeline MLOps lengkap — preprocessing otomatis (GitHub Actions), experiment tracking
  (MLflow + DagsHub), CI/CD retraining (Docker), monitoring real-time (Prometheus + Grafana).
  Hasil: ROC-AUC 0.82.
* **Analisis Sentimen Berbahasa Indonesia:** Perbandingan 3 arsitektur (IndoBERT + BiLSTM,
  Word2Vec + BiLSTM, TextCNN) pada ulasan Google Play. Akurasi pengujian terbaik 90,8% (IndoBERT).
  *(VERIFIKASI: dataset ulasan game Google Play, atau rekomendasi pariwisata TikTok + Google Play?
  Samakan dengan versi yang benar agar konsisten dengan CV & portofolio PDF.)*
* **Klasifikasi Citra Makanan (EfficientNetB3):** Transfer learning + progressive fine-tuning 3 fase,
  akurasi validasi 90,70% pada 12.048 gambar 8 kelas, di-deploy ke TensorFlow Lite & TensorFlow.js.
* **Klasifikasi Publikasi Akademik:** Scraping 1.065 publikasi dosen dari Google Scholar (BeautifulSoup),
  pelabelan hybrid rule + LLM, klasifikasi KNN (akurasi 86%).
* **Credit Scoring & Fraud Detection:** Studi kasus klasifikasi keamanan finansial (Logistic Regression,
  LightGBM, evaluasi AUC). *(Bingkai jujur sebagai project-based learning / studi kasus — bukan
  internship atau sistem produksi.)*

---

## Strategi Data / Backend

* Konten portofolio (proyek, skill, dll.) bersifat **statis** — simpan sebagai data di frontend
  (mis. file `projects.json` / data TS, atau MDX). **Tidak perlu database** untuk menampilkannya.
* **Hindari Supabase/DB untuk konten statis.** Free-tier Supabase otomatis *pause* setelah ±1 minggu
  tidak aktif, sehingga situs bisa rusak tepat saat recruiter membukanya — risiko yang tidak sepadan
  untuk portofolio bertrafik rendah.
* Jika perlu **form kontak**, gunakan layanan form tanpa DB (mis. Formspree, Web3Forms) atau email API
  (mis. Resend) — bukan database.
* Backend hanya ditambahkan jika ada fitur yang benar-benar memerlukan data dinamis.

---

## Aturan Teknis dan Coding

* **Fokus pada Pembersihan:** Jika menemukan *class* CSS tak terpakai, komponen *orphan*, atau
  komentar/aset dari kreator asli, segera hapus atau refaktor.
* **Responsivitas:** Pastikan semua elemen UI baru tampil sempurna di *mobile*, *tablet*, dan *desktop*.
* **Kecepatan & Aksesibilitas:** Optimalkan gambar, kurangi ukuran *bundle* bila memungkinkan, dan
  jaga kontras warna agar nyaman dibaca (target WCAG AA).
* **Konsistensi Data:** Konten proyek di web harus konsisten dengan CV, LinkedIn, dan portofolio PDF.
  Jangan menambahkan klaim, metrik, atau peran yang tidak bisa dipertanggungjawabkan.
* **Pola Interaksi:** Berikan kode lengkap saat mengusulkan perubahan — bukan potongan terputus.
  Sebutkan file mana yang perlu diubah secara spesifik.

---

## Format Tanggapan yang Diharapkan

Setiap permintaan bantuan, berikan:
1. Analisis singkat masalah atau kode saat ini.
2. Usulan solusi atau desain UI/UX.
3. Kode yang sudah direvisi secara utuh.