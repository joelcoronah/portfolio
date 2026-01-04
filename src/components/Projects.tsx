import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import projectEcommerce from "@/assets/project-ecommerce.jpg";
import projectTaskapp from "@/assets/project-taskapp.jpg";
import projectAi from "@/assets/project-ai.jpg";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured online store with cart, payments, and admin dashboard. Built for scale with real-time inventory management.",
    tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
    image: projectEcommerce,
    link: "#"
  },
  {
    title: "Task Management App",
    description: "Collaborative project management tool with real-time updates, team features, and beautiful kanban boards.",
    tech: ["TypeScript", "Next.js", "Prisma", "WebSocket"],
    image: projectTaskapp,
    link: "#"
  },
  {
    title: "AI Chat Assistant",
    description: "Intelligent chatbot interface with context awareness and natural language processing for customer support.",
    tech: ["Python", "FastAPI", "OpenAI", "React"],
    image: projectAi,
    link: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <p className="text-accent font-medium mb-3">Portfolio</p>
        <h2 className="font-display text-4xl md:text-5xl font-semibold mb-16">
          Featured Work
        </h2>
        
        {/* Carousel Container */}
        <div className="relative px-8 md:px-0">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {projects.map((project, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <a 
                    href={project.link}
                    className="group block bg-card rounded-2xl overflow-hidden shadow-soft card-hover h-full"
                  >
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    
                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                          {project.title}
                        </h3>
                        <ArrowUpRight className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </div>
                      
                      <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <Badge 
                            key={tech} 
                            variant="outline" 
                            className="text-xs rounded-full"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </a>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-4 lg:-left-12" />
            <CarouselNext className="hidden md:flex -right-4 lg:-right-12" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Projects;
