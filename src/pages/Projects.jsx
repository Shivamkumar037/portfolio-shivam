import React, { useState, useMemo } from 'react';
import projects from '../data/projects';
import './Projects.css';

const Projects = ({ onOpenProject }) => {
  const [filter, setFilter] = useState('all');

  const filtered = useMemo(() => {
    if (filter === 'all') return projects.items;
    return projects.items.filter((p) => p.category === filter);
  }, [filter]);

  const handleLiveDemo = (e, project) => {
    e.stopPropagation();
    const url = project.liveUrl?.trim();
    if (!url || url === '#' || url === '') {
      window.alert(
        `"${project.title}" ka Live Demo abhi available nahi hai.\n\nGitHub pe code dekh sakte ho ya baad mein link add karunga.`
      );
      return;
    }
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="projects-page">
      <div className="container">
        {/* Header */}
        <div className="proj-header">
          <span className="proj-badge">
            <span className="proj-badge-icon">📁</span>
            {projects.sectionLabel}
          </span>
          <h1 className="proj-title">
            {projects.title}{' '}
            <span className="proj-title-hl">{projects.titleHighlight}</span>
          </h1>
          <p className="proj-sub">{projects.subtitle}</p>
        </div>

        {/* Filters */}
        <div className="proj-filters">
          {projects.filters.map((f) => (
            <button
              key={f.id}
              className={`proj-filter ${filter === f.id ? 'active' : ''}`}
              onClick={() => setFilter(f.id)}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="proj-grid">
          {filtered.map((p) => (
            <article
              className="proj-card"
              key={p.id}
              onClick={() => onOpenProject?.(p.id)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onOpenProject?.(p.id);
                }
              }}
            >
              <div className="proj-img-wrap">
                <img src={p.image} alt={p.title} loading="lazy" />
                <span className="proj-type">{p.type}</span>
              </div>

              <div className="proj-body">
                <h3 className="proj-name">
                  {p.title}
                  <span className="proj-arrow">→</span>
                </h3>
                <p className="proj-desc">{p.description}</p>

                <div className="proj-tags">
                  {p.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>

                <div className="proj-actions">
                  <button
                    type="button"
                    className="proj-btn live"
                    onClick={(e) => handleLiveDemo(e, p)}
                  >
                    Live Demo ↗
                  </button>
                  <a
                    className="proj-btn gh"
                    href={p.githubUrl || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      e.stopPropagation();
                      if (!p.githubUrl || p.githubUrl === '#') {
                        e.preventDefault();
                        window.alert('GitHub link abhi available nahi hai.');
                      }
                    }}
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="proj-empty">Is category mein koi project nahi mila.</p>
        )}

        <p className="proj-coming">{projects.comingSoon}</p>
      </div>
    </div>
  );
};

export default Projects;
