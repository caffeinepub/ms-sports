import SectionWrapper from "@/components/SectionWrapper";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const testimonials = [
  {
    id: "t1",
    name: "Rahul Mishra",
    location: "Gomti Nagar, Lucknow",
    rating: 5,
    avatar:
      "https://ui-avatars.com/api/?name=RM&background=e57c2a&color=fff&size=128",
    text: "MS Sports has the best collection of double blade bats in entire Lucknow! Got my bat at an unbeatable price. Feels amazing on the pitch. Highly recommended!",
    product: "Double Blade Bat",
  },
  {
    id: "t2",
    name: "Arjun Singh",
    location: "Aliganj, Lucknow",
    rating: 5,
    avatar:
      "https://ui-avatars.com/api/?name=AS&background=2e7d32&color=fff&size=128",
    text: "Excellent repair service! My bat handle was cracked and they repaired it within 30 minutes with a premium new grip. Plays like a brand new bat now. Very affordable too.",
    product: "Bat Repair Service",
  },
  {
    id: "t3",
    name: "Prateek Yadav",
    location: "Vikas Nagar, Lucknow",
    rating: 5,
    avatar:
      "https://ui-avatars.com/api/?name=PY&background=b5651d&color=fff&size=128",
    text: "Came here for cricket balls and ended up buying a single blade bat too! The quality is genuinely top-notch and the owner is very knowledgeable. This is my go-to cricket shop now.",
    product: "Single Blade Bat + Balls",
  },
  {
    id: "t4",
    name: "Vikram Chaudhary",
    location: "Indira Nagar, Lucknow",
    rating: 5,
    avatar:
      "https://ui-avatars.com/api/?name=VC&background=c0392b&color=fff&size=128",
    text: "Been buying from MS Sports for 3 years now. Never disappointed once. The guarantee on their wood bats is real — returned one defective bat and got immediate replacement. Absolute trust!",
    product: "Premium Wood Bat",
  },
  {
    id: "t5",
    name: "Saurav Gupta",
    location: "Sector 16, Gomti Nagar",
    rating: 5,
    avatar:
      "https://ui-avatars.com/api/?name=SG&background=1565c0&color=fff&size=128",
    text: "Best bat grips selection in Lucknow! Got a pack of 5 different grips and the quality is excellent. The shop also helped me apply the grip properly. Super friendly service!",
    product: "Cricket Bat Grips",
  },
];

const STARS = [1, 2, 3, 4, 5] as const;

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {STARS.map((n) => (
        <Star
          key={n}
          className={`w-4 h-4 ${n <= rating ? "fill-accent text-accent" : "text-muted-foreground"}`}
        />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((i) => (i + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () =>
    setActive((i) => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive((i) => (i + 1) % testimonials.length);

  return (
    <section
      id="testimonials"
      className="py-20 lg:py-28 bg-muted/30 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionWrapper>
          <div className="text-center mb-14">
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
              Social Proof
            </p>
            <h2 className="font-display font-bold text-4xl lg:text-5xl text-foreground mb-4">
              What Players Say <span className="text-primary">About Us</span>
            </h2>
            <div className="flex items-center justify-center gap-2">
              <div className="flex">
                {STARS.map((n) => (
                  <Star key={n} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <span className="text-foreground font-semibold">4.9/5</span>
              <span className="text-muted-foreground text-sm">
                from 200+ reviews
              </span>
            </div>
          </div>
        </SectionWrapper>

        {/* Main testimonial */}
        <div className="max-w-3xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonials[active].id}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4 }}
              className="bg-card rounded-3xl p-8 lg:p-10 border border-border shadow-elevated text-center"
              data-ocid="testimonial-card"
            >
              <Quote className="w-8 h-8 text-primary/30 mx-auto mb-6" />
              <p className="text-foreground text-lg lg:text-xl leading-relaxed font-medium mb-8">
                "{testimonials[active].text}"
              </p>
              <div className="flex items-center justify-center gap-4">
                <img
                  src={testimonials[active].avatar}
                  alt={testimonials[active].name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-primary/30"
                />
                <div className="text-left">
                  <p className="font-display font-bold text-foreground">
                    {testimonials[active].name}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {testimonials[active].location}
                  </p>
                  <div className="mt-1">
                    <StarRating rating={testimonials[active].rating} />
                  </div>
                </div>
                <div className="ml-4 hidden sm:block">
                  <span className="bg-accent/10 text-accent text-xs font-semibold px-3 py-1.5 rounded-full border border-accent/20">
                    Bought: {testimonials[active].product}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              type="button"
              onClick={prev}
              className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:bg-muted transition-smooth shadow-sm"
              aria-label="Previous testimonial"
              data-ocid="testimonial-prev-btn"
            >
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((t, i) => (
                <button
                  type="button"
                  key={t.id}
                  onClick={() => setActive(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === active
                      ? "w-6 bg-primary"
                      : "w-2 bg-border hover:bg-muted-foreground"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                  data-ocid={`testimonial-dot-${t.id}`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={next}
              className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:bg-muted transition-smooth shadow-sm"
              aria-label="Next testimonial"
              data-ocid="testimonial-next-btn"
            >
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button>
          </div>
        </div>

        {/* Mini cards row */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 mt-10">
          {testimonials.map((t, i) => (
            <button
              type="button"
              key={t.id}
              onClick={() => setActive(i)}
              data-ocid={`testimonial-mini-${t.id}`}
              className={`text-left p-4 rounded-xl border transition-smooth ${
                i === active
                  ? "bg-card border-primary/40 shadow-luxury"
                  : "bg-card border-border hover:border-primary/20 opacity-70 hover:opacity-100"
              }`}
            >
              <StarRating rating={t.rating} />
              <p className="text-xs text-muted-foreground mt-2 line-clamp-2">
                {t.text}
              </p>
              <p className="text-xs font-semibold text-foreground mt-2">
                {t.name}
              </p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
