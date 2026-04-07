import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export interface PremiumProduct {
  id: string;
  name: string;
  tagline: string;
  image: string;
  imageAlt: string;
  features: string[];
  cta: {
    label: string;
    action: () => void;
  };
}

export default function PremiumProductCard({ product }: { product: PremiumProduct }) {
  return (
    <div className="group relative h-full overflow-hidden rounded-2xl bg-gradient-to-br from-card to-card/80 border border-border/50 transition-all duration-300 hover:border-primary/50 hover:shadow-elevated hover:scale-105">
      {/* Premium Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Product Image Container */}
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-muted-foreground/10 to-muted-foreground/5 sm:h-56 md:h-64">
        <img
          src={product.image}
          alt={product.imageAlt}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-40" />
      </div>

      {/* Content Container */}
      <div className="flex h-full flex-col justify-between p-5 sm:p-6">
        {/* Header */}
        <div>
          <h3 className="font-display text-lg sm:text-xl font-bold text-foreground mb-1 line-clamp-2">
            {product.name}
          </h3>
          <p className="text-xs sm:text-sm text-muted-foreground font-medium mb-4">
            {product.tagline}
          </p>
        </div>

        {/* Features */}
        <div className="space-y-2 mb-6">
          {product.features.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-2">
              <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gradient-primary flex-shrink-0" />
              <p className="text-xs sm:text-sm text-muted-foreground leading-snug">
                {feature}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <button
          onClick={product.cta.action}
          className="w-full gradient-primary text-primary-foreground rounded-lg font-semibold py-2.5 sm:py-3 px-4 text-sm sm:text-base transition-all duration-300 hover:shadow-elevated flex items-center justify-center gap-2 group/btn"
        >
          {product.cta.label}
          <ChevronRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
        </button>
      </div>
    </div>
  );
}
