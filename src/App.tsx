import Background from "./components/Background";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import Projects from "./sections/Projects";
import Home from "./sections/Home";
import CursorGlow from "./components/CursorGlow";

function App() {
  return (
      <div className="bg-white text-black dark:bg-slate-900 dark:text-white transition-colors duration-300">
      <h1>working</h1>
      <CursorGlow />
      <Hero />
      <Home />
      <Navbar />
      <About />
      <Projects />
      <Contact />
      <Background />
    </div>
  );
}

export default App;