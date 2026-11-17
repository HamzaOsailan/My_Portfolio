import { certifications } from "../data/data";
import { motion } from "framer-motion";
import { FiAward, FiCalendar, FiArrowUpRight } from "react-icons/fi";
import { container, item } from "../utils/animations";

const Certifications = () => {
  return (
    <motion.section
      id=""
      className="wf-section wf-certifications-section"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.1 }}
    >
      <motion.div variants={item} className="wf-section-heading">
        <span className="wf-section-index">06 / CONTINUOUS LEARNING</span>
        <h2>
          CERTIFICATIONS<span>.</span>
        </h2>
        <p>Knowledge, practice, and continuous improvement.</p>
      </motion.div>

      <div className="wf-certifications-grid">
        {certifications.map((cert, index) => (
          <motion.article
            variants={item}
            key={`${cert.title}-${index}`}
            className="wf-cert-card"
          >
            <div className="wf-cert-top">
              <span className="wf-cert-number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <FiAward className="wf-cert-icon" />
            </div>

            <div className="wf-cert-content">
              <h3>{cert.title}</h3>
              <p>{cert.organization}</p>
            </div>

            <div className="wf-cert-bottom">
              <span>
                <FiCalendar />
                {cert.period}
              </span>
              <FiArrowUpRight className="wf-cert-arrow" />
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
};

export default Certifications;