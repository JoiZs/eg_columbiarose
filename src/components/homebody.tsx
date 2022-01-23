/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from "react";
import { RiMouseLine } from "react-icons/ri";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import Homenews from "./homenews";

gsap.registerPlugin(ScrollToPlugin);
interface Props {}

const Homebody = (props: Props) => {
  useEffect(() => {
    const tl = gsap.timeline({ repeat: 100 });
    tl.fromTo(
      "#mouseScroll",
      { translateY: -10 },
      { duration: 2, translateY: 10, ease: "power3.inOut" }
    );
    tl.fromTo(
      "#mouseScroll",
      { translateY: 10 },
      { duration: 2, translateY: -10, ease: "power3.inOut" }
    );
  });
  const scrollToHandler = () => {
    gsap.to("#fullhomepg", {
      duration: 0.3,
      scrollTo: "#promoDiv",
      ease: "power1.inOut",
    });
  };
  return (
    <div className="max-w-7xl mx-auto pt-8 px-4 sm:px-6 h-full w-full flex flex-col justify-start xl:justify-center items-center relative">
      <div className="flex flex-col w-full xl:justify-center">
        <h1
          id="crTitle"
          className="uppercase font-bold text-4xl xl:text-6xl tracking-widest text-coffee-3 text-opacity-80"
        >
          columbia rose
          <span className="text-2xl font-bold uppercase tracking-wider text-coffee-5 text-opacity-50">
            COFFEE
          </span>
        </h1>
      </div>
      <span className="text-justify text-coffee-4 text-opacity-70 leading-10 md:text-2xl tracking-wider">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo ullam ea
        expedita eveniet amet. Iste distinctio non voluptas.
      </span>

      <div className="opacity-50 fixed -z-10 -bottom-20 left-1/3 md:left-3/4 md:w-1/2 w-80 xl:w-1/3 transform xl:-left-40">
        <img src="home.webp" alt="Home" />
      </div>
      <Homenews
        img="https://enjoyjava.com/wp-content/uploads/2018/01/How-to-make-strong-coffee.jpg"
        title="hi"
      />
      <RiMouseLine
        id="mouseScroll"
        className="absolute bottom-4 text-2xl hover:brightness-75 cursor-pointer text-coffee-4 md:text-4xl xl:text-3xl"
        onClick={scrollToHandler}
      />
    </div>
  );
};

export default Homebody;
