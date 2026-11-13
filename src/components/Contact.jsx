import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { contactData } from "../constants";

const brandPaths = {
  LinkedIn:
    "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
  GitHub:
    "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12",
  LeetCode:
    "M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z",
};

function BrandIcon({ name }) {
  const d = brandPaths[name];
  if (!d) return null;
  return (
    <svg className="contact-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d={d} />
    </svg>
  );
}

function StrokeIcon({ children }) {
  return (
    <svg
      className="contact-icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setStatus(""), 4000);
    })
    .catch(() => {
      setStatus("error");
      setTimeout(() => setStatus(""), 4000);
    });
  };

  return (
    <section id="contact" className="contact-section">

      <motion.div
        className="contact-heading"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        {/* <div className="contact-label">{contactData.label}</div> */}
        <h2>{contactData.title}</h2>
        <svg className="contact-squiggle" viewBox="0 0 160 14" aria-hidden="true">
          <path d="M3 9 C 13 1, 23 1, 33 9 S 53 17, 63 9 S 83 1, 93 9 S 113 17, 123 9 S 143 1, 157 8" />
        </svg>
        <p className="contact-desc">{contactData.description}</p>
      </motion.div>

      {/* POSTCARD: info on the left, form on the right */}
      <motion.div
        className="contact-postcard"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className="contact-card">

          <div className="contact-stamp" aria-hidden="true">
            <div className="contact-stamp-inner">
              <svg viewBox="0 0 46 46">
                <path d="M23 3 L27 18 L43 23 L27 28 L23 43 L19 28 L3 23 L19 18 Z" />
              </svg>
            </div>
          </div>

          {/* LEFT: CONTACT INFO, LINKS */}
          <div className="contact-info">
            <h3>{contactData.sayHello}</h3>

            <div className="contact-details">
              <a href={`mailto:${contactData.email}`} className="contact-detail">
                <StrokeIcon>
                  <rect x="2.5" y="5" width="21" height="16" rx="2.5" />
                  <path d="M3 7 L13 15 L23 7" />
                </StrokeIcon>
                <span><strong>{contactData.emailLabel}</strong> {contactData.email}</span>
              </a>
              <a href={`tel:${contactData.phone}`} className="contact-detail">
                <StrokeIcon>
                  <path d="M6 3 H10 L12 8 L9.5 10 C 11 13, 13 15, 16 16.5 L18 14 L23 16 V20 C23 21.5, 21.5 23, 20 23 C 11 22.5, 3.5 15, 3 6 C 3 4.5, 4.5 3, 6 3 Z" />
                </StrokeIcon>
                <span><strong>{contactData.phoneLabel}</strong> {contactData.phone}</span>
              </a>
            </div>

            <div className="contact-links">
              {contactData.socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-social"
                >
                  <BrandIcon name={social.name} />
                  {social.name}
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT: FORM */}
          <div className="contact-box">

            {/* STATUS MESSAGE */}
            {status === "success" && (
              <div className="contact-note">{contactData.form.statusMessages.success}</div>
            )}
            {status === "error" && (
              <div className="contact-note">{contactData.form.statusMessages.error}</div>
            )}

            <form onSubmit={sendEmail} className="contact-form">

              <input
                type="text"
                name="name"
                placeholder={contactData.form.placeholders.name}
                aria-label={contactData.form.placeholders.name}
                value={form.name}
                onChange={handleChange}
                required
              />

              <input
                type="email"
                name="email"
                placeholder={contactData.form.placeholders.email}
                aria-label={contactData.form.placeholders.email}
                value={form.email}
                onChange={handleChange}
                required
              />

              <textarea
                name="message"
                placeholder={contactData.form.placeholders.message}
                aria-label={contactData.form.placeholders.message}
                value={form.message}
                onChange={handleChange}
                required
              />

              <button type="submit" disabled={status === "sending"}>
                {status === "sending"
                  ? contactData.form.buttonText.sending
                  : contactData.form.buttonText.idle}
              </button>

            </form>

          </div>

        </div>
      </motion.div>

      {/* FOOTER */}
      <div className="contact-footer">
        <svg viewBox="0 0 1000 14" preserveAspectRatio="none" aria-hidden="true">
          <path d="M2 8 C 60 2, 120 12, 180 7 S 300 3, 360 8 S 480 12, 540 6 S 660 3, 720 8 S 840 12, 900 6 S 970 4, 998 8" />
        </svg>
        <p>{contactData.footer}</p>
      </div>

    </section>
  );
}