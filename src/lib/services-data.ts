import {
  Droplets,
  Wrench,
  Filter,
  ShieldCheck,
  WashingMachine,
  Refrigerator,
  Microwave,
  Wind,
  Flame,
} from "lucide-react";

export interface ServiceItem {
  icon: any;
  title: string;
  slug: string;
  short: string;
  description: string;
  benefits: string[];
}

export const SERVICES: ServiceItem[] = [
  {
    icon: Droplets,
    title: "RO Installation",
    slug: "ro-installation",
    short: "Professional installation of all RO brands",
    description:
      "Get your water purifier installed by certified technicians. We handle all brands including Kent, Aquaguard, Pureit, and more with proper plumbing and electrical setup.",
    benefits: [
      "All major brands supported",
      "Free site inspection",
      "Leak-proof installation",
      "Complimentary water quality test",
    ],
  },
  {
    icon: Wrench,
    title: "RO Repair & Maintenance",
    slug: "ro-repair",
    short: "Quick diagnosis and repair of RO issues",
    description:
      "Facing low water flow, bad taste, or leakage? Our experts diagnose and fix all RO problems on the spot with genuine spare parts.",
    benefits: [
      "Same-day repair",
      "90-day service warranty",
      "Genuine spare parts",
      "Transparent pricing",
    ],
  },
  {
    icon: Filter,
    title: "RO Filter Replacement",
    slug: "ro-filter",
    short: "Timely filter change for pure water",
    description:
      "Regular filter replacement ensures your water stays safe. We use OEM-grade filters for sediment, carbon, RO membrane, and UV components.",
    benefits: [
      "OEM-grade filters",
      "Scheduled reminders",
      "Multi-stage replacement",
      "Improved water taste",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Water Purifier AMC Plans",
    slug: "amc-plans",
    short: "Annual maintenance for worry-free pure water",
    description:
      "Our AMC plans cover periodic servicing, filter changes, and priority support so you never have to worry about water quality.",
    benefits: [
      "Up to 4 free services/year",
      "Free filter replacements",
      "Priority scheduling",
      "Discounted repairs",
    ],
  },
  {
    icon: WashingMachine,
    title: "Washing Machine Repair",
    slug: "washing-machine",
    short: "Fix all washing machine brands & models",
    description:
      "From drum issues to electrical faults, we repair all types — front load, top load, and semi-automatic washing machines.",
    benefits: [
      "All brands & models",
      "Doorstep service",
      "Genuine parts used",
      "Post-repair checkup",
    ],
  },
  {
    icon: Refrigerator,
    title: "Refrigerator Repair",
    slug: "refrigerator",
    short: "Expert fridge repair and gas refilling",
    description:
      "Not cooling? Strange noises? Our technicians handle compressor issues, gas refilling, thermostat repairs, and more.",
    benefits: [
      "Compressor repair",
      "Gas refilling",
      "Temperature calibration",
      "Same-day service",
    ],
  },
  {
    icon: Microwave,
    title: "Microwave Repair",
    slug: "microwave",
    short: "Quick microwave troubleshooting & repair",
    description:
      "We fix heating issues, turntable problems, display errors, and all other microwave faults at your doorstep.",
    benefits: [
      "All brands supported",
      "Magnetron replacement",
      "Door switch repair",
      "Warranty on service",
    ],
  },
  {
    icon: Wind,
    title: "AC Service & Repair",
    slug: "ac-service",
    short: "Complete AC servicing, gas filling & repair",
    description:
      "Keep your AC running efficiently with our deep cleaning, gas refilling, and expert repair services for split and window ACs.",
    benefits: [
      "Deep cleaning",
      "Gas top-up",
      "Compressor repair",
      "Cooling optimization",
    ],
  },
  {
    icon: Flame,
    title: "Geyser Repair",
    slug: "geyser",
    short: "Safe and reliable geyser repair service",
    description:
      "Whether it's a heating element failure, thermostat issue, or leakage, we provide safe and reliable geyser repairs.",
    benefits: [
      "Electric & gas geysers",
      "Thermostat repair",
      "Element replacement",
      "Safety inspection",
    ],
  },
];
