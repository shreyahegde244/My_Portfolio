import React, { useEffect } from 'react';
import { X, Download } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ResumeModal({ onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-container" style={{ maxWidth: '820px' }} onClick={(e) => e.stopPropagation()}>
        
        <div className="modal-header-sticky">
          <div className="modal-header-title">
            <span style={{ display: 'inline-block', width: '8px', height: '8px', background: '#00167A', borderRadius: '50%' }}></span>
            <span>Curriculum Vitae Preview</span>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
            <X size={18} />
          </button>
        </div>

        <div className="modal-body">
          <div className="resume-view-paper">
            
            <div className="resume-header">
              <div>
                <h2 className="resume-header-name">{portfolioData.personal.name}</h2>
                <div className="resume-header-title">{portfolioData.personal.role}</div>
              </div>
              <div style={{ textAlign: 'right', fontSize: '0.8125rem', color: '#475569' }}>
                <div>{portfolioData.personal.location}</div>
                <div>{portfolioData.personal.email}</div>
                <div>{portfolioData.personal.phone}</div>
              </div>
            </div>

            <div className="resume-block">
              <h4 className="resume-block-title">Professional Summary</h4>
              <p>
                User-centered Product Designer with proven experience architecting conversational AI interfaces, complex web applications, and scalable design systems. Adept at translating ambiguous business goals into intuitive, accessible, and high-conversion digital experiences.
              </p>
            </div>

            <div className="resume-block">
              <h4 className="resume-block-title">Experience</h4>
              {portfolioData.experience.map((exp) => (
                <div key={exp.id} style={{ marginBottom: '1.25rem' }}>
                  <div style={{ display: 'flex', justifyConten: 'space-between', fontWeight: 700, color: '#0F172A' }}>
                    <span>{exp.role} — {exp.company}</span>
                    <span style={{ color: '#00167A' }}>{exp.duration}</span>
                  </div>
                  <p style={{ fontSize: '0.8125rem', color: '#475569', margin: '4px 0 6px 0' }}>
                    {exp.description}
                  </p>
                  <ul style={{ paddingLeft: '1.25rem', fontSize: '0.8125rem', color: '#334155' }}>
                    {exp.contributions.map((c, idx) => (
                      <li key={idx} style={{ marginBottom: '2px' }}>{c}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="resume-block">
              <h4 className="resume-block-title">Core Competencies & Stack</h4>
              <p style={{ marginBottom: '6px' }}>
                <strong>Product Design:</strong> UI/UX Architecture, Wireframing, User Research, Conversational AI Interaction, Heuristic Audits, Journey Mapping.
              </p>
              <p style={{ marginBottom: '6px' }}>
                <strong>Design Software:</strong> Figma, FigJam, Adobe Photoshop, Adobe Illustrator, Canva, Miro.
              </p>
              <p>
                <strong>Prototyping & AI:</strong> Framer, Lovable, ChatGPT / Prompt Engineering, Claude, Front-End Code Foundations.
              </p>
            </div>

            <div style={{ marginTop: '2.5rem', display: 'flex', justifyContent: 'flex-end', gap: '0.75rem' }}>
              <button className="btn btn-secondary" onClick={onClose}>
                Close Preview
              </button>
              <button
                className="btn btn-primary"
                onClick={() => alert('Resume download PDF initiated!')}
              >
                Download PDF
              </button>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
