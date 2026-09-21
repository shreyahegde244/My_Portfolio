import React from 'react';
import { GraduationCap } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import TypewriterHeading from './TypewriterHeading';

function EducationCard({ item }) {
  return (
    <div className="education-card">
      <div className="edu-card-top">
        <div className="edu-badge-row">
          <div className="edu-icon-badge">
            <GraduationCap size={18} />
          </div>
          <span className="edu-duration-pill">{item.duration}</span>
        </div>
        
        <h3 className="edu-degree-title">{item.degree}</h3>
        <p className="edu-institution">{item.institution}</p>
      </div>

      <div className="edu-skills-wrap">
        {item.skills.map((skill, idx) => (
          <span key={idx} className="edu-skill-pill">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Education() {
  return (
    <section className="section" id="education">
      <div className="container">
        
        {/* Section Header with Typewriter Heading */}
        <div className="section-header" style={{ marginBottom: '2.5rem' }}>
          <TypewriterHeading text="Education" />
          <p className="section-subtitle" style={{ marginTop: '0.85rem' }}>
            Academic foundation in visual arts and specialized training in digital product design.
          </p>
        </div>

        {/* 2-Column Clean Education Cards Grid */}
        <div className="education-grid">
          {portfolioData.education.map((item) => (
            <EducationCard key={item.id} item={item} />
          ))}
        </div>

      </div>
    </section>
  );
}
