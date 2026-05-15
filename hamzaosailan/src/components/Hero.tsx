import { Fragment } from "react";
import { motion } from "framer-motion";
import AnimatedTitles from "../utils/animatedTitles";
import { fadeLeft, fadeRight } from "../utils/animations";
import img1 from "../assets/Myimage.jpg.jpeg";
import { aboutMe } from "../data/data";

const Hero = () => {
  return (
    <Fragment>
      <section className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden">

        <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between gap-14">

          {/* Left Side */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            animate="show"
            className="flex-1 text-center md:text-left"
          >

            {/* Small Intro */}
            <h3 className="text-lg font-light tracking-wide text-white/70">
              I'm Hamza Osailan
            </h3>

            {/* Animated Title */}
            <AnimatedTitles />

            {/* Description */}
            <p className="mt-5 text-white/80 max-w-2xl leading-relaxed text-lg">
              {aboutMe}
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">

              {/* Download CV */}
              <a
                href="/Hamza_Osailan_CV.pdf"
                download
                className="bg-teal-400 text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 transition duration-300"
              >
                Download CV
              </a>

              {/* Contact Button */}
              <a
                href="#contact"
                className="border border-teal-400 text-teal-400 px-6 py-3 rounded-xl hover:bg-teal-400 hover:text-black transition duration-300"
              >
                Contact Me
              </a>

            </div>

          </motion.div>

          {/* Right Side Image */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            animate="show"
            className="flex-1 flex justify-center"
          >
            <img
              src={img1}
              alt="Hamza Osailan"
              className="w-72 h-72 md:w-80 md:h-80 rounded-full object-cover border-4 border-white/20 shadow-2xl hover:scale-105 transition duration-500"
            />
          </motion.div>

        </div>
      </section>
    </Fragment>
  );
};

export default Hero;