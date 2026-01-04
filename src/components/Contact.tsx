import { Mail, MapPin, Linkedin, ArrowUpRight } from "lucide-react";
import { Button } from "./ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-accent font-medium mb-3">Get In Touch</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold mb-6">
            Let's Work Together
          </h2>
          
          <p className="text-muted-foreground leading-relaxed mb-10">
            I'm always open to discussing new projects, creative ideas, 
            or opportunities to be part of your vision.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button size="lg" className="rounded-full px-8 gap-2" asChild>
              <a href="mailto:hello@example.com">
                <Mail className="w-4 h-4" />
                hello@example.com
              </a>
            </Button>
            
            <Button variant="outline" size="lg" className="rounded-full px-8 gap-2" asChild>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-4 h-4" />
                LinkedIn
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <MapPin className="w-4 h-4" />
            <span>San Francisco, CA</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
