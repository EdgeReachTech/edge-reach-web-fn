import React from "react";
import quote from "../assets/quote.webp";
import edge from "../assets/edge.jpg";

const Testimony: React.FC = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center bg-gradient-to-b from-gray-100 to-gray-300">
      <div className="pt-24 w-full flex flex-col lg:flex-row gap-x-80 justify-center items-center space-y-10 lg:space-y-0 lg:space-x-10 px-4 lg:px-0">
        <div className="bg-gradient-to-br from-gray-200 to-gray-300 min-h-[360px] lg:min-h-[480px] w-full lg:w-1/4 rounded-xl flex flex-col justify-center items-center p-6 lg:p-10 shadow-lg">
          <div className="text-center font-bold mb-10">
            <p className="text-gray-600 font-open">
              "Working with EdgeReach Tech was a smooth and positive experience.
              Their clear communication and commitment to deadlines ensured the
              project stayed on track and delivered within budget."
            </p>
          </div>
          <img
            src={quote}
            alt="quote"
            className="text-orange-500 h-14 w-14 lg:h-20 lg:w-20 mt-5"
          />
          <div className="flex flex-row items-center mt-5">
            <div className="h-1 w-10 rounded-md bg-gradient-to-tr from-orange-400 to-yellow-300 mr-2" />
            <h3 className="font-bold text-lg font-loboto">Package</h3>
          </div>
          <p className="font-bold text-sm font-open">
            Audio Producet At Country Records{" "}
          </p>
        </div>
        <div className="relative hidden lg:flex max-h-80 h-80 justify-center items-center w-full lg:w-1/3">
          <div className="absolute h-full w-full bg-gradient-to-l from-cyan-700 to-cyan-300 rounded-xl transform -translate-x-1/2 -translate-y-1/2 hidden lg:block" />
          <div className="relative h-full w-full bg-white rounded-xl overflow-hidden transform -translate-x-1/2 -translate-y-1/2 hidden lg:block shadow-lg">
            <img
              src="/package-testmony.webp"
              alt="Photo"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-24 px-5 text-center">
        <h1 className="font-bold text-lg lg:text-2xl">
          EdgeReach Tech is a path to digitalizing your business.
        </h1>
      </div>
    </div>
  );
};

export default Testimony;
