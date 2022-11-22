import React from "react";
import NavBar from "./NavBar";

function SiteLayout({ children }: any) {
  return (
    <div className="font-noto">
      <NavBar />
      {children}
    </div>
  );
}

export default SiteLayout;
