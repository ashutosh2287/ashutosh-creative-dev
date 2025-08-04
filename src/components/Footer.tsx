import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 border-t border-border/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-6">
          {/* Social Links */}
          <div className="flex justify-center gap-6">
            <a 
              href="https://github.com/ashutosh2287" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-surface hover:bg-surface-hover transition-all duration-300 hover:shadow-glow hover:scale-110"
              aria-label="GitHub Profile"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://linkedin.com/in/ashutosh-anand-1651841b6" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-surface hover:bg-surface-hover transition-all duration-300 hover:shadow-glow hover:scale-110"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:ashutoshanand2287@gmail.com"
              className="p-3 rounded-full bg-surface hover:bg-surface-hover transition-all duration-300 hover:shadow-glow hover:scale-110"
              aria-label="Email Contact"
            >
              <Mail size={24} />
            </a>
          </div>

          {/* Copyright */}
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <span>© {currentYear} Ashutosh Anand. Built with</span>
            <Heart size={16} className="text-red-500 animate-pulse" />
            <span>using React.</span>
          </div>

          {/* Additional Info */}
          <p className="text-sm text-muted-foreground">
            Designed and developed with passion for creating amazing user experiences.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;