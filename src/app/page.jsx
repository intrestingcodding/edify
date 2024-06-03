import Button from "@/components/Button";

const page = () => {
  return (
    <div className="max-lg:px-4 max-2xl:px-10 bg-secondary min-h-[90vh] bg-no-repeat bg-[url(https://demo.awaikenthemes.com/weebix/wp-content/uploads/2024/04/hero-bg.png)] bg-[#f7f8fd] py-16  flex justify-around  flex-wrap ">
      <div className="py-10 max-lg:w-full w-2/3                      ">
        <div className="  ">
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
          <Button name="Consultation" />
        </div>
      </div>

      <div className=" max-lg:w-full w-1/3  py-10 flex ">
        <div className=" ">
          <video controls src="5.mp4"></video>
        </div>
      </div>
    </div>
  );
};

export default page;
