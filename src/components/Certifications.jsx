import { useState } from "react";
import { motion } from "framer-motion";
import { certificationsTitle, certificationCategories } from "../constants";

const SHOW_LIMIT = 3;

export default function Certifications() {
  const [expanded, setExpanded] = useState({});

  function toggleCategory(category) {
    setExpanded((prev) => ({ ...prev, [category]: !prev[category] }));
  }

  return (
    <section id="certifications" className="certs-section">

      {/* TITLE */}
      <motion.h2
        className="certs-title"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {certificationsTitle}
      </motion.h2>

      {/* CATEGORIES */}
      <div className="certs-categories">
        {certificationCategories.map((cat, catIndex) => {
          const isExpanded = expanded[cat.category];
          const visible = isExpanded ? cat.certs : cat.certs.slice(0, SHOW_LIMIT);
          const hiddenCount = cat.certs.length - SHOW_LIMIT;

          return (
            <motion.div
              key={cat.category}
              className="cert-category"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
            >

              {/* CATEGORY LABEL */}
              <h3 className="category-label">{cat.category}</h3>

              {/* CERT BADGES */}
              <div className="certs-container">
                {visible.map((cert, index) => (
                  <motion.a
                    key={cert.name}
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cert-badge"
                    style={{ background: cat.color }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{
                      scale: 1.08,
                      rotate: index % 2 === 0 ? 2 : -2,
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="cert-name">{cert.name}</span>
                    <span className="cert-meta">{cert.issuer} · {cert.year}</span>
                  </motion.a>
                ))}
              </div>

              {/* SHOW MORE / LESS TOGGLE */}
              {hiddenCount > 0 && (
                <button
                  className="cert-toggle-btn"
                  onClick={() => toggleCategory(cat.category)}
                >
                  {isExpanded ? "Show less ↑" : `+ ${hiddenCount} more`}
                </button>
              )}

            </motion.div>
          );
        })}
      </div>

    </section>
  );
}
