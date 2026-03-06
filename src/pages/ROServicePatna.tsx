import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Phone,
  CheckCircle2,
  Droplets,
  Wrench,
  Settings,
  Shield,
  Clock,
  BadgeCheck,
  MapPin,
  Star,
  Zap,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const SERVICES = [
  {
    icon: Wrench,
    title: "RO Repair Service",
    desc: "Expert diagnosis and repair of all RO water purifier issues including motor, pump, and membrane problems.",
  },
  {
    icon: Droplets,
    title: "RO Filter Replacement",
    desc: "Genuine filter replacement for sediment, carbon, and RO membranes to ensure pure drinking water.",
  },
  {
    icon: Settings,
    title: "RO Installation",
    desc: "Professional installation of new RO water purifiers with proper setup and water quality testing.",
  },
  {
    icon: Shield,
    title: "RO Maintenance",
    desc: "Complete servicing including sanitization, filter cleaning, and performance optimization.",
  },
  {
    icon: BadgeCheck,
    title: "AMC Plans",
    desc: "Annual maintenance contracts with priority support, free services, and discounted repairs.",
  },
];

const PRICING = [
  { service: "Basic Inspection", price: "₹149" },
  { service: "Filter Cleaning", price: "₹249" },
  { service: "RO Repair Service", price: "₹299" },
  { service: "Full RO Maintenance", price: "₹399" },
];

const BRANDS = [
  "Kent",
  "Aquaguard",
  "Livpure",
  "Pureit",
  "Blue Star",
  "AO Smith",
  "Havells",
  "LG",
  "Whirlpool",
  "Eureka Forbes",
];

const SERVICE_AREAS = [
  "Danapur",
  "Kankarbagh",
  "Boring Road",
  "Bailey Road",
  "Patliputra",
  "Phulwari Sharif",
  "Anisabad",
  "Rajendra Nagar",
  "Ashiana Nagar",
  "Fraser Road",
  "Kurji",
  "Gandhi Maidan",
];

const FAQS = [
  {
    q: "What is the cost of RO service in Patna?",
    a: "RO service starts at ₹149 with HomeSpark technicians. Basic inspection is ₹149, filter cleaning ₹249, repairs ₹299, and full maintenance ₹399.",
  },
  {
    q: "Do you provide same-day RO repair in Patna?",
    a: "Yes, HomeSpark provides same-day RO service in most areas of Patna. Book before 2 PM for same-day technician visit.",
  },
  {
    q: "Which RO brands do you repair?",
    a: "We repair all major brands including Kent, Aquaguard, Livpure, Pureit, Blue Star, AO Smith, Havells, LG, Whirlpool, and Eureka Forbes.",
  },
  {
    q: "How often should I service my RO water purifier?",
    a: "We recommend servicing your RO every 3-4 months and replacing filters every 6-12 months depending on water quality and usage.",
  },
  {
    q: "Do you offer warranty on RO repairs?",
    a: "Yes, all our RO repairs come with up to 90 days warranty on service and genuine spare parts.",
  },
  {
    q: "What areas in Patna do you cover for RO service?",
    a: "We cover all major areas including Danapur, Kankarbagh, Boring Road, Bailey Road, Patliputra, Phulwari Sharif, Anisabad, and more.",
  },
];

