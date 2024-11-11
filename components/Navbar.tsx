"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";
import Image from 'next/image';



function Navbar() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    console.log("Toggling visibility");
    setIsVisible(!isVisible);
  };

  return (
    <div>
      {/* for hambar */} 
      {isVisible &&
       <div
        className={`absolute bg-black text-white w-64 h-full top-0 z-50 left-0 transition-all duration-300  
          ${isVisible ? "left-0" : "-left-64"} p-4 rounded-lg shadow-lg`}>
        <div className="text-2xl font-bold focus:border-customColor2 active:border-customColor2 hover:cursor-pointer font-mono ml-[10%]">
          @MuhibRaza
        </div>
        <div className="font-mono text-lg font-bold ml-[10%] mt-10">
          <div className="mt-5 text-xl">
            <Link
              href="/"
              className="border-4 border-solid border-black hover:border-customColor3 pl-3 pr-3 "
            >
              Home
            </Link>
          </div>
          <div className="mt-5 text-xl">
            <Link
              href="/about"
              className="border-4 border-solid border-black hover:border-customColor3 p-1"
            >
              About
            </Link>
          </div>
          <div className="mt-5 text-xl">
            <Link
              href="/Services"
              className="border-4 border-solid border-black hover:border-customColor3 p-1"
            >
              Services
            </Link>
          </div>
          <div className="mt-5 text-xl">
            <Link
              href="/contact"
              className="border-4 border-solid border-black hover:border-customColor3 p-1"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>}
      {/* hambar closes here */}

      {/* navbar */}
      <div className="mt-5 items-center justify-center">
        <nav className="bg-black mt-5 text-white w-[80%] items-center justify-center ml-[10%] rounded-lg flex">

          <div className="logo text-2xl font-bold border-4 border-transparent focus:border-customColor2 active:border-customColor2 p-1 hover:cursor-pointer">
            @MuhibRaza
          </div>

          <ul className=" gap-16 font-semibold text-lg flex">
            {/* <div className=" xl:flex hidden gap-10">
              <Link href="/">
                <li className="gap-10 border-4 border-solid border-black hover:border-customColor3 p-1">
                  Home
                </li>
              </Link>
              <Link href="/about">
                <li className="border-4 border-solid border-black hover:border-customColor3 p-1">
                  About
                </li>
              </Link>
              <Link href="/Services">
                <li className="border-4 border-solid border-black hover:border-customColor3 p-1">
                  Services
                </li>
              </Link>
              <Link href="/contact">
                <li className="border-4 border-solid border-black hover:border-customColor3 p-1">
                  Contact Me
                </li>
              </Link>
            </div> */}
            <li>
              <Image
                src="https://png.pngtree.com/png-clipart/20190614/original/pngtree-menu-vector-icon-png-image_3791388.jpg"
                alt=""
                className="rounded-3xl hover:cursor-pointer flex xl:hidden"
                width={40} 
                height={40} 
                onClick={()=>toggleVisibility()}
              />
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
