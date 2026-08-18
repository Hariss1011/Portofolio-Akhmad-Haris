import Navbar from "../components/navbar/Navbar";
import Hero from "../components/section/hero/Hero";
import About from "../components/section/about/About";
import Education from "../components/section/education/Education";
import Skills from "../components/section/skills/Skills";
import Experience from "../components/section/experience/Experience";
import Projects from "../components/section/projects/Projects";
import Certificates from "../components/section/certificate/Certificates";
import Contact from "../components/section/contact/Contact";

const Home = () => {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Experience />
        <Projects />
        <Certificates />
        <Contact />
      </main>
    </>
  );
};

export default Home;
