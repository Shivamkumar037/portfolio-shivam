/**
 * Experience timeline — Journey page
 * type: "Internship" | "Self Learning" | "Education"
 * projectId: optional — if set, card can open that project detail
 */
const experience = {
  sectionLabel: "MY EXPERIENCE",
  title: "My Journey &",
  titleHighlight: "Experience",
  subtitle:
    "A timeline of my education, internship training and projects that shaped my skills and expertise.",

  sideCard: {
    title: "Always Learning",
    text: "I believe in continuous learning and building real-world projects to grow every day."
  },

  bottomCard: {
    title: "Focused on Growth",
    text: "I enjoy learning new technologies and building projects that solve real-world problems."
  },

  items: [
    {
      id: 1,
      period: "May 2026 – Jul 2026",
      periodNote: "2 Months",
      title: "MERN Stack Internship Training",
      company: "Analyze InfoTech, Lucknow",
      type: "Internship",
      typeColor: "blue",
      description:
        "Completed a 2-month internship training on MERN Stack. Worked with the Software Development & Testing division and completed a project during the training period.",
      tags: ["MongoDB", "Express.js", "React", "Node.js", "JavaScript"],
      icon: "company",
      projectId: 3, // E-Commerce Web Application detail
      logoText: "ai"
    },
    {
      id: 2,
      period: "2024 – Present",
      periodNote: "Ongoing",
      title: "Full Stack Development",
      company: "Self Learning & Practice",
      type: "Self Learning",
      typeColor: "purple",
      description:
        "Continuously learning and improving my skills in full stack development. Building projects, solving problems and exploring new technologies.",
      tags: ["Java", "Spring Boot", "MySQL", "React","Docker", "Git"],
      icon: "code",
      projectId: null
    },
    {
      id: 3,
      period: "2023 – 2027",
      periodNote: "B.Tech CSE",
      title: "Bachelor of Technology (CSE)",
      company: "SR Institute of Management & Technology, Lucknow",
      type: "Education",
      typeColor: "green",
      description:
        "Currently pursuing B.Tech in Computer Science & Engineering. Focused on building a strong foundation in programming and problem solving.",
      tags: ["Data Structures", "DBMS", "Operating System", "OOPs", "CN"],
      icon: "education",
      projectId: null
    }
  ]
};

export default experience;
