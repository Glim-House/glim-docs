import React from "react";
import Spotlight from "../components/Spotlight";
import HeadwithTitle from "../components/HeadwithTitle";
import Counter from "../components/Counter";
import TryNow from "../components/TryNow";
import Footer from "../components/Footer";
import Feature from "../components/Feature";

function Home() {
  return (
    <>
      <HeadwithTitle page="Home" />
      <Spotlight />
      <Feature />
      <Counter />
      <TryNow />
      <Footer />
    </>
  );
}

export default Home;
