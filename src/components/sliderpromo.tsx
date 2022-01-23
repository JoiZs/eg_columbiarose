/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { useEffect } from "react";

interface Props {}

const Slider = (props: Props) => {
  const [devRat, setDevRat] = useState(4);

  useEffect(() => {
    if (innerHeight > innerWidth) {
      setDevRat(1);
    }
  }, []);
  const members = [
    { name: "yellow", src: "./members/yellow.webp" },
    { name: "green", src: "./members/green.webp" },
    { name: "blue", src: "./members/blue.webp" },
    { name: "pink", src: "./members/pink.webp" },
    { name: "black", src: "./members/black.webp" },
    { name: "gold", src: "./members/gold.webp" },
  ];

  return (
    <div>
      <Splide
        id="splider"
        className="p-5 max-w-7xl mx-auto"
        options={{
          autoplay: true,
          arrows: true,
          pagination: false,
          easing: "ease",
          gap: "1em",
          perPage: devRat,
          trimSpace: true,
        }}
      >
        {members.map((member) => (
          <SplideSlide key={member.name}>
            <img
              className="rounded-md shadow-xl duration-300 transition-all ease-in-out"
              src={member.src}
              alt={member.name}
            />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default Slider;
