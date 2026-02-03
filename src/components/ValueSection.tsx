const values = [
  {
    title: "Instant Brand Authority & Investor Signal",
    description: "Spark.com is a single, universally resonant word that instantly conveys innovation, energy, and leadership. Owning this ultra-premium .com sends an unmistakable signal to investors, partners, and markets that your company is the category-defining leader—dramatically enhancing perceived goodwill and intangible asset value in funding rounds or IPOs.",
  },
  {
    title: "Unrivaled Memorability & Marketing Advantage",
    description: "Short, premium .com domains drive higher direct traffic, superior recall, and stronger performance across all marketing channels. Spark.com is effortless to say, type, and share—giving your team a permanent, unfair advantage over competitors with longer or less memorable addresses.",
  },
  {
    title: "Defensive Strategic Value",
    description: "Securing spark.com permanently denies this iconic single-word .com to competitors, eliminating risks of brand confusion, traffic diversion, or market dilution. It is a proactive defense of your leadership position in an increasingly competitive landscape.",
  },
  {
    title: "Proven Long-Term Investment Appreciation",
    description: "Ultra-premium single-word .com domains have consistently outperformed as appreciating assets. Beyond balance-sheet strength, spark.com elevates enterprise value by reinforcing investor confidence in your dominance—directly boosting goodwill valuation during financing, M&A, or public listing.",
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
