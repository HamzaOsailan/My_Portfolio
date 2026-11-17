import { experiences } from "../data/data";

const Experience = () => {
  return (
    <section id="experience" className="py-16 px-4">
      <h2 className="text-3xl font-bold mb-8 text-white">Experience</h2>
      <div className="space-y-6">
        {experiences.map((exp) => {
  const Logo = exp.logo;
  return (
    <div key={exp.id} className="flex items-center gap-4 p-4 bg-black/20 border border-white/30 rounded-xl">
      <div className="text-4xl text-teal-400">
        <Logo /> 
      </div>
      <div>
        <h3 className="text-xl font-semibold">{exp.title}</h3>
        <p className="text-sm">{exp.company}</p>
        <p className="text-sm">{exp.period}</p>
        <p>{exp.description}</p>
      </div>
    </div>
  );
})}
      </div>
    </section>
  );
};

export default Experience;