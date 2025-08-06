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
      <Hero />
      <Education />
      <TechnicalSkills />
      <Internships />
      <Projects />
      <Activities />
      <Contact />
    </div>
  );
};

export default Index;
