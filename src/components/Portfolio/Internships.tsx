import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar, Building, CheckCircle } from "lucide-react";

const Internships = () => {
  const internships = [
    {
      title: "Code Summarization Using BART Model and Graph Neural Network",
      organization: "IBM Data and AI",
      duration: "June - Nov 2024 (6 Months)",
      status: "Completed",
      description: "Developed an advanced code summarization system using BART model integrated with Graph Neural Networks for better understanding and summarization of complex code structures.",
      technologies: ["BART Model", "Graph Neural Networks", "Python", "AI/ML"],
      type: "Research & Development"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-background to-accent/10">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            Internships
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Professional experience and industry exposure in cutting-edge technologies
          </p>
        </div>

        <div className="space-y-8">
          {internships.map((internship, index) => (
            <Card key={index} className="group hover:shadow-[var(--shadow-elegant)] transition-all duration-300 border-border/50">
              <CardHeader className="pb-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Briefcase className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <CardTitle className="text-xl mb-2 text-foreground pr-4">
                        {internship.title}
                      </CardTitle>
                      <Badge 
                        variant="secondary" 
                        className="bg-primary/10 text-primary border-primary/20 flex items-center gap-1"
                      >
                        <CheckCircle className="w-3 h-3" />
                        {internship.status}
                      </Badge>
                    </div>
                    
                    <div className="space-y-3 text-muted-foreground">
                      <div className="flex flex-wrap gap-4 text-sm">
                        <div className="flex items-center gap-2">
                          <Building className="w-4 h-4" />
                          <span className="font-medium text-primary">{internship.organization}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{internship.duration}</span>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {internship.type}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <p className="text-foreground/80 mb-4 leading-relaxed">
                  {internship.description}
                </p>
                
                <div className="space-y-3">
                  <h4 className="font-medium text-foreground">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {internship.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="secondary"
                        className="bg-accent/50 text-accent-foreground hover:bg-accent transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <Card className="text-center p-6 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
            <div className="text-3xl font-bold text-primary mb-2">1</div>
            <div className="text-muted-foreground">Completed Internship</div>
          </Card>
          <Card className="text-center p-6 bg-gradient-to-br from-accent/20 to-accent/30 border-accent/40">
            <div className="text-3xl font-bold text-accent-foreground mb-2">6</div>
            <div className="text-muted-foreground">Months Experience</div>
          </Card>
          <Card className="text-center p-6 bg-gradient-to-br from-secondary/30 to-secondary/40 border-secondary">
            <div className="text-3xl font-bold text-secondary-foreground mb-2">AI/ML</div>
            <div className="text-muted-foreground">Specialization</div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Internships;