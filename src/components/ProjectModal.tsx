import { motion, AnimatePresence } from "framer-motion";

function ProjectModal({ project, onClose }: any) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="bg-slate-900 p-8 rounded-xl max-w-lg w-full"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.8 }}
          onClick={(e) => e.stopPropagation()}
        >
          <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
          <p className="text-gray-400 mb-4">{project.desc}</p>

          <a
            href={project.link}
            target="_blank"
            className="text-sky-400"
          >
            View Project →
          </a>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default ProjectModal;