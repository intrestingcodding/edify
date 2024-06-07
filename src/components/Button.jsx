import { ArrowRight } from "lucide-react";
import React from "react";

const Button = (props) => {
  return (
    <div className="items-center font-bold  transition-all duration-500 border-2 border-[#262f6e]  justify-center bg-[#262f6e] text-white p-3 rounded-full  hover:bg-white md:text-base
     text-xs sm:text-sm
    hover:text-[#262f6e] ">
      <button className="">{props.name}</button>
      {/* <ArrowRight className="rout" /> */}
    </div>
  );
};

export default Button;
