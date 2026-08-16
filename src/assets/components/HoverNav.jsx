import gsap from "gsap";
import { useRef, useEffect } from "react";

const HoverNav = ({ work, menuRef, logoRef }) => {
    const navRef = useRef();

    useEffect(() => {
        if (!navRef.current || !menuRef.current || !logoRef.current) return;

        const tl = gsap.timeline();

        if (work?.name) {
            tl.to(menuRef.current, {
                y: -120,
                duration: 0.4,
                ease: "power3.inOut",
            })
                .to(
                    logoRef.current,
                    {   
                        xPercent: -23,
                        yPercent: -23,
                        scale: 0.6,
                        duration: 0.4,
                        ease: "power3.inOut",
                    },
                    "<",
                )
                .to(navRef.current, {
                    y: 0,
                    duration: 0.35,
                    ease: "power3.out",
                });
        } else {
            tl.to(navRef.current, {
                y: -120,
                duration: 0.35,
                ease: "power3.inOut",
            })
                .to(
                    logoRef.current,
                    {
                        xPercent: 0,
                        yPercent: 0,
                        scale: 1,
                        duration: 0.4,
                        ease: "power3.inOut",
                    },
                    "<",
                )
                .to(menuRef.current, {
                    y: 0,
                    duration: 0.4,
                    ease: "power3.out",
                });
        }
        return () => tl.kill();
    }, [work?.name, menuRef, logoRef]);

    return (
        <div ref={navRef} className="w-full z-9 fixed top-[0%] bg-white ">
            <div className="h-[5vh] flex items-center ">
            </div>
            <hr className="border-2 mx-[-1vh]" />
            <div className="h-[5vh] flex items-center text-4xl overflow-hidden  font-[MyFont]">
                <div className="flex-3 ">{work?.name}</div>
                <div className="flex-2 ">{work?.name}</div>
                <div className="w-[7vw]">{work?.year}</div>
            </div>
            <hr className="border-2 mx-[-1vh]" />
        </div>
    );
};

export default HoverNav;
