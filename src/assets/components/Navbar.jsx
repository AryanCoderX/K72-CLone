import { Menu } from "lucide-react";
import { forwardRef } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = forwardRef((props,ref) => {
  let navigate= useNavigate();
  return (
    <div ref={ref} className="z-30 absolute top-0 h-[14vh] w-screen flex justify-end ">
      <div className="boxes w-[10vw] h-full flex-4"></div>

      <div onClick={() => navigate("/work")} 
      className="boxes relative w-[10vw] h-[40%] bg-black flex-3 uppercase text-xl font-bold text-white flex items-end px-3 py-1 overflow-hidden group cursor-pointer" >
        <div className="absolute inset-0 bg-[#d3fd50] origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-200" />
        <p className="relative z-10 group-hover:text-black transition-colors duration-200">
          Work(17)
        </p>
      </div>

      <div onClick={() => navigate("/agency")} 
      className="boxes relative w-[10vw] h-[60%] bg-black flex-4 uppercase text-xl font-bold text-white flex items-end px-3 py-1 overflow-hidden group cursor-pointer">
        <div className="absolute inset-0 bg-[#d3fd50] origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-200" />

        <p className="relative z-10 group-hover:text-black transition-colors duration-200">
          Agency
        </p>
      </div>

      <div onClick={() => navigate("/menu")} 
      className="boxes relative w-[10vw] h-full bg-black flex-2 uppercase text-xl font-bold text-white flex items-end px-3 py-1 overflow-hidden group cursor-pointer justify-between">
        <div className="absolute inset-0 bg-[#d3fd50] origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-200" />

        <p className="relative z-10 group-hover:text-black transition-colors duration-200">
          Menu
        </p>
        <div className="relative z-100 flex justify-end h-full px-[5%] items-baseline translate-x-3">
          <Menu
            size={48}
            strokeWidth={1.25}
            className="group-hover:text-black transition-colors duration-300"
          />
        </div>
      </div>
    </div>
  );
});

export default Navbar;
