import React from "react";
import Button from "./Button";

const Baner = (props) => {
  return (
    <div className="flex  justify-between  max-w-6xl mx-auto px-4 items-center mt-10">
      <div className="">
        <p className="text-[#262f6e] text-lg font-semibold">{props.span}</p>
        <h1 className="text-6xl font-semibold ">{props.heading}</h1>
      </div>
      <div>
        <Button name={props.btn} />
      </div>
    </div>
  );
};

export default Baner;
