import React, { useState, useEffect, useCallback, memo } from "react";
import { Github, Linkedin, Mail, ExternalLink, Instagram, Sparkles } from "lucide-react";

// Badge di atas
const StatusBadge = memo(() => (
  <div className="inline-block lg:mx-0" data-aos="zoom-in" data-aos-delay="400">
    <div className="relative">
      <div className="px-3 sm:px-4 py-2 rounded-full bg-slate-900 border border-slate-700 shadow-lg">
        <span className="text-emerald-400 sm:text-sm text-[0.7rem] font-semibold flex items-center">
          <Sparkles className="sm:w-4 sm:h-4 w-3 h-3 mr-2" />
          Ready to Innovate
        </span>
      </div>
    </div>
  </div>
));

// Judul utama
const MainTitle = memo(() => (
  <div className="space-y-2" data-aos="fade-up" data-aos-delay="600">
    <h1 className="text-5xl sm:text-6xl md:text-6xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-slate-900">
      Machine
      <br />
      <span className="bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text text-transparent inline-block">
        Learning
      </span>
    </h1>
  </div>
));

// Stack teknologi
const TechStack = memo(({ tech }) => (
  <div className="px-4 py-2 hidden sm:block rounded-full bg-slate-800 border border-slate-600 text-sm text-emerald-300 hover:bg-slate-700 hover:text-emerald-200 transition-all duration-300 shadow-md">
    {tech}
  </div>
));

// Tombol CTA
const CTAButton = memo(({ href, text, icon: Icon }) => (
  <a href={href}>
    <button className="group relative w-[160px] overflow-hidden">
      <div className="relative h-11 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-lg border border-slate-600 group-hover:border-emerald-400 leading-none overflow-hidden shadow-xl group-hover:shadow-2xl group-active:scale-95 transition-all duration-300">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/20 to-cyan-500/0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></div>
        <span className="absolute inset-0 flex items-center justify-center gap-2 text-sm group-hover:gap-3 transition-all duration-300">
          <span className="text-gray-100 font-semibold z-10 group-hover:text-white group-active:text-emerald-200 transition-colors duration-300">
            {text}
          </span>
          <Icon
            className={`w-4 h-4 text-emerald-400 group-hover:text-emerald-300 group-active:text-emerald-200 ${
              text === "Contact"
                ? "group-hover:translate-x-1 group-hover:scale-110"
                : "group-hover:rotate-45 group-hover:scale-110"
            } transform transition-all duration-300 z-10`}
          />
        </span>
      </div>
      <div className="absolute inset-0 rounded-lg bg-emerald-400/20 scale-0 group-active:scale-110 group-active:opacity-0 transition-all duration-300"></div>
    </button>
  </a>
));

// Tombol sosial media
const SocialLink = memo(({ icon: Icon, link }) => (
  <a href={link} target="_blank" rel="noopener noreferrer">
    <button className="group relative p-3 overflow-hidden">
      <div className="relative rounded-xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-2 flex items-center justify-center border border-slate-600 group-hover:border-cyan-400 group-active:scale-90 transition-all duration-300 shadow-lg group-hover:shadow-cyan-400/50">
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-500/0 via-cyan-500/10 to-emerald-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute inset-0 rounded-xl overflow-hidden">
          <div className="absolute w-full h-full bg-gradient-to-r from-transparent via-cyan-400/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
        </div>
        <Icon className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300 group-active:text-cyan-200 relative z-10 transform group-hover:scale-125 group-active:scale-110 group-hover:rotate-12 group-active:-rotate-6 transition-all duration-300" />
        <div className="absolute top-1 right-1 w-2 h-2 bg-emerald-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping"></div>
      </div>
      <div className="absolute inset-0 rounded-xl bg-cyan-400/30 scale-75 opacity-0 group-active:scale-125 group-active:opacity-100 transition-all duration-200"></div>
    </button>
  </a>
));

