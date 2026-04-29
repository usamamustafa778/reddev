import Footer from "@/components/common/Footer";
import FirstNavbar from "@/components/common/Navbar";
import FullContainer from "@/components/common/FullContainer";
import Container from "@/components/common/Container";
import {
  ArrowRight,
  Globe,
  Users,
  BarChart3,
  Zap,
  Clock,
  CheckCircle2,
  Shield,
  Target,
  Layers,
  Megaphone,
  HeartHandshake,
  AlertTriangle,
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import Head from "next/head";

const pillars = [
  {
    icon: Globe,
    title: "The Conversion Machine",
    value: "$2,500",
    features: [
      "Niche-specific lead gen website",
      "Mobile-first, loads under 2 seconds",
      "Conversion-optimized layout",
      "Built on 500+ real systems",
    ],
  },
  {
    icon: Users,
    title: "Lead Capture Fortress",
    value: "$2,000",
    features: [
      "Automated CRM — zero leads lost",
      "Instant email + SMS alerts",
      "Full lead pipeline dashboard",
      "Every lead tracked automatically",
    ],
  },
  {
    icon: Layers,
    title: "The Scale Engine",
    value: "$2,000",
    features: [
      "Built-in CMS — no developers needed",
      "Multi-niche, multi-location ready",
      "Add cities and niches in days",
      "White-label ready",
    ],
  },
  {
    icon: Target,
    title: "Tracking Foundation",
    value: "$1,000",
    features: [
      "Google Tag Manager setup",
      "Conversion tracking configured",
      "Form submission tracking",
      "Ready for any ad platform",
    ],
  },
  {
    icon: Megaphone,
    title: "Launch-Ready Ad Package",
    value: "$2,000",
    features: [
      "Complete Google Ads campaign structure",
      "Niche-specific keyword list (proven)",
      "Negative keyword list",
      "15 headlines + 4 descriptions written",
    ],
  },
  {
    icon: HeartHandshake,
    title: "The Safety Net",
    value: "$1,500",
    features: [
      "30-day post-launch support",
      "Video walkthrough + documentation",
      "Live handover call",
    ],
  },
];

const niches = [
  "Roofing", "HVAC", "Chimney Sweeping", "Plumbing", "Pest Control",
  "Locksmith", "Carpet Cleaning", "Water Damage Restoration",
  "Garage Door Repair", "Handyman", "Moving Services", "Appliance Repair",
  "Pressure Washing", "Landscaping", "Painting", "Drywall Repair",
  "Window Installation", "Fence Installation", "Solar Installation",
  "Towing", "Mold Remediation", "Fire Damage", "Insulation",
  "Gutter Cleaning", "Gate Repair", "Dryer Vent Cleaning",
  "Air Duct Cleaning", "Bathroom Remodel", "Kitchen Remodeling",
  "Flooring Installation", "Water Heater Repair", "Roof Installation",
  "Siding Installation", "Swimming Pool", "General Contractor",
];

const processSteps = [
  { day: "Day 1", title: "Discovery Call", description: "45-minute deep dive into your niche, service area, ideal customer, and goals. We map out the entire system before anything gets built." },
  { day: "Day 2", title: "You Approve the Full Plan", description: "We send you the complete blueprint — sitemap, CRM flow, ad structure, copy direction. Nothing moves forward until you say yes." },
  { day: "Days 3–13", title: "We Build Everything", description: "Website, CRM, automations, Google Ads structure, tracking — all built, tested, and configured by our team. You focus on your business." },
  { day: "Day 14", title: "Handover Call", description: "Live walkthrough of your entire system. We train you on the CRM, walk through the ads, and hand over full ownership. You own it." },
  { day: "Days 14–44", title: "30-Day Support Included", description: "Questions, tweaks, small changes — we're on call for 30 days after launch. No extra charge. No support tickets. Direct access." },
];

const guarantees = [
  {
    icon: Clock,
    title: "14-Day Delivery",
    description: "Full system in 14 days or your final 50% is free.",
  },
  {
    icon: Shield,
    title: "Lead Capture",
    description: "System doesn't capture leads in 30 days? We fix it free.",
  },
  {
    icon: CheckCircle2,
    title: "Clarity",
    description: "You approve the full plan before we write a single line of code.",
  },
];

export default function LeadEngine() {
  return (
    <>
      <Head>
        <title>The Lead Engine — Done-For-You Lead Generation System | RedDev</title>
        <meta
          name="description"
          content="The complete done-for-you lead generation system for US marketing agencies — website, CRM, and Google Ads structure delivered in 14 days for $3,500. Guaranteed."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="The Lead Engine — Done-For-You Lead Generation System | RedDev" />
        <meta property="og:description" content="Website + CRM + Google Ads structure — delivered in 14 days. $3,500 one-time. Guaranteed." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://reddevsystems.com/lead-engine" />
      </Head>

      <FirstNavbar />

      {/* ========== HERO ========== */}
      <FullContainer className="relative min-h-screen overflow-hidden bg-black">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-900 to-black"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(220,38,38,0.2),rgba(0,0,0,0))]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_80%_50%,rgba(234,88,12,0.15),rgba(0,0,0,0))]"></div>

        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-0 -left-40 w-[500px] h-[500px] bg-red-600/40 rounded-full blur-3xl animate-blob"></div>
          <div className="absolute top-0 -right-40 w-[500px] h-[500px] bg-orange-600/40 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-40 left-20 w-[500px] h-[500px] bg-rose-600/30 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        <Container className="relative z-10 overflow-hidden">
          <div className="w-full flex flex-col text-center py-16 md:py-20 pt-24 md:pt-32 items-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl mb-10"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute h-full w-full rounded-full bg-red-500 opacity-75"></span>
                <span className="relative h-2.5 w-2.5 bg-red-500 rounded-full"></span>
              </span>
              <span className="text-xs font-bold text-white/90 uppercase">
                Done-For-You Lead Generation
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black max-w-5xl"
            >
              <span className="block text-white">The Lead Engine.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-6 text-lg md:text-xl text-white/70 max-w-3xl"
            >
              The complete done-for-you lead generation system for US marketing
              agencies — website, CRM, and Google Ads structure — delivered in
              14 days. Guaranteed.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/contact"
                className="px-8 py-4 bg-white text-black rounded-xl font-bold flex items-center justify-center gap-2"
              >
                Book a Free Call
                <ArrowRight />
              </Link>
            </motion.div>

            <div className="mt-16 grid grid-cols-3 gap-6 md:gap-12">
              {[
                { number: "$3,500", label: "One-Time Investment" },
                { number: "14 Days", label: "Delivery Guarantee" },
                { number: "70+", label: "Niches Built" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="text-center"
                >
                  <div className="text-2xl md:text-3xl font-bold text-white">{stat.number}</div>
                  <div className="text-sm text-white/60">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>

        <style jsx global>{`
          @keyframes blob {
            0%,100% { transform: translate(0,0); }
            50% { transform: translate(30px,-30px); }
          }
          .animate-blob { animation: blob 8s infinite ease-in-out; }
        `}</style>
      </FullContainer>

      {/* ========== PROBLEM SECTION ========== */}
      <FullContainer className="relative py-16 md:py-24 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-slate-200/60 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-slate-300/40 rounded-full blur-3xl"></div>
        </div>

        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center transform -rotate-12">
                <AlertTriangle className="w-6 h-6 text-white" />
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight text-slate-900 mb-8">
              Your Agency Has a{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">
                System Problem
              </span>
              .
            </h2>

            <div className="space-y-6 text-slate-600 text-base md:text-lg leading-relaxed max-w-2xl">
              <p>
                You&apos;re running campaigns. Traffic is coming in. But leads
                are getting lost, websites aren&apos;t converting, and every new
                niche takes weeks to set up.
              </p>
              <p className="text-slate-900 font-bold text-lg md:text-xl border-l-4 border-red-500 pl-4">
                That&apos;s not an ads problem. That&apos;s a system problem. We fix it.
              </p>
            </div>
          </motion.div>
        </Container>
      </FullContainer>

      {/* ========== 6 PILLARS — WHAT YOU GET ========== */}
      <FullContainer className="relative py-16 md:py-24 bg-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-900 to-black"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_20%_50%,rgba(220,38,38,0.1),rgba(0,0,0,0))]"></div>

        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight text-white max-w-3xl">
              What You{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-red-500">
                Get
              </span>
              .
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="relative h-full p-8 bg-white/5 rounded-2xl border border-white/10 hover:border-red-500/30 transition-all duration-300 group-hover:-translate-y-1">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-600 to-orange-600 flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                      <pillar.icon className="w-6 h-6 text-white" strokeWidth={2} />
                    </div>
                    <span className="text-sm font-bold text-white/30">
                      Value: {pillar.value}
                    </span>
                  </div>

                  <h3 className="text-lg font-black text-white mb-4">{pillar.title}</h3>

                  <ul className="space-y-2.5">
                    {pillar.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-white/70">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </FullContainer>

      {/* ========== VALUE STACK ========== */}
      <FullContainer className="relative py-16 md:py-20 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-slate-200/60 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-slate-300/40 rounded-full blur-3xl"></div>
        </div>

        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="space-y-4 mb-8">
              <div className="text-slate-500 text-lg line-through">Total Stack Value: $11,000+</div>
              <div className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">
                Your Investment: $3,500
              </div>
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-green-50 border border-green-200">
                <span className="text-lg font-bold text-green-700">You Save: $7,500+</span>
              </div>
            </div>
          </motion.div>
        </Container>
      </FullContainer>

      {/* ========== 3 GUARANTEES ========== */}
      <FullContainer className="relative py-16 md:py-24 bg-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-900 to-black"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(220,38,38,0.15),rgba(0,0,0,0))]"></div>

        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight text-white">
              Triple{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-red-500">
                Guarantee
              </span>
              .
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {guarantees.map((g, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                <div className="relative h-full p-8 bg-white/5 rounded-2xl border border-white/10 hover:border-red-500/30 transition-all duration-300 text-center">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-red-600 to-orange-600 flex items-center justify-center shadow-lg mx-auto mb-6">
                    <g.icon className="w-7 h-7 text-white" strokeWidth={2} />
                  </div>
                  <h3 className="text-xl font-black text-white mb-3">{g.title}</h3>
                  <p className="text-white/60 leading-relaxed text-sm">{g.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </FullContainer>

      {/* ========== NICHES ========== */}
      <FullContainer className="relative py-16 md:py-24 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-slate-200/60 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-slate-300/40 rounded-full blur-3xl"></div>
        </div>

        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight text-slate-900">
              70+ Niches.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">
                Built Before
              </span>
              .
            </h2>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {niches.map((niche, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.02 }}
                viewport={{ once: true }}
                className="px-5 py-2.5 bg-white rounded-full border-2 border-slate-200 text-sm font-bold text-slate-700 hover:border-red-300 hover:text-red-600 transition-all duration-200"
              >
                {niche}
              </motion.div>
            ))}
            <div className="px-5 py-2.5 bg-gradient-to-r from-red-600 to-orange-600 rounded-full text-sm font-bold text-white">
              + 40 more
            </div>
          </div>
        </Container>
      </FullContainer>

      {/* ========== PROCESS — HOW IT WORKS ========== */}
      <FullContainer className="relative py-16 md:py-24 bg-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-900 to-black"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_80%_50%,rgba(234,88,12,0.1),rgba(0,0,0,0))]"></div>

        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight text-white max-w-3xl">
              How It{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-red-500">
                Works
              </span>
              .
            </h2>
          </motion.div>

          <div className="space-y-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="flex gap-6 md:gap-8 items-start p-6 md:p-8 bg-white/5 rounded-2xl border border-white/10 hover:border-red-500/30 transition-all duration-300">
                  <div className="flex-shrink-0 w-20 md:w-24">
                    <div className="text-xs font-bold text-red-400 uppercase tracking-wider mb-1">
                      Step {index + 1}
                    </div>
                    <div className="text-sm font-bold text-white/50">{step.day}</div>
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-white mb-2">{step.title}</h3>
                    <p className="text-white/60 leading-relaxed text-sm">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </FullContainer>

      {/* ========== PRICING ========== */}
      <FullContainer className="relative py-16 md:py-24 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-slate-200/60 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-slate-300/40 rounded-full blur-3xl"></div>
        </div>

        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <div className="grid md:grid-cols-2 gap-8">
              {/* Setup */}
              <div className="relative p-8 md:p-10 bg-white rounded-2xl border-2 border-slate-200 shadow-xl">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 border border-red-200 mb-6">
                  <Zap className="w-4 h-4 text-red-600" />
                  <span className="text-sm font-bold text-red-600">Setup</span>
                </div>

                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">
                    $3,500
                  </span>
                </div>
                <p className="text-slate-500 text-sm mb-6">One-time — 50% upfront, 50% on delivery</p>

                <ul className="space-y-3">
                  {[
                    "Lead gen website",
                    "CRM + automations",
                    "Google Ads structure",
                    "Tracking setup",
                    "30-day support",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Monthly */}
              <div className="relative p-8 md:p-10 bg-white rounded-2xl border-2 border-slate-200">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 border border-slate-200 mb-6">
                  <BarChart3 className="w-4 h-4 text-slate-600" />
                  <span className="text-sm font-bold text-slate-600">Monthly (optional)</span>
                </div>

                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl md:text-5xl font-black text-slate-900">$500</span>
                  <span className="text-slate-400 text-lg">/month</span>
                </div>
                <p className="text-slate-500 text-sm mb-6">Maintenance &amp; updates retainer</p>

                <ul className="space-y-3">
                  {[
                    "Website updates & changes",
                    "CRM adjustments",
                    "New niche/location pages",
                    "Priority support",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-5 h-5 text-slate-400 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </Container>
      </FullContainer>

      {/* ========== FINAL CTA ========== */}
      <FullContainer className="relative py-24 md:py-32 bg-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-900 to-black"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_80%,rgba(220,38,38,0.2),rgba(0,0,0,0))]"></div>

        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 -left-40 w-[500px] h-[500px] bg-red-600/40 rounded-full blur-3xl animate-blob"></div>
          <div className="absolute -bottom-40 right-20 w-[500px] h-[500px] bg-orange-600/30 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        </div>

        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-white mb-6">
              We&apos;re Taking{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-red-500">
                3 New Clients
              </span>{" "}
              This Month.
            </h2>

            <p className="text-xl md:text-2xl text-white/60 leading-relaxed mb-12 max-w-3xl mx-auto">
              If your system is losing leads or slowing your growth — this is
              your fix.
            </p>

            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-red-600 to-orange-600 text-white text-lg font-bold rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-red-500/30"
              >
                <span>Book a Free Call</span>
                <ArrowRight
                  className="ml-3 w-6 h-6 transform group-hover:translate-x-1 transition-transform"
                  strokeWidth={2.5}
                />
              </motion.button>
            </Link>
          </motion.div>
        </Container>
      </FullContainer>

      <Footer />
    </>
  );
}
