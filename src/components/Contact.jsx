import React, { useState, useEffect } from "react";
import { User, Mail, MessageSquare, Send, Github, Linkedin, Instagram } from "lucide-react";
import Swal from "sweetalert2";
import AOS from "aos";
import "aos/dist/aos.css";

// Access Key Web3Forms (gratis, tanpa DB) dibaca dari .env -> VITE_WEB3FORMS_KEY
// Dapatkan key di https://web3forms.com (cukup masukkan email, tanpa signup).
const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_KEY;

const socials = [
  { icon: Github, href: "https://github.com/Yus-Ops", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/yus-ops", label: "LinkedIn" },
  {
    icon: Mail,
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=yus.ahm399@gmail.com",
    label: "Email",
  },
  { icon: Instagram, href: "https://instagram.com/scastlivy_", label: "Instagram" },
];

const Contact = ({ id }) => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    AOS.init({ once: false });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    Swal.fire({
      title: "Mengirim pesan...",
      html: "Mohon tunggu sebentar.",
      allowOutsideClick: false,
      didOpen: () => Swal.showLoading(),
    });

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `Pesan baru dari ${formData.name} - Portofolio`,
          from_name: formData.name,
          ...formData,
        }),
      });

      const result = await response.json();

      if (result.success) {
        Swal.fire({
          title: "Berhasil!",
          text: "Pesanmu sudah terkirim. Terima kasih!",
          icon: "success",
          confirmButtonColor: "#10b981",
          timer: 2500,
          timerProgressBar: true,
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error(result.message || "Gagal mengirim pesan.");
      }
    } catch (error) {
      Swal.fire({
        title: "Gagal",
        text: "Pesan tidak terkirim. Coba lagi atau hubungi via email.",
        icon: "error",
        confirmButtonColor: "#10b981",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id={id}
      className="md:px-[10%] px-[5%] w-full bg-white overflow-hidden py-16"
    >
      <div className="text-center pb-10" data-aos="fade-up" data-aos-duration="1000">
        <h2 className="text-4xl md:text-5xl font-bold text-center mx-auto">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-cyan-500">
            Get In Touch
          </span>
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto text-sm md:text-base mt-2">
          Punya pertanyaan, peluang kerja, atau ingin berkolaborasi? Kirim pesan dan
          saya akan membalas secepatnya.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Info & sosial media */}
        <div
          className="bg-emerald-50/50 border border-emerald-100 rounded-2xl p-8 flex flex-col justify-between"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <div>
            <h3 className="text-2xl font-bold text-slate-800 mb-3">Mari terhubung</h3>
            <p className="text-slate-600 mb-6">
              Saya terbuka untuk peluang sebagai Machine Learning Engineer (magang),
              kolaborasi proyek, maupun diskusi seputar ML/MLOps.
            </p>
            <div className="flex items-center gap-3 text-slate-700 mb-3">
              <Mail className="w-5 h-5 text-emerald-500" />
              <span>yus.ahm399@gmail.com</span>
            </div>
          </div>

          <div className="flex gap-4 mt-8">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="bg-white p-3 rounded-full text-emerald-600 border border-emerald-100 hover:bg-emerald-100 hover:scale-110 transition-all duration-300"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm space-y-5"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <div className="relative">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              name="name"
              placeholder="Nama"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all"
            />
          </div>

          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all"
            />
          </div>

          <div className="relative">
            <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-slate-400" />
            <textarea
              name="message"
              placeholder="Pesan"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold py-3 rounded-xl hover:from-emerald-600 hover:to-cyan-600 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            <Send className="w-5 h-5" />
            {isSubmitting ? "Mengirim..." : "Kirim Pesan"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
