import { useParams, useNavigate } from "react-router-dom";
import { portfolioItems } from "../data/data";
import { motion } from "framer-motion";
import {
  FiArrowLeft,
  FiImage,
  FiLayers,
  FiExternalLink,
} from "react-icons/fi";


const ProjectsDetails = () => {
  const { title } = useParams<{ title: string }>();
  const navigate = useNavigate();

  const decodedTitle = title ? decodeURIComponent(title) : "";

  const project = portfolioItems.find(
    (item) => item.title === decodedTitle
  );

  if (!project) {
    return (
      <main className="wf-project-not-found">
        <span className="wf-project-eyebrow">404 / PROJECT NOT FOUND</span>
        <h1>PROJECT NOT FOUND<span>.</span></h1>
        <p>The project you are looking for could not be found.</p>
        <button onClick={() => navigate("/#portfolio")}>
          <FiArrowLeft />
          GO BACK
        </button>
      </main>
    );
  }

  return (
    <main className="wf-project-details">
      <div className="wf-project-details-inner">

        <motion.button
          type="button"
          onClick={() => navigate("/#portfolio")}
          className="wf-project-back"
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <FiArrowLeft />
          <span>BACK TO PROJECTS</span>
        </motion.button>

        <motion.header
          className="wf-project-header wf-project-showcase"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
        >
          <div className="wf-project-intro">
            <span className="wf-project-eyebrow">
              PROJECT FILE / {String(portfolioItems.indexOf(project) + 1).padStart(2, "0")}
            </span>

            <h1>{project.title}<span>.</span></h1>

            <div className="wf-project-header-line">
              <span className="wf-project-category">
                <FiLayers />
                {project.category}
              </span>

              <span className="wf-project-image-count">
                <FiImage />
                {String(project.galleryImages.length).padStart(2, "0")} VIEWS
              </span>
            </div>

            <p className="wf-project-description">
              {project.description}
            </p>
          </div>

          <div className="wf-project-preview" role="img" aria-label={`${project.title} screenshot preview`}>
            {project.galleryImages.slice(0, 3).map((img, index) => (
              <div className={`wf-project-preview-card wf-project-preview-card-${index + 1}`} key={`${project.title}-preview-${index}`}>
                <img src={img} alt="" />
              </div>
            ))}
            <span className="wf-project-preview-label">PROJECT PREVIEW <i /></span>
            <span className="wf-project-preview-index">{String(portfolioItems.indexOf(project) + 1).padStart(2, "0")} / {String(portfolioItems.length).padStart(2, "0")}</span>
          </div>
        </motion.header>

        <div className="wf-project-gallery-heading">
          <div>
            <span className="wf-project-eyebrow">SCREEN / INTERFACE COLLECTION</span>
            <h2>Visual archive<span>.</span></h2>
          </div>
          <span className="wf-project-gallery-total">
            {String(project.galleryImages.length).padStart(2, "0")} / VISUALS
          </span>
        </div>

        <motion.div
          className={`wf-project-gallery ${
            project.galleryImages.length === 1
              ? "wf-project-gallery-single"
              : ""
          }`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.13 },
            },
          }}
        >
          {project.galleryImages.map((img, index) => (
            <motion.figure
              key={`${project.title}-image-${index}`}
              className="wf-project-gallery-item"
              variants={{
                hidden: { opacity: 0, y: 35 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: "easeOut" },
                },
              }}
            >
              <div className="wf-project-image-frame">
                <img
                  src={img}
                  alt={`${project.title} - screenshot ${index + 1}`}
                  loading={index === 0 ? "eager" : "lazy"}
                />
              </div>
              <figcaption>
                <span>PROJECT VIEW</span>
                <span>{String(index + 1).padStart(2, "0")}</span>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>

        {(project.demo || project.link || ("certificate" in project && project.certificate)) && (
          <div className="gallery-card-actions">
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
              >
                LIVE WEBSITE <FiExternalLink />
              </a>
            )}

            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
              >
                SOURCE CODE <FiExternalLink />
              </a>
            )}

            {"certificate" in project && project.certificate && (
              <a
                href={project.certificate}
                target="_blank"
                rel="noreferrer"
              >
                VIEW CERTIFICATE <FiExternalLink />
              </a>
            )}
          </div>
        )}
        <div className="wf-project-bottom">
          <span>END OF PROJECT SHOWCASE</span>
          <button type="button" onClick={() => navigate("/#portfolio")}>
            <FiArrowLeft />
            BACK TO ALL PROJECTS
          </button>
        </div>

      </div>
    </main>
  );
};

export default ProjectsDetails;
