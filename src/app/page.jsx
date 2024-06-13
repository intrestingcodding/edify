import Cards from "@/components/Cards";
import Hero from "../components/Hero";
import Baner from "@/components/Baner";
import { Check, CheckCheck, CheckCircle, CheckCircleIcon, CheckIcon, Donut } from "lucide-react";
import Button from "@/components/Button";
import Slider from "@/components/Slider";
import Cards2 from "@/components/Cards2";
import Slider2 from "@/components/Slider2";

const page = () => {
  return (
    <div className="bg-[#f7f8fd]  mb-16">
      <div className=" mx-auto ">
        <Hero />
        <div className="bg-white py-16 px-4">
          <div className="max-w-5xl mx-auto  ">
            <h3 className="text-[#262f6e]  font-semibold lg:text-lg md:text-base sm:text-sm">About Company</h3>
            <h1 className="font-semibold lg:text-6xl md:text-5xl text-3xl">
              Dream Big.Tell Your Story.<br />Get Accepted.
            </h1>
          </div>

          {/* Baneer */}
          <div className=" grid md:grid-cols-[1fr,2fr] border-3 border-red-950 max-w-5xl mx-auto
           gap-8 py-10 ">

            <div className="">
              <img src="https://edifyelite.com.pk/images/about.jpg" className="h-full rounded-[40px] " alt="" />
            </div>

            <div className="flex  flex-col justify-center ">
              <p className="py-4 text-[#9C9FA6]">
                Welcome to Edify Elite, where we help you pave the way to your dream college! The college application process may seem overwhelming, but were here to equip you with the necessary tools and support. Our goal is to help you create a compelling Common App profile that sets you apart, and to guide you towards success in the competitive admissions process.
              </p>
              <p className="py-4 text-[#9C9FA6]">
                Edify Elite is committed to helping high school students reach their academic goals. Our team comprises experienced educators and accomplished college alumni. We are dedicated to assisting students in attaining their best potential and confidently navigating the college admissions process.
              </p>

              <div className="grid sm:grid-cols-2 mb-8 gap-4">
                <p className="flex gap-2 items-center ">
                  <Check strokeWidth={2} className="h-4 w-4 bg-[#262f6e] text-white rounded-[50%] p-[1px] text-sm" />
                  Improved Application
                </p>
                <p className="flex gap-2 items-center ">
                  <Check strokeWidth={2} className="h-4 w-4 bg-[#262f6e] text-white rounded-[50%] p-[1px] text-sm" />
                  Streamlined Process
                </p>
                <p className="flex gap-2 items-center ">
                  <Check strokeWidth={2} className="h-4 w-4 bg-[#262f6e] text-white rounded-[50%] p-[1px] text-sm" />
                  Confidence Building
                </p>
                <p className="flex gap-2 items-center ">
                  <Check strokeWidth={2} className="h-4 w-4 bg-[#262f6e] text-white rounded-[50%] p-[1px] text-sm" />
                  Enhanced Profiles
                </p>
                <p className="flex gap-2 items-center ">
                  <Check strokeWidth={2} className="h-4 w-4 bg-[#262f6e] text-white rounded-[50%] p-[1px] text-sm" />
                  Common App Mastery
                </p>
                <p className="flex gap-2 items-center ">
                  <Check strokeWidth={2} className="h-4 w-4 bg-[#262f6e] text-white rounded-[50%] p-[1px] text-sm" />
                  Dream School Investment
                </p>
              </div>

              <div className="flex">
                <Button name="Free Consultation" />
              </div>

            </div>

          </div>
        </div>

        <Baner
          span="Over Services"
          heading='What we can offer today'
          btn="View All Services"
        />
        <Cards />

        {/* Study in Universities */}
        <div className="bg-white  ">
          <div className="max-w-5xl mx-auto py-16 px-4">
            <div className=" flex justify-center items-center flex-col ">
              <p className="text-lg font-semibold text-[#262f6e]">Study in</p>
              <h1 className=" font-semibold  lg:text-6xl md:text-5xl text-3xl">Universities</h1>
            </div>
            <div className="">
              <Slider />
            </div>
          </div>

        </div>
      </div>
      {/* Banner or Blog */}
      <div className="">
        <Baner
          span="Latest Blog & Articles"
          heading="The latest insights you need to know"
          btn="View All Articles"
        />
        <div className="">
          <Cards2 />
        </div>
      </div>

      <div className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-4 ">
          <div className="pb-10">
            <p className="text-[#262f6e]  font-semibold lg:text-lg md:text-base sm:text-sm">Client Testimonials</p>
            <h1 className=" font-semibold  lg:text-6xl md:text-5xl text-3xl">Our customers love us. </h1>
          </div>
          <Slider2 />
        </div>
      </div>
    </div>
  );
};

export default page;
