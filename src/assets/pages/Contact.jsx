import Menubtn from "../components/Menubtn";
import Logobtn from "../components/Logobtn";


import Section from "../components/Section";
// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  // const marqueeRef = useRef(null);

  return (
    <div className="h-full w-full bg-black">
      <Logobtn className="brightness-0 invert" />
      <Menubtn />

      {Array.from({ length: 24 }).map((_, index) => (
        <Section key={index} index={index} />
      ))}

    </div>
  );
};

export default Contact;
