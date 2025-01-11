import React from "react";
import { FaDotCircle } from "react-icons/fa";

const ProgressSection = () => {
  const progress = 70; // Example progress percentage

  return (
    <div className="bg-gray-200 rounded-lg p-4 shadow h-fit border-spacing-2 border-2 border-black">
      <h3 className="text-lg font-semibold mb-4">Progress</h3>
      <div className="relative w-full h-48 flex items-center justify-center">
        <svg className="w-32 h-32" viewBox="0 0 36 36">
          <path
            className="stroke-orange-200"
            fill="none"
            strokeWidth="3"
            d="M18 2.0845
               a 15.9155 15.9155 0 0 1 0 31.831
               a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          <path
            className="stroke-orange-600"
            fill="none"
            strokeLinecap="round"
            strokeWidth="3"
            strokeDasharray={`${progress}, 100`}
            d="M18 2.0845
               a 15.9155 15.9155 0 0 1 0 31.831
               a 15.9155 15.9155 0 0 1 0 -31.831"
          />
        </svg>
        <span className="absolute text-2xl font-bold">{`${progress}%`}</span>
      </div>
      <ul className="mt-4 text-sm">
        <li className="flex flex-col items-start">
          <div className="flex items-center">
            <FaDotCircle className="text-yellow-600" />
            <p className="flex justify-center items-center gap-9">
              Pending <span className="text-yellow-500">70%</span>
            </p>
          </div>
          <p className="ml-6">Description: This includes all the projects that have been completed successfully.</p>
        </li>
        <li className="flex flex-col items-start">
          <div className="flex items-center">
            <FaDotCircle className="text-yellow-600" />
            <p className="flex justify-center items-center gap-9">
              In Progress <span className="text-yellow-500">70%</span>
            </p>
          </div>
          <p className="ml-6">Description: These are the projects that are currently being worked on.</p>
        </li>
        <li className="flex flex-col items-start">
          <div className="flex items-center">
            <FaDotCircle className="text-yellow-600" />
            <p className="flex justify-center items-center gap-9">
              Pending <span className="text-yellow-500">70%</span>
            </p>
          </div>
          <p className="ml-6 text-sm">Description: This covers all the projects that are yet to be started.</p>
        </li>
      </ul>
    </div>
  );
};

export default ProgressSection;
