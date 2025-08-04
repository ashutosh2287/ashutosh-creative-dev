import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: "🌐",
      skills: ["HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS"]
    },
    {
      title: "App Development", 
      icon: "📱",
      skills: ["Kotlin", "Android Studio", "Jetpack Compose", "XML", "Java"]
    },
    {
      title: "Backend & Database",
      icon: "⚡",
      skills: ["Firebase", "Node.js", "REST APIs", "JSON"]
    },
    {
      title: "Tools & Others",
      icon: "🛠️",
      skills: ["GitHub", "Git", "DSA", "Wireshark", "VS Code"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-surface/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Skills & Technologies</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title}
              className={`p-6 bg-gradient-card border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-card animate-scale-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-center mb-6">
                <div className="text-4xl mb-3">{category.icon}</div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2 justify-center">
                {category.skills.map((skill) => (
                  <Badge 
                    key={skill}
                    variant="secondary"
                    className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors duration-300"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Skill Progress Bars */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold text-center mb-12">Proficiency Levels</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { skill: "React.js", level: 90 },
              { skill: "JavaScript", level: 85 },
              { skill: "HTML/CSS", level: 95 },
              { skill: "Kotlin", level: 80 },
              { skill: "Firebase", level: 75 },
              { skill: "Android Development", level: 85 }
            ].map((item, index) => (
              <div 
                key={item.skill}
                className={`animate-slide-in-left`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{item.skill}</span>
                  <span className="text-primary">{item.level}%</span>
                </div>
                <div className="h-3 bg-muted rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-primary rounded-full transition-all duration-1000 ease-out"
                    style={{ 
                      width: `${item.level}%`,
                      animationDelay: `${index * 0.1 + 0.5}s`
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;