import React from "react";

const NewsLetter = () => {
  return (
    <div className="newsletter py-3 px-3">
      <div className="container max-w-6xl mx-auto grid justify-center md:grid-cols-3">
        <div className="left col-span-2 md:pl-3 md:my-auto">
          <h2 className="text-lg font-medium md:text-2xl lg:text-3xl">Want tips & tricks to optimize your flow?</h2>
          <h3 className="text-md font-medium">Sign up to our newsletter and stay up to date.</h3>
        </div>

        <div className="right py-3 px-1 flex flex-col justify-start items-center col-span-2 md:col-span-1 md:py-0">
          <input type="email" placeholder="Enter Email" className="py-2 px-2 rounded-md w-full text-black outline-none md:py-2"/>
          <button className="text-black bg-green-400 font-medium w-[150px] py-2 rounded-md my-4">Notify Me</button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
