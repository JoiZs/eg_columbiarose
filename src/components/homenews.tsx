/* eslint-disable @next/next/no-img-element */
import React from "react";

interface Props {
  title: string;
  img: string;
}

const Homenews = (props: Props) => {
  return (
    <div className="w-screen h-full flex flex-col justify-center items-center gap-10 relative xl:hidden text-justify backdrop-blur">
      <div className="uppercase text bg-coffee-3 bg-opacity-60 h-1/4 w-full text-2xl text-center flex flex-col justify-center items-center">
        <span className="tracking-wider"> rewards member card</span>
        <span className="text-lg">6 types</span>
      </div>
    </div>
  );
};

export default Homenews;
