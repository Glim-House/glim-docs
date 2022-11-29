import React from "react";

function Feature() {
  return (
    <div className="container py-16 px-4 mx-auto">
      <div className="text-3xl font-semibold pl-4">Look what we have</div>

      <div className="flex md:flex-row flex-col mt-6 ">
        <div className="md:w-1/4 p-4">
          <div className="bg-[#073042] px-4 py-12 text-white h-full ">
            <div className="text-2xl font-semibold">Easy to Use</div>
            <div className="mt-4">
              Start quickly with built-in navigators that deliver a seamless
              out-of-the-box experience.
            </div>
          </div>
        </div>
        <div className="md:w-1/4 p-4">
          <div className="bg-[#073042] px-4 py-12 text-white h-full ">
            <div className="text-2xl font-semibold">
              Components built for iOS and Android
            </div>
            <div className="mt-4">
              Platform-specific look-and-feel with smooth animations and
              gestures.
            </div>
          </div>
        </div>{" "}
        <div className="md:w-1/4 p-4">
          <div className="bg-[#073042] px-4 py-12 text-white h-full ">
            <div className="text-2xl font-semibold">
              Completely customizable
            </div>
            <div className="mt-4">
              If you know how to write apps using JavaScript you can customize
              any part of React Navigation.
            </div>
          </div>
        </div>{" "}
        <div className="md:w-1/4 p-4">
          <div className="bg-[#073042] px-4 py-12 text-white h-full ">
            <div className="text-2xl font-semibold">Extensible platform</div>
            <div className="mt-4">
              React Navigation is extensible at every layer— you can write your
              own navigators or even replace the user-facing API.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feature;
