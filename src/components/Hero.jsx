import React from 'react';
import personal from '../data/personal';
import './Hero.css';

const Hero = ({ onNavigate }) => {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-left">
          <span className="hero-role">{personal.role}</span>

          <h1 className="hero-title">
            {personal.headline}{' '}
            <span className="hero-highlight">{personal.headlineHighlight}</span>
          </h1>

          <p className="hero-bio">{personal.shortBio}</p>

          <div className="hero-actions">
            <button className="btn btn-primary" onClick={() => onNavigate?.('projects')}>
              View My Work →
            </button>
            <a
              className="btn btn-outline"
              href={personal.about?.resumeUrl || '/resume.pdf'}
              download="Shivam_Kumar_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Resume ↓
            </a>
          </div>

          <div className="hero-tech">
            {personal.techStack.map((t) => (
              <span className="tech-chip" key={t.id}>
                <span className="tech-icon">{t.icon}</span>
                {t.label}
              </span>
            ))}
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-photo-wrap">
            <div className="hero-glow" />
            <img
              src={personal.photo}
              alt={personal.photoAlt}
              className="hero-photo"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
