import React from 'react';
import services from '../data/services';
import './Services.css';

const iconMap = {
  code: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="3" y="4" width="18" height="14" rx="2" />
      <path d="M8 20h8" />
      <path d="M9 9l-2 2 2 2" />
      <path d="M15 9l2 2-2 2" />
    </svg>
  ),
  server: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="3" y="4" width="18" height="6" rx="1.5" />
      <rect x="3" y="14" width="18" height="6" rx="1.5" />
      <circle cx="7" cy="7" r="1" fill="currentColor" />
      <circle cx="7" cy="17" r="1" fill="currentColor" />
    </svg>
  ),
  cart: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <circle cx="9" cy="20" r="1.5" />
      <circle cx="17" cy="20" r="1.5" />
      <path d="M3 4h2l2.5 11h10l2-7H7" />
    </svg>
  ),
  rocket: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M12 3c4 3 6 7 6 11a6 6 0 0 1-12 0c0-4 2-8 6-11Z" />
      <path d="M10 14l-3 5" />
      <path d="M14 14l3 5" />
    </svg>
  )
};

const Services = ({ onNavigate }) => {
  return (
    <section className="services" id="services">
      <div className="container">
        <span className="section-label">{services.sectionLabel}</span>
        <h2 className="section-title">{services.title}</h2>

        <div className="services-grid">
          {services.items.map((item) => (
            <article className="service-card" key={item.id}>
              <div className="service-icon">{iconMap[item.icon] || iconMap.code}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <button
                className="service-arrow"
                onClick={() => onNavigate?.('contact')}
                aria-label={item.title}
              >
                →
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
