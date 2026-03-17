import { skillsData } from "../data/data";
import { motion } from "framer-motion";

const iconColors: Record<string, string> = {
  Java: "#007396",
  JavaScript: "#F7DF1E",
  TypeScript: "#3178C6",
  PHP: "#777BB4",
  "React.js": "#61DAFB",
  "Tailwind CSS": "#06B6D4",
  "Spring Boot": "#6DB33F",
  Laravel: "#FF2D20",
  MongoDB: "#47A248",
  MySQL: "#4479A1",
  Git: "#F05032",
  "Azure DevOps": "#0078D7",
  Jira: "#0052CC",
  "CI/CD Pipelines": "#F97316",
  "Analytical problem solving": "#FFD700",
  "Structured debugging approach": "#FFD700",
  "Cross-functional collaboration": "#FFD700",
  "Details-oriented execution": "#FFD700",
  "Fast adaption to new frameworks": "#FFD700",
};

const Skills = () => {
  return (
    <section id="skills" className="py-16 px-4">
      <h2 className="text-3xl font-bold mb-8 text-white">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {skillsData.map((category) =>
          category.skills.map((skill) => {
            const Icon = skill.icon;
            const color = iconColors[skill.name] || "#00ffff"; // default color
            return (
              <motion.div
                key={skill.name}
                className="flex flex-col items-center"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <Icon size={40} color={color} />
                <span className="mt-2 text-white">{skill.name}</span>
              </motion.div>
            );
          })
        )}
      </div>
    </section>
  );
};

export default Skills;