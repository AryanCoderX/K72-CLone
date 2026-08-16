import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger so GSAP can use it
gsap.registerPlugin(ScrollTrigger);

const SmoothScroll = ({ children }) => {
  useEffect(() => {
    // Create a new Lenis smooth-scroll instance
    const lenis = new Lenis({
      // Controls how long it takes to reach the target scroll position
      // Higher = more smooth/inertial
      // Lower = more responsive
      duration: 2,

      // Enables smooth scrolling for mouse-wheel input
      smoothWheel: true,

      // Controls how much the mouse wheel moves the page
      // 1 = normal
      // 0.8 = slightly slower
      wheelMultiplier: 0.7,
    });

    // Whenever Lenis scrolls, tell ScrollTrigger to update
    // This keeps GSAP animations synchronized with Lenis
    lenis.on("scroll", ScrollTrigger.update);

    // Function that updates Lenis on every animation frame
    const update = (time) => {
      // GSAP gives time in seconds
      // Lenis expects time in milliseconds
      // So we multiply by 1000
      lenis.raf(time * 1000);
    };

    // Add our update function to GSAP's animation loop
    // This makes Lenis update continuously
    gsap.ticker.add(update);

    // Cleanup when the component is unmounted
    return () => {
      // Remove Lenis from GSAP's ticker
      // Prevents unnecessary animation loops
      gsap.ticker.remove(update);

      // Destroy the Lenis instance
      // Frees up resources and event listeners
      lenis.destroy();
    };
  }, []);

  // Render whatever components are placed inside <SmoothScroll>
  return children;
};

export default SmoothScroll;