import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Droplets,
  Wind,
  Zap,
  Clock,
  AlertCircle,
  CheckCircle2,
} from "lucide-react";
import { Link } from "react-router-dom";
import sedimentFilterImg from "@/assets/ro-part-sediment-filter.jpg";
import carbonFilterImg from "@/assets/ro-part-carbon-filter.jpg";
import roMembraneImg from "@/assets/ro-part-membrane.jpg";
import postCarbonImg from "@/assets/ro-part-post-carbon.jpg";
import storageTankImg from "@/assets/ro-part-storage-tank.jpg";
import pumpMotorImg from "@/assets/ro-part-pump-motor.jpg";
import valvesImg from "@/assets/ro-part-valves.jpg";
import tdsControllerImg from "@/assets/ro-part-tds-controller.jpg";
import waterBefore from "@/assets/water-quality-before.jpg";
import waterAfter from "@/assets/water-quality-after.jpg";

const RO_PARTS = [
  {
    id: "sediment-filter",
    name: "Sediment Filter (Pre-Filter)",
    icon: Droplets,
    color: "bg-blue-50",
    image: sedimentFilterImg,
    lifespan: "6-12 months",
    maintenance: "Replacement",
    description:
      "First stage of filtration that removes dirt, sand, rust particles, and sediment from water.",
    whyMaintenance: [
      "Prevents clogging of subsequent filters and RO membrane",
      "Extends RO membrane lifespan by 2-3 years",
      "Blocked sediment filter reduces water flow by 50-70%",
      "Dirty filters harbor bacteria and reduce water quality",
      "Without replacement, other filters become stressed and fail prematurely",
    ],
    symptoms: [
      "Low water flow or pressure in your RO purifier",
      "Cloudy or turbid water output",
      "Unusual taste or odor in drinking water",
      "Gurgling sounds during water discharge",
    ],
    cost: "₹200-₹400",
  },
  {
    id: "carbon-filter",
    name: "Carbon Activated Filter",
    icon: Wind,
    color: "bg-green-50",
    image: carbonFilterImg,
    lifespan: "6-12 months",
    maintenance: "Replacement",
    description:
      "Second stage filter that removes chlorine, pesticides, chemicals, and improves taste and odor.",
    whyMaintenance: [
      "Removes harmful chemicals like chlorine that damage RO membranes",
      "Improves water taste and smell significantly",
      "Prevents membrane fouling and extends its life",
      "Stops bacterial growth in water due to chlorine deactivation",
      "Protects downstream filters from chemical damage",
    ],
    symptoms: [
      "Strong chlorine smell in tap water",
      "Bitter or chemical taste in drinking water",
      "Water discoloration or changes in water quality",
      "Foul odor coming from purifier",
    ],
    cost: "₹300-₹600",
  },
  {
    id: "ro-membrane",
    name: "RO Membrane",
    icon: Zap,
    color: "bg-purple-50",
    image: roMembraneImg,
    lifespan: "2-3 years",
    maintenance: "Replacement every 24-36 months",
    description:
      "Core filtration component that removes 95-99% of dissolved salts, bacteria, viruses, and contaminants.",
    whyMaintenance: [
      "RO membrane degrades over time due to water pressure and contaminants",
      "Old membranes produce water with higher TDS (Total Dissolved Solids)",
      "Membrane failure means bacteria and viruses pass through water",
      "Damaged membranes cause water to seep into storage tank",
      "Regular replacement ensures pure drinking water for family health",
    ],
    symptoms: [
      "TDS levels suddenly increase in output water",
      "Water output decreases significantly",
      "Foul taste or metallic taste in water",
      "Visible water leakage from purifier body",
      "Water tank gets smelly or develops algae",
    ],
    cost: "₹1500-₹4000",
  },
  {
    id: "post-carbon-filter",
    name: "Post-Carbon Filter (Polish Filter)",
    icon: Wind,
    color: "bg-amber-50",
    image: postCarbonImg,
    lifespan: "6-12 months",
    maintenance: "Replacement",
    description:
      "Final stage filter that polishes water and removes any remaining odor or taste from RO treated water.",
    whyMaintenance: [
      "Ensures final water quality is crystal clear",
      "Removes any residual taste or odor before drinking",
      "Acts as safety barrier for any breakthrough contaminants",
      "Improves water mineralization in some advanced RO systems",
      "Final quality check before water reaches your glass",
    ],
    symptoms: [
      "Slight taste or odor in final filtered water",
      "Water appears slightly hazy despite RO membrane working",
      "Post-filter leaking or water dripping",
    ],
    cost: "₹200-₹400",
  },
  {
    id: "storage-tank",
    name: "Storage Tank",
    icon: Droplets,
    color: "bg-teal-50",
    image: storageTankImg,
    lifespan: "3-5 years",
    maintenance: "Regular cleaning, replacement if damaged",
    description:
      "Stores filtered water under pressure and maintains water availability during peak usage.",
    whyMaintenance: [
      "Tank becomes home to bacteria and algae if not cleaned",
      "Stagnant water in tank develops foul smell and taste",
      "Sediment accumulates at tank bottom reducing storage capacity",
      "Algae growth from light exposure makes water unfit to drink",
      "Tank corrosion can cause water contamination if not maintained",
    ],
    symptoms: [
      "Foul smell when you open the tap",
      "Slimy green or black deposits inside tank",
      "Water tastes stale or off despite filter replacement",
      "Visible rust or corrosion on tank exterior",
      "Tank leaking from bottom or sides",
    ],
    cost: "Tank cleaning: ₹300-₹500 | Tank replacement: ₹3000-₹8000",
  },
  {
    id: "pump-motor",
    name: "RO Pump & Motor",
    icon: Zap,
    color: "bg-red-50",
    image: pumpMotorImg,
    lifespan: "3-5 years",
    maintenance: "Servicing/Replacement",
    description:
      "Pressurizes water to force it through RO membrane for proper filtration and purification.",
    whyMaintenance: [
      "Motor wears out due to continuous operation and pressure stress",
      "Weak pump reduces water production and increases purification time",
      "Pump failure stops water purification completely",
      "Burnt motor creates electrical hazards and water contamination",
      "Regular servicing prevents sudden breakdown and costly repairs",
    ],
    symptoms: [
      "Unusual grinding or humming noise from purifier",
      "Water flow drops to very low or stops completely",
      "Motor runs but no water is produced",
      "Burning smell from electrical components",
      "Purifier takes hours to fill storage tank (very slow)",
    ],
    cost: "Servicing: ₹500-₹800 | Motor replacement: ₹3000-₹6000",
  },
  {
    id: "inlet-outlet-valves",
    name: "Inlet & Outlet Valves",
    icon: Droplets,
    color: "bg-indigo-50",
    image: valvesImg,
    lifespan: "2-3 years",
    maintenance: "Cleaning/Replacement",
    description:
      "Controls water flow direction - prevents backflow and ensures one-way water movement through system.",
    whyMaintenance: [
      "Valves get stuck due to mineral deposits and sediment",
      "Stuck inlet valve causes low water flow or purifier stops working",
      "Faulty outlet valve allows water to flow backwards (backflow)",
      "Backflow causes membrane damage and water contamination",
      "Regular cleaning prevents valve blockage and system failure",
    ],
    symptoms: [
      "Water doesn't flow even when purifier is switched on",
      "Water leaks from unexpected places",
      "Purifier makes hissing or whistling sounds",
      "Water pressure is inconsistent or fluctuates",
    ],
    cost: "Valve cleaning: ₹250-₹400 | Valve replacement: ₹800-₹1500",
  },
  {
    id: "tds-controller",
    name: "TDS Controller & Mineralizer",
    icon: Clock,
    color: "bg-cyan-50",
    image: tdsControllerImg,
    lifespan: "2-3 years",
    maintenance: "Cartridge Replacement",
    description:
      "Blends purified water with mineral-rich water to maintain essential minerals and healthy pH balance.",
    whyMaintenance: [
      "Mineral cartridge depletes over time and loses effectiveness",
      "Without minerals, water becomes too pure (demineralized) - unhealthy",
      "Demineralized water leaches minerals from your bones and teeth",
      "Depleted cartridge still shows minerals are present but doesn't add them",
      "Regular replacement ensures balanced, healthy drinking water",
    ],
    symptoms: [
      "Water tastes bland or unusual despite good TDS levels",
      "Your family reports not feeling well after drinking water",
      "Water appears to lack mineral taste compared to earlier",
      "TDS level reading seems incorrect or stays same always",
    ],
    cost: "₹400-₹800",
  },
];

