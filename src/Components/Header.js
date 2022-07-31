import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="shadow-lg">
      <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-[#666666]">
        <h1 className="text-3xl font-bold">
          <img src="logo.svg" className="lg:w-40 w-32" alt="Logo" />
        </h1>
        <ul className="hidden md:flex">
          <li className="p-4">Home</li>
          <li className="p-4">Process</li>
          <li className="p-4 ">Top Admissions</li>
          <li className="p-4">About</li>
          <li className="p-4">Contact</li>
        </ul>
        <div onClick={handleNav} className="block md:hidden">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>

        <ul
          className={
            nav
              ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-300 shadow-md bg-white ease-in-out duration-500"
              : "ease-in-out duration-500  fixed left-[-100%]"
          }
        >
          <h1 className=" text-3xl font-bold m-4">
            <img src="logo.svg" className="w-36" alt="Logo" />
          </h1>
          <li className="p-4 border-b border-gray-300">Home</li>
          <li className="p-4 border-b border-gray-300">Process</li>
          <li className="p-4 border-b border-gray-300">Top Admissions</li>
          <li className="p-4 border-b border-gray-300">About</li>
          <li className="p-4">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
