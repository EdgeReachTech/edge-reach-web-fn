import React, { useEffect, useState } from "react";
import image1 from "../assets/image1.webp";
import image2 from "../assets/image2.webp";
import image3 from "../assets/image3.webp";
import { useNavigate } from "react-router-dom";

const OurBlog: React.FC = () => {
  const navigate = useNavigate()
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: image1,
      date: "June 20, 2024",
      category: "Launch Edge-Reach",
      title: "Working Together as a Team",
    },
    {
      image: image2,
      date: "June 20, 2024",
      category: "Launch EdgeReach",
      title: "Collaboration is Key to Success",
    },
    {
      image: image3,
      date: "June 20, 2024",
      category: "Launch Edge-Reach",
      title: "Innovation in the Digital Age",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 3000); 
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative  p-5 md:p-10 bg-slate-300">
      <div className="flex flex-col md:flex-row lg:justify-center px-32">
        <div className="w-full md:w-1/2 mb-10 md:mb-0">
          <h3 className="font-bold text-2xl md:text-4xl font-loboto">
            <span className="mr-2 bg-gradient-to-l from-cyan-700 to-cyan-400 p-1 text-white rounded-lg ">
              OUR
            </span>
            BLOG
          </h3>
          <h1 className="mt-10  md:text-4xl font-bold font-loboto text-4xl">
            Unleashing Innovation,
            <br /> One Project at a Time
          </h1>
          <div className="h-1 w-24 mt-10 bg-gray-500" />
          <p className="mt-14 md:text-base font-open text-3xl" >
            Welcome to the EdgeReach Tech Blog! Here, we bridge the <br />
            gap between cutting-edge technology and real-world <br />
            business solutions. We're passionate about helping <br />
            businesses like yours thrive in today's digital landscape.
          </p>
          <div className="mt-5 h-10 w-36 bg-gradient-to-r from-orange-600 to-yellow-400 rounded-3xl flex justify-center items-center cursor-pointer hover:bg-gradient-to-l">
            <h5 className="font-bold text-[12px]" onClick={()=> navigate("/OurBlog")}>VIEW ALL BLOGS</h5>
          </div>
        </div>
        <div className="relative w-full md:w-1/2 flex items-center justify-center">
          <div className="relative w-full md:w-[450px] h-full overflow-hidden">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentSlide
                    ? "opacity-100 visible"
                    : "opacity-0 invisible"
                }`}
              >
                <div className="bg-white h-72 md:h-96 rounded-xl overflow-hidden">
                  <img
                    src={slide.image}
                    alt={`Image ${index + 1}`}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-l from-cyan-700 to-cyan-300 rounded-b-xl p-4 flex flex-col items-center">
                    <h3 className="font-bold text-gray-500 text-center">
                      {slide.date} . {slide.category}
                    </h3>
                    <div className="flex flex-row items-center mt-2">
                      <div className="h-1 w-7 rounded-md bg-gradient-to-tr from-orange-400 to-yellow-300 mr-2" />
                      <p className="font-bold text-center">{slide.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurBlog;
