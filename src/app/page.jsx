import Cards from "@/components/Cards";
import Hero from "../components/Hero";
import Baner from "@/components/Baner";

const page = () => {
  return (
    <div className="bg-[#f7f8fd] mb-16">
      <Hero />
      {/* <Baner
        span="About Company"
        heading="Dream Big. Tell Your Story.Get Accepted. "
      /> */}

      <Baner
        span="Over Services"
        heading="What we can offer today"
        btn="View All Services"
      />

      <Cards />
    </div>
  );
};

export default page;
