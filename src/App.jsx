import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Work from './components/Work';
import DesignProcess from './components/DesignProcess';
import BeyondInterface from './components/BeyondInterface';
import Connect from './components/Connect';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CaseStudyModal from './components/CaseStudyModal';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const [resumeOpen, setResumeOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -65% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.getAttribute('id'));
        }
      });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="portfolio-app">
      {/* Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <About />
        <Education />
        <Experience onOpenResume={() => setResumeOpen(true)} />
        <Skills />
        <Work onSelectProject={(id) => setSelectedProjectId(id)} />
        <DesignProcess />
        <BeyondInterface />
        <Connect />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Case Study Detail Modal */}
      {selectedProjectId && (
        <CaseStudyModal
          projectId={selectedProjectId}
          onClose={() => setSelectedProjectId(null)}
          onSelectProject={(id) => setSelectedProjectId(id)}
        />
      )}

      {/* Resume Modal */}
      {resumeOpen && (
        <ResumeModal onClose={() => setResumeOpen(false)} />
      )}
    </div>
  );
}
