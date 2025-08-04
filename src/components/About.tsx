import { Card } from "@/components/ui/card";
import { GraduationCap, Code, Users, Zap } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a passionate developer who loves turning ideas into reality through clean code 
            and intuitive user experiences.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Content */}
          <div className="space-y-6 animate-slide-in-left">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Hello! I'm Ashutosh Anand, a dedicated Frontend and App Developer currently pursuing 
              my B.Tech in Computer Science & Engineering from Punjab University UIET Hoshiarpur. 
              I have a passion for creating clean, responsive, and user-centric applications.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              My journey in development started with curiosity about how websites work, and it has 
              evolved into a love for crafting digital experiences that make a difference. I believe 
              in writing clean code, focusing on performance, and always keeping the user at the 
              center of every decision.
            </p>

            <div className="flex items-center gap-3 p-4 bg-gradient-card rounded-lg border border-border/50">
              <GraduationCap className="text-primary" size={24} />
              <div>
                <h3 className="font-semibold">Education</h3>
                <p className="text-muted-foreground">B.Tech in Computer Science & Engineering</p>
                <p className="text-sm text-muted-foreground">Punjab University UIET Hoshiarpur (2022–2026)</p>
              </div>
            </div>
          </div>

          {/* Philosophy Cards */}
          <div className="grid gap-6 animate-slide-in-right">
            <Card className="p-6 bg-gradient-card border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-card">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Code className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Clean Code</h3>
                  <p className="text-muted-foreground">
                    Writing maintainable, scalable, and readable code that stands the test of time.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-card border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-card">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <Users className="text-accent" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">User-Centric Design</h3>
                  <p className="text-muted-foreground">
                    Prioritizing user experience and accessibility in every interface I create.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-card border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-card">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Zap className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Performance</h3>
                  <p className="text-muted-foreground">
                    Optimizing applications for speed, efficiency, and seamless user interactions.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;