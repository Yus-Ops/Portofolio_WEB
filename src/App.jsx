import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./index.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Portofolio from "./Pages/Portofolio";
import WelcomeScreen from "./Pages/WelcomeScreen";
import NotFoundPage from "./Pages/404";
import Footer from "./Pages/Footer";
import ProjectDetails from "./components/ProjectDetail";
import AnimatedBackground from "./components/Background";
import Navbar from "./components/Navbar";
import { AnimatePresence } from "framer-motion";

const LandingPage = ({ showWelcome, setShowWelcome, activeSection, setActiveSection }) => {
  useEffect(() => {
    const sections = document.querySelectorAll("section, footer");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id || "Footer";
            setActiveSection(id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, [setActiveSection]);

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {showWelcome && (
          <WelcomeScreen onLoadingComplete={() => setShowWelcome(false)} />
        )}
      </AnimatePresence>

      {!showWelcome && (
        <div className="min-h-screen">
          <Navbar activeSection={activeSection} />
          <AnimatedBackground />
          <Home id="Home" />
          <About id="About" />
          <Portofolio id="Portofolio" />
          <Footer id="Footer" />
        </div>
      )}
    </div>
  );
};

const ProjectPageLayout = ({ activeSection }) => (
  <div className="min-h-screen">
    <Navbar activeSection={activeSection} />
    <ProjectDetails />
    <Footer id="Footer" />
  </div>
);

function App() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [activeSection, setActiveSection] = useState("Home");

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <LandingPage
              showWelcome={showWelcome}
              setShowWelcome={setShowWelcome}
              activeSection={activeSection}
              setActiveSection={setActiveSection}
            />
          }
        />
        <Route
          path="/project/:id"
          element={<ProjectPageLayout activeSection={activeSection} />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
