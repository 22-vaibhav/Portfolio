import { motion } from "framer-motion";
import { heroData } from "../constants";

export default function Hero() {
  return (
    <motion.section
      id="home"
      className="hero"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >

      {/* LEFT */}
      <div className="hero-text">

        <motion.h1
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
        >
          {heroData.greeting} <span className="highlight">{heroData.name}</span>
        </motion.h1>

        {/* DRAW LINE */}
        <motion.svg width="220" height="20">
          <motion.line
            x1="0"
            y1="10"
            x2="220"
            y2="10"
            stroke="black"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1 }}
          />
        </motion.svg>

        {/* ROLE */}
        <motion.h3
          className="role"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {heroData.role}
        </motion.h3>

        {/* DESCRIPTION */}
        <motion.p
          className="desc"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {heroData.description}
        </motion.p>

        {/* CTA */}
        <motion.div
          className="buttons"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          {heroData.buttons.map((btn) => (
            <a
              key={btn.label}
              href={btn.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                whileHover={{ scale: 1.05, rotate: btn.rotate }}
                whileTap={{ scale: 0.95 }}
              >
                {btn.label}
              </motion.button>
            </a>
          ))}
        </motion.div>
      </div>

      {/* RIGHT */}
      <motion.div
        className="hero-img sketch-box"
        initial={{ opacity: 0, x: 50, rotate: -8 }}
        animate={{ opacity: 1, x: 0, rotate: 1 }}
        transition={{ delay: 0.5 }}
      >
        <img src={heroData.profileImage} alt={heroData.name} />
      </motion.div>

    </motion.section>
  );
}