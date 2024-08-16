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
    <div className="relative">
      <div className="fixed top-0 z-50 w-full bg-white shadow-md lg:shadow-none lg:flex lg:flex-row lg:justify-between lg:items-center lg:px-36 lg:py-4">
        <div className="flex justify-between items-center p-4 lg:p-0">
          <h5 className="font-extrabold text-teal-950">EDGE-REACH TECH</h5>
          <FontAwesomeIcon
            icon={isMenuOpen ? faTimes : faBars}
            className="text-black text-3xl lg:hidden cursor-pointer"
            onClick={toggleMenu}
          />
        </div>
        <div
          className={`lg:flex lg:flex-row ${
            isMenuOpen ? "flex" : "hidden"
          } transition-all duration-300 ease-in-out flex-col  `}
        >
          <a href="#home" className="p-4 lg:px-4 lg:py-2 hover:underline">
            Home
          </a>
          <a href="#about" className="p-4 lg:px-4 lg:py-2 hover:underline">
            About
          </a>
          <a href="#services" className="p-4 lg:px-4 lg:py-2 hover:underline">
            Services
          </a>
          <a href="#projects" className="p-4 lg:px-4 lg:py-2 hover:underline">
            Projects
          </a>
          <a href="#blogs" className="p-4 lg:px-4 lg:py-2 hover:underline">
            Blogs
          </a>
          <a href="#contact" className="p-4 lg:px-4 lg:py-2 hover:underline">
            Contact
          </a>
        </div>
        <div className="hidden lg:flex lg:items-center">
          <FontAwesomeIcon
            icon={faSearch}
            className="p-2 m-4 cursor-pointer bg-gradient-to-r from-cyan-600 to-cyan-300 rounded-full"
          />
          <div className="flex flex-row p-3 bg-cyan-400 items-center">
            <FontAwesomeIcon icon={faPhone} className="m-3" />
            <div className="flex flex-col">
              <p className="font-bold">Call us</p>
              <p className="">+250 786 605 505</p>
            </div>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black opacity-50 lg:hidden"
          onClick={toggleMenu}
        ></div>
      )}
    </div>
  );
};

export default Navbar;
