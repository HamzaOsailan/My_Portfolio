import { Fragment } from "react";
import { motion } from "framer-motion";
import AnimatedTitles from "../utils/animatedTitles";
import { fadeLeft, fadeRight } from "../utils/animations";
import img1 from "../assets/Myimage.jpg.jpeg";
import { aboutMe } from "../data/data";

const Hero = () => {
  return (
    <Fragment>
      <section className="relative min-h-screen bg-back text-white overflow-hidden flex items-center justify-center pt-28 md:pt-0">

        <div className="container mx-auto px-5 flex flex-col-reverse md:flex-row items-center justify-between gap-12">

          {/* Text */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            animate="show"
            className="flex-1 text-center md:text-left"
          >
            <h3 className="text-xl text-white/70 mb-2">
              I'm Hamza Osailan
            </h3>

            <AnimatedTitles />

            <p className="mt-6 text-white/80 max-w-xl leading-9 text-lg">
              {aboutMe}
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">

              <a
                href="/Hamza_Osailan_CV.pdf"
                download
                className="px-6 py-3 bg-teal-400 hover:bg-teal-500 rounded-full text-white font-semibold transition duration-300"
              >
                Download CV
              </a>

              <a
                href="#portfolio"
                className="px-6 py-3 border border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-white rounded-full transition duration-300"
              >
                View Projects
              </a>

            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            animate="show"
            className="flex-1 flex justify-center"
          >
            <img
              src={img1}
              alt="profile"
              className="w-72 h-72 md:w-96 md:h-96 rounded-full object-cover border-4 border-white/20 shadow-2xl"
            />
          </motion.div>

        </div>
      </section>
    </Fragment>
  );
};

export default Hero;