import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          
          <div className="footer-brand">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.65rem' }}>
              <img src="/logo.png" alt="Pd Logo" style={{ height: '36px', width: 'auto', objectFit: 'contain' }} />
              <h4 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 700 }}>Product Designer</h4>
            </div>
            <p>
              Designing thoughtful digital products and conversational AI interfaces with clarity, empathy, and precision.
            </p>
          </div>

          <div className="footer-col">
            <h5>Quick Navigation</h5>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#experience">Experience Timeline</a></li>
              <li><a href="#work">Selected Work</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>Connect Online</h5>
            <ul className="footer-links">
              <li>
                <a href={portfolioData.personal.socials.linkedin} target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href={portfolioData.personal.socials.behance} target="_blank" rel="noopener noreferrer">
                  Behance
                </a>
              </li>
              <li>
                <a href={portfolioData.personal.socials.naukri} target="_blank" rel="noopener noreferrer">
                  Naukri
                </a>
              </li>
              <li>
                <a href={`mailto:${portfolioData.personal.email}`}>Email Me</a>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
}
