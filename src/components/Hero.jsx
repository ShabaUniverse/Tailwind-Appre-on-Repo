import React from "react";
import Typed from "react-typed";

const Hero = () => {
  return (
    <div className="hero flex flex-col justify-center items-center h-screen max-w-6xl mx-auto mt-[-60px] px-3">
      <p className=" font-medium text-xl md:text-2xl"> Harnessing the Power of Tailwind CSS </p>
      <h1 className="text-green-400 text-4xl font-bold md:text-5xl">
        Grow with Tailwind
      </h1>
      <div className=" flex flex-col justify-center items-center py-4">
        <p className="font-medium text-xl md:text-2xl">Fast, cozy, better than</p>
        <Typed
          strings={["Bootstrap", "Foundation", "Bulma", "Skeleton"]}
          typeSpeed={120}
          backSpeed={140}
          loop
          className="font-medium text-xl md:text-2xl"
        />
      </div>
      <p className="text-center font-medium text-gray-500 text-lg md:text-xl">Elevate Your Web Development: Exploring the Boundless Possibilities of Tailwind CSS</p>
        <button className="text-black bg-green-400 font-medium w-[150px] py-2 rounded-md my-4">Get Started</button>
    </div>
  );
};

export default Hero;
