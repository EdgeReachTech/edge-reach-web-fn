import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faPhone, faSearch } from "@fortawesome/free-solid-svg-icons";
const Navbar: React.FC = () => {
  return (
    <div className="">
      <FontAwesomeIcon
        icon={faBars }
        className="mt-11  text-black  text-3xl  fixed top-0 z-50 lg:hidden  block"
      />
      <div className=" lg:mt-7 hidden md:hidden  lg:mx-36   bg-neutral-500 lg:flex lg:flex-row flex-col  fixed lg:top-0 z-50 shadow-md ">
        <div className="m-6 px-5">
          <h5 className="font-extrabold text-teal-950">EDGE-REACH TECH</h5>
        </div>
        <div className=" px-10 flex flex-col  lg:flex-row">
          <button className="p-2 active:text-slate-600 hover:underline">
            Home
          </button>
          <button className="p-2 hover:underline">About</button>
          <button className="p-2 hover:underline">Services</button>
          <button className="p-2 hover:underline">Projects</button>
          <button className="p-2 hover:underline">Blogs</button>
          <button className="p-2 hover:underline">Contact</button>
        </div>
        <div className="flex flex-row">
          <FontAwesomeIcon
            icon={faSearch}
            className="p-2 m-4 cursor-pointer bg-gradient-to-r from-cyan-600 to-cyan-300 rounded-full"
          />

          <div className="lg:flex md:flex hidden flex-row p-3 bg-cyan-400">
            <FontAwesomeIcon icon={faPhone} className=" m-3" />
            <div className="flex flex-col">
              <p className="">Call us</p>
              <p className="">+250 786 605 505</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
