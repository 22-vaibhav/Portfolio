import { motion } from "framer-motion";
import { projectsTitle, projects } from "../constants";

export default function Projects() {
  return (
    <section id="projects" className="projects-section">

      {/* TITLE */}
      <motion.div
        className="projects-heading"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <h2>{projectsTitle}</h2>
        <svg className="projects-squiggle" viewBox="0 0 160 14" aria-hidden="true">
          <path d="M3 9 C 13 1, 23 1, 33 9 S 53 17, 63 9 S 83 1, 93 9 S 113 17, 123 9 S 143 1, 157 8" />
        </svg>
      </motion.div>

      {/* PROJECT CARDS */}
      <div className="projects-container">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            className="project-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: Math.min(index, 2) * 0.2 }}
          >
            <div className="project-num" aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </div>
            <div className="project-tape" aria-hidden="true" />

            <h3>{project.title}</h3>

            <p className="project-desc">{project.desc}</p>

            <ul>
              {project.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>

            <p className="tech"><strong>Tech:</strong> {project.tech}</p>

            <div className="project-links">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-btn project-btn-primary"
              >
                Live Demo
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-btn"
              >
                GitHub
              </a>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
}