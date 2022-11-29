import React from "react";
import Image from "next/image";
import Link from "next/link";
import ArrowRight from "../asset/icons/ArrowRight";

function Spotlight() {
  return (
    <div className=" w-full bg-[#D6EFFF] py-16">
      <div className="container lg:w-3/4 mx-auto py-8  flex justify-between items-center px-4">
        <div className="md:w-1/2 w-full">
          <div className="text-6xl font-bold leading-tight">
            Glim <br /> all in one react native tool
          </div>
          <div className="leading-relaxed mt-4">
            glim aims to provide a hassle free react native templating and
            development with a fully featured boilerplate
          </div>
        </div>
      </div>
      <div className="container lg:w-3/4 mx-auto py-8 space-y-4 md:space-y-0 flex md:flex-row flex-col justify-between items-center px-4">
        <a
          href="#trynow"
          className="bg-[#073042] duration-300 rounded-[15px] w-full p-6 mx-3 text-lg text-white hover:bg-[#EFF7CF] hover:text-black cursor-pointer font-semibold flex justify-between"
        >
          <span>Try it now</span>
          <ArrowRight />
        </a>
        <Link
          href="/docs/overview"
          className="bg-[#1769E0] duration-300 rounded-[15px] w-full p-6 mx-3 text-lg text-white hover:bg-[#EFF7CF] hover:text-black cursor-pointer  font-semibold flex justify-between"
        >
          <span>Read Docs</span>
          <ArrowRight />
        </Link>
        <a
          href="https://github.com/neoito-hub/glim-cli"
          className="bg-[#3DDC84] duration-300 rounded-[15px] w-full p-6 text-lg mx-3 text-black hover:bg-[#EFF7CF] hover:text-black cursor-pointer  font-semibold flex justify-between"
        >
          <span>Github</span>
          <ArrowRight />
        </a>
      </div>
    </div>
  );
}

export default Spotlight;
