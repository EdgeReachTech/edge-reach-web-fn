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
    {
      image:
        "https://res.cloudinary.com/dxy33wiax/image/upload/v1713895476/oibnmdmwycczygpedrqz.jpg",
      title: "Portfolio 3",
      desc: "Branding and Coding",
    },
    {
      image:
        "https://res.cloudinary.com/dxy33wiax/image/upload/v1713895476/oibnmdmwycczygpedrqz.jpg",
      title: "Portfolio 4",
      desc: "Branding Code",
    },
  ];

  return (
    <div className="relative min-h-screen">
      <div className="flex flex-row pt-36 justify-between">
        <div className="flex flex-row justify-start">
          {portfolios.map((portfolio) => (
            <div key={portfolio.title} className="w-72 rounded-lg m-1 flex flex-col overflow-hidden bg-white ml-6">
              <img
                className="overflow-hidden h-64"
                src={portfolio.image}
                alt="Photo 1"
              />
              <div className="flex flex-col ml-11 my-6">
                <h5 className="text-xl font-bold mb-3">{portfolio.title}</h5>
                <p>{portfolio.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-between">
          <div className="flex flex-col mx-11 text-white">
            <h5 className="my-5 text-3xl">
              <span className="bg-gradient-to-br from-orange-400 to-yellow-300 m-2 rounded-s-md px-1">
                PORT
              </span>
              FOLIO
            </h5>
            <p className="text-4xl my-11">Experienced in Gallery</p>
          </div>
          <div className="mx-36 flex flex-row">
            <FontAwesomeIcon
              icon={faAngleLeft}
              className="text-xl mx-5 p-3 bg-gray-400 rounded-full hover:bg-gray-500 cursor-pointer"
            />
            <FontAwesomeIcon
              icon={faAngleRight}
              className="text-xl mx-5 p-3 bg-gray-400 rounded-full hover:bg-gray-500 cursor-pointer"
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full text-center mb-28 flex flex-row justify-center">
        <div>
         <h5 className="text-xl p-3 font-bold">VIEW ALL PORTFOLIO</h5>
        </div>
        <div>
        <FontAwesomeIcon
              icon={faAngleRight}
              className="text-xl mx-0 p-4 cursor-pointer"
            />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
