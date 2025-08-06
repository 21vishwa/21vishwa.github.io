import { Button } from "@/components/ui/button";
import { Mail, Github, Phone, MapPin } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-primary/5 via-accent/20 to-primary-glow/10 relative overflow-hidden flex items-center justify-center px-4 pt-16">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-glow/15 rounded-full blur-3xl animate-pulse-glow delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-primary/5 to-accent/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-6">
            <div className="space-y-4 animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary via-primary-glow to-primary-dark bg-clip-text text-transparent drop-shadow-lg">
                Kasi Vishwanathan T
              </h1>
              <h2 className="text-xl md:text-2xl text-primary-dark font-medium animate-fade-in delay-200">
                Data Science Student & AI Enthusiast
              </h2>
              <p className="text-base md:text-lg text-foreground/90 max-w-lg mx-auto lg:mx-0 animate-fade-in delay-300 leading-relaxed">
                Self-motivated and ambitious data science student seeking challenging full-time positions to apply technical skills to real-world projects and grow by learning from experienced professionals.
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start text-sm animate-fade-in delay-500">
              <div className="flex items-center gap-2 text-primary-dark/80 bg-white/60 backdrop-blur-sm px-3 py-2 rounded-full border border-primary/20">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Madurai, Tamil Nadu</span>
              </div>
              <div className="flex items-center gap-2 text-primary-dark/80 bg-white/60 backdrop-blur-sm px-3 py-2 rounded-full border border-primary/20">
                <Phone className="w-4 h-4 text-primary" />
                <span>+91 8838107925</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 justify-center lg:justify-start animate-fade-in delay-700">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary-dark text-primary-foreground shadow-lg hover:shadow-[var(--shadow-glow)] transform hover:scale-105 transition-all duration-300"
                asChild
              >
                <a href="mailto:kasivishwanathan2109@gmail.com">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact Me
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:shadow-lg transform hover:scale-105 transition-all duration-300 bg-white/70 backdrop-blur-sm"
                asChild
              >
                <a href="https://github.com/21vishwa" target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </a>
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end animate-scale-in delay-500">
            <div className="relative group">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-primary/30 via-primary-glow/40 to-accent/30 p-1 shadow-2xl group-hover:shadow-[var(--shadow-glow)] transition-all duration-500">
                <img
                  src="/lovable-uploads/6383251e-acc2-42c1-82fd-c7387e07233f.png"
                  alt="Kasi Vishwanathan T"
                  className="w-full h-full rounded-full object-cover shadow-2xl group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute -inset-2 bg-gradient-to-br from-primary via-primary-glow to-accent rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500 -z-10 animate-pulse-glow"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;