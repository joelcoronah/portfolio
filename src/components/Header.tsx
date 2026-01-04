import { Button } from "./ui/button";

const Header = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#"
          className="font-display text-xl font-semibold text-foreground"
        >
          Portfolio
        </a>

        <div className="flex items-center gap-8">
          <button
            onClick={() => scrollTo("about")}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            About
          </button>
          <button
            onClick={() => scrollTo("projects")}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Work
          </button>
          <button
            onClick={() => scrollTo("testimonials")}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Reviews
          </button>
          <Button
            size="sm"
            onClick={() => scrollTo("contact")}
            className="rounded-full px-6"
          >
            Contact
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
