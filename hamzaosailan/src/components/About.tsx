
import { aboutMe } from "../data/data";

const About = () => {
  return (
    <section id="about" className="py-16 px-4">
      <h2 className="text-3xl font-bold mb-6">About Me</h2>
      <p className="text-gray-700">{aboutMe}</p>
    </section>
  );
};

export default About;