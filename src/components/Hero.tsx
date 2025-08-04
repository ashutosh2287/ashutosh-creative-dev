import { Button } from "@/components/ui/button";
import { ChevronDown, Github, Linkedin, Mail, Edit } from "lucide-react";
import { useState } from "react";
import profilePhoto from "@/assets/profile-photo.jpg";
import ImageManager from "./ImageManager";

const Hero = () => {
  const [currentProfilePhoto, setCurrentProfilePhoto] = useState(profilePhoto);
  
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleProfilePhotoChange = (newImageUrl: string | null) => {
    setCurrentProfilePhoto(newImageUrl || profilePhoto);
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-hero px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8 animate-slide-in-left">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold">
                Hi, I'm{" "}
                <span className="text-gradient">Ashutosh</span>
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed">
                I'm a passionate frontend developer focused on creating clean and 
                responsive interfaces with React and JavaScript.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:shadow-glow transition-all duration-300 px-8 py-6 text-lg"
                onClick={() => scrollToSection('projects')}
              >
                View Projects
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary/30 hover:border-primary hover:bg-primary/10 px-8 py-6 text-lg"
                onClick={() => scrollToSection('contact')}
              >
                Contact Me
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 justify-center lg:justify-start">
              <a 
                href="https://github.com/ashutosh2287" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-surface hover:bg-surface-hover transition-all duration-300 hover:shadow-glow hover:scale-110"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://linkedin.com/in/ashutosh-anand-1651841b6" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-surface hover:bg-surface-hover transition-all duration-300 hover:shadow-glow hover:scale-110"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="mailto:ashutoshanand2287@gmail.com"
                className="p-3 rounded-full bg-surface hover:bg-surface-hover transition-all duration-300 hover:shadow-glow hover:scale-110"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Right Content - Profile Photo */}
          <div className="flex justify-center lg:justify-end animate-slide-in-right">
            <div className="relative group">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/20 shadow-card animate-float">
                <img 
                  src={currentProfilePhoto} 
                  alt="Ashutosh Anand - Frontend Developer"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Edit Button */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ImageManager
                  currentImage={currentProfilePhoto}
                  onImageChange={handleProfilePhotoChange}
                  title="Manage Profile Photo"
                  aspectRatio="square"
                  trigger={
                    <Button
                      size="icon"
                      className="bg-primary/20 backdrop-blur hover:bg-primary/30 border border-primary/30"
                    >
                      <Edit size={18} />
                    </Button>
                  }
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full animate-glow-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent/20 rounded-full animate-glow-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Arrow */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={() => scrollToSection('about')}
          className="p-2 rounded-full bg-surface/50 backdrop-blur hover:bg-surface transition-all duration-300"
        >
          <ChevronDown size={24} className="text-primary" />
        </button>
      </div>
    </section>
  );
};

export default Hero;