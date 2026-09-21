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
              <svg width="18" height="18" viewBox="0 0 24 24" style={{ borderRadius: '3.5px', flexShrink: 0 }}>
                <rect width="24" height="24" rx="4" fill="#0A66C2" />
                <path fill="#FFFFFF" d="M6.94 5a1.94 1.94 0 1 1 0 3.88 1.94 1.94 0 0 1 0-3.88zm-1.62 5.33h3.24v9.67H5.32v-9.67zm5.28 0h3.1v1.32h.04c.43-.82 1.5-1.68 3.08-1.68 3.3 0 3.9 2.17 3.9 4.99v5.04h-3.23v-4.47c0-1.07-.02-2.44-1.49-2.44-1.49 0-1.72 1.16-1.72 2.36v4.55h-3.24v-9.67h-.44z"/>
              </svg>
              <span>LinkedIn</span>
            </a>

            <a
              href={portfolioData.personal.socials.behance}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link-card"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" style={{ borderRadius: '3.5px', flexShrink: 0 }}>
                <rect width="24" height="24" rx="4" fill="#0057FF" />
                <path fill="#FFFFFF" d="M8.68 12.33c.8-.25 1.34-.84 1.34-1.75 0-1.57-1.16-2.28-2.8-2.28H3.5v7.4h3.87c1.78 0 2.97-.8 2.97-2.43 0-.48-.22-.94-.66-.94zm-3.32-2.7h1.49c.8 0 1.32.28 1.32.96 0 .7-.52.98-1.32.98H5.36V9.63zm1.61 4.79H5.36v-1.68h1.61c.85 0 1.45.31 1.45 1.07 0 .8-.6 1.07-1.45 1.07zm10.45-1.53h-4.32c.07.96.74 1.57 1.76 1.57.7 0 1.25-.33 1.47-.79h1.6c-.34 1.34-1.56 2.05-3.07 2.05-2.28 0-3.52-1.57-3.52-3.71 0-2.14 1.25-3.71 3.52-3.71 2.29 0 3.39 1.55 3.39 3.65 0 .34-.02.68-.05.94zm-1.53-1.07c-.07-.82-.6-1.4-1.55-1.4-.87 0-1.44.58-1.55 1.4h3.1zm-4.32-3.79h3.69v.9h-3.69v-.9z"/>
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
                  borderRadius: '3.5px',
                  flexShrink: 0
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