const TYPING_SPEED = 100;
const ERASING_SPEED = 50;
const PAUSE_DURATION = 2000;
const WORDS = ["Computer Science Student", "Machine Learning Enthusiast"];
const TECH_STACK = ["Python", "Scikit-Learn", "TensorFlow", "Flask"];
const SOCIAL_LINKS = [
  { icon: Github, link: " https://github.com/Yus-Ops" },
  { icon: Linkedin, link: "https://www.linkedin.com/in/yus-ops/" },
  { icon: Instagram, link: "https://www.instagram.com/scastlivy_" }
];

const Home = () => {
  const [text, setText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    return () => setIsLoaded(false);
  }, []);

  const handleTyping = useCallback(() => {
    if (isTyping) {
      if (charIndex < WORDS[wordIndex].length) {
        setText((prev) => prev + WORDS[wordIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      } else {
        setTimeout(() => setIsTyping(false), PAUSE_DURATION);
      }
    } else {
      if (charIndex > 0) {
        setText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      } else {
        setWordIndex((prev) => (prev + 1) % WORDS.length);
        setIsTyping(true);
      }
    }
  }, [charIndex, isTyping, wordIndex]);

  useEffect(() => {
    const timeout = setTimeout(
      handleTyping,
      isTyping ? TYPING_SPEED : ERASING_SPEED
    );
    return () => clearTimeout(timeout);
  }, [handleTyping]);

  return (
    <div className="min-h-screen bg-white overflow-hidden px-[5%] sm:px-[5%] lg:px-[10%] relative" id="Home">
      <div className={`relative z-10 transition-all duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
        <div className="container mx-auto min-h-screen">
          <div className="flex flex-col lg:flex-row items-center justify-center h-screen md:justify-between gap-0 sm:gap-12 lg:gap-20">
            {/* Kolom Kiri */}
            <div className="w-full lg:w-1/2 space-y-6 sm:space-y-8 text-left lg:text-left order-1 lg:order-1 lg:mt-0" data-aos="fade-right" data-aos-delay="200">
              <div className="space-y-4 sm:space-y-6">
                <StatusBadge />
                <MainTitle />

                <div className="h-8 flex items-center" data-aos="fade-up" data-aos-delay="800">
                  <span className="text-xl md:text-2xl text-slate-800 font-medium">
                    {text}
                  </span>
                  <span className="w-[3px] h-6 bg-gradient-to-t from-emerald-500 to-cyan-500 ml-1 animate-blink"></span>
                </div>

                <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium" data-aos="fade-up" data-aos-delay="1000">
                  Menciptakan model Machine Learning yang Inovatif, Adaptif dan efisien untuk Kebutuhan Digital Masa Kini.
                </p>

                <div className="flex flex-wrap gap-3 justify-start" data-aos="fade-up" data-aos-delay="1200">
                  {TECH_STACK.map((tech, index) => (
                    <TechStack key={index} tech={tech} />
                  ))}
                </div>

                <div className="flex flex-row gap-3 w-full justify-start" data-aos="fade-up" data-aos-delay="1400">
                  <CTAButton href="#Portofolio" text="Projects" icon={ExternalLink} />
                  <CTAButton href="#Footer" text="Contact" icon={Mail} />
                </div>

                <div className="hidden sm:flex gap-4 justify-start" data-aos="fade-up" data-aos-delay="1600">
                  {SOCIAL_LINKS.map((social, index) => (
                    <SocialLink key={index} {...social} />
                  ))}
                </div>
              </div>
            </div>

            {/* Kolom Kanan */}
            <div className="w-full py-[10%] sm:py-0 lg:w-1/2 h-auto lg:h-[600px] xl:h-[750px] relative flex items-center justify-center order-2 lg:order-2 mt-8 lg:mt-0" data-aos="fade-left" data-aos-delay="600">
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="relative w-full h-full max-w-lg max-h-lg">
                  <div className="w-full h-full transform scale-110 hover:scale-115 transition-transform duration-500">
                    <iframe
                      src="https://lottie.host/embed/a4ebc9ae-2b4a-4d7b-a1a8-b974d0a12b2d/gbKgle5dhe.lottie"
                      style={{
                        width: '100%',
                        height: '100%',
                        border: 'none',
                        background: 'transparent'
                      }}
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 1s infinite;
        }
      `}</style>
    </div>
  );
};

export default memo(Home);
