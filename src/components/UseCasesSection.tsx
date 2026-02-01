const useCases = [
  { industry: "Fintech", example: "Digital payments & innovation" },
  { industry: "Energy", example: "Clean energy & utilities" },
  { industry: "AI / Tech", example: "Next-gen technology" },
  { industry: "Automotive", example: "Electric vehicles" },
  { industry: "Media", example: "Content & entertainment" },
  { industry: "Startups", example: "The ultimate brand launch" },
];

const UseCasesSection = () => {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-display font-semibold mb-6">
            Endless Possibilities
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            The name "Spark" transcends industries. Here's where it could ignite next.
          </p>
        </div>

        {/* Use cases */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="group relative p-6 md:p-8 text-center rounded-sm border border-border/30 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:bg-card"
            >
              <h3 className="text-lg md:text-xl font-display font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {useCase.industry}
              </h3>
              <p className="text-sm text-muted-foreground">
                {useCase.example}
              </p>
              
              {/* Hover accent */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-12" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
