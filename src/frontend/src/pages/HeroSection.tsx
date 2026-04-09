import { Button } from "@/components/ui/button";
import { ChevronDown, MapPin, MessageCircle, Phone, Star } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

const WHATSAPP_URL =
  "https://wa.me/919876543210?text=Hi%20MS%20Sports%2C%20I%20want%20to%20know%20more%20about%20your%20cricket%20bats!";
const CALL_URL = "tel:+919876543210";
const MAP_URL =
  "https://www.google.com/maps/search/Khargpur+Gomti+Nagar+Vistar+Lucknow";

const taglines = [
  "Lucknow's #1 Tennis Cricket Bat Shop",
  "Premium Quality Bats & Expert Repair",
  "Top Brands at Affordable Prices",
];

export default function HeroSection() {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const [taglineIndex, setTaglineIndex] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      if (parallaxRef.current) {
        const scrolled = window.scrollY;
        parallaxRef.current.style.transform = `translateY(${scrolled * 0.4}px)`;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTaglineIndex((i) => (i + 1) % taglines.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col overflow-hidden"
    >
      {/* Parallax background */}
      <div className="absolute inset-0 parallax-base">
        <div
          ref={parallaxRef}
          className="absolute inset-0 scale-110"
          style={{
            backgroundImage:
              "url(/assets/generated/hero-banner.dim_1600x900.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center 30%",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-black/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent" />
      </div>

      {/* Hero content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-accent/90 text-accent-foreground px-4 py-1.5 rounded-full text-sm font-semibold mb-6 shadow-elevated"
          >
            <Star className="w-4 h-4 fill-current" />
            Trusted by 5000+ Players in Lucknow
          </motion.div>

          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mb-5"
          >
            {/* Gold accent bar */}
            <div className="w-16 h-1 bg-amber-400 rounded-full mb-4 shadow-[0_0_12px_rgba(251,191,36,0.6)]" />
            <h1
              className="font-display font-black text-white text-5xl sm:text-6xl lg:text-8xl leading-none tracking-tighter mb-3 uppercase"
              style={{
                textShadow:
                  "0 2px 24px rgba(0,0,0,0.6), 0 1px 4px rgba(0,0,0,0.8)",
              }}
            >
              MASTER
              <br />
              <span
                className="text-amber-400"
                style={{
                  textShadow:
                    "0 2px 30px rgba(251,191,36,0.4), 0 1px 4px rgba(0,0,0,0.8)",
                }}
              >
                THE PITCH.
              </span>
            </h1>
          </motion.div>

          {/* Rotating tagline */}
          <motion.div
            key={taglineIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <p
              className="text-amber-50 text-lg sm:text-xl lg:text-2xl font-body font-semibold leading-relaxed"
              style={{ textShadow: "0 1px 8px rgba(0,0,0,0.7)" }}
            >
              {taglines[taglineIndex]}
            </p>
            <p
              className="text-amber-100/80 text-base lg:text-lg mt-1"
              style={{ textShadow: "0 1px 6px rgba(0,0,0,0.6)" }}
            >
              Premium Quality · Expert Repair & Binding · Top Brands at
              Affordable Prices
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-3 mb-8"
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="hero-whatsapp-btn"
            >
              <Button
                size="lg"
                className="w-full sm:w-auto gap-2 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 text-base shadow-elevated hover:shadow-lg hover:scale-105 transition-smooth"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us
              </Button>
            </a>
            <a href={CALL_URL} data-ocid="hero-call-btn">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto gap-2 border-white/40 text-white hover:bg-white/10 hover:border-white font-semibold px-8 text-base transition-smooth"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </Button>
            </a>
            <a
              href={MAP_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="hero-visit-btn"
            >
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto gap-2 border-primary/50 text-primary-foreground hover:bg-primary/20 font-semibold px-8 text-base transition-smooth"
              >
                <MapPin className="w-5 h-5" />
                Visit Store
              </Button>
            </a>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="flex flex-wrap gap-4"
          >
            {[
              { value: "500+", label: "Bat Models" },
              { value: "5000+", label: "Happy Players" },
              { value: "10+", label: "Years Experience" },
              { value: "100%", label: "Quality Guarantee" },
            ].map((stat) => (
              <div
                key={stat.value}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-2.5 text-center min-w-[90px]"
              >
                <p className="font-display font-bold text-white text-xl leading-tight">
                  {stat.value}
                </p>
                <p className="text-white/70 text-xs">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="relative z-10 flex justify-center pb-8"
      >
        <button
          type="button"
          onClick={() =>
            document
              .querySelector("#about")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="text-white/60 hover:text-white transition-smooth animate-bounce"
          aria-label="Scroll to next section"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </motion.div>
    </section>
  );
}
