import React from "react";
import quote from "../assets/quote.png";
import edge from "../assets/edge.jpg";

const Testimony: React.FC = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center">
      <div className="pt-36 w-full flex flex-col lg:flex-row justify-center items-center space-y-10 lg:space-y-0 lg:space-x-10">
        <div className="bg-gradient-to-br from-gray-200 to-gray-300 min-h-[480px] w-full lg:w-1/2 rounded-xl flex flex-col justify-center items-center p-10">
          <div className="text-center font-bold mb-10">
            <p className="text-gray-600">
              "Working with EdgeReach Tech was a smooth and positive experience.
              Their clear communication and commitment to deadlines ensured the
              project stayed on track and delivered within budget."
            </p>
          </div>
          <img
            src={quote}
            alt="quote"
            className="text-orange-500 h-20 w-20 mt-5"
          />
          <div className="flex flex-row items-center mt-5">
            <div className="h-1 w-10 rounded-md bg-gradient-to-tr from-orange-400 to-yellow-300 mr-2" />
            <h3 className="font-bold">Feza Naomi</h3>
          </div>
        </div>
        <div className="relative flex justify-center items-center lg:w-1/2">
          <div className="absolute h-64 w-56 bg-gradient-to-l from-cyan-700 to-cyan-300 rounded-xl transform -translate-x-1/2 -translate-y-1/2" />
          <div className="relative h-64 w-56 bg-white rounded-xl overflow-hidden transform -translate-x-1/2 -translate-y-1/2">
            <img
              src={edge}
              alt="Photo"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-24 px-5 text-center">
        <h1 className="font-bold">
          EdgeReach Tech is a path of digitalising your business.
        </h1>
      </div>
    </div>
  );
};

export default Testimony;
