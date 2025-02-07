import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faPhone,
  faSearch,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="fixed top-10 z-50 w-full px-4 lg:px-10 ">
      <div className="lg:bg-white  shadow-md lg:shadow-none lg:flex lg:flex-row lg:justify-between lg:items-center ">
        <div className="flex justify-between items-center mx-2 px-4 ">
          <h5 className="font-extrabold hidden lg:block text-teal-950">
            <a href="/">EDGE-REACH TECH</a>
          </h5>
          <FontAwesomeIcon
            icon={isMenuOpen ? faTimes : faBars}
            className="text-black text-3xl fixed left-4 top-4 lg:hidden cursor-pointer bg-white p-2 rounded-lg"
            onClick={toggleMenu}
          />
        </div>
        <div
          className={`lg:flex lg:flex-row bg-white w-[80%] lg:w-fit fixed lg:static left-0 h-full lg:h-auto mt-7 lg:mt-1 rounded-[0_30px_0_0] lg:rounded-none ${
            isMenuOpen ? "flex" : "hidden"
          } transition-all duration-300 ease-in-out flex-col`}
        >
          <a href="/" className="p-4 lg:px-4 lg:py-2 hover:underline">
            Home
          </a>
          <a href="/about" className="p-4 lg:px-4 lg:py-2 hover:underline">
            About
          </a>
          <a href="#services" className="p-4 lg:px-4 lg:py-2 hover:underline">
            Services
          </a>
          <a href="/project" className="p-4 lg:px-4 lg:py-2 hover:underline">
            Projects
          </a>
          <a href="/blogs" className="p-4 lg:px-4 lg:py-2 hover:underline">
            Blogs
          </a>
          <a href="/contact" className="p-4 lg:px-4 lg:py-2 hover:underline">
            Contact
          </a>
        </div>
        <div className="hidden lg:flex lg:items-center h-full">
          <FontAwesomeIcon
            icon={faSearch}
            className="p-2 m-4 cursor-pointer bg-gradient-to-r from-cyan-600 to-cyan-300 rounded-full"
          />
          <div className="flex flex-row  bg-cyan-400  h-full">
            <FontAwesomeIcon icon={faPhone} className="m-3" />
            <div className="flex flex-col">
              <p className="font-bold">Call us</p>
              <p>+250 786 605 505</p>
            </div>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div
          className="fixed top-0 left-0  bg-black opacity-50 lg:hidden"
          onClick={toggleMenu}
        ></div>
      )}
    </div>
  );
};

export default Navbar;
