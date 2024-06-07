import React from "react";
import Card from "./Card";

const Cards = () => {
  return (
    <div className="grid md:grid-cols-2 max-w-5xl mx-auto gap-10 px-4  py-16 ">
      <Card className="border" />
      <Card className="border" />
      <Card className="border" />
      <Card className="border" />
    </div>
  );
};

export default Cards;
