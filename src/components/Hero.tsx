import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center pt-20 pb-16">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Photo */}
          <div className="order-2 lg:order-1 flex justify-center lg:justify-start animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <div className="relative">
              <div className="absolute -inset-4 bg-accent/20 rounded-3xl rotate-3" />
              <img 
                src={profilePhoto} 
                alt="John Developer" 
                className="relative w-72 h-72 md:w-80 md:h-80 object-cover rounded-2xl shadow-card"
              />
            </div>
          </div>
          
          {/* Content */}
          <div className="order-1 lg:order-2">
            <p className="text-accent font-medium mb-4 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              Hello, I'm
            </p>
            
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold mb-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
              John Developer
            </h1>
            
            <p className="text-xl text-muted-foreground mb-2 animate-fade-up" style={{ animationDelay: "0.4s" }}>
              Full-Stack Software Developer
            </p>
            
            <p className="text-muted-foreground max-w-lg mb-8 leading-relaxed animate-fade-up" style={{ animationDelay: "0.5s" }}>
              Crafting elegant digital solutions with 7+ years of experience. 
              Passionate about clean code, intuitive UX, and building products that matter.
            </p>
            
            <div className="flex items-center gap-3 animate-fade-up" style={{ animationDelay: "0.6s" }}>
              <Button variant="outline" size="icon" className="rounded-full card-hover" asChild>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" className="rounded-full card-hover" asChild>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" className="rounded-full card-hover" asChild>
                <a href="mailto:hello@example.com" aria-label="Email">
                  <Mail className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
