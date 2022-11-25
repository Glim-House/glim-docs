import axios from "axios";
import React, { useEffect, useState } from "react";
import DownLoad from "../asset/icons/DownLoad";
import GitMerge from "../asset/icons/GitMerge";
import Star from "../asset/icons/Star";

interface githubData {
  stargazers_count: number;
  forks: number;
}
interface npmData {
  downloads: number;
}
function Counter() {
  const [repodata, setRepodata] = useState<githubData>();
  const [npmdownload, setNpmdownload] = useState<npmData>();
  useEffect(() => {
    axios
      .get("https://api.github.com/repos/neoito-hub/glim-cli")
      .then((Response) => {
        setRepodata(Response.data);
      });
    axios
      .get(
        "https://api.npmjs.org/downloads/point/2020-11-24:2030-12-24/glim-cli"
      )
      .then((Response) => {
        setNpmdownload(Response.data);
      });
  }, []);

  return (
    <div className="container lg:w-3/4 mx-auto py-16 ">
      <div className="text-center text-2xl font-semibold">
        Always open source
      </div>
      <div className="text-center text-4xl font-bold mt-2">
        Trusted by GitHub community
      </div>
      <div className="flex md:flex-row flex-col space-y-12  md:space-y-0 py-16 items-center justify-around text-[#073042]">
        <div className="border-[#073042] p-4 w-2/3 md:w-1/4 h-40 rounded-2xl border-2 flex justify-center flex-col items-center relative">
          <div className="absolute -right-8 -top-8 w-16 h-16 rounded-full  bg-white shadow-xl flex justify-center items-center ">
            <Star />
          </div>
          <div className="font-bold text-4xl text-center">
            {repodata?.stargazers_count}
          </div>
          <div className="font-bold text-xl text-center">Stars</div>
        </div>
        <div className="border-[#073042] p-4 w-2/3 md:w-1/4 h-40 rounded-2xl border-2 flex justify-center flex-col items-center relative">
          <div className="absolute -right-8 -top-8 w-16 h-16 rounded-full  bg-white shadow-xl flex justify-center items-center ">
            <GitMerge />
          </div>
          <div className="font-bold text-4xl text-center">
            {repodata?.forks}
          </div>
          <div className="font-bold text-xl text-center">Forks</div>
        </div>
        <div className="border-[#073042] p-4 w-2/3 md:w-1/4 h-40 rounded-2xl border-2 flex justify-center flex-col items-center relative">
          <div className="absolute -right-8 -top-8 w-16 h-16 rounded-full  bg-white shadow-xl flex justify-center items-center ">
            <DownLoad />
          </div>
          <div className="font-bold text-4xl text-center">
            {npmdownload?.downloads}
          </div>
          <div className="font-bold text-xl text-center">Downloads</div>
        </div>
      </div>
    </div>
  );
}

export default Counter;
