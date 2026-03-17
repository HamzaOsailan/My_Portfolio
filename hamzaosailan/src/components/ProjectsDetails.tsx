
import { useParams, useNavigate } from "react-router-dom";
import { portfolioItems } from "../data/data";
import { motion } from "framer-motion";

const ProjectsDetails = () => {
  const { title } = useParams<{ title: string }>();
  const navigate = useNavigate();

  const project = portfolioItems.find(
    (p) => p.title === decodeURIComponent(title!)
  );

  if (!project)
    return (
      <div className="text-center mt-20 text-white">
        Project not found
        <button
          onClick={() => navigate(-1)}
          className="mt-4 px-4 py-2 bg-blue-600 rounded hover:bg-blue-700"
        >
          Go Back
        </button>
      </div>
    );

  return (
    <div className="py-16 px-4 max-w-6xl mx-auto">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-8 px-4 py-2 bg-teal-400 rounded-full text-white shadow-lg"
      >
        ← Back
      </button>

      {/* Title & Category */}
      <h1 className="text-4xl md:text-5xl font-bold mb-2 text-teal-400">
        {project.title}
      </h1>
      <p className="text-white mb-6">{project.category}</p>

      {/* Description */}
      <p className="text-gray-300 mb-12 leading-relaxed">{project.description}</p>

      {/* Images Grid */}
      <motion.div
        className="grid md:grid-cols-2 gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        {project.galleryImages.map((img, idx) => (
          <motion.div
            key={idx}
            className="overflow-hidden rounded-xl shadow-lg"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
          >
            <img
              src={img}
              alt={`${project.title}-${idx}`}
              className="w-full h-64 md:h-80 object-cover hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ProjectsDetails;