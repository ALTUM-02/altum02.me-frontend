import { motion } from "framer-motion";
import { container, fadeUp } from "../data/animations";

function Hero() {
  return (
    <motion.section
      id="home"
      className="min-h-screen flex items-center justify-center px-6"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <div className="text-center max-w-3xl mx-auto">

        {/* 🔹 Title */}
        <motion.h1
          className="text-5xl md:text-6xl font-bold mb-6"
          variants={fadeUp}
        >
          Hi, I'm <span className="text-sky-400">Martin</span>
        </motion.h1>

        {/* 🔹 Subtitle */}
        <motion.p
          className="text-gray-400 text-lg mb-8"
          variants={fadeUp}
        >
          I build modern, responsive web applications using React and modern technologies.
        </motion.p>

        {/* 🔹 Buttons */}
        <motion.div
          className="flex justify-center gap-4"
          variants={fadeUp}
        >
          <a
            href="#projects"
            className="bg-sky-400 text-slate-900 px-6 py-3 rounded-xl font-semibold hover:bg-sky-300 transition"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="border border-gray-500 px-6 py-3 rounded-xl hover:border-sky-400 hover:text-sky-400 transition"
          >
            Contact Me
          </a>
        </motion.div>

      </div>
    </motion.section>
  );
}

export default Hero;