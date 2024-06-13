import React from "react";
import Card2 from "./Card2";

const Cards2 = () => {
    return (
        <div className="grid md:grid-cols-2 max-w-5xl mx-auto gap-10 px-4  py-16 ">
            <Card2 className="border" />
            <Card2 className="border" />
            <Card2 className="border" />
            <Card2 className="border" />
        </div>
    );
};

export default Cards2;
