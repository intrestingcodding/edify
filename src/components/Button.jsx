import { ArrowRight } from "lucide-react";
import React from "react";

const Button = (props) => {
  return (
    <div className="items-center font-bold hidden md:block transition-all duration-500 border-l-purple-950 justify-center bg-[#262f6e] text-white p-3 rounded-full  hover:bg-white  hover:text-[#262f6e] ">
      <button className="">{props.name}</button>
      {/* <ArrowRight className="rout" /> */}
    </div>
  );
};

export default Button;
