import { cn } from "@/lib/utils";

const BRANDS = [
  { name: "Livpure", color: "#00529B" },
  { name: "Aquafresh", color: "#0099CC" },
  { name: "Aquaguard", color: "#005BAA" },
  { name: "Kent", color: "#E31837" },
  { name: "Pureit", color: "#00A650" },
  { name: "LG", color: "#A50034" },
  { name: "MI", color: "#FF6900" },
  { name: "Kutchina", color: "#C8102E" },
  { name: "Faber", color: "#003087" },
  { name: "AO Smith", color: "#004C97" },
  { name: "Blue Star", color: "#005EB8" },
  { name: "MarQ", color: "#1D1D1B" },
];

interface BrandLogoProps {
  name: string;
  color: string;
}

function BrandLogo({ name, color }: BrandLogoProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-center px-8 py-4 rounded-xl border border-border bg-card",
        "min-w-[120px] h-16 cursor-default select-none",
        "transition-all duration-300 ease-out",
        "grayscale opacity-50 hover:grayscale-0 hover:opacity-100 hover:scale-110 hover:shadow-card",
        "group"
      )}
    >
      <span
        className="font-display font-extrabold text-lg tracking-tight whitespace-nowrap"
        style={{ color }}
      >
        {name}
      </span>
    </div>
  );
}

export default function BrandMarquee() {
  const doubled = [...BRANDS, ...BRANDS];

  return (
    <section className="py-10 bg-card border-y border-border overflow-hidden">
      <div className="container mb-6 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1">
          We Service All Major Brands
        </p>
      </div>

      {/* Marquee track */}
      <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
        <div className="flex gap-4 animate-marquee hover:[animation-play-state:paused] shrink-0">
          {doubled.map((brand, i) => (
            <BrandLogo key={`a-${i}`} name={brand.name} color={brand.color} />
          ))}
        </div>
        <div
          className="flex gap-4 animate-marquee hover:[animation-play-state:paused] shrink-0 ml-4"
          aria-hidden
        >
          {doubled.map((brand, i) => (
            <BrandLogo key={`b-${i}`} name={brand.name} color={brand.color} />
          ))}
        </div>
      </div>

      {/* Trust statement */}
      <div className="container mt-6 text-center">
        <p className="text-sm text-muted-foreground font-medium">
          🏆 <span className="font-semibold text-foreground">Trusted by 1000+ customers</span> across Patna
        </p>
      </div>
    </section>
  );
}
