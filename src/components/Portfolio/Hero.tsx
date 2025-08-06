import { Button } from "@/components/ui/button";
import { Mail, Github, Phone, MapPin } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-background via-secondary/30 to-accent/20 flex items-center justify-center px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                Kasi Vishwanathan T
              </h1>
              <h2 className="text-xl md:text-2xl text-muted-foreground font-medium">
                Data Science Student & AI Enthusiast
              </h2>
              <p className="text-base md:text-lg text-foreground/80 max-w-lg mx-auto lg:mx-0">
                Self-motivated and ambitious data science student seeking challenging full-time positions to apply technical skills to real-world projects and grow by learning from experienced professionals.
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>Madurai, Tamil Nadu</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>+91 8838107925</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg"
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
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
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
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-primary/20 to-primary-glow/30 p-1">
                <img
                  src="/lovable-uploads/6383251e-acc2-42c1-82fd-c7387e07233f.png"
                  alt="Kasi Vishwanathan T"
                  className="w-full h-full rounded-full object-cover shadow-2xl"
                />
              </div>
              <div className="absolute -inset-1 bg-gradient-to-br from-primary to-primary-glow rounded-full blur opacity-30 -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;