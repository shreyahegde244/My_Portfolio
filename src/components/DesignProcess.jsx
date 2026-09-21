import React, { useRef, useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import TypewriterHeading from './TypewriterHeading';

const processIcons = [
  "🔍", // 01 Understand
  "🎯", // 02 Define
  "📐", // 03 Explore
  "🎨", // 04 Design
  "⚡", // 05 Prototype
  "🚀"  // 06 Refine
];

function ProcessCard({ step, title, desc, index }) {
  const cardRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0, isHovered: false });
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;

    setMousePos({ x, y, isHovered: true });
    setTilt({ rotateX, rotateY });
  };

  const handleMouseLeave = () => {
    setMousePos((prev) => ({ ...prev, isHovered: false }));
    setTilt({ rotateX: 0, rotateY: 0 });
  };

  return (
    <div
      ref={cardRef}
      className="process-interactive-card"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: mousePos.isHovered
          ? `perspective(800px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) translateY(-5px)`
          : 'perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0px)',
      }}
    >
      {/* Dynamic Cursor Spotlight Glow */}
      <div
        className="card-spotlight-glow"
        style={{
          opacity: mousePos.isHovered ? 1 : 0,
          background: `radial-gradient(280px circle at ${mousePos.x}px ${mousePos.y}px, rgba(0, 22, 122, 0.08), transparent 80%)`,
        }}
      />

      <div className="process-card-header">
        <div className="process-icon-box">
          <span className="process-emoji-icon">{processIcons[index] || "✦"}</span>
        </div>
        <span className="process-step-pill">Step {step}</span>
      </div>

      <h3 className="process-card-title">{title}</h3>
      <p className="process-card-desc">{desc}</p>

      {/* Interactive Bottom Progress Accent */}
      <div className="process-card-bar" />
    </div>
  );
}

export default function DesignProcess() {
  return (
    <section className="section section-alt" id="process">
      <div className="container">
        
        <div className="section-header" style={{ marginBottom: '2.5rem' }}>
          <TypewriterHeading text="How I Design" />
          <p className="section-subtitle" style={{ marginTop: '0.85rem' }}>
            A 6-step framework turning complex ambiguity into intuitive product solutions.
          </p>
        </div>

        <div className="process-grid-modern">
          {portfolioData.designProcess.map((item, idx) => (
            <ProcessCard
              key={idx}
              index={idx}
              step={item.step}
              title={item.title}
              desc={item.desc}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
