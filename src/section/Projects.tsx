function Projects() {
  return (
    <section className="py-20 text-center">
      <h2 className="text-3xl text-sky-400 font-bold mb-10">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-6 px-8">
        <div className="bg-slate-800 p-6 rounded-xl">
          <h3 className="text-xl font-semibold">E-commerce App</h3>
          <p className="text-gray-400">
            Built with React and Django
          </p>
        </div>
      </div>
    </section>
  );
}

export default Projects;