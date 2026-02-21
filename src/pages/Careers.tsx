import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Briefcase, MapPin, Clock, Users, TrendingUp, Heart, CheckCircle2, Phone, MessageCircle, Send, User, Mail, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

const OPENINGS = [
  {
    title: "Sales Executive",
    type: "Full-Time",
    location: "Patna, Bihar",
    slots: "3 Openings",
    icon: TrendingUp,
    desc: "Drive business growth by acquiring new customers and generating leads for our RO & appliance service offerings.",
    responsibilities: [
      "Generate leads through field visits and phone calls",
      "Pitch AMC plans and service packages to households",
      "Meet monthly sales targets",
      "Maintain customer relationship and follow-up",
    ],
    requirements: [
      "Min. 10+2 qualification",
      "Good communication skills (Hindi/English)",
      "Basic smartphone usage",
      "Prior sales experience preferred but not mandatory",
    ],
  },
  {
    title: "Tele Marketing Executive",
    type: "Full-Time",
    location: "Patna, Bihar",
    slots: "5 Openings",
    icon: Phone,
    desc: "Handle inbound & outbound calls, explain services, convert inquiries into bookings, and ensure excellent customer experience over phone.",
    responsibilities: [
      "Handle inbound customer queries and service bookings",
      "Make outbound calls to generate leads & follow up",
      "Explain service packages and AMC plans clearly",
      "Maintain call records and daily reports",
    ],
    requirements: [
      "Min. 10+2 qualification",
      "Clear Hindi communication skills",
      "Patience and positive attitude",
      "Prior tele-calling experience is a plus",
    ],
  },
  {
    title: "Team Lead",
    type: "Full-Time",
    location: "Patna, Bihar",
    slots: "1 Opening",
    icon: Users,
    desc: "Lead and mentor a team of sales and tele-marketing executives to achieve weekly and monthly revenue targets.",
    responsibilities: [
      "Supervise and guide team of 5–10 executives",
      "Set daily/weekly targets and monitor performance",
      "Conduct training sessions and team reviews",
      "Coordinate with management and report progress",
    ],
    requirements: [
      "Min. 2 years of team management experience",
      "Strong leadership and communication skills",
      "Experience in sales or service industry",
      "Graduation preferred",
    ],
  },
];

const PERKS = [
  { icon: TrendingUp, title: "Growth Opportunity", desc: "Fast-track career growth based on performance" },
  { icon: Heart, title: "Supportive Culture", desc: "Friendly and collaborative work environment" },
  { icon: Clock, title: "Fixed Working Hours", desc: "Monday to Saturday, 9 AM – 6 PM" },
  { icon: CheckCircle2, title: "Incentives & Bonuses", desc: "Attractive incentives on hitting targets" },
];

const WHATSAPP = "919231421568";
const PHONE = "9231421568";

const POSITIONS = ["Sales Executive", "Tele Marketing Executive", "Team Lead", "Other"];

