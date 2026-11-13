import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { navBrand, navItems } from "../constants";

function ActiveScribble() {
  return (
    <svg className="nav-scribble" viewBox="0 0 100 40" preserveAspectRatio="none" aria-hidden="true">
      <path d="M10 22 C 6 8, 30 3, 55 4 C 82 5, 98 14, 92 26 C 86 37, 50 38, 24 35 C 8 33, 3 24, 8 14" />
    </svg>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const observerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  // Track active section via IntersectionObserver
  useEffect(() => {
    const sections = navItems.map((item) => item.toLowerCase());
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observerRef.current.observe(el);
    });
    return () => observerRef.current?.disconnect();
  }, []);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <>
      <motion.nav
        className={`navbar sketch-box ${scrolled ? "glass" : ""}`}
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="logo-wrap">
          <h2 className="logo">{navBrand}</h2>
          <svg className="logo-underline" viewBox="0 0 160 8" preserveAspectRatio="none" aria-hidden="true">
            <path d="M2 5 C 20 1, 40 7, 62 4 S 108 2, 130 5 S 150 4, 158 3" />
          </svg>
        </div>

        {/* Desktop Links */}
        <div className="nav-links desktop-links">
          {navItems.map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {activeSection === item.toLowerCase() && <ActiveScribble />}
              <span>{item}</span>
            </motion.a>
          ))}
        </div>

        {/* Hamburger Button (mobile only) */}
        <button
          className="hamburger"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <motion.span
            className="ham-line"
            animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="ham-line"
            animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.2 }}
          />
          <motion.span
            className="ham-line"
            animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          />
        </button>
      </motion.nav>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="mobile-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              className="mobile-menu sketch-box"
              initial={{ opacity: 0, y: -10, rotate: 0 }}
              animate={{ opacity: 1, y: 0, rotate: -0.5 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {navItems.map((item, i) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="mobile-nav-link"
                  onClick={handleNavClick}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.25 }}
                  whileHover={{ x: 6 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <span className="mobile-nav-number">0{i + 1}.</span>
                  <span className="mobile-nav-label">
                    {activeSection === item.toLowerCase() && <ActiveScribble />}
                    <span>{item}</span>
                  </span>
                </motion.a>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}