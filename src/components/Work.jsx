import React from 'react';
import { portfolioData } from '../data/portfolioData';
import TypewriterHeading from './TypewriterHeading';

export default function Work({ onSelectProject }) {

  const renderProjectMockup = (project) => {
    if (project.image) {
      return (
        <div className="project-image-wrapper">
          <img
            src={project.image}
            alt={project.title}
            className="project-preview-img"
          />
        </div>
      );
    }

    if (project.video) {
      return (
        <div className="portrait-video-wrapper">
          <video
            src={project.video}
            autoPlay
            loop
            muted
            playsInline
            className="portrait-video"
          />
        </div>
      );
    }

    if (project.id === 3) {
      return (
        <div className="mockup-preview-wrapper">
          <div className="mockup-window">
            <div className="mockup-titlebar">
              <div className="mockup-dot"></div>
              <div className="mockup-dot"></div>
              <div className="mockup-dot"></div>
              <span style={{ fontSize: '9px', color: '#64748B', marginLeft: '4px', fontWeight: 600 }}>
                Sagar World • Archive
              </span>
            </div>
            <div className="mockup-body">
              <div style={{ width: '60%', height: '10px', background: '#00167A', borderRadius: '2px', marginBottom: '8px' }}></div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px' }}>
                <div style={{ height: '36px', background: '#EBF3FF', borderRadius: '4px', border: '1px solid #D3E2FF' }}></div>
                <div style={{ height: '36px', background: '#F1F5F9', borderRadius: '4px' }}></div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (project.id === 4) {
      return (
        <div className="mockup-preview-wrapper">
          <div className="mockup-window">
            <div className="mockup-titlebar">
              <div className="mockup-dot"></div>
              <div className="mockup-dot"></div>
              <div className="mockup-dot"></div>
              <span style={{ fontSize: '9px', color: '#64748B', marginLeft: '4px', fontWeight: 600 }}>
                SaaS Revamp
              </span>
            </div>
            <div className="mockup-body">
              <div style={{ height: '10px', width: '45%', background: '#00167A', borderRadius: '2px', marginBottom: '6px' }}></div>
              <div style={{ height: '6px', width: '70%', background: '#E2E8F0', borderRadius: '2px', marginBottom: '8px' }}></div>
              <div style={{ display: 'flex', gap: '4px' }}>
                <span style={{ background: '#00167A', width: '36px', height: '14px', borderRadius: '3px' }}></span>
                <span style={{ background: '#E2E8F0', width: '36px', height: '14px', borderRadius: '3px' }}></span>
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (project.id === 5) {
      return (
        <div className="mockup-preview-wrapper">
          <div className="mockup-window" style={{ width: '85%' }}>
            <div className="mockup-titlebar">
              <div className="mockup-dot"></div>
              <div className="mockup-dot"></div>
              <div className="mockup-dot"></div>
              <span style={{ fontSize: '9px', color: '#64748B', marginLeft: '4px', fontWeight: 600 }}>
                Email Framework
              </span>
            </div>
            <div className="mockup-body" style={{ alignItems: 'center', textAlign: 'center' }}>
              <div style={{ width: '24px', height: '24px', background: '#00167A', borderRadius: '50%', marginBottom: '4px' }}></div>
              <div style={{ height: '8px', width: '50%', background: '#0F172A', borderRadius: '2px', marginBottom: '4px' }}></div>
              <div style={{ background: '#00167A', width: '55px', height: '14px', borderRadius: '3px' }}></div>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="mockup-preview-wrapper">
        <div className="mockup-window">
          <div className="mockup-titlebar">
            <div className="mockup-dot"></div>
            <div className="mockup-dot"></div>
            <div className="mockup-dot"></div>
            <span style={{ fontSize: '9px', color: '#64748B', marginLeft: '4px', fontWeight: 600 }}>
              Brand Tokens
            </span>
          </div>
          <div className="mockup-body" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              <div style={{ width: '32px', height: '32px', background: '#00167A', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFF', fontWeight: 800, fontSize: '12px' }}>
                Δ
              </div>
              <div>
                <div style={{ height: '10px', width: '50px', background: '#0F172A', borderRadius: '2px', marginBottom: '3px' }}></div>
                <div style={{ height: '6px', width: '35px', background: '#94A3B8', borderRadius: '2px' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="section" id="work">
      <div className="container">
        
        <div className="section-header" style={{ marginBottom: '2.5rem' }}>
          <TypewriterHeading text="Selected Work" />
          <p className="section-subtitle" style={{ marginTop: '0.85rem' }}>
            A curated selection of digital products, AI systems, and brand platforms.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {portfolioData.projects.filter((project) => !project.hidden).map((project) => (
            <article
              className="project-card"
              key={project.id}
            >
              <div className="project-thumbnail">
                {renderProjectMockup(project)}
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.tagline}</p>
                <div className="project-tools-row">
                  {project.tools.map((tool, idx) => (
                    <span className="project-tool-tag" key={idx}>
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
