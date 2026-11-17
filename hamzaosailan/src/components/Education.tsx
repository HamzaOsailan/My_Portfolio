
import { education } from "../data/data";
import { motion } from "framer-motion";
import { container, item } from "../utils/animations";

const Education = () => {
  return (
    <motion.section
      id="education"
      className="py-16 px-4"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >

      <motion.h2
        variants={item}
        className="text-3xl font-bold mb-8"
      >
        Education
      </motion.h2>

      <motion.div
        variants={container}
        className="space-y-4"
      >

        {education.map((edu, index) => (
          <motion.div
            variants={item}
            key={index}
            className="backdrop-blur-xl bg-black/20 border border-white/30 shadow-lg p-4 rounded-xl"
          >

            <h3 className="text-xl font-semibold">
              {edu.degree}
            </h3>

            <p className="text-gray-400">
              {edu.school}
            </p>

            <p className="text-gray-500">
              {edu.period}
            </p>

          </motion.div>
        ))}

      </motion.div>

    </motion.section>
  );
};

export default Education;