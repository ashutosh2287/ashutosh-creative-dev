
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Frontend Developer Trainee", 
      company: "Infowiz Software Solutions",
      location: "Remote",
      duration: "June 2024 - July 2024",
      type: "Training",
      description: "Built responsive web pages and UI/UX components using HTML and CSS. Focused on creating clean, modern interfaces and learning industry best practices for frontend development.",
      technologies: ["HTML", "CSS", "Responsive Design", "UI/UX"],
      achievements: [
        "Developed multiple responsive web page layouts",
        "Learned modern CSS techniques and best practices",
        "Created reusable UI components",
        "Gained experience in cross-browser compatibility"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Experience</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My professional journey and the valuable experiences that have shaped my development career.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div 
                  key={exp.company}
                  className={`relative animate-slide-in-left`}
                  style={{ animationDelay: `${index * 0.3}s` }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-glow"></div>

                  {/* Experience Card */}
                  <Card className="ml-20 p-8 bg-gradient-card border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-card">
                    {/* Header */}
                    <div className="mb-6">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <Badge 
                          variant="secondary"
                          className="bg-primary/10 text-primary"
                        >
                          {exp.type}
                        </Badge>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar size={16} />
                          {exp.duration}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <MapPin size={16} />
                          {exp.location}
                        </div>
                      </div>
                      
                      <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
                      <div className="flex items-center gap-2 text-lg text-primary font-medium">
                        <Building size={20} />
                        {exp.company}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {exp.description}
                    </p>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3">Technologies & Tools</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <Badge 
                            key={tech}
                            variant="outline"
                            className="border-accent/30 text-accent hover:bg-accent/10"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Key Achievements */}
                    <div>
                      <h4 className="font-semibold mb-3">Key Achievements</h4>
                      <div className="space-y-2">
                        {exp.achievements.map((achievement, achievementIndex) => (
                          <div 
                            key={achievementIndex}
                            className="flex items-start gap-3"
                          >
                            <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-muted-foreground text-sm leading-relaxed">
                              {achievement}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 animate-fade-in">
            <div className="p-8 bg-gradient-card rounded-2xl border border-border/50">
              <h4 className="text-2xl font-semibold mb-4">Interested in Working Together?</h4>
              <p className="text-muted-foreground mb-6">
                I'm always open to discussing new opportunities and exciting projects.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  className="px-6 py-3 bg-gradient-primary text-primary-foreground rounded-lg hover:shadow-glow transition-all duration-300"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Get In Touch
                </button>
                <button 
                  className="px-6 py-3 border border-primary/30 text-primary rounded-lg hover:bg-primary/10 transition-all duration-300"
                  onClick={() => window.open('https://linkedin.com/in/ashutosh-anand-1651841b6', '_blank')}
                >
                  View LinkedIn
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
