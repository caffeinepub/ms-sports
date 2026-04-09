import SectionWrapper from "@/components/SectionWrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Clock, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const WHATSAPP_URL =
  "https://wa.me/919876543210?text=Hi%20MS%20Sports%2C%20I%20want%20to%20know%20more!";
const CALL_URL = "tel:+919876543210";
const MAP_EMBED =
  "https://maps.google.com/maps?q=Khargpur+Gomti+Nagar+Vistar+Lucknow+Uttar+Pradesh+India&output=embed";

interface FormState {
  name: string;
  phone: string;
  message: string;
}

export default function ContactSection() {
  const [form, setForm] = useState<FormState>({
    name: "",
    phone: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) {
      toast.error("Please enter your name and phone number.");
      return;
    }
    setSubmitting(true);
    // Simulate send
    await new Promise((r) => setTimeout(r, 1000));
    const msg = `Hi MS Sports, I'm ${form.name}. My number is ${form.phone}. ${form.message}`;
    const waUrl = `https://wa.me/919876543210?text=${encodeURIComponent(msg)}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");
    toast.success("Redirecting to WhatsApp! We'll reply within minutes.");
    setForm({ name: "", phone: "", message: "" });
    setSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionWrapper>
          <div className="text-center mb-14">
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
              Get In Touch
            </p>
            <h2 className="font-display font-bold text-4xl lg:text-5xl text-foreground mb-4">
              Visit Us or <span className="text-primary">Send a Message</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We're open 7 days a week. Come visit our store in Gomti Nagar
              Vistar or reach us instantly on WhatsApp.
            </p>
          </div>
        </SectionWrapper>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12">
          {/* Contact info */}
          <SectionWrapper delay={0}>
            <div className="space-y-6">
              {[
                {
                  icon: MapPin,
                  title: "Store Address",
                  content:
                    "Khargpur, Gomti Nagar Vistar\nLucknow, Uttar Pradesh 226010",
                  href: "https://www.google.com/maps/search/Khargpur+Gomti+Nagar+Vistar+Lucknow+Uttar+Pradesh+India",
                  label: "Get Directions",
                  ocid: "contact-address",
                },
                {
                  icon: Phone,
                  title: "Call Us",
                  content: "+91 98765 43210\nAvailable 10 AM – 9 PM",
                  href: CALL_URL,
                  label: "Call Now",
                  ocid: "contact-call",
                },
                {
                  icon: MessageCircle,
                  title: "WhatsApp",
                  content: "+91 98765 43210\nInstant reply guaranteed",
                  href: WHATSAPP_URL,
                  label: "Chat Now",
                  ocid: "contact-whatsapp",
                },
                {
                  icon: Mail,
                  title: "Email",
                  content: "mssports.lko@gmail.com\nWe reply within 24 hours",
                  href: "mailto:mssports.lko@gmail.com",
                  label: "Send Email",
                  ocid: "contact-email",
                },
                {
                  icon: Clock,
                  title: "Store Hours",
                  content: "Monday – Sunday\n10:00 AM – 9:00 PM",
                  href: null,
                  label: null,
                  ocid: "contact-hours",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-4 p-4 bg-card rounded-2xl border border-border hover:border-primary/20 transition-smooth"
                  data-ocid={item.ocid}
                >
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-display font-semibold text-foreground text-sm mb-1">
                      {item.title}
                    </p>
                    <p className="text-muted-foreground text-sm whitespace-pre-line leading-relaxed">
                      {item.content}
                    </p>
                    {item.href && item.label && (
                      <a
                        href={item.href}
                        target={
                          item.href.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                          item.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="inline-block mt-2 text-accent text-sm font-semibold hover:underline transition-smooth"
                      >
                        {item.label} →
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </SectionWrapper>

          {/* Contact form */}
          <SectionWrapper delay={150}>
            <div className="bg-card rounded-2xl border border-border p-6 lg:p-8 shadow-luxury">
              <h3 className="font-display font-bold text-foreground text-xl mb-2">
                Send Us a Message
              </h3>
              <p className="text-muted-foreground text-sm mb-6">
                We'll connect you via WhatsApp instantly.
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Your Name</Label>
                  <Input
                    id="name"
                    placeholder="Rahul Sharma"
                    value={form.name}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, name: e.target.value }))
                    }
                    required
                    data-ocid="contact-form-name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={form.phone}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, phone: e.target.value }))
                    }
                    required
                    data-ocid="contact-form-phone"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message (Optional)</Label>
                  <Textarea
                    id="message"
                    placeholder="I'm looking for a double blade bat under ₹1,000..."
                    value={form.message}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, message: e.target.value }))
                    }
                    rows={4}
                    data-ocid="contact-form-message"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={submitting}
                  className="w-full gap-2 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-elevated transition-smooth"
                  size="lg"
                  data-ocid="contact-form-submit"
                >
                  {submitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-accent-foreground/30 border-t-accent-foreground rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send via WhatsApp
                    </>
                  )}
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  💬 This will open WhatsApp with your pre-filled message for
                  instant reply.
                </p>
              </form>
            </div>
          </SectionWrapper>
        </div>

        {/* Map */}
        <SectionWrapper delay={200}>
          <div className="rounded-2xl overflow-hidden border border-border shadow-luxury h-64 lg:h-80 bg-muted flex items-center justify-center">
            <iframe
              src={MAP_EMBED}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="MS Sports Location – Khargpur, Gomti Nagar Vistar, Lucknow"
              className="w-full h-full"
              data-ocid="contact-map"
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="contact-whatsapp-cta"
            >
              <Button
                size="lg"
                className="w-full sm:w-auto gap-2 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-elevated hover:scale-105 transition-smooth"
              >
                <MessageCircle className="w-5 h-5" />
                Message & Get 10% Off Today!
              </Button>
            </a>
            <a href={CALL_URL} data-ocid="contact-call-cta">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto gap-2 border-primary/40 text-primary hover:bg-primary/10 font-semibold transition-smooth"
              >
                <Phone className="w-5 h-5" />
                Call +91 98765 43210
              </Button>
            </a>
          </div>
        </SectionWrapper>
      </div>
    </section>
  );
}
