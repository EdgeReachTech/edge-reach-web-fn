import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faSearch, faXmark, faBarsStaggered } from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Animation variants
  const menuVariants = {
    hidden: { opacity: 0, x: -300 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3, ease: "easeInOut" } },
    exit: { opacity: 0, x: -300, transition: { duration: 0.3, ease: "easeInOut" } },
  };

  return (
    <div className="fixed top-0 left-0 z-50 w-full px-4 lg:px-10 bg-white shadow-md">
      <div className="flex flex-row justify-between items-center py-4">
        {/* Logo */}
        <div className="flex items-center">
          <h5 className="font-extrabold text-xl lg:text-2xl text-teal-950 hidden lg:block">
            <a href="/">EDGE-REACH TECH</a>
          </h5>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="lg:hidden"
          >
            <FontAwesomeIcon
              icon={isMenuOpen ? faXmark : faBarsStaggered}
              className="text-2xl text-gray-800 cursor-pointer p-2 rounded-full shadow-md"
              onClick={toggleMenu}
            />
          </motion.div>
        </div>

        {/* Navigation Links */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="lg:hidden absolute top-14 left-0 w-3/4 bg-white h-screen rounded-r-3xl shadow-lg flex flex-col p-4"
            >
              <a href="/" className="p-4 text-gray-800 hover:bg-gray-100 rounded-md">
                Home
              </a>
              <a href="/about" className="p-4 text-gray-800 hover:bg-gray-100 rounded-md">
                About
              </a>
              <a href="#services" className="p-4 text-gray-800 hover:bg-gray-100 rounded-md">
                Services
              </a>
              <a href="/project" className="p-4 text-gray-800 hover:bg-gray-100 rounded-md">
                Projects
              </a>
              <a href="/blogs" className="p-4 text-gray-800 hover:bg-gray-100 rounded-md">
                Blogs
              </a>
              <a href="/contact" className="p-4 text-gray-800 hover:bg-gray-100 rounded-md">
                Contact
              </a>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex flex-row items-center space-x-6">
          <a href="/" className="px-4 py-2 text-gray-800 hover:text-cyan-600 transition-colors">
            Home
          </a>
          <a href="/about" className="px-4 py-2 text-gray-800 hover:text-cyan-600 transition-colors">
            About
          </a>
          <a href="#services" className="px-4 py-2 text-gray-800 hover:text-cyan-600 transition-colors">
            Services
          </a>
          <a href="/project" className="px-4 py-2 text-gray-800 hover:text-cyan-600 transition-colors">
            Projects
          </a>
          <a href="/blogs" className="px-4 py-2 text-gray-800 hover:text-cyan-600 transition-colors">
            Blogs
          </a>
          <a href="/contact" className="px-4 py-2 text-gray-800 hover:text-cyan-600 transition-colors">
            Contact
          </a>
        </div>

        {/* Right Corner (Search + Phone) */}
        <div className="hidden lg:flex items-center space-x-4">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <FontAwesomeIcon
              icon={faSearch}
              className="p-2 bg-gradient-to-r from-cyan-600 to-cyan-300 text-white rounded-full cursor-pointer"
            />
          </motion.div>
          <div className="flex items-center bg-gradient-to-r from-cyan-500 to-cyan-300 rounded-lg px-4 py-2 shadow-md">
            <FontAwesomeIcon icon={faPhone} className="text-white mr-2" />
            <div className="flex flex-col">
              <p className="font-semibold text-white text-sm">Call us</p>
              <p className="text-white text-sm">+250 788 764 885</p>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay for Mobile Menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 lg:hidden"
          onClick={toggleMenu}
        />
      )}
    </div>
  );
};

export default Navbar;