export default function ROServicePatna() {
  return (
    <>
      {/* Hero Section */}
      <section className="gradient-primary text-primary-foreground py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-foreground/10 backdrop-blur text-sm font-medium mb-6 border border-primary-foreground/20">
              <MapPin className="w-4 h-4" /> Serving All Areas in Patna
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
              RO Water Purifier Service in Patna – HomeSpark
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 leading-relaxed">
              Affordable RO repair, filter replacement, installation &amp; maintenance starting at just ₹149. Same-day service by certified technicians for Kent, Aquaguard, Livpure &amp; all brands.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact">
                <Button size="lg" variant="secondary" className="rounded-full px-8 text-base font-semibold">
                  Book RO Service
                </Button>
              </Link>
              <a href="tel:9231421568">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full px-8 text-base bg-transparent border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 transition"
                >
                  <Phone className="w-4 h-4 mr-2" /> Call Technician
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              RO Service Price List
            </h2>
            <p className="text-muted-foreground text-lg">
              Transparent pricing for all RO water purifier services in Patna
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <div className="bg-card rounded-2xl shadow-elevated border border-border overflow-hidden">
              <div className="grid grid-cols-2 gap-0">
                <div className="bg-primary text-primary-foreground px-6 py-4 font-semibold">
                  Service
                </div>
                <div className="bg-primary text-primary-foreground px-6 py-4 font-semibold text-right">
                  Price
                </div>
                {PRICING.map((item, i) => (
                  <>
                    <div
                      key={`service-${i}`}
                      className={`px-6 py-4 font-medium ${i % 2 === 0 ? "bg-muted/50" : ""}`}
                    >
                      {item.service}
                    </div>
                    <div
                      key={`price-${i}`}
                      className={`px-6 py-4 text-right font-bold text-primary ${i % 2 === 0 ? "bg-muted/50" : ""}`}
                    >
                      {item.price}
                    </div>
                  </>
                ))}
              </div>
            </div>
            <p className="text-center text-sm text-muted-foreground mt-4">
              * Prices are indicative. Final quote depends on specific issue and parts required.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 gradient-primary-soft">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Our RO Services
            </h2>
            <p className="text-muted-foreground text-lg">
              Comprehensive RO water purifier services by trained HomeSpark technicians
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service) => (
              <div
                key={service.title}
                className="bg-card rounded-xl p-6 shadow-card border border-border hover:shadow-elevated hover:-translate-y-1 transition-all"
              >
                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands We Service */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              RO Brands We Service
            </h2>
            <p className="text-muted-foreground text-lg">
              Expert repair and maintenance for all major RO water purifier brands
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {BRANDS.map((brand) => (
              <div
                key={brand}
                className="bg-card border border-border rounded-xl px-6 py-3 shadow-soft hover:shadow-elevated transition-all"
              >
                <span className="font-semibold text-foreground">{brand}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 gradient-primary-soft">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Why Choose HomeSpark for RO Service in Patna?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: BadgeCheck, title: "Certified Technicians", desc: "Trained & background-verified RO experts" },
              { icon: Clock, title: "Same Day Service", desc: "Book before 2 PM for same-day visit" },
              { icon: Shield, title: "Genuine Spare Parts", desc: "Only OEM & branded RO parts used" },
              { icon: Zap, title: "Affordable Pricing", desc: "RO service starting at just ₹149" },
              { icon: CheckCircle2, title: "90-Day Warranty", desc: "Warranty on all repairs and parts" },
              { icon: Star, title: "1000+ Happy Customers", desc: "Rated 4.8★ for RO service in Patna" },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-card rounded-xl p-6 shadow-soft border border-border flex gap-4"
              >
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

      {/* Service Areas */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-semibold uppercase tracking-wide mb-4">
              <MapPin className="w-3.5 h-3.5" /> Service Coverage
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              RO Service Areas in Patna
            </h2>
            <p className="text-muted-foreground text-lg">
              Fast doorstep RO water purifier service across all major locations
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {SERVICE_AREAS.map((area) => (
              <div
                key={area}
                className="group flex items-center gap-3 bg-card border border-border rounded-xl px-4 py-3.5 shadow-soft hover:shadow-elevated hover:-translate-y-1 transition-all"
              >
                <div className="w-7 h-7 rounded-lg gradient-primary flex items-center justify-center shrink-0">
                  <MapPin className="w-3.5 h-3.5 text-primary-foreground" />
                </div>
                <span className="font-medium text-sm text-foreground group-hover:text-primary transition-colors">
                  {area}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              Don't see your area?{" "}
              <a href="tel:9231421568" className="text-primary font-semibold hover:underline">
                Call us — we may still cover you!
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 gradient-primary-soft">
        <div className="container max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              RO Service FAQs
            </h2>
            <p className="text-muted-foreground text-lg">
              Common questions about RO water purifier service in Patna
            </p>
          </div>
          <Accordion type="single" collapsible className="space-y-3">
            {FAQS.map((f, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-card rounded-xl border border-border px-6 shadow-soft"
              >
                <AccordionTrigger className="font-semibold text-left text-sm md:text-base">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 gradient-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Book RO Service in Patna Today
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
            Get affordable RO repair, filter replacement, and maintenance starting at just ₹149. Same-day service available!
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="rounded-full px-8 text-base font-semibold">
                Book RO Service Now
              </Button>
            </Link>
            <a href="tel:9231421568">
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 text-base bg-transparent border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Phone className="w-4 h-4 mr-2" /> Call Technician
              </Button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
