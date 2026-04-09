import { Button } from "@/components/ui/button";
import { Gift, MessageCircle, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const WHATSAPP_URL =
  "https://wa.me/919876543210?text=Hi%20MS%20Sports%2C%20I%20want%20to%20claim%20my%2010%25%20discount!";

export default function DiscountPopup() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(() => {
    try {
      return localStorage.getItem("ms_popup_dismissed") === "true";
    } catch {
      return false;
    }
  });

  useEffect(() => {
    if (dismissed) return;
    const timer = setTimeout(() => {
      setVisible(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, [dismissed]);

  const dismiss = () => {
    setVisible(false);
    setDismissed(true);
    try {
      localStorage.setItem("ms_popup_dismissed", "true");
    } catch {
      // ignore storage errors
    }
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 80, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 80, scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-20 lg:bottom-8 left-4 right-4 lg:left-auto lg:right-24 lg:w-96 z-50 bg-card rounded-2xl shadow-elevated border border-accent/30 overflow-hidden"
          data-ocid="discount-popup"
        >
          <div className="relative bg-gradient-to-br from-accent/10 via-card to-primary/5 p-5">
            <button
              onClick={dismiss}
              type="button"
              className="absolute top-3 right-3 text-muted-foreground hover:text-foreground transition-smooth p-1 rounded-full hover:bg-muted"
              aria-label="Close offer popup"
              data-ocid="popup-close-btn"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0">
                <Gift className="w-6 h-6 text-accent" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-1">
                  Limited Time Offer
                </p>
                <h3 className="font-display font-bold text-foreground text-lg leading-tight mb-1">
                  10% Off for First-Time Visitors!
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Message on WhatsApp today & get your exclusive discount on any
                  cricket bat purchase.
                </p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid="popup-whatsapp-btn"
                >
                  <Button className="w-full gap-2 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                    <MessageCircle className="w-4 h-4" />
                    Claim 10% Off Now
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
