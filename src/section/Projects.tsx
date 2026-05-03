import { motion } from "framer-motion";
import { container, fadeUp } from "../data/animations";

const projects = [
  {
    title: "E-commerce App",
    desc: "Full-stack application built with React and Django.",
    tech: "React • Tailwind • Django",
    link: "#",
  },
  {
    title: "To-do App",
    desc: "Task manager with local storage and clean UI.",
    tech: "React • JavaScript • CSS",
    link: "#",
  },
  {
    title: "Portfolio Website",
    desc: "Personal portfolio built with modern UI and animations.",
    tech: "React • Tailwind • Framer Motion",
    link: "#",
  },
];

function Projects() {
  return (
    <motion.section
      id="projects"
      className="py-24 px-6"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto">

        {/* 🔹 Title */}
        <motion.h2
          className="text-3xl md:text-4xl text-center text-sky-400 font-bold mb-12"
          variants={fadeUp}
        >
          My Projects
        </motion.h2>

        {/* 🔹 Project Cards */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-slate-800 p-6 rounded-xl flex flex-col justify-between"
              variants={fadeUp}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 30px rgba(0,0,0,0.3)",
              }}
            >
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-4">
                  {project.desc}
                </p>

                <p className="text-sm text-sky-400 mb-6">
                  {project.tech}
                </p>
              </div>

              {/* 🔹 Button */}
              <a
                href={project.link}
                className="mt-auto bg-sky-400 text-slate-900 px-4 py-2 rounded-lg text-center hover:bg-sky-300 transition"
              >
                View Project
              </a>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </motion.section>
  );
}

export default Projects;