import React, { useEffect, memo, useMemo } from "react"
import { FileText, Code, Award, Globe, ArrowUpRight, Sparkles } from "lucide-react"
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

const StatCard = memo(({ icon: Icon, color, value, label, description, animation }) => (
  <div data-aos={animation} data-aos-duration={1300} className="relative group">
    <div className="relative z-10 bg-white rounded-2xl p-6 border border-slate-200 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl h-full flex flex-col justify-between shadow-md">
      <div className={`absolute -z-10 inset-0 bg-gradient-to-br ${color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
      
      <div className="flex items-center justify-between mb-4">
        <div className={`w-16 h-16 rounded-full flex items-center justify-center ${color.replace('bg-gradient-to-br', 'bg-gradient-to-br')} opacity-10 group-hover:opacity-20 transition-opacity`}>
          <Icon className="w-8 h-8 text-emerald-600" />
        </div>
        <span 
          className="text-4xl font-bold text-slate-800"
          data-aos="fade-up-left"
          data-aos-duration="1500"
          data-aos-anchor-placement="top-bottom"
        >
          {value}
        </span>
      </div>

      <div>
        <p 
          className="text-sm uppercase tracking-wider text-slate-500 mb-2 font-medium"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-anchor-placement="top-bottom"
        >
          {label}
        </p>
        <div className="flex items-center justify-between">
          <p 
            className="text-xs text-slate-600"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-anchor-placement="top-bottom"
          >
            {description}
          </p>
          <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-500 transition-colors" />
        </div>
      </div>
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
  // Memoized calculations
  const { totalProjects, totalCertificates, YearExperience } = useMemo(() => {
    const storedProjects = JSON.parse(localStorage.getItem("projects") || "[]");
    const storedCertificates = JSON.parse(localStorage.getItem("certificates") || "[]");
    
    const startDate = new Date("2024-07-06");
    const today = new Date();
    const experience = today.getFullYear() - startDate.getFullYear() -
      (today < new Date(today.getFullYear(), startDate.getMonth(), startDate.getDate()) ? 1 : 0);

    return {
      totalProjects: storedProjects.length,
      totalCertificates: storedCertificates.length,
      YearExperience: experience
    };
  }, []);

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

  // Memoized stats data dengan tema hijau-biru
  const statsData = useMemo(() => [
    {
      icon: Code,
      color: "from-emerald-500 to-cyan-500",
      value: totalProjects,
      label: "Total Projects",
      description: "Intelligent solutions powered by Machine Learning.",
      animation: "fade-right",
    },
    {
      icon: Award,
      color: "from-emerald-500 to-cyan-500",
      value: totalCertificates,
      label: "Certificates",
      description: "Professional skills validated",
      animation: "fade-up",
    },
    {
      icon: Globe,
      color: "from-emerald-500 to-cyan-500",
      value: YearExperience,
      label: "Years of Experience",
      description: "Continuous learning journey",
      animation: "fade-left",
    },
  ], [totalProjects, totalCertificates, YearExperience]);

  return (
    <div
      className="h-auto pb-[10%] bg-white overflow-hidden px-[5%] sm:px-[5%] lg:px-[10%] pt-10 sm:pt-0" 
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
             Saya adalah mahasiswa aktif Teknik Informatika di Universitas Islam Sultan Agung (UNISSULA) yang memiliki ketertarikan besar dalam pengembangan model Machine Learning dan Software Developer. Saya antusias menciptakan pengalaman digital yang interaktif serta terus berupaya mengembangkan solusi inovatif di setiap proyek yang saya kerjakan.
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
                  href="" 
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

        <a href="#Portofolio">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 cursor-pointer">
            {statsData.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </div>
        </a>
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