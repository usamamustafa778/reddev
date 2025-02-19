// pages/_app.js
import '@/styles/globals.css'
import { Roboto } from "next/font/google";
import React, { useEffect, useState, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const myFont = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cursorRef = useRef(null);

  useEffect(() => {
    AOS.init({
      offset: 120, // Offset (in px) from the original trigger point
      delay: 0, // Values from 0 to 3000, with step 50ms
      duration: 400, // Values from 0 to 3000, with step 50ms
      easing: 'ease', // Default easing for AOS animations
      once: false, // Whether animation should happen only once
      mirror: false, // Whether elements should animate out while scrolling past them
      anchorPlacement: 'top-bottom', // Defines which position of the element regarding to window should trigger the animation
    });

    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleClick = () => {
      if (cursorRef.current) {
        cursorRef.current.classList.remove('cursor-click');
        void cursorRef.current.offsetWidth; // Force reflow
        cursorRef.current.classList.add('cursor-click');
        setTimeout(() => {
          cursorRef.current?.classList.remove('cursor-click');
        }, 500);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div className={myFont.className}>
      <div 
        ref={cursorRef}
        className="cursor-follower"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
        }}
      />
      <Component {...pageProps} />
    </div>
  );
}
