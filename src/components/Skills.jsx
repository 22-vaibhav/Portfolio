import { motion } from "framer-motion";
import { skillsTitle, skillCategories } from "../constants";

export default function Skills() {
  return (
    <section id="skills" className="skills-section">

      {/* TITLE */}
      <motion.div
        className="skills-heading"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <h2 className="skills-title">{skillsTitle}</h2>
        <svg className="skills-squiggle" viewBox="0 0 160 14" aria-hidden="true">
          <path d="M3 9 C 13 1, 23 1, 33 9 S 53 17, 63 9 S 83 1, 93 9 S 113 17, 123 9 S 143 1, 157 8" />
        </svg>
      </motion.div>

      {/* CATEGORIES */}
      <div className="skills-categories">
        {skillCategories.map((cat, catIndex) => (
          <motion.div
            key={cat.category}
            className="skill-category"
            style={{ "--cat-bg": cat.color, "--cat-shade": cat.shade }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: catIndex * 0.1 }}
          >
            <div className="skill-tape" aria-hidden="true" />

            {/* CATEGORY LABEL */}
            <h3 className="category-label">{cat.category}</h3>

            {/* SKILL CARDS */}
            <motion.div
              className="skills-container"
              initial="hidden"
              whileInView="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.05 } },
              }}
            >
              {cat.skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  className="skill-card"
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  {skill.icon ? (
                    <div className="icon-wrapper">
                      <img src={skill.icon} alt="" />
                    </div>
                  ) : (
                    <div className="icon-wrapper icon-text-only">
                      <span>{skill.name.charAt(0)}</span>
                    </div>
                  )}
                  <p>{skill.name}</p>
                </motion.div>
              ))}
            </motion.div>

          </motion.div>
        ))}
      </div>

    </section>
  );
}
