import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from 'react';
import "./index.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import AnimatedBackground from "./components/Background";
import Navbar from "./components/Navbar";
import Portofolio from "./Pages/Portofolio";
import ContactPage from "./Pages/Contact";
import ProjectDetails from "./components/ProjectDetail";
import WelcomeScreen from "./Pages/WelcomeScreen";
import { AnimatePresence } from 'framer-motion';
import NotFoundPage from "./Pages/404";
import { Github, Linkedin, Mail, ExternalLink, Instagram } from 'lucide-react';

// ⬇️ Footer tetap utuh — tidak dihapus sama sekali
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white border-t border-slate-200 py-12 px-[5%] sm:px-[10%]">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center">
              <span className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-transparent bg-clip-text">
                Yusuf Ahmad
              </span>
            </h3>
            <p className="text-slate-600 mb-4">
              Machine Learning Enthusiast & Front-End Developer
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="bg-emerald-50 p-2 rounded-full text-emerald-600 hover:bg-emerald-100 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="bg-emerald-50 p-2 rounded-full text-emerald-600 hover:bg-emerald-100 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:youremail@example.com" className="bg-emerald-50 p-2 rounded-full text-emerald-600 hover:bg-emerald-100 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
              <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer" className="bg-emerald-50 p-2 rounded-full text-emerald-600 hover:bg-emerald-100 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-slate-800 mb-4">Navigasi</h4>
            <ul className="space-y-3">
              <li><a href="#Home" className="text-slate-600 hover:text-emerald-500 transition-colors flex items-center gap-2"><ExternalLink className="w-4 h-4" /> Home</a></li>
              <li><a href="#About" className="text-slate-600 hover:text-emerald-500 transition-colors flex items-center gap-2"><ExternalLink className="w-4 h-4" /> About</a></li>
              <li><a href="#Portofolio" className="text-slate-600 hover:text-emerald-500 transition-colors flex items-center gap-2"><ExternalLink className="w-4 h-4" /> Portfolio</a></li>
              <li><a href="#Contact" className="text-slate-600 hover:text-emerald-500 transition-colors flex items-center gap-2"><ExternalLink className="w-4 h-4" /> Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-slate-800 mb-4">Teknologi</h4>
            <ul className="space-y-2">
              {['ReactJS', 'Tailwind CSS', 'Python', 'TensorFlow', 'Scikit-Learn', 'Flask'].map((tech, index) => (
                <li key={index}>
                  <span className="text-slate-600 flex items-center gap-2">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                    {tech}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-slate-800 mb-4">Kontak</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-emerald-500 mt-0.5" />
                <span className="text-slate-600">youremail@example.com</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="text-emerald-500 mt-0.5" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor"><path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 11.19 19a19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2 4.33 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                <span className="text-slate-600">+62 123 4567 8901</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="text-emerald-500 mt-0.5" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                <span className="text-slate-600">Surabaya, Indonesia</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 text-center md:text-left">
            © {currentYear} Yusuf Ahmad. All rights reserved.
          </p>
          <p className="text-slate-500 mt-4 md:mt-0 text-center md:text-right">
            Designed & Built with ❤️ using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

// ✅ Landing page
const LandingPage = ({ showWelcome, setShowWelcome }) => {
  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {showWelcome && (
          <WelcomeScreen onLoadingComplete={() => setShowWelcome(false)} />
        )}
      </AnimatePresence>

      {!showWelcome && (
        <div className="min-h-screen">
          <Navbar />
          <AnimatedBackground />
          <div id="Home">
            <Home />
          </div>
          <div id="About">
            <About />
          </div>
          <div id="Portofolio">
            <Portofolio />
          </div>
          <div id="Contact">
            <ContactPage />
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
};

// 📂 Project detail page
const ProjectPageLayout = () => (
  <div className="min-h-screen">
    <Navbar />
    <ProjectDetails />
    <Footer />
  </div>
);

// 🧠 Root App
function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <LandingPage
              showWelcome={showWelcome}
              setShowWelcome={setShowWelcome}
            />
          }
        />
        <Route path="/project/:id" element={<ProjectPageLayout />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
