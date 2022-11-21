import Link from "next/link";
import React from "react";

function DocsLayout({ children }: any) {
  const navlinks = [
    { name: "Overview", route: "/docs/overview" },
    { name: "Getting Started", route: "/docs/getting-started" },
    { name: "Generators", route: "/docs/generators" },
    { name: "Testing", route: "/docs/testing" },
    { name: "CI / CD", route: "/docs/ci-cd" },
  ];
  return (
    <div>
      <div className="bg-[#F8F9FA] pt-6">
        <div className="container mx-auto">
          <div className="font-semibold">DOCUMENTATION</div>
          <div className="flex space-x-14 mt-6 pb-3">
            {navlinks.map((obj, index) => {
              return (
                <Link
                  href={obj.route}
                  key={index}
                  className="hover:text-blue-600 font-normal"
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
