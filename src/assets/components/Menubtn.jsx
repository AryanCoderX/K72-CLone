import { Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Menubtn = () => {
      let navigate = useNavigate();
  return (
    <div
        onClick={() => navigate("/menu")}
        className="fixed z-20 top-0 right-0 h-[5.3%] lg:w-[16vw] sm:w-[20vw] bg-black cursor-pointer text-white overflow-hidden group"
      >
        {/* Green fill */}
        <div className="absolute inset-0 bg-[#d3fd50] origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-200" />

        {/* Menu icon */}
        <div className="relative z-100 flex justify-end items-center h-full px-[5%]">
          <Menu
            size={48}
            strokeWidth={1.25}
            className="group-hover:text-black transition-colors duration-300"
          />
        </div>
      </div>
  )
}

export default Menubtn