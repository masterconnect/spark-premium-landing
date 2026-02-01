const values = [
  {
    title: "Universal Appeal",
    description: "A powerful 5-letter word that resonates across every industry, language, and demographic.",
  },
  {
    title: "Infinite Potential",
    description: "From fintech to energy, AI to innovation—spark ignites possibilities in any vertical.",
  },
  {
    title: "Memorable & Brandable",
    description: "Instantly recognizable, easy to spell, impossible to forget. The ultimate brand foundation.",
  },
  {
    title: "Investment Grade",
    description: "Single-word .com domains represent the pinnacle of digital real estate value.",
  },
];

const ValueSection = () => {
  return (
    <section className="py-32 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-display font-semibold mb-6">
            Why <span className="text-gradient-gold">spark.com</span>?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            More than a domain—a legacy asset that commands attention and ignites growth.
          </p>
        </div>

        {/* Values grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="group p-8 md:p-10 rounded-sm bg-secondary/50 border border-border/50 transition-all duration-500 hover:border-primary/30 hover:bg-secondary"
            >
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-sm bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-display text-xl font-semibold">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-display font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueSection;
