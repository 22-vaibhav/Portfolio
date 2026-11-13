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
          {heroData.greeting}{" "}
          <span className="hero-name">
            <span>{heroData.name}</span>
            <svg className="hero-scribble" viewBox="0 0 300 80" preserveAspectRatio="none" aria-hidden="true">
              <path d="M40 14 C 120 -2, 250 4, 285 30 C 305 52, 230 76, 140 74 C 60 72, 6 60, 12 36 C 18 14, 90 4, 170 6" />
            </svg>
          </span>
        </motion.h1>

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
            <motion.a
              key={btn.label}
              className="hero-btn"
              href={btn.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {btn.label}
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* RIGHT */}
      <motion.div
        className="hero-photo"
        initial={{ opacity: 0, x: 50, rotate: -8 }}
        animate={{ opacity: 1, x: 0, rotate: 2 }}
        transition={{ delay: 0.5 }}
      >
        <div className="hero-tape" aria-hidden="true" />
        <div className="hero-img sketch-box">
          <img src={heroData.profileImage} alt={heroData.name} />
          <div className="hero-caption">{heroData.caption}</div>
        </div>
        <svg className="hero-star hero-star-top" viewBox="0 0 46 46" aria-hidden="true">
          <path d="M23 3 L27 18 L43 23 L27 28 L23 43 L19 28 L3 23 L19 18 Z" />
        </svg>
        <svg className="hero-star hero-star-bottom" viewBox="0 0 46 46" aria-hidden="true">
          <path d="M23 3 L27 18 L43 23 L27 28 L23 43 L19 28 L3 23 L19 18 Z" />
        </svg>
      </motion.div>

    </motion.section>
  );
}