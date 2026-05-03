import { motion } from "framer-motion";
import { container, fadeUp } from "../data/animations";

function About() {
  return (
    <motion.section
      id="about"
      className="py-24 px-6"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <div className="max-w-5xl mx-auto text-center">

        {/* 🔹 Title */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-sky-400 mb-6"
          variants={fadeUp}
        >
          About Me
        </motion.h2>

        {/* 🔹 Description */}
        <motion.p
          className="text-gray-400 leading-relaxed mb-12"
          variants={fadeUp}
        >
          I am a passionate developer focused on building modern,
          responsive, and user-friendly web applications using React.
          I enjoy solving real-world problems, learning new technologies,
          and continuously improving my skills.
        </motion.p>

        {/* 🔹 Skills cards */}
        <motion.div
          className="grid md:grid-cols-3 gap-6"
          variants={container}
        >
          {/* Card 1 */}
          <motion.div
            className="bg-slate-800 p-6 rounded-xl"
            variants={fadeUp}
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-semibold mb-2">Frontend</h3>
            <p className="text-gray-400">
              React, Tailwind CSS, JavaScript
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className="bg-slate-800 p-6 rounded-xl"
            variants={fadeUp}
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-semibold mb-2">Backend</h3>
            <p className="text-gray-400">
              Django, APIs, Databases
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            className="bg-slate-800 p-6 rounded-xl"
            variants={fadeUp}
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-semibold mb-2">Tools</h3>
            <p className="text-gray-400">
              Git, GitHub, VS Code
            </p>
          </motion.div>
        </motion.div>

      </div>
    </motion.section>
  );
}

export default About;