import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Portfolio: React.FC = () => {
  const portfolios = [
    {
      image:
        "https://res.cloudinary.com/dxy33wiax/image/upload/v1713895476/oibnmdmwycczygpedrqz.jpg",
      title: "Portfolio 1",
      desc: "Edge-reach-tech",
    },
    {
      image:
        "https://res.cloudinary.com/dxy33wiax/image/upload/v1713895476/oibnmdmwycczygpedrqz.jpg",
      title: "Portfolio 2",
      desc: "Branding and Coding",
    },
  ];

  return (
    <div className="relative min-h-screen p-5 md:p-10">
      <div className="flex flex-col md:flex-row pt-36 justify-between">
        <div className="flex flex-wrap justify-center md:justify-start">
          {portfolios.map((portfolio) => (
            <div
              key={portfolio.title}
              className="w-full md:w-72 rounded-lg m-1 flex flex-col overflow-hidden bg-white md:ml-6 mb-6 md:mb-0"
            >
              <img
                className="h-64 object-cover"
                src={portfolio.image}
                alt={portfolio.title}
              />
              <div className="flex flex-col p-6">
                <h5 className="text-xl font-bold mb-3">{portfolio.title}</h5>
                <p>{portfolio.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-between items-center md:items-start">
          <div className="flex flex-col text-white text-center md:text-left">
            <h5 className="my-5 text-3xl">
              <span className="bg-gradient-to-br from-orange-400 to-yellow-300 m-2 rounded-md px-1">
                PORT
              </span>
              FOLIO
            </h5>
            <p className="text-2xl md:text-4xl my-11">Experienced in Gallery</p>
          </div>
          <div className="flex flex-row mt-10 md:mt-0">
            <FontAwesomeIcon
              icon={faAngleLeft}
              className="text-xl mx-2 p-3 bg-gray-400 rounded-full hover:bg-gray-500 cursor-pointer"
            />
            <FontAwesomeIcon
              icon={faAngleRight}
              className="text-xl mx-2 p-3 bg-gray-400 rounded-full hover:bg-gray-500 cursor-pointer"
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full text-center mb-28 flex flex-row justify-center">
        <h5 className="text-xl p-3 font-bold">VIEW ALL PORTFOLIO</h5>
        <FontAwesomeIcon
          icon={faAngleRight}
          className="text-xl mx-2 p-4 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Portfolio;
