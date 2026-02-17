import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Heart, Target, Users, Award, CheckCircle2 } from "lucide-react";

const VALUES = [
  { icon: ShieldCheck, title: "Quality First", desc: "We use only genuine spare parts and follow industry-standard procedures for every service." },
  { icon: Heart, title: "Customer Satisfaction", desc: "Your satisfaction is our priority. We don't leave until the job is done right." },
  { icon: Target, title: "Reliability", desc: "On-time, every time. We respect your schedule and deliver as promised." },
];

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-primary text-primary-foreground py-16 md:py-20">
        <div className="container text-center">
          <h1 className="font-display text-4xl md:text-5xl font-extrabold mb-4">About HomeSpark</h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Reliable RO &amp; Appliance Care at Your Doorstep — Trusted by 1000+ families.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 md:py-24">
        <div className="container max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                At HomeSpark, we believe every home deserves access to reliable, affordable, and professional appliance care. Founded with a simple goal — to bring expert technicians to your doorstep — we've grown into a trusted name serving over 1,000 happy customers.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                From RO water purifiers to ACs, washing machines, and beyond, our certified technicians handle it all with care, transparency, and a commitment to excellence.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Users, value: "1000+", label: "Customers Served" },
                { icon: Award, value: "5+", label: "Years of Trust" },
                { icon: CheckCircle2, value: "5000+", label: "Services Done" },
                { icon: ShieldCheck, value: "90 Days", label: "Service Warranty" },
              ].map((s) => (
                <div key={s.label} className="bg-card rounded-xl p-5 shadow-card border border-border text-center">
                  <s.icon className="w-7 h-7 text-primary mx-auto mb-2" />
                  <div className="font-display text-xl font-bold">{s.value}</div>
                  <div className="text-xs text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 gradient-primary-soft">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold mb-4">What We Stand For</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {VALUES.map((v) => (
              <div key={v.title} className="bg-card rounded-xl p-7 shadow-card border border-border text-center">
                <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mx-auto mb-4">
                  <v.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-display font-bold text-lg mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 gradient-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="font-display text-3xl font-bold mb-4">Ready to Experience the HomeSpark Difference?</h2>
          <Link to="/contact">
            <Button size="lg" variant="secondary" className="rounded-full px-8 text-base font-semibold">
              Book a Service Today
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
