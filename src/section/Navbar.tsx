function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-5 sticky top-0 bg-slate-900/80 backdrop-blur">
      <h1 className="text-xl font-bold text-sky-400">Martin</h1>

      <div className="flex gap-6 text-gray-300">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;