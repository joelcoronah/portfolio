import { useState } from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink } from "lucide-react";

const skills = [
  "TypeScript",
  "React",
  "Node.js",
  "Python",
  "PostgreSQL",
  "Docker",
  "AWS",
  "Git",
];

const experience = [
  {
    title: "Full Stack Engineer",
    company: "Cumplo",
    period: "May 2025 — Present · 9 months",
    location: "Gran Santiago, Región Metropolitana de Santiago, Chile · Remote",
    description:
      "Working as a full stack engineer with Next.js, React.js, Strapi, and Amazon Web Services (AWS).",
    skills: ["Nextjs", "React.js", "Strapi", "Amazon Web Services (AWS)"],
    companyLinkedIn: "https://www.linkedin.com/company/2747701/",
  },
  {
    title: "Developer Frontend",
    company: "Callao",
    period: "Nov 2024 — May 2025 · 7 months",
    location: "Panamá, Panamá · Remote",
    description: "Frontend development with React.js and AWS.",
    skills: ["React.js", "Amazon Web Services (AWS)"],
    companyLinkedIn: "https://www.linkedin.com/company/11340253/",
  },
  {
    title: "Full Stack Developer",
    company: "TALO",
    period: "Jun 2023 — Jul 2024 · 1 year 2 months",
    location: "Santiago, Chile · Remote",
    description:
      "Design and implementation modules with ReactJs and NestJs. Endpoint management with quality in consumption and response times. Maintenance in code quality.",
    skills: ["Node.js", "MySQL", "NestJS", "React.js"],
    companyLinkedIn: "https://www.linkedin.com/company/71896194/",
  },
  {
    title: "Desarrollador Backend",
    company: "IncluIT powered by Avenga",
    period: "Mar 2022 — Feb 2023 · 1 year",
    location: "Córdoba, Argentina · Remote",
    description:
      "Backend development with Node.js, AWS Lambda, and Amazon Web Services.",
    skills: ["Node.js", "AWS Lambda", "Amazon Web Services (AWS)"],
    companyLinkedIn: "https://www.linkedin.com/company/52144789/",
  },
  {
    title: "Full Stack Developer",
    company: "Wootic",
    period: "Dec 2021 — Jan 2023 · 1 year 2 months",
    location: "Córdoba, Argentina · Remote",
    description:
      "Layout and design with Angular/Ionic. Requirements solution with Serverless and NestJS.",
    skills: [
      "Node.js",
      "Principios SOLID",
      "Serverless",
      "Amazon Web Services (AWS)",
      "JSON",
      "NestJS",
      "PostgreSQL",
    ],
    companyLinkedIn: "https://www.linkedin.com/company/80416866/",
  },
  {
    title: "Full Stack Developer",
    company: "Symmetrics Lab",
    period: "Oct 2020 — Dec 2021 · 1 year 3 months",
    location: "Santiago, Chile · Remote",
    description:
      "Responsible for analyzing and developing efficient solutions to ensure software quality. Rest API management, design and efficient solutions with ReactJS, use of serverless with AWS, bucket with AWS, solutions with Graphql and Strapi, layout and design with Wordpress, solutions with Angular2+, handling and management of relational databases (MySQL, PostgreSQL), authentication management with cognito, auth0, jwt.",
    skills: [
      "AWS Lambda",
      "Redux.js",
      "Amazon Web Services (AWS)",
      "serverless",
      "PostgreSQL",
      "React.js",
    ],
    companyLinkedIn: "https://www.linkedin.com/company/64550241/",
  },
  {
    title: "Programmer analyst",
    company: "Waykka",
    period: "Jan 2020 — Oct 2020 · 10 months",
    location: "Valencia, Carabobo, Venezuela · Hybrid",
    description:
      "In charge of analysis and design in BackEnd: RESTful API with NestJS, database management with Postgres, application of Agile methodology, Git Flow & Code review, real-time communication with websocket, clean code and long-term maintainable architecture, documented development and code specialist. In charge of design DevOps: CI/CD with Jenkins and Docker, Google Cloud, pipelines documentation specialist.",
    skills: ["NestJS", "Docker", "PostgreSQL", "Servicios web de RESTful"],
    companyLinkedIn: null,
  },
  {
    title: "Full Stack Developer",
    company: "Profy",
    period: "Dec 2019 — Feb 2020 · 3 months",
    location: "Remote",
    description: "Independent professional work.",
    skills: [],
    companyLinkedIn: "https://www.linkedin.com/company/11695461/",
  },
  {
    title: "Developer",
    company: "SOLIDWEB SpA",
    period: "May 2018 — Jan 2020 · 1 year 9 months",
    location: "Santiago, Chile · Remote",
    description:
      "API management, application design with ISpring, mockup developer.",
    skills: ["HTML", "JavaScript", "Hojas de estilos en cascada (CSS)"],
    companyLinkedIn: "https://www.linkedin.com/company/33223257/",
  },
  {
    title: "Application developer",
    company: "INTELIX C.A.",
    period: "May 2018 — Feb 2019 · 10 months",
    location: "Valencia, Carabobo, Venezuela · On-site",
    description:
      "Quality software development based on the Agile Methodology. Management of ERP Compiere, Java SE and Java EE. Management of relational DB2 databases. User support.",
    skills: ["Metodologías ágiles", "Java", "JPA"],
    companyLinkedIn: "https://www.linkedin.com/company/10138735/",
  },
  {
    title: "Programmer analyst",
    company: "Ferretería EPA",
    period: "Jan 2018 — May 2018 · 5 months",
    location: "Valencia, Carabobo, Venezuela · On-site",
    description:
      "Quality software development based on the Agile Methodology. Management of ERP Compiere, Java SE and Java EE. Management of relational databases DB2. User support.",
    skills: ["Metodologías ágiles", "java EE", "Trabajo en equipo", "Java"],
    companyLinkedIn: "https://www.linkedin.com/company/883330/",
  },
  {
    title: "Programmer",
    company: "Programa de formacion de Programadores EPA",
    period: "Jul 2017 — Jan 2018 · 7 months",
    location: "Valencia, Carabobo · On-site",
    description:
      "Management of JAVA EE, Compiere, Database. Agile Methodology, Scrum Methodology.",
    skills: ["Metodologías ágiles", "Scrum", "Java"],
    companyLinkedIn: null,
  },
  {
    title: "Tutor",
    company: "Universidad de Carabobo",
    period: "Aug 2015 — Nov 2017 · 2 years 4 months",
    location: "Naguanagua, Carabobo · On-site",
    description:
      "Tutor of the subject Mathematical Analysis I of the Department of Mathematics of the Faculty of Engineering. In charge of teaching exercise classes to reinforce knowledge of the subject. Consultations and tutorials regarding the analysis of curves, derivatives, limits, modeling and optimization of mathematical problems.",
    skills: ["Analisis", "Modelos matemáticos"],
    companyLinkedIn: "https://www.linkedin.com/company/377097/",
  },
];

