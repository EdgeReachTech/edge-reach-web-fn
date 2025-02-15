import React from "react";
import AuthButton from "./authButton";

const Home: React.FC = () => {
  return (
    <div className="relative h-screen bg-cover bg-center overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative flex flex-col items-center justify-center h-full px-4 md:px-9 text-center text-white mt-10">
        <div className="mt-11 flex flex-row justify-center animate-fadeIn space-y-2 md:space-y-0 md:space-x-2 ">
          <h5 className="px-3 text-lg md:text-3xl lg:text-4xl rounded-l-md font-extrabold bg-white text-black shadow-md font-loboto">
            BEST
          </h5>
          <h5 className="px-1 text-lg md:text-3xl lg:text-4xl font-extrabold text-white shadow-md font-loboto">
            IT COMPANY
          </h5>
        </div>
        <div className="flex flex-col lg:justify-center items-center mt-4 animate-fadeIn delay-1s">
          <p className="w-full text-base md:text-lg lg:text-xl my-4  lg:w-1/2 font-open text-gray-300">
            <b>EdgeReach Tech</b> is connecting top-tier developers to deliver
            custom software for your business needs.
          </p>
          <div className="w-1/5 border-b-8 border-gray-300 mt-4 mb-6"></div>
          <div className="flex flex-col items-center">
            <h4 className="text-lg md:text-2xl lg:text-4xl font-bold mt-7 font-loboto">
              Our Mission
            </h4>
            <p className="w-full text-base md:text-lg lg:text-xl my-2 lg:w-1/2 font-open text-gray-300">
              <b>Our mission at EdgeReach Tech</b> is to tackle real-life tech
              and IT challenges head-on, leveraging our full capabilities to
              craft optimal solutions.
            </p>
            <button
              className="relative w-36 text-sm mt-5 rounded-3xl text-white p-2
              transition ease-in duration-300 bg-gradient-to-r from-black to-slate-800
              hover:from-slate-800 hover:to-black shadow-lg"
            >
              View More
            </button>
          </div>
          <div className="flex flex-col lg:flex-row justify-center mt-6 animate-fadeIn delay-2s">
            <AuthButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
