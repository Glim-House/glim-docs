import React from "react";
import NavBar from "./NavBar";

function SiteLayout({ children }: any) {
  return (
    <div>
      <NavBar />
      {children}
    </div>
  );
}

export default SiteLayout;
