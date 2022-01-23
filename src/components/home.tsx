import React from "react";
import Homebody from "./homebody";
import Navheader from "./header";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Props {}

const Homediv = (props: Props) => {
  return (
    <div className="h-full flex flex-col">
      <Navheader />
      <Homebody />
    </div>
  );
};

export default Homediv;
