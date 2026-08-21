import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import Experience from "./components/Experience.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import Stats from "./components/Stats.jsx";
import Education from "./components/Education.jsx";
import Footer from "./components/Footer.jsx";
import "./App.css";

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Experience />
        <Projects/>
        <Skills />
        <Stats />
        <Education />
      </main>
      <Footer />
    </>
  );
}
