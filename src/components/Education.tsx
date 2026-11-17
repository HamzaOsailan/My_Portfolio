import { education } from "../data/data";
import { motion } from "framer-motion";
import { FiBookOpen, FiMapPin, FiCalendar } from "react-icons/fi";
import { container, item } from "../utils/animations";

const Education = () => {
  return (
    <motion.section
      id=""
      className="wf-section wf-education-section"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.15 }}
    >
      <motion.div variants={item} className="wf-section-heading">
        <span className="wf-section-index">05 / ACADEMIC BACKGROUND</span>
        <h2>
          EDUCATION<span>.</span>
        </h2>
        <p>The foundation behind my technical journey.</p>
      </motion.div>

      <div className="wf-education-list">
        {education.map((edu, index) => (
          <motion.article
            variants={item}
            key={`${edu.school}-${index}`}
            className="wf-education-card"
          >
            <div className="wf-education-icon">
              <FiBookOpen />
            </div>

            <div className="wf-education-content">
              <span className="wf-card-label">ACADEMIC QUALIFICATION</span>
              <h3>{edu.degree}</h3>

              <div className="wf-education-meta">
                <span>
                  <FiMapPin />
                  {edu.school}
                </span>
                <span>
                  <FiCalendar />
                  {edu.period}
                </span>
              </div>
            </div>

            <span className="wf-education-number">
              {String(index + 1).padStart(2, "0")}
            </span>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
};

export default Education;