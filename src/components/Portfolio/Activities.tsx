import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Users, Award, Calendar, Star } from "lucide-react";

const Activities = () => {
  const coCurricularActivities = [
    {
      activity: "IOT EXPO",
      description: "Participated in IOT EXPO hosted by TCE, Madurai, on April 2023",
      type: "Technology Exhibition",
      year: "2023"
    },
    {
      activity: "Caterpillar Hackathon",
      description: "Selected as finalists for the Caterpillar Hackathon 2024 and got Special Mention Award",
      type: "Hackathon",
      year: "2024",
      achievement: "Special Mention Award"
    },
    {
      activity: "Programming Fundamentals Certification",
      description: "Completed online certification in 'Programming Fundamentals' from Coursera in January 2022",
      type: "Certification",
      year: "2022"
    },
    {
      activity: "VJ Hackathon",
      description: "Selected as finalists in VJ hackathon 2024",
      type: "Hackathon",
      year: "2024",
      achievement: "Finalist"
    }
  ];

  const extraCurricularActivities = [
    {
      position: "Industrial Visit Coordinator",
      description: "M.Sc, Data Science during May 2022",
      type: "Leadership",
      year: "2022"
    },
    {
      position: "General Secretary",
      description: "for Data Science during June 2022 to present",
      type: "Leadership",
      year: "2022-Present"
    },
    {
      achievement: "2nd Prize in Treasure Hunt",
      description: "Won 2nd Prize in treasure hunt event organized by the association of data science department",
      type: "Competition",
      year: "N/A"
    }
  ];

  const sportsAchievements = [
    "Won best player medal in Ball Badminton, Handball, Hockey",
    "Participated in Inter Department matches and representing M.Sc., Data Science department for the following games: Ball Badminton, Table Tennis, Volleyball, Kabaddi, Handball, Cricket, Football, Hockey"
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-background to-secondary/30">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            Activities & Achievements
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Leadership roles, competitions, and extracurricular involvement
          </p>
        </div>

        <div className="space-y-12">
          {/* Co-Curricular Activities */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <Trophy className="w-7 h-7 text-primary" />
              Co-Curricular Activities
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {coCurricularActivities.map((activity, index) => (
                <Card key={index} className="group hover:shadow-[var(--shadow-card)] transition-all duration-300 border-border/50">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-lg text-foreground pr-4">
                        {activity.activity}
                      </CardTitle>
                      <div className="flex gap-2 flex-col">
                        <Badge variant="outline" className="text-xs">
                          {activity.type}
                        </Badge>
                        {activity.achievement && (
                          <Badge className="bg-primary/10 text-primary border-primary/20 text-xs">
                            <Award className="w-3 h-3 mr-1" />
                            {activity.achievement}
                          </Badge>
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-foreground/80 text-sm mb-3">
                      {activity.description}
                    </p>
                    <div className="flex items-center gap-2 text-muted-foreground text-xs">
                      <Calendar className="w-3 h-3" />
                      <span>{activity.year}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Extra-Curricular Activities */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <Users className="w-7 h-7 text-primary" />
              Extra-Curricular Activities
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {extraCurricularActivities.map((activity, index) => (
                <Card key={index} className="group hover:shadow-[var(--shadow-card)] transition-all duration-300 border-border/50">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-lg text-foreground">
                      {activity.position || activity.achievement}
                    </CardTitle>
                    <Badge variant="secondary" className="w-fit">
                      {activity.type}
                    </Badge>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-foreground/80 text-sm mb-3">
                      {activity.description}
                    </p>
                    <div className="flex items-center gap-2 text-muted-foreground text-xs">
                      <Calendar className="w-3 h-3" />
                      <span>{activity.year}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Sports Achievements */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <Star className="w-7 h-7 text-primary" />
              Sports Achievements
            </h3>
            <Card className="hover:shadow-[var(--shadow-elegant)] transition-all duration-300 border-border/50">
              <CardContent className="p-6">
                <div className="space-y-4">
                  {sportsAchievements.map((achievement, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-accent/30 rounded-lg">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-foreground leading-relaxed">{achievement}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mt-16 grid md:grid-cols-4 gap-6">
          <Card className="text-center p-6 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
            <div className="text-3xl font-bold text-primary mb-2">2</div>
            <div className="text-muted-foreground text-sm">Hackathon Finals</div>
          </Card>
          <Card className="text-center p-6 bg-gradient-to-br from-accent/20 to-accent/30 border-accent/40">
            <div className="text-3xl font-bold text-accent-foreground mb-2">9+</div>
            <div className="text-muted-foreground text-sm">Sports Played</div>
          </Card>
          <Card className="text-center p-6 bg-gradient-to-br from-secondary/30 to-secondary/40 border-secondary">
            <div className="text-3xl font-bold text-secondary-foreground mb-2">3</div>
            <div className="text-muted-foreground text-sm">Leadership Roles</div>
          </Card>
          <Card className="text-center p-6 bg-gradient-to-br from-muted/30 to-muted/40 border-muted">
            <div className="text-3xl font-bold text-muted-foreground mb-2">Awards</div>
            <div className="text-muted-foreground text-sm">Won Multiple</div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Activities;