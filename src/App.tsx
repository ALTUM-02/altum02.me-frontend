import { motion, useScroll } from "framer-motion";

import Background from "./components/Background";
import ModernCursor from "./components/ModernCursor";

import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import Home from "./sections/Home";
import About from "./sections/About";
import Projects from "./sections/Projects";

import Contact from "./sections/Contact";

function App() {
  const { scrollYProgress } = useScroll(); // 👈 MUST be inside component

  return (
    <div className="relative bg-white text-black dark:bg-slate-900 dark:text-white transition-colors duration-300 overflow-hidden">

      {/* 🔥 Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 h-1 bg-sky-400 z-[999]"
        style={{ scaleX: scrollYProgress }}
      />

      {/* 🔥 Effects */}
      <ModernCursor />
      <Background />

      {/* 🔥 Navbar */}
      <Navbar />

      {/* 🔥 Sections */}
      <Hero />
      <Home />
      <About />
      <Projects />
      <Contact />
    

    </div>
  );
}

export default App;