import { useRef, useState } from "react";
import Card from "../components/Card";
import tempThumbnail from "../Photos/Work/100temps_Thumbnail.jpg";
import bestSiteThumbnail from "../Photos/Work/BEST_site_Thumbnail.jpg";
import cfThumbnail from "../Photos/Work/CF_thumbnail.jpg";
import chalaxeurThumbnail from "../Photos/Work/chalaxeur-thumbnail_img.jpg";
import crisis24Thumbnail from "../Photos/Work/crisis24_behance_1920X1200_cartes.jpg";
import fruiteThumbnail from "../Photos/Work/Fruite_thumbnail_bbq.jpg";
import k72ArticleThumbnail from "../Photos/Work/K72_article_ChatGPT_blogue.jpg";
import okaThumbnail from "../Photos/Work/OKA_thumbnail.jpg";
import optoThumbnail2 from "../Photos/Work/opto_thumbnail2.jpg";
import pjcThumbnail from "../Photos/Work/PJC_SiteK72_Thumbnail_1280x960.jpg";
import pmeMtlThumbnail from "../Photos/Work/PME-MTL_Thumbnail.jpg";
import thumbnail from "../Photos/Work/Thumbnail.png";
import atableThumbnail from "../Photos/Work/thumbnailimage_atable2.jpg";
import optoThumbnail from "../Photos/Work/thumbnailimage_opto.jpg";
import osmThumbnail from "../Photos/Work/thumbnailimage_OSM.jpg";
import sheltonThumbnail from "../Photos/Work/thumbnailimage_shelton.jpg";
import sollioThumbnail from "../Photos/Work/thumbnailimage_SollioAg.jpg";
import wsThumbnail from "../Photos/Work/WS---K72.ca---Thumbnail.jpg";

import Menubtn from "../components/Menubtn";
import Logobtn from "../components/Logobtn";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import HoverNav from "../components/hoverNav";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  const works = [
    {
      name: "100 Temps",
      url: tempThumbnail,
      year: 2023,
    },
    {
      name: "BEST Site",
      url: bestSiteThumbnail,
      year: 2025,
    },
    {
      name: "CF",
      url: cfThumbnail,
      year: 2021,
    },
    {
      name: "Chalaxeur",
      url: chalaxeurThumbnail,
      year: 2020,
    },
    {
      name: "Crisis24",
      url: crisis24Thumbnail,
      year: 2024,
    },
    {
      name: "Fruite BBQ",
      url: fruiteThumbnail,
      year: 2019,
    },
    {
      name: "K72 ChatGPT Blog",
      url: k72ArticleThumbnail,
      year: 2025,
    },
    {
      name: "OKA",
      url: okaThumbnail,
      year: 2022,
    },
    {
      name: "Opto",
      url: optoThumbnail2,
      year: 2023,
    },
    {
      name: "PJC",
      url: pjcThumbnail,
      year: 2021,
    },
    {
      name: "PME MTL",
      url: pmeMtlThumbnail,
      year: 2024,
    },
    {
      name: "Thumbnail",
      url: thumbnail,
      year: 2020,
    },
    {
      name: "À Table",
      url: atableThumbnail,
      year: 2022,
    },
    {
      name: "Opto Image",
      url: optoThumbnail,
      year: 2025,
    },
    {
      name: "OSM",
      url: osmThumbnail,
      year: 2019,
    },
    {
      name: "Shelton",
      url: sheltonThumbnail,
      year: 2023,
    },
    {
      name: "Sollio Agriculture",
      url: sollioThumbnail,
      year: 2021,
    },
    {
      name: "WS - K72",
      url: wsThumbnail,
      year: 2024,
    },
  ];
  const menuRef = useRef(null);
  const logoRef = useRef(null);
  
  //Opening Animations
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
        ".title",
        {
          clipPath: "inset(0 100% 0 0)",
          duration: 3.5,
          ease: "power4.out",
        },
        "<2.2",
      )
      .from(
        ".cardParent",
        {
          clipPath: "inset(0 100% 0 0)",
          duration: 1.5,
          ease: "power4.out",
        },
        "<0.2",
      );
  });

  //CARD ANIMATION
  const [hoveredWork, setHoveredWork] = useState(null);
  
  useGSAP(() => {
    gsap.fromTo(
      ".card",
      {
        height: "20vh", // starting size
      },
      {
        height: "60vh", // size after scrolling

        stagger: {
          amount: 0.5,
        },

        scrollTrigger: {
          trigger: ".cardParent",
          start: "top 90%",
          end: "top -500%",
          scrub: true,
        },
      },
    );
  });

  return (
    <>
      <Logobtn ref={logoRef} className="" />
      <Navbar ref={menuRef} />
      <Menubtn />

      <div className="min-h-screen w-screen px-[0.5%]">
        <HoverNav work={hoveredWork} menuRef={menuRef} logoRef={logoRef} />

        <div className="title h-[20vh] w-full mt-[40vh] flex justify-start items-center ">
          <h1 className=" translate-y-6 uppercase text-[22vh] font-[MyFont]">
            Work
          </h1>
          <p className="translate-y-[-6vh] text-5xl ">17</p>
        </div>

        <div className="cardParent flex justify-around  align-middle flex-wrap h-full w-full ">
          {works.map((work, index) => (
            <Card
              key={index}
              url={works[index].url}
              onMouseEnter={() => setHoveredWork(work)}
              onMouseLeave={() => setHoveredWork(null)}
            />
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Work;
