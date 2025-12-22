import React from "react";
import FullContainer from "../common/FullContainer";
import Container from "../common/Container";
import { Calendar, Users, CheckCircle, Clock } from "lucide-react";

export default function CapacitySection() {
  const currentMonth = new Date().toLocaleString('default', { month: 'long' });
  const nextMonth = new Date(new Date().setMonth(new Date().getMonth() + 1)).toLocaleString('default', { month: 'long', year: 'numeric' });

  const capacityStats = [
    {
      icon: <Users className="w-8 h-8" />,
      number: "2-3",
      label: "New Projects Monthly",
      description: "We limit capacity to ensure quality"
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      number: nextMonth,
      label: "Next Available Start",
      description: "Current pipeline is at capacity"
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      number: "99.2%",
      label: "On-Time Delivery",
      description: "Consistent project completion"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      number: "48hrs",
      label: "Response Time",
      description: "For qualified inquiries"
    }
  ];

  return (
    <FullContainer className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      <div className="absolute inset-0">
        <div className="absolute -left-4 -top-24 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl"></div>
        <div className="absolute right-0 bottom-0 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl"></div>
      </div>

      <Container className="relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            🎯 Quality-First Approach
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            We Take{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/80">
              2-3 New Builds
            </span>{" "}
            Per Month
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            To protect quality and ensure dedicated attention, we limit our client intake. 
            This allows us to deliver exceptional results for each project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {capacityStats.map((stat, index) => (
            <div
              key={index}
              className="relative group"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay={index * 100}
            >
              {/* Card Background */}
              <div className="absolute inset-0 bg-white rounded-2xl shadow-lg border border-gray-100"></div>

              {/* Hover Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent rounded-2xl"></div>
              </div>

              {/* Content */}
              <div className="relative p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  {stat.icon}
                </div>
                <span className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-300">
                  {stat.number}
                </span>
                <span className="text-lg font-medium text-gray-700 mb-2">
                  {stat.label}
                </span>
                <span className="text-sm text-gray-500">
                  {stat.description}
                </span>

                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-primary/20 rounded-tl-2xl"></div>
                <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-primary/20 rounded-br-2xl"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Professional CTA */}
        <div className="bg-gradient-to-r from-gray-50 to-white border border-gray-200 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Discuss Your Project?
          </h3>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            We review each inquiry carefully to ensure we're the right fit. 
            Share your project details and we'll respond within 48 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white text-lg font-semibold rounded-xl shadow-lg hover:bg-primary/90 transition-all duration-300 group relative">
              <span className="relative z-10">Schedule Strategy Call</span>
            </button>
            <div className="text-sm text-gray-500">
              <span className="font-medium">Minimum project:</span> $15,000
            </div>
          </div>
        </div>
      </Container>
    </FullContainer>
  );
}
