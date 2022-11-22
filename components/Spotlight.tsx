import React from "react";
import Image from "next/image";
import Link from "next/link";
import ArrowRight from "../asset/icons/ArrowRight";

function Spotlight() {
  return (
    <div className=" w-full bg-[#D6EFFF]">
      <div className="container lg:w-3/4 mx-auto py-8 flex justify-between items-center">
        <div className="w-1/2">
          <div className="text-5xl font-bold">
            Glim <br /> all in one react native tool
          </div>
          <div className="leading-relaxed mt-4">
            gliim aims to provide a hassle free react native templating and
            development with a fully featured boilerplate
          </div>
        </div>
        <div className="w-1/2 flex justify-center items-center">
          <Image
            src={require("../asset/img/platform-thumbnail.png")}
            width={600}
            height={400}
            alt="cover"
            className="rounded-3xl border-2 border-blue-600"
          />
        </div>
      </div>
      <div className="container lg:w-3/4 mx-auto py-8 flex justify-between items-center">
        <div className="bg-[#073042] rounded-[15px] w-full p-6 mx-3 text-lg text-white hover:bg-[#EFF7CF] hover:text-black cursor-pointer font-semibold flex justify-between">
          <span>Try it now</span>
          <ArrowRight />
        </div>
        <Link
          href="/docs/overview"
          className="bg-[#1769E0] rounded-[15px] w-full p-6 mx-3 text-lg text-white hover:bg-[#EFF7CF] hover:text-black cursor-pointer  font-semibold flex justify-between"
        >
          <span>Read Docs</span>
          <ArrowRight />
        </Link>
        <a
          href="https://github.com/neoito-hub/glim-cli"
          className="bg-[#3DDC84] rounded-[15px] w-full p-6 text-lg mx-3 text-black hover:bg-[#EFF7CF] hover:text-black cursor-pointer  font-semibold flex justify-between"
        >
          <span>Github</span>
          <ArrowRight />
        </a>
      </div>
    </div>
  );
}

export default Spotlight;
