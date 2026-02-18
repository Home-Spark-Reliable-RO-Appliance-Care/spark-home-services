import { MapPin } from "lucide-react";

const AREAS = [
  "Kankarbagh",
  "Boring Road",
  "Patliputra Colony",
  "Rajendra Nagar",
  "Bailey Road",
  "Ashiana Nagar",
  "Fraser Road",
  "Anisabad",
  "Phulwari Sharif",
  "Danapur",
  "Kurji",
  "Gandhi Maidan",
  "Agam Kuan",
];

export default function AreasWeServe() {
  return (
    <section className="py-16 md:py-24 bg-card border-t border-border">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-semibold uppercase tracking-wide mb-4">
            <MapPin className="w-3.5 h-3.5" /> Coverage Area
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Areas We Serve in Patna
          </h2>
          <p className="text-muted-foreground text-lg">
            Fast doorstep RO &amp; appliance service across major locations in Patna.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 max-w-5xl mx-auto">
          {AREAS.map((area) => (
            <div
              key={area}
              className="group flex items-center gap-3 bg-background border border-border rounded-xl px-4 py-3.5 shadow-soft hover:shadow-elevated hover:-translate-y-1 transition-all duration-200 cursor-default"
            >
              <div className="w-7 h-7 rounded-lg gradient-primary flex items-center justify-center shrink-0 shadow-soft">
                <MapPin className="w-3.5 h-3.5 text-primary-foreground" />
              </div>
              <span className="font-medium text-sm text-foreground group-hover:text-primary transition-colors leading-tight">
                {area}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm text-muted-foreground">
            Don't see your area?{" "}
            <a
              href="tel:9231421568"
              className="text-primary font-semibold hover:underline"
            >
              Call us — we may still cover you!
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
