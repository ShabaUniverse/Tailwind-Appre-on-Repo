import React from "react";
import {
  FaWhatsappSquare,
  FaInstagramSquare,
  FaGithubSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer py-10 px-5">
      <div className="container max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        <div className="left">
          <h1 className=" text-green-400 font-bold text-4xl">Tail.</h1>
          <p>
            Follow us for more. Contact on whatsapp, instagram, github.
          </p>
          <div className="icons flex w-1/2 mt-5 justify-between items-center">
            <FaInstagramSquare size={30} className=" bg-transparent"/>
            <FaGithubSquare size={30} className=" bg-transparent"/>
            <FaWhatsappSquare size={30} className=" bg-transparent"/>
          </div>
        </div>

        <div className="right mt-8 md:col-span-2">
            <div className="elements flex justify-between items-center">
                <div className="first">
                    <h2 className=" text-gray-300 font-semibold">Solutions</h2>
                    <ul className="text-sm">
                        <li>Analytics</li>
                        <li>Marketing</li>
                        <li>Commerce</li>
                        <li>Insights</li>
                    </ul>
                </div>
                
                <div className="first">
                    <h2 className=" text-gray-300 font-semibold">Solutions</h2>
                    <ul className="text-sm">
                        <li>Analytics</li>
                        <li>Marketing</li>
                        <li>Commerce</li>
                        <li>Insights</li>
                    </ul>
                </div>

                <div className="first">
                    <h2 className=" text-gray-300 font-semibold">Solutions</h2>
                    <ul className="text-sm">
                        <li>Analytics</li>
                        <li>Marketing</li>
                        <li>Commerce</li>
                        <li>Insights</li>
                    </ul>
                </div>

                <div className="first">
                    <h2 className=" text-gray-300 font-semibold">Solutions</h2>
                    <ul className="text-sm">
                        <li>Analytics</li>
                        <li>Marketing</li>
                        <li>Commerce</li>
                        <li>Insights</li>
                    </ul>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
