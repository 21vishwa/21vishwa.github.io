import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Folder, Calendar, ExternalLink, Code } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Nutrition Web App for Calculating Calories using Gemini API",
      duration: "Jan 2023 - Feb 2023 (1 week)",
      organization: "TCE, Madurai",
      status: "Completed",
      description: "A comprehensive web application that helps users track their daily nutrition intake by calculating calories using Google's Gemini API. Features include meal tracking, nutritional analysis, and personalized recommendations.",
      technologies: ["Python", "Gemini API", "Web Development", "Nutrition Analysis"]
    },
    {
      title: "Clip-recommendation",
      duration: "Feb 2024 - Mar 2024 (1 Month)",
      organization: "TCE, Madurai",
      status: "Completed",
      description: "An intelligent video clip recommendation system that analyzes user preferences and viewing patterns to suggest relevant content. Implemented machine learning algorithms for personalized recommendations.",
      technologies: ["Machine Learning", "Python", "Recommendation Systems", "Data Analysis"]
    },
    {
      title: "HR Analytics Dashboard using POWER BI",
      duration: "April 2024 (1 week)",
      organization: "TCE, Madurai",
      status: "Completed",
      description: "Interactive dashboard for HR analytics providing insights into employee performance, attendance patterns, recruitment metrics, and organizational KPIs using Power BI visualization tools.",
      technologies: ["Power BI", "Data Visualization", "HR Analytics", "Business Intelligence"]
    },
    {
      title: "Multimodal Biometric Verification System for Attendance and Identification",
      duration: "May 2024 - July 2024 (2 Months)",
      organization: "TCE, Madurai",
      status: "Completed",
      description: "Advanced biometric system combining facial recognition, ID matching, and shoe verification for secure attendance tracking and identity verification. Implemented using computer vision and machine learning techniques.",
      technologies: ["Computer Vision", "Facial Recognition", "Python", "Machine Learning", "Biometric Systems"]
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-secondary/20 to-background">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Innovative solutions and technical implementations across various domains
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-[var(--shadow-elegant)] transition-all duration-300 border-border/50 h-full">
              <CardHeader className="pb-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Folder className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <CardTitle className="text-lg mb-2 text-foreground pr-4 leading-tight">
                        {project.title}
                      </CardTitle>
                      <Badge 
                        variant="secondary" 
                        className="bg-primary/10 text-primary border-primary/20 flex-shrink-0"
                      >
                        {project.status}
                      </Badge>
                    </div>
                    
                    <div className="space-y-2 text-muted-foreground text-sm">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{project.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Code className="w-4 h-4" />
                        <span className="text-primary font-medium">{project.organization}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0 space-y-4">
                <p className="text-foreground/80 leading-relaxed text-sm">
                  {project.description}
                </p>
                
                <div className="space-y-3">
                  <h4 className="font-medium text-foreground text-sm">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="outline"
                        className="text-xs hover:bg-accent hover:text-accent-foreground transition-colors"
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

        {/* Project Stats */}
        <div className="mt-16 grid md:grid-cols-4 gap-6">
          <Card className="text-center p-6 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
            <div className="text-3xl font-bold text-primary mb-2">4</div>
            <div className="text-muted-foreground text-sm">Completed Projects</div>
          </Card>
          <Card className="text-center p-6 bg-gradient-to-br from-accent/20 to-accent/30 border-accent/40">
            <div className="text-3xl font-bold text-accent-foreground mb-2">ML/AI</div>
            <div className="text-muted-foreground text-sm">Primary Focus</div>
          </Card>
          <Card className="text-center p-6 bg-gradient-to-br from-secondary/30 to-secondary/40 border-secondary">
            <div className="text-3xl font-bold text-secondary-foreground mb-2">2024</div>
            <div className="text-muted-foreground text-sm">Active Year</div>
          </Card>
          <Card className="text-center p-6 bg-gradient-to-br from-muted/30 to-muted/40 border-muted">
            <div className="text-3xl font-bold text-muted-foreground mb-2">TCE</div>
            <div className="text-muted-foreground text-sm">Institution</div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;