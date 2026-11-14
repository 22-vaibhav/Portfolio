import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ScrollToTop from "./components/ScrollToTop";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  return (
    <>
      <Navbar />
      <ThemeToggle />
      <Hero />
      <About />
      <Skills />
      <Certifications />
      <Projects />
      <Contact />
      <ScrollToTop />
    </>
  );
}

export default App;