// pages/_app.js
import '@/styles/globals.css'
import { Roboto } from "next/font/google";
import React, { useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const myFont = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  const cursorOuterRef = useRef(null);
  const cursorInnerRef = useRef(null);
  const requestRef = useRef(null);
  const previousTimeRef = useRef(null);
  
  // Store mouse position
  const mousePosition = useRef({ x: 0, y: 0 });
  
  // Store cursor position
  const cursorPosition = useRef({ x: 0, y: 0 });

  const onMouseMove = (event) => {
    // Update mouse position immediately
    mousePosition.current = { x: event.clientX, y: event.clientY };
  };

  const onMouseDown = () => {
    if (cursorInnerRef.current) {
      cursorInnerRef.current.classList.add('cursor-click');
      
      setTimeout(() => {
        cursorInnerRef.current?.classList.remove('cursor-click');
      }, 300);
    }
  };

  const animateCursor = (time) => {
    if (previousTimeRef.current === undefined) {
      previousTimeRef.current = time;
    }
    
    const delta = time - previousTimeRef.current;
    
    // Calculate the distance between the mouse and cursor
    const dx = mousePosition.current.x - cursorPosition.current.x;
    const dy = mousePosition.current.y - cursorPosition.current.y;
    
    // Update cursor position with a smooth damping effect
    // The lower the divide number, the faster the cursor will follow
    const smoothing = 8; // Adjust for desired smoothness
    
    cursorPosition.current.x += dx / smoothing;
    cursorPosition.current.y += dy / smoothing;
    
    // Apply the position
    if (cursorOuterRef.current && cursorInnerRef.current) {
      cursorOuterRef.current.style.transform = `translate(${cursorPosition.current.x}px, ${cursorPosition.current.y}px)`;
      cursorInnerRef.current.style.transform = `translate(${mousePosition.current.x}px, ${mousePosition.current.y}px)`;
    }
    
    previousTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animateCursor);
  };

  // Add event listeners for interactive elements
  const addCursorListeners = () => {
    const interactiveElements = document.querySelectorAll('a, button, input, textarea, [role="button"]');
    
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', () => {
        if (cursorOuterRef.current && cursorInnerRef.current) {
          cursorOuterRef.current.classList.add('cursor-hover');
          cursorInnerRef.current.classList.add('cursor-hover');
          
          // Add specific classes for input elements
          if (el.tagName.toLowerCase() === 'input' || el.tagName.toLowerCase() === 'textarea') {
            cursorInnerRef.current.classList.add('cursor-input');
          }
        }
      });
      
      el.addEventListener('mouseleave', () => {
        if (cursorOuterRef.current && cursorInnerRef.current) {
          cursorOuterRef.current.classList.remove('cursor-hover');
          cursorInnerRef.current.classList.remove('cursor-hover');
          cursorInnerRef.current.classList.remove('cursor-input');
        }
      });
    });
  };

  // Handle cursor visibility when mouse leaves/enters the window
  const handleVisibility = () => {
    const handleMouseLeave = () => {
      if (cursorInnerRef.current && cursorOuterRef.current) {
        cursorInnerRef.current.style.opacity = '0';
        cursorOuterRef.current.style.opacity = '0';
      }
    };
    
    const handleMouseEnter = () => {
      if (cursorInnerRef.current && cursorOuterRef.current) {
        cursorInnerRef.current.style.opacity = '1';
        cursorOuterRef.current.style.opacity = '1';
      }
    };
    
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    
    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  };

  useEffect(() => {
    AOS.init({
      offset: 120,
      delay: 0, 
      duration: 400,
      easing: 'ease',
      once: false,
      mirror: false,
      anchorPlacement: 'top-bottom',
    });

    // Set initial cursor and mouse positions to center of the screen if available
    if (typeof window !== 'undefined') {
      const initialX = window.innerWidth / 2;
      const initialY = window.innerHeight / 2;
      mousePosition.current = { x: initialX, y: initialY };
      cursorPosition.current = { x: initialX, y: initialY };
    }

    // Add event listeners
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    
    // Start the animation
    requestRef.current = requestAnimationFrame(animateCursor);
    
    // Setup interactive element listeners after the DOM is fully loaded
    const setupTimeout = setTimeout(() => {
      addCursorListeners();
    }, 500); // Short delay to ensure DOM is ready
    
    // Setup visibility handlers
    const cleanupVisibility = handleVisibility();

    return () => {
      // Cleanup
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      clearTimeout(setupTimeout);
      
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
      
      cleanupVisibility();
    };
  }, []);

  return (
    <div className={myFont.className}>
      <div 
        ref={cursorOuterRef}
        className="cursor-outer"
      />
      <div 
        ref={cursorInnerRef}
        className="cursor-inner"
      />
      <Component {...pageProps} />
    </div>
  );
}
