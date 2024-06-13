import React from "react";
import Button from "@/components/Button";

const Hero = () => {
  return (
    <div
      style={{ backgroundPosition: "bottom center" }}
      className=" px-4 min-h-[90vh] bg-no-repeat bg-[url(https://demo.awaikenthemes.com/weebix/wp-content/uploads/2024/04/hero-bg.png)] grid gap-5  py-16  max-w-6xl mx-auto  items-center md:grid-cols-[2fr,1fr] "
    >
      <div className="py-10">
        <div className="">
          <h3 className="text-[#262f6e] py-2 lg:text-lg md:text-base sm:text-sm">About Edify Elite</h3>
          <h1 className="lg:text-6xl md:text-5xl sm:text-[] text-4xl font-semibold   mb-2 text-black-800">
            Build the future
          </h1>
          <h1 className="lg:text-6xl md:text-5xl text-4xl font-semibold  mb-2 text-[#262f6e]">
            you deserve
          </h1>
          <p className="text-[#262f6e] py-2 mb-2">
            We understand the game. College admissions, scholarship
            applications, and dream internships all require a unique profile. We
            assist you in developing a captivating narrative that highlights
            your unique skills, experiences, and objectives.
          </p>
          <div className="flex">
            <Button name="Consultation" />
          </div>
        </div>
      </div>

      <div className="">
        <div className=" relative ">
          <video controls className="w-[80%] absolute top-2  translate-x-[12%]" src="https://edifyelite.com.pk/videos/elite.mp4"></video>
          <img src="https://edifyelite.com.pk/images/laptop-black-realistic.png" className="" alt="" />

        </div>
      </div>

    </div>
  );
};

export default Hero;
