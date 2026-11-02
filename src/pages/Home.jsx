import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

import Hero from "../components/section/hero/Hero";
import About from "../components/section/about/About";
import Education from "../components/section/education/Education";
import Skills from "../components/section/skills/Skills";
import Experience from "../components/section/experience/Experience";
import Projects from "../components/section/projects/Projects";
import Certificates from "../components/section/certificate/Certificates";
import Contact from "../components/section/contact/Contact";

const Home = () => {
  const location = useLocation();

  useLayoutEffect(() => {
    const savedPosition = sessionStorage.getItem("projectsScrollPosition");

    if (savedPosition !== null) {
      window.scrollTo(0, Number(savedPosition));

      sessionStorage.removeItem("projectsScrollPosition");
    }
  }, []);

  useLayoutEffect(() => {
    if (location.hash === "#projects") {
      requestAnimationFrame(() => {
        document.getElementById("projects")?.scrollIntoView();
      });
    }
  }, [location.hash]);

  return (
    <>
      <Hero />
      <About />
      <Education />
      <Skills />
      <Experience />
      <Projects />
      <Certificates />
      <Contact />
    </>
  );
};

export default Home;
