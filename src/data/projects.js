// Data portofolio statis.
// Sumber tunggal untuk Portofolio.jsx (kartu proyek) dan ProjectDetail.jsx (/project/:id).
// CATATAN: ganti `Img` dengan screenshot asli (taruh di /public/projects/),
// `Github` dengan URL repo masing-masing, dan isi `Link` bila ada live demo.

export const projects = [
  {
    id: 1,
    Title: "Sistem Deteksi Duplikasi Judul Skripsi",
    Description:
      "Sistem berbasis NLP untuk mengukur kemiripan teks judul skripsi guna mencegah duplikasi topik penelitian. Dikembangkan sebagai proyek Tugas Akhir.",
    Img: "https://placehold.co/600x400/0f172a/34d399?text=Deteksi+Duplikasi+Judul",
    Link: "",
    Github: "https://github.com/Yus-Ops",
    Features: [
      "Pengukuran kemiripan semantik antar judul skripsi",
      "Deteksi dini potensi duplikasi topik penelitian",
      "Antarmuka pengecekan judul yang sederhana",
    ],
    TechStack: ["Python", "NLP", "scikit-learn", "Pandas"],
  },
  {
    id: 2,
    Title: "Klasifikasi Dengue (DBD) End-to-End",
    Description:
      "Klasifikasi diagnosis dengue dari data hematologi dengan pipeline MLOps lengkap: preprocessing otomatis, experiment tracking, CI/CD retraining, dan monitoring real-time. Hasil: ROC-AUC 0.82.",
    Img: "https://placehold.co/600x400/0f172a/22d3ee?text=Dengue+MLOps",
    Link: "",
    Github: "https://github.com/Yus-Ops",
    Features: [
      "Preprocessing otomatis via GitHub Actions",
      "Experiment tracking dengan MLflow + DagsHub",
      "CI/CD retraining berbasis Docker",
      "Monitoring real-time dengan Prometheus + Grafana",
      "Performa model ROC-AUC 0.82",
    ],
    TechStack: ["Python", "scikit-learn", "MLflow", "Docker", "Prometheus", "Grafana"],
  },
  {
    id: 3,
    Title: "Analisis Sentimen Berbahasa Indonesia",
    Description:
      "Perbandingan tiga arsitektur deep learning (IndoBERT + BiLSTM, Word2Vec + BiLSTM, dan TextCNN) untuk analisis sentimen teks berbahasa Indonesia. Akurasi pengujian terbaik 90,8% (IndoBERT).",
    // VERIFIKASI: samakan deskripsi dataset (ulasan game Google Play / rekomendasi
    // pariwisata TikTok + Google Play) dengan versi final di CV & portofolio PDF.
    Img: "https://placehold.co/600x400/0f172a/34d399?text=Sentimen+IndoBERT",
    Link: "",
    Github: "https://github.com/Yus-Ops",
    Features: [
      "Membandingkan 3 arsitektur: IndoBERT+BiLSTM, Word2Vec+BiLSTM, TextCNN",
      "Akurasi pengujian terbaik 90,8% (IndoBERT)",
      "Pipeline preprocessing teks Bahasa Indonesia",
    ],
    TechStack: ["Python", "TensorFlow", "Keras", "Hugging Face", "BERT"],
  },
  {
    id: 4,
    Title: "Klasifikasi Citra Makanan (EfficientNetB3)",
    Description:
      "Klasifikasi citra makanan dengan transfer learning EfficientNetB3 dan progressive fine-tuning 3 fase. Akurasi validasi 90,70% pada 12.048 gambar (8 kelas), di-deploy ke TensorFlow Lite & TensorFlow.js.",
    Img: "https://placehold.co/600x400/0f172a/22d3ee?text=Food+Classifier",
    Link: "",
    Github: "https://github.com/Yus-Ops",
    Features: [
      "Transfer learning dengan EfficientNetB3",
      "Progressive fine-tuning 3 fase",
      "Akurasi validasi 90,70% (8 kelas, 12.048 gambar)",
      "Deploy ke TensorFlow Lite & TensorFlow.js",
    ],
    TechStack: ["Python", "TensorFlow", "Keras", "EfficientNet"],
  },
  {
    id: 5,
    Title: "Klasifikasi Publikasi Akademik",
    Description:
      "Scraping 1.065 publikasi dosen dari Google Scholar dengan BeautifulSoup, pelabelan hybrid (rule + LLM), dan klasifikasi menggunakan KNN dengan akurasi 86%.",
    Img: "https://placehold.co/600x400/0f172a/34d399?text=Klasifikasi+Publikasi",
    Link: "",
    Github: "https://github.com/Yus-Ops",
    Features: [
      "Scraping 1.065 publikasi via BeautifulSoup",
      "Pelabelan hybrid berbasis rule + LLM",
      "Klasifikasi dengan KNN (akurasi 86%)",
    ],
    TechStack: ["Python", "scikit-learn", "BeautifulSoup", "Pandas"],
  },
  {
    id: 6,
    Title: "Credit Scoring & Fraud Detection",
    Description:
      "Studi kasus project-based learning untuk klasifikasi keamanan finansial menggunakan Logistic Regression dan LightGBM dengan evaluasi berbasis AUC.",
    Img: "https://placehold.co/600x400/0f172a/22d3ee?text=Credit+Scoring",
    Link: "",
    Github: "https://github.com/Yus-Ops",
    Features: [
      "Studi kasus credit scoring & fraud detection",
      "Model Logistic Regression & LightGBM",
      "Evaluasi performa berbasis AUC",
    ],
    TechStack: ["Python", "scikit-learn", "LightGBM", "Pandas"],
  },
];

// Sertifikat masih kosong — isi nanti dengan { id, Img, kategori, link }.
// kategori yang didukung tab: "bootcamp" | "volunteer" | "internship".
export const certificates = [];
