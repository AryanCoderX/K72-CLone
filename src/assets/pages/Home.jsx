import { useNavigate } from "react-router-dom";
import Video from "../components/Video";
import Clock from "../components/Clock";
import Menubtn from "../components/Menubtn";
import Logobtn from "../components/Logobtn";


const Home = () => {
  const navigate = useNavigate();
  

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <Menubtn/>

      {/* BACKGROUND VIDEO */}
      <Video />


      {/* CONTENT */}
      <div className="absolute inset-0 z-10 h-full w-full pt-1.5">
        <Logobtn className="brightness-0 invert translate-y-[-7%] h-[7vh] w-[8vw]"/>
        <div className="heading h-[80%] w-full">
          <div className="title h-[60%] w-full flex flex-col items-center sm:text-[10vh] sm:pt-[10vh] lg:pt-0 lg:text-[15vh] font-['MyFont'] uppercase text-white pt-2 font-light leading-[0.91] p-3">
            <div>The spark for</div>

            <div className="flex items-center justify-center overflow-hidden">
              <div>all</div>

              <div className="mx-4 h-[0.8em] w-[1.66em] overflow-hidden rounded-full translate-y-[-5%]">
                <Video />
              </div>

              <div>things</div>
            </div>

            <div>creative</div>
          </div>

          <div className="h-[28%] w-full flex justify-end items-end  px-[1%]">
            <div className="text-amber-50 h-[30%] lg:w-[20%] sm:w-[50%] lg:text-sm  font-['MyFont'] leading-[1.4] tracking-[1px]">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              K72 is an agency that builds brands from every angle. Today,
              tomorrow and years from now. We think the best sparks fly when
              comfort zones get left behind and friction infuses our strategies,
              brands and communications with real feeling. We’re transparent,
              honest and say what we mean, and when we believe in something,
              we’re all in.
            </div>
          </div>
        </div>

        {/* CLOCK */}
        <div className="lg:w-[18vw] sm:w-[29vw] absolute bottom-1 left-1">
          <Clock />
        </div>

        {/* FOOTER */}
        <div className="footer h-[20%] flex items-end justify-center gap-6 -translate-y-2 sm:pb-[4vh] lg:pb-0">
          <div className="h-[50%] overflow-hidden rounded-full border-2 border-white px-10 flex items-center justify-center hover:border-[#d3fd50] hover:cursor-pointer">
            <span
              onClick={() => navigate("/work")}
              className="font-['MyFont'] text-[7vw] uppercase leading-none text-white translate-y-[8%] hover:text-[#d3fd50]"
            >
              Work
            </span>
          </div>

          <div className="h-[50%] overflow-hidden rounded-full border-2 border-white px-10 flex items-center justify-center hover:border-[#d3fd50] hover:cursor-pointer">
            <span
              onClick={() => navigate("/agency")}
              className="font-['MyFont'] text-[7vw] uppercase leading-none text-white translate-y-[8%] hover:text-[#d3fd50]"
            >
              Agency
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
