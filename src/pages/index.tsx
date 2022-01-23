import type { NextPage } from "next";
import Homediv from "../components/home";
import Promotion from "../components/promotion";

const Home: NextPage = () => {
  return (
    <div
      id="fullhomepg"
      className="bg-coffee-6 bg-opacity-30 w-screen h-screen  overflow-x-hidden scroll-smooth"
    >
      <Homediv />
      <Promotion />
    </div>
  );
};

export default Home;
