import Menubtn from "../components/Menubtn";
import Logobtn from "../components/Logobtn";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import img1 from "../Photos/Work/K72_article_ChatGPT_blogue.jpg";
import img2 from "../Photos/Work/ier.com-16107673482102220.gif";
import img3 from "../Photos/Work/Fruite_thumbnail_bbq.jpg";
import img4 from "../Photos/Work/thumbnailimage_OSM.jpg";


import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);
import { Dot } from "lucide-react";

const Blog = () => {

  //Opening Animations
  const menuRef = useRef(null);
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(
        menuRef.current.children,
        {
          y: -150,
          duration: 2,
          opacity: 0,
          stagger: -0.35,
          ease: "power4.in",
        },
        "<",
      )
      .from(
        ".card",
        {
          clipPath: "inset(0 0 100% 0)",
          duration: 3.5,
          ease: "power4.out",
        },
        "<2.2",
      )
  });
  return (
    <>
      <Logobtn />
      <Navbar ref={menuRef} />
      <Menubtn />

      <div className="h-full w-full mt-[50vh] flex gap-1 justify-around flex-wrap px-[2%] py-[2%] font-[MyFont]">

        <div className="card h-full w-[49%] rounded-4xl mt-[2%]">
          <div className="overflow-hidden h-[65%] w-full rounded-4xl">
            <img
              src={img1}
              alt=""
              className="h-full w-full rounded-4xl cursor-pointer hover:scale-110 transition-transform "
            />
          </div>
          <div className="px-[2%]">
            <div className="flex justify-start items-center -translate-x-6">
              <Dot size={80} />
              <p className="text-2xl -translate-x-4">November 3 2004</p>
            </div>
            <h1 className="uppercase w-[70%] hover:underline hover:decoration-black text-4xl cursor-pointer">
              Écrire un article sur l’écriture d’un article avec ChatGPT :
              plongée dans la mise en abyme
            </h1>
            <div className="flex w-full p-3">
              <button
                type="button"
                className="relative overflow-hidden border-2 rounded-3xl p-2 px-3 text-2xl bg-gray-400 cursor-pointer group"
              >
                <span className="relative z-10">Design</span>

                <span
                  className="absolute inset-0 bg-[#d3fd50] -translate-y-full group-hover:translate-y-0 transition-transform duration-200 ease-out"
                />
              </button>
            </div>
          </div>
        </div>

        <div className="card h-full w-[49%] rounded-4xl mt-[2%]">
          <div className="overflow-hidden h-[65%] w-full rounded-4xl">
            <img
              src={img3}
              alt=""
              className="h-full w-full rounded-4xl cursor-pointer hover:scale-110 transition-transform object-cover"
            />
          </div>
          <div className="px-[2%]">
            <div className="flex justify-start items-center -translate-x-6">
              <Dot size={80} />
              <p className="text-2xl -translate-x-4">November 3 2004</p>
            </div>
            <h1 className="uppercase w-[70%] hover:underline hover:decoration-black text-4xl cursor-pointer">
              Écrire un article sur l’écriture d’un article avec ChatGPT :
              plongée dans la mise en abyme
            </h1>
            <div className="flex w-full p-3">
              <button
                type="button"
                className="relative overflow-hidden border-2 rounded-3xl p-2 px-3 text-2xl bg-gray-400 cursor-pointer group"
              >
                <span className="relative z-10">Design</span>

                <span
                  className="absolute inset-0 bg-[#d3fd50] -translate-y-full group-hover:translate-y-0 transition-transform duration-200 ease-out"
                />
              </button>
            </div>
          </div>
        </div>

        <div className="card h-full w-[49%] rounded-4xl mt-[2%]">
          <div className="overflow-hidden h-[65%] w-full rounded-4xl">
            <img
              src={img2}
              alt=""
              className="h-full w-full rounded-4xl cursor-pointer hover:scale-110 transition-transform"
            />
          </div>
          <div className="px-[2%]">
            <div className="flex justify-start items-center -translate-x-6">
              <Dot size={80} />
              <p className="text-2xl -translate-x-4">November 3 2004</p>
            </div>
            <h1 className="uppercase w-[70%] hover:underline hover:decoration-black text-4xl cursor-pointer">
              Écrire un article sur l’écriture d’un article avec ChatGPT :
              plongée dans la mise en abyme
            </h1>
            <div className="flex w-full p-3">
              <button
                type="button"
                className="relative overflow-hidden border-2 rounded-3xl p-2 px-3 text-2xl bg-gray-400 cursor-pointer group"
              >
                <span className="relative z-10">Design</span>

                <span
                  className="absolute inset-0 bg-[#d3fd50] -translate-y-full group-hover:translate-y-0 transition-transform duration-200 ease-out"
                />
              </button>
            </div>
          </div>
        </div>

        <div className="card h-full w-[49%] rounded-4xl mt-[2%]">
          <div className="overflow-hidden h-[65%] w-full rounded-4xl">
            <img
              src={img4}
              alt=""
              className="h-full w-full rounded-4xl cursor-pointer hover:scale-110 transition-transform"
            />
          </div>
          <div className="px-[2%]">
            <div className="flex justify-start items-center -translate-x-6">
              <Dot size={80} />
              <p className="text-2xl -translate-x-4">November 3 2004</p>
            </div>
            <h1 className="uppercase w-[70%] hover:underline hover:decoration-black text-4xl cursor-pointer">
              Écrire un article sur l’écriture d’un article avec ChatGPT :
              plongée dans la mise en abyme
            </h1>
            <div className="flex w-full p-3">
              <button
                type="button"
                className="relative overflow-hidden border-2 rounded-3xl p-2 px-3 text-2xl bg-gray-400 cursor-pointer group"
              >
                <span className="relative z-10">Design</span>

                <span
                  className="absolute inset-0 bg-[#d3fd50] -translate-y-full group-hover:translate-y-0 transition-transform duration-200 ease-out"
                />
              </button>
            </div>
          </div>
        </div>
        

      </div>

      <div className="">
        <Footer />
      </div>
    </>
  );
};

export default Blog;
