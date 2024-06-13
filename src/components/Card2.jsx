import { ArrowRight } from "lucide-react";
import React from "react";

const Card2 = () => {
    return (
        <div className="bg-white  rounded-[40px]">


            <div className="p-5 ">

                <div className="overflow-hidden rounded-2xl mb-4 ">
                    <img
                        src="https://edifyelite.com.pk/images/sat.jpg"
                        className=" w-full object-cover hover:scale-125 transition-all duration-500 rounded-[40px]"
                        alt=""
                    />
                </div>
                <p className="py-4 text-gray-400">1 Week ago</p>
                <h3 className="mb-5 font-semibold text-xl">Profile Building: Heres Why Its Important for Students</h3>

            </div>
        </div>
    );
};

export default Card2;
