import Cards from "@/components/Cards";
import Hero from "../components/Hero";
import Baner from "@/components/Baner";
import { Donut } from "lucide-react";

const page = () => {
  return (
    <div className="bg-[#f7f8fd] mb-16">
      <div className=" mx-auto ">
        <Hero />
        <div className="bg-white py-16 px-4">
          <div className="max-w-5xl mx-auto  ">
            <h3 className="text-[#262f6e]  font-semibold lg:text-lg md:text-base sm:text-sm">About Company</h3>
            <h1 className="font-semibold lg:text-6xl md:text-5xl text-4xl">
              Dream Big.Tell Your Story.<br />Get Accepted.
            </h1>
          </div>

          <div className=" grid md:grid-cols-[1fr,2fr] border-3 border-red-950 max-w-5xl mx-auto
           gap-8 py-10 ">
            <div className="  ">
              <img src="https://www.ivywise.com/core/wp-content/uploads/2016/02/adobestock_491463943.jpeg" className="h-full rounded-2xl " alt="" />
            </div>
            <div className=" ">
              <p className="py-4 text-[#9C9FA6]">
                Welcome to Edify Elite, where we help you pave the way to your dream college! The college application process may seem overwhelming, but we're here to equip you with the necessary tools and support. Our goal is to help you create a compelling Common App profile that sets you apart, and to guide you towards success in the competitive admissions process.
              </p>
              <p className="py-4 text-[#9C9FA6]">
                Edify Elite is committed to helping high school students reach their academic goals. Our team comprises experienced educators and accomplished college alumni. We are dedicated to assisting students in attaining their best potential and confidently navigating the college admissions process.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                <p className="flex gap-2">
                  <Donut />
                  Improved Application
                </p>
                <p className="flex gap-2">
                  <Donut />
                  Streamlined Process
                </p>
                <p className="flex gap-2">
                  <Donut />
                  Confidence Building
                </p>
                <p className="flex gap-2">
                  <Donut />
                  Enhanced Profiles
                </p>
                <p className="flex gap-2">
                  <Donut />
                  Common App Mastery
                </p>
                <p className="flex gap-2">
                  <Donut />
                  Dream School Investment
                </p>
              </div>
            </div>
          </div>
        </div>


        <Baner
          span="Over Services"
          heading="What we can offer today"
          btn="View All Services"
        />
        <Cards />
      </div>
    </div>
  );
};

export default page;
