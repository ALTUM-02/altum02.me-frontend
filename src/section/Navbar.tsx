function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-slate-900/60 border-b border-slate-800">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">

        <h1 className="text-sky-400 font-bold">Martin</h1>

        <div className="flex gap-6 text-gray-300">
          {sections.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className={`capitalize transition ${
                active === section
                  ? "text-sky-400 font-semibold"
                  : "hover:text-sky-400"
              }`}
            >
              {section}
            </a>
          ))}
        </div>

      </div>
    </nav>
  );
}

export default Navbar;