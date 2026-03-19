import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight, Sparkles } from "lucide-react";
import ProductShowcase from "@/components/ProductShowcase";

const PRODUCT_CATEGORIES = [
  {
    id: "vibe",
    name: "VIBE Series",
    description: "Premium aesthetic RO purifiers with elegant designs for modern homes",
    featured: true,
  },
  {
    id: "urban",
    name: "URBAN Series",
    description: "Compact and efficient RO purifiers perfect for space-saving installation",
    featured: true,
  },
  {
    id: "premium",
    name: "Premium Collection",
    description: "Advanced RO purification systems with cutting-edge technology",
    featured: true,
  },
];

export default function Products() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-12 md:py-20 gradient-primary-soft">
        <div className="container">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="text-primary font-semibold text-sm">Premium Water Solutions</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-balance">
              Premium RO Water Purifiers in Patna
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
              Discover HomeSpark's premium collection of water purifiers designed with world-class engineering and elegant aesthetics. Each model is tested and certified for quality assurance.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#products">
                <Button size="lg" className="gradient-primary text-primary-foreground rounded-full px-8">
                  Explore Products
                </Button>
              </a>
              <Link to="/ro-service-patna">
                <Button size="lg" variant="outline" className="rounded-full px-8">
                  RO Service & Maintenance
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <div id="products">
        <ProductShowcase featured={false} limit={undefined} />
      </div>

      {/* Product Information Sections */}
      <section className="py-16 md:py-24">
        <div className="container max-w-4xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-12 text-center">
            Why Choose HomeSpark Water Purifiers?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-card rounded-2xl p-8 border border-border">
              <h3 className="font-display text-xl font-bold mb-4">Premium Design</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our water purifiers combine elegant aesthetics with superior functionality. Each design is crafted to complement modern homes while delivering uncompromised water quality.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 border border-border">
              <h3 className="font-display text-xl font-bold mb-4">Advanced Filtration</h3>
              <p className="text-muted-foreground leading-relaxed">
                Multi-stage RO+UV purification systems ensure removal of all impurities, bacteria, and viruses. Your family gets pure, safe drinking water every day.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 border border-border">
              <h3 className="font-display text-xl font-bold mb-4">Easy Maintenance</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our models feature quick-access filters and digital displays for easy monitoring. HomeSpark technicians can service your purifier in minutes.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 border border-border">
              <h3 className="font-display text-xl font-bold mb-4">Expert Support</h3>
              <p className="text-muted-foreground leading-relaxed">
                Get professional installation, annual maintenance plans (AMC), and same-day repair service across Patna. We're with you throughout your purifier's lifespan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories Info */}
      <section className="py-16 md:py-24 gradient-primary-soft">
        <div className="container">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-12 text-center">
            Our Product Range
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PRODUCT_CATEGORIES.map((category) => (
              <div key={category.id} className="bg-card rounded-2xl p-8 border border-border hover:shadow-elevated transition-shadow">
                <h3 className="font-display text-2xl font-bold mb-3">{category.name}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {category.description}
                </p>
                <a href={`#products`} className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
                  View Models <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Installation & Service Section */}
      <section className="py-16 md:py-24">
        <div className="container max-w-4xl">
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl p-10 md:p-16 border border-primary/20">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-center">
              Professional Installation & Service
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
              HomeSpark provides complete installation and ongoing maintenance for all RO purifiers. Our trained technicians ensure optimal performance and water quality.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center shrink-0">
                  <span className="text-primary-foreground font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Professional Installation</h4>
                  <p className="text-sm text-muted-foreground">
                    Quick, clean installation by certified technicians at your convenience.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center shrink-0">
                  <span className="text-primary-foreground font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Annual Maintenance Plans</h4>
                  <p className="text-sm text-muted-foreground">
                    AMC plans include free services, filter changes, and priority support.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center shrink-0">
                  <span className="text-primary-foreground font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Same-Day Service</h4>
                  <p className="text-sm text-muted-foreground">
                    Emergency repairs and filter replacements available on the same day.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center shrink-0">
                  <span className="text-primary-foreground font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Genuine Spare Parts</h4>
                  <p className="text-sm text-muted-foreground">
                    Only original filters and components used for repairs and replacements.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/ro-service-patna">
                <Button size="lg" className="gradient-primary text-primary-foreground rounded-full px-8">
                  View Service Plans
                </Button>
              </Link>
              <a href="tel:9231421568">
                <Button size="lg" variant="outline" className="rounded-full px-8">
                  Call for Enquiry
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 gradient-primary-soft">
        <div className="container max-w-3xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-12 text-center">
            Product FAQs
          </h2>

          <div className="space-y-6">
            {[
              {
                q: "Which RO purifier model is best for my home?",
                a: "The best model depends on your water quality, family size, and installation space. Our VIBE series offers premium designs for style-conscious customers, while URBAN series is perfect for compact spaces. Contact our experts for personalized recommendations.",
              },
              {
                q: "How often do I need to replace filters?",
                a: "RO filters typically need replacement every 12-18 months depending on water quality and usage. Our AMC plans include filter replacements, making maintenance hassle-free.",
              },
              {
                q: "Do you provide installation service?",
                a: "Yes! Our technicians provide professional installation for all HomeSpark RO purifiers. Installation is quick, clean, and includes a complete orientation on product usage.",
              },
              {
                q: "What warranty comes with the purifiers?",
                a: "All HomeSpark purifiers come with 2-3 years manufacturer warranty. Our AMC plans extend coverage with additional benefits like extended warranty and priority service.",
              },
              {
                q: "Can I upgrade from one model to another?",
                a: "Absolutely! We offer upgrade programs where you can trade your current purifier for a newer model with special pricing. Contact us for details.",
              },
            ].map((faq, idx) => (
              <div key={idx} className="bg-card rounded-xl p-6 border border-border">
                <h3 className="font-semibold text-lg mb-3">{faq.q}</h3>
                <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 md:py-20 gradient-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Ready to Get a Premium Water Purifier?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
            Contact HomeSpark today for product enquiries, installation, or service. We're available across Patna.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="rounded-full px-8 font-semibold">
                Enquire Now
              </Button>
            </Link>
            <a href="https://wa.me/919231421568" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="secondary" className="rounded-full px-8 font-semibold">
                WhatsApp Us
              </Button>
            </a>
            <a href="tel:9231421568">
              <Button size="lg" variant="secondary" className="rounded-full px-8 font-semibold">
                Call Now
              </Button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
