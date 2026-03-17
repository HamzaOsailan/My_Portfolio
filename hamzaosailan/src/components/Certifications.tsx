
import { certifications } from "../data/data";
import { motion } from "framer-motion";
import { container, item } from "../utils/animations";

const Certifications = () => {
  return (
    <motion.section
      id="certifications"
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
        Certifications
      </motion.h2>

      <motion.div
        variants={container}
        className="space-y-4"
      >

        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            variants={item}
            className="backdrop-blur-xl bg-black/20 border border-white/30 shadow-lg p-4 rounded-xl"
          >

            <h3 className="text-xl font-semibold">
              {cert.title}
            </h3>

            <p className="text-gray-400">
              {cert.organization}
            </p>

            <p className="text-gray-500">
              {cert.period}
            </p>

          </motion.div>
        ))}

      </motion.div>

    </motion.section>
  );
};

export default Certifications;