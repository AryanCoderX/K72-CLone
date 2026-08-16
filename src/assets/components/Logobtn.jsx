import { useNavigate } from "react-router-dom";
import logo from "../Photos/icon.svg";
import { forwardRef } from "react";

const Logobtn = forwardRef(({ className = "" }, ref) => {
  const navigate = useNavigate();

  return (
    <div className="overflow-hidden">
      <img
        ref={ref}
        src={logo}
        alt="logo"
        className={`fixed z-50  lg:h-[10vh] sm:h-[8vh] lg:w-[10vw] sm:w-[8vh] object-cover cursor-pointer pl-[0.5%] top-0 left-1 ${className}`}
        onClick={() => navigate("/")}
      />
    </div>
  );
});

export default Logobtn;