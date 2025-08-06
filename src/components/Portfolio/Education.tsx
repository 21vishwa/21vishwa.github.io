import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Calendar, Award } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "M.Sc (Data Science) - 5 Year Integrated Course",
      institution: "Thiagarajar College of Engineering, Madurai",
      board: "Anna University, Chennai",
      year: "2026",
      marks: "8.01*",
      status: "Pursuing",
      icon: <GraduationCap className="w-6 h-6 text-primary" />
    },
    {
      degree: "XII",
      institution: "P.A.Chinniah Raja Memorial Higher Sec.School",
      board: "State Board of Tamil Nadu",
      year: "2021",
      marks: "94.28%",
      status: "Completed",
      icon: <Award className="w-6 h-6 text-primary" />
    },
    {
      degree: "X",
      institution: "Shri Ramana Vidyalaya Montessori Matric HR Sec School",
      board: "State Board of Tamil Nadu",
      year: "2019",
      marks: "92.4%",
      status: "Completed",
      icon: <Award className="w-6 h-6 text-primary" />
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-background to-secondary/30">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            Education
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Academic journey and achievements in data science and technology
          </p>
        </div>

        <div className="grid gap-8">
          {education.map((edu, index) => (
            <Card key={index} className="group hover:shadow-[var(--shadow-elegant)] transition-all duration-300 border-border/50">
              <CardHeader className="pb-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    {edu.icon}
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2 text-foreground">{edu.degree}</CardTitle>
                    <div className="space-y-2 text-muted-foreground">
                      <p className="font-medium">{edu.institution}</p>
                      <div className="flex flex-wrap gap-4 text-sm">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{edu.year}</span>
                        </div>
                        <span>•</span>
                        <span>{edu.board}</span>
                        <span>•</span>
                        <span className="font-semibold text-primary">{edu.marks}</span>
                        <span>•</span>
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          edu.status === 'Pursuing' 
                            ? 'bg-accent text-accent-foreground' 
                            : 'bg-muted text-muted-foreground'
                        }`}>
                          {edu.status}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>

        {/* Note */}
        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            * CGPA (out of 10) up to 8th semester
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;