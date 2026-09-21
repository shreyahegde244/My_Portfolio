import React, { useEffect, useRef } from 'react';
import { FileText } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import TypewriterHeading from './TypewriterHeading';

export default function Experience({ onOpenResume }) {
  const timelineRef = useRef(null);
  const progressLineRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const timeline = timelineRef.current;
      const progressLine = progressLineRef.current;
      if (!timeline || !progressLine) return;

      const rect = timeline.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top < windowHeight && rect.bottom > 0) {
        const totalHeight = rect.height;
        const visibleTop = windowHeight - rect.top;
        const progress = Math.min(Math.max((visibleTop / totalHeight) * 100, 0), 100);
        progressLine.style.height = `${progress}%`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="section" id="experience">
      <div className="container">
        
        <div className="section-header" style={{ marginBottom: '2.5rem' }}>
          <TypewriterHeading text="Experience" />
          <p className="section-subtitle" style={{ marginTop: '0.85rem' }}>
            A journey across product design, AI experiences, and digital innovation.
          </p>
        </div>

        <div className="experience-container">
          <div className="timeline-wrapper" ref={timelineRef}>
            <div className="timeline-track-line"></div>
            <div className="timeline-progress-line" ref={progressLineRef}></div>

            {portfolioData.experience.map((item) => (
              <div className="timeline-item" key={item.id}>
                <div className="timeline-marker"></div>
                <div className="experience-card">
                  <div className="exp-header">
                    <div className="exp-role-group">
                      <h3>{item.role}</h3>
                      <div className="exp-company">{item.company}</div>
                    </div>
                    <div className="exp-badge-group">
                      <span className="exp-type-badge">{item.type}</span>
                      <span className="exp-duration">{item.duration}</span>
                    </div>
                  </div>

                  <ul className="exp-contributions">
                    {item.contributions.map((c, i) => (
                      <li key={i}>{c}</li>
                    ))}
                  </ul>

                  <div className="exp-skills-tags">
                    {item.skills.map((s, i) => (
                      <span className="exp-skill-tag" key={i}>
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Envelope Resume Showcase */}
          <div className="resume-envelope-showcase">
            <a
              href="/Shreya%20Hegde%202026.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="resume-envelope-card"
              aria-label="View Shreya Hegde Resume PDF"
            >
              {/* Envelope Container */}
              <div className="envelope-box">
                {/* Back flap (open) */}
                <div className="envelope-back"></div>

                {/* Resume Paper (Slides up on hover) */}
                <div className="envelope-paper">
                  <div className="paper-top-bar">
                    <span className="paper-badge-pdf">PDF</span>
                    <span className="paper-date">2026</span>
                  </div>
                  <div className="paper-profile">
                    <div className="paper-avatar">SH</div>
                    <div>
                      <div className="paper-name">Shreya Hegde</div>
                      <div className="paper-sub">Product Designer</div>
                    </div>
                  </div>
                  <div className="paper-preview-lines">
                    <div className="paper-line w-full"></div>
                    <div className="paper-line w-80"></div>
                    <div className="paper-line w-60"></div>
                  </div>
                </div>

                {/* Front Envelope Pocket & Flaps */}
                <div className="envelope-front">
                  <div className="env-flap-left"></div>
                  <div className="env-flap-right"></div>
                  <div className="env-flap-bottom"></div>
                  <div className="env-center-seal">
                    <FileText size={16} color="#00167A" />
                  </div>
                </div>
              </div>
            </a>

            {/* CTA Button Under Envelope */}
            <div className="resume-envelope-btn-wrap">
              <a
                href="/Shreya%20Hegde%202026.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <FileText size={16} style={{ marginRight: '8px' }} />
                View Resume
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
