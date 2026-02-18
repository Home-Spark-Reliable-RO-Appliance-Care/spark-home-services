import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Phone,
  CheckCircle2,
  Star,
  Users,
  Award,
  Clock,
  Shield,
  Wrench,
  ChevronRight,
  CalendarCheck,
  UserCheck,
  ThumbsUp,
  Zap,
  BadgeCheck,
} from "lucide-react";
import { SERVICES } from "@/lib/services-data";
import heroImg from "@/assets/hero-bg.jpg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import BrandMarquee from "@/components/BrandMarquee";
import AreasWeServe from "@/components/AreasWeServe";

const STATS = [
  { icon: Users, value: "1000+", label: "Happy Customers" },
  { icon: Award, value: "5+", label: "Years Experience" },
  { icon: Wrench, value: "5000+", label: "Services Completed" },
  { icon: Star, value: "4.8★", label: "Average Rating" },
];

const WHY_US = [
  { icon: BadgeCheck, title: "Certified Technicians", desc: "Trained & background-verified professionals" },
  { icon: Clock, title: "Same Day Service", desc: "Book now, get it fixed today" },
  { icon: Shield, title: "Genuine Spare Parts", desc: "Only OEM & branded parts used" },
  { icon: Zap, title: "Affordable Pricing", desc: "Transparent quotes, no hidden charges" },
  { icon: CheckCircle2, title: "Warranty on Service", desc: "Up to 90-day warranty on all repairs" },
  { icon: Star, title: "Trusted by 1000+", desc: "Rated 4.8★ by our happy customers" },
];

const STEPS = [
  { icon: CalendarCheck, title: "Book Service", desc: "Choose your service and book online or call us." },
  { icon: UserCheck, title: "Technician Visit", desc: "A certified expert arrives at your doorstep." },
  { icon: ThumbsUp, title: "Problem Solved", desc: "Quick diagnosis, repair, and quality check." },
];

const TESTIMONIALS = [
  { name: "Priya S.", text: "HomeSpark fixed my RO in under an hour. Very professional and affordable!", rating: 5 },
  { name: "Rahul M.", text: "The AC service was thorough. My AC is cooling like new. Highly recommend!", rating: 5 },
  { name: "Anjali K.", text: "Booked the AMC plan — zero hassle for the whole year. Great value!", rating: 5 },
  { name: "Suresh D.", text: "They replaced my washing machine motor same day. Excellent service!", rating: 4 },
];

const FAQS = [
  { q: "How quickly can you provide service?", a: "We offer same-day service for most requests. Book before 2 PM for same-day technician visit." },
  { q: "Do you provide warranty on repairs?", a: "Yes, all our repairs come with up to 90 days warranty on service and parts." },
  { q: "Which RO brands do you service?", a: "We service all major brands including Kent, Aquaguard, Pureit, Livpure, Blue Star, and more." },
  { q: "What are your AMC plan prices?", a: "AMC plans start from ₹1,499/year. Plans include free services, filter replacements, and priority scheduling." },
  { q: "Is there a visiting charge?", a: "There's a minimal inspection charge of ₹99–₹199 which gets adjusted against the service bill." },
  { q: "Do you handle emergency services?", a: "Yes! For urgent issues like water leakage or AC breakdown, we offer priority emergency response." },
];

