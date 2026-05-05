import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="about-section">

      {/* TITLE */}
      <motion.h2
        className="about-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        About Me
      </motion.h2>

      <div className="about-container">

        {/* MAIN TEXT */}
        <motion.div
          className="about-text sketch-box"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <p>
            I'm <strong>Vaibhav Prakash</strong>, a Software Engineer focused on
            building scalable backend systems and AI-powered applications.
          </p>

          <p>
            During my internship at <strong>Tejas Networks</strong>, I worked on
            automation frameworks, API monitoring tools, and CI/CD workflows,
            improving system reliability and reducing manual effort.
          </p>

          <p>
            I've also built AI-driven products that analyze data, generate insights,
            and automate workflows combining software engineering with
            intelligent systems.
          </p>

          <p>
            I also have hands-on experience in Machine Learning and Deep Learning,
            including NLP pipelines, sequence models, EDA, Text processing, and data analysis workflows.
          </p>

          <p>
            I enjoy solving complex problems, optimizing performance, and building
            systems that are both efficient and impactful.
          </p>
        </motion.div>

        {/* EXPERIENCE HIGHLIGHT */}
        <motion.div
          className="about-side sketch-box"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h3>Experience</h3>

          <p><strong>R&D Engineer Intern</strong></p>
          <p>Tejas Networks, Bengaluru</p>

          <ul>
            <li>Reduced manual testing effort by 25%</li>
            <li>Improved system reliability by 15%</li>
            <li>Resolved 20+ production issues</li>
            <li>Automated CI/CD workflows</li>
          </ul>
        </motion.div>

      </div>
    </section>
  );
}