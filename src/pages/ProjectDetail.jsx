import React, { useState, useMemo } from 'react';
import projects from '../data/projects';
import './ProjectDetail.css';

const ProjectDetail = ({ projectId, onNavigate }) => {
  const project = useMemo(
    () => projects.items.find((p) => p.id === projectId) || projects.items[0],
    [projectId]
  );

  const shots = project.screenshots?.length
    ? project.screenshots
    : [project.image];
  const [activeShot, setActiveShot] = useState(0);

  const handleLiveDemo = () => {
    const url = project.liveUrl?.trim();
    if (!url || url === '#' || url === '') {
      window.alert(
        `"${project.title}" ka Live Demo abhi available nahi hai.\n\nGitHub pe code dekh sakte ho.`
      );
      return;
    }
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const tech = project.techStack || { frontend: [], backend: [], database: [] };

  return (
    <div className="pd-page">
      <div className="container">
        {/* Breadcrumb */}
        <nav className="pd-breadcrumb" aria-label="Breadcrumb">
          <button type="button" onClick={() => onNavigate?.('home')}>
            <span className="pd-bc-home">⌂</span> Home
          </button>
          <span className="pd-bc-sep">›</span>
          <button type="button" onClick={() => onNavigate?.('projects')}>
            Projects
          </button>
          <span className="pd-bc-sep">›</span>
          <span className="pd-bc-current">{project.title}</span>
        </nav>

        {/* Hero: preview + info */}
        <div className="pd-hero">
          {/* Left: gallery */}
          <div className="pd-gallery">
            <div className="pd-main-shot">
              <img
                src={shots[activeShot]}
                alt={`${project.title} screenshot ${activeShot + 1}`}
              />
              {project.subtitle && (
                <div className="pd-shot-overlay">
                  <span className="pd-shot-brand">{project.subtitle}</span>
                </div>
              )}
            </div>
            {shots.length > 1 && (
              <div className="pd-thumbs">
                {shots.slice(0, 4).map((src, i) => (
                  <button
                    key={i}
                    type="button"
                    className={`pd-thumb ${activeShot === i ? 'active' : ''}`}
                    onClick={() => setActiveShot(i)}
                  >
                    <img src={src} alt="" />
                  </button>
                ))}
                {shots.length > 4 && (
                  <button
                    type="button"
                    className="pd-thumb pd-thumb-more"
                    onClick={() => setActiveShot(4)}
                  >
                    +{shots.length - 4}
                    <span>More Screens</span>
                  </button>
                )}
              </div>
            )}
          </div>

          {/* Right: meta */}
          <div className="pd-info">
            <span className="pd-badge">Featured Project</span>
            <h1 className="pd-title">{project.title}</h1>
            <p className="pd-desc">
              {project.description}
            </p>

            <div className="pd-tags">
              {project.tags?.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>

            <div className="pd-actions">
              <button type="button" className="pd-btn live" onClick={handleLiveDemo}>
                <span>◎</span> Live Demo ↗
              </button>
              <a
                className="pd-btn gh"
                href={project.githubUrl || '#'}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  if (!project.githubUrl || project.githubUrl === '#') {
                    e.preventDefault();
                    window.alert('GitHub link abhi available nahi hai.');
                  }
                }}
              >
                <span>{'</>'}</span> GitHub Repo
              </a>
            </div>

            <div className="pd-meta">
              <div className="pd-meta-row">
                <span className="pd-meta-label">Role</span>
                <span className="pd-meta-value">{project.role || '—'}</span>
              </div>
              <div className="pd-meta-row">
                <span className="pd-meta-label">Duration</span>
                <span className="pd-meta-value">{project.duration || '—'}</span>
              </div>
              <div className="pd-meta-row">
                <span className="pd-meta-label">Type</span>
                <span className="pd-meta-value">{project.projectType || project.type || '—'}</span>
              </div>
              <div className="pd-meta-row">
                <span className="pd-meta-label">Status</span>
                <span className="pd-meta-value pd-status">
                  <span className="pd-status-dot" />
                  {project.status || 'Completed'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* About + Features */}
        <div className="pd-split">
          <section className="pd-card">
            <div className="pd-card-head">
              <span className="pd-card-icon">◉</span>
              <h2>About the Project</h2>
            </div>
            <p>{project.about || project.description}</p>
          </section>

          <section className="pd-card">
            <div className="pd-card-head">
              <span className="pd-card-icon">★</span>
              <h2>Key Features</h2>
            </div>
            <ul className="pd-features">
              {(project.features || []).map((f, i) => (
                <li key={i}>
                  <span className="pd-check">✓</span>
                  {f}
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Tech Stack */}
        <section className="pd-card pd-tech">
          <div className="pd-card-head">
            <span className="pd-card-icon">{'</>'}</span>
            <h2>Tech Stack</h2>
          </div>
          <div className="pd-tech-grid">
            {tech.frontend?.length > 0 && (
              <div className="pd-tech-col">
                <h3>Frontend</h3>
                <div className="pd-tech-pills">
                  {tech.frontend.map((t) => (
                    <span key={t} className="pd-tech-pill front">{t}</span>
                  ))}
                </div>
              </div>
            )}
            {tech.backend?.length > 0 && (
              <div className="pd-tech-col">
                <h3>Backend</h3>
                <div className="pd-tech-pills">
                  {tech.backend.map((t) => (
                    <span key={t} className="pd-tech-pill back">{t}</span>
                  ))}
                </div>
              </div>
            )}
            {tech.database?.length > 0 && (
              <div className="pd-tech-col">
                <h3>Database</h3>
                <div className="pd-tech-pills">
                  {tech.database.map((t) => (
                    <span key={t} className="pd-tech-pill db">{t}</span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Challenges & Learnings */}
        <section className="pd-card pd-learn">
          <div className="pd-card-head">
            <span className="pd-card-icon">💡</span>
            <h2>Challenges & Learnings</h2>
          </div>
          {project.challengesText && (
            <p className="pd-learn-text">{project.challengesText}</p>
          )}
          <div className="pd-learn-grid">
            <div className="pd-learn-box challenges">
              <h3>Challenges</h3>
              <ul>
                {(project.challenges || []).map((c, i) => (
                  <li key={i}>{c}</li>
                ))}
              </ul>
            </div>
            <div className="pd-learn-box learnings">
              <h3>Learnings</h3>
              <ul>
                {(project.learnings || []).map((l, i) => (
                  <li key={i}>{l}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Back */}
        <div className="pd-back-wrap">
          <button
            type="button"
            className="btn btn-outline"
            onClick={() => onNavigate?.('projects')}
          >
            ← Back to Projects
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
