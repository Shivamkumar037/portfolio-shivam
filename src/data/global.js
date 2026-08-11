/**
 * Global site config
 * Only pages that exist are listed in nav
 */
const global = {
  siteName: "SHIVAM.DEV",
  siteTag: "Portfolio",
  logoText: "SHIVAM.DEV",

  // Desktop + hamburger — only built pages
  nav: [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" }
  ],

  // Mobile bottom bar — 5 primary tabs
  mobileNav: [
    { id: "home", label: "Home", icon: "home" },
    { id: "about", label: "About", icon: "user" },
    { id: "projects", label: "Projects", icon: "folder" },
    { id: "experience", label: "Experience", icon: "briefcase" },
    { id: "contact", label: "Contact", icon: "mail" }
  ],

  cta: {
    primary: "Let's Talk",
    secondary: "View My Work"
  },

  social: {
    github: "https://github.com/Shivamkumar037",
    linkedin: "https://linkedin.com/in/shivam-kumar-347473310",
    email: "shivamkumar37je@gmail.com",
    phone: "+91 9792079093",
    instagram: "https://www.instagram.com/shivam_kumar037s"
  },

  footer: {
    text: "© 2026 Shivam Kumar. All rights reserved."
  }
};

export default global;
