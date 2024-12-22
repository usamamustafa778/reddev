import React from "react";

export default function BgAnimation() {
  return (
    <div className="absolute inset-0">
      {/* Grid Pattern - vertical rectangular boxes */}
      <div className="absolute inset-0">
        {/* Horizontal lines - wider spacing */}
        <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_39px,#ffffff08_39px_41px,transparent_41px)] bg-[size:20px_40px] [box-shadow:0_0_15px_rgba(255,255,255,0.01)]"></div>
        {/* Vertical lines - normal spacing */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_19px,#ffffff08_19px_21px,transparent_21px)] bg-[size:20px_40px] [box-shadow:0_0_15px_rgba(255,255,255,0.01)]"></div>

        {/* Additional subtle pulsing overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_19px,#ffffff05_19px_21px,transparent_21px)] bg-[size:20px_40px] animate-pulse"></div>
      </div>

      {/* Animated Gradients - changed to red */}
      <div className="absolute inset-0">
        <div className="absolute top-0 -left-4 w-3/4 h-full bg-[conic-gradient(from_90deg_at_50%_50%,#00000000,#ff222220,#00000000)] animate-[spin_20s_linear_infinite]"></div>
        <div className="absolute top-0 -right-4 w-3/4 h-full bg-[conic-gradient(from_270deg_at_50%_50%,#00000000,#ff222220,#00000000)] animate-[spin_40s_linear_infinite]"></div>
      </div>

      {/* Data Streams - changed to red */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute h-[1px] w-[120px] animate-[dataStream_3s_linear_infinite]"
            style={{
              background:
                "linear-gradient(90deg, transparent, #ff2222, transparent)",
              top: `${Math.random() * 100}%`,
              left: "-120px",
              animationDelay: `${Math.random() * 3}s`,
              opacity: 0.3,
            }}
          />
        ))}
      </div>

      {/* Glowing Nodes - changed to red */}
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="absolute w-[4px] h-[4px] bg-red-500/50 rounded-full animate-[glow_4s_ease-in-out_infinite]"
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
