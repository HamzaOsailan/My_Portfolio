import { portfolioItems } from "../data/data";
import { motion } from "framer-motion";
import { container, item } from "../utils/animations";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const navigate = useNavigate();

  const handleCardClick = (project: any) => {
    if (project.title === "React Dashboard") {
      window.open("https://react-dashbaord-webpage.netlify.app/", "_blank");
    } else {
      navigate(`/projects/${encodeURIComponent(project.title)}`);
    }
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
      <motion.h2 variants={item} className="text-3xl font-bold mb-8 text-white">
        Projects
      </motion.h2>

      <motion.div variants={container} className="grid md:grid-cols-2 gap-6">
        {portfolioItems.map((project) => (
          <motion.div
            key={project.title}
            variants={item}
            className="backdrop-blur-xl bg-black/20 border border-white/30 shadow-lg p-4 rounded-xl cursor-pointer hover:scale-105 transition-transform"
            onClick={() => handleCardClick(project)}
          >
            <img
              src={project.cardImage} // بدل project.img
              alt={project.title}
              className="rounded mb-4 w-full h-48 object-cover"
            />

            <h3 className="text-xl font-semibold text-white">{project.title}</h3>
            <p className="text-gray-400">{project.category}</p>
            <p className="mt-2 text-white">{project.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Projects;