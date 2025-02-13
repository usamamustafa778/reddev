import React from "react";

export default function BgAnimation() {
  return (
    <div className="absolute inset-0">
      {/* Grid Pattern - vertical rectangular boxes */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_79px,#ffffff05_79px_81px,transparent_81px)] bg-[size:40px_80px] [box-shadow:0_0_15px_rgba(255,255,255,0.01)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_39px,#ffffff05_39px_41px,transparent_41px)] bg-[size:40px_80px] [box-shadow:0_0_15px_rgba(255,255,255,0.01)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_39px,#ffffff03_39px_41px,transparent_41px)] bg-[size:40px_80px] animate-pulse"></div>
      </div>

      {/* Animated Gradients - jewel tones */}
      <div className="absolute inset-0">
        <div className="absolute top-0 -left-4 w-3/4 h-full bg-[conic-gradient(from_90deg_at_50%_50%,#00000000,#48319d15,#1a5f7a15,#00000000)] animate-[spin_20s_linear_infinite]"></div>
        <div className="absolute top-0 -right-4 w-3/4 h-full bg-[conic-gradient(from_270deg_at_50%_50%,#00000000,#2c514515,#1e3b7015,#00000000)] animate-[spin_40s_linear_infinite]"></div>
      </div>

      {/* Data Streams - deep colors */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute h-[1px] w-[120px] animate-[dataStream_3s_linear_infinite]"
            style={{
              background:
                i % 2 === 0
                  ? "linear-gradient(90deg, transparent, #362679, transparent)"
                  : "linear-gradient(90deg, transparent, #152850, transparent)",
              top: `${Math.random() * 100}%`,
              left: "-120px",
              animationDelay: `${Math.random() * 3}s`,
              opacity: 0.2,
            }}
          />
        ))}
      </div>

      {/* Glowing Nodes - deep colors */}
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className={`absolute w-[4px] h-[4px] rounded-full animate-[glow_4s_ease-in-out_infinite] ${
            i % 3 === 0
              ? "bg-indigo-950/40"
              : i % 3 === 1
              ? "bg-blue-950/40"
              : "bg-slate-950/40"
          }`}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 4}s`,
          }}
        />
      ))}
    </div>
  );
}
