import SectionWrapper from "@/components/SectionWrapper";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MessageCircle, Sparkles, Star, Tag, TrendingUp } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const WHATSAPP_BASE =
  "https://wa.me/919876543210?text=Hi%20MS%20Sports%2C%20I%27m%20interested%20in%20";

type ProductBadge =
  | "Best Seller"
  | "New Arrival"
  | "Trending"
  | "Expert Service";

interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  price: string;
  image: string;
  badge: ProductBadge;
  guarantee: string;
}

const products: Product[] = [
  {
    id: "single-blade",
    name: "Single Blade Bat",
    category: "Bats",
    description:
      "Classic single-faced tennis cricket bat with premium willow wood. Perfect for powerful straight drives and hook shots.",
    price: "₹499 – ₹1,499",
    image: "/assets/generated/product-single-blade.dim_600x600.jpg",
    badge: "Best Seller",
    guarantee: "30-day return guarantee",
  },
  {
    id: "double-blade",
    name: "Double Blade Bat",
    category: "Bats",
    description:
      "Heavy-duty double-sided tennis cricket bat. Wider hitting surface for maximum power from both sides of the pitch.",
    price: "₹699 – ₹1,999",
    image: "/assets/generated/product-double-blade.dim_600x600.jpg",
    badge: "Trending",
    guarantee: "30-day return guarantee",
  },
  {
    id: "repair",
    name: "Bat Repair & Binding",
    category: "Service",
    description:
      "Professional cricket bat repair, grip replacement, and full re-binding by experienced craftsmen. Revive your favorite bat.",
    price: "Starting ₹99",
    image: "/assets/generated/service-repair.dim_600x400.jpg",
    badge: "Expert Service",
    guarantee: "Service satisfaction guaranteed",
  },
  {
    id: "cricket-balls",
    name: "Tennis Cricket Balls",
    category: "Equipment",
    description:
      "High-quality tennis cricket balls for practice and match play. Available in multiple colors and bounce options.",
    price: "₹49 – ₹199/pc",
    image: "/assets/generated/product-cricket-balls.dim_600x400.jpg",
    badge: "Best Seller",
    guarantee: "Premium quality",
  },
  {
    id: "grips",
    name: "Bat Grips",
    category: "Accessories",
    description:
      "Premium cricket bat handle grips in various colors and textures. Improve your hold and control at the crease.",
    price: "₹39 – ₹149/pc",
    image: "/assets/generated/product-grips.dim_600x400.jpg",
    badge: "New Arrival",
    guarantee: "Fits all bats",
  },
];

const badgeConfig: Record<
  ProductBadge,
  { color: string; icon: React.ComponentType<{ className?: string }> }
> = {
  "Best Seller": {
    color: "bg-accent/10 text-accent border-accent/30",
    icon: Star,
  },
  "New Arrival": {
    color: "bg-secondary/10 text-secondary-foreground border-secondary/30",
    icon: Sparkles,
  },
  Trending: {
    color: "bg-primary/10 text-primary border-primary/30",
    icon: TrendingUp,
  },
  "Expert Service": {
    color: "bg-muted text-muted-foreground border-border",
    icon: Tag,
  },
};

function ProductCard({ product, index }: { product: Product; index: number }) {
  const cfg = badgeConfig[product.badge];
  const whatsappMsg = `${WHATSAPP_BASE}${encodeURIComponent(product.name)}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="bg-card rounded-2xl overflow-hidden border border-border shadow-luxury group hover-lift"
      data-ocid={`product-card-${product.id}`}
    >
      <div className="relative overflow-hidden h-52">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
        />
        <div className="absolute top-3 left-3">
          <span
            className={`inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full border backdrop-blur-sm ${cfg.color}`}
          >
            <cfg.icon className="w-3 h-3" />
            {product.badge}
          </span>
        </div>
        <div className="absolute bottom-3 right-3">
          <span className="bg-card/90 backdrop-blur-sm text-foreground text-sm font-bold px-3 py-1.5 rounded-xl shadow">
            {product.price}
          </span>
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-display font-bold text-foreground text-lg leading-tight">
            {product.name}
          </h3>
          <Badge variant="outline" className="text-xs flex-shrink-0">
            {product.category}
          </Badge>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed mb-3">
          {product.description}
        </p>
        <p className="text-xs text-accent font-medium mb-4 flex items-center gap-1">
          <Tag className="w-3 h-3" />
          {product.guarantee}
        </p>
        <a
          href={whatsappMsg}
          target="_blank"
          rel="noopener noreferrer"
          data-ocid={`product-inquiry-${product.id}`}
        >
          <Button
            className="w-full gap-2 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold transition-smooth"
            size="sm"
          >
            <MessageCircle className="w-4 h-4" />
            Ask on WhatsApp
          </Button>
        </a>
      </div>
    </motion.div>
  );
}

export default function ProductsSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = ["All", "Bats", "Service", "Equipment", "Accessories"];

  const filtered =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <section id="products" className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionWrapper>
          <div className="text-center mb-12">
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
              Our Products & Services
            </p>
            <h2 className="font-display font-bold text-4xl lg:text-5xl text-foreground leading-tight mb-4">
              Everything You Need <br className="hidden sm:block" />
              <span className="text-primary">to Play Your Best</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Top-quality cricket bats, balls, grips, and professional repair
              services — all under one roof at the best prices.
            </p>
          </div>

          {/* Category filter */}
          <div
            className="flex flex-wrap justify-center gap-2 mb-10"
            id="services"
            role="tablist"
            aria-label="Product categories"
          >
            {categories.map((cat) => (
              <button
                type="button"
                key={cat}
                onClick={() => setActiveCategory(cat)}
                role="tab"
                aria-selected={activeCategory === cat}
                data-ocid={`category-filter-${cat.toLowerCase()}`}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-smooth border ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground border-primary shadow-elevated"
                    : "bg-card text-muted-foreground border-border hover:border-primary/40 hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </SectionWrapper>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>

        <SectionWrapper delay={200}>
          <div className="mt-12 rounded-2xl overflow-hidden bg-gradient-to-r from-primary/90 to-secondary/90 p-8 lg:p-10 text-center shadow-elevated">
            <h3 className="font-display font-bold text-primary-foreground text-2xl lg:text-3xl mb-3">
              Don't See What You're Looking For?
            </h3>
            <p className="text-primary-foreground/80 mb-6 text-base">
              We have 500+ bat models in store. WhatsApp us with your
              requirements and we'll find the perfect bat for you.
            </p>
            <a
              href="https://wa.me/919876543210?text=Hi%20MS%20Sports%2C%20I%27m%20looking%20for%20a%20specific%20bat%20model"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="products-custom-inquiry-btn"
            >
              <Button
                size="lg"
                className="gap-2 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-elevated hover:scale-105 transition-smooth"
              >
                <MessageCircle className="w-5 h-5" />
                Ask for Custom Order
              </Button>
            </a>
          </div>
        </SectionWrapper>
      </div>
    </section>
  );
}
