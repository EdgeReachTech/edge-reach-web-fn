import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import image1 from "../assets/image1.webp";
import image2 from "../assets/image2.webp";
import image3 from "../assets/image3.webp";

const OurBlog: React.FC = () => {
  const navigate = useNavigate();
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

  // Animation variants
  const slideVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
    exit: { opacity: 0, x: -100, transition: { duration: 0.8 } },
  };

  const buttonVariants = {
    hover: { scale: 1.05, transition: { duration: 0.2 } },
    tap: { scale: 0.95 },
  };

  return (
    <div className="relative p-5 md:p-10 bg-slate-200">
      <div className="flex flex-col lg:flex-row lg:justify-center items-center max-w-7xl mx-auto">
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 mb-8 lg:mb-0 px-4"
        >
          <h3 className="font-bold text-2xl md:text-4xl font-sans">
            <span className="bg-gradient-to-l from-cyan-700 to-cyan-400 p-2 text-white rounded-lg">
              OUR
            </span>{" "}
            BLOG
          </h3>
          <h1 className="mt-6 text-3xl md:text-4xl font-bold text-gray-800">
            Unleashing Innovation,
            <br /> One Project at a Time
          </h1>
          <div className="h-1 w-24 mt-6 bg-cyan-500" />
          <p className="mt-8 text-lg md:text-xl text-gray-600">
            Discover how EdgeReach Tech transforms ideas into cutting-edge solutions.
          </p>
          <motion.div
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            className="mt-6 h-12 w-40 bg-gradient-to-r from-orange-600 to-yellow-400 rounded-full flex justify-center items-center cursor-pointer"
            onClick={() => navigate("/ourblog")}
          >
            <h5 className="font-bold text-white text-sm">VIEW ALL BLOGS</h5>
          </motion.div>
        </motion.div>

        {/* Right Section (Carousel) */}
        <div className="w-full lg:w-1/2 flex items-center justify-center px-4">
          <div className="relative w-full max-w-[450px] h-72 md:h-96 overflow-hidden">
            {slides.map((slide, index) => (
              <motion.div
                key={index}
                variants={slideVariants}
                initial="hidden"
                animate={index === currentSlide ? "visible" : "hidden"}
                exit="exit"
                className="absolute inset-0"
              >
                <div className="bg-white h-full rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <img
                    src={slide.image}
                    alt={`Slide ${index + 1}`}
                    className="h-2/3 w-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-l from-cyan-700 to-cyan-300 rounded-b-xl p-4 flex flex-col items-center">
                    <h3 className="font-semibold text-gray-100 text-sm md:text-base text-center">
                      {slide.date} • {slide.category}
                    </h3>
                    <div className="flex flex-row items-center mt-2">
                      <div className="h-1 w-7 rounded-md bg-gradient-to-tr from-orange-400 to-yellow-300 mr-2" />
                      <p className="font-bold text-white text-sm md:text-lg text-center">
                        {slide.title}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurBlog;