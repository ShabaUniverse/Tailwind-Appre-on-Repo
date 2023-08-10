import React from "react";
import Laptop from "../../public/images/laptop.jpg";
const Analytics = () => {
  return (
    <div className="analytics bg-white">
      <div className="container max-w-6xl mx-auto grid justify-center items-center md:grid-cols-2 px-4">
        <img src={Laptop} alt="" className="w-[500px] mx-auto"/>
        <div className="content">
          <h4 className="text-green-400 font-semibold text-xl">Data Analytics Dashboard</h4>
          <h3 className="text-black font-semibold text-xl">Our research shows</h3>
          <p className="text-black font-medium">
            In 2023, Tailwind CSS continues to thrive as a favored choice among
            both seasoned professionals and newcomers in the industry. Developers can swiftly construct
            intricate layouts without the need to write
            extensive custom CSS.
          </p>

          <button className="text-black bg-green-400 font-medium w-[150px] py-2 rounded-md my-4">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