export default function Careers() {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", phone: "", email: "", position: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    try {
      await emailjs.send("service_ull1syo", "template_bsuis1q", {
        name: form.name,
        phone: form.phone,
        email: form.email || "N/A",
        position: form.position,
        message: form.message,
      }, "FYpeTNzuGjjFH9Z3a");
      setSubmitted(true);
      toast({ title: "Application Sent!", description: "We'll review and get back to you within 24 hours." });
    } catch {
      toast({ title: "Failed to send", description: "Please try again or contact us via phone.", variant: "destructive" });
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="gradient-primary text-primary-foreground py-16 md:py-24">
        <div className="container text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-foreground/10 backdrop-blur text-sm font-medium mb-6 border border-primary-foreground/20">
            <Briefcase className="w-4 h-4" /> We're Hiring!
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-extrabold mb-4">
            Join the HomeSpark Team
          </h1>
          <p className="text-primary-foreground/80 text-lg leading-relaxed">
            Build your career with Patna's most trusted home service brand. We're looking for motivated individuals ready to grow with us.
          </p>
        </div>
      </section>

      {/* Perks */}
      <section className="py-14 md:py-20 gradient-primary-soft">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-3">Why Work With Us?</h2>
            <p className="text-muted-foreground">We invest in our people as much as our customers.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {PERKS.map((p) => (
              <div key={p.title} className="bg-card rounded-xl p-6 shadow-card border border-border text-center hover:shadow-elevated hover:-translate-y-1 transition-all">
                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mx-auto mb-3">
                  <p.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-display font-semibold mb-1">{p.title}</h3>
                <p className="text-sm text-muted-foreground">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Current Openings</h2>
            <p className="text-muted-foreground text-lg">Apply now and be part of a growing team in Patna.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {OPENINGS.map((job) => (
              <div
                key={job.title}
                className="bg-card rounded-2xl border-2 border-border shadow-card hover:shadow-elevated hover:-translate-y-1 transition-all flex flex-col overflow-hidden"
              >
                {/* Card Header */}
                <div className="gradient-primary p-6 text-primary-foreground">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-11 h-11 rounded-xl bg-primary-foreground/15 flex items-center justify-center">
                      <job.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-lg leading-tight">{job.title}</h3>
                      <span className="text-primary-foreground/70 text-xs">{job.slots}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-3 text-xs">
                    <span className="flex items-center gap-1 bg-primary-foreground/15 px-2.5 py-1 rounded-full">
                      <Briefcase className="w-3 h-3" /> {job.type}
                    </span>
                    <span className="flex items-center gap-1 bg-primary-foreground/15 px-2.5 py-1 rounded-full">
                      <MapPin className="w-3 h-3" /> {job.location}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-sm text-muted-foreground mb-5 leading-relaxed">{job.desc}</p>

                  <div className="mb-5">
                    <h4 className="font-display font-semibold text-sm mb-3 text-foreground">Responsibilities</h4>
                    <ul className="space-y-2">
                      {job.responsibilities.map((r) => (
                        <li key={r} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 text-success shrink-0 mt-0.5" />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-display font-semibold text-sm mb-3 text-foreground">Requirements</h4>
                    <ul className="space-y-2">
                      {job.requirements.map((r) => (
                        <li key={r} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto flex flex-col gap-3">
                    <a
                      href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(`Hi, I'm interested in the ${job.title} position at HomeSpark, Patna.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="w-full gradient-primary text-primary-foreground rounded-full">
                        <MessageCircle className="w-4 h-4 mr-2" /> Apply via WhatsApp
                      </Button>
                    </a>
                    <a href={`tel:${PHONE}`}>
                      <Button variant="outline" className="w-full rounded-full">
                        <Phone className="w-4 h-4 mr-2" /> Call to Apply
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 md:py-24 gradient-primary-soft">
        <div className="container max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 border border-primary/20">
              <Send className="w-4 h-4" /> Quick Apply
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">Send Your Application</h2>
            <p className="text-muted-foreground">Fill in the form below and we'll get back to you within 24 hours.</p>
          </div>

          <div className="bg-card rounded-2xl border border-border shadow-elevated p-8">
            {submitted ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-bold mb-2">Application Sent!</h3>
                <p className="text-muted-foreground">Your email client should have opened. We'll review your application and reach out soon.</p>
                <Button className="mt-6 rounded-full gradient-primary text-primary-foreground" onClick={() => setSubmitted(false)}>
                  Submit Another
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name <span className="text-destructive">*</span></Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input id="name" name="name" placeholder="Your full name" className="pl-9" value={form.name} onChange={handleChange} required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number <span className="text-destructive">*</span></Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input id="phone" name="phone" type="tel" placeholder="+91 98765 43210" className="pl-9" value={form.phone} onChange={handleChange} required />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input id="email" name="email" type="email" placeholder="your@email.com" className="pl-9" value={form.email} onChange={handleChange} />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="position">Position Applying For <span className="text-destructive">*</span></Label>
                  <select
                    id="position"
                    name="position"
                    value={form.position}
                    onChange={handleChange}
                    required
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option value="">Select a position…</option>
                    {POSITIONS.map((p) => <option key={p} value={p}>{p}</option>)}
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Cover Message <span className="text-destructive">*</span></Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us a little about yourself, your experience, and why you'd like to join HomeSpark…"
                    className="min-h-[120px] resize-none"
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <p className="text-xs text-muted-foreground">
                  Your application will be sent to <span className="font-medium text-foreground">info@homespark.co.in</span>. Make sure your email client is set up on this device.
                </p>

                <Button type="submit" size="lg" className="w-full gradient-primary text-primary-foreground rounded-full font-semibold" disabled={sending}>
                  {sending ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Send className="w-4 h-4 mr-2" />}
                  {sending ? "Sending..." : "Send Application"}
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 gradient-primary text-primary-foreground">
        <div className="container text-center max-w-2xl mx-auto">
          <h2 className="font-display text-3xl font-bold mb-4">Don't See a Suitable Role?</h2>
          <p className="text-primary-foreground/80 mb-8">
            Send us your resume on WhatsApp or call us directly. We're always looking for talented people!
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Hi, I'd like to apply at HomeSpark. Please consider my profile.")}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" variant="secondary" className="rounded-full px-8 font-semibold">
                <MessageCircle className="w-4 h-4 mr-2" /> WhatsApp Your Resume
              </Button>
            </a>
            <a href={`tel:${PHONE}`}>
              <Button size="lg" variant="secondary" className="rounded-full px-8 font-semibold">
                <Phone className="w-4 h-4 mr-2" /> Call Us Now
              </Button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
