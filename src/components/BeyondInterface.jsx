import React, { useRef, useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import TypewriterHeading from './TypewriterHeading';

const InstagramIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const YoutubeIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

function CreativeLinkCard({ platform, label, action, href, icon, gradientClass }) {
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
    <a
      ref={cardRef}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="beyond-interactive-card"
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

      <div className="beyond-card-inner">
        <div className={`beyond-icon-wrapper ${gradientClass}`}>
          {icon}
        </div>

        <div className="beyond-info">
          <div className="beyond-platform-tag">{platform}</div>
          <div className="beyond-action-text">
            <span>{action}</span>
            <ArrowUpRight size={16} className="beyond-arrow-icon" />
          </div>
        </div>
      </div>

      {/* Interactive Bottom Progress Accent */}
      <div className="beyond-card-bar" />
    </a>
  );
}

function CountUpStat({ target, suffix = '', label, isVisible }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) {
      setCount(0);
      return;
    }
    if (typeof target !== 'number') return;

    let startTime = null;
    const duration = 1400;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Smooth cubic easing
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(ease * target));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    const animFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animFrame);
  }, [isVisible, target]);

  return (
    <div className="beyond-stat-card">
      <div className="beyond-stat-num">
        {typeof target === 'number' ? (
          <span>{count}{suffix}</span>
        ) : (
          <span className="stat-infinity">{target}</span>
        )}
      </div>
      <div className="beyond-stat-label">{label}</div>
    </div>
  );
}

export default function BeyondInterface() {
  const statsRef = useRef(null);
  const [statsVisible, setStatsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setStatsVisible(entry.isIntersecting);
      },
      { threshold: 0.15 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const creativeTags = [
    "Digital Painting",
    "Illustration",
    "Sketching",
    "Landscapes",
    "Visual Experiments"
  ];

  const creativeStats = [
    { target: 400, suffix: "+", label: "Artworks created" },
    { target: 6, suffix: "+", label: "Years exploring art" },
    { target: 2, suffix: "", label: "Creative platforms" },
    { target: "∞", suffix: "", label: "Ideas to explore" }
  ];

  return (
    <section className="section" id="beyond">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header" style={{ marginBottom: '2rem' }}>
          <TypewriterHeading text="Beyond the Interface" />
          <p className="section-subtitle" style={{ marginTop: '0.85rem' }}>
            Exploring creativity beyond pixels, screens, and product flows.
          </p>
        </div>

        {/* Narrative, What I Create, Stats & Channels */}
        <div className="beyond-wrapper">
          <div className="beyond-story-text">
            <p>
              Design is more than creating digital interfaces. I’ve always enjoyed exploring art, illustration, and visual storytelling, which helps me approach design with a stronger eye for composition, detail, and visual expression.
            </p>
          </div>

          {/* What I Create Pills */}
          <div className="beyond-tags-block">
            <h3 className="beyond-block-title">What I Create</h3>
            <div className="beyond-tags-wrap">
              {creativeTags.map((tag, idx) => (
                <span className="beyond-tag-pill" key={idx}>
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Creative Stats Grid with Count-up Animation */}
          <div className="beyond-stats-grid" ref={statsRef}>
            {creativeStats.map((stat, idx) => (
              <CountUpStat
                key={idx}
                target={stat.target}
                suffix={stat.suffix}
                label={stat.label}
                isVisible={statsVisible}
              />
            ))}
          </div>

          {/* Interactive Channel Cards */}
          <div className="beyond-cards-grid">
            <CreativeLinkCard
              platform="Instagram"
              label="Artwork Showcase"
              action="View my artwork"
              href={portfolioData.personal.socials.instagram || "https://instagram.com"}
              icon={<InstagramIcon />}
              gradientClass="instagram-gradient"
            />

            <CreativeLinkCard
              platform="YouTube"
              label="Process & Speedpaints"
              action="Watch my creative process"
              href={portfolioData.personal.socials.youtube || "https://youtube.com"}
              icon={<YoutubeIcon />}
              gradientClass="youtube-gradient"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
