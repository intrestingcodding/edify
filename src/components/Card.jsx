import { ArrowRight } from "lucide-react";
import React from "react";

const Card = () => {
  return (
    <div className="bg-white rounded-lg">
      <div className="border-b-2 p-5 flex justify-between items-center">
        <h2>Profile Buidling</h2>
        <div className=" bg-[#262f6e] border-blue-900 text-white rounded-[50%] hover:bg-white hover:text-[#262f6e] ">
          <ArrowRight
            height="60px"
            width="60px"
            className=" rounded-lg p-4 -rotate-45 hover:rotate-0   duration-300  "
          />
        </div>
      </div>
      <div className="p-5">
        <h3 className="mb-5">Lorem ipsum dolor sit amet consectetur.</h3>
        <div className="overflow-hidden rounded-lg mb-4 ">
          <img
            src="https://t3.ftcdn.net/jpg/03/88/97/92/360_F_388979227_lKgqMJPO5ExItAuN4tuwyPeiknwrR7t2.jpg"
            className="h-[400px] w-full object-cover hover:scale-125 transition-all duration-500 "
            alt=""
          />
        </div>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
          voluptatum ipsa totam voluptate nesciunt expedita...
        </p>
      </div>
    </div>
  );
};

export default Card;
