// import profile from "../assets/profile-sketch.png";
import profile from "../assets/cartoon-profile-sketch.jpeg";
import { motion } from "framer-motion";

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
          Hi, I'm <span className="highlight">Vaibhav Prakash</span>
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
          Backend | AI/ML Engineer
        </motion.h3>

        {/* DESCRIPTION */}
        <motion.p
          className="desc"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          I build scalable backend systems and AI-powered applications,
          including Generative AI and Machine Learning solutions.
        </motion.p>

        {/* CTA */}
        <motion.div
          className="buttons"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <motion.button
            whileHover={{ scale: 1.05, rotate: 1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              window.open("https://github.com/22-vaibhav?tab=repositories", "_blank")
            }}
          >
            View Projects
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05, rotate: -1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              window.open("https://drive.google.com/file/d/17SGKCjy3nGy_1btp9NSMXiS3p1nUV5q2/preview", "_blank")
            }
          >
            Resume
          </motion.button>
        </motion.div>
      </div>

      {/* RIGHT */}
      <motion.div
        className="hero-img sketch-box"
        initial={{ opacity: 0, x: 50, rotate: -8 }}
        animate={{ opacity: 1, x: 0, rotate: 1 }}
        transition={{ delay: 0.5 }}
      >
        <img src={profile} alt="Vaibhav Prakash" />
      </motion.div>

    </motion.section>
  );
}