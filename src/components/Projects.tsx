import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Play, Plus, Edit, Trash2 } from "lucide-react";
import { useState } from "react";
import ProjectDialog from "./ProjectDialog";

const Projects = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "EasyChat",
      subtitle: "Real-time Android Messenger App",
      description:
        "A modern messaging application built with Kotlin and Firebase, featuring OTP authentication, real-time chat functionality, and a beautiful Jetpack Compose UI. The app provides seamless communication with instant message delivery and user-friendly interface.",
      technologies: ["Kotlin", "Firebase", "Jetpack Compose", "Android Studio", "Real-time Database"],
      features: [
        "OTP-based Authentication",
        "Real-time Messaging",
        "Modern UI with Jetpack Compose",
        "Firebase Backend Integration",
        "Instant Message Delivery",
        "User-friendly Interface"
      ],
      demoLink: "https://youtube.com/shorts/iQcYcdj0FSY?si=T56WzqdMuttQWwSM",
      githubLink: "https://github.com/ashutosh2287",
      videoDemo: "https://youtube.com/shorts/iQcYcdj0FSY?si=T56WzqdMuttQWwSM"
    }
  ]);

  const handleSaveProject = (projectData: any) => {
    if (projectData.id) {
      // Update existing project
      setProjects(projects.map(p => (p.id === projectData.id ? projectData : p)));
    } else {
      // Add new project
      const newProject = {
        ...projectData,
        id: projects.length + 1
      };
      setProjects([...projects, newProject]);
    }
  };

  const handleRemoveProject = (projectId: number) => {
    if (confirm("Are you sure you want to delete this project?")) {
      setProjects(projects.filter(p => p.id !== projectId));
    }
  };

  return (
    <section id="projects" className="py-20 px-4 bg-surface/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center gap-4 mb-6">
            <h2 className="text-4xl lg:text-5xl font-bold">Projects</h2>
            <ProjectDialog
              onSave={handleSaveProject}
              trigger={
                <Button
                  className="bg-gradient-primary hover:shadow-glow transition-all duration-300 p-3"
                  size="icon"
                >
                  <Plus size={20} />
                </Button>
              }
            />
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Here's a showcase of my work - click the + button to add more projects!
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className={`overflow-hidden bg-gradient-card border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-card animate-scale-in`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="p-8 lg:p-12">
                {/* Project Header */}
                <div className="text-center mb-8">
                  <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                    📱 Mobile Application
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-bold mb-2">{project.title}</h3>
                  <p className="text-xl text-primary font-medium">{project.subtitle}</p>
                </div>

                {/* Project Description */}
                <p className="text-lg text-muted-foreground leading-relaxed mb-8 text-center max-w-3xl mx-auto">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold mb-4 text-center">Technologies Used</h4>
                  <div className="flex flex-wrap gap-3 justify-center">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors duration-300 px-4 py-2"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Features Grid */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold mb-6 text-center">Key Features</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    {project.features.map((feature, featureIndex) => (
                      <div
                        key={feature}
                        className={`flex items-center gap-3 p-3 bg-surface/50 rounded-lg animate-slide-in-left`}
                        style={{ animationDelay: `${featureIndex * 0.1}s` }}
                      >
                        <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <div className="flex flex-col sm:flex-row gap-4">

                    {/* Video Demo */}
                    {project.videoDemo && (
                      <a href={project.videoDemo} target="_blank" rel="noopener noreferrer">
                        <Button
                          size="lg"
                          className="bg-gradient-primary hover:shadow-glow transition-all duration-300 px-8"
                        >
                          <Play size={20} className="mr-2" />
                          Watch Demo
                        </Button>
                      </a>
                    )}

                    {/* GitHub */}
                    {project.githubLink && (
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        <Button
                          variant="outline"
                          size="lg"
                          className="border-primary/30 hover:border-primary hover:bg-primary/10 px-8"
                        >
                          <Github size={20} className="mr-2" />
                          View Code
                        </Button>
                      </a>
                    )}

                    {/* Live Demo */}
                    {project.demoLink && (
                      <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                        <Button
                          variant="outline"
                          size="lg"
                          className="border-accent/30 hover:border-accent hover:bg-accent/10 px-8"
                        >
                          <ExternalLink size={20} className="mr-2" />
                          Live Demo
                        </Button>
                      </a>
                    )}
                  </div>

                  <div className="flex gap-2">
                    <ProjectDialog
                      project={project}
                      onSave={handleSaveProject}
                      trigger={
                        <Button
                          variant="ghost"
                          size="icon"
                          className="hover:bg-primary/10 hover:text-primary"
                        >
                          <Edit size={18} />
                        </Button>
                      }
                    />
                    <Button
                      variant="ghost"
                      size="icon"
                      className="hover:bg-destructive/10 hover:text-destructive"
                      onClick={() => handleRemoveProject(project.id)}
                    >
                      <Trash2 size={18} />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* GitHub Follow */}
        <div className="text-center mt-12 animate-fade-in">
          <div className="p-8 bg-gradient-card rounded-2xl border border-border/50">
            <h4 className="text-2xl font-semibold mb-4">More Projects on GitHub</h4>
            <p className="text-muted-foreground mb-6">
              Check out my GitHub profile for more projects and contributions.
            </p>
            <a
              href="https://github.com/ashutosh2287"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                className="border-primary/30 hover:border-primary hover:bg-primary/10"
              >
                <Github size={20} className="mr-2" />
                Follow on GitHub
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
