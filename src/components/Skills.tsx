import { skillsData } from "../data/data";
import { motion } from "framer-motion";
import type { IconType } from "react-icons";
import {
  SiPython,
  SiReact,
  SiTailwindcss,
  SiHtml5,
  SiFramer,
  SiFigma,
  SiSpringsecurity,
  SiNodedotjs,
  SiExpress,
  SiFastapi,
  SiJsonwebtokens,
  SiRedis,
  SiDocker,
  SiRabbitmq,
  SiSelenium,
  SiRobotframework,
  SiPostman,
  SiAzuredevops,
  SiJira,
  SiGithubactions,
} from "react-icons/si";
import {
  FaRobot,
  FaMobileAlt,
  FaVial,
  FaUsers,
  FaDatabase,
  FaCode,
  FaShieldAlt,
  FaProjectDiagram,
  FaCogs,
  FaFileAlt,
  FaBrain,
  FaCheckCircle,
  FaHeadset,
  FaTasks,
} from "react-icons/fa";

const iconMap: Record<string, IconType> = {
  Python: SiPython,
  "React.js": SiReact,
  "Tailwind CSS": SiTailwindcss,
  "HTML & CSS": SiHtml5,
  "Framer Motion": SiFramer,
  "Figma Design Validation": SiFigma,
  "Spring Security": SiSpringsecurity,
  "Node.js": SiNodedotjs,
  "Express.js": SiExpress,
  FastAPI: SiFastapi,
  "REST APIs": FaProjectDiagram,
  "JWT Authentication": SiJsonwebtokens,
  "Role-Based Access Control": FaShieldAlt,
  "OOP & MVC": FaCode,
  "Dependency Injection": FaCogs,
  Redis: SiRedis,
  Docker: SiDocker,
  RabbitMQ: SiRabbitmq,
  Ollama: FaRobot,
  "Retrieval-Augmented Generation (RAG)": FaBrain,
  Qdrant: FaDatabase,
  Embeddings: FaProjectDiagram,
  "OCR & Text Extraction": FaFileAlt,
  Selenium: SiSelenium,
  Appium: FaMobileAlt,
  TestNG: FaVial,
  "Robot Framework": SiRobotframework,
  Postman: SiPostman,
  "API Testing": FaCheckCircle,
  "Functional & Regression Testing": FaCheckCircle,
  "Test Case Design": FaTasks,
  "Azure DevOps": SiAzuredevops,
  Jira: SiJira,
  "CI/CD Pipelines": SiGithubactions,
  "Agile & Scrum": FaUsers,
  "Developer Support": FaHeadset,
  Figma: SiFigma,
};

const iconColors: Record<string, string> = {
  Java: "#ED8B00",
  JavaScript: "#F7DF1E",
  TypeScript: "#3178C6",
  PHP: "#777BB4",
  Python: "#3776AB",
  "React.js": "#61DAFB",
  "Tailwind CSS": "#06B6D4",
  "HTML & CSS": "#E34F26",
  "Framer Motion": "#0055FF",
  "Figma Design Validation": "#F24E1E",
  "Spring Boot": "#6DB33F",
  "Spring Security": "#6DB33F",
  "Node.js": "#5FA04E",
  "Express.js": "#E8E8E8",
  FastAPI: "#009688",
  Laravel: "#FF2D20",
  MongoDB: "#47A248",
  MySQL: "#4479A1",
  Redis: "#DC382D",
  Docker: "#2496ED",
  RabbitMQ: "#FF6600",
  Git: "#F05032",
  Ollama: "#E8E8E8",
  "Retrieval-Augmented Generation (RAG)": "#8B7CFF",
  Qdrant: "#DC244C",
  Embeddings: "#8B7CFF",
  "OCR & Text Extraction": "#A6B4C8",
  Selenium: "#43B02A",
  Appium: "#662D91",
  TestNG: "#E67E22",
  "Robot Framework": "#00C0B5",
  Postman: "#FF6C37",
  "API Testing": "#FF6C37",
  "Functional & Regression Testing": "#35B779",
  "Test Case Design": "#A6B4C8",
  "Azure DevOps": "#0078D7",
  Jira: "#2684FF",
  "CI/CD Pipelines": "#2088FF",
  "Agile & Scrum": "#6B9BFF",
  "Developer Support": "#A6B4C8",
  Figma: "#F24E1E",
};

const Skills = () => {
  return (
    <section id="" className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8">
      <div className="glow-orb pointer-events-none absolute -left-40 top-20 h-72 w-72 bg-violet-600/15" />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            What I work with
          </span>
          <h2 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-400">
            Technologies and tools I use to build, test, and deliver reliable digital experiences.
          </p>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skillsData.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.08 }}
              className="glass-panel group rounded-2xl p-6 transition duration-300 hover:-translate-y-2 hover:border-violet-400/40 hover:shadow-[0_20px_60px_rgba(99,102,241,0.12)]"
            >
              <div className="mb-6 flex items-center gap-3">
                <span className="h-8 w-1 rounded-full bg-gradient-to-b from-violet-400 to-cyan-300" />
                <h3 className="text-lg font-semibold text-white">
                  {category.title}
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill) => {
                  const Icon = iconMap[skill.name] ?? skill.icon;
                  const color = iconColors[skill.name] || "#A6B4C8";

                  return (
                    <motion.div
                      key={skill.name}
                      whileHover={{ y: -4, scale: 1.04 }}
                      className="flex min-h-28 flex-col items-center justify-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.025] px-2 py-4 text-center transition-colors hover:border-white/20 hover:bg-white/[0.06]"
                    >
                      <Icon size={32} color={color} />
                      <span className="text-xs font-medium leading-5 text-slate-300">
                        {skill.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;