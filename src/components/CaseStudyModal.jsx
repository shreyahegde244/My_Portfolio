import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function CaseStudyModal({ projectId, onClose, onSelectProject }) {
  const visibleProjects = portfolioData.projects.filter((p) => !p.hidden);
  const project = portfolioData.projects.find((p) => p.id === projectId);

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

  if (!project) return null;

  const currentIndex = visibleProjects.findIndex((p) => p.id === projectId);
  const nextProject = currentIndex !== -1 && visibleProjects.length > 1
    ? visibleProjects[(currentIndex + 1) % visibleProjects.length]
    : null;

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        
        {/* Sticky Header */}
        <div className="modal-header-sticky">
          <div className="modal-header-title">
            <span style={{ display: 'inline-block', width: '6px', height: '6px', background: '#00167A', borderRadius: '50%' }}></span>
            <span>Case Study • {project.number}</span>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
            <X size={16} />
          </button>
        </div>

        {/* Content */}
        <div className="modal-body">
          <div className="cs-hero-badge">
            {project.category} • Project {project.number}
          </div>
          <h2 className="cs-title">{project.title}</h2>
          <p className="cs-summary">{project.tagline}</p>

          {project.video && (
            <div className="cs-video-container" style={{ margin: '1.5rem 0', borderRadius: '8px', overflow: 'hidden', border: '1px solid var(--border-light)', backgroundColor: '#0F172A', boxShadow: 'var(--shadow-md)' }}>
              <video
                src={project.video}
                autoPlay
                loop
                muted
                controls
                playsInline
                style={{ width: '100%', maxHeight: '420px', display: 'block', objectFit: 'contain' }}
              />
            </div>
          )}

          <div className="cs-meta-bar">
            <div className="cs-meta-item">
              <h6>Role</h6>
              <p>{project.role}</p>
            </div>
            <div className="cs-meta-item">
              <h6>Duration</h6>
              <p>{project.duration}</p>
            </div>
            <div className="cs-meta-item">
              <h6>Focus</h6>
              <p>{project.category}</p>
            </div>
          </div>

          <div className="cs-section-block">
            <h4 className="cs-section-heading">Overview & Problem</h4>
            <p className="cs-body-p">{project.overview}</p>
            <p className="cs-body-p"><strong>Challenge:</strong> {project.problem}</p>
          </div>

          <div className="cs-section-block">
            <h4 className="cs-section-heading">Key Design Decisions</h4>
            {project.decisions.map((decision, idx) => (
              <div className="cs-highlight-box" key={idx}>
                <h5>{decision.title}</h5>
                <p className="cs-body-p" style={{ marginBottom: 0 }}>
                  {decision.detail}
                </p>
              </div>
            ))}
          </div>

          <div className="cs-section-block">
            <h4 className="cs-section-heading">Screens & Exploration</h4>
            <div className="cs-screen-grid">
              {project.screens.map((screen, idx) => (
                <div className="cs-screen-card" key={idx}>
                  <div
                    style={{
                      height: '80px',
                      backgroundColor: '#FFFFFF',
                      border: '1px solid #E2E8F0',
                      borderRadius: '4px',
                      marginBottom: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#00167A' }}>
                      {screen.name}
                    </span>
                  </div>
                  <h6>{screen.name}</h6>
                  <p>{screen.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="cs-section-block">
            <h4 className="cs-section-heading">Outcome & Impact</h4>
            <div className="cs-highlight-box" style={{ backgroundColor: '#ECFDF5', borderColor: '#A7F3D0' }}>
              <p className="cs-body-p" style={{ color: '#047857', marginBottom: 0, fontWeight: 500 }}>
                {project.outcome}
              </p>
            </div>
          </div>

          <div className="cs-modal-footer">
            <button className="btn btn-secondary" onClick={onClose}>
              Close
            </button>
            {nextProject && (
              <button className="btn btn-primary" onClick={() => onSelectProject(nextProject.id)}>
                Next: {nextProject.title}
              </button>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
