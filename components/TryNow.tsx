import React from "react";
import Copy from "../asset/icons/Copy";
import toast, { Toaster } from "react-hot-toast";

function TryNow() {
  const copycode = () => {
    navigator.clipboard
      .writeText("glim create-app PizzaApp")
      .then(() => {
        toast.success("Code copied to clipboard");
      })
      .catch(() => {
        toast.error("Unable to copy the code");
      });
  };
  return (
    <div className="w-full py-16 bg-[#D6EFFF]" id="trynow">
      <Toaster position="top-right" reverseOrder={false} />
      <div className="container mx-auto flex flex-col justify-center items-center px-4">
        <div className="text-3xl font-semibold text-center">Try it now</div>
        <div className="w-full lg:w-1/2 p-6 border-x-2 border-t-2 rounded-t-2xl mt-8 border-[#073042] flex justify-between items-center">
          <div className="text-lg">
            <code>&gt; glim create-app PizzaApp</code>
          </div>
          <div
            className="p-4 cursor-pointer hover:opacity-60"
            onClick={copycode}
          >
            <Copy />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TryNow;
