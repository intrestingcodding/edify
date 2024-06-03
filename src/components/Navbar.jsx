"use client";

import Link from "next/link";
import { NavbarLinks } from "./NavbarLinks";
import { ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";
import Button from "./Button";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-[#f7f8fd] border-b-2 top-0 z-auto ">
      <div className="flex justify-between items-center max-w-[100%] m-auto bg-[#f7f8fd]  py-3 px-4 ">
        <img
          className="h-9 "
          src="https://edify-elite.vercel.app/images/logo.png"
          alt=""
        />
        <div
          className={`${
            open ? "translate-x-0" : "-translate-x-[120%]"
          } flex gap-4 md:gap-8 md:relative transition-all duration-500  absolute md:translate-x-0 flex-col inset-0 md:flex-row bg-[#f7f8fd] md:bg-transparent px-4 `}
        >
          <div className="md:hidden border-b-2  bg-[#f7f8fd] py-3 ">
            <div className=" border h-9 w-9 flex justify-center float-right items-center bg-[#262f6e] rounded-[8px] ">
              <X
                className="md:hidden bg-[#262f6e] text-white   "
                onClick={() => {
                  setOpen(!open);
                  // alert("Close");
                }}
              />
            </div>
          </div>
          {NavbarLinks.map((v, i) => {
            return (
              <>
                <Link
                  onClick={() => setOpen(!open)}
                  className="hover:text-[#262f6e]"
                  href={v.route}
                >
                  {v.linkName}
                </Link>
              </>
            );
          })}
        </div>

        <Button name="Apply Now"/>
        <div className="md:hidden border h-9 w-9 flex justify-center items-center bg-[#262f6e] rounded-[8px]">
          <Menu
            onClick={() => {
              setOpen(!open);
              // alert("Open");
            }}
            className="bg-[#262f6e] text-white "
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
