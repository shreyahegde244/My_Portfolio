import React, { useRef, useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import TypewriterHeading from './TypewriterHeading';

function CapabilityCard({ item, index }) {
  const cardRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0, isHovered: false });
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Subtle 3D tilt calculations
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -7;
    const rotateY = ((x - centerX) / centerX) * 7;

    setMousePos({ x, y, isHovered: true });
    setTilt({ rotateX, rotateY });
  };

  const handleMouseLeave = () => {
    setMousePos((prev) => ({ ...prev, isHovered: false }));
    setTilt({ rotateX: 0, rotateY: 0 });
  };

  const icons = ["💡", "🎨", "🤖", "🧩", "⚡", "✨"];

  return (
    <div
      ref={cardRef}
      className="capability-interactive-card"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: mousePos.isHovered
          ? `perspective(800px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) translateY(-4px)`
          : 'perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0px)',
      }}
    >
      {/* Spotlight cursor glow */}
      <div
        className="card-spotlight-glow"
        style={{
          opacity: mousePos.isHovered ? 1 : 0,
          background: `radial-gradient(260px circle at ${mousePos.x}px ${mousePos.y}px, rgba(0, 22, 122, 0.08), transparent 80%)`,
        }}
      />
      
      {/* Top Header */}
      <div className="capability-card-top">
        <span className="capability-card-icon">{icons[index] || "✦"}</span>
        <span className="capability-card-index">0{index + 1}</span>
      </div>

      {/* Card Content */}
      <div className="capability-card-body">
        <h4 className="capability-card-title">{item.title}</h4>
        <p className="capability-card-desc">{item.desc}</p>
      </div>

      {/* Interactive Bottom Progress Indicator */}
      <div className="capability-card-bar" />
    </div>
  );
}

export default function About() {
  return (
    <section className="section section-alt" id="about">
      <div className="container">
        
        {/* Left-Aligned Story Header & Narrative */}
        <div className="about-story-block">
          <TypewriterHeading text="About Me" />

          <p className="about-intro-p">
            I’m Shreya Hegde, a Product Designer focused on creating intuitive, accessible, and scalable digital experiences.
          </p>

          <p className="about-text">
            I work across UI/UX, conversational AI, design systems, prototyping, and visual design, turning complex workflows into simple and meaningful experiences.
          </p>

          <p className="about-text">
            I enjoy understanding what users need, what businesses need, and where technology can create better solutions—then bringing those ideas to life through thoughtful design.
          </p>
        </div>

        {/* 3x2 Core Capabilities Cards */}
        <div className="about-capabilities-section">
          <div className="about-capabilities-header">
            <h3 className="about-subheading">Core Capabilities</h3>
            <p className="about-subheading-desc">Key focus areas and expertise I bring to product teams.</p>
          </div>

          <div className="strengths-3col-grid">
            {portfolioData.strengths.map((item, index) => (
              <CapabilityCard key={index} item={item} index={index} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
