import { Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-32 px-6 bg-card">
      <div className="max-w-4xl mx-auto text-center">
        {/* Section header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-semibold mb-6">
            Make Your Move
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Premium domains don't wait. Connect with our exclusive broker to discuss this exceptional opportunity.
          </p>
        </div>

        {/* Contact card */}
        <div className="p-10 md:p-14 rounded-sm border border-primary/20 bg-secondary/30 glow-gold">
          <div className="mb-8">
            <p className="text-sm text-muted-foreground uppercase tracking-[0.2em] mb-2">
              Exclusive Broker
            </p>
            <h3 className="text-2xl md:text-3xl font-display font-semibold text-foreground">
              ATM Holdings
            </h3>
            <p className="text-muted-foreground mt-2">
              Andrew Miller
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
            {/* Email */}
            <a
              href="mailto:amiller@atmholdings.com"
              className="group flex items-center gap-4 p-5 rounded-sm bg-background/50 border border-border/50 transition-all duration-300 hover:border-primary/50 hover:bg-background w-full md:w-auto"
            >
              <div className="w-12 h-12 rounded-sm bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div className="text-left">
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                  Email
                </p>
                <p className="text-lg font-semibold text-foreground">
                  amiller@atmholdings.com
                </p>
              </div>
            </a>
          </div>

          <div className="mt-10 pt-8 border-t border-border/30">
            <p className="text-sm text-muted-foreground">
              All inquiries handled with the utmost discretion and professionalism.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
