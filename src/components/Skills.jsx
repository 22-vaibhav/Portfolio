import { motion } from "framer-motion";

import javaIcon from "../assets/icons/java.png";
import springbootIcon from "../assets/icons/springboot.png";
import springIcon from "../assets/icons/Spring.svg";
import restapiIcon from "../assets/icons/restapi.png";
import reactIcon from "../assets/icons/react.png";
import javascriptIcon from "../assets/icons/javascript.png";
import typescriptIcon from "../assets/icons/typescript.png";
import mysqlIcon from "../assets/icons/mysql.png";
import mongoIcon from "../assets/icons/mongo.png";
import githubIcon from "../assets/icons/github.png";
import postmanIcon from "../assets/icons/postman.png";
import pythonIcon from "../assets/icons/python.png";
import langchainIcon from "../assets/icons/langchain.svg";

const skillCategories = [
  {
    category: "Backend",
    color: "var(--blue-light)",
    skills: [
      { name: "Java", icon: javaIcon },
      { name: "Spring Boot", icon: springbootIcon },
      { name: "Spring MVC", icon: springIcon },
      { name: "Spring Security", icon: springIcon },
      { name: "REST APIs", icon: restapiIcon },
    ],
  },
  {
    category: "Frontend",
    color: "var(--green-light)",
    skills: [
      { name: "React", icon: reactIcon },
      { name: "JavaScript", icon: javascriptIcon },
      { name: "TypeScript", icon: typescriptIcon },
    ],
  },
  {
    category: "Databases",
    color: "var(--purple-light)",
    skills: [
      { name: "MySQL", icon: mysqlIcon },
      { name: "MongoDB", icon: mongoIcon },
    ],
  },
  {
    category: "Cloud & Tools",
    color: "var(--orange-light)",
    skills: [
      { name: "Git", icon: githubIcon },
      { name: "GitHub", icon: githubIcon },
      { name: "Docker", icon: null },
      { name: "Postman", icon: postmanIcon },
    ],
  },
  {
    category: "AI",
    color: "var(--yellow)",
    skills: [
      { name: "Python", icon: pythonIcon },
      { name: "LangChain", icon: langchainIcon },
      { name: "LLMs", icon: null },
      { name: "Generative AI", icon: null },
    ],
  },
];

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
        Skills & Technologies
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
                <motion.div
                  key={skill.name}
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
              ))}
            </motion.div>

          </motion.div>
        ))}
      </div>

    </section>
  );
}
