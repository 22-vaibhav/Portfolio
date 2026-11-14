import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const STORAGE_KEY = "theme";
const OPTIONS = [
  { value: "light", label: "Light" },
  { value: "dark", label: "Dark" },
  { value: "system", label: "System" },
];

function readStoredTheme() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return OPTIONS.some((o) => o.value === stored) ? stored : "system";
  } catch {
    return "system";
  }
}

const DARK_QUERY = "(prefers-color-scheme: dark)";

function BulbIcon({ lit }) {
  return (
    <svg className={`bulb-icon ${lit ? "bulb-lit" : ""}`} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3 C 7.5 3, 5 6.2, 5 9.6 C 5 12.2, 6.4 13.8, 7.8 15.2 C 8.6 16, 9 16.8, 9 18 H 15 C 15 16.8, 15.4 16, 16.2 15.2 C 17.6 13.8, 19 12.2, 19 9.6 C 19 6.2, 16.5 3, 12 3 Z" />
      <path className="bulb-base" d="M9.5 20.5 H14.5 M10.5 22.5 H13.5" />
      {lit && <path className="bulb-rays" d="M12 -0.2 V0.8 M2.6 4.6 L3.4 5.2 M21.4 4.6 L20.6 5.2 M1 10 H2 M22 10 H23" />}
    </svg>
  );
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState(readStoredTheme);
  const [systemDark, setSystemDark] = useState(() => window.matchMedia(DARK_QUERY).matches);
  const [open, setOpen] = useState(false);
  const wrapRef = useRef(null);

  const resolved = theme === "system" ? (systemDark ? "dark" : "light") : theme;

  // Track OS preference so "system" follows live changes
  useEffect(() => {
    const mql = window.matchMedia(DARK_QUERY);
    const onChange = (e) => setSystemDark(e.matches);
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", resolved);
  }, [resolved]);

  // Close on outside click / Escape
  useEffect(() => {
    if (!open) return undefined;
    const onPointerDown = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false);
    };
    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const choose = (value) => {
    setTheme(value);
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {
      /* storage unavailable: theme still applies for this session */
    }
    setOpen(false);
  };

  return (
    <div className="theme-toggle" ref={wrapRef}>
      <motion.button
        type="button"
        className="theme-btn"
        onClick={() => setOpen((prev) => !prev)}
        aria-label="Change theme"
        aria-haspopup="menu"
        aria-expanded={open}
        whileHover={{ rotate: -6 }}
        whileTap={{ scale: 0.92 }}
      >
        <BulbIcon lit={resolved === "light"} />
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="theme-menu"
            role="menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
          >
            {OPTIONS.map((opt) => (
              <button
                key={opt.value}
                type="button"
                role="menuitemradio"
                aria-checked={theme === opt.value}
                className={`theme-option ${theme === opt.value ? "active" : ""}`}
                onClick={() => choose(opt.value)}
              >
                {opt.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
