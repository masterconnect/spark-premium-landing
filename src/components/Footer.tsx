const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-border/30">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Spark.com — A Premium Domain Asset
        </p>
      </div>
    </footer>
  );
};

export default Footer;
