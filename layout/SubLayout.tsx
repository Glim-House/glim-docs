import Link from "next/link";
import React, { useState } from "react";
import ChevronUp from "../asset/icons/ChevronUp";

interface Props {
  children: any;
  routelist: {
    active: boolean;
    route: string;
    name: string;
  }[];
}
function SubLayout({ children, routelist }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <div className="container mx-auto flex mt-4 lg:pt-16 lg:flex-row flex-col ">
        <div className="min-w-[250px] px-4 lg:flex flex-col hidden  ">
          {routelist.map((obj, index) => {
            return (
              <Link
                href={obj.route}
                key={index}
                className={` font-normal p-2  ${
                  obj.active && "bg-[#1769E0] rounded-r-full text-white "
                }`}
              >
                {obj.name}
              </Link>
            );
          })}
        </div>
        <div className="lg:hidden px-4">
          <div
            className="bg-gray-100 p-4 my-2 rounded flex justify-between"
            onClick={() => {
              setMenuOpen(!menuOpen);
            }}
          >
            <div>
              {routelist
                .filter((item) => item.active)
                .map((obj, index) => {
                  return <>{obj.name}</>;
                })}
            </div>
            <div>
              <div className={`${menuOpen ? "rotate-0" : "rotate-180"} `}>
                <ChevronUp />
              </div>
            </div>
          </div>
          {menuOpen && (
            <div className="bg-gray-100 p-4 my-2 rounded flex flex-col">
              {routelist
                .filter((item) => !item.active)
                .map((obj, index) => {
                  return (
                    <Link
                      href={obj.route}
                      key={index}
                      className="font-normal p-2"
                    >
                      {obj.name}
                    </Link>
                  );
                })}
            </div>
          )}
        </div>
        <div className="lg:w-2/3 w-full px-4  ">{children}</div>
      </div>
    </>
  );
}

export default SubLayout;
