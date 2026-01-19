import React from "react";

export default function BgAnimation() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Smooth animated gradient background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-red-200/30 via-transparent to-orange-200/30 animate-gradient-shift"></div>
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-rose-200/30 via-transparent to-amber-200/30 animate-gradient-shift-reverse"></div>
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0">
        {/* Circles */}
        <div className="absolute top-[10%] left-[5%] w-64 h-64 border border-red-200/30 rounded-full animate-float-slow"></div>
        <div className="absolute top-[60%] right-[10%] w-96 h-96 border border-orange-200/30 rounded-full animate-float-slower"></div>
        <div className="absolute bottom-[20%] left-[15%] w-48 h-48 border border-rose-200/40 rounded-full animate-float"></div>
        
        {/* Squares */}
        <div className="absolute top-[30%] right-[20%] w-32 h-32 border border-red-300/30 rotate-45 animate-spin-very-slow"></div>
        <div className="absolute bottom-[40%] left-[25%] w-24 h-24 border border-orange-300/30 rotate-45 animate-spin-ultra-slow"></div>
      </div>

      {/* Glowing orbs with blur */}
      <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-red-300/20 rounded-full blur-[100px] animate-pulse-slow"></div>
      <div className="absolute bottom-[10%] right-[15%] w-[600px] h-[600px] bg-orange-300/20 rounded-full blur-[120px] animate-pulse-slower"></div>
      <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-rose-300/20 rounded-full blur-[80px] animate-pulse-slowest"></div>

      {/* Subtle grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(220,38,38,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(220,38,38,0.08)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]"></div>

      {/* Animated light beams */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-0 left-[20%] w-px h-full bg-gradient-to-b from-transparent via-red-300/50 to-transparent animate-beam-1"></div>
        <div className="absolute top-0 left-[40%] w-px h-full bg-gradient-to-b from-transparent via-orange-300/50 to-transparent animate-beam-2"></div>
        <div className="absolute top-0 left-[60%] w-px h-full bg-gradient-to-b from-transparent via-rose-300/50 to-transparent animate-beam-3"></div>
        <div className="absolute top-0 left-[80%] w-px h-full bg-gradient-to-b from-transparent via-amber-300/50 to-transparent animate-beam-4"></div>
      </div>

      {/* Particles */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-red-400 rounded-full animate-particle-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.25 + 0.1,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${Math.random() * 20 + 15}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Radial gradient overlay for depth - lighter */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(255,255,255,0.3)_100%)]"></div>

      <style jsx>{`
        @keyframes gradient-shift {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 1;
          }
          50% {
            transform: translate(20px, 20px) scale(1.1);
            opacity: 0.8;
          }
        }

        @keyframes gradient-shift-reverse {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 1;
          }
          50% {
            transform: translate(-20px, -20px) scale(1.1);
            opacity: 0.8;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          33% {
            transform: translateY(-20px) translateX(10px);
          }
          66% {
            transform: translateY(-10px) translateX(-10px);
          }
        }

        @keyframes float-slow {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(-30px) translateX(15px);
          }
        }

        @keyframes float-slower {
          0%, 100% {
            transform: translateY(0px) translateX(0px) scale(1);
          }
          50% {
            transform: translateY(-40px) translateX(-20px) scale(1.05);
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.1;
            transform: scale(1);
          }
          50% {
            opacity: 0.15;
            transform: scale(1.1);
          }
        }

        @keyframes pulse-slower {
          0%, 100% {
            opacity: 0.1;
            transform: scale(1);
          }
          50% {
            opacity: 0.2;
            transform: scale(1.15);
          }
        }

        @keyframes pulse-slowest {
          0%, 100% {
            opacity: 0.08;
            transform: scale(1);
          }
          50% {
            opacity: 0.15;
            transform: scale(1.2);
          }
        }

        @keyframes spin-very-slow {
          from {
            transform: rotate(45deg);
          }
          to {
            transform: rotate(405deg);
          }
        }

        @keyframes spin-ultra-slow {
          from {
            transform: rotate(45deg);
          }
          to {
            transform: rotate(405deg);
          }
        }

        @keyframes beam-1 {
          0%, 100% {
            opacity: 0;
            transform: translateY(-100%);
          }
          50% {
            opacity: 1;
            transform: translateY(0%);
          }
        }

        @keyframes beam-2 {
          0%, 100% {
            opacity: 0;
            transform: translateY(-100%);
          }
          50% {
            opacity: 1;
            transform: translateY(0%);
          }
        }

        @keyframes beam-3 {
          0%, 100% {
            opacity: 0;
            transform: translateY(-100%);
          }
          50% {
            opacity: 1;
            transform: translateY(0%);
          }
        }

        @keyframes beam-4 {
          0%, 100% {
            opacity: 0;
            transform: translateY(-100%);
          }
          50% {
            opacity: 1;
            transform: translateY(0%);
          }
        }

        @keyframes particle-float {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) translateX(50px);
            opacity: 0;
          }
        }

        .animate-gradient-shift {
          animation: gradient-shift 20s ease-in-out infinite;
        }

        .animate-gradient-shift-reverse {
          animation: gradient-shift-reverse 25s ease-in-out infinite;
        }

        .animate-float {
          animation: float 12s ease-in-out infinite;
        }

        .animate-float-slow {
          animation: float-slow 18s ease-in-out infinite;
        }

        .animate-float-slower {
          animation: float-slower 25s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }

        .animate-pulse-slower {
          animation: pulse-slower 12s ease-in-out infinite;
        }

        .animate-pulse-slowest {
          animation: pulse-slowest 15s ease-in-out infinite;
        }

        .animate-spin-very-slow {
          animation: spin-very-slow 30s linear infinite;
        }

        .animate-spin-ultra-slow {
          animation: spin-ultra-slow 45s linear infinite;
        }

        .animate-beam-1 {
          animation: beam-1 8s ease-in-out infinite;
        }

        .animate-beam-2 {
          animation: beam-2 10s ease-in-out infinite 2s;
        }

        .animate-beam-3 {
          animation: beam-3 12s ease-in-out infinite 4s;
        }

        .animate-beam-4 {
          animation: beam-4 9s ease-in-out infinite 6s;
        }

        .animate-particle-float {
          animation: particle-float 15s linear infinite;
        }
      `}</style>
    </div>
  );
}
