import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

type ContactForm = {
  name: string;
  email: string;
  message: string;
};

type ContactErrors = Record<keyof ContactForm, string>;

const emptyForm: ContactForm = { name: "", email: "", message: "" };
const emptyErrors: ContactErrors = { name: "", email: "", message: "" };

const ContactUs = () => {
  const [form, setForm] = useState<ContactForm>(emptyForm);
  const [errors, setErrors] = useState<ContactErrors>(emptyErrors);
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: "" }));
    setStatus("");
  };

  const validate = () => {
    const nextErrors: ContactErrors = { ...emptyErrors };

    if (!form.name.trim()) nextErrors.name = "Please enter your name.";
    if (!form.email.trim()) nextErrors.email = "Please enter your email.";
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(form.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (!form.message.trim()) nextErrors.message = "Please add a message.";

    setErrors(nextErrors);
    return !Object.values(nextErrors).some(Boolean);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validate()) return;

    setIsSending(true);
    setStatus("");

    try {
      await emailjs.send(
        "service_67h0puv",
        "template_c5n9wcd",
        {
          from_name: form.name.trim(),
          from_email: form.email.trim(),
          message: form.message.trim(),
        },
        "-fWDP_lrponWQzfxx",
      );
      setForm({ ...emptyForm });
      setErrors({ ...emptyErrors });
      setStatus("Thanks for reaching out. Your message has been sent.");
    } catch {
      setStatus("Your message could not be sent. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <motion.section
      id="contact"
      className="contact-section"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.12 }}
      transition={{ duration: 0.65 }}
    >
      <div className="contact-inner">
        <div className="contact-heading">
          <span className="wf-section-index">07 / CONTACT</span>
          <h2>Have a project<br /><em>in mind?</em></h2>
          <p>Tell me a little about what you are building. I will get back to you as soon as I can.</p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="contact-field">
            <label htmlFor="contact-name">Your name</label>
            <input
              id="contact-name"
              type="text"
              name="name"
              autoComplete="name"
              value={form.name}
              onChange={handleChange}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? "contact-name-error" : undefined}
            />
            {errors.name && <span id="contact-name-error" className="contact-error">{errors.name}</span>}
          </div>

          <div className="contact-field">
            <label htmlFor="contact-email">Email address</label>
            <input
              id="contact-email"
              type="email"
              name="email"
              autoComplete="email"
              value={form.email}
              onChange={handleChange}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "contact-email-error" : undefined}
            />
            {errors.email && <span id="contact-email-error" className="contact-error">{errors.email}</span>}
          </div>

          <div className="contact-field">
            <label htmlFor="contact-message">Message</label>
            <textarea
              id="contact-message"
              name="message"
              rows={4}
              value={form.message}
              onChange={handleChange}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? "contact-message-error" : undefined}
            />
            {errors.message && <span id="contact-message-error" className="contact-error">{errors.message}</span>}
          </div>

          <div className="contact-submit-row">
            <button type="submit" disabled={isSending}>
              {isSending ? "SENDING..." : "SEND MESSAGE"}
              <span aria-hidden="true">&rarr;</span>
            </button>
            <p className="contact-status" role="status" aria-live="polite">{status}</p>
          </div>
        </form>
      </div>
    </motion.section>
  );
};

export default ContactUs;
