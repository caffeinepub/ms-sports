import { MessageCircle, Phone } from "lucide-react";
import { motion } from "motion/react";

const WHATSAPP_URL =
  "https://wa.me/919876543210?text=Hi%20MS%20Sports%2C%20I%20want%20to%20know%20more%20about%20your%20cricket%20bats!";
const CALL_URL = "tel:+919876543210";

export default function FloatingCTA() {
  return (
    <>
      {/* Desktop floating side buttons */}
      <div className="hidden lg:flex fixed right-6 bottom-12 z-40 flex-col gap-3">
        <motion.a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          data-ocid="float-whatsapp-btn"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="flex items-center gap-2 bg-[oklch(var(--whatsapp-green))] text-white px-4 py-3 rounded-full shadow-elevated hover:shadow-lg hover:scale-105 transition-smooth text-sm font-semibold"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-5 h-5" />
          <span>WhatsApp</span>
        </motion.a>
        <motion.a
          href={CALL_URL}
          data-ocid="float-call-btn"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.7, duration: 0.5 }}
          className="flex items-center gap-2 bg-accent text-accent-foreground px-4 py-3 rounded-full shadow-elevated hover:shadow-lg hover:scale-105 transition-smooth text-sm font-semibold"
          aria-label="Call us now"
        >
          <Phone className="w-5 h-5" />
          <span>Call Now</span>
        </motion.a>
      </div>

      {/* Mobile sticky bottom bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-card/95 backdrop-blur-sm border-t border-border shadow-elevated">
        <div className="flex items-stretch h-16">
          <a
            href={CALL_URL}
            data-ocid="mobile-float-call-btn"
            className="flex-1 flex items-center justify-center gap-2 bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-smooth"
            aria-label="Call MS Sports"
          >
            <Phone className="w-5 h-5" />
            <span>Call Now</span>
          </a>
          <div className="w-px bg-border" />
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="mobile-float-whatsapp-btn"
            className="flex-1 flex items-center justify-center gap-2 bg-accent text-accent-foreground font-semibold text-sm hover:bg-accent/90 transition-smooth"
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle className="w-5 h-5" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </>
  );
}
