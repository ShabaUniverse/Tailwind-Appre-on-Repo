import React from "react";
import Single from "../../public/images/single.png";
import Double from "../../public/images/double.png";
import Triple from "../../public/images/triple.png";

const Cards = () => {
  return (
    <div className="cards py-14 bg-white text-black w-full">
      <div className="container max-w-6xl mx-auto grid md:grid-cols-3">
        <div className="card shadow-xl mx-5 my-10 flex flex-col justify-center items-center rounded-lg hover:scale-105 duration-100">
          <img src={Single} alt="" className="w-20 mt-[-40px]" />
          <h2 className="text-2xl font-semibold my-3">Single User</h2>
          <p className="text-2xl font-semibold my-3">$149</p>
          <div className="desc text-center w-3/4">
            <p className="font-medium border-b">500 GB Storage</p>
            <p className="font-medium border-b">1 Granted User</p>
            <p className="font-medium border-b">Send up to 2 GB</p>
          </div>
          <button className="text-black bg-green-400 font-medium w-[150px] py-2 rounded-md my-4">
            Start Trial
          </button>
        </div>

        <div className="card shadow-xl bg-gray-100 mx-5 my-10 md:my-4 flex flex-col justify-center items-center rounded-lg hover:scale-105 duration-100">
          <img src={Double} alt="" className="w-20 mt-[-40px] md:mt-[-80px]" />
          <h2 className="text-2xl font-semibold my-3">Partnership</h2>
          <p className="text-2xl font-semibold my-3">$149</p>
          <div className="desc text-center w-3/4">
            <p className="font-medium border-b">500 GB Storage</p>
            <p className="font-medium border-b">1 Granted User</p>
            <p className="font-medium border-b">Send up to 2 GB</p>
          </div>
          <button className="bg-black text-green-400 font-medium w-[150px] py-2 rounded-md my-4">
            Start Trial
          </button>
        </div>

        <div className="card shadow-xl mx-5 my-10 flex flex-col justify-center items-center rounded-lg hover:scale-105 duration-100">
          <img src={Triple} alt="" className="w-20 mt-[-40px]" />
          <h2 className="text-2xl font-semibold my-3">Group</h2>
          <p className="text-2xl font-semibold my-3">$149</p>
          <div className="desc text-center w-3/4">
            <p className="font-medium border-b">500 GB Storage</p>
            <p className="font-medium border-b">1 Granted User</p>
            <p className="font-medium border-b">Send up to 2 GB</p>
          </div>
          <button className="text-black bg-green-400 font-medium w-[150px] py-2 rounded-md my-4">
            Start Trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
