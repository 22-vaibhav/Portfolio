import { motion } from "framer-motion";

const projects = [
  {
    title: "JobJournal — Career Journaling & Document Management Platform",
    desc: "Full-stack platform for managing career journals, profile information, and important documents through a centralized Document Vault.",
    points: [
      "Developed RESTful APIs using Node.js and Express.js for user and document management",
      "Integrated Cloudinary for secure document and profile image storage",
      "Implemented document upload, preview, download, search, and category-based filtering",
      "Built user-specific resource access and account deletion with associated data cleanup",
      "Deployed the React frontend on Vercel and backend on Render",
    ],
    tech: "React, Node.js, Express, MongoDB, Mongoose, Tailwind CSS, Cloudinary, JWT",
    link: "https://job-journal-dusky.vercel.app",
    github: "https://github.com/22-vaibhav/Job-Journal",
  },
  {
    title: "Prepify AI — Interview Preparation Platform",
    desc: "AI-powered platform that analyzes resumes against job descriptions and generates personalized interview questions.",
    points: [
      "Generated technical & behavioral questions using LLM APIs",
      "Used Google Gemini API for intelligent question generation",
      "Implemented resume parsing and skill-gap analysis",
      "Built secure REST APIs with JWT authentication",
      "Enabled resume scoring and PDF generation",
    ],
    tech: "React, Node.js, Express, MongoDB, Gemini APIs",
    link: "https://prepify-ai-zeta.vercel.app",
    github: "https://github.com/22-vaibhav/Prepify-AI",
  },
  {
    title: "InsightForge — Multi-Agent AI Research System",
    desc: "Multi-agent system that automates research using search, scraping, and report generation.",
    points: [
      "Built LangChain-based multi-agent workflow",
      "Integrated Tavily API & BeautifulSoup for real-time data",
      "Designed LLM-driven research & critique pipeline",
      "Developed Streamlit UI with downloadable reports",
    ],
    tech: "Python, LangChain, Mistral AI, Streamlit",
    link: "https://multi-agent-research-system-69gtkgbo2bihaj4use9cwr.streamlit.app/",
    github: "https://github.com/22-vaibhav/Multi-Agent-Research-System",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects-section">

      {/* TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        Projects
      </motion.h2>

      {/* PROJECT CARDS */}
      <div className="projects-container">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            className="project-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ scale: 1.03, rotate: index % 2 === 0 ? 1 : -1 }}
          >
            <h3>{project.title}</h3>

            <p className="project-desc">{project.desc}</p>

            <ul>
              {project.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>

            <p className="tech"><strong>Tech:</strong> {project.tech}</p>

            <div className="project-links">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <button>Live Demo</button>
              </a>
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <button>GitHub</button>
              </a>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
}