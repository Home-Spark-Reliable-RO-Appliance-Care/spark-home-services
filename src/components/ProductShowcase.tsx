import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import PremiumProductCard, { PremiumProduct } from "@/components/PremiumProductCard";
import productVibeBlackMarble from "@/assets/product-vibe-black-marble.jpg";
import productVibeOceanBlue from "@/assets/product-vibe-ocean-blue.jpg";
import productVibeForestGreen from "@/assets/product-vibe-forest-green.jpg";
import productUrbanGreen from "@/assets/product-urban-green.jpg";
import productUrbanBlue from "@/assets/product-urban-blue.jpg";
import productUrbanBlack from "@/assets/product-urban-black.jpg";
import productPremiumTankpro from "@/assets/product-premium-tankpro.jpg";
import productPremiumBrio from "@/assets/product-premium-brio.jpg";

const PRODUCT_CATEGORIES = {
  VIBE: [
    {
      id: "vibe-black-marble",
      name: "VIBE Black Marble",
      tagline: "Sophisticated elegance for modern homes",
      image: productVibeBlackMarble,
      imageAlt: "HomeSpark VIBE Black Marble RO water purifier with marble finish for Patna homes",
      features: [
        "10L capacity with premium finish",
        "6-stage filtration technology",
        "Auto shut-off & TDS controller"
      ],
    },
    {
      id: "vibe-ocean-blue",
      name: "VIBE Ocean Blue",
      tagline: "Crystal clear water, premium design",
      image: productVibeOceanBlue,
      imageAlt: "HomeSpark VIBE Ocean Blue water purifier with advanced RO filtration for Patna",
      features: [
        "10L capacity with glossy finish",
        "Advanced RO+UV technology",
        "Energy-efficient operation"
      ],
    },
    {
      id: "vibe-forest-green",
      name: "VIBE Forest Green",
      tagline: "Nature-inspired purity",
      image: productVibeForestGreen,
      imageAlt: "HomeSpark VIBE Forest Green eco-friendly RO water purifier for Patna homes",
      features: [
        "10L capacity with eco finish",
        "Certified water purification",
        "Mineral retention technology"
      ],
    },
  ],
  URBAN: [
    {
      id: "urban-green",
      name: "URBAN Green",
      tagline: "Compact, powerful, reliable",
      image: productUrbanGreen,
      imageAlt: "HomeSpark URBAN Green compact RO water purifier for small spaces in Patna",
      features: [
        "8L capacity, space-saving design",
        "Multi-stage filtration",
        "Quick service access"
      ],
    },
    {
      id: "urban-blue",
      name: "URBAN Blue",
      tagline: "Smart water purification",
      image: productUrbanBlue,
      imageAlt: "HomeSpark URBAN Blue smart RO purifier with digital display for Patna",
      features: [
        "8L capacity with digital display",
        "Smart TDS monitoring",
        "Compact installation"
      ],
    },
    {
      id: "urban-black",
      name: "URBAN Black",
      tagline: "Sleek and sophisticated",
      image: productUrbanBlack,
      imageAlt: "HomeSpark URBAN Black sleek RO water purifier for modern Patna homes",
      features: [
        "8L capacity with matte finish",
        "Professional grade filtration",
        "Easy maintenance"
      ],
    },
  ],
  PREMIUM: [
    {
      id: "premium-tankpro",
      name: "TankPro Under Sink",
      tagline: "Hidden elegance, visible purity",
      image: productPremiumTankpro,
      imageAlt: "HomeSpark TankPro under-sink RO water purifier for kitchen installation in Patna",
      features: [
        "Space-saving under-sink design",
        "15L capacity",
        "Installation service included"
      ],
    },
    {
      id: "premium-brio",
      name: "BRIO Premium",
      tagline: "Ultimate water quality system",
      image: productPremiumBrio,
      imageAlt: "HomeSpark BRIO Premium high-capacity RO water purifier for Patna families",
      features: [
        "12L capacity with premium design",
        "7-stage advanced filtration",
        "Mineral water option"
      ],
    },
    {
      id: "premium-luxe",
      name: "LUXE Infinity",
      tagline: "Luxury meets functionality",
      image: productPremiumBrio,
      imageAlt: "HomeSpark LUXE Infinity luxury RO water purifier system for premium Patna homes",
      features: [
        "15L capacity with premium finish",
        "Smart control system",
        "Annual maintenance included"
      ],
    },
  ],
};

interface ProductShowcaseProps {
  featured?: boolean;
  limit?: number;
  category?: keyof typeof PRODUCT_CATEGORIES;
}

export default function ProductShowcase({ featured = true, limit = 6, category }: ProductShowcaseProps) {
  const [selectedCategory, setSelectedCategory] = useState<keyof typeof PRODUCT_CATEGORIES>(
    category || "VIBE"
  );

  const categoryProducts = PRODUCT_CATEGORIES[selectedCategory];
  const displayProducts = limit ? categoryProducts.slice(0, limit) : categoryProducts;

  const handleEnquire = (productId: string, productName: string) => {
    const encodedMessage = `Hi, I'm interested in the ${productName} from HomeSpark. Could you provide more details and pricing?`;
    window.location.href = `https://wa.me/919231421568?text=${encodeURIComponent(encodedMessage)}`;
  };

  const productsWithCTA = displayProducts.map((product) => ({
    ...product,
    cta: {
      label: "Enquire Now",
      action: () => handleEnquire(product.id, product.name),
    },
  }));

  return (
    <section className="py-12 sm:py-16 md:py-20">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
            Premium RO Solutions
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-balance">
            Explore Our Premium Water Purifiers
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            HomeSpark brings you premium water purification with world-class design and unmatched reliability. Choose from our carefully curated collection of RO purifiers.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-3 justify-center mb-10 sm:mb-14">
          {Object.keys(PRODUCT_CATEGORIES).map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat as keyof typeof PRODUCT_CATEGORIES)}
              className={`px-4 sm:px-6 py-2 rounded-full font-medium transition-all ${
                selectedCategory === cat
                  ? "gradient-primary text-primary-foreground shadow-elevated"
                  : "bg-muted text-foreground hover:bg-muted/80"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-14">
          {productsWithCTA.map((product) => (
            <PremiumProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View All CTA */}
        <div className="flex justify-center">
          <Link to="/products">
            <Button size="lg" className="gradient-primary text-primary-foreground rounded-full px-8 text-base">
              View All Products
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
