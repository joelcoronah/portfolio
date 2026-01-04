import { useState } from "react";
import { Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Button } from "./ui/button";

// Helper function to generate avatar initials from name
const getInitials = (name: string): string => {
  const parts = name.trim().split(/\s+/);
  if (parts.length >= 2) {
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }
  return name.substring(0, 2).toUpperCase();
};

// Maximum characters before showing "read more"
const MAX_QUOTE_LENGTH = 200;

const testimonials = [
  {
    quote:
      "Una persona muy participativa, proactiva, colaboradora, tratando siempre a aplicar buenas prácticas de programación, clean code, principios SOLID. Trabajamos en TALO como full stack, y siempre se supo desenvolver en cuanto a tecnologías con reactjs, nestjs, base de datos relaciónales, automatización de procesos de despliegue.",
    name: "Juan Luis Sequera Martínez",
    role: "Full Stack Engineer | Typescript | NestJS | NodeJS | Express | LoopBack4 | Kotlin | Springboot | ReactJS | NextJS | MySQL | SQL server | MongoDB | GCP | AWS",
    avatarUrl:
      "https://media.licdn.com/dms/image/v2/D4D03AQFvlHxCKiZ9nQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1706149333283?e=1769040000&v=beta&t=iICVCjkbeQWh3r6N0bjvOoz6Fat5wgrxA1AyR3Jz2Ds",
  },
  {
    quote:
      "Joel es un profesional integral, cuenta con habilidades blandas como adaptabilidad, pensamiento crítico, colaboración y trabajo en equipo los cuales acompañan sus sólidos conocimientos técnicos.",
    name: "Jesús Alpino",
    role: "Software Engineer | Arquitecto de Aplicaciones | Site Reliability Engineer (SRE) | Tech Lead",
    avatarUrl:
      "https://media.licdn.com/dms/image/v2/D4D35AQGChMl3vZ1ueQ/profile-framedphoto-shrink_100_100/B4DZWkk2g4HIAw-/0/1742222879228?e=1768165200&v=beta&t=rrPhoL7xcXM6FwK_ws2__R72SYWZcKZd9UH-wVog46I",
  },
  {
    quote:
      "Joel es una persona que se compromete con los objetivos, es dinámico, asertivo y puntual para realizar las entregas. Tiene escucha activa, esto lo hacia muy elocuente en las reuniones lo cual hacia que el trabajo fuera mas efectivo para el equipo. La habilidad para aprender nuevas tecnologías ayudó mucho a Talo a mejorar los tiempos en los procesos internos. Él siempre estaba dispuesto ayudar, tiene un muy buen humor y es respetuoso.",
    name: "Nathaly Paillamilla Ortiz",
    role: "Ingeniera Informática | Agile | Scrum | QA | Product Owner | Ingeniera Proyecto | Transformación Digital",
    avatarUrl:
      "https://media.licdn.com/dms/image/v2/D4D03AQGriVioTu7H8Q/profile-displayphoto-scale_100_100/B4DZmqrCvHJAAo-/0/1759505034948?e=1769040000&v=beta&t=FyoOD0dbkFwy6wxKl-7nkRx9ikXQYTiIE5jNOo69j4Y",
  },
  {
    quote:
      "Joel es una profesional comprometido, honesto, responsable y preocupado de sus pares. Se destaco por su disposición a entregar los proyectos a tiempo, de excelente calidad y su capacidad para autogestionarse. Recomiendo a Joel es un excelente profesional y persona.",
    name: "María de Los Angeles Pichara Nazar",
    role: "Especialista en RRHH",
    avatarUrl:
      "https://media.licdn.com/dms/image/v2/D4E03AQHBbaboRywsPA/profile-displayphoto-scale_100_100/B4EZqb3R1lGcAc-/0/1763551552329?e=1769040000&v=beta&t=9fuPlOSfEEpVfhAOKnL2PS8xhB3vihSYjpDvtWJK-aQ",
  },
  {
    quote:
      "Un profesional que se preocupa de entender el problema y junto a sus habilidades de developer proponer no una si no varias formas de abordarlo, poniendo siempre al cliente al centro y entendiendo muy bien el negocio. Colaborativamente en el equipo aporta desde su expertiz y la calidez humana que lo representa. Un agrado compartir con Joel en el equipo.",
    name: "Franco Cariqueo Espinoza",
    role: "Product Manager | Product | Strategy | Management | Lead | Owner",
    avatarUrl:
      "https://media.licdn.com/dms/image/v2/D4D03AQHr60pT8HaH9w/profile-displayphoto-shrink_100_100/B4DZVTG4PNG8AU-/0/1740856069120?e=1769040000&v=beta&t=uFL9YfsFPPwWMcXFBax5KJwlgLpPD88M0FmlOS6KV9Q",
  },
  {
    quote:
      "Conocí a Joel mientras trabajábamos juntos en una startup, yo como UX/Ui y él como desarrollador full stack. Joel se destaca por su habilidad para trabajar en equipo y su disposición para iterar ideas en conjunto, siempre aportando significativamente al desarrollo de nuestros diseños. Su gran conocimiento técnico, su capacidad para guiar y motivar al equipo demuestran que es un líder innato. Recomiendo ampliamente a Joel por su profesionalismo y capacidad de colaboración.",
    name: "Gabriela Suazo Egaña",
    role: "UX/UI Designer / UX researcher",
    avatarUrl:
      "https://media.licdn.com/dms/image/v2/D4E03AQGORtN84DG7Bg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1707148573760?e=1769040000&v=beta&t=8nHLGkKndS0qKQDAfY1Aq80QNsM2v7Yx-_z62oKXDE8",
  },
  {
    quote:
      "Joel es un excelente desarrollador, posee habilidades técnicas claras y aporta un excelente valor al desarrollo, teniendo en cuenta los pros y contras de cada solución, dando en muchas ocasiones con soluciones prácticas ante potenciales casos borde. Análisis crítico, resolución de problemas y perspectiva de propiedad en su máxima expresión. Recomendado al 100%",
    name: "Sergio Vera",
    role: "Fullstack Engineer at Amaris",
    avatarUrl:
      "https://media.licdn.com/dms/image/v2/D4E03AQE5XswT4MY8ZQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1695996137419?e=1769040000&v=beta&t=rpE6A8bkPVzqoYE_bI9ojHebnBwiWuXvndtQvUtvzBI",
  },
  {
    quote:
      "Conozco a Joel desde más de 3 años y he tenido el placer de trabajar con él en varios proyectos, y empresas como lo son symlab y talo, Puedo decir sin duda que es uno de los desarrolladores más destacados que he conocido. Su capacidad para autogestionarse y liderar proyectos es impresionante, y su conocimiento en tecnologías como Nodejs/Nestjs, Serverless, Angular, React entre otras, es profundo y actualizado. Lo que más me impresiona de Joel es su compromiso con la calidad y la entrega a tiempo. Siempre está dispuesto a dar un paso extra para asegurarse de que las soluciones sean las mejores posibles para los clientes. Su capacidad para trabajar en equipo y comunicarse de manera efectiva es fundamental para el éxito de cualquier proyecto. Además, Joel es una persona honesta y dedicada que siempre está dispuesta a aprender y mejorar. Su pasión por la tecnología y su deseo de estar al día con las últimas tendencias y buenas prácticas es inspiradora. En resumen, si estás buscando un desarrollador experimentado, autodidacta y comprometido con la calidad, no dudes en considerar a Joel. Estoy seguro de que será un activo valioso para cualquier equipo o proyecto.",
    name: "Digna rosa marquez luna",
    role: "Technical Lead | Senior Fullstack | Ingeniera en Informática | Serverless | AWS | GCP | Node | React | +15 años de Experiencia",
    avatarUrl:
      "https://media.licdn.com/dms/image/v2/D4E03AQGxSeh2lpbCkA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1722372937512?e=1769040000&v=beta&t=qSoXwF17ggxl59TncgLI3nJXTGdWaLo17lhQnGPqJQU",
  },
  {
    quote:
      "Joel consiguió excelentes resultados en el proyecto. Es un profesional muy responsable, resiliente y resolutivo. Siempre está abierto al cambio, al aprendizaje, a la mejora y esto lo ha convertido en un profesional flexible con capacidad para trabajar de forma independiente y capacidad para asumir nuevas responsabilidades.",
    name: "Geraldine Herrera Garmendia",
    role: "Frontend Tech Lead en Sopra Steria",
    avatarUrl:
      "https://media.licdn.com/dms/image/v2/C4D03AQEpb26mmbsgQQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1525214331530?e=1769040000&v=beta&t=vAcQKvKjGDd6OG5qTNZk0XORu4Knh87sxYA5KgB8P5Y",
  },
  {
    quote:
      "Sin dudas recomendaría a Joe para cualquier trabajo en el que se requiere un profesional comprometido y de gran calidad humana.",
    name: "Gabriel Alberione",
    role: "CO-Founder & CDO at Wootic",
    avatarUrl:
      "https://media.licdn.com/dms/image/v2/D4E03AQEp3W3fnLZyvg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1665844028676?e=1769040000&v=beta&t=ooUZkmL5W30PPSUMTD9NZkWV4I2L4EEcs2k6JTBrFu4",
  },
  {
    quote:
      "Joel es un programador con un nivel alto de abstracción y de resolución de problemas, tuve la oportunidad de laborar con el, en donde demostró tener un alto compromiso con la empresa, sabe trabajar en equipo y es una persona autodidacta. Siempre afronta los retos con la mejor actitud",
    name: "Ennio González",
    role: "Sr. Software Engineer | Prompt Engineer | NodeJs | TypeScript | NestJs | React",
    avatarUrl:
      "https://media.licdn.com/dms/image/v2/C5603AQEfHom6Udj-cQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1653572816460?e=1769040000&v=beta&t=zlHjpW8sotntUHN_RlJ8vze5tLnuYLNLWFZN3oaOzWs",
  },
  {
    quote:
      "Joel es un excelente desarrollador posee cualidades realmente sorprendentes para investigar y resolver problemas, también posee habilidades de comunicación y liderazgo. A la hora transmitir una idea lo hace de forma clara y precisa, puede trabajar en equipo sin ningún problema.",
    name: "Marwil Campos Ortiz",
    role: "Front-End Developer | Typescript | AI | Ionic | Capacitor | Angular | React | Nextjs",
    avatarUrl:
      "https://media.licdn.com/dms/image/v2/D4E03AQGo1OyrtMFGHg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1706667219362?e=1769040000&v=beta&t=7zcszEwCenbzol8Ok2Pbr3SR8nA-uUGw0a7SFoFNbAs",
  },
  {
    quote:
      "Joel es responsable y disciplinado como compañero de trabajo, a nivel técnico es muy diestro, tiene buena capacidad para aprender cosas nuevas en corto tiempo.",
    name: "Francisco Herrera Petit",
    role: "Desarrollador Full Stack SSR | WeB Dev | MERN | React | Angular | NodeJS | NestJS | NextJS | AWS | Ionic | Fullstack Developer",
    avatarUrl:
      "https://media.licdn.com/dms/image/v2/D4E03AQE1jkgUiGuLAA/profile-displayphoto-shrink_100_100/B4EZooHQMkJ0AY-/0/1761609582575?e=1769040000&v=beta&t=GZxhPYF5NowHFPuMwftHMTe55V3I2n2T01KvXBVrqdc",
  },
  {
    quote:
      "Joel posee todas las cualidades que un profesional del área debe tener a mano, es una persona dedicada, responsable, concentrada, capaz de liderar y resolver problemas por si solo, sugiere buenas ideas y tiene iniciativa siempre. Muy recomendado.",
    name: "Ansony Alvarado",
    role: "Full Stack Developer | NodeJs | NestJs | Serverless | AWS | Angular+2 | +5 years' experience",
    avatarUrl:
      "https://media.licdn.com/dms/image/v2/D4E03AQEqliPHtcggow/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1683048057419?e=1769040000&v=beta&t=7z8JszSXnCpSXpI6bfQ5kXrbv1fhbdtzeo0eToriqcs",
  },
  {
    quote:
      "Estudié y trabaje con Joel Corona. En el área de la programación afronta retos continuamente otorgando respuestas y soluciones de calidad, aunado a la alta potencialidad que posee de análisis críticos, rápida adaptación y constante aprendizaje.",
    name: "Cesar Garcia",
    role: "Software Engineer | AWS | Serverless | NodeJS | JavaScript | Java | SQL | NoSQL",
    avatarUrl:
      "https://media.licdn.com/dms/image/v2/D4E03AQHVcUKqwHSD2Q/profile-displayphoto-shrink_100_100/B4EZb9Zr3EHQAY-/0/1748008091968?e=1769040000&v=beta&t=MGlNu6t-HEyv59c0pv5UE3wRvYcBbsvuxFcxEs83NPo",
  },
  {
    quote:
      "Tuve la oportunidad de estudiar junto a joel y es una persona emprededora, proactiva y competitiva, siempre con ganas de enseñar a los demás profesionales y al mismo tiempo aprender de los mismo. Siempre da lo mejor en cada trabajo que realiza, innovando y creando oportunidades donde otras personas solo ven posibles problemas.",
    name: "Gabriel Falcon",
    role: "Líder de software e implementación | Ing. de Telecomunicaciones",
    avatarUrl:
      "https://media.licdn.com/dms/image/v2/D4E03AQE1jkgUiGuLAA/profile-displayphoto-shrink_100_100/B4EZooHQMkJ0AY-/0/1761609582575?e=1769040000&v=beta&t=GZxhPYF5NowHFPuMwftHMTe55V3I2n2T01KvXBVrqdc",
  },
  {
    quote:
      "Tuve la oportunidad de trabajar con Joel y puedo asegurar que es una persona respondable, capacitado, proactivo, comunicativo, que ofrece soluciones y mejoras en los procesos; posee excelentes habilidades en el desarrollo de software y en el trabajo en equipo. También muestra interés en adquirir conocimientos en nuevas tecnologías y crecer profesionalmente.",
    name: "Olinda López",
    role: "QA Engineer",
    avatarUrl:
      "https://media.licdn.com/dms/image/v2/C4D03AQEtgl81m4uRyg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1615912625989?e=1769040000&v=beta&t=ZlLhXo5sMo2OoJBv_xVRz6UJ57Y5ToJKsPJmQCy5UM0",
  },
  {
    quote:
      "Joel es un excelente profesional con muy buenas habilidades para trabajar en equipo, se adapta muy rápido a los cambios y es un buen compañero de trabajo. La experiencia de trabajar con él fue satisfactoria, pude aprender varias cosas de él y sé que le gusta estar actualizado en las nuevas tecnologías todo el tiempo. Es autodidacta y está dispuesto a enseñar a otros para que nadie en el equipo se retrase. Cumple con los objetivos que se le colocan y tiene mucha creatividad en el área de Frontend. Es proactivo, responsable y tiene capacidades de liderazgo en el desarrollo de software. Le encanta php y tiene conocimientos sólidos en el área de telecomunicaciones.",
    name: "Vanessa Cruz",
    role: "Software Engineer @ Mercado Libre | React | Go | Javascript | Typescript | GCP | AWS | +7 años de experiencia",
    avatarUrl:
      "https://media.licdn.com/dms/image/v2/D4D03AQG_yVB5mMvASg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1680823944993?e=1769040000&v=beta&t=5xp82VPk_8kgTAcCCh9JjfYgmKEUo9d-V02Ych9y6U8",
  },
  {
    quote:
      "Luego de haber estudiado y trabajado con joel, puedo decir es una persona pro-activa, responsable y siempre en constante aprendizaje para mantenerse al día con las tendencias. Capacitado para trabajar tanto en equipo como independiente un proyectos de media y gran escala.",
    name: "Joel Villanueva",
    role: "FrontEnd Engineer | Angular Developer | Flutter Developer",
    avatarUrl:
      "https://media.licdn.com/dms/image/v2/D4E03AQG753RvcGUpeg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1688571113598?e=1769040000&v=beta&t=LIt7yJ_6LGGVznZRLkovDSWs8UlnZiTDPiv3gzoTrMA",
  },
  {
    quote:
      "Estudié y trabajé con Joel en varios proyectos y afirmo que es una persona proactiva, perspicaz y capaz de resolver cualquier problema que enfrente. Es un profesional muy competitivo y capacitado para trabajar en equipo o de manera independiente, además de poseer buenas habilidades en el desarrollo de software y gestión de proyectos.",
    name: "Victor Sanchez",
    role: "Software Engineer",
    avatarUrl:
      "https://media.licdn.com/dms/image/v2/C4E03AQH6Ha7NNyATxA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1523471551201?e=1769040000&v=beta&t=yEbicmSjHsb9SffFfJH2bX6XXuWNW-VcrK2sQG7RMfk",
  },
].map((testimonial) => ({
  ...testimonial,
  avatar: getInitials(testimonial.name),
}));

