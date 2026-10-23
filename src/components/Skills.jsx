import { motion } from "framer-motion";
import { skillsTitle, skillCategories } from "../constants";

export default function Skills() {
  return (
    <section id="skills" className="skills-section">

      {/* TITLE */}
      <motion.h2
        className="skills-title"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {skillsTitle}
      </motion.h2>

      {/* CATEGORIES */}
      <div className="skills-categories">
        {skillCategories.map((cat, catIndex) => (
          <motion.div
            key={cat.category}
            className="skill-category"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: catIndex * 0.1 }}
          >

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
              {cat.skills.map((skill, index) => (
                <a
                  key={skill.name}
                  href={skill.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <motion.div
                    className="skill-card"
                    style={{ background: cat.color }}
                    variants={{
                      hidden: { opacity: 0, y: 30 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    whileHover={{
                      scale: 1.12,
                      rotate: index % 2 === 0 ? 2 : -2,
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    {skill.icon ? (
                      <div className="icon-wrapper">
                        <img src={skill.icon} alt={skill.name} />
                      </div>
                    ) : (
                      <div className="icon-wrapper icon-text-only">
                        <span>{skill.name.charAt(0)}</span>
                      </div>
                    )}
                    <p>{skill.name}</p>
                  </motion.div>
                </a>
              ))}
            </motion.div>

          </motion.div>
        ))}
      </div>

    </section>
  );
}
