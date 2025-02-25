import React from "react";
import quote from "../assets/quote.webp";
import { motion } from "framer-motion";
import pkg from "../assets/pkg.webp"; 

const Testimony: React.FC = () => {
  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    hover: { scale: 1.02, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)" },
  };

  const textVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, delay: 0.2 } },
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center bg-gradient-to-b from-gray-100 to-gray-300">
      <div className="pt-24 w-full flex flex-col lg:flex-row justify-center items-center gap-10 px-4 lg:px-10 max-w-7xl mx-auto">
        {/* Testimony Card */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          whileHover="hover"
          className="bg-gradient-to-br from-gray-200 to-gray-300 w-full lg:w-1/3 rounded-xl flex flex-col justify-center items-center p-6 lg:p-10 shadow-lg"
        >
          {/* Circular Image (Small Screens Only) */}
          <div className="lg:hidden mb-6">
            <img
              src={pkg} 
              alt="Testimonial Avatar"
              className="h-20 w-20 rounded-full object-cover border-4 border-cyan-500"
            />
          </div>

          <div className="text-center font-bold mb-6">
            <p className="text-gray-600 text-sm lg:text-base">
              "Working with EdgeReach Tech was a smooth and positive experience.
              Their clear communication and commitment to deadlines ensured the
              project stayed on track and delivered within budget."
            </p>
          </div>

          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            src={quote}
            alt="quote"
            className="text-orange-500 h-12 w-12 lg:h-16 lg:w-16 mb-4"
          />

          <div className="flex flex-row items-center mb-2">
            <div className="h-1 w-8 rounded-md bg-gradient-to-tr from-orange-400 to-yellow-300 mr-2" />
            <h3 className="font-bold text-lg text-gray-800">Package</h3>
          </div>
          <p className="font-semibold text-xs lg:text-sm text-gray-600">
            Audio Producer at Country Records
          </p>
        </motion.div>

        {/* Image Section (Large Screens Only) */}
        <div className="hidden lg:flex w-1/3 justify-center items-center">
          <div className="relative h-80 w-full">
            <div className="absolute inset-0 bg-gradient-to-l from-cyan-700 to-cyan-300 rounded-xl -z-10 transform -translate-x-2 -translate-y-2" />
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="h-full w-full bg-white rounded-xl overflow-hidden shadow-lg"
            >
              <img
                src={pkg} 
                alt="Testimonial Photo"
                className="h-full w-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Footer Text */}
      <motion.div
        variants={textVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="flex justify-center items-center mt-16 px-5 text-center"
      >
        <h1 className="font-bold text-lg lg:text-2xl text-gray-800">
          EdgeReach Tech is your path to digitalizing your business.
        </h1>
      </motion.div>
    </div>
  );
};

export default Testimony;