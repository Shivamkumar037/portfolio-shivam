import React, { useState } from 'react';
import personal from '../data/personal';
import global from '../data/global';
import './Contact.css';

const WHATSAPP_NUMBER = '919792079093'; // +91 9792079093

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const onChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = form.name.trim();
    const email = form.email.trim();
    const subject = form.subject.trim();
    const message = form.message.trim();

    if (!name || !email || !message) {
      window.alert('Please fill Name, Email and Message.');
      return;
    }

    const text = [
      `*New message from Portfolio*`,
      ``,
      `*Name:* ${name}`,
      `*Email:* ${email}`,
      subject ? `*Subject:* ${subject}` : null,
      ``,
      `*Message:*`,
      message
    ]
      .filter(Boolean)
      .join('\n');

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const infoCards = [
    {
      id: 'email',
      label: 'Email',
      value: personal.email,
      href: `mailto:${personal.email}`,
      icon: 'mail'
    },
    {
      id: 'phone',
      label: 'Phone',
      value: personal.phone,
      href: `https://wa.me/${WHATSAPP_NUMBER}`,
      icon: 'phone'
    },
    {
      id: 'location',
      label: 'Location',
      value: `${personal.location}, India`,
      href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(personal.location + ', India')}`,
      icon: 'pin'
    },
    {
      id: 'availability',
      label: 'Availability',
      value: 'Mon – Sat : 9:00 AM – 8:00 PM',
      href: null,
      icon: 'clock'
    }
  ];

  const socials = [
    {
      id: 'github',
      label: 'GitHub',
      handle: '@Shivamkumar037',
      href: global.social.github,
      icon: 'github'
    },
    {
      id: 'linkedin',
      label: 'LinkedIn',
      handle: '/in/shivam-kumar-347473310',
      href: global.social.linkedin,
      icon: 'linkedin'
    },
    {
      id: 'email',
      label: 'Email',
      handle: personal.email,
      href: `mailto:${personal.email}`,
      icon: 'mail'
    },
    {
      id: 'instagram',
      label: 'Instagram',
      handle: '@shivam_kumar037s',
      href: global.social.instagram || 'https://www.instagram.com/shivam_kumar037s',
      icon: 'instagram'
    }
  ];

  const icons = {
    mail: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 7l9 7 9-7" />
      </svg>
    ),
    phone: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M6.5 3h3l1.5 4-2 1.5a12 12 0 0 0 5.5 5.5L16 12l4 1.5v3a2 2 0 0 1-2.2 2A17 17 0 0 1 4.5 5.2 2 2 0 0 1 6.5 3Z" />
      </svg>
    ),
    pin: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11Z" />
        <circle cx="12" cy="10" r="2.5" />
      </svg>
    ),
    clock: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </svg>
    ),
    github: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.27 2.75 1.05A9.3 9.3 0 0 1 12 6.8c.85 0 1.7.12 2.5.34 1.9-1.32 2.74-1.05 2.74-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.8 0 .27.18.59.69.48A10.27 10.27 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
      </svg>
    ),
    linkedin: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 7.05a1.96 1.96 0 1 0 0-3.92 1.96 1.96 0 0 0 0 3.92ZM20.44 20h-3.37v-5.6c0-1.33-.02-3.05-1.86-3.05-1.86 0-2.14 1.45-2.14 2.95V20H9.7V8.5h3.23v1.57h.05c.45-.85 1.55-1.75 3.19-1.75 3.41 0 4.04 2.25 4.04 5.17V20Z" />
      </svg>
    ),
    instagram: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
    send: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 2L11 13" />
        <path d="M22 2L15 22l-4-9-9-4 20-7Z" />
      </svg>
    ),
    rocket: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 3c4 3 6 7 6 11a6 6 0 0 1-12 0c0-4 2-8 6-11Z" />
        <path d="M10 14l-3 5M14 14l3 5" />
      </svg>
    )
  };

  return (
    <div className="contact-page">
      <div className="container">
        {/* Top: intro + form */}
        <div className="ct-hero">
          <div className="ct-left">
            <span className="ct-badge">GET IN TOUCH</span>
            <h1 className="ct-title">
              Let&apos;s build
              <br />
              something <span className="ct-hl">amazing</span>
            </h1>
            <div className="ct-title-line" />
            <p className="ct-sub">
              Have a project in mind or just want to say hi?
              Fill out the form and I&apos;ll get back to you as soon as possible.
            </p>

            <div className="ct-info-list">
              {infoCards.map((item) => {
                const inner = (
                  <>
                    <span className="ct-info-icon">{icons[item.icon]}</span>
                    <span className="ct-info-text">
                      <strong>{item.label}</strong>
                      <span>{item.value}</span>
                    </span>
                    <span className="ct-info-arrow">→</span>
                  </>
                );
                return item.href ? (
                  <a
                    key={item.id}
                    className="ct-info-card"
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    {inner}
                  </a>
                ) : (
                  <div key={item.id} className="ct-info-card static">
                    {inner}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="ct-form-card">
            <div className="ct-form-head">
              <span className="ct-form-icon">{icons.send}</span>
              <div>
                <h2>Send Me a Message</h2>
                <p>I usually respond within 24 hours.</p>
              </div>
            </div>

            <form className="ct-form" onSubmit={handleSubmit} noValidate>
              <label className="ct-field">
                <span>Your Name</span>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={form.name}
                  onChange={onChange}
                  required
                  autoComplete="name"
                />
              </label>

              <label className="ct-field">
                <span>Your Email</span>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={form.email}
                  onChange={onChange}
                  required
                  autoComplete="email"
                />
              </label>

              <label className="ct-field">
                <span>Subject</span>
                <input
                  type="text"
                  name="subject"
                  placeholder="What is this regarding?"
                  value={form.subject}
                  onChange={onChange}
                />
              </label>

              <label className="ct-field">
                <span>Your Message</span>
                <textarea
                  name="message"
                  placeholder="Write your message here..."
                  rows={5}
                  value={form.message}
                  onChange={onChange}
                  required
                />
              </label>

              <button type="submit" className="ct-submit">
                Send Message <span className="ct-submit-icon">{icons.send}</span>
              </button>
            </form>
          </div>
        </div>

        {/* Social */}
        <section className="ct-social-sec">
          <span className="ct-social-label">CONNECT WITH ME</span>
          <h2 className="ct-social-title">
            Let&apos;s connect on <span className="ct-hl">social media</span>
          </h2>
          <p className="ct-social-sub">
            Follow me on these platforms to see my work, updates and more.
          </p>

          <div className="ct-social-grid">
            {socials.map((s) => (
              <a
                key={s.id}
                className="ct-social-card"
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="ct-social-icon">{icons[s.icon]}</span>
                <span className="ct-social-text">
                  <strong>{s.label}</strong>
                  <span>{s.handle}</span>
                </span>
                <span className="ct-info-arrow">→</span>
              </a>
            ))}
          </div>
        </section>

        {/* CTA banner */}
        <section className="ct-cta">
          <div className="ct-cta-left">
            <span className="ct-cta-icon">{icons.rocket}</span>
            <div>
              <h3>Interested in working together?</h3>
              <p>I&apos;m always open to discussing new opportunities and exciting projects.</p>
            </div>
          </div>
          <a
            className="btn btn-primary ct-cta-btn"
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi Shivam! I'm interested in working together.")}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Let&apos;s Work Together →
          </a>
        </section>
      </div>
    </div>
  );
};

export default Contact;
