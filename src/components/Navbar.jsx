import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="navbar flex max-w-6xl mx-auto justify-between items-center p-3">
      <div className="logo">
        <h1 className=" text-green-400 font-bold text-4xl">Tail.</h1>
      </div>

      <div className="links hidden md:flex">
        <ul className="flex">
          <li className="p-2 font-semibold">Home</li>
          <li className="p-2 font-semibold">Company</li>
          <li className="p-2 font-semibold">Resources</li>
          <li className="p-2 font-semibold">About</li>
          <li className="p-2 font-semibold">Contact</li>
        </ul>
      </div>

      <div className="flex md:hidden" onClick={handleNav}>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <div
        className={
          nav
            ? "links-mob fixed top-0 left-0 w-3/6 border-r border-gray-700 bg-[#111111] h-full ease-in-out duration-300"
            : "fixed left-[-100%]"
        }>
        <h1 className=" text-green-400 font-bold text-4xl pl-4 pt-3">Tail.</h1>
        <ul className="uppercase mr-5">
          <li className="p-4 border-b border-gray-100 font-semibold">Home</li>
          <li className="p-4 border-b border-gray-100 font-semibold">Company</li>
          <li className="p-4 border-b border-gray-100 font-semibold">Resources</li>
          <li className="p-4 border-b border-gray-100 font-semibold">About</li>
          <li className="p-4 font-semibold">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
