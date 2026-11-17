import { motion } from "framer-motion";
import { experiences } from "../data/data";

const Experience = () => {
  return (
    <section id="" className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8">
      <div className="glow-orb pointer-events-none absolute -right-40 top-24 h-80 w-80 bg-cyan-500/10" />

      <div className="relative mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            My professional journey
          </span>
          <h2 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="mt-4 max-w-2xl leading-7 text-slate-400">
            Experience focused on software quality, automation, and delivering dependable products.
          </p>
        </motion.div>

        <div className="relative space-y-8 before:absolute before:bottom-8 before:left-6 before:top-8 before:w-px before:bg-gradient-to-b before:from-violet-400/70 before:via-cyan-400/40 before:to-transparent sm:before:left-8">
          {experiences.map((exp, index) => {
            const Logo = exp.logo;

            return (
              <motion.article
                key={exp.id}
                initial={{ opacity: 0, x: 28 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                className="relative pl-16 sm:pl-20"
              >
                <div className="absolute left-0 top-6 z-10 flex h-12 w-12 items-center justify-center rounded-2xl border border-violet-400/30 bg-[#17172b] text-2xl text-cyan-300 shadow-[0_0_28px_rgba(139,92,246,0.18)] sm:left-2 sm:h-14 sm:w-14">
                  <Logo />
                </div>

                <div className="glass-panel rounded-2xl p-6 sm:p-8">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-white sm:text-2xl">
                        {exp.title}
                      </h3>
                      <p className="mt-2 font-medium text-violet-300">
                        {exp.company}
                      </p>
                    </div>

                    <span className="w-fit rounded-full border border-cyan-300/20 bg-cyan-300/[0.07] px-3 py-1.5 text-xs font-semibold text-cyan-200">
                      {exp.period}
                    </span>
                  </div>

                  <p className="mt-6 text-sm leading-8 text-slate-400 sm:text-base">
                    {exp.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-medium text-slate-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
