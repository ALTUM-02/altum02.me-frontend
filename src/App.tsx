import Background from "./components/Background";
import About from "./section/About";
import Contact from "./section/Contact";
import Hero from "./section/Hero";
import Navbar from "./section/Navbar";
import Projects from "./section/Projects";

function App() {
  return (
    <div className="bg-slate-900 text-white">
      <h1>working</h1>
      <Hero />
      <Navbar />
      <About />
      <Projects />
      <Contact />
      <Background />
    </div>
  );