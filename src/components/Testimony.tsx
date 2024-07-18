import React from "react";
import quote from "../assets/quote.png";
import edge from "../assets/edge.jpg";

const testimony: React.FC = () => {
  return (
    <div className="relative min-h-screen">
      <div className="flex flex-row pt-36 justify-center items-center h-full w-full">
        <div className="bg-gradient-to-br from-gray-200 to-gray-300 min-h-[480px] w-2/4 rounded-xl flex flex-col justify-center items-center">
          <div className="w-1/2 text-center font-bold mb-10">
            <p className="text-gray-600">
              "Working with EdgeReach Tech was a smooth and positive experience.
              Their clear communication and commitment to deadlines ensured the
              project stayed on track and delivered within budget."
            </p>
          </div>
          <div className="absolute flex justify-center">
            <img
              src={quote}
              alt="quote"
              className="flex flex-row text-orange-500 h-20 w-20 mt-48 ml-80"
            />
          </div>
          <div className="flex flex-row items-center mr-72">
            <div className="h-1 w-10 rounded-md bg-gradient-to-tr from-orange-400 to-yellow-300 mr-2" />
            <h3 className="flex flex-col font-bold">Feza Naomi</h3>
          </div>
        </div>
        <div className="absolute h-64 w-56 flex flex-col mr-96 -mx-96 mb-56 bg-gradient-to-l from-cyan-700 to-cyan-300 rounded-xl" />
        <div className="absolute h-64 w-56 flex flex-col mr-[400px] -mx-96 mb-80 bg-white rounded-xl overflow-hidden">
          <img src={edge} alt="Photo" className="h-full w-full object-cover" />
        </div>
      </div>
      <div className="flex justify-center items-center mt-24">
        <h1 className="font-bold">
          EdgeReach Tech is a path of digitalising your business.
        </h1>
      </div>
    </div>
  );
};

export default testimony;
