import { motion } from "framer-motion";
import { container, fadeUp } from "../data/animations";

function Hero() {
  return (
    <motion.section
      className="h-screen flex flex-col justify-center items-center text-center"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.h1
        className="text-5xl font-bold"
        variants={fadeUp}
      >
        Hi, I'm <span className="text-sky-400">Martin</span>
      </motion.h1>

      <motion.p
        className="text-gray-400 mt-4"
        variants={fadeUp}
      >
        I build modern web applications using React
      </motion.p>

      <motion.button
        className="mt-6 bg-sky-400 text-slate-900 px-6 py-3 rounded-xl"
        variants={fadeUp}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        View Projects
      </motion.button>
    </motion.section>
  );
}

export default Hero;