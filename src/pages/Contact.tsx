import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, MessageCircle, MapPin, Send, CheckCircle2 } from "lucide-react";
import { SERVICES } from "@/lib/services-data";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  phone: z.string().trim().min(10, "Enter a valid phone number").max(15),
  service: z.string().min(1, "Select a service"),
  address: z.string().trim().min(1, "Address is required").max(500),
  message: z.string().max(1000).optional(),
});

const PHONE = "1234567890";
const WHATSAPP = "911234567890";

export default function Contact() {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [service, setService] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = {
      name: fd.get("name") as string,
      phone: fd.get("phone") as string,
      service,
      address: fd.get("address") as string,
      message: fd.get("message") as string,
    };

    const result = contactSchema.safeParse(data);
    if (!result.success) {
      const errs: Record<string, string> = {};
      result.error.issues.forEach((iss) => {
        errs[iss.path[0] as string] = iss.message;
      });
      setErrors(errs);
      return;
    }

    setErrors({});
    setSubmitted(true);
    toast({ title: "Booking Received!", description: "We'll contact you shortly to confirm your service." });
  };

  return (
    <>
      {/* Hero */}
      <section className="gradient-primary text-primary-foreground py-16 md:py-20">
        <div className="container text-center">
          <h1 className="font-display text-4xl md:text-5xl font-extrabold mb-4">Contact Us</h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Book a service or reach out to us — we're here to help!
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container max-w-6xl">
          <div className="grid md:grid-cols-5 gap-10">
            {/* Form */}
            <div className="md:col-span-3">
              <div className="bg-card rounded-2xl p-8 shadow-card border border-border">
                <h2 className="font-display text-2xl font-bold mb-6">Book a Service</h2>
                {submitted ? (
                  <div className="text-center py-12">
                    <CheckCircle2 className="w-16 h-16 text-success mx-auto mb-4" />
                    <h3 className="font-display text-xl font-bold mb-2">Thank You!</h3>
                    <p className="text-muted-foreground">We've received your request and will call you shortly.</p>
                    <Button className="mt-6 rounded-full gradient-primary text-primary-foreground" onClick={() => setSubmitted(false)}>
                      Book Another Service
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" name="name" placeholder="Your name" className="mt-1.5" />
                      {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" name="phone" type="tel" placeholder="+91 XXXXXXXXXX" className="mt-1.5" />
                      {errors.phone && <p className="text-destructive text-xs mt-1">{errors.phone}</p>}
                    </div>
                    <div>
                      <Label>Service Required</Label>
                      <Select value={service} onValueChange={setService}>
                        <SelectTrigger className="mt-1.5">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          {SERVICES.map((s) => (
                            <SelectItem key={s.slug} value={s.slug}>
                              {s.title}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors.service && <p className="text-destructive text-xs mt-1">{errors.service}</p>}
                    </div>
                    <div>
                      <Label htmlFor="address">Address</Label>
                      <Textarea id="address" name="address" placeholder="Your complete address" className="mt-1.5" rows={3} />
                      {errors.address && <p className="text-destructive text-xs mt-1">{errors.address}</p>}
                    </div>
                    <div>
                      <Label htmlFor="message">Additional Notes (Optional)</Label>
                      <Textarea id="message" name="message" placeholder="Describe the issue..." className="mt-1.5" rows={3} />
                    </div>
                    <Button type="submit" size="lg" className="w-full gradient-primary text-primary-foreground rounded-full">
                      <Send className="w-4 h-4 mr-2" /> Submit Booking
                    </Button>
                  </form>
                )}
              </div>
            </div>

            {/* Contact Info */}
            <div className="md:col-span-2 space-y-6">
              <div className="bg-card rounded-2xl p-7 shadow-card border border-border">
                <h3 className="font-display font-bold text-lg mb-4">Get In Touch</h3>
                <div className="space-y-4">
                  <a href={`tel:${PHONE}`} className="flex items-center gap-3 p-3 rounded-xl bg-secondary hover:bg-secondary/80 transition">
                    <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center">
                      <Phone className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold">Call Us</div>
                      <div className="text-xs text-muted-foreground">+91-{PHONE}</div>
                    </div>
                  </a>
                  <a
                    href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Hi, I'd like to book a home service.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-xl bg-secondary hover:bg-secondary/80 transition"
                  >
                    <div className="w-10 h-10 rounded-lg bg-success flex items-center justify-center">
                      <MessageCircle className="w-5 h-5 text-success-foreground" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold">WhatsApp</div>
                      <div className="text-xs text-muted-foreground">Chat with us instantly</div>
                    </div>
                  </a>
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-secondary">
                    <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-accent-foreground" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold">Service Area</div>
                      <div className="text-xs text-muted-foreground">Your City, India</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-card rounded-2xl overflow-hidden shadow-card border border-border">
                <div className="h-48 bg-muted flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <MapPin className="w-8 h-8 mx-auto mb-2" />
                    <p className="text-sm font-medium">Map Placeholder</p>
                    <p className="text-xs">Embed your Google Maps here</p>
                  </div>
                </div>
              </div>

              {/* Trust */}
              <div className="bg-card rounded-2xl p-6 shadow-card border border-border text-center">
                <p className="text-sm font-semibold mb-2">🛡️ 100% Satisfaction Guaranteed</p>
                <p className="text-xs text-muted-foreground">Certified technicians • Genuine parts • 90-day warranty</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
