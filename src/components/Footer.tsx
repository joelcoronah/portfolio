const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-display text-lg font-semibold text-foreground">
          Portfolio
        </p>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} John Developer. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
