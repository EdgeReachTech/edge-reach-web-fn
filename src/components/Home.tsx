import React from "react";
import AuthButton from "./authButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const home: React.FC = () => {
  return (
    <div
      className="h-screen bg-cover top-0 bg-center absolute "
      style={{ backgroundImage: "url('/b.jpge')" }}
    >
      <div className="px-9 pt-1 lg:pt-32 h-screen bg-cover bg-center">
        <div className="mt-11 flex flex-row ">
          <h5 className="px-3 lg:text-4xl  font-extrabold bg-black text-white">
            BEST
          </h5>
          <h5 className="px-1 font-extrabold lg:text-4xl text-black">
            IT COMPANY
          </h5>
        </div>
        <div className="flex flex-col lg:justify-between">
          <p className="lg:w-2/5 md:w-3/5 w-full text-xl my-4 font-mono">
            <b>EdgeReach Tech </b>is a connecting top-tier developers to deliver
            custom software for your business needs.
          </p>
          <div className="bottom-0 left-0 w-1/5 border-b-8 border-black"></div>
          <div className="flex flex-col">
            <h4 className="font-bold lg:text-xl mt-9">Our Mission</h4>
            <p className="lg:w-2/5 text-lg my-2">
              <b>Our mission At EdgeReach Tech</b>, our mission is to tackle
              real-life tech and IT challenges head-on, leveraging our full
              capabilities to craft optimal solutions.
            </p>
            <button
              className="relative w-36 text-sm mt-5 rounded-3xl text-white p-4
             transition ease-in duration-300 bg-gradient-to-r from-black to-slate-800
             hover:from-slate-800 hover:to-black"
            >
              View More
            </button>
          </div>
          <div className="flex flex-col lg:flex-row justify-around">
            <div className="flex flex-row justify-between m-3 text-black text-2xl  ">
              <p className="mr-3">Follow us</p>
              <Link to="https://github.com/EdgeReachTech">
                <FontAwesomeIcon
                  icon={faGithub}
                  className="mr-3 hover:text-blue-950 hover:text-3xl "
                  cursor={"pointer"}
                />
              </Link>
              <FontAwesomeIcon
                icon={faInstagram}
                className="mr-3 hover:text-blue-950 hover:text-3xl"
                cursor={"pointer"}
              />
              <FontAwesomeIcon
                icon={faLinkedin}
                className="mr-3 hover:text-blue-950 hover:text-3xl"
                cursor={"pointer"}
              />
              <FontAwesomeIcon
                icon={faXTwitter}
                className="mr-3 hover:text-blue-950 hover:text-3xl"
                cursor={"pointer"}
              />
              <FontAwesomeIcon
                icon={faFacebook}
                className="mr-3"
                cursor={"pointer"}
              />
            </div>
            <AuthButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default home;
