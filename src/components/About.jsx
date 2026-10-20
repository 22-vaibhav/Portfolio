import { motion } from "framer-motion";
import { aboutData } from "../constants";

export default function About() {
  return (
    <section id="about" className="about-section">

      {/* TITLE */}
      <motion.h2
        className="about-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        {aboutData.title}
      </motion.h2>

      <div className="about-container">

        {/* MAIN TEXT */}
        <motion.div
          className="about-text sketch-box"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
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
          <h3>{aboutData.experienceTitle}</h3>

          <div className="experience-scroll">
            {aboutData.experiences.map((exp, index) => (
              <div key={index} className="experience-entry">
                <strong>{exp.role}</strong><br />
                {exp.company}, {exp.location}<br />
                <span className="exp-date">{exp.period}</span>
                <ul>
                  {exp.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}