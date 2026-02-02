const values = [
  {
    title: "Top-Tier Versatility",
    description: '"Spark" is a rare "chameleon" brand name that fits perfectly across multiple high-growth industries.',
    points: [
      { label: "Tech & AI", text: "Ignition of ideas, data processing, or neural networks." },
      { label: "Energy", text: "Traditional utilities, EV charging, or renewable energy solutions." },
      { label: "Finance/Fintech", text: 'The "spark" for investment growth or a new trading platform.' },
      { label: "Creative/Education", text: 'Creativity, brainstorming, and "sparking" a love for learning.' },
    ],
  },
  {
    title: "Universal Positive Connotation",
    description: "The word is globally understood and carries overwhelmingly positive sentiment.",
    points: [
      { label: "Action-Oriented", text: "It implies the start of something big, momentum, and innovation." },
      { label: "Short & Punchy", text: "At only 5 letters, it is easy to type, hard to misspell, and fits perfectly on any logo or mobile app icon." },
      { label: "Linguistic Strength", text: "It is a strong, one-syllable noun that doubles as an evocative verb." },
    ],
  },
  {
    title: "Scarcity and Authority",
    description: "Single-word English nouns are the blue-chip real estate of the internet.",
    points: [
      { label: "Dictionary .com", text: "They provide instant category authority that long or hyphenated names cannot match." },
      { label: "Built-in Trust", text: "Owning a domain like Spark.com signals to investors, partners, and customers that the company is well-capitalized and a leader in its space." },
    ],
  },
  {
    title: "Unbeatable Marketing ROI",
    description: "A domain that pays for itself through reduced marketing costs and increased credibility.",
    points: [
      { label: "Zero-Ad-Spend Recall", text: 'Once a customer hears "Spark.com," they won\'t forget it. This drastically reduces long-term marketing costs compared to "invented" brand names.' },
      { label: "SEO & Email Authority", text: "It provides a clean, professional footprint for outbound sales and organic search credibility." },
    ],
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
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {value.description}
                  </p>
                  <ul className="space-y-3">
                    {value.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="text-sm">
                        <span className="text-primary font-medium">{point.label}:</span>{" "}
                        <span className="text-muted-foreground">{point.text}</span>
                      </li>
                    ))}
                  </ul>
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
