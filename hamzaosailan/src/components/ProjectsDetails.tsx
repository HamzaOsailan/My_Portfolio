import { useParams, useNavigate } from "react-router-dom";
import { portfolioItems } from "../data/data";
import { motion } from "framer-motion";

const ProjectsDetails = () => {
  const { title } = useParams<{ title: string }>();
  const navigate = useNavigate();

  const project = portfolioItems.find(
    (p) => p.title === decodeURIComponent(title!)
  );

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
        <h1 className="text-4xl font-bold mb-6">Project not found</h1>

        <button
          onClick={() => navigate(-1)}
          className="px-6 py-3 bg-teal-400 text-black rounded-xl font-semibold hover:scale-105 transition"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <section className="bg-black text-white py-14 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="mb-8 px-5 py-2 bg-teal-400 rounded-full text-white shadow-lg hover:scale-105 transition"
        >
          ← Back
        </button>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-teal-400 mb-3">
          {project.title}
        </h1>

        {/* Category */}
        <p className="text-gray-400 text-lg mb-6">
          {project.category}
        </p>

        {/* Description */}
        <p className="text-gray-300 leading-relaxed max-w-3xl mb-10">
          {project.description}
        </p>

    

        {/* Images */}
        <motion.div
          className={`grid gap-6 ${
            project.galleryImages.length === 1
              ? "grid-cols-1"
              : "md:grid-cols-2"
          }`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {project.galleryImages.map((img, idx) => (
            <motion.div
              key={idx}
              className="overflow-hidden rounded-2xl border border-white/10 shadow-lg"
              variants={{
                hidden: {
                  opacity: 0,
                  y: 40,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                  },
                },
              }}
            >
              <img
                src={img}
                alt={`${project.title}-${idx}`}
                className={`w-full object-cover hover:scale-105 transition duration-500 ${
                  project.galleryImages.length === 1
                    ? "h-[500px]"
                    : "h-72"
                }`}
              />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default ProjectsDetails;