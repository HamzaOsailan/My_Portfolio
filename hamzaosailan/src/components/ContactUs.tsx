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

  const [errors, setErrors] = useState({
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

    setErrors({
      ...errors,
      [e.target.name]: ""
    });
  };

  const validateForm = () => {
    let valid = true;

    const newErrors = {
      name: "",
      email: "",
      message: ""
    };

    // Name Validation
    if (!form.name.trim()) {
      newErrors.name = "Name is required";
      valid = false;
    }

    // Email Validation
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(form.email)
    ) {
      newErrors.email = "Invalid email address";
      valid = false;
    }

    // Message Validation
    if (!form.message.trim()) {
      newErrors.message = "Message is required";
      valid = false;
    }

    setErrors(newErrors);

    return valid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    emailjs.send(
      "service_67h0puv",
      "template_c5n9wcd",
      {
        from_name: form.name,
        from_email: form.email,
        message: form.message
      },
      "-fWDP_lrponWQzfxx"
    )
    .then(() => {
      alert("Message sent successfully 🚀");

      setForm({
        name: "",
        email: "",
        message: ""
      });
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
        className="text-3xl font-bold mb-6 text-primary text-center"
      >
        Contact Me
      </motion.h2>

      <motion.form
        onSubmit={handleSubmit}
        variants={container}
        className="max-w-lg mx-auto flex flex-col gap-4"
      >

        {/* Name */}
        <motion.div variants={item}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-3 rounded bg-card border border-white/20 focus:outline-none focus:border-primary"
          />

          {errors.name && (
            <p className="text-red-400 text-sm mt-1">
              {errors.name}
            </p>
          )}
        </motion.div>

        {/* Email */}
        <motion.div variants={item}>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-3 rounded bg-card border border-white/20 focus:outline-none focus:border-primary"
          />

          {errors.email && (
            <p className="text-red-400 text-sm mt-1">
              {errors.email}
            </p>
          )}
        </motion.div>

        {/* Message */}
        <motion.div variants={item}>
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            className="w-full p-3 rounded bg-card border border-white/20 focus:outline-none focus:border-primary resize-none h-32"
          />

          {errors.message && (
            <p className="text-red-400 text-sm mt-1">
              {errors.message}
            </p>
          )}
        </motion.div>

        {/* Button */}
        <motion.button
          variants={item}
          type="submit"
          className="mt-2 px-6 py-3 bg-teal-400 rounded-full text-white font-semibold shadow-lg hover:scale-105 transition duration-300"
        >
          Send Message
        </motion.button>

      </motion.form>

    </motion.section>
  );
};

export default ContactUs;