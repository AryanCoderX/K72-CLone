import { useEffect } from "react";
import { Heart } from "lucide-react";
import Title from "./Title";

import {useRef } from "react";
import gsap from "gsap";

const Section = ({ index }) => {
    const titles = [
        { title: "To talk about your Projects" },
        { title: "To talk about your ex" },
        { title: "To talk about your WiFi" },
        { title: "To talk about your pizza" },
        { title: "To talk about your memes" },
        { title: "To talk about your problems" },
        { title: "To talk about your deadlines" },
        { title: "To talk about your caffeine" },
        { title: "To talk about your drama" },
        { title: "To talk about your nonsense" },
        { title: "To talk about your snacks" },
        { title: "To talk about your taxes" },
        { title: "To talk about your sleep" },
        { title: "To talk about your Mondays" },
        { title: "To talk about your crush" },
        { title: "To talk about your ghosts" },
        { title: "To talk about your aliens" },
        { title: "To talk about your chaos" },
        { title: "To talk about your excuses" },
        { title: "To talk about your pigeons" },
        { title: "To talk about your potatoes" },
        { title: "To talk about your passwords" },
        { title: "To talk about your mistakes" },
        { title: "To talk about your dinosaurs" },
        { title: "To talk about your bananas" },
    ];
    
    const stripRef = useRef(null);
    useEffect(() => {
        const handleWheel = (e) => {
            gsap.to(stripRef.current, {
                rotation: e.deltaY > 0 ? 6 : -6,
                duration: 0.5,
                ease: "power3.out",
                overwrite: true,
            });
        };

        window.addEventListener("wheel", handleWheel);

        return () => {
            window.removeEventListener("wheel", handleWheel);
        };
    }, []);

    return (
        <div className="h-[120vh] text-[MyFont] overflow-x-hidden">
            <div className="flex h-[62vh] w-full px-[2%]">
                <div className="flex-1 h-full flex justify-center items-end pb-[3%] text-xl text-center text-white">
                    <p>
                        Onscreen or in an office.
                        <br />
                        Here. There.
                        <br />
                        Anywhere.
                    </p>
                </div>

                <Title title={titles[index].title} />

                <div className="flex-1 h-full flex justify-center items-end pb-[3%] text-lg text-center text-white">
                    <p className="hover:text-[#d3fd50] cursor-pointer">
                        Vivekananda Sarani, Kanyapur
                        <br />
                        Asansol, West Bengal
                        <br />
                        Pin code 713305
                    </p>
                </div>
            </div>

            <div className="w-full h-[40vh] flex justify-center items-center overflow-hidden">
                <div
                    ref={stripRef}
                    className="h-[50%] w-[120vw] bg-[#d3fd50] hover:bg-white cursor-pointer flex items-center transition-transform rotate-6 duration-200 ease-[cubic-bezier(0.215,0.61,0.355,1)]"
                >
                    
                    <div className="moveX flex w-max items-center">
                        {Array.from({ length: 6 }).map((_, i) => (
                            <div key={i} className="flex items-center shrink-0">
                                <h1 className="uppercase text-[11vw] font-semibold whitespace-nowrap leading-none">
                                    Hello@K72.ca
                                </h1>

                                <Heart
                                    fill=""
                                    size={140}
                                    strokeWidth={1.25}
                                    className="mx-8 shrink-0"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="w-full h-[18vh] flex flex-col justify-center gap-3">
                <div className="flex justify-center">
                    <p className="uppercase text-xl text-white font-semibold">
                        Follow us
                    </p>
                </div>

                <div className="flex justify-center">
                    <ul className="flex items-center gap-2 text-white uppercase text-7xl font-bold px-3">
                        <li className="border-2   rounded-full flex items-end hover:text-[#d3fd50] hover:border-[#d3fd50] px-5">
                            <a href="#">FB</a>
                        </li>
                        <li className="border-2   rounded-full flex items-end hover:text-[#d3fd50] hover:border-[#d3fd50] px-5">
                            <a href="#">IG</a>
                        </li>
                        <li className="border-2   rounded-full flex items-end hover:text-[#d3fd50] hover:border-[#d3fd50] px-5">
                            <a href="#">In</a>
                        </li>
                        <li className="border-2  rounded-full flex items-end hover:text-[#d3fd50] hover:border-[#d3fd50] px-5">
                            <a href="#">Be</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Section;
