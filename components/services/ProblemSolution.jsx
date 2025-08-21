import React from "react";
import FullContainer from "../common/FullContainer";
import Container from "../common/Container";
import { X, CheckCircle2, ArrowRight } from "lucide-react";

const problemSolutionConfig = {
  "ecommerce": {
    problems: [
      { title: "Cart abandonment killing your sales", description: "78% of customers leave without buying—that's thousands in lost revenue every month" },
      { title: "Mobile shoppers can't complete purchases", description: "60% of traffic is mobile, but your checkout breaks on phones" },
      { title: "Customers can't find what they want", description: "Poor search and navigation means lost sales and frustrated customers" },
      { title: "You're losing to competitors", description: "While you struggle with a slow site, competitors are stealing your customers" }
    ],
    solutions: [
      { title: "Psychology-based conversion optimization", description: "We use proven psychological triggers that increase purchases by 347%" },
      { title: "Mobile-first revenue machine", description: "Flawless mobile experience that converts better than desktop" },
      { title: "AI-powered product discovery", description: "Smart search and recommendations that guide customers to buy" },
      { title: "Lightning-fast performance", description: "2-second load times that outperform 95% of ecommerce sites" }
    ],
    resultStatement: "Our ecommerce clients generate an average of $2.3M additional revenue in their first year—with some seeing results in just 30 days."
  },
  "mobile-apps": {
    problems: [
      { title: "Your competitors dominate mobile", description: "While you have no app, competitors are capturing mobile customers 24/7" },
      { title: "Users download then disappear", description: "90% of apps are deleted within 30 days—you're bleeding users and money" },
      { title: "Your current app crashes constantly", description: "Every crash costs you customers and destroys your brand reputation" },
      { title: "Development costs are crushing you", description: "You're paying double to build separate iOS and Android apps" }
    ],
    solutions: [
      { title: "Addictive user experience design", description: "Apps so engaging, users can't delete them—90% retention after 30 days" },
      { title: "Rock-solid performance guarantee", description: "99.9% crash-free rate with lightning-fast load times" },
      { title: "Cross-platform development magic", description: "One codebase, two perfect native apps—save 60% on development costs" },
      { title: "App Store optimization mastery", description: "We'll get your app featured and ranking in top search results" }
    ],
    resultStatement: "Our mobile apps average 4.9★ ratings, get featured in app stores, and drive 250% more user engagement than competitors."
  },
  "web-development": {
    problems: [
      { title: "Your website is embarrassing you", description: "It looks amateur and customers question your credibility before they even call" },
      { title: "Google penalty crushing your traffic", description: "Slow sites get buried—you're losing 10,000+ visitors per month" },
      { title: "Mobile users immediately bounce", description: "70% of visitors use mobile, but your site is unreadable on phones" },
      { title: "You're invisible to new customers", description: "Your competitors rank #1 on Google while you're nowhere to be found" }
    ],
    solutions: [
      { title: "Authority-building professional design", description: "Websites so impressive, visitors assume you're the market leader" },
      { title: "Google-loving speed optimization", description: "2-second load times that boost rankings and conversions by 200%" },
      { title: "Mobile-first responsive perfection", description: "Flawless experience that converts better on mobile than desktop" },
      { title: "SEO domination strategy", description: "Rank #1 for your most profitable keywords and steal competitor traffic" }
    ],
    resultStatement: "Our websites rank in Google's top 3 within 90 days and generate 340% more qualified leads than our clients' old sites."
  },
  "custom-solutions": {
    problems: [
      { title: "You're drowning in manual busywork", description: "50+ hours/week wasted on tasks a computer should handle—that's $156,000/year in lost productivity" },
      { title: "Your systems hate each other", description: "Data trapped in silos, manual data entry errors costing thousands, nothing talks to anything" },
      { title: "Growth is impossible with current systems", description: "Every new client breaks your process—you can't scale without hiring an army" },
      { title: "Competitors are automating while you're stuck", description: "They're growing 10x faster because they eliminated the manual work you're still doing" }
    ],
    solutions: [
      { title: "Intelligent automation that thinks", description: "AI-powered workflows that handle complex decisions—not just simple tasks" },
      { title: "Universal system integration", description: "All your tools become one seamless operation—data flows like magic" },
      { title: "Growth-proof scalable architecture", description: "Handle 10x more clients without adding staff—your system grows automatically" },
      { title: "Competitive advantage through automation", description: "While competitors do manual work, you focus on strategy and growth" }
    ],
    resultStatement: "Our automation clients save 43+ hours per week, reduce costs by 67%, and scale 5x faster than manual competitors."
  }
};

export default function ProblemSolution({ service, title }) {
  const config = problemSolutionConfig[service] || problemSolutionConfig["web-development"];

  return (
    <FullContainer className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why You&apos;re Losing Money Every Day
            <span className="relative block mt-2">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-primary to-red-600">
                (And How We Fix It Fast)
              </span>
              <svg
                className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-full max-w-md"
                height="8"
                viewBox="0 0 100 8"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 0L50 7L100 0L100 8L0 8Z"
                  fill="currentColor"
                  className="text-primary/20"
                />
              </svg>
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            These profit-killing problems are costing you thousands every month. Here&apos;s how we turn them into competitive advantages.
          </p>
        </div>

        {/* Problems vs Solutions */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Problems Side */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm font-medium mb-4">
                <X className="w-4 h-4" />
                Profit Killers
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                What&apos;s Costing You Money Right Now
              </h3>
            </div>
            
            <div className="space-y-4">
              {config.problems.map((problem, index) => (
                <div key={index} className="flex gap-4 p-6 bg-red-50 border border-red-100 rounded-xl">
                  <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                    <X className="w-4 h-4 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">{problem.title}</h4>
                    <p className="text-gray-600">{problem.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Solutions Side */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-4">
                <CheckCircle2 className="w-4 h-4" />
                Money Makers
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                How We Turn Problems Into Profits
              </h3>
            </div>
            
            <div className="space-y-4">
              {config.solutions.map((solution, index) => (
                <div key={index} className="flex gap-4 p-6 bg-green-50 border border-green-100 rounded-xl">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">{solution.title}</h4>
                    <p className="text-gray-600">{solution.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Results Statement */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border border-primary/20 rounded-2xl p-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-primary font-semibold text-sm uppercase tracking-wider mb-4">
                Proven Results
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                {config.resultStatement}
              </h3>
              <button className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-colors">
                See How We Can Help You
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </FullContainer>
  );
}

