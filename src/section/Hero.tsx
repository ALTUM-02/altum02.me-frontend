function Hero() {
  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-center items-center text-center"
    >
      <h1 className="text-5xl font-bold">
        Hi, I'm <span className="text-sky-400">Martin</span>
      </h1>

      <p className="text-gray-400 mt-4">
        React Developer building modern web apps
      </p>

      <button className="mt-6 bg-sky-400 text-slate-900 px-6 py-3 rounded-xl hover:bg-sky-300 transition">
        View Projects
      </button>
    </section>
  );
}

export default Hero;