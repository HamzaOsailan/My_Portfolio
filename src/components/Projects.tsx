import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  FiArrowUpRight,
  FiExternalLink,
  FiGithub,
} from "react-icons/fi";
import { portfolioItems } from "../data/data";

const Projects = () => {
  const navigate = useNavigate();
  const projectCount = portfolioItems.length;

  const handleCardPointerMove = (
    event: React.PointerEvent<HTMLElement>
  ) => {
    if (event.pointerType !== "mouse") return;

    const card = event.currentTarget;
    const tiltLayer = card.querySelector(
      ".project-gallery-v2-tilt"
    ) as HTMLElement | null;

    if (!tiltLayer) return;

    const rect = card.getBoundingClientRect();

    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;

    const rotateY = (x - 0.5) * 11;
    const rotateX = (0.5 - y) * 11;

    tiltLayer.style.setProperty("--tilt-x", `${rotateY}deg`);
    tiltLayer.style.setProperty("--tilt-y", `${rotateX}deg`);
    tiltLayer.style.setProperty("--pointer-x", `${x * 100}%`);
    tiltLayer.style.setProperty("--pointer-y", `${y * 100}%`);
  };

  const resetCardTilt = (event: React.PointerEvent<HTMLElement>) => {
    const tiltLayer = event.currentTarget.querySelector(
      ".project-gallery-v2-tilt"
    ) as HTMLElement | null;

    if (!tiltLayer) return;

    tiltLayer.style.setProperty("--tilt-x", "0deg");
    tiltLayer.style.setProperty("--tilt-y", "0deg");
    tiltLayer.style.setProperty("--pointer-x", "50%");
    tiltLayer.style.setProperty("--pointer-y", "50%");
  };

  return (
    <section id="portfolio" className="project-gallery-v2-section">
      <div className="project-gallery-v2-inner">
        <motion.header
          className="project-gallery-v2-heading"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="project-gallery-v2-kicker">
            <span>PORTFOLIO / SELECTED WORK</span>
            <span>DESIGN · ENGINEERING · QUALITY</span>
          </div>

          <div className="project-gallery-v2-title-row">
            <div>
              <span className="project-gallery-v2-overline">
                A COLLECTION OF MY WORK
              </span>
              <h2>
                Projects<span>.</span>
              </h2>
            </div>

            <p>
              A selection of digital products, engineering solutions, and
              experiments built with curiosity, purpose, and attention to detail.
            </p>
          </div>

          <div className="project-gallery-v2-heading-bottom">
            <span>FROM CONCEPT TO IMPLEMENTATION</span>
            <span>{String(projectCount).padStart(2, "0")} SELECTED PROJECTS</span>
          </div>
        </motion.header>

        <div className="project-gallery-v2-grid">
          {portfolioItems.map((project, index) => (
            <motion.article
              key={`${project.title}-${index}`}
              className="project-gallery-v2-card"
              onPointerMove={handleCardPointerMove}
              onPointerLeave={resetCardTilt}
              initial={{ opacity: 0, y: 55 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{
                duration: 0.65,
                delay: (index % 3) * 0.09,
                ease: "easeOut",
              }}
            >
              <div className="project-gallery-v2-tilt">
                <div className="project-gallery-v2-image-wrap">
                  <img
                    src={project.cardImage}
                    alt={project.title}
                    loading={index < 2 ? "eager" : "lazy"}
                    draggable={false}
                  />
                  <span className="project-gallery-v2-number">
                    {String(index + 1).padStart(2, "0")}
                    <span>/</span>
                    {String(projectCount).padStart(2, "0")}
                  </span>
                  <span className="project-gallery-v2-image-tag">
                    SELECTED WORK
                  </span>
                </div>

                <div className="project-gallery-v2-content">
                  <div className="project-gallery-v2-meta">
                    <span>{project.category}</span>
                    <span>{project.period || "PERSONAL PROJECT"}</span>
                  </div>

                  <h3>{project.title}</h3>
                  <p className="project-gallery-v2-description">
                    {project.description}
                  </p>

                  <div className="project-gallery-v2-actions">
                    <button
                      type="button"
                      className="project-gallery-v2-details"
                      onClick={() =>
                        navigate(`/projects/${encodeURIComponent(project.title)}`)
                      }
                    >
                      VIEW PROJECT <FiArrowUpRight />
                    </button>

                    <div className="project-gallery-v2-links">
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Open live demo of ${project.title}`}
                          title="Live demo"
                        >
                          LIVE <FiExternalLink />
                        </a>
                      )}

                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Open source code of ${project.title}`}
                          title="Source code"
                        >
                          <FiGithub /> CODE
                        </a>
                      )}

                      {"certificate" in project && project.certificate && (
                        <a
                          href={project.certificate}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Open certificate for ${project.title}`}
                          title="Certificate"
                        >
                          CERTIFICATE <FiExternalLink />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <footer className="project-gallery-v2-footer">
          <span>MORE IDEAS. MORE POSSIBILITIES.</span>
          <div>
            <a
              href="https://github.com/HamzaOsailan"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit GitHub profile"
            >
              <FiGithub /> GITHUB PROFILE <FiArrowUpRight />
            </a>
            <a href="#contact">
              HAVE A PROJECT IN MIND? <FiArrowUpRight />
            </a>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Projects;