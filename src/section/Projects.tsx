import { motion } from "framer-motion";
import { container, fadeUp } from "../data/animations";

function Projects() {
  return (
    <motion.section
      className="py-20 text-center"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <motion.h2
        className="text-3xl text-sky-400 font-bold mb-10"
        variants={fadeUp}
      >
        Projects
      </motion.h2>

      <motion.div
        className="grid md:grid-cols-2 gap-6 px-8"
        variants={container}
      >
        {[1, 2, 3].map((_, i) => (
          <motion.div
            key={i}
            className="bg-slate-800 p-6 rounded-xl"
            variants={fadeUp}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 10px 30px rgba(0,0,0,0.3)",
            }}
          >
            <h3 className="text-xl font-semibold">
              Project {i + 1}
            </h3>
            <p className="text-gray-400">
              Description of the project
            </p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}

export default Projects;