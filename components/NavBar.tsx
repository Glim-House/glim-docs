import Link from "next/link";
import React from "react";
import Github from "../asset/icons/Github";

function NavBar() {
  return (
    <div className="container mx-auto flex justify-between items-center py-4 px-2 ">
      <div>
        <Link href="/">Glim</Link>
      </div>
      <div>
        <a
          href="https://github.com/neoito-hub/glim-cli"
          className="flex space-x-2"
        >
          <Github /> <span>Github</span>
        </a>
      </div>
    </div>
  );
}

export default NavBar;
