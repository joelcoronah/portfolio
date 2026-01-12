import { ArrowUpRight } from "lucide-react";
import { Badge } from "./ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import invoiceSplitter from "../assets/invoice-splitter.png";
import docflow from "../assets/docflow.png";
import bcvApi from "../assets/BCV-LOGO.jpg";
import chatRealTime from "../assets/real-time-chat.png";

const projects = [
  {
    title: "Docflow",
    description:
      "Comprehensive medical practice management system for scheduling appointments, managing patient records, and tracking medical history. Features calendar view, patient management, and appointment notifications.",
    tech: ["React", "Node.js", "PostgreSQL", "Railway"],
    link: "https://docflow-schedule-production.up.railway.app/",
    gradient: "from-teal-500 to-cyan-600",
    image: docflow,
  },
  {
    title: "Invoice Splitter",
    description:
      "Divvy up bills with anyone. Split bills easily among friends with support for multiple currencies, tax calculations, and tip distribution. Features real-time BCV exchange rate integration.",
    tech: ["React", "TypeScript", "BCV API", "Netlify"],
    link: "https://invoice-splitter.netlify.app/",
    gradient: "from-blue-500 to-purple-600",
    image: invoiceSplitter,
  },
  {
    title: "BCV Rate API",
    description:
      "RESTful API to get daily exchange rates from the Venezuelan Central Bank (BCV) for USD and EUR. Includes health check endpoint and clean JSON responses.",
    tech: ["Node.js", "Express", "REST API", "Netlify"],
    link: "https://bcv-api.netlify.app/",
    gradient: "from-green-500 to-teal-600",
    image: bcvApi,
  },
  {
    title: "Real-Time Chat",
    description:
      "Full-stack real-time chat application with WebSocket support. Features instant messaging, user join notifications, and a modern, responsive interface.",
    tech: ["WebSocket", "React", "Node.js", "Vercel"],
    link: "https://chat-real-time-mu.vercel.app/",
    gradient: "from-orange-500 to-pink-600",
    image: chatRealTime,
  },
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
                <CarouselItem
                  key={index}
                  className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block bg-card rounded-2xl overflow-hidden shadow-soft card-hover h-full"
                  >
                    {/* Image/Gradient */}
                    <div className={`relative h-48 overflow-hidden`}>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-white/20 text-6xl font-bold">
                          {project.title.charAt(0)}
                        </div>
                      </div>
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
