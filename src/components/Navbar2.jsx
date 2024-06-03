"use client";
import React, { useState } from "react";
import { NavbarLinks } from "./NavbarLinks";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar2 = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="px-5 py-2 border-b-2 max-w-6xl mx-auto bg-slate-200 ">
      <div className="flex justify-between items-center ">
        <img className="w-16" src="favicon.ico" alt="" />
        <div
          className={`${
            open ? "translate-y-0" : "-translate-y-[220%]"
          } flex gap-5 md:relative absolute md:translate-y-0 inset-0 bg-slate-200 flex-col md:flex-row md:bg-white px-5 transition-all duration-1000 `}
        >
          <div className=" py-2 flex items-center justify-between border-b-2  md:hidden ">
            <img className="w-16 opacity-0" src="favicon.ico" alt="" />
            <X className="" onClick={() => setOpen(!open)} />
          </div>
          {NavbarLinks.map((v, i) => {
            return (
              <>
                <Link key={i} href={v.route}>
                  {v.linkName}
                </Link>
              </>
            );
          })}
        </div>
        <Menu onClick={() => setOpen(!open)} className="md:hidden" />
      </div>
    </div>
  );
};

export default Navbar2;
