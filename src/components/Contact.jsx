import React from 'react';
import { Mail, MapPin, Send, ArrowUpRight, Zap } from 'lucide-react';
import TypewriterHeading from './TypewriterHeading';

const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const YoutubeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

export default function Contact() {
  return (
    <section className="section section-alt" id="contact">
      <div className="container">
        
        {/* Section Header with Typewriter Heading */}
        <div className="section-header" style={{ marginBottom: '2.5rem' }}>
          <TypewriterHeading text="Contact" />
          <p className="section-subtitle" style={{ marginTop: '0.85rem' }}>
            Available for product design roles, AI interaction consulting, and collaborations.
          </p>
        </div>

        {/* Focused Contact Card */}
        <div className="contact-single-card-wrap">
          <div className="contact-info-card">
            
            <div className="contact-info-header">
              <h3>Direct Channels & Status</h3>
              <p>Reach out anytime for opportunities or collaborations.</p>
            </div>

            <div className="contact-channels-grid">
              
              {/* 1. Email */}
              <a href="mailto:shreyahegde244@gmail.com" className="contact-channel-item">
                <div className="contact-icon contact-icon-email">
                  <Mail size={18} />
                </div>
                <div className="contact-item-text">
                  <span className="contact-item-label">Email</span>
                  <span className="contact-item-val">shreyahegde244@gmail.com</span>
                </div>
              </a>

              {/* 2. LinkedIn */}
              <a
                href="https://www.linkedin.com/in/shreyahegde01"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-channel-item"
              >
                <div className="contact-icon contact-icon-linkedin">
                  <LinkedInIcon />
                </div>
                <div className="contact-item-text">
                  <span className="contact-item-label">LinkedIn</span>
                  <span className="contact-item-val">
                    View my profile <ArrowUpRight size={13} className="contact-arrow" />
                  </span>
                </div>
              </a>

              {/* 3. Instagram */}
              <a
                href="https://www.instagram.com/artfulwaves__/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-channel-item"
              >
                <div className="contact-icon contact-icon-instagram">
                  <InstagramIcon />
                </div>
                <div className="contact-item-text">
                  <span className="contact-item-label">Instagram</span>
                  <span className="contact-item-val">
                    artfulwaves__ <ArrowUpRight size={13} className="contact-arrow" />
                  </span>
                </div>
              </a>

              {/* 4. YouTube */}
              <a
                href="https://www.youtube.com/@Artfulwaves001"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-channel-item"
              >
                <div className="contact-icon contact-icon-youtube">
                  <YoutubeIcon />
                </div>
                <div className="contact-item-text">
                  <span className="contact-item-label">YouTube</span>
                  <span className="contact-item-val">
                    Artfulwaves001 <ArrowUpRight size={13} className="contact-arrow" />
                  </span>
                </div>
              </a>

              {/* 5. Location Container */}
              <div className="contact-channel-item contact-static-item">
                <div className="contact-icon contact-icon-location">
                  <MapPin size={18} />
                </div>
                <div className="contact-item-text">
                  <span className="contact-item-label">Location</span>
                  <span className="contact-item-val">Based in Bengaluru, India</span>
                </div>
              </div>

              {/* 6. Availability Container */}
              <div className="contact-channel-item contact-static-item">
                <div className="contact-icon contact-icon-availability">
                  <Zap size={18} />
                </div>
                <div className="contact-item-text">
                  <span className="contact-item-label">Availability</span>
                  <span className="contact-item-val contact-status-green">
                    <span className="availability-pulse-dot"></span>
                    Immediate Joining
                  </span>
                </div>
              </div>

            </div>

            {/* Center-Aligned Say Hello CTA */}
            <div className="contact-cta-center-wrap">
              <a
                href="mailto:shreyahegde244@gmail.com?subject=Hello%20Shreya"
                className="btn btn-primary contact-cta-btn"
              >
                <Send size={16} />
                Say Hello
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
