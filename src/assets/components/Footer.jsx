import { Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Clock from "./Clock";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);
const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer>
      <div className="bg-black h-[60vh] w-full px-[0.5%]">
        <div className="flex justify-between font-['MyFont'] text-[5vw] uppercase leading-none text-white pt-[1%]">
          <div>
            <ul className="flex items-center gap-2 ">
              <li className="border-2 px-5  rounded-full flex items-end hover:text-[#d3fd50] hover:border-[#d3fd50]">
                <a href="#">FB</a>
              </li>
              <li className="border-2 px-5  rounded-full flex items-end hover:text-[#d3fd50] hover:border-[#d3fd50]">
                <a href="#">IG</a>
              </li>
              <li className="border-2 px-5  rounded-full flex items-end hover:text-[#d3fd50] hover:border-[#d3fd50]">
                <a href="#">In</a>
              </li>
              <li className="border-2 px-5  rounded-full flex items-end hover:text-[#d3fd50] hover:border-[#d3fd50]">
                <a href="#">Be</a>
              </li>
            </ul>
          </div>
          <div>
            <span
              onClick={() => navigate("/contact")}
              className="group border-2 px-5 rounded-full flex items-start gap-2 hover:text-[#d3fd50] hover:border-[#d3fd50] cursor-pointer transition-all duration-300"
            >
              Contact
              <Heart
                size={70}
                strokeWidth={1}
                className="text-white fill-white group-hover:text-[#d3fd50] group-hover:fill-[#d3fd50] transition-all duration-300"
              />
            </span>
          </div>
        </div>
        <div className="flex justify-between h-[80%] bottom-0 items-end px-[2%]">
          <div>
            <Clock />
          </div>

          <div className="flex gap-2 uppercase text-[1.5vh] font-[MyFont] text-white lg:opacity-100 sm:opacity-0">
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

          <div className="h-full w-[20%]  flex justify-end items-end">
            <p
              className="text-xl text-white uppercase font-bold hover:text-[#d3fd50] cursor-pointer"
              onClick={() =>
                gsap.to(window, {
                  duration: 2,
                  scrollTo: { y: 0 },
                  ease: "power2.inOut",
                })
              }
            >
              {" "}
              Back to top
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
