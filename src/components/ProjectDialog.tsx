import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { X, Plus } from "lucide-react";

interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  features: string[];
  demoLink: string;
  githubLink: string;
  videoDemo: string;
}

interface ProjectDialogProps {
  project?: Project;
  onSave: (project: Omit<Project, 'id'> | Project) => void;
  trigger: React.ReactNode;
}

const ProjectDialog = ({ project, onSave, trigger }: ProjectDialogProps) => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: project?.title || "",
    subtitle: project?.subtitle || "",
    description: project?.description || "",
    demoLink: project?.demoLink || "",
    githubLink: project?.githubLink || "",
    videoDemo: project?.videoDemo || "",
  });
  
  const [technologies, setTechnologies] = useState<string[]>(project?.technologies || []);
  const [features, setFeatures] = useState<string[]>(project?.features || []);
  const [newTech, setNewTech] = useState("");
  const [newFeature, setNewFeature] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const projectData = {
      ...formData,
      technologies,
      features,
    };

    if (project) {
      onSave({ ...projectData, id: project.id });
    } else {
      onSave(projectData);
    }
    
    setOpen(false);
  };

  const addTechnology = () => {
    if (newTech.trim() && !technologies.includes(newTech.trim())) {
      setTechnologies([...technologies, newTech.trim()]);
      setNewTech("");
    }
  };

  const addFeature = () => {
    if (newFeature.trim() && !features.includes(newFeature.trim())) {
      setFeatures([...features, newFeature.trim()]);
      setNewFeature("");
    }
  };

  const removeTechnology = (tech: string) => {
    setTechnologies(technologies.filter(t => t !== tech));
  };

  const removeFeature = (feature: string) => {
    setFeatures(features.filter(f => f !== feature));
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>
            {project ? "Edit Project" : "Add New Project"}
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Info */}
          <div className="space-y-4">
            <div>
              <Label htmlFor="title">Project Title</Label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) => setFormData({...formData, title: e.target.value})}
                placeholder="Enter project title"
                required
              />
            </div>
            
            <div>
              <Label htmlFor="subtitle">Subtitle</Label>
              <Input
                id="subtitle"
                value={formData.subtitle}
                onChange={(e) => setFormData({...formData, subtitle: e.target.value})}
                placeholder="Enter project subtitle"
                required
              />
            </div>
            
            <div>
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
                placeholder="Describe your project"
                rows={4}
                required
              />
            </div>
          </div>

          {/* Technologies */}
          <div>
            <Label>Technologies</Label>
            <div className="flex gap-2 mb-2">
              <Input
                value={newTech}
                onChange={(e) => setNewTech(e.target.value)}
                placeholder="Add technology"
                onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTechnology())}
              />
              <Button type="button" onClick={addTechnology} size="icon">
                <Plus size={16} />
              </Button>
            </div>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <Badge key={tech} variant="secondary" className="flex items-center gap-1">
                  {tech}
                  <button
                    type="button"
                    onClick={() => removeTechnology(tech)}
                    className="ml-1 hover:text-destructive"
                  >
                    <X size={12} />
                  </button>
                </Badge>
              ))}
            </div>
          </div>

          {/* Features */}
          <div>
            <Label>Key Features</Label>
            <div className="flex gap-2 mb-2">
              <Input
                value={newFeature}
                onChange={(e) => setNewFeature(e.target.value)}
                placeholder="Add feature"
                onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addFeature())}
              />
              <Button type="button" onClick={addFeature} size="icon">
                <Plus size={16} />
              </Button>
            </div>
            <div className="space-y-2">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-2 p-2 bg-surface/50 rounded">
                  <span className="flex-1">{feature}</span>
                  <button
                    type="button"
                    onClick={() => removeFeature(feature)}
                    className="text-muted-foreground hover:text-destructive"
                  >
                    <X size={16} />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <div>
              <Label htmlFor="demoLink">Live Demo Link</Label>
              <Input
                id="demoLink"
                type="url"
                value={formData.demoLink}
                onChange={(e) => setFormData({...formData, demoLink: e.target.value})}
                placeholder="https://your-demo-link.com"
              />
            </div>
            
            <div>
              <Label htmlFor="githubLink">GitHub Repository</Label>
              <Input
                id="githubLink"
                type="url"
                value={formData.githubLink}
                onChange={(e) => setFormData({...formData, githubLink: e.target.value})}
                placeholder="https://github.com/username/repository"
              />
            </div>
            
            <div>
              <Label htmlFor="videoDemo">Video Demo Link</Label>
              <Input
                id="videoDemo"
                type="url"
                value={formData.videoDemo}
                onChange={(e) => setFormData({...formData, videoDemo: e.target.value})}
                placeholder="https://youtube.com/watch?v=..."
              />
            </div>
          </div>

          <div className="flex gap-3 justify-end">
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button type="submit" className="bg-gradient-primary">
              {project ? "Update Project" : "Add Project"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDialog;