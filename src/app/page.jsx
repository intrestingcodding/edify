import Button from "@/components/Button";

const page = () => {
  return (
    <div
      style={{ backgroundPosition: "bottom center" }}
      className=" min-h-[90vh] bg-no-repeat bg-[url(https://demo.awaikenthemes.com/weebix/wp-content/uploads/2024/04/hero-bg.png)] bg-[#f7f8fd] py-16  flex  flex-wrap max-w-6xl mx-auto px-4"
    >
      <div className="py-10 w-full">
        <div className="">
          <h3 className="text-[#262f6e] py-2 text-lg">About Edify Elite</h3>
          <h1 className="text-6xl font-semibold mb-2 text-black-800">
            Build the future
          </h1>
          <h1 className="text-6xl font-semibold mb-2 text-[#262f6e]">
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

      <div className=" w-full py-10 flex justify-center ">
        <div className="w-full ">
          <iframe
            className="w-full"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/rbOLGsu5Mwc?si=dQm5p5RivV1xwxvM"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default page;
