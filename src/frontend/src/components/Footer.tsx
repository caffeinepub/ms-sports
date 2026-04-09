import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/919876543210?text=Hi%20MS%20Sports%2C%20I%20want%20to%20know%20more!";

export default function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";

  return (
    <footer className="bg-card border-t border-border pt-12 pb-20 lg:pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-sm">
                  MS
                </span>
              </div>
              <div>
                <p className="font-display font-bold text-foreground">
                  MS Sports
                </p>
                <p className="text-xs text-muted-foreground">
                  Lucknow's #1 Bat Shop
                </p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Premium tennis cricket bats, expert repair &amp; binding. Trusted
              by players across Lucknow since years.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {[
                ["Home", "#home"],
                ["About Us", "#about"],
                ["Products", "#products"],
                ["Services", "#services"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <li key={href}>
                  <button
                    type="button"
                    onClick={() =>
                      document
                        .querySelector(href)
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="hover:text-accent transition-smooth"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">
              Contact Us
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                <span>Khargpur, Gomti Nagar Vistar, Lucknow, UP 226010</span>
              </li>
              <li>
                <a
                  href="tel:+919876543210"
                  className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-smooth"
                >
                  <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                  +91 98765 43210
                </a>
              </li>
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-smooth"
                >
                  <MessageCircle className="w-4 h-4 text-accent flex-shrink-0" />
                  WhatsApp Chat
                </a>
              </li>
              <li>
                <a
                  href="mailto:mssports.lko@gmail.com"
                  className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-smooth"
                >
                  <Mail className="w-4 h-4 text-accent flex-shrink-0" />
                  mssports.lko@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {year} MS Sports. All rights reserved.</p>
          <p>
            Built with love using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-smooth underline-offset-2 hover:underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
