// pages/_app.js
import '@/styles/globals.css'
import { Roboto } from "next/font/google";
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const myFont = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
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

    // Optional: Refresh AOS on route change if using dynamic content
    // const handleRouteChange = () => {
    //   AOS.refresh();
    // };
    // Router.events.on('routeChangeComplete', handleRouteChange);
    // return () => {
    //   Router.events.off('routeChangeComplete', handleRouteChange);
    // };
  }, []);

  return (
    <div className={myFont.className}>
      <Component {...pageProps} />
    </div>
  );
}
