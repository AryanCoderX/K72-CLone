import { useNavigate } from "react-router-dom";
import { Heart, X } from "lucide-react";
import Clock from "../components/Clock";
import Logobtn from "../components/Logobtn";
import work1 from "../Photos/Work/chalaxeur-thumbnail_img.jpg";
import work2 from "../Photos/Work/thumbnailimage_opto.jpg";
import work3 from "../Photos/Work/OKA_thumbnail.jpg";
import agents1 from "../Photos/Carl_480x640.jpg";
import agents2 from "../Photos/ChantalG_480x640.jpg";
import agents3 from "../Photos/MEGGIE_480X640_2.jpg";
import blog1 from "../Photos/Work/K72_article_ChatGPT_blogue.jpg";
import blog2 from "../Photos/Work/ier.com-16107673482102220.gif";
import blog3 from "../Photos/Work/Fruite_thumbnail_bbq.jpg";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

const MenuScreen = () => {
  let navigate = useNavigate();

  const textRef = useRef(null);
  const xRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    (tl.from(textRef.current.querySelectorAll("p"), {
      clipPath: "inset(0 100% 0 0)",
      opacity: 0,
      duration: 2,
      ease: "power4.in",
    }),
      tl.from(
        xRef.current,
        {
          clipPath: "inset(0 100% 0 0)",
          duration: 1.5,
          ease: "power4.out",
        },
        "<2",
      ));
  });

  return (
    <div className="h-screen w-full bg-black overflow-hidden">
      <div className="h-[8%] mt-2 mx-0.5 w-full flex justify-between items-center">
        <Logobtn className="brightness-0 invert relative" />
        <X
          ref={xRef}
          size={220}
          strokeWidth={0.25}
          color="white"
          className="translate-x-9 translate-y-5 cursor-pointer hover:text-[#d3fd50]"
          onClick={() => navigate(-1)}
        />
      </div>

      <div
        ref={textRef}
        className="h-[80%] w-full pt-[1%] flex flex-col justify-center overflow-hidden"
      >
        <div
          onClick={() => navigate("/work")}
          className="h-[15%] w-full text-[13vh] font-[MyFont] text-white uppercase flex items-center justify-center cursor-pointer border-y-2 border-white whitespace-nowrap hover:bg-[#d3fd50] hover:border-0 group relative "
        >
          <p className="absolute translate-y-2 group-hover:opacity-0">Work</p>

          <div className="moveX flex absolute gap-2  h-full w-full bg-[#d3fd50] opacity-0 text-black group-hover:opacity-100 shrink-0 origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-300 ">
            <div className="flex gap-2 h-full w-full items-center translate-y-2">
              <div>
                <p>See Everything</p>
              </div>
              <div className="h-[80%] w-[12vw] bg-red-400 rounded-4xl -translate-y-1.5">
                <img
                  src={work1}
                  alt=""
                  className="object-cover h-full w-full rounded-4xl"
                />
              </div>
            </div>
            <div className="flex gap-2 h-full w-full items-center translate-y-2">
              <div>
                <p>See Everything</p>
              </div>
              <div className="h-[80%] w-[12vw] bg-red-400 rounded-4xl -translate-y-1.5">
                <img
                  src={work2}
                  alt=""
                  className="object-cover h-full w-full rounded-4xl"
                />
              </div>
            </div>
            <div className="flex gap-2 h-full w-full items-center translate-y-2">
              <div>
                <p>See Everything</p>
              </div>
              <div className="h-[80%] w-[12vw] bg-red-400 rounded-4xl -translate-y-1.5">
                \
                <img
                  src={work3}
                  alt=""
                  className="object-cover h-full w-full rounded-4xl"
                />
              </div>
            </div>
          </div>
        </div>

        <div
          onClick={() => navigate("/agency")}
          className="h-[15%] w-full text-[13vh] font-[MyFont] text-white uppercase flex items-center justify-center cursor-pointer border-y-2 border-white whitespace-nowrap hover:bg-[#d3fd50] hover:border-0 group relative"
        >
          <p className="absolute translate-y-2 group-hover:opacity-0">Agency</p>

          <div className="moveX flex absolute gap-2 h-full w-full bg-[#d3fd50] opacity-0 text-black group-hover:opacity-100 shrink-0 origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-300 ">
            <div className="flex gap-2 h-full w-full items-center translate-y-2 ">
              <div>
                <p>Know us</p>
              </div>
              <div className="h-[80%] w-[12vw] rounded-4xl -translate-y-1.5">
                <img
                  src={agents1}
                  alt=""
                  className="object-cover object-top rounded-4xl h-full w-full"
                />
              </div>
            </div>
            <div className="flex gap-2 h-full w-full items-center translate-y-2 ">
              <div>
                <p>Know us</p>
              </div>
              <div className="h-[80%] w-[12vw] rounded-4xl -translate-y-1.5">
                <img
                  src={agents2}
                  alt=""
                  className="object-cover object-top rounded-4xl h-full w-full"
                />
              </div>
            </div>
            <div className="flex gap-2 h-full w-full items-center translate-y-2 ">
              <div>
                <p>Know us</p>
              </div>
              <div className="h-[80%] w-[12vw] rounded-4xl -translate-y-1.5">
                <img
                  src={agents3}
                  alt=""
                  className="object-cover object-top rounded-4xl h-full w-full"
                />
              </div>
            </div>
            <div className="flex gap-2 h-full w-full items-center translate-y-2 ">
              <div>
                <p>Know us</p>
              </div>
              <div className="h-[80%] w-[12vw] rounded-4xl -translate-y-1.5">
                <img
                  src={agents1}
                  alt=""
                  className="object-cover object-top rounded-4xl h-full w-full"
                />
              </div>
            </div>
          </div>
        </div>

        <div
          onClick={() => navigate("/contact")}
          className="h-[15%] w-full text-[13vh] font-[MyFont] text-white uppercase flex items-center justify-center cursor-pointer border-y-2 border-white whitespace-nowrap hover:bg-[#d3fd50] hover:border-0 group relative"
        >
          <p className="absolute translate-y-2 group-hover:opacity-0">
            Contact
          </p>

          <div className="moveX flex absolute gap-2 h-full w-full bg-[#d3fd50] opacity-0 text-black group-hover:opacity-100 shrink-0 origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-300 ">
            <div className="flex gap-2 h-full w-full items-center translate-y-3 ">
              <div>
                <p>Send us a fax </p>
              </div>
              <div className="flex justify-center items-center -translate-y-3">
                <Heart
                  size={100}
                  strokeWidth={1.75}
                  className="fill-black stroke-black"
                />
              </div>
            </div>
            <div className="flex gap-2 h-full w-full items-center translate-y-3 ">
              <div>
                <p>Send us a fax </p>
              </div>
              <div className="flex justify-center items-center -translate-y-3">
                <Heart
                  size={100}
                  strokeWidth={1.75}
                  className="fill-black stroke-black"
                />
              </div>
            </div>
            <div className="flex gap-2 h-full w-full items-center translate-y-3 ">
              <div>
                <p>Send us a fax </p>
              </div>
              <div className="flex justify-center items-center -translate-y-3">
                <Heart
                  size={100}
                  strokeWidth={1.75}
                  className="fill-black stroke-black"
                />
              </div>
            </div>
          </div>
        </div>

        <div
          onClick={() => navigate("/blog")}
          className="h-[15%] w-full text-[13vh] font-[MyFont] text-white uppercase flex items-center justify-center cursor-pointer border-y-2 border-white whitespace-nowrap hover:bg-[#d3fd50] hover:border-0 group relative"
        >
          <p className="absolute translate-y-2 group-hover:opacity-0">Blog</p>

          <div className="moveX flex absolute gap-2 h-full w-full bg-[#d3fd50] opacity-0 text-black group-hover:opacity-100 shrink-0 origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-300 ">
            <div className="flex gap-2 h-full w-full items-center translate-y-2 ">
              <div>
                <p>Read Articles</p>
              </div>
              <div className="h-[80%] w-[12vw] rounded-4xl -translate-y-1.5">
                <img
                  src={blog2}
                  alt="picture"
                  className="h-full w-[90%] object-contain rounded-4xl"
                />
              </div>
            </div>
            <div className="flex gap-2 h-full w-full items-center translate-y-2 ">
              <div>
                <p>Read Articles</p>
              </div>
              <div className="h-[80%] w-[12vw] rounded-4xl -translate-y-1.5">
                <img
                  src={blog1}
                  alt="picture"
                  className="h-full w-[90%] object-contain rounded-4xl"
                />
              </div>
            </div>
            <div className="flex gap-2 h-full w-full items-center translate-y-2 ">
              <div>
                <p>Read Articles</p>
              </div>
              <div className="h-[80%] w-[12vw] rounded-4xl -translate-y-1.5">
                <img
                  src={blog3}
                  alt="picture"
                  className="h-full w-[90%] object-contain rounded-4xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between h-[10vh] bottom-0 items-end">
        <div>
          <Clock />
        </div>

        <div className="flex gap-2 uppercase text-[1.5vh] lg:opacity-100 sm:opacity-0 font-[MyFont] text-white">
          <div>
            <p className="hover:text-[#d3fd50] hover:border-[#d3fd50] cursor-pointer">
              <a href="">Privacy Policy</a>
            </p>
          </div>
          <div>
            <p className="hover:text-[#d3fd50] hover:border-[#d3fd50] cursor-pointer">
              <a href="">Privacy Notice</a>
            </p>
          </div>
          <div>
            <p className="hover:text-[#d3fd50] hover:border-[#d3fd50] cursor-pointer">
              <a href="">Ethic Report</a>
            </p>
          </div>
          <div>
            <p className="hover:text-[#d3fd50] hover:border-[#d3fd50] cursor-pointer">
              <a href="">Consent Choices</a>
            </p>
          </div>
        </div>

        <div>
          <ul className="flex items-center gap-2 text-white uppercase text-3xl font-bold px-3">
            <li className="border-2 px-3  rounded-full flex items-end hover:text-[#d3fd50] hover:border-[#d3fd50]">
              <a href="#">FB</a>
            </li>
            <li className="border-2 px-3  rounded-full flex items-end hover:text-[#d3fd50] hover:border-[#d3fd50]">
              <a href="#">IG</a>
            </li>
            <li className="border-2 px-3  rounded-full flex items-end hover:text-[#d3fd50] hover:border-[#d3fd50]">
              <a href="#">In</a>
            </li>
            <li className="border-2 px-3  rounded-full flex items-end hover:text-[#d3fd50] hover:border-[#d3fd50]">
              <a href="#">Be</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MenuScreen;
