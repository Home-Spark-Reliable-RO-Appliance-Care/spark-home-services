import { Phone, MessageCircle } from "lucide-react";

const PHONE = "9231421568";
const WHATSAPP = "919231421568";

export default function StickyButtons() {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-3">
      <a
        href={`https://wa.me/${WHATSAPP}?text=Hi%20HomeSpark%2C%20I%20need%20RO%20service%20in%20Patna`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-elevated hover:scale-110 transition-transform"
        aria-label="WhatsApp Booking"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
      <a
        href={`tel:${PHONE}`}
        className="flex items-center justify-center w-14 h-14 rounded-full gradient-primary text-primary-foreground shadow-elevated hover:scale-110 transition-transform"
        aria-label="Call Now"
      >
        <Phone className="w-6 h-6" />
      </a>
    </div>
  );
}
