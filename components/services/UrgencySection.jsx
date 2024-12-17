import React, { useState, useEffect } from "react";
import FullContainer from "../common/FullContainer";
import Container from "../common/Container";

export default function UrgencySection() {
  const initialTime = 24 * 60 * 60; // 1 day in seconds
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : initialTime)); // Reset when time hits 0
    }, 1000);

    return () => clearInterval(timer);
  }, [initialTime]);

  // Function to format time into days, hours, minutes, and seconds
  const formatTime = (seconds) => {
    const days = Math.floor(seconds / (60 * 60 * 12));
    const hours = Math.floor((seconds % (60 * 60 * 24)) / (60 * 60));
    const minutes = Math.floor((seconds % (60 * 60)) / 60);
    const secs = seconds % 60;

    return (
      <div className="flex justify-evenly space-x-8 text-4xl md:text-5xl font-bold">
        <div className="flex flex-col items-center">
          <span className="text-6xl">{days}</span>
          <span className="text-lg">Days</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-6xl">{hours}</span>
          <span className="text-lg">Hours</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-6xl">{minutes}</span>
          <span className="text-lg">Min</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-6xl">{secs < 10 ? `0${secs}` : secs}</span>
          <span className="text-lg">Sec</span>
        </div>
      </div>
    );
  };

  return (
    <FullContainer className="bg-orange-600 text-white py-16 text-center">
      <Container className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Limited Spots Available!
        </h2>
        <p className="text-lg md:text-xl mb-6">Hurry up! The offer ends in:</p>
        <div className="mb-8">
          {formatTime(timeLeft)}
        </div>

        {/* CTA Button */}
        <button className="bg-white text-orange-600 font-semibold py-4 px-8 rounded-lg shadow-md hover:bg-orange-100 transition-all duration-300 ease-in-out animate-pulse">
          Get Your Spot Now
        </button>
      </Container>
    </FullContainer>
  );
}
