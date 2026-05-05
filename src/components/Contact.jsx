import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "@emailjs/browser";

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
      "service_v5j9ncd",
      "template_ayhlq4r",
      form,
      "IhqiT5wQ5zOT1Hz9O"
    )
    .then(() => {
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    })
    .catch(() => {
      setStatus("error");
    });
  };

  return (
    <section id="contact" className="contact-section">

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        Contact Me
      </motion.h2>

      <motion.p
        className="contact-desc"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        I'm open to software engineering roles, backend development opportunities,
        and AI-focused projects. Let's build something impactful together.
      </motion.p>

      <motion.div
        className="contact-box sketch-box"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >

        {/* CONTACT INFO */}
        <p><strong>Email:</strong> vaibhavprakash180@gmail.com</p>
        <p><strong>Phone:</strong> +91-7903685272</p>

        <div className="contact-links">
          <a href="https://www.linkedin.com/in/22-vaibhav" target="_blank">LinkedIn</a>
          <a href="https://github.com/22-vaibhav" target="_blank">GitHub</a>
          <a href="https://leetcode.com/u/vaibhav_p777" target="_blank">LeetCode</a>
        </div>

        {/* FORM */}
        <form onSubmit={sendEmail} className="contact-form">

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
          />

          <button type="submit">
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

        </form>

        {/* STATUS MESSAGE */}
        {status === "success" && <p>✅ Message sent successfully!</p>}
        {status === "error" && <p>❌ Failed to send message.</p>}

      </motion.div>

    </section>
  );
}