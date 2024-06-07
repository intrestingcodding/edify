import Card from "@/components/Card";
import React from "react";

const Blog = () => {
  return (
    <div>
      <div className="bg-[#f7f8fd] py-16 px-4 ">
        <div className="grid  gap-5 md:grid-cols-2 xl:grid-cols-3 mb-5">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className="grid gap-5 grid-cols-4 mb-5">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className="grid gap-5 grid-cols-5 mb-5">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Blog;
