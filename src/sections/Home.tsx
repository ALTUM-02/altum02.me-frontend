
function Home() {
  return (
    <section
      id="home"
      className="min-h-screen px-6 py-24 bg-slate-900 text-white"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* 🔹 LEFT SIDE */}
        <div>

          {/* Small badge */}
          <div className="mb-4 text-sm text-sky-400 border border-sky-400/30 inline-block px-4 py-1 rounded-full">
            About Me
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Building Digital Solutions for{" "}
            <span className="bg-gradient-to-r from-sky-400 to-orange-400 bg-clip-text text-transparent">
              Real-World Impact
            </span>
          </h1>

          {/* Subtitle */}
          <h2 className="text-xl font-semibold mb-4">
            Passionate Software Developer
          </h2>

          {/* Description */}
          <p className="text-gray-400 mb-4 leading-relaxed">
            I'm a software engineering student and full-stack developer
            focused on building modern, scalable, and user-friendly applications.
            I enjoy turning ideas into real digital solutions that solve everyday problems.
          </p>

          <p className="text-gray-400 mb-6 leading-relaxed">
            My experience includes working with web technologies, APIs, and backend systems.
            I am constantly learning and improving my skills to stay updated with modern tools
            and best practices in software development.
          </p>

          {/* Mission Card */}
          <div className="bg-slate-800/50 border border-slate-700 p-6 rounded-xl">
            <h3 className="text-sky-400 font-semibold mb-2">🚀 My Vision</h3>
            <p className="text-gray-400 text-sm">
              To build impactful software that improves lives, supports businesses,
              and contributes to the growth of technology in my community.
            </p>
          </div>

        </div>

        {/* 🔹 RIGHT SIDE (STATS CARDS) */}
        <div className="grid grid-cols-2 gap-6">

          <div className="bg-slate-800/50 p-6 rounded-xl text-center border border-slate-700 hover:scale-105 transition">
            <h2 className="text-3xl font-bold text-sky-400">6+</h2>
            <p className="text-gray-400 text-sm">Projects Built</p>
          </div>

          <div className="bg-slate-800/50 p-6 rounded-xl text-center border border-slate-700 hover:scale-105 transition">
            <h2 className="text-3xl font-bold text-orange-400">5+</h2>
            <p className="text-gray-400 text-sm">Technologies</p>
          </div>

          <div className="bg-slate-800/50 p-6 rounded-xl text-center border border-slate-700 hover:scale-105 transition">
            <h2 className="text-3xl font-bold text-sky-400">1+</h2>
            <p className="text-gray-400 text-sm">Years Learning</p>
          </div>

          <div className="bg-slate-800/50 p-6 rounded-xl text-center border border-slate-700 hover:scale-105 transition">
            <h2 className="text-3xl font-bold text-orange-400">∞</h2>
            <p className="text-gray-400 text-sm">Growth Mindset</p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Home;