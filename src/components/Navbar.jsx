"use client";

import Link from "next/link";
import { NavbarLinks } from "./NavbarLinks";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Button from "./Button";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-[#f7f8fd] border-b-2 sticky top-0 z-[9999]">
      <div className="bg-[#f7f8fd]   max-w-6xl mx-autof ">
        <div className="flex justify-between items-center max-w-[100%] m-auto bg-[#f7f8fd]  py-3 px-4 ">
          <img
            className="h-9 "
            src="https://edifyelite.com.pk/images/logo.png"
            alt=""
          />
          <div
            className={`${open ? "translate-x-0" : "-translate-x-[120%]"
              } flex gap-4 md:gap-8 md:relative transition-all duration-500  absolute md:translate-x-0 flex-col inset-0 md:flex-row bg-[#f7f8fd] h-screen md:h-auto md:w-auto  md:bg-transparent px-4 top-0 left-0 w-screen z-[999999] `}
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
            <div className="flex flex-col md:flex-row gap-4">
              <Link className="hover:text-[#262f6e]" href="/">Home</Link>
              <Link className="hover:text-[#262f6e]" href="/about">About</Link>
              <Link className="hover:text-[#262f6e]" href="/blog">Blog</Link>

              <div className="group inline-block cursor-pointer">
                <div className="relative group ">Services</div>
                <div className="md:absolute group-hover:opacity-100 pointer-events-none md:opacity-0 group-hover:pointer-events-auto translate-y-0 md:translate-y-5 group-hover:translate-y-0 transition-all duration-500 pt-4 max-w-96 ">
                  <div className=" gap-2 flex flex-col min-w-[200px] px-3 py-2 bg-gray-300   ">
                    <Link className="hover:text-[#262f6e]" href="/blog">Web Develphement</Link>
                    <Link className="hover:text-[#262f6e]" href="/blog">App Develphement</Link>
                    <Link className="hover:text-[#262f6e]" href="/blog">Blog Application</Link>
                    <Link className="hover:text-[#262f6e]" href="/blog">Dasktop Application</Link>
                  </div>
                </div>
              </div>
              <Link className="hover:text-[#262f6e]" href="/contact">Contact</Link>
            </div>
          </div>
          <div className="hidden md:block">
            <Button name="Apply Now" />
          </div>
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
    </div>
  );
};

export default Navbar;
