import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

function DocsLayout({ children }: any) {
  const router = useRouter();
  const navlinks = [
    {
      name: "Overview",
      route: "/docs/overview",
      active: router.pathname.includes("/docs/overview"),
    },
    {
      name: "Getting Started",
      route: "/docs/getting-started",
      active: router.pathname.includes("/docs/getting-started"),
    },
    {
      name: "Generators",
      route: "/docs/generators/component",
      active: router.pathname.includes("/docs/generators"),
    },
    {
      name: "Testing",
      route: "/docs/testing",
      active: router.pathname.includes("/docs/testing"),
    },
    {
      name: "CI / CD",
      route: "/docs/ci-cd",
      active: router.pathname.includes("/docs/ci-cd"),
    },
  ];
  return (
    <div>
      <div className="bg-[#F8F9FA] pt-6">
        <div className="container mx-auto px-2 pt-2 ">
          <div className="font-semibold">DOCUMENTATION</div>
          <div className="flex space-x-14 mt-6 overflow-y-scroll">
            {navlinks.map((obj, index) => {
              return (
                <Link
                  href={obj.route}
                  key={index}
                  className={` font-normal pb-2 border-[#1769E0] ${
                    obj.active && "border-b-4 text-[#1769E0] "
                  }`}
                >
                  {obj.name}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}

export default DocsLayout;
