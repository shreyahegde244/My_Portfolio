import React, { useEffect } from 'react';
import { X, Download, FileText, ExternalLink } from 'lucide-react';
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
      <div className="modal-container" style={{ maxWidth: '840px' }} onClick={(e) => e.stopPropagation()}>
        
        <div className="modal-header-sticky">
          <div className="modal-header-title">
            <span style={{ display: 'inline-block', width: '8px', height: '8px', background: '#00167A', borderRadius: '50%' }}></span>
            <span>Curriculum Vitae (CV) Preview</span>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
            <X size={18} />
          </button>
        </div>

        <div className="modal-body">
          <div className="resume-view-paper">
            
            {/* CV Header */}
            <div className="resume-header">
              <div className="resume-header-brand">
                <h2 className="resume-header-name">SHREYA HEGDE</h2>
                <div className="resume-header-title">AI Product Design | Conversational UX | UI/UX Design</div>
              </div>
              <div className="resume-contact-details">
                <div>{portfolioData.personal.location}</div>
                <div><a href={`mailto:${portfolioData.personal.email}`} style={{ color: '#00167A' }}>{portfolioData.personal.email}</a></div>
                <div>{portfolioData.personal.phone}</div>
                <div style={{ marginTop: '2px', display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
                  <a href={portfolioData.personal.socials.behance} target="_blank" rel="noopener noreferrer" style={{ color: '#00167A', fontWeight: 600 }}>Behance</a>
                  <span>•</span>
                  <a href={portfolioData.personal.socials.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: '#00167A', fontWeight: 600 }}>LinkedIn</a>
                </div>
              </div>
            </div>

            {/* Career Summary */}
            <div className="resume-block">
              <h4 className="resume-block-title">Career Summary</h4>
              <p className="resume-block-text">
                Product Designer specializing in AI and conversational UX. Proven experience in driving prompt engineering strategies for generative AI interactions and translating complex prompt workflows into intuitive chatbot and dashboard experiences. Strongly rooted in rigorous user research and rapid prototyping.
              </p>
            </div>

            {/* Education */}
            <div className="resume-block">
              <h4 className="resume-block-title">Education</h4>
              {portfolioData.education.map((edu) => (
                <div key={edu.id} className="resume-exp-item">
                  <div className="resume-exp-headline">
                    <span className="resume-exp-role">{edu.degree}</span>
                    <span className="resume-exp-duration">{edu.duration}</span>
                  </div>
                  <p className="resume-exp-desc" style={{ color: '#00167A', fontWeight: 500 }}>
                    {edu.institution}
                  </p>
                </div>
              ))}
            </div>

            {/* Experience */}
            <div className="resume-block">
              <h4 className="resume-block-title">Experience</h4>
              {portfolioData.experience.map((exp) => (
                <div key={exp.id} className="resume-exp-item">
                  <div className="resume-exp-headline">
                    <span className="resume-exp-role">{exp.role}, <strong>{exp.company}</strong></span>
                    <span className="resume-exp-duration">{exp.duration}</span>
                  </div>
                  <ul className="resume-exp-list" style={{ marginTop: '6px' }}>
                    {exp.contributions.map((c, idx) => (
                      <li key={idx}>{c}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Skills and Tooling */}
            <div className="resume-block">
              <h4 className="resume-block-title">Skills and Tooling</h4>
              <p className="resume-competency-line">
                <strong>AI & Conversational:</strong> AI Product Design, Conversational UX, Prompt Engineering, Chatbot Design, Dashboard Design, UX Writing
              </p>
              <p className="resume-competency-line">
                <strong>UX Research:</strong> User Interviews, Competitive Analysis, Usability Testing, Heuristic Evaluation, Card Sorting, Empathy Mapping
              </p>
              <p className="resume-competency-line">
                <strong>UX/UI Design:</strong> User Flows, Information Architecture, Wireframing, Prototyping, UI Design
              </p>
              <p className="resume-competency-line">
                <strong>Software & Platforms:</strong> Figma, Adobe XD, Miro, Photoshop, Illustrator, Design.com, Antigravity, Figma AI, Claude, Stitch, Lovable
              </p>
            </div>

            {/* Projects */}
            <div className="resume-block">
              <h4 className="resume-block-title">Projects</h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '0.75rem' }}>
                <div className="resume-project-item" style={{ padding: '0.65rem 0.85rem', background: '#F8FAFC', borderRadius: '6px', border: '1px solid #E2E8F0' }}>
                  <strong style={{ fontSize: '0.85rem', color: '#0F172A' }}>Conversational AI Chatbot</strong>
                  <p style={{ fontSize: '0.78rem', color: '#475569', margin: '2px 0 0 0' }}>AI Product Design · Conversational UX · Prototyping</p>
                </div>
                <div className="resume-project-item" style={{ padding: '0.65rem 0.85rem', background: '#F8FAFC', borderRadius: '6px', border: '1px solid #E2E8F0' }}>
                  <strong style={{ fontSize: '0.85rem', color: '#0F172A' }}>Party Booking Chatbot</strong>
                  <p style={{ fontSize: '0.78rem', color: '#475569', margin: '2px 0 0 0' }}>Conversational UX · AI · User Flow · Chatbot Design</p>
                </div>
                <div className="resume-project-item" style={{ padding: '0.65rem 0.85rem', background: '#F8FAFC', borderRadius: '6px', border: '1px solid #E2E8F0' }}>
                  <strong style={{ fontSize: '0.85rem', color: '#0F172A' }}>Website Revamps</strong>
                  <p style={{ fontSize: '0.78rem', color: '#475569', margin: '2px 0 0 0' }}>UX/UI · Responsive Design · Information Architecture</p>
                </div>
                <div className="resume-project-item" style={{ padding: '0.65rem 0.85rem', background: '#F8FAFC', borderRadius: '6px', border: '1px solid #E2E8F0' }}>
                  <strong style={{ fontSize: '0.85rem', color: '#0F172A' }}>Sagar World — Website Revamp</strong>
                  <p style={{ fontSize: '0.78rem', color: '#475569', margin: '2px 0 0 0' }}>UX/UI · Web Design · Visual Design</p>
                </div>
              </div>
            </div>

            {/* Languages */}
            <div className="resume-block">
              <h4 className="resume-block-title">Languages</h4>
              <p className="resume-competency-line">
                English, Hindi, Kannada
              </p>
            </div>

            {/* Footer Actions */}
            <div className="resume-modal-footer">
              <button className="btn btn-secondary" onClick={onClose}>
                Close Preview
              </button>
              <a
                href="/Shreya%20Hegde%202026.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                download="Shreya_Hegde_CV_2026.pdf"
              >
                <Download size={15} style={{ marginRight: '6px' }} />
                Download CV (PDF)
              </a>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
