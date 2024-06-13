import { ArrowRight } from "lucide-react";
import React from "react";

const Card = () => {
  return (
    <div className="bg-white  rounded-[40px]">
      <div className="px-5">
        <div className=" flex justify-between items-center border-b-[1px] py-5">

          <h2 className="text-2xl w-[170px] font-semibold">Profile Buidling</h2>

          <div className="  bg-[#262f6e] border-blue-900 text-white rounded-[50%] hover:bg-white hover:text-[#262f6e] ">
            <ArrowRight className=" sm:h-14 sm:w-14  rounded-full p-2 sm:p-2 sm -rotate-45 hover:rotate-0 
            w-11 h-11 duration-300 border-2 border-[#262f6e]   "
            />
          </div>
        </div>
      </div>

      <div className="p-5 ">
        <h3 className="mb-5">The Common App streamlines college applications in the US for students by offering a one-stop platform.</h3>
        <div className="overflow-hidden rounded-2xl mb-4 ">
          <img
            src="https://t3.ftcdn.net/jpg/03/88/97/92/360_F_388979227_lKgqMJPO5ExItAuN4tuwyPeiknwrR7t2.jpg"
            className=" w-full object-cover hover:scale-125 transition-all duration-500 rounded-[40px]"
            alt=""
          />
        </div>

      </div>
    </div>
  );
};

export default Card;
