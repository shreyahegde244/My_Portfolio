import React, { useState, useEffect, useRef } from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Hero() {
  const fullText = "Hi,\nShreya Hegde here.";
  const [displayedText, setDisplayedText] = useState('');
  const [typingComplete, setTypingComplete] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const heroRef = useRef(null);

  // 3D Tilt & Spotlight states for Hero Photo
  const photoCardRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0, isHovered: false });
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });

  const handlePhotoMouseMove = (e) => {
    if (!photoCardRef.current) return;
    const rect = photoCardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;

    setMousePos({ x, y, isHovered: true });
    setTilt({ rotateX, rotateY });
  };

  const handlePhotoMouseLeave = () => {
    setMousePos((prev) => ({ ...prev, isHovered: false }));
    setTilt({ rotateX: 0, rotateY: 0 });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsTyping(true);
        } else {
          setIsTyping(false);
          setDisplayedText('');
          setTypingComplete(false);
        }
      },
      { threshold: 0.15 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isTyping) {
      setDisplayedText('');
      setTypingComplete(false);
      return;
    }

    let index = 0;
    setTypingComplete(false);

    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.slice(0, index + 1));
        index++;
      } else {
        setTypingComplete(true);
        clearInterval(timer);
      }
    }, 45);

    return () => clearInterval(timer);
  }, [isTyping, fullText]);

  return (
    <section className="hero-section" id="home" ref={heroRef}>
      <div className="container">
        <div className="hero-grid">
          
          {/* Left Column: Copy & CTAs */}
          <div className="hero-content">
            <h1 className="hero-headline">
              {displayedText.split('\n').map((line, i, arr) => (
                <React.Fragment key={i}>
                  {line}
                  {i < arr.length - 1 && <br />}
                </React.Fragment>
              ))}
              <span className={`typing-cursor ${typingComplete ? 'cursor-blink' : ''}`}>|</span>
            </h1>

            {/* Infinite Seamless Roles Ticker */}
            <div className="hero-ticker-container" aria-label="Specializations">
              <div className="hero-ticker-track">
                {/* Group 1 */}
                <div className="hero-ticker-group">
                  <span className="role-pill">AI Experience Designer</span>
                  <span className="role-pill">Product Thinking</span>
                  <span className="role-pill">UI/UX Systems</span>
                  <span className="role-pill">Interaction Prototyping</span>
                  <span className="role-pill">AI Experience Designer</span>
                  <span className="role-pill">Product Thinking</span>
                  <span className="role-pill">UI/UX Systems</span>
                  <span className="role-pill">Interaction Prototyping</span>
                </div>
                {/* Group 2 (Exact duplicate for 100% seamless circular infinite loop) */}
                <div className="hero-ticker-group" aria-hidden="true">
                  <span className="role-pill">AI Experience Designer</span>
                  <span className="role-pill">Product Thinking</span>
                  <span className="role-pill">UI/UX Systems</span>
                  <span className="role-pill">Interaction Prototyping</span>
                  <span className="role-pill">AI Experience Designer</span>
                  <span className="role-pill">Product Thinking</span>
                  <span className="role-pill">UI/UX Systems</span>
                  <span className="role-pill">Interaction Prototyping</span>
                </div>
              </div>
            </div>

            <p className="hero-description">
              {portfolioData.personal.tagline}
            </p>

            <div className="hero-actions">
              <a href="#work" className="btn btn-primary">
                View My Work
              </a>
            </div>
          </div>

          {/* Right Column: Hero Profile Image with 3D Tilt & Spotlight */}
          <div className="hero-photo-wrapper">
            <div
              ref={photoCardRef}
              className="hero-photo-tilt-card"
              onMouseMove={handlePhotoMouseMove}
              onMouseLeave={handlePhotoMouseLeave}
              style={{
                transform: mousePos.isHovered
                  ? `perspective(1000px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) translateY(-6px)`
                  : 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)',
              }}
            >
              <img
                src="/profile.jpg"
                alt="Shreya Hegde - Product Designer"
                className="hero-profile-image"
              />

              {/* Interactive Bottom Progress Accent */}
              <div className="hero-photo-bar" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
