import Link from "next/link";
import React from "react";

interface Props {
  children: any;
  routelist: {
    active: boolean;
    route: string;
    name: string;
  }[];
}
function SubLayout({ children, routelist }: Props) {
  return (
    <div className="container mx-auto py-16 flex ">
      <div className="w-[400px] px-4 flex flex-col">
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
      <div className="w-full px-4 ">{children}</div>
    </div>
  );
}

export default SubLayout;
