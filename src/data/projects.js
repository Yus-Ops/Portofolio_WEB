// Data portofolio statis.
// Sumber tunggal untuk Portofolio.jsx (kartu proyek) dan ProjectDetail.jsx (/project/:id).
// CATATAN: ganti `Img` dengan screenshot asli (taruh di /public/projects/),
// `Github` dengan URL repo masing-masing, dan isi `Link` bila ada live demo.

export const projects = [
  {
    id: 1,
    Title: "Chatbot Panduan Akademik FTI UNISSULA",
    Description:
      "Chatbot RAG tanya–jawab Panduan Akademik FTI UNISSULA yang menjawab hanya dari isi panduan resmi. Pipeline: ekspansi singkatan → retrieval (e5) → reranking (cross-encoder) → LLM via API dengan fallback otomatis antar-provider, menghasilkan jawaban streaming beserta sumbernya.",
    Img: "/projects/Chatbot.png",
    Link: "https://chatbot-panduan-akademik-unissula.vercel.app/",
    Github: "https://github.com/Yus-Ops/Chatbot-Panduan-Akademik-UNISSULA",
    Features: [
      "Retrieval-Augmented Generation: jawaban hanya dari panduan akademik resmi",
      "Ekspansi singkatan + retrieval embedding e5 + reranking cross-encoder",
      "LLM via API dengan fallback otomatis antar-provider (openmodel.ai → Groq → openagentic.id)",
      "Jawaban streaming (SSE) lengkap dengan sumber/sitasi",
      "Retriever (embedder + reranker) berjalan lokal di CPU, backend tanpa GPU",
    ],
    TechStack: ["Python", "FastAPI", "Next.js", "Hugging Face", "FAISS", "Docker"],
  },
  {
    id: 2,
    Title: "Klasifikasi Dengue (DBD) End-to-End",
    Description:
      "Klasifikasi diagnosis dengue dari data hematologi dengan pipeline MLOps lengkap: preprocessing otomatis, experiment tracking, CI/CD retraining, dan monitoring real-time. Hasil: ROC-AUC 0.82.",
    Img: "https://placehold.co/600x400/0f172a/22d3ee?text=Dengue+MLOps",
    Link: "",
    Github: "https://github.com/Yus-Ops/Workflow-CI",
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
    Title: "Sentimen Analisis MCGG",
    Description:
      "Analisis sentimen 20.000 ulasan aplikasi MCGG: preprocessing teks (cleaning, normalisasi slang, stemming Sastrawi, stopword removal), pelabelan otomatis 3 kelas (positif/negatif/netral) dengan IndoBERT, lalu perbandingan 3 skema deep learning. Skema terbaik BiLSTM + IndoBERT mencapai akurasi uji 90,82%.",
    Img: "https://placehold.co/600x400/0f172a/34d399?text=Sentimen+Analisis+MCGG",
    Link: "",
    Github: "https://github.com/Yus-Ops/Sentimen-Analisis-MCGG",
    Features: [
      "Pelabelan otomatis 3 kelas sentimen (positif/negatif/netral) dengan IndoBERT",
      "Preprocessing: cleaning, normalisasi slang, stemming (Sastrawi), stopword removal (NLTK)",
      "Perbandingan 3 skema: BiLSTM+IndoBERT, Word2Vec+BiLSTM, TextCNN",
      "Skema terbaik BiLSTM + IndoBERT: akurasi uji 90,82% (F1 ~0,91, tanpa overfitting)",
      "Visualisasi Word Cloud per kelas sentimen",
    ],
    TechStack: ["Python", "PyTorch", "TensorFlow", "Keras", "Hugging Face", "NLTK", "scikit-learn"],
  },
  {
    id: 4,
    Title: "Klasifikasi Citra Makanan (EfficientNetB3)",
    Description:
      "Klasifikasi citra makanan dengan transfer learning EfficientNetB3 dan progressive fine-tuning 3 fase. Akurasi validasi 90,70% pada 12.048 gambar (8 kelas), di-deploy ke TensorFlow Lite & TensorFlow.js.",
    Img: "https://placehold.co/600x400/0f172a/22d3ee?text=Food+Classifier",
    Link: "",
    Github: "https://github.com/Yus-Ops/Food-Classifier",
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
    Title: "PBI Rakamin",
    Description:
      "Home Credit Score — final project Rakamin Data Science. Memprediksi Probability of Default, mengubahnya menjadi credit score, lalu menerjemahkannya ke kebijakan persetujuan 3-tier berbasis ekonomi beserta estimasi Net Profit. LightGBM terkalibrasi mencapai ROC-AUC 0,764 (out-of-fold).",
    Img: "https://placehold.co/600x400/0f172a/22d3ee?text=Home+Credit+Score",
    Link: "",
    Github: "https://github.com/Yus-Ops/Final-Project-Rakamin",
    Features: [
      "Prediksi Probability of Default → konversi ke credit score (rentang 269–886)",
      "Logistic Regression vs LightGBM, dievaluasi ROC-AUC out-of-fold (0,764)",
      "Kalibrasi probabilitas (isotonic) agar andal untuk keputusan finansial",
      "Kebijakan persetujuan 3-tier berbasis ekonomi + simulasi Net Profit (uplift +6%)",
      "Fair-lending: CODE_GENDER dibuang; usia hanya untuk pricing, bukan penolakan",
    ],
    TechStack: ["Python", "Pandas", "NumPy", "scikit-learn", "LightGBM", "Matplotlib"],
  },
];

// Sertifikat masih kosong — isi nanti dengan { id, Img, kategori, link }.
// kategori yang didukung tab: "bootcamp" | "volunteer" | "internship".
export const certificates = [];
