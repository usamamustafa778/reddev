import Footer from "@/components/common/Footer";
import FirstNavbar from "@/components/common/Navbar";
import FullContainer from "@/components/common/FullContainer";
import Container from "@/components/common/Container";
import { ArrowRight, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import Head from "next/head";

const projects = [
  {
    name: "Sunfish",
    url: "https://joinsunfish.com",
    tag: "HealthTech · US Market",
    desc: "IVF financing and fertility support platform. Raised $10M Series A. Featured in Bloomberg, TechCrunch, and Wall Street Journal.",
    badge: "$10M Funded",
  },
  {
    name: "OggoAir",
    url: "https://oggoair.com",
    tag: "Travel Tech · Multi-country",
    desc: "Enterprise travel portal built on Sabre GDS — the same infrastructure powering Expedia and American Airlines. Live across Canada, Uganda and South Africa.",
    badge: "Sabre GDS",
  },
  {
    name: "EatsDesk",
    url: "https://eatsdesk.com",
    tag: "Restaurant Tech · SaaS",
    desc: "Restaurant management SaaS with built-in CMS, table management, online ordering and real-time reporting. Our own product — actively growing.",
    badge: "Own Product",
  },
  {
    name: "VerifiedCRM",
    url: "https://verifiedcrm.com",
    tag: "CRM · Call Centers",
    desc: "Lead management CRM used by call centers serving US local service businesses. Built for high-volume lead operations at scale.",
    badge: null,
  },
  {
    name: "BullionCRM",
    url: "https://bullioncrm.com",
    tag: "FinTech · Gold Trading",
    desc: "CRM built specifically for gold and precious metals trading. Handles complex product-based customer relationships in a regulated niche.",
    badge: null,
  },
  {
    name: "ReplyWay",
    url: "https://replyway.com",
    tag: "Communication · SaaS",
    desc: "Full-featured team chat application. Real-time messaging, channels, and file sharing built from scratch.",
    badge: null,
  },
  {
    name: "ReplySystem",
    url: "https://replysystem.com",
    tag: "Project Management · SaaS",
    desc: "In-house ticketing and project management system — think Jira but custom built for our client's specific workflow.",
    badge: null,
  },
  {
    name: "Tekruiter",
    url: "https://tekruiter.com",
    tag: "HR Tech · Job Portal",
    desc: "Full job portal connecting employers and candidates. Built with advanced search, application tracking and employer dashboards.",
    badge: null,
  },
  {
    name: "ZuhaHost",
    url: "https://zuhahost.com",
    tag: "Hospitality · SaaS",
    desc: "Hotel management system handling reservations, room management, guest experience and property operations.",
    badge: "Own Product",
  },
  {
    name: "SalesLens",
    url: "https://saleslens.co",
    tag: "E-commerce · Analytics",
    desc: "E-commerce profit intelligence platform. Multi-channel sales analytics giving merchants full visibility into their real profitability.",
    badge: "Own Product",
  },
  {
    name: "RoboAnywhere",
    url: "https://roboanywhere.com",
    tag: "SEO · Automation",
    desc: "Automated backlink building system. Scalable SEO automation for agencies and digital marketers running link campaigns at scale.",
    badge: null,
  },
  {
    name: "SiteBuilderz",
    url: "https://sitebuilderz.com",
    tag: "CMS · Platform",
    desc: "Custom CMS platform built from scratch. Enables non-technical users to manage and publish content without developer dependency.",
    badge: "Own Product",
  },
  {
    name: "DigiKhata",
    url: null,
    tag: "FinTech · Accounting",
    desc: "Digital accounting and financial management app. Bookkeeping, invoicing and financial tracking for small businesses.",
    badge: null,
  },
  {
    name: "500+ Lead Gen Websites",
    url: null,
    tag: "Local Services · US Market",
    desc: "Built over 500 lead generation websites across 70+ US local service niches — HVAC, roofing, chimney, plumbing, pest control, carpet cleaning and more. For a $5M/year US lead generation operation.",
    badge: "500+ Sites",
  },
];

export default function Portfolio() {
  return (
    <>
      <Head>
        <title>Software Development Portfolio | 15+ Products Built | RedDev</title>
        <meta name="description" content="RedDev's software development portfolio — 15+ products across 8 industries. SaaS platforms, mobile apps, CRMs, e-commerce stores, and 500+ lead generation sites. See what we've shipped." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="software development portfolio, RedDev portfolio, SaaS products built, mobile apps portfolio, web development projects" />

        <meta property="og:title" content="Software Development Portfolio | 15+ Products Built | RedDev" />
        <meta property="og:description" content="15+ real software products shipped. SaaS platforms, CRMs, mobile apps, e-commerce stores & lead gen systems across 8 industries." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://reddevsystems.com/portfolio" />
        <meta property="og:image" content="https://reddevsystems.com/reddev.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="RedDev" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Software Development Portfolio | 15+ Products | RedDev" />
        <meta name="twitter:description" content="SaaS, CRMs, mobile apps, e-commerce & lead gen systems — 15+ products shipped across 8 industries." />
        <meta name="twitter:image" content="https://reddevsystems.com/reddev.png" />

        <link rel="canonical" href="https://reddevsystems.com/portfolio" />
      </Head>

      <FirstNavbar />

      {/* ========== HERO ========== */}
      <FullContainer className="relative min-h-[60vh] overflow-hidden bg-black">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-900 to-black"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(220,38,38,0.2),rgba(0,0,0,0))]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_80%_50%,rgba(234,88,12,0.15),rgba(0,0,0,0))]"></div>

        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-0 -left-40 w-[500px] h-[500px] bg-red-600/40 rounded-full blur-3xl animate-blob"></div>
          <div className="absolute top-0 -right-40 w-[500px] h-[500px] bg-orange-600/40 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-40 left-20 w-[500px] h-[500px] bg-rose-600/30 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        <Container className="relative z-10 overflow-hidden">
          <div className="w-full flex flex-col text-center py-16 md:py-20 pt-28 md:pt-36 items-center">
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
                Real Products. Real Clients. Real Results.
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black max-w-5xl"
            >
              <span className="block text-white">Products We&apos;ve</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-red-500">
                Built.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-lg md:text-xl text-white/70 max-w-3xl"
            >
              15+ real products. 8 industries. 6 years. Here&apos;s what we&apos;ve shipped.
            </motion.p>

            <div className="mt-14 grid grid-cols-3 gap-6 md:gap-16">
              {[
                { number: "15+", label: "Products Built" },
                { number: "8", label: "Industries" },
                { number: "6+", label: "Years" },
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

      {/* ========== PROJECT GRID ========== */}
      <FullContainer className="relative py-20 md:py-28 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-slate-200/60 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-slate-300/40 rounded-full blur-3xl"></div>
        </div>

        <Container className="relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative h-full p-8 bg-white rounded-2xl border-2 border-slate-200 hover:border-red-200 hover:shadow-xl transition-all duration-300 flex flex-col">
                  {/* Badge */}
                  {project.badge && (
                    <div className="absolute top-6 right-6">
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-red-600 to-orange-600 text-white text-xs font-bold">
                        {project.badge}
                      </span>
                    </div>
                  )}

                  {/* Tag */}
                  <div className="mb-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-500 text-xs font-semibold">
                      {project.tag}
                    </span>
                  </div>

                  {/* Name */}
                  <h3 className="text-xl font-black text-slate-900 mb-3 group-hover:text-red-600 transition-colors duration-300">
                    {project.name}
                  </h3>

                  {/* URL */}
                  {project.url && (
                    <p className="text-sm text-slate-400 mb-3 font-medium">
                      {project.url.replace("https://", "")}
                    </p>
                  )}

                  {/* Description */}
                  <p className="text-sm text-slate-600 leading-relaxed flex-1 mb-6">
                    {project.desc}
                  </p>

                  {/* CTA */}
                  {project.url ? (
                    <Link
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-bold text-red-600 hover:text-red-700 transition-colors duration-200"
                    >
                      View Project
                      <ExternalLink className="w-4 h-4" />
                    </Link>
                  ) : (
                    <span className="inline-flex items-center gap-2 text-sm font-bold text-slate-400">
                      Available on request
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </FullContainer>

      {/* ========== BOTTOM CTA ========== */}
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
              Want to See{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-red-500">
                More?
              </span>
            </h2>

            <p className="text-xl md:text-2xl text-white/60 leading-relaxed mb-12 max-w-3xl mx-auto">
              We have case studies, screenshots and full project breakdowns available on request.
            </p>

            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-red-600 to-orange-600 text-white text-lg font-bold rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-red-500/30"
              >
                <span>Request Case Studies</span>
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
