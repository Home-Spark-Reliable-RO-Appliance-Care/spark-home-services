import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, MessageCircle, Droplets, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About Us" },
  { to: "/contact", label: "Contact" },
];

const PHONE = "1234567890";
const WHATSAPP = "911234567890";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Bar */}
      <div className="gradient-primary text-primary-foreground text-sm py-2">
        <div className="container flex items-center justify-between">
          <span className="hidden sm:inline">⚡ Same Day Service Available — Call Now!</span>
          <div className="flex items-center gap-4 mx-auto sm:mx-0">
            <a href={`tel:${PHONE}`} className="flex items-center gap-1 hover:opacity-80 transition">
              <Phone className="w-3.5 h-3.5" /> +91-{PHONE}
            </a>
            <a
              href={`https://wa.me/${WHATSAPP}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:opacity-80 transition"
            >
              <MessageCircle className="w-3.5 h-3.5" /> WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md shadow-soft border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 font-display font-bold text-xl">
            <div className="w-9 h-9 rounded-lg gradient-primary flex items-center justify-center">
              <Droplets className="w-5 h-5 text-primary-foreground" />
            </div>
            <span>
              Home<span className="text-gradient">Spark</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  pathname === l.to
                    ? "bg-secondary text-secondary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {l.label}
              </Link>
            ))}
            <Link to="/contact">
              <Button size="sm" className="ml-2 gradient-primary text-primary-foreground rounded-full px-5">
                <Zap className="w-4 h-4 mr-1" /> Book Service
              </Button>
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button className="md:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <nav className="md:hidden border-t border-border bg-card px-4 pb-4 animate-fade-in">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setMobileOpen(false)}
                className={`block py-3 text-sm font-medium border-b border-border last:border-0 ${
                  pathname === l.to ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {l.label}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setMobileOpen(false)}>
              <Button className="w-full mt-3 gradient-primary text-primary-foreground rounded-full">
                Book Service Now
              </Button>
            </Link>
          </nav>
        )}
      </header>

      {/* Main */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 font-display font-bold text-xl mb-4">
              <Droplets className="w-5 h-5 text-accent" />
              HomeSpark
            </div>
            <p className="text-background/70 text-sm leading-relaxed">
              Reliable RO & Appliance Care at Your Doorstep. Trusted by 1000+ happy customers across the city.
            </p>
          </div>
          <div>
            <h4 className="font-display font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2 text-sm text-background/70">
              {NAV_LINKS.map((l) => (
                <Link key={l.to} to={l.to} className="block hover:text-background transition">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-display font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-sm text-background/70">
              <a href={`tel:${PHONE}`} className="block hover:text-background transition">📞 +91-{PHONE}</a>
              <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer" className="block hover:text-background transition">
                💬 WhatsApp Us
              </a>
              <p>📍 Your City, India</p>
            </div>
          </div>
        </div>
        <div className="container mt-8 pt-6 border-t border-background/10 text-center text-xs text-background/50">
          © {new Date().getFullYear()} HomeSpark. All rights reserved.
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Hi, I need a home service.")}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-success flex items-center justify-center shadow-elevated hover:scale-110 transition-transform"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 text-success-foreground" />
      </a>
    </div>
  );
}
