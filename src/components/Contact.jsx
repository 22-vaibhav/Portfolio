import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { contactData } from "../constants";

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

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        {contactData.title}
      </motion.h2>

      <motion.p
        className="contact-desc"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {contactData.description}
      </motion.p>

      <motion.div
        className="contact-box sketch-box"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >

        {/* CONTACT INFO */}
        <p><strong>Email:</strong> {contactData.email}</p>
        <p><strong>Phone:</strong> {contactData.phone}</p>

        <div className="contact-links">
          {contactData.socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {social.name}
            </a>
          ))}
        </div>

        {/* FORM */}
        <form onSubmit={sendEmail} className="contact-form">

          <input
            type="text"
            name="name"
            placeholder={contactData.form.placeholders.name}
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder={contactData.form.placeholders.email}
            value={form.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder={contactData.form.placeholders.message}
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

        {/* STATUS MESSAGE */}
        {status === "success" && <p>{contactData.form.statusMessages.success}</p>}
        {status === "error" && <p>{contactData.form.statusMessages.error}</p>}

      </motion.div>

    </section>
  );
}