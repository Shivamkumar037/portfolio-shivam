/**
 * Projects data
 * liveUrl: "" or null → Live Demo click pe alert
 * detail fields used on Project Detail page
 */
const projects = {
  sectionLabel: "MY PROJECTS",
  title: "A collection of my",
  titleHighlight: "recent work",
  subtitle:
    "Here are some of the projects I've built while learning and growing as a Full Stack Developer. Each project solves a real-world problem and shows my skills in action.",
  viewAllLabel: "View All Projects →",
  comingSoon: "More exciting projects coming soon...",

  filters: [
    { id: "all", label: "All" },
    { id: "webapp", label: "Web Apps" },
    { id: "website", label: "Websites" },
    { id: "api", label: "APIs" }
  ],

  items: [
    {
      id: 1,
      title: "Restaurant Management System",
      subtitle: "Foodies",
      description:
        "Complete restaurant management system with online booking, menu management and admin dashboard.",
      image:
        "/restaurant/rest1.png",
      screenshots: [
        "/restaurant/rest1.png",       
        "/restaurant/rest2.png" ,
        "/restaurant/rest3.png" ,
        "/restaurant/rest4.png",
        "/restaurant/rest5.png"
      
      ],
      type: "Web App",
      category: "webapp",
      tags: ["React"],
      liveUrl: "https://foodies-restaurant1.netlify.app/",
      githubUrl: "https://github.com/Shivamkumar037/foodies-restaurant",
      featured: true,
      role: "Frontend Developer",
      duration: "2025",
      projectType: "Personal Project",
      status: "Completed",
      about:
        "Foodies is a complete restaurant management system built to handle online table booking, dynamic menu management, order tracking and a full admin dashboard for restaurant staff.",
      features: [
        "Online table reservation & booking",
        "Dynamic menu with categories",
        "Admin dashboard for orders & menu",
        "Responsive design for all devices"
      ],
      techStack: {
        frontend: ["React", "JavaScript", "CSS"]
      },
      challengesText:
        "Building real-time availability for bookings and keeping menu state consistent across admin and customer views was challenging.",
      challenges: ["Booking conflict handling", "Admin role security", "Menu state sync"],
      learnings: ["Spring Boot CRUD patterns", "React component architecture", "MySQL schema design"]
    },
    {
      id: 2,
      title: "Portfolio Website",
      subtitle: "SHIVAM.DEV",
      description:
        "My personal portfolio website to showcase skills, projects and services.",
      image:
        "/portfolio/port2.png",
      screenshots: [
        "/portfolio/port2.png",
"/portfolio/port3.png",
"/portfolio/port4.png",
"/portfolio/port5.png"
      ],
      type: "Website",
      category: "website",
      tags: ["React", "Vite", "CSS"],
      liveUrl: "https://portfolio-shivam-kumar.netlify.app/",
      githubUrl: "https://github.com/Shivamkumar037/portfolio-shivam",
      featured: true,
      role: "Frontend Developer",
      duration: "2026",
      projectType: "Personal Project",
      status: "Completed",
      about:
        "A dark-themed personal portfolio built with React and Vite to showcase my skills, projects, education and services in a clean, mobile-first layout.",
      features: [
        "Fully responsive mobile + desktop UI",
        "Data-driven sections from JS config",
        "Project detail pages",
        "Downloadable resume"
      ],
      techStack: {
        frontend: ["React", "Vite", "CSS"],
        backend: [],
        database: []
      },
      challengesText:
        "Designing a consistent dark theme and smooth page transitions without a heavy UI library.",
      challenges: ["Mobile navigation UX", "Theme consistency", "Performance"],
      learnings: ["Component composition", "CSS custom properties", "Vite workflow"]
    },
    {
      id: 3,
      title: "E-Commerce Web Application",
      subtitle: "ShopEase",
      description:
        "A full-stack e-commerce application with product browsing, category filtering, cart management, user authentication and secure checkout.",
      image:
        "/e-comerse/e-com2.png",
      screenshots: ["/e-comerse/e-com2.png",
        "/e-comerse/e-com1.png",
"/e-comerse/e-com3.png",
        "/e-comerse/e-com4.png",
        "/e-comerse/e-com5.png"      ],
      type: "Web App",
      category: "webapp",
      tags: ["React", "JavaScript","Express","Node js","MongoDB"],
      liveUrl: "",
      githubUrl: "https://github.com/Shivamkumar037/intershipProject",
      featured: true,
      role: "Full Stack Developer",
      duration: "Jan 2024 – Mar 2024",
      projectType: "Personal Project",
      status: "Completed",
      about:
        "ShopEase is a full-stack e-commerce web application built to provide users with a smooth shopping experience. It includes features like product listing, cart management, order placement and user authentication.",
      features: [
        "User authentication & authorization (JWT)",
        "Browse products & categories",
        "Add to cart & manage cart items",
        "Secure checkout & order placement",
        "Responsive design for all devices"
      ],
      techStack: {
        frontend: ["React", "JavaScript"],
        backend: ["Express js", "Node js", "JWT"],
        database: ["MongoDB"]
      },
      challengesText:
        "Handling state management for cart and user sessions was challenging. Implementing secure authentication and integrating frontend with backend taught me a lot about full-stack development.",
      challenges: ["State management", "Secure authentication", "API integration"],
      learnings: ["Full stack workflow", "REST API design", "Better problem solving"]
    },
    {
      id: 4,
      title: "Electronic Voting Machine (EVM)",
      subtitle: "Spring Boot",
      description:
        "Secure end-to-end voting platform with role-based auth, results",
      image:
        "/Voting System/voting1.png",
      screenshots: [
        "/Voting System/voting1.png",
        "/Voting System/voting2.png",
        "/Voting System/voting3.png",
        "/Voting System/voting4.png",
        "/Voting System/voting5.png",
        "/Voting System/voting6.png",
        "/Voting System/voting7.png",
        "/Voting System/voting8.png",
        "/Voting System/voting9.png",

      ],
      type: "Web App",
      category: "webapp",
      tags: ["Spring Boot", "Hibernate", "MySQL", "Spring Security"],
      liveUrl: "",
      githubUrl: "https://github.com/Shivamkumar037",
      featured: false,
      role: "Backend Developer",
      duration: "2025",
      projectType: "Academic / Personal",
      status: "Completed",
      about:
        "A secure voting platform with role-based authentication, vote casting, results aggregation ",
      features: [
        "Role-based auth (Admin / Voter)",
        "Secure vote casting",
        "Results dashboard"
      ],
      techStack: {
        frontend: [],
        backend: ["Spring Boot", "Hibernate", "Spring Security","Thymeleaf"],
        database: ["MySQL"]
      },
      challengesText: "Ensuring vote integrity and preventing double voting.",
      challenges: ["Vote integrity", "Security hardening"],
      learnings: ["Spring Security"]
    },
    {
      id: 8,
      title: "Social Media Management Backend",
      subtitle: "Redis · Docker",
      description:
        "Scalable backend for posts, nested comments, likes, Redis cache and Docker.",
      image:
        "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=500&fit=crop",
      screenshots: [
        "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=500&fit=crop"
      ],
      type: "API",
      category: "api",
      tags: ["Spring Boot", "MySQL", "Redis", "Docker"],
      liveUrl: "",
      githubUrl: "https://github.com/Shivamkumar037",
      featured: false,
      role: "Backend Developer",
      duration: "2025",
      projectType: "Personal Project",
      status: "Completed",
      about:
        "A scalable social backend supporting posts, nested comments, likes, Redis caching and containerized deployment with Docker.",
      features: [
        "Posts & nested comments",
        "Likes system",
        "Redis caching",
        "Docker deployment"
      ],
      techStack: {
        frontend: [],
        backend: ["Spring Boot", "Redis", "Docker"],
        database: ["MySQL"]
      },
      challengesText: "Designing nested comment trees and cache invalidation.",
      challenges: ["Nested data model", "Cache invalidation"],
      learnings: ["Redis usage", "Docker", "Scalable API design"]
    },
    {
      id: 9,
      title: "Feedback Management System",
      subtitle: "Spring Security",
      description:
        "Secure feedback platform with Spring Security and REST CRUD APIs.",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop",
      screenshots: [
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop"
      ],
      type: "API",
      category: "api",
      tags: ["Spring Boot", "Hibernate", "MySQL"],
      liveUrl: "",
      githubUrl: "https://github.com/Shivamkumar037",
      featured: false,
      role: "Backend Developer",
      duration: "2025",
      projectType: "Personal Project",
      status: "Completed",
      about:
        "A secure feedback collection and management system using Spring Security and REST CRUD APIs.",
      features: [
        "Secure feedback submission",
        "Admin review workflow",
        "REST CRUD APIs",
        "Spring Security integration"
      ],
      techStack: {
        frontend: [],
        backend: ["Spring Boot", "Hibernate", "Spring Security"],
        database: ["MySQL"]
      },
      challengesText: "Securing endpoints while keeping the API simple.",
      challenges: ["Security config", "Access control"],
      learnings: ["Spring Security", "REST design"]
    }
  ]
};

export default projects;
