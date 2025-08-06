import Navigation from "@/components/Portfolio/Navigation";
import Hero from "@/components/Portfolio/Hero";
import Education from "@/components/Portfolio/Education";
import TechnicalSkills from "@/components/Portfolio/TechnicalSkills";
import Internships from "@/components/Portfolio/Internships";
import Projects from "@/components/Portfolio/Projects";
import Activities from "@/components/Portfolio/Activities";
import Contact from "@/components/Portfolio/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div id="home">
        <Hero />
      </div>
      <div id="education">
        <Education />
      </div>
      <div id="skills">
        <TechnicalSkills />
      </div>
      <div id="internships">
        <Internships />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="activities">
        <Activities />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default Index;
