import { Badge } from "@/components/ui/badge";

const skills = [
  "TypeScript", "React", "Node.js", "Python", 
  "PostgreSQL", "Docker", "AWS", "Git"
];

const experience = [
  {
    title: "Senior Software Developer",
    company: "Tech Company",
    period: "2022 — Present",
    description: "Leading frontend architecture and mentoring junior developers."
  },
  {
    title: "Full-Stack Developer",
    company: "Startup Inc.",
    period: "2019 — 2022",
    description: "Built scalable web applications from scratch."
  },
  {
    title: "Junior Developer",
    company: "Digital Agency",
    period: "2017 — 2019",
    description: "Started my journey developing responsive websites."
  }
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <p className="text-accent font-medium mb-3">About Me</p>
        <h2 className="font-display text-4xl md:text-5xl font-semibold mb-16">
          Career & Expertise
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Experience */}
          <div>
            <h3 className="text-lg font-semibold mb-8">Experience</h3>
            <div className="space-y-8">
              {experience.map((exp, index) => (
                <div 
                  key={index}
                  className="relative pl-8 border-l-2 border-border hover:border-accent transition-colors"
                >
                  <div className="absolute left-[-5px] top-1 w-2 h-2 rounded-full bg-accent" />
                  <p className="text-xs text-accent font-medium mb-1 uppercase tracking-wider">{exp.period}</p>
                  <h4 className="font-semibold text-foreground mb-1">{exp.title}</h4>
                  <p className="text-muted-foreground text-sm mb-2">{exp.company}</p>
                  <p className="text-muted-foreground text-sm">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Skills */}
          <div>
            <h3 className="text-lg font-semibold mb-8">Tech Stack</h3>
            <div className="flex flex-wrap gap-3 mb-10">
              {skills.map((skill) => (
                <Badge 
                  key={skill} 
                  variant="secondary"
                  className="text-sm py-2 px-4 rounded-full"
                >
                  {skill}
                </Badge>
              ))}
            </div>
            
            <div className="p-8 bg-background rounded-2xl shadow-soft">
              <p className="text-muted-foreground leading-relaxed">
                With <span className="text-accent font-semibold">7+ years</span> of experience, 
                I specialize in building performant, scalable applications. I believe in 
                writing clean, maintainable code and creating intuitive user experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
