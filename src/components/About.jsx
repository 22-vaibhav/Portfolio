import { motion } from "framer-motion";
import { aboutData } from "../constants";

export default function About() {
  return (
    <section id="about" className="about-section">

      {/* TITLE */}
      <motion.div
        className="about-heading"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        {/* <div className="about-label">{aboutData.label}</div> */}
        <h2>{aboutData.title}</h2>
        <svg className="about-squiggle" viewBox="0 0 160 14" aria-hidden="true">
          <path d="M3 9 C 13 1, 23 1, 33 9 S 53 17, 63 9 S 83 1, 93 9 S 113 17, 123 9 S 143 1, 157 8" />
        </svg>
      </motion.div>

      <div className="about-container">

        {/* MAIN TEXT */}
        <motion.div
          className="about-text sketch-box"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <div className="about-tape about-tape-left" aria-hidden="true" />
          {aboutData.paragraphs.map((paragraph, index) => (
            <p
              key={index}
              dangerouslySetInnerHTML={{ __html: paragraph }}
            />
          ))}
        </motion.div>

        {/* EXPERIENCE HIGHLIGHT */}
        <motion.div
          className="about-side sketch-box"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="about-tape about-tape-right" aria-hidden="true" />
          <h3>{aboutData.experienceTitle}</h3>

          <div className="experience-scroll">
            <div className="experience-timeline">
              {aboutData.experiences.map((exp, index) => (
                <div key={index} className="experience-entry">
                  <span className="experience-dot" aria-hidden="true" />
                  <strong>{exp.role}</strong>
                  <div>{exp.company}, {exp.location}</div>
                  <span className="exp-date">{exp.period}</span>
                  <ul>
                    {exp.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}