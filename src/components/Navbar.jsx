import React, { useState } from 'react';
import global from '../data/global';
import './Navbar.css';

const Navbar = ({ activePage = 'home', onNavigate }) => {
  const [open, setOpen] = useState(false);

  const go = (id) => {
    onNavigate?.(id);
    setOpen(false);
  };

  return (
    <header className="nav">
      <div className="container nav-inner">
        <button className="nav-logo" onClick={() => go('home')}>
          <span className="logo-brackets">&lt;/&gt;</span>
          <span className="logo-text">{global.logoText}</span>
        </button>

        <nav className="nav-links">
          {global.nav.map((item) => (
            <button
              key={item.id}
              className={`nav-link ${activePage === item.id ? 'active' : ''}`}
              onClick={() => go(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <button className="btn btn-primary nav-cta desktop-only" onClick={() => go('contact')}>
          {global.cta.primary}
        </button>

        <button
          className={`hamburger ${open ? 'open' : ''}`}
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {open && (
        <div className="nav-dropdown">
          {global.nav.map((item) => (
            <button
              key={item.id}
              className={`nav-drop-link ${activePage === item.id ? 'active' : ''}`}
              onClick={() => go(item.id)}
            >
              {item.label}
            </button>
          ))}
          <button className="btn btn-primary drop-cta" onClick={() => go('contact')}>
            {global.cta.primary}
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
