import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Logo from "../assets/Logo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div
      className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white"
      id="Navbar"
    >
      <a href="/" target="_blank" rel="noreferrer">
        <img class="object-contain h-14 w-30 m-5" src={Logo} alt="Logo" />
      </a>
      <ul className="hidden md:flex">
        <a href="#Services">
          <li className="p-4 navbarHover">Our Services</li>
        </a>
        <a href="#Prices">
          <li className="p-4 navbarHover">Prices</li>
        </a>
        <a href="#About">
          <li className="p-4 navbarHover">About Us</li>
        </a>
        <a href="#Contact">
          <li className="p-4 navbarHover">Contact</li>
        </a>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <img class="object-contain h-14 w-30 m-5" src={Logo} alt="Logo" />
        <li className="p-4 border-b border-gray-600">Our Services</li>
        <li className="p-4 border-b border-gray-600">Prices</li>
        <li className="p-4 border-b border-gray-600">About Us</li>
        <li className="p-4 border-b border-gray-600">Contact</li>
        <li className="p-4">Contact</li>
      </ul>
      <button className="bg-[#FF6363] w-[200px] rounded-md font-medium my-6  py-3 text-black buttonHover">
        Let's Talk
      </button>
    </div>
  );
};

export default Navbar;
