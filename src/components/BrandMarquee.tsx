const BRANDS = [
  { name: "Kent", logo: "/brands/kent.svg" },
  { name: "Livpure", logo: "/brands/livpure.svg" },
  { name: "Aquaguard", logo: "/brands/aquaguard.svg" },
  { name: "Aquafresh", logo: "/brands/aquafresh.svg" },
  { name: "Pureit", logo: "/brands/pureit.svg" },
  { name: "LG", logo: "/brands/lg.svg" },
  { name: "MI", logo: "/brands/mi.svg" },
  { name: "Blue Star", logo: "/brands/bluestar.svg" },
  { name: "Faber", logo: "/brands/faber.svg" },
  { name: "AO Smith", logo: "/brands/aosmith.svg" },
  { name: "Kutchina", logo: "/brands/kutchina.svg" },
  { name: "MarQ", logo: "/brands/marq.svg" },
];

function BrandLogo({ name, logo }: { name: string; logo: string }) {
  return (
    <div className="flex items-center justify-center px-6 py-3 rounded-xl border border-border bg-card min-w-[140px] h-[72px] grayscale opacity-50 hover:grayscale-0 hover:opacity-100 hover:scale-110 hover:shadow-card transition-all duration-300 ease-out cursor-default shrink-0">
      <img
        src={logo}
        alt={`${name} logo`}
        className="h-10 w-auto object-contain"
        loading="lazy"
      />
    </div>
  );
}

export default function BrandMarquee() {
  // Triple for seamless loop
  const items = [...BRANDS, ...BRANDS, ...BRANDS];

  return (
    <section className="py-10 bg-card border-y border-border overflow-hidden">
      <div className="container mb-5 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          We Service All Major Brands
        </p>
      </div>

      {/* Marquee track */}
      <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_8%,white_92%,transparent)]">
        <div className="flex gap-4 animate-marquee shrink-0 hover:[animation-play-state:paused]">
          {items.map((brand, i) => (
            <BrandLogo key={i} name={brand.name} logo={brand.logo} />
          ))}
        </div>
      </div>

      {/* Trust statement */}
      <div className="container mt-5 text-center">
        <p className="text-sm text-muted-foreground font-medium">
          🏆 <span className="font-semibold text-foreground">Trusted by 1000+ customers</span> across Patna
        </p>
      </div>
    </section>
  );
}
