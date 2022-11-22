import Head from "next/head";
import React from "react";

interface Props {
  page: string;
}
function HeadwithTitle({ page }: Props) {
  return (
    <>
      <Head>
        <title>Glim | {page || ""} </title>
      </Head>
    </>
  );
}

export default HeadwithTitle;
