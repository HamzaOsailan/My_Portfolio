import { useState } from "react";
import { motion } from "framer-motion";
import { container, item } from "../utils/animations";
import emailjs from "@emailjs/browser";

const ContactUs = () => {

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs.send(
      "service_67h0puv",      // ضع Service ID
      "template_c5n9wcd",     // ضع Template ID
      {
        from_name: form.name,
        from_email: form.email,
        message: form.message
      },
      "-fWDP_lrponWQzfxx"       // ضع Public Key
    )
    .then(() => {
      alert("Message sent successfully 🚀");
      setForm({ name: "", email: "", message: "" });
    })
    .catch(() => {
      alert("Failed to send message ❌");
    });
  };

  return (
    <motion.section
      id="contact"
      className="py-16 px-4 bg-back text-white"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >

      <motion.h2
        variants={item}
        className="text-3xl font-bold mb-6 text-primary"
      >
        Contact Me
      </motion.h2>

      <motion.form
        onSubmit={handleSubmit}
        variants={container}
        className="max-w-lg mx-auto flex flex-col gap-4"
      >

        <motion.input
          variants={item}
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          className="p-3 rounded bg-card border border-white/20 focus:outline-none focus:border-primary"
        />

        <motion.input
          variants={item}
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          className="p-3 rounded bg-card border border-white/20 focus:outline-none focus:border-primary"
        />

        <motion.textarea
          variants={item}
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          className="p-3 rounded bg-card border border-white/20 focus:outline-none focus:border-primary resize-none h-32"
        />

        <motion.button
          variants={item}
          type="submit"
          className="mb-8 px-4 py-2 bg-teal-400 rounded-full text-white shadow-lg"
        >
          Send Message
        </motion.button>

      </motion.form>

    </motion.section>
  );
};

export default ContactUs;