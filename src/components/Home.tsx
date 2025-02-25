import React from "react";
import AuthButton from "./authButton";
import { motion } from "framer-motion";

const Home: React.FC = () => {
  // Animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const buttonVariants = {
    hover: { scale: 1.05, transition: { duration: 0.2 } },
    tap: { scale: 0.95 },
  };

  return (
    <div className="relative min-h-screen bg-cover bg-center overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative flex flex-col items-center justify-center min-h-screen px-4 md:px-8 text-center text-white">
        {/* Heading */}
        <motion.div
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-2 mt-10 md:mt-0"
        >
          <h5 className="px-3 py-1 text-lg md:text-2xl lg:text-4xl font-extrabold bg-white text-black rounded-l-md shadow-md">
            BEST
          </h5>
          <h5 className="px-1 py-1 text-lg md:text-2xl lg:text-4xl font-extrabold text-white shadow-md">
            IT COMPANY
          </h5>
        </motion.div>

        {/* Description & Mission */}
        <motion.div
          variants={textVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
          className="flex flex-col items-center mt-6 md:mt-8"
        >
          <p className="w-full md:w-3/4 lg:w-1/2 text-sm md:text-base lg:text-lg text-gray-300 mb-4">
            <b>EdgeReach Tech</b> connects top-tier developers to deliver custom
            software tailored to your business needs.
          </p>
          <div className="w-20 md:w-24 border-b-4 border-gray-300 mb-6"></div>

          <h4 className="text-base md:text-xl lg:text-3xl font-bold mt-4 md:mt-6">
            Our Mission
          </h4>
          <p className="w-full md:w-3/4 lg:w-1/2 text-sm md:text-base lg:text-lg text-gray-300 mt-2 mb-6">
            <b>Our mission at EdgeReach Tech</b> is to solve real-world tech
            challenges with innovative, optimal solutions.
          </p>

          {/* View More Button */}
          <motion.button
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            className="w-32 md:w-36 text-sm md:text-base text-white py-2 px-4 rounded-full bg-gradient-to-r from-black to-slate-800 hover:from-slate-800 hover:to-black shadow-lg transition-all duration-300"
          >
            View More
          </motion.button>
        </motion.div>

        {/* Auth Button */}
        <motion.div
          variants={textVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.4 }}
          className="mt-6 md:mt-8"
        >
          <AuthButton />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;