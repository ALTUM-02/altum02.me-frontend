import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const sections = ["home", "about", "projects", "contact"];

function Navbar() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(true);

  // 🔹 Scroll spy
  useEffect(() => {
    const handleScroll = () => {
      let current = "home";

      sections.forEach((section) => {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop - 120;
          if (window.scrollY >= top) {
            current = section;
          }
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔹 Dark mode toggle
  useEffect(() => {
    const root = document.documentElement;
    dark ? root.classList.add("dark") : root.classList.remove("dark");
  }, [dark]);

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/70 dark:bg-slate-900/60 border-b border-gray-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo */}
        <h1 className="text-sky-400 font-bold">Martin</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center">
          {sections.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className={`relative capitalize transition ${
                active === section
                  ? "text-sky-400"
                  : "text-gray-700 dark:text-gray-300 hover:text-sky-400"
              }`}
            >
              {section}

              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-sky-400 transition-all ${
                  active === section ? "w-full" : "w-0"
                }`}
              />
            </a>
          ))}

          {/* 🌙 Toggle */}
          <button
            onClick={() => setDark(!dark)}
            className="ml-4 px-3 py-1 border rounded-lg"
          >
            {dark ? "☀️" : "🌙"}
          </button>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* 📱 Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white dark:bg-slate-900 px-6 py-6 space-y-4"
          >
            {sections.map((section) => (
              <a
                key={section}
                href={`#${section}`}
                onClick={() => setMenuOpen(false)}
                className={`block capitalize ${
                  active === section
                    ? "text-sky-400"
                    : "text-gray-700 dark:text-gray-300"
                }`}
              >
                {section}
              </a>
            ))}

            {/* Dark toggle mobile */}
            <button
              onClick={() => setDark(!dark)}
              className="mt-4 px-4 py-2 border rounded-lg w-full"
            >
              {dark ? "Light Mode ☀️" : "Dark Mode 🌙"}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;