import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, MessageCircle, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const WHATSAPP_URL =
  "https://wa.me/919876543210?text=Hi%20MS%20Sports%2C%20I%20want%20to%20know%20more%20about%20your%20cricket%20bats!";
const CALL_URL = "tel:+919876543210";

export default function StickyHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      data-ocid="sticky-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-card/95 backdrop-blur-md shadow-elevated border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <button
            type="button"
            onClick={() => handleNav("#home")}
            className="flex items-center gap-2 group"
            aria-label="MS Sports Home"
          >
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-luxury group-hover:scale-105 transition-smooth">
              <span className="text-primary-foreground font-display font-bold text-sm">
                MS
              </span>
            </div>
            <div className="flex flex-col leading-none">
              <span
                className={`font-display font-bold text-lg leading-tight transition-colors ${scrolled ? "text-foreground" : "text-white"}`}
              >
                MS Sports
              </span>
              <span
                className={`text-xs font-body transition-colors ${scrolled ? "text-muted-foreground" : "text-white/70"}`}
              >
                Lucknow's #1 Bat Shop
              </span>
            </div>
          </button>

          {/* Desktop nav */}
          <nav
            className="hidden lg:flex items-center gap-1"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => (
              <button
                type="button"
                key={link.href}
                onClick={() => handleNav(link.href)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-smooth hover:bg-accent/10 hover:text-accent ${
                  scrolled
                    ? "text-foreground"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a href={CALL_URL} data-ocid="header-call-btn">
              <Button
                variant="outline"
                size="sm"
                className="gap-2 border-primary/40 text-primary hover:bg-primary/10 transition-smooth"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </Button>
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="header-whatsapp-btn"
            >
              <Button
                size="sm"
                className="gap-2 bg-accent hover:bg-accent/90 text-accent-foreground shadow-elevated transition-smooth"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </Button>
            </a>
          </div>

          {/* Mobile menu */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <button
                type="button"
                className={`lg:hidden p-2 rounded-lg transition-smooth ${scrolled ? "text-foreground" : "text-white"}`}
                aria-label="Open mobile menu"
                data-ocid="mobile-menu-btn"
              >
                {mobileOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72 bg-card pt-12">
              <div className="flex flex-col gap-1 mb-8">
                {navLinks.map((link) => (
                  <button
                    type="button"
                    key={link.href}
                    onClick={() => handleNav(link.href)}
                    className="w-full text-left px-4 py-3 rounded-xl text-base font-medium text-foreground hover:bg-accent/10 hover:text-accent transition-smooth"
                    data-ocid={`mobile-nav-${link.label.toLowerCase()}`}
                  >
                    {link.label}
                  </button>
                ))}
              </div>
              <div className="flex flex-col gap-3">
                <a
                  href={CALL_URL}
                  className="w-full"
                  data-ocid="mobile-call-btn"
                >
                  <Button
                    variant="outline"
                    className="w-full gap-2 border-primary/40 text-primary"
                  >
                    <Phone className="w-4 h-4" />
                    Call Now
                  </Button>
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                  data-ocid="mobile-whatsapp-btn"
                >
                  <Button className="w-full gap-2 bg-accent text-accent-foreground">
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp Us
                  </Button>
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
