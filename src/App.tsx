import Background from "./components/Background";
import About from "./section/About";
import Contact from "./section/Contact";
import Hero from "./section/Hero";
import Navbar from "./section/Navbar";
import Projects from "./section/Projects";

function App() {
  return (
      <div className="bg-white text-black dark:bg-slate-900 dark:text-white transition-colors duration-300">
      <h1>working</h1>
      <Hero />
      <Navbar />
      <About />
      <Projects />
      <Contact />
      <Background />
    </div>
  );
}

export default App;