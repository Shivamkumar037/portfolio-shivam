import React from 'react';
import projects from '../data/projects';
import './FeaturedProjects.css';

const FeaturedProjects = ({ onNavigate, onOpenProject }) => {
  const featured = projects.items.filter((p) => p.featured);

  return (
    <section className="featured" id="projects">
      <div className="container">
        <div className="featured-head">
          <div>
            <span className="section-label" style={{ textAlign: 'left' }}>
              {projects.sectionLabel}
            </span>
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: 0 }}>
              {projects.title}
            </h2>
          </div>
          <button className="view-all" onClick={() => onNavigate?.('projects')}>
            {projects.viewAllLabel}
          </button>
        </div>

        <div className="featured-grid">
          {featured.map((p) => (
            <article
              className="project-card"
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
              style={{ cursor: 'pointer' }}
            >
              <div className="project-img-wrap">
                <img src={p.image} alt={p.title} />
                {p.subtitle && <span className="project-badge">{p.subtitle}</span>}
              </div>
              <div className="project-body">
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <div className="project-tags">
                  {p.tags?.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
