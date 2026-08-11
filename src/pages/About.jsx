import React from 'react';
import personal from '../data/personal';
import education from '../data/education';
import './About.css';

const traitIcons = {
  target: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  code: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <polyline points="8 6 2 12 8 18" />
      <polyline points="16 6 22 12 16 18" />
    </svg>
  ),
  rocket: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 3c4 3 6 7 6 11a6 6 0 0 1-12 0c0-4 2-8 6-11Z" />
      <path d="M10 14l-3 5M14 14l3 5" />
    </svg>
  )
};

const eduIcons = {
  book: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M4 5a2 2 0 0 1 2-2h12v16H6a2 2 0 0 0-2 2V5Z" />
      <path d="M6 3v16" />
    </svg>
  ),
  college: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M3 10l9-5 9 5-9 5-9-5Z" />
      <path d="M7 12v5l5 3 5-3v-5" />
    </svg>
  )
};

const statIcons = {
  calendar: '📅',
  code: '</>',
  trophy: '🏆',
  heart: '💙'
};

const About = ({ onNavigate }) => {
  const { about, photo, photoAlt, signature, fullName } = personal;

  return (
    <div className="about-page">
      {/* ===== TOP: intro + photo ===== */}
      <section className="about-hero">
        <div className="container about-hero-grid">
          <div className="about-hero-left">
            <span className="about-badge">{about.badge}</span>
            <h1 className="about-title">
              {about.title}{' '}
              <span className="about-title-hl">{about.titleHighlight}</span>
            </h1>
            <div className="about-title-line" />
            <p className="about-intro">{about.intro}</p>

            <div className="about-traits">
              {about.traits.map((t) => (
                <div className="trait-chip" key={t.id}>
                  <span className="trait-icon">{traitIcons[t.icon]}</span>
                  <span>{t.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="about-hero-right">
            <div className="about-photo-frame">
              <div className="about-photo-glow" />
              <img src={photo} alt={photoAlt} className="about-photo" />
              {signature && (
                <span className="about-signature">{signature}</span>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ===== EDUCATION TIMELINE ===== */}
      <section className="about-edu">
        <div className="container">
          <div className="edu-head">
            <span className="edu-cap">🎓</span>
            <h2>{education.title}</h2>
          </div>
          <div className="edu-title-line" />

          <div className="edu-timeline">
            {education.items.map((item, i) => (
              <React.Fragment key={item.id}>
                <div className={`edu-card ${item.highlight ? 'highlight' : ''}`}>
                  <div className="edu-icon">{eduIcons[item.icon] || eduIcons.book}</div>
                  <h3>{item.title}</h3>
                  <p className="edu-inst">{item.institution}</p>
                  <span className={`edu-period ${item.highlight ? 'pill' : ''}`}>
                    {item.period}
                  </span>
                  {item.score && <p className="edu-score">{item.score}</p>}
                  {item.note && <p className="edu-note">{item.note}</p>}
                </div>
                {i < education.items.length - 1 && (
                  <div className="edu-connector" aria-hidden="true">
                    <span className="edu-dot" />
                    <span className="edu-line" />
                    <span className="edu-dot" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ABOUT ME + WHAT I DO ===== */}
      <section className="about-split">
        <div className="container about-split-grid">
          <div className="about-box">
            <div className="box-head">
              <span className="box-icon">👤</span>
              <h3>About Me</h3>
            </div>
            {about.aboutMeText.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <a
              className="btn btn-primary resume-btn"
              href={about.resumeUrl || '/resume.pdf'}
              download="Shivam_Kumar_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Resume ↓
            </a>
          </div>

          <div className="about-box">
            <div className="box-head">
              <span className="box-icon">✦</span>
              <h3>What I Do</h3>
            </div>
            <ul className="what-list">
              {about.whatIDo.map((item, i) => (
                <li key={i}>
                  <span className="check">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="about-stats">
        <div className="container">
          <div className="stats-row">
            {about.stats.map((s) => (
              <div className="stat-card" key={s.id}>
                <span className="stat-ic">{statIcons[s.icon] || '•'}</span>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
