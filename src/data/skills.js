/**
 * Skills page data
 */
const skills = {
  sectionLabel: "MY SKILLS",
  title: "Technologies",
  titleHighlight: "I work with",
  subtitle:
    "Here are the technologies and tools I use to build modern, scalable and performant web applications.",

  technical: {
    title: "Technical Skills",
    groups: [
      {
        id: "frontend",
        title: "Frontend Development",
        icon: "monitor",
        color: "#3B82F6",
        items: [
          { name: "HTML", level: 90 },
          { name: "CSS", level: 85 },
          { name: "JavaScript", level: 80 },
          { name: "React", level: 75 },
          { name: "Tailwind CSS", level: 80 }
        ]
      },
      {
        id: "backend",
        title: "Backend Development",
        icon: "server",
        color: "#22C55E",
        items: [
          { name: "Java", level: 85 },
          { name: "Spring Boot", level: 75 },
          { name: "REST APIs", level: 80 },
          { name: "Node.js", level: 65 }
        ]
      },
      {
        id: "database",
        title: "Database",
        icon: "database",
        color: "#F59E0B",
        items: [
          { name: "MySQL", level: 85 },
          { name: "MongoDB", level: 60 }
        ]
      },
      {
        id: "tools",
        title: "Tools & Others",
        icon: "tools",
        color: "#60A5FA",
        items: [
          { name: "Git & GitHub", level: 90 },
          { name: "VS Code", level: 85 },
          { name: "Postman", level: 80 },
          { name: "Docker (Basic)", level: 50 }
        ]
      }
    ]
  },

  professional: {
    title: "Professional Skills",
    items: [
      {
        id: 1,
        title: "Problem Solving",
        text: "I enjoy solving complex problems and building efficient solutions.",
        icon: "target"
      },
      {
        id: 2,
        title: "Clean Code",
        text: "I write clean, maintainable and scalable code following best practices.",
        icon: "bulb"
      },
      {
        id: 3,
        title: "Team Collaboration",
        text: "I have experience working in teams and managing projects effectively.",
        icon: "users"
      },
      {
        id: 4,
        title: "Continuous Learning",
        text: "I love learning new technologies and improving my skills daily.",
        icon: "book"
      }
    ]
  },

  learning: {
    title: "What I'm Currently Learning",
    items: [
      "Advanced Spring Boot",
      "System Design",
      "Docker",
      "AWS (Basics)",
      "Data Structures & Algorithms"
    ]
  }
};

export default skills;
