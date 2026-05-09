import { motion } from "framer-motion";
import Socials from "../components/Socials";

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
          Full-Stack Developer | Problem Solver | Creator
        </motion.p>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mt-6">

          <a
            href="https://github.com/ALTUM-02/altum02.me-frontend"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-slate-700 to-slate-900 text-white font-medium hover:scale-105 transition"
          >
          View Code
          </a>

          <a
            href="https://yourliveapp.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-cyan-400 text-white font-medium hover:scale-105 transition"
          >
            Live Preview
          </a>

        </div>
        
        {/* Socials */}
        <Socials />  
      </div>
    </section>
  );
}

export default Hero;