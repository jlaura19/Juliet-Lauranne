import { useState } from "react";
import AboutSection from "./components/AboutSection.jsx";
import ContactSection from "./components/ContactSection.jsx";
import EducationSection from "./components/EducationSection.jsx";
import Hero from "./components/Hero.jsx";
import HireModal from "./components/HireModal.jsx";
import Navbar from "./components/Navbar.jsx";
import ProjectsSection from "./components/ProjectsSection.jsx";
import SkillsSection from "./components/SkillsSection.jsx";

export default function App() {
  const [hireModalOpen, setHireModalOpen] = useState(false);

  return (
    <>
      <div aria-hidden="true" className="ambient-background">
        <div className="ambient-orb ambient-orb-cyan" />
        <div className="ambient-orb ambient-orb-violet" />
      </div>
      <Navbar onHireClick={() => setHireModalOpen(true)} />
      <main>
        <Hero onHireClick={() => setHireModalOpen(true)} />
        <AboutSection />
        <EducationSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <footer className="border-t border-line/70 px-5 py-6 text-center text-sm text-muted">
        <span className="font-mono text-cyan">dev::portfolio</span>
        <span className="mx-2">·</span>
        Built with curiosity in Nairobi, Kenya
      </footer>
      <HireModal
        open={hireModalOpen}
        onClose={() => setHireModalOpen(false)}
      />
    </>
  );
}
