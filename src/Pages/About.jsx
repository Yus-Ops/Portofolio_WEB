import React, { useEffect, memo } from "react"
import { FileText, Code, Sparkles, GraduationCap, Briefcase, Trophy, BookOpen } from "lucide-react"
import AOS from 'aos'
import 'aos/dist/aos.css'

// Memoized Components
const Header = memo(() => (
  <div className="text-center lg:mb-8 mb-2 px-[5%]">
    <div className="inline-block relative group">
      <h2 
        className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-cyan-500" 
        data-aos="zoom-in-up"
        data-aos-duration="600"
      >
        About Me
      </h2>
    </div>
    <p 
      className="mt-2 text-slate-600 max-w-2xl mx-auto text-base sm:text-lg flex items-center justify-center gap-2"
      data-aos="zoom-in-up"
      data-aos-duration="800"
    >
      <Sparkles className="w-5 h-5 text-emerald-500" />
      Transforming ideas into digital experiences
      <Sparkles className="w-5 h-5 text-emerald-500" />
    </p>
  </div>
));

const ProfileImage = memo(() => (
  <div className="flex justify-end items-center sm:p-12 sm:py-0 sm:pb-0 p-0 py-2 pb-2">
    <div 
      className="relative group" 
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      {/* Gradient backgrounds dengan tema hijau-biru */}
      <div className="absolute -inset-6 opacity-[25%] z-0 hidden sm:block">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-cyan-600 rounded-full blur-2xl animate-spin-slower" />
        <div className="absolute inset-0 bg-gradient-to-l from-cyan-500 to-emerald-500 rounded-full blur-2xl animate-pulse-slow opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-500 to-cyan-500 rounded-full blur-2xl animate-float opacity-50" />
      </div>

      <div className="relative">
       <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-full overflow-hidden shadow-[0_0_40px_rgba(34,197,94,0.3)] transform transition-all duration-700 group-hover:scale-105">
          <div className="absolute inset-0 border-4 border-white/20 rounded-full z-20 transition-all duration-700 group-hover:border-emerald-300/40 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 z-10 transition-opacity duration-700 group-hover:opacity-0 hidden sm:block" />
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/20 via-transparent to-cyan-500/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 hidden sm:block" />

          <img
            src="/Photo.jpg"
            alt="Profile"
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
            loading="lazy"
          />

          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 z-20 hidden sm:block">
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-white/10 to-transparent transform translate-y-full group-hover:-translate-y-full transition-transform duration-1000 delay-100" />
            <div className="absolute inset-0 rounded-full border-8 border-white/10 scale-0 group-hover:scale-100 transition-transform duration-700 animate-pulse-slow" />
          </div>
        </div>
      </div>
    </div>
  </div>
));

// Data perjalanan / experience. Edit/isi sesuai pengalaman aslimu.
const EXPERIENCES = [
  {
    icon: GraduationCap,
    period: "2023 — Sekarang",
    title: "S1 Teknik Informatika",
    org: "Universitas Islam Sultan Agung (UNISSULA)",
    description:
      "Fokus pada Machine Learning & Deep Learning — Computer Vision, NLP, dan MLOps.",
  },
  {
    icon: Trophy,
    period: "Jul 2025 — Des 2025",
    title: "Digital Talent Scholarship",
    org: "Kementerian Komdigi RI",
    description: "Program beasiswa pelatihan kompetensi digital di bidang AI/Machine Learning.",
  },
  {
    icon: Briefcase,
    period: "Okt 2025 — Nov 2025",
    title: "Project-Based Internship: Data Scientist",
    org: "Rakamin Academy",
    description: "Menyelesaikan proyek studi kasus sebagai Data Scientist — analisis data dan pemodelan Machine Learning.",
  },
  {
    icon: BookOpen,
    period: "Feb 2026 — Jul 2026",
    title: "Pijak – AI Training Program",
    org: "Dicoding × IBM SkillsBuild",
    description: "Program pelatihan AI hasil kolaborasi Dicoding dan IBM SkillsBuild.",
  },
];

const TimelineItem = memo(({ icon: Icon, period, title, org, description, isLast }) => (
  <div className="relative pl-14 pb-10" data-aos="fade-up" data-aos-duration="800">
    {/* Garis vertikal penghubung */}
    {!isLast && (
      <span className="absolute left-[19px] top-12 bottom-0 w-px bg-gradient-to-b from-emerald-400 to-cyan-400/30" />
    )}
    {/* Ikon bulat */}
    <span className="absolute left-0 top-0 w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center shadow-md shadow-emerald-500/20">
      <Icon className="w-5 h-5 text-white" />
    </span>

    <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
      <span className="inline-block text-xs font-semibold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full mb-2">
        {period}
      </span>
      <h4 className="text-lg font-bold text-slate-800">{title}</h4>
      <p className="text-sm font-medium text-cyan-600 mb-2">{org}</p>
      <p className="text-sm text-slate-600 leading-relaxed">{description}</p>
    </div>
  </div>
));

