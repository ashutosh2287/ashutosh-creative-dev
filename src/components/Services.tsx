import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Globe, Smartphone, ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Website Building",
      description: "Building modern, responsive websites using React, HTML, CSS, and JavaScript. Creating engaging user experiences with clean, maintainable code.",
      features: ["Responsive Design", "Modern UI/UX", "SEO Optimized", "Fast Performance"],
      gradient: "from-primary/20 to-primary/5"
    },
    {
      icon: Smartphone, 
      title: "App Development",
      description: "Developing Android applications with Kotlin and Firebase backend. Creating intuitive mobile experiences with Jetpack Compose UI.",
      features: ["Android Native", "Firebase Integration", "Modern UI", "Real-time Features"],
      gradient: "from-accent/20 to-accent/5"
    }
  ];

  return (
    <section id="services" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Services</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I specialize in creating digital solutions that combine beautiful design 
            with powerful functionality.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className={`group p-8 bg-gradient-card border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-card hover:scale-105 animate-scale-in`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`bg-gradient-to-br ${service.gradient} p-4 rounded-2xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon size={32} className="text-foreground" />
              </div>

              <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              <div className="space-y-3 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <div 
                    key={feature}
                    className="flex items-center gap-3 text-sm"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <Button 
                variant="outline" 
                className="w-full border-primary/30 hover:border-primary hover:bg-primary/10 group-hover:shadow-glow transition-all duration-300"
              >
                Learn More
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in">
          <p className="text-lg text-muted-foreground mb-6">
            Ready to bring your ideas to life?
          </p>
          <Button 
            size="lg"
            className="bg-gradient-primary hover:shadow-glow transition-all duration-300 px-8 py-6"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Start a Project
            <ArrowRight size={20} className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;