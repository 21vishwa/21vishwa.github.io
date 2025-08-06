import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Github, Phone, MapPin, ExternalLink } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "kasivishwanathan2109@gmail.com",
      link: "mailto:kasivishwanathan2109@gmail.com"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+91 8838107925",
      link: "tel:+918838107925"
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      value: "21vishwa",
      link: "https://github.com/21vishwa"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "Madurai, Tamil Nadu - 626117",
      link: null
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-accent/10 to-primary/5">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ready to bring innovative data science solutions to your organization. Let's discuss opportunities!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary">
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      {info.link ? (
                        <a 
                          href={info.link} 
                          className="text-foreground hover:text-primary transition-colors font-medium flex items-center gap-1"
                          target={info.link.startsWith('http') ? '_blank' : undefined}
                          rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        >
                          {info.value}
                          {info.link.startsWith('http') && <ExternalLink className="w-3 h-3" />}
                        </a>
                      ) : (
                        <p className="text-foreground font-medium">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="border-border/50 bg-gradient-to-br from-primary/5 to-primary/10">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Quick Connect</h3>
                <div className="flex gap-3">
                  <Button 
                    size="sm" 
                    className="bg-primary hover:bg-primary/90"
                    asChild
                  >
                    <a href="mailto:kasivishwanathan2109@gmail.com">
                      <Mail className="w-4 h-4 mr-2" />
                      Email Me
                    </a>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    asChild
                  >
                    <a href="https://github.com/21vishwa" target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Professional Summary */}
          <div className="space-y-6">
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl">Why Work With Me?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="p-4 bg-accent/30 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-2">🎯 Focused Expertise</h4>
                    <p className="text-foreground/80 text-sm">
                      Specialized in Data Science, Machine Learning, and AI with hands-on experience in cutting-edge technologies.
                    </p>
                  </div>
                  <div className="p-4 bg-secondary/30 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-2">🏆 Proven Track Record</h4>
                    <p className="text-foreground/80 text-sm">
                      Successfully completed internship at IBM, finalist in multiple hackathons, and delivered impactful projects.
                    </p>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-2">💪 Leadership & Teamwork</h4>
                    <p className="text-foreground/80 text-sm">
                      Active in leadership roles with strong multitasking capabilities and excellent time management skills.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Current Status */}
            <Card className="border-border/50 bg-gradient-to-br from-accent/20 to-accent/30">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3">Current Status</h3>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                  <span className="text-foreground">Available for Full-time Opportunities</span>
                </div>
                <p className="text-foreground/80 text-sm">
                  Currently pursuing M.Sc in Data Science and actively seeking challenging positions to apply technical skills in real-world scenarios.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;