import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Connect() {
  return (
    <section className="section">
      <div className="container">
        <div className="connect-banner">
          <h2>Let’s create something meaningful.</h2>
          <p>
            Have a product, idea, or experience that needs thoughtful design?
          </p>

          <div className="social-cards-grid">
            <a
              href={portfolioData.personal.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link-card"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
              </svg>
              <span>LinkedIn</span>
            </a>

            <a
              href={portfolioData.personal.socials.behance}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link-card"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-4.726 3-3.047 0-5.5-2.29-5.5-5.5 0-3.136 2.378-5.5 5.5-5.5 3.327 0 5.163 2.38 4.93 5.706h-7.65c.078 1.584 1.344 2.594 2.72 2.594 1.309 0 2.227-.678 2.518-1.506l2.208 1.206zm-7.446-4h4.864c-.092-1.258-.87-2.194-2.368-2.194-1.574 0-2.385.952-2.496 2.194zm-9.28 7h-7v-14h7.5c2.479 0 4.5 1.79 4.5 4.075 0 1.37-.738 2.6-1.875 3.31 1.504.698 2.375 2.13 2.375 3.74 0 2.69-2.22 4.875-5.5 4.875zm-4.22-8.307h3.8c1.378 0 2.2-.736 2.2-1.743 0-1.055-.845-1.72-2.2-1.72h-3.8v3.463zm0 5.614h4.1c1.488 0 2.4-.803 2.4-1.927 0-1.18-.935-1.897-2.4-1.897h-4.1v3.824z"/>
              </svg>
              <span>Behance</span>
            </a>

            <a
              href={portfolioData.personal.socials.naukri}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link-card"
            >
              <img
                src="/naukri.png"
                alt="Naukri"
                style={{
                  width: '18px',
                  height: '18px',
                  objectFit: 'contain',
                  borderRadius: '3px'
                }}
              />
              <span>Naukri</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
