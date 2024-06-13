import React from "react";
import Button from "./Button";

const Baner = (props) => {
  return (
    <div className="flex px-4 md:flex-row justify-between flex-col  mx-auto max-w-5xl  md:items-center py-10 gap-4  ">

      <div className="max-w-[600px]">
        <p className="text-[#262f6e]  font-semibold lg:text-lg md:text-base sm:text-sm">{props.span}</p>
        <h1 className=" font-semibold lg:text-6xl md:text-5xl text-3xl ">{props.heading}</h1>
      </div>

      <div className="flex">
        <Button name={props.btn} />
      </div>

    </div>
  );
};

export default Baner;
