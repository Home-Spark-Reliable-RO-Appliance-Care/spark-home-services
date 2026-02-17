import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Phone } from "lucide-react";
import { SERVICES } from "@/lib/services-data";

export default function Services() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-primary text-primary-foreground py-16 md:py-20">
        <div className="container text-center">
          <h1 className="font-display text-4xl md:text-5xl font-extrabold mb-4">Our Services</h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Professional doorstep repair and maintenance for RO water purifiers and all major home appliances.
          </p>
        </div>
      </section>

      {/* Service Cards */}
      <section className="py-16 md:py-24">
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((s) => (
            <div
              key={s.slug}
              className="bg-card rounded-2xl p-7 shadow-card border border-border hover:shadow-elevated transition-all hover:-translate-y-1 flex flex-col"
            >
              <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-5">
                <s.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h2 className="font-display font-bold text-xl mb-2">{s.title}</h2>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{s.description}</p>
              <ul className="space-y-2 mb-6 flex-1">
                {s.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-success mt-0.5 shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
              <Link to="/contact">
                <Button className="w-full gradient-primary text-primary-foreground rounded-full">
                  Book Now
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 gradient-primary-soft">
        <div className="container text-center">
          <h2 className="font-display text-3xl font-bold mb-4">Can't find what you need?</h2>
          <p className="text-muted-foreground mb-6">Call us and we'll help you with any home appliance issue.</p>
          <a href="tel:9231421568">
            <Button size="lg" className="gradient-primary text-primary-foreground rounded-full px-8">
              <Phone className="w-4 h-4 mr-2" /> Call Now
            </Button>
          </a>
        </div>
      </section>
    </>
  );
}
