import { Splide } from "@splidejs/react-splide";
import React from "react";
import SelectionMember from "./membersel";
import Registermember from "./registerform";
import Slider from "./sliderpromo";

interface Props {}

const Promotion = (props: Props) => {
  return (
    <div
      id="promoDiv"
      className="mx-auto px-4 sm:px-6 h-full w-full bg-gray-600 bg-opacity-20 backdrop-filter backdrop-blur-sm from-bg-coffee-7 z-20"
    >
      <div className=" xl:mx-32 text-xl font-bold text-coffee-6 py-8">
        Reward
      </div>
      <Slider />
      <SelectionMember />
      <Registermember />
    </div>
  );
};

export default Promotion;