const About = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedExperience = showAll ? experience : experience.slice(0, 5);

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
              {displayedExperience.map((exp, index) => (
                <div
                  key={index}
                  className="relative pl-8 border-l-2 border-border hover:border-accent transition-colors"
                >
                  <div className="absolute left-[-5px] top-1 w-2 h-2 rounded-full bg-accent" />
                  <p className="text-xs text-accent font-medium mb-1 uppercase tracking-wider">
                    {exp.period}
                  </p>
                  <h4 className="font-semibold text-foreground mb-1">
                    {exp.title}
                  </h4>
                  <div className="flex items-center gap-2 mb-2">
                    {exp.companyLinkedIn ? (
                      <a
                        href={exp.companyLinkedIn}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground text-sm hover:text-accent transition-colors flex items-center gap-1 group"
                      >
                        {exp.company}
                        <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    ) : (
                      <p className="text-muted-foreground text-sm">
                        {exp.company}
                      </p>
                    )}
                  </div>
                  <p className="text-muted-foreground text-xs mb-2 italic">
                    {exp.location}
                  </p>
                  <p className="text-muted-foreground text-sm mb-3">
                    {exp.description}
                  </p>
                  {exp.skills && exp.skills.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {exp.skills.map((skill, skillIndex) => (
                        <Badge
                          key={skillIndex}
                          variant="outline"
                          className="text-xs rounded-full"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            {experience.length > 5 && (
              <Button
                variant="outline"
                onClick={() => setShowAll(!showAll)}
                className="mt-6 w-full"
              >
                {showAll
                  ? "Show Less"
                  : `Show More (${experience.length - 5} more)`}
              </Button>
            )}
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
                With <span className="text-accent font-semibold">7+ years</span>{" "}
                of experience, I specialize in building performant, scalable
                applications. I believe in writing clean, maintainable code and
                creating intuitive user experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
