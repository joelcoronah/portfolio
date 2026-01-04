import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "John is an exceptional developer who delivers high-quality work consistently. His attention to detail and problem-solving skills are outstanding.",
    name: "Sarah Johnson",
    role: "CTO at Tech Company",
    avatar: "SJ"
  },
  {
    quote: "Working with John was a pleasure. He understood our requirements quickly and delivered beyond our expectations. Highly recommended!",
    name: "Michael Chen",
    role: "Founder at Startup Inc.",
    avatar: "MC"
  },
  {
    quote: "John transformed our outdated platform into a modern, scalable application. His expertise in React and Node.js is impressive.",
    name: "Emily Davis",
    role: "Product Manager at Digital Agency",
    avatar: "ED"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <p className="text-accent font-medium mb-3">Recommendations</p>
        <h2 className="font-display text-4xl md:text-5xl font-semibold mb-16">
          What People Say
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-background p-8 rounded-2xl shadow-soft card-hover relative"
            >
              <Quote className="w-10 h-10 text-accent/20 absolute top-6 right-6" />
              
              <p className="text-muted-foreground leading-relaxed mb-6 relative z-10">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <span className="text-accent font-semibold text-sm">
                    {testimonial.avatar}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
