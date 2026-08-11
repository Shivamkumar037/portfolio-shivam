import React, { useState } from 'react';
import skills from '../data/skills';
import './Skills.css';

const groupIcons = {
  monitor: '🖥️',
  server: '🗄️',
  database: '🛢️',
  tools: '🔧'
};

const proIcons = {
  target: '🎯',
  bulb: '💡',
  users: '👥',
  book: '📖'
};

const Skills = () => {
  // Mobile accordion: first group open by default
  const [openId, setOpenId] = useState(skills.technical.groups[0]?.id || null);

  const toggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="skills-page">
      <div className="container">
        {/* Header */}
        <div className="skills-header">
          <div className="skills-header-text">
            <span className="skills-badge">{skills.sectionLabel}</span>
            <h1 className="skills-title">
              {skills.title}{' '}
              <span className="skills-title-hl">{skills.titleHighlight}</span>
            </h1>
            <p className="skills-sub">{skills.subtitle}</p>
          </div>
          <div className="skills-header-art" aria-hidden="true">
            <div className="skills-art-card">
              <span className="skills-art-code">&lt;/&gt;</span>
              <div className="skills-art-bars">
                <span style={{ width: '90%' }} />
                <span style={{ width: '70%' }} />
                <span style={{ width: '55%' }} />
              </div>
            </div>
            <div className="skills-art-brace">{`{ }`}</div>
          </div>
        </div>

        {/* Technical Skills */}
        <section className="skills-tech">
          <div className="skills-sec-head">
            <span className="skills-sec-icon">✦</span>
            <h2>{skills.technical.title}</h2>
          </div>
          <div className="skills-sec-line" />

          <div className="tech-grid">
            {skills.technical.groups.map((group) => {
              const isOpen = openId === group.id;
              return (
                <div
                  className={`tech-card ${isOpen ? 'open' : ''}`}
                  key={group.id}
                  style={{ '--bar-color': group.color }}
                >
                  <button
                    type="button"
                    className="tech-card-head"
                    onClick={() => toggle(group.id)}
                  >
                    <span className="tech-card-icon">
                      {groupIcons[group.icon] || '•'}
                    </span>
                    <span className="tech-card-title">{group.title}</span>
                    <span className="tech-chevron">{isOpen ? '▴' : '▾'}</span>
                  </button>

                  <div className={`tech-card-body ${isOpen ? 'show' : ''}`}>
                    {group.items.map((item) => (
                      <div className="skill-row" key={item.name}>
                        <div className="skill-row-top">
                          <span className="skill-dot" />
                          <span className="skill-name">{item.name}</span>
                          <span className="skill-pct">{item.level}%</span>
                        </div>
                        <div className="skill-bar-track">
                          <div
                            className="skill-bar-fill"
                            style={{ width: `${item.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Professional Skills */}
        <section className="skills-pro">
          <div className="skills-sec-head">
            <span className="skills-sec-icon">👤</span>
            <h2>{skills.professional.title}</h2>
          </div>
          <div className="skills-sec-line" />

          <div className="pro-grid">
            {skills.professional.items.map((item) => (
              <div className="pro-card" key={item.id}>
                <span className="pro-icon">{proIcons[item.icon] || '•'}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Currently Learning */}
        <section className="skills-learning">
          <div className="skills-sec-head">
            <span className="skills-sec-icon">🚀</span>
            <h2>{skills.learning.title}</h2>
          </div>
          <div className="skills-sec-line" />

          <div className="learn-chips">
            {skills.learning.items.map((item) => (
              <span className="learn-chip" key={item}>
                {item}
              </span>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Skills;
