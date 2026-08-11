import React from 'react';
import experience from '../data/experience';
import './Experience.css';

const typeClass = {
  blue: 'type-blue',
  purple: 'type-purple',
  green: 'type-green'
};

const Experience = ({ onNavigate, onOpenProject }) => {
  const handleProjectClick = (item) => {
    if (item.projectId && onOpenProject) {
      onOpenProject(item.projectId);
    }
  };

  return (
    <div className="exp-page">
      <div className="container">
        {/* Header */}
        <div className="exp-header">
          <div className="exp-header-left">
            <span className="exp-badge">{experience.sectionLabel}</span>
            <h1 className="exp-title">
              {experience.title}{' '}
              <span className="exp-title-hl">{experience.titleHighlight}</span>
            </h1>
            <p className="exp-sub">{experience.subtitle}</p>
          </div>

          <div className="exp-side-card">
            <div className="exp-side-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <rect x="3" y="7" width="18" height="13" rx="2" />
                <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
              </svg>
            </div>
            <div>
              <h3>{experience.sideCard.title}</h3>
              <p>{experience.sideCard.text}</p>
            </div>
            <div className="exp-side-line" />
          </div>
        </div>

        {/* Timeline */}
        <div className="exp-timeline-wrap">
          <div className="exp-timeline-head">
            <span className="exp-tl-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <rect x="3" y="7" width="18" height="13" rx="2" />
                <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
              </svg>
            </span>
            <h2>Experience Timeline</h2>
            <span className="exp-tl-line" />
          </div>

          <div className="exp-timeline">
            {experience.items.map((item, index) => (
              <div
                className={`exp-item ${item.projectId ? 'has-project' : ''}`}
                key={item.id}
              >
                {/* Date column */}
                <div className="exp-date-col">
                  <div className="exp-date">
                    <strong>{item.period}</strong>
                    <span>{item.periodNote}</span>
                  </div>
                </div>

                {/* Rail */}
                <div className="exp-rail">
                  <span
                    className={`exp-dot ${
                      index === experience.items.length - 1 ? 'green' : ''
                    }`}
                  />
                  {index < experience.items.length - 1 && (
                    <span className="exp-rail-line" />
                  )}
                </div>

                {/* Card */}
                <article
                  className={`exp-card ${item.projectId ? 'clickable' : ''}`}
                  onClick={() => handleProjectClick(item)}
                  role={item.projectId ? 'button' : undefined}
                  tabIndex={item.projectId ? 0 : undefined}
                  onKeyDown={(e) => {
                    if (item.projectId && (e.key === 'Enter' || e.key === ' ')) {
                      e.preventDefault();
                      handleProjectClick(item);
                    }
                  }}
                >
                  <div className="exp-card-logo">
                    {item.icon === 'company' && (
                      <div className="exp-logo-box company">
                        <span className="exp-logo-ai">ai</span>
                        <span className="exp-logo-name">ANALYZE<br />InfoTech</span>
                      </div>
                    )}
                    {item.icon === 'code' && (
                      <div className="exp-logo-box code">
                        <span>{'</>'}</span>
                      </div>
                    )}
                    {item.icon === 'education' && (
                      <div className="exp-logo-box edu">
                        <span>🎓</span>
                      </div>
                    )}
                    <span className={`exp-type-pill ${typeClass[item.typeColor] || ''}`}>
                      {item.type}
                    </span>
                  </div>

                  <div className="exp-card-body">
                    <div className="exp-mobile-date">
                      <strong>{item.period}</strong>
                      <span>{item.periodNote}</span>
                    </div>
                    <h3>
                      {item.title}
                      {item.projectId && (
                        <span className="exp-view-hint"> · View project →</span>
                      )}
                    </h3>
                    <p className="exp-company">{item.company}</p>
                    <p className="exp-desc">{item.description}</p>
                    <div className="exp-tags">
                      {item.tags.map((t) => (
                        <span key={t}>{t}</span>
                      ))}
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <section className="exp-bottom">
          <div className="exp-bottom-left">
            <span className="exp-bottom-icon">★</span>
            <div>
              <h3>{experience.bottomCard.title}</h3>
              <p>{experience.bottomCard.text}</p>
            </div>
          </div>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => onNavigate?.('projects')}
          >
            View My Projects →
          </button>
        </section>
      </div>
    </div>
  );
};

export default Experience;
