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
      <motion.div
        className="certs-heading"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <h2 className="certs-title">{certificationsTitle}</h2>
        <svg className="certs-squiggle" viewBox="0 0 160 14" aria-hidden="true">
          <path d="M3 9 C 13 1, 23 1, 33 9 S 53 17, 63 9 S 83 1, 93 9 S 113 17, 123 9 S 143 1, 157 8" />
        </svg>
      </motion.div>

      {/* CATEGORIES */}
      <div className="certs-categories">
        {certificationCategories.map((cat, catIndex) => {
          const isExpanded = expanded[cat.category];
          const visible = isExpanded ? cat.certs : cat.certs.slice(0, SHOW_LIMIT);
          const hiddenCount = cat.certs.length - SHOW_LIMIT;
          const isWide =
            catIndex === certificationCategories.length - 1 &&
            certificationCategories.length % 2 === 1;

          return (
            <motion.div
              key={cat.category}
              className={`cert-category${isWide ? " cert-category-wide" : ""}`}
              style={{ "--cat-bg": cat.color, "--cat-shade": cat.shade }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
            >

              {isWide && <div className="cert-tape" aria-hidden="true" />}

              {/* CATEGORY LABEL */}
              <h3 className="cert-label">{cat.category}</h3>

              {/* CERT BADGES */}
              <div className="certs-container">
                {visible.map((cert, index) => (
                  <motion.a
                    key={cert.name}
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cert-badge"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <div className="cert-stub">
                      <svg viewBox="0 0 46 46" aria-hidden="true">
                        <path d="M23 3 L27 18 L43 23 L27 28 L23 43 L19 28 L3 23 L19 18 Z" />
                      </svg>
                    </div>
                    <div className="cert-info">
                      <div className="cert-name">{cert.name}</div>
                      <div className="cert-meta">{cert.issuer} · {cert.year}</div>
                    </div>
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