export default function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Professional RO service technician" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/70" />
        </div>
        <div className="relative container py-20 md:py-32 text-primary-foreground">
          <div className="max-w-2xl animate-fade-up">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/20 backdrop-blur text-sm font-medium mb-6 border border-primary-foreground/20">
              <Zap className="w-4 h-4" /> Emergency &amp; Same-Day Service Available
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Expert RO &amp; Home Appliance Services at Your Doorstep
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 leading-relaxed">
              Fast, Affordable &amp; Trusted Technicians for water purifiers, ACs, washing machines, refrigerators &amp; more.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact">
                <Button size="lg" className="gradient-primary text-primary-foreground rounded-full px-8 text-base shadow-elevated hover:scale-105 transition-transform">
                  Book Service Now
                </Button>
              </Link>
              <a href="tel:9231421568">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full px-8 text-base bg-transparent border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 transition"
                >
                  <Phone className="w-4 h-4 mr-2" /> Call Now
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Marquee */}
      <BrandMarquee />

      {/* Stats */}
      <section className="relative -mt-8 z-10">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-card rounded-2xl shadow-elevated p-6 md:p-8">
            {STATS.map((s) => (
              <div key={s.label} className="text-center animate-count-up">
                <s.icon className="w-7 h-7 text-primary mx-auto mb-2" />
                <div className="font-display text-2xl md:text-3xl font-bold text-foreground">{s.value}</div>
                <div className="text-sm text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-muted-foreground text-lg">
              From RO water purifiers to home appliances — we've got you covered.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s) => (
              <Link
                key={s.slug}
                to="/services"
                className="group bg-card rounded-xl p-6 shadow-card hover:shadow-elevated transition-all hover:-translate-y-1 border border-border"
              >
                <div className="w-12 h-12 rounded-xl gradient-primary-soft flex items-center justify-center mb-4">
                  <s.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                  {s.title}
                </h3>
                <p className="text-muted-foreground text-sm">{s.short}</p>
                <span className="inline-flex items-center gap-1 text-primary text-sm font-medium mt-3">
                  Learn more <ChevronRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 gradient-primary-soft">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Why Choose HomeSpark?</h2>
            <p className="text-muted-foreground text-lg">We go above and beyond to deliver quality service you can trust.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_US.map((item) => (
              <div key={item.title} className="bg-card rounded-xl p-6 shadow-soft border border-border flex gap-4">
                <div className="w-11 h-11 rounded-lg gradient-primary flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-display font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-muted-foreground text-lg">Get your appliance fixed in 3 simple steps</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {STEPS.map((step, i) => (
              <div key={step.title} className="text-center relative">
                <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-4 shadow-soft">
                  <step.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 w-7 h-7 rounded-full bg-accent text-accent-foreground text-sm font-bold flex items-center justify-center shadow-soft">
                  {i + 1}
                </span>
                <h3 className="font-display font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AMC Pricing */}
      <section className="py-16 md:py-24 gradient-primary-soft">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">AMC Plans</h2>
            <p className="text-muted-foreground text-lg">Choose an annual maintenance plan for worry-free service</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { name: "Basic", price: "₹1,499", features: ["2 Free Services", "10% Off Repairs", "Phone Support"] },
              { name: "Standard", price: "₹2,499", features: ["3 Free Services", "1 Free Filter Change", "20% Off Repairs", "Priority Scheduling"], popular: true },
              { name: "Premium", price: "₹3,999", features: ["4 Free Services", "All Filters Included", "30% Off Repairs", "Emergency Support", "Extended Warranty"] },
            ].map((plan) => (
              <div
                key={plan.name}
                className={`bg-card rounded-2xl p-8 border-2 transition-all hover:-translate-y-1 ${
                  plan.popular ? "border-primary shadow-elevated relative" : "border-border shadow-card"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full gradient-primary text-primary-foreground text-xs font-semibold">
                    Most Popular
                  </span>
                )}
                <h3 className="font-display font-bold text-xl mb-1">{plan.name}</h3>
                <div className="font-display text-3xl font-extrabold text-primary mb-1">{plan.price}</div>
                <p className="text-sm text-muted-foreground mb-6">per year</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-success shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link to="/contact">
                  <Button
                    className={`w-full rounded-full ${
                      plan.popular ? "gradient-primary text-primary-foreground" : ""
                    }`}
                    variant={plan.popular ? "default" : "outline"}
                  >
                    Get {plan.name} Plan
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="bg-card rounded-xl p-6 shadow-card border border-border">
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-warning text-warning" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">"{t.text}"</p>
                <p className="font-semibold text-sm">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 gradient-primary-soft">
        <div className="container max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          </div>
          <Accordion type="single" collapsible className="space-y-3">
            {FAQS.map((f, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-card rounded-xl border border-border px-6 shadow-soft">
                <AccordionTrigger className="font-semibold text-left text-sm md:text-base">{f.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Areas We Serve */}
      <AreasWeServe />

      {/* CTA Banner */}
      <section className="py-16 md:py-20 gradient-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Need Urgent Help?</h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
            Our emergency team is ready to assist you. Book a service or call us now for immediate help.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="rounded-full px-8 text-base font-semibold">
                Book Service Now
              </Button>
            </Link>
            <a href="tel:9231421568">
              <Button size="lg" variant="secondary" className="rounded-full px-8 text-base font-semibold">
                <Phone className="w-4 h-4 mr-2" /> Call Now
              </Button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
