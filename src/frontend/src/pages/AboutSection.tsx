import SectionWrapper from "@/components/SectionWrapper";
import { Award, Shield, Star, Users, Wrench, Zap } from "lucide-react";
import { motion } from "motion/react";

const features = [
  {
    icon: Star,
    title: "Top Quality",
    desc: "Premium willow wood bats sourced from the best manufacturers. Every bat tested for quality.",
  },
  {
    icon: Shield,
    title: "Quality Guarantee",
    desc: "Return policy on defective products. We stand behind every bat we sell — no questions asked.",
  },
  {
    icon: Wrench,
    title: "Expert Repair & Binding",
    desc: "Professional cricket bat repair, re-gripping, and binding services by experienced craftsmen.",
  },
  {
    icon: Users,
    title: "Trusted Dealer",
    desc: "Trusted by 5000+ tennis cricket players across Lucknow for over a decade of service.",
  },
  {
    icon: Zap,
    title: "Affordable Prices",
    desc: "Best prices in Lucknow. Premium brands without the premium price tag — guaranteed.",
  },
  {
    icon: Award,
    title: "Largest Selection",
    desc: "Biggest collection of single & double blade tennis cricket bats in the entire region.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Text */}
          <SectionWrapper delay={0}>
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
              Our Story
            </p>
            <h2 className="font-display font-bold text-4xl lg:text-5xl text-foreground leading-tight mb-6">
              Lucknow's Most Trusted{" "}
              <span className="text-primary">Cricket Bat Shop</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                MS Sports is Lucknow's premier destination for tennis cricket
                equipment. Located in the heart of Khargpur, Gomti Nagar Vistar,
                we've been serving the cricket community with passion and
                expertise for years.
              </p>
              <p>
                We carry the{" "}
                <strong className="text-foreground">
                  largest selection of single &amp; double blade tennis cricket
                  bats
                </strong>{" "}
                in Lucknow — from budget-friendly options to premium wood bats
                with full guarantee. Every bat in our store is personally vetted
                for quality.
              </p>
              <p>
                Beyond sales, we offer{" "}
                <strong className="text-foreground">
                  professional cricket bat repair, re-gripping, and binding
                  services
                </strong>
                . Our craftsmen can revive your old bat or customize your grip
                for the perfect feel on the pitch.
              </p>
            </div>
          </SectionWrapper>

          {/* Image */}
          <SectionWrapper delay={150}>
            <div className="relative rounded-2xl overflow-hidden shadow-elevated hover-lift">
              <img
                src="/assets/generated/shop-interior.dim_800x500.jpg"
                alt="MS Sports store interior"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 bg-card/90 backdrop-blur-sm rounded-xl p-4">
                <p className="font-display font-bold text-foreground text-lg">
                  MS Sports — Gomti Nagar Vistar
                </p>
                <p className="text-muted-foreground text-sm">
                  Khargpur, Lucknow, Uttar Pradesh 226010
                </p>
              </div>
            </div>
          </SectionWrapper>
        </div>

        {/* Why choose us */}
        <SectionWrapper delay={100}>
          <div className="text-center mb-12">
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
              Why MS Sports?
            </p>
            <h3 className="font-display font-bold text-3xl lg:text-4xl text-foreground">
              6 Reasons Players Trust Us
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-card rounded-2xl p-6 border border-border shadow-luxury hover-lift group"
                data-ocid={`feature-card-${i}`}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-smooth">
                  <f.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-display font-bold text-foreground text-lg mb-2">
                  {f.title}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {f.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </SectionWrapper>
      </div>
    </section>
  );
}
