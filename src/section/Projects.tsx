const projects = [
  {
    title: "E-commerce App",
    desc: "React + Django full stack project",
  },
  {
    title: "To-do App",
    desc: "Task manager with local storage",
  },
];

function Projects() {
  return (
    <section id="projects" className="py-20 px-8">
      <h2 className="text-3xl text-center text-sky-400 font-bold mb-10">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((p, i) => (
          <div
            key={i}
            className="bg-slate-800 p-6 rounded-xl hover:scale-105 transition"
          >
            <h3 className="text-xl font-semibold">{p.title}</h3>
            <p className="text-gray-400 mt-2">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;