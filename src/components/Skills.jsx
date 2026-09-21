import React, { useRef, useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import TypewriterHeading from './TypewriterHeading';

function ToolCard({ title, icon, tools, index }) {
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
      className="tool-interactive-card"
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

      <div className="tool-card-top">
        <div className="tool-card-icon">{icon}</div>
        <span className="tool-card-index">0{index + 1}</span>
      </div>

      <h3 className="tool-card-title">{title}</h3>

      <div className="tool-tags-wrap">
        {tools.map((tool, idx) => (
          <span className="tool-minimal-pill" key={idx}>
            {tool}
          </span>
        ))}
      </div>

      {/* Interactive Bottom Progress Accent */}
      <div className="tool-card-bar" />
    </div>
  );
}

export default function Skills() {
  const toolCategories = [
    {
      title: "Design & UI Systems",
      icon: "🎨",
      tools: portfolioData.tools.design
    },
    {
      title: "Prototyping & Handoff",
      icon: "⚡",
      tools: portfolioData.tools.prototyping
    },
    {
      title: "AI & Emerging Tech",
      icon: "🤖",
      tools: portfolioData.tools.ai
    }
  ];

  return (
    <section className="section section-alt" id="skills">
      <div className="container">
        
        <div className="section-header" style={{ marginBottom: '2.5rem' }}>
          <TypewriterHeading text="Tools I Work With" />
          <p className="section-subtitle" style={{ marginTop: '0.85rem' }}>
            My core tools across design, prototyping, and AI-accelerated workflows.
          </p>
        </div>

        <div className="tools-minimal-grid">
          {toolCategories.map((cat, index) => (
            <ToolCard
              key={index}
              index={index}
              title={cat.title}
              icon={cat.icon}
              tools={cat.tools}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
