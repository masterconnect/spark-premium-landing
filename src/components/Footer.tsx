const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-border/30">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} spark.com — A Premium Domain Asset
        </p>
        <p className="text-xs text-muted-foreground/60">
          Represented by Grit Brokerage
        </p>
      </div>
    </footer>
  );
};

export default Footer;
