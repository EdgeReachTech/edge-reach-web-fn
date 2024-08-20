import React from "react";
import IMG_77 from "../assets/serviceimage/IMG-77.jpg";
import { FaPinterestP } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { CiInstagram } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";

const Aboutus: React.FC = () => {
  return (
    <div className=" bg-gray-300 h-auto   relative pt-9 flex px-10 ">
      <div className="left hidden md:block w-full md:w-1/2">
        <div className="relative">
          <div className="relative">
            <div className="bg-[#008080] w-48 h-40 rounded-lg relative m-10 left-20 top-20"></div>
            <div
              style={{
                background:
                  "linear-gradient(270deg, #FFFFFF 20.25%, #999999 93.37%)",
              }}
              className="w-44 h-[190px] rounded-lg absolute top-40 left-44"
            ></div>
            <div className="img absolute top-6 left-8 bottom-8">
              <img className="w-60 h-72 rounded-lg" src={IMG_77} alt="" />
            </div>
          </div>
          <div
            style={{
              background:
                "linear-gradient(88.76deg, #FFA500 1.06%, #FFE600 99.34%)",
              borderRadius: "8px",
              fontFamily: "'Josefin Sans', sans-serif",
            }}
            className="absolute px-12 py-2 left-48 top-56 text-center font-bold"
          >
            Follow us
            <div className="flex flex-row gap-2 mt-2">
              <FaPinterestP />
              <IoLogoGithub />
              <TiSocialLinkedinCircular />
              <CiInstagram />
              <FaXTwitter />
              <FaFacebookF />
            </div>
          </div>
        </div>
      </div>
      <div className="right w-full md:w-auto ml-0 md:ml-20">
        <h1 className="text-center font-bold mb-3">
          <span
            style={{
              background: "linear-gradient(90deg, #00FFFF 0%, #008080 100%)",
              display: "inline-block",
              padding: "0.5rem",
            }}
            className="rounded-lg"
          >
            ABOUT US
          </span>
        </h1>
        <p
          style={{
            fontFamily: "Poetsen One, sans-serif",
            // fontSize: '0.80rem',
          }}
          className="text-[13px] md:text-lg"
        >
          EdgeReach Tech, we are dynamic and innovative <br />
          technology company that is committed to delivering <br />
          cutting-edge solutions for our clients. With a team of <br />
          talented professionals, we strive to push boundaries
          <br />
          and explore new frontiers in digital landscape. <br />
        </p>
        <hr className="border-4 w-20 border-[#333333] mt-4" />
        <br />
        <h1
          style={{
            fontFamily: "'Red Hat Text', sans-serif",
            fontSize: "1rem",
          }}
          className="font-semibold mb-2"
        >
          Our mission
        </h1>
        <p
          style={{
            fontFamily: "'Red Hat Text', sans-serif",
            fontSize: "1rem",
          }}
        >
          At EdgeReach Tech, our mission is to tackle real-life tech and
          <br />
          IT challenges head-on, leveraging our full capabilities to craft{" "}
          <br />
          optimal solutions.
          <br />
        </p>
        <button
          style={{
            background: "linear-gradient(90deg, #00FFFF 0%, #008080 100%)",
            border: "none",
            color: "white",
            padding: "10px 20px",
            cursor: "pointer",
            fontSize: "1rem",
          }}
          className="my-4 rounded-full"
        >
          READ MORE
        </button>
      </div>
      <div
        className="w-44 h-36 right-11 top-96 left-[1190px] absolute rounded-full"
        style={{
          transform: "rotate(120.01deg)",
          background:
            "linear-gradient(197.07deg, #FFA500 40.58%, #FFE604 88.26%)",
        }}
      />
    </div>
  );
};

export default Aboutus;
