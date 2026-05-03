import { motion } from "framer-motion";
import { container, fadeUp } from "../data/animations";

function About() {
  return (
    <motion.section
      id="about"
      className="py-20 px-6 text-center"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <motion.h2
        className="text-3xl text-sky-400 font-bold mb-6"
        variants={fadeUp}
      >
        About Me
      </motion.h2>

      <motion.p
        className="text-gray-400 max-w-2xl mx-auto"
        variants={fadeUp}
      >
        I build modern web applications using React.
      </motion.p>
    </motion.section>
  );
}

export default About;