// Component for individual testimonial card with read more functionality
const TestimonialCard = ({
  testimonial,
}: {
  testimonial: (typeof testimonials)[0];
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const shouldTruncate = testimonial.quote.length > MAX_QUOTE_LENGTH;
  const displayQuote =
    shouldTruncate && !isExpanded
      ? testimonial.quote.substring(0, MAX_QUOTE_LENGTH) + "..."
      : testimonial.quote;

  return (
    <div className="bg-background p-8 rounded-2xl shadow-soft card-hover relative h-full flex flex-col">
      <Quote className="w-10 h-10 text-accent/20 absolute top-6 right-6" />

      <div className="flex-1 mb-6 relative z-10">
        <p className="text-muted-foreground leading-relaxed">
          "{displayQuote}"
        </p>
        {shouldTruncate && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-2 h-auto p-0 text-accent hover:text-accent/80 text-sm font-medium"
          >
            {isExpanded ? "Leer menos" : "Leer más"}
          </Button>
        )}
      </div>

      <div className="flex items-center gap-4 mt-auto">
        <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 overflow-hidden">
          {testimonial.avatarUrl && !imageError ? (
            <img
              src={testimonial.avatarUrl}
              alt={testimonial.name}
              className="w-full h-full object-cover"
              onError={() => setImageError(true)}
            />
          ) : (
            <span className="text-accent font-semibold text-sm">
              {testimonial.avatar}
            </span>
          )}
        </div>
        <div className="min-w-0 flex-1">
          <p className="font-semibold text-foreground truncate">
            {testimonial.name}
          </p>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {testimonial.role}
          </p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <p className="text-accent font-medium mb-3">Recommendations</p>
        <h2 className="font-display text-4xl md:text-5xl font-semibold mb-16">
          What People Say
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
              {testimonials.map((testimonial, index) => (
                <CarouselItem
                  key={index}
                  className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <TestimonialCard testimonial={testimonial} />
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

export default Testimonials;
