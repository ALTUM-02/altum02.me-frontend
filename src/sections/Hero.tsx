import { motion } from "framer-motion";
import { container, fadeUp } from "../data/animations";

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center text-center px-6 relative">

      <div className="max-w-4xl">

        {/* Badge */}
        <motion.div
          className="inline-block px-4 py-2 mb-6 rounded-full bg-slate-800 border border-slate-700 text-sm"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
        </motion.div>

        {/* Name */}
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-sky-400 to-orange-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Martin George
        </motion.h1>

        {/* Role */}
        <motion.p
          className="text-gray-400 text-lg mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Full-Stack Developer • React • Backend • Mobile
        </motion.p>

        {/* Buttons */}
        <div className="flex justify-center gap-4">
          <button className="bg-sky-400 px-6 py-3 rounded-xl text-slate-900 font-semibold hover:scale-105 transition">
            View My Work
          </button>

          <button className="border border-gray-600 px-6 py-3 rounded-xl hover:border-sky-400">
            Contact Me
          </button>
        </div>

      </div>
    </section>
  );
}

export default Hero;