import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useLocation } from "react-router-dom";
import Loader from "../Loader";
import Logobtn from "../Logobtn";

const Stairs = (props) => {
  const stairsParrentRef = useRef(null);
  let currentPath = useLocation().pathname;
  const logoRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    //1.hide the page
    tl.set(".content", {
      opacity: 0,
    });
    tl.set(document.body, {
      overflow: "hidden",
    });

    // 2. Show stairs
    tl.set(stairsParrentRef.current, {
      display: "block",
    });

    // 3. Grow stairs
    tl.from(".stair", {
      height: 0,
      stagger: {
        amount: -0.25,
      },
    });

    // 4. Change cursor to loading
    tl.set(document.body, {
      cursor: "wait",
    });

    // 5. Hold for 1.3 seconds
    tl.to(
      {},
      {
        duration: 0.8,
      },
    );
    tl.set(logoRef.current, {
      opacity: 0,
    });

    // 6. Change cursor back
    tl.set(document.body, {
      cursor: "default",
    });

    //7. Show the page
    tl.set(".content", {
      opacity: 1,
    });

    // 8. Move stairs down
    tl.to(".stair", {
      background: "black",
      y: "100%",
      stagger: {
        amount: -0.25,
      },
    });

    // 9. Hide stairs
    tl.set(stairsParrentRef.current, {
      display: "none",
      overflow: "auto",
    });
    tl.set(document.body, {
      overflow: "auto",
    });

    // 10. Reset stairs
    tl.set(".stair", {
      y: "0%",
    });
    tl.set(logoRef.current, {
      opacity: 1,
    });
  }, [currentPath]);

  return (
    <div>
      <div
        ref={stairsParrentRef}
        className="absolute h-full w-full z-9999 inset-0 overflow-hidden"
      >
        <div className="h-full w-full flex">
          <div className="stair h-full w-[20vw] bg-black">
            <div ref={logoRef} className="px-2">
              <Logobtn className="brightness-0 invert" />
            </div>
          </div>
          <div className="stair h-full w-[20vw] bg-black"></div>
          <div className="stair h-full w-[20vw] bg-black"></div>
          <div className="stair h-full w-[20vw] bg-black"></div>
          <div className="stair h-full w-[20vw] bg-black "></div>
          <div className="stair h-full w-[20vw] bg-black flex  justify-end items-end ">
            <div className="h-[5%] w-full flex  justify-end items-end fixed bottom-0 right-3 ">
              <Loader color="white" />
            </div>
          </div>
        </div>
      </div>
      <div className="content">{props.children}</div>
    </div>
  );
};

export default Stairs;