const MAINTENANCE_SCHEDULE = [
  { period: "Monthly", tasks: ["Visual inspection", "Check for leaks", "Listen for unusual sounds"] },
  { period: "Every 3-6 months", tasks: ["Filter cleaning", "Tank sanitization", "Water quality testing"] },
  {
    period: "Every 6-12 months",
    tasks: ["Pre-filter replacement", "Carbon filter replacement", "Post-filter replacement"],
  },
  {
    period: "Every 2-3 years",
    tasks: ["RO membrane replacement", "Complete system servicing", "Tank deep cleaning"],
  },
];

export default function ROMaintenanceGuide() {
  return (
    <div className="space-y-12">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
          RO Water Purifier Parts & Maintenance Guide
        </h2>
        <p className="text-lg text-muted-foreground">
          Understand each component of your RO system and why regular maintenance is critical for
          pure, healthy drinking water. Every part plays a vital role in keeping your family safe.
        </p>
      </div>

      {/* Parts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {RO_PARTS.map((part) => {
          const Icon = part.icon;
          return (
            <Card key={part.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              {part.image && (
                <div className="h-48 bg-gray-200 overflow-hidden">
                  <img 
                    src={part.image} 
                    alt={part.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <div className={`${part.color} p-6 border-b border-border`}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-xl font-bold mb-2">{part.name}</h3>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="text-xs font-semibold bg-white px-2.5 py-1 rounded-full">
                        Lifespan: {part.lifespan}
                      </span>
                      <span className="text-xs font-semibold bg-white px-2.5 py-1 rounded-full">
                        Cost: {part.cost}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <p className="text-muted-foreground">{part.description}</p>

                <div>
                  <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-orange-500" />
                    Why Maintenance is Critical:
                  </h4>
                  <ul className="text-sm space-y-1">
                    {part.whyMaintenance.map((reason, idx) => (
                      <li key={idx} className="flex gap-2">
                        <span className="text-primary font-bold">•</span>
                        <span>{reason}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    Warning Signs:
                  </h4>
                  <ul className="text-sm space-y-1">
                    {part.symptoms.map((symptom, idx) => (
                      <li key={idx} className="flex gap-2">
                        <span className="text-primary font-bold">•</span>
                        <span>{symptom}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Maintenance Schedule */}
      <div className="bg-gradient-primary-soft rounded-2xl p-8">
        <h3 className="font-display text-2xl font-bold mb-6">Recommended Maintenance Schedule</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {MAINTENANCE_SCHEDULE.map((schedule, idx) => (
            <div key={idx} className="bg-card rounded-lg p-4 border border-border">
              <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                {schedule.period}
              </h4>
              <ul className="space-y-2">
                {schedule.tasks.map((task, taskIdx) => (
                  <li key={taskIdx} className="flex gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-success shrink-0 mt-0.5" />
                    {task}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Why HomeSpark Matters */}
      <div className="bg-card rounded-2xl p-8 border-2 border-primary/20">
        <h3 className="font-display text-2xl font-bold mb-4 flex items-center gap-2">
          <AlertCircle className="w-6 h-6 text-orange-500" />
          Why Professional Maintenance Matters
        </h3>
        <ul className="space-y-3 text-muted-foreground mb-6">
          <li className="flex gap-3">
            <span className="text-primary font-bold">✓</span>
            <span>
              <strong>Family Health:</strong> Regular maintenance ensures water is free from bacteria,
              viruses, and harmful contaminants
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-primary font-bold">✓</span>
            <span>
              <strong>Cost Savings:</strong> Preventive maintenance costs ₹249-₹399 but prevents
              expensive repairs costing ₹3000-₹6000
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-primary font-bold">✓</span>
            <span>
              <strong>Equipment Longevity:</strong> Well-maintained RO systems last 5-7 years instead
              of 2-3 years
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-primary font-bold">✓</span>
            <span>
              <strong>Consistent Quality:</strong> Ensures pure water quality year-round without
              unexpected breakdowns
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-primary font-bold">✓</span>
            <span>
              <strong>Professional Expertise:</strong> HomeSpark technicians identify issues before
              they become serious problems
            </span>
          </li>
        </ul>

        <div className="bg-gradient-primary rounded-lg p-6 text-primary-foreground">
          <h4 className="font-semibold text-lg mb-2">HomeSpark AMC Plan Benefits</h4>
          <p className="text-sm mb-4">
            Our Annual Maintenance Contracts include all filter replacements, tank cleaning, pump
            servicing, and priority same-day support for urgent issues.
          </p>
          <Link to="/contact">
            <Button className="w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              Explore AMC Plans
            </Button>
          </Link>
        </div>
      </div>

      {/* Before & After Water Quality */}
      <div className="space-y-6">
        <div className="text-center">
          <h3 className="font-display text-2xl font-bold mb-2">Water Quality Transformation</h3>
          <p className="text-muted-foreground">See the dramatic difference HomeSpark RO maintenance makes</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col items-center">
            <div className="w-full bg-red-50 rounded-lg p-4 mb-4 border-2 border-red-200">
              <img 
                src={waterBefore} 
                alt="Contaminated water before RO purification - murky, brownish colored tap water" 
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
            <h4 className="font-display text-lg font-bold text-red-600 mb-2">BEFORE Maintenance</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li className="flex gap-2">
                <span className="text-red-500">✗</span>
                <span>Murky, discolored water</span>
              </li>
              <li className="flex gap-2">
                <span className="text-red-500">✗</span>
                <span>Visible sediment and particles</span>
              </li>
              <li className="flex gap-2">
                <span className="text-red-500">✗</span>
                <span>Foul taste and odor</span>
              </li>
              <li className="flex gap-2">
                <span className="text-red-500">✗</span>
                <span>High TDS levels</span>
              </li>
              <li className="flex gap-2">
                <span className="text-red-500">✗</span>
                <span>Health hazards from bacteria</span>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-full bg-green-50 rounded-lg p-4 mb-4 border-2 border-green-200">
              <img 
                src={waterAfter} 
                alt="Pure crystal clear water after RO purification - transparent clean drinking water" 
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
            <h4 className="font-display text-lg font-bold text-green-600 mb-2">AFTER HomeSpark Service</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li className="flex gap-2">
                <span className="text-green-500">✓</span>
                <span>Crystal clear, pure water</span>
              </li>
              <li className="flex gap-2">
                <span className="text-green-500">✓</span>
                <span>Zero sediment or impurities</span>
              </li>
              <li className="flex gap-2">
                <span className="text-green-500">✓</span>
                <span>Fresh taste with minerals</span>
              </li>
              <li className="flex gap-2">
                <span className="text-green-500">✓</span>
                <span>Optimal TDS levels</span>
              </li>
              <li className="flex gap-2">
                <span className="text-green-500">✓</span>
                <span>100% bacteria-free water</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center bg-card rounded-2xl p-8 border border-border">
        <h3 className="font-display text-2xl font-bold mb-3">Your RO Needs Professional Care</h3>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Don't wait for your RO purifier to break down. Book a maintenance service with HomeSpark
          today and ensure your family drinks pure, healthy water year-round.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/ro-service-patna">
            <Button size="lg" className="gradient-primary w-full sm:w-auto">
              Book RO Service Now
            </Button>
          </Link>
          <a href="tel:9231421568">
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              Call: 9231421568
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
