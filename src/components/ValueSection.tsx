const values = [
  {
    title: "Instant Brand Authority",
    description: "Spark.com is a single, evocative word that instantly communicates innovation, energy, and ignition—the perfect foundation for a world-class brand. In an era where attention is the scarcest resource, a 5-letter .com that is universally understood and spellable gives your company an unmatched, prestigious digital identity.",
  },
  {
    title: "Unrivaled Memorability & Marketing Advantage",
    description: "Short, premium .com domains drive higher direct traffic, better recall, and stronger click-through rates across email, advertising, and word-of-mouth. Spark.com is effortless to say, type, and share—giving your marketing team a permanent competitive edge over longer, forgettable addresses.",
  },
  {
    title: "Defensive Strategic Value",
    description: "Securing spark.com prevents competitors from ever owning one of the most desirable single-word .com domains remaining. It protects your brand equity and eliminates the risk of confusion or dilution in the market—critical for any company aiming to dominate its category.",
  },
  {
    title: "Proven Investment Appreciation",
    description: "Ultra-premium single-word .com domains have consistently appreciated in value. Spark.com is not just a domain—it's a rare, appreciating digital asset that strengthens your balance sheet and long-term enterprise value.",
  },
];

const ValueSection = () => {
  return (
    <section className="py-32 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-display font-semibold mb-6">
            Why <span className="text-gradient-gold">Spark.com</span>?
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
