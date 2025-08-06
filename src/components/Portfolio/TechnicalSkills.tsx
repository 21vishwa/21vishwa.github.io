import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Globe, Database, Brain } from "lucide-react";

const TechnicalSkills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6 text-primary" />,
      skills: ["Python", "Java"],
      color: "bg-primary/10 text-primary border-primary/20"
    },
    {
      title: "Frontend Frameworks",
      icon: <Globe className="w-6 h-6 text-primary" />,
      skills: ["HTML", "CSS"],
      color: "bg-accent/50 text-accent-foreground border-accent/40"
    },
    {
      title: "Backend & Database",
      icon: <Database className="w-6 h-6 text-primary" />,
      skills: ["MySQL"],
      color: "bg-secondary text-secondary-foreground border-secondary"
    },
    {
      title: "Areas of Interest",
      icon: <Brain className="w-6 h-6 text-primary" />,
      skills: ["DBMS", "Machine Learning", "Deep Learning"],
      color: "bg-muted text-muted-foreground border-muted"
    }
  ];

  const personalSkills = [
    "Highly responsible",
    "Multitasking Capability and Decision Making",
    "Leadership qualities",
    "Time management"
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-secondary/20 to-background">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Technical expertise and personal capabilities that drive innovation
          </p>
        </div>

        {/* Technical Skills */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {skillCategories.map((category, index) => (
            <Card key={index} className="group hover:shadow-[var(--shadow-card)] transition-all duration-300 border-border/50">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    {category.icon}
                  </div>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary"
                      className={`${category.color} hover:scale-105 transition-transform`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Personal Skills */}
        <Card className="hover:shadow-[var(--shadow-elegant)] transition-all duration-300 border-border/50">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Brain className="w-6 h-6 text-primary" />
              </div>
              Personal Skills
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {personalSkills.map((skill, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-accent/30 rounded-lg hover:bg-accent/50 transition-colors">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-foreground">{skill}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default TechnicalSkills;