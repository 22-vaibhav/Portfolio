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
            I am <strong>Vaibhav Prakash</strong>, a <strong>Cloud Full Stack Developer</strong> building scalable backend and full-stack apps.
          </p>

          <p>
            I completed my Bachelor's in Computer Science from <strong>Siddaganga Institute of Technology</strong>.
          </p>

          <p>
            I work at <strong>IBM</strong>, building my skills in Java, Spring, Spring Boot, cloud tech and enterprise-level apps.
          </p>

          <p>
            As an <strong>R&D Engineer Intern at Tejas Networks</strong>, I gained experience in product verification, system-level integration testing, backend validation, API testing, SQL, Bash scripting, and Python for network management systems.
          </p>

          <p>
            In my free time, I enjoy building AI-driven apps, and exploring concepts like LLMs, Generative AI, NLP, and multi-agent systems. I like diving into the details of how systems work, and building end-to-end solutions that take an idea from concept to production-ready software.
          </p>

          <p>
            Right now, I'm looking to advance my backend and cloud engineering skills, and explore the confluence of software engineering and AI.
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

          <strong>R&D Engineer Intern</strong><br></br>
          Tejas Networks, Bengaluru<br></br>
          Jan 2025 - Sept 2025

          <ul>
            <li>
              Performed product verification and system integration testing for EMS/NMS platforms, validating 1,000+ network elements.
            </li>

            <li>
              Worked with SNMP, SFTP, SMTP, HTTP, REST APIs, SQL, Bash, and Python for backend validation and automation.
            </li>

            <li>
              Automated validation workflows, reducing manual verification effort by 25%.
            </li>

            <li>
              Investigated and resolved 50+ software defects, supporting 3+ product releases.
            </li>
          </ul>
        </motion.div>

      </div>
    </section>
  );
}