// Fixed button component with proper styling
const HomeStyleButton = ({ href, text, icon: Icon, isPrimary }) => (
  <a 
    href={href} 
    className="group relative w-full lg:w-[160px] overflow-hidden inline-block"
    data-aos="fade-up"
    data-aos-duration={isPrimary ? "800" : "1000"}
  >
    <div className="relative h-11 rounded-lg border leading-none overflow-hidden transition-all duration-300 shadow-xl group-hover:shadow-2xl">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
      
      {/* Background based on button type */}
      <div className={`absolute inset-0 ${
        isPrimary 
          ? 'bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border-slate-600 group-hover:border-emerald-400'
          : 'bg-white border-emerald-500 group-hover:border-cyan-400'
      }`}></div>
      
      {/* Hover effect */}
      <div className={`absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ${
        isPrimary 
          ? 'bg-gradient-to-r from-emerald-500/0 via-emerald-500/20 to-cyan-500/0' 
          : ''
      }`}></div>
      
      {/* Button content */}
      <span className="absolute inset-0 flex items-center justify-center gap-2 text-sm group-hover:gap-3 transition-all duration-300">
        <span className={`font-semibold z-10 transition-colors duration-300 ${
          isPrimary 
            ? 'text-gray-100 group-hover:text-white' 
            : 'text-emerald-500 group-hover:text-emerald-400'
        }`}>
          {text}
        </span>
        <Icon
          className={`w-4 h-4 z-10 transform transition-all duration-300 ${
            isPrimary 
              ? 'text-emerald-400 group-hover:text-emerald-300' 
              : 'text-emerald-500 group-hover:text-cyan-400'
          } ${
            text === "Download CV" 
              ? "group-hover:translate-x-1 group-hover:scale-110" 
              : "group-hover:rotate-45 group-hover:scale-110"
          }`}
        />
      </span>
    </div>
  </a>
);

const AboutPage = () => {
  // Optimized AOS initialization
  useEffect(() => {
    const initAOS = () => {
      AOS.init({
        once: false, 
      });
    };

    initAOS();
    
    // Debounced resize handler
    let resizeTimer;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(initAOS, 250);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimer);
    };
  }, []);

  return (
    <div
      className="h-auto pb-12 sm:pb-16 bg-white overflow-hidden px-[5%] sm:px-[5%] lg:px-[10%] pt-10 sm:pt-0"
      id="About"
    >
      <Header />

      <div className="w-full mx-auto pt-8 sm:pt-12 relative">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <h2 
              className="text-3xl sm:text-4xl lg:text-5xl font-bold"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-cyan-500">
                Hello, I'm
              </span>
              <span 
                className="block mt-2 text-slate-800"
                data-aos="fade-right"
                data-aos-duration="1300"
              >
                Yusuf Ahmad
              </span>
            </h2>
            
            <p 
              className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed text-justify pb-4 sm:pb-0 font-semibold"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
             Saya mahasiswa Teknik Informatika di Universitas Islam Sultan Agung (UNISSULA) dengan ketertarikan mendalam di bidang Machine Learning, Deep Learning, NLP Model, CNN, dan Sentiment Analysis. Saya antusias membangun dan mengembangkan model yang tidak hanya akurat, tetapi juga dapat diterapkan langsung dalam solusi nyata — mulai dari tahap riset hingga deployment.
            </p>

            {/* Enhanced Quote Section with fixed closing quote */}
            <div 
              className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-5 my-6 shadow-xl overflow-hidden"
              data-aos="fade-up"
              data-aos-duration="1700"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 rounded-full blur-xl"></div>
              
              <div className="flex items-start">
                <div className="mr-3 mt-1 text-emerald-400">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                  </svg>
                </div>
                <blockquote className="text-white text-lg italic font-medium relative z-10">
                  "Building intelligent systems that support decisions — not make them for us."
                </blockquote>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4 lg:gap-4 lg:px-0 w-full">
              <div className="w-full lg:w-auto">
                <HomeStyleButton 
                href="https://drive.google.com/uc?export=download&id=1An-GMjod8DGF23KUBmGvDKa5ocssiNn5"
                text="Download CV"
                icon={FileText} 
                isPrimary={true}
                />
              </div>
              <div className="w-full lg:w-auto">
                <HomeStyleButton 
                  href="#Portofolio" 
                  text="View Projects" 
                  icon={Code} 
                  isPrimary={false}
                />
              </div>
            </div>
          </div>

          <ProfileImage />
        </div>

        {/* Experience / Perjalanan */}
        <div className="mt-20">
          <div className="text-center mb-10" data-aos="fade-up" data-aos-duration="800">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-800 inline-flex items-center gap-2">
              <Trophy className="w-6 h-6 text-emerald-500" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-cyan-500">
                Perjalanan & Experience
              </span>
            </h3>
            <p className="text-slate-600 max-w-xl mx-auto text-sm sm:text-base mt-2">
              Jejak pendidikan, pelatihan, dan pengalaman yang membentuk fokus saya di Machine Learning.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {EXPERIENCES.map((item, index) => (
              <TimelineItem
                key={index}
                {...item}
                isLast={index === EXPERIENCES.length - 1}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes spin-slower {
          to { transform: rotate(360deg); }
        }
        .animate-bounce-slow {
          animation: bounce 3s infinite;
        }
        .animate-pulse-slow {
          animation: pulse 3s infinite;
        }
        .animate-spin-slower {
          animation: spin-slower 8s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default memo(AboutPage);