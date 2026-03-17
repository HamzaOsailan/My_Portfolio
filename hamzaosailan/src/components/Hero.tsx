import { Fragment } from "react";
import { motion } from "framer-motion";
import AnimatedTitles from "../utils/animatedTitles";
import { fadeLeft, fadeRight } from "../utils/animations";
import img1 from "../assets/img2.png";
import { aboutMe } from "../data/data";

const Hero = () => {
  return (
    <Fragment>
      <section className="relative min-h-screen flex items-center justify-center bg-back text-white overflow-hidden">

        <div className="container mx-auto px-5 flex flex-col md:flex-row items-center gap-10">

          <motion.div
            variants={fadeLeft}
            initial="hidden"
            animate="show"
            className="flex-1 text-center md:text-left"
          >

            <h3 className="text-lg font-light tracking-wide text-white/70">
              I'm Hamza Osailan
            </h3>

            <AnimatedTitles />

            <p className="mt-4 text-white/80 max-w-xl">
              {aboutMe}
            </p>

          </motion.div>

          <motion.img
            variants={fadeRight}
            initial="hidden"
            animate="show"
            src={img1}
            alt="profile"
            className="w-64 h-64 rounded-full object-cover opacity-80"
          />

        </div>
      </section>
    </Fragment>
  );
};

export default Hero;