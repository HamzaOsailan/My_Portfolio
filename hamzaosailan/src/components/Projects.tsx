import { portfolioItems } from "../data/data";
import { motion } from "framer-motion";
import { container, item } from "../utils/animations";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const navigate = useNavigate();

  const handleDetails = (project: any) => {
    navigate(`/projects/${encodeURIComponent(project.title)}`);
  };

  return (
    <motion.section
      id="portfolio"
      className="py-16 px-4"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <motion.h2
        variants={item}
        className="text-3xl font-bold mb-8 text-white"
      >
        Projects
      </motion.h2>

      <motion.div
        variants={container}
        className="grid md:grid-cols-2 gap-6"
      >
        {portfolioItems.map((project) => (
          <motion.div
            key={project.title}
            variants={item}
            className="backdrop-blur-xl bg-black/20 border border-white/20 shadow-lg rounded-2xl overflow-hidden hover:-translate-y-2 hover:border-white/40 transition-all duration-300"
          >
            {/* Image */}
            <img
              src={project.cardImage}
              alt={project.title}
              className="w-full h-56 object-cover"
            />

            {/* Content */}
            <div className="p-5">
              
              {/* Title */}
              <h3 className="text-2xl font-bold text-white">
                {project.title}
              </h3>

              {/* Category */}
              <p className="text-gray-400 mt-1">
                {project.category}
              </p>

              {/* Description */}
              <p className="mt-3 text-gray-300 leading-relaxed line-clamp-2">
                {project.description}
              </p>

              {/* Buttons */}
              <div className="mt-6 flex gap-3">
                
                {/* View Details */}
                <button
                  onClick={() => handleDetails(project)}
                  className="bg-teal-400 text-black px-4 py-2 rounded-lg font-semibold hover:scale-105 transition"
                >
                  View Details
                </button>

                {/* Live Demo */}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <button className="border border-teal-400 text-teal-400 px-4 py-2 rounded-lg hover:bg-teal-400 hover:text-black transition">
                      Live Demo
                    </button>
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Projects;