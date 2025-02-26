import React from 'react';
import { IoMdCall } from 'react-icons/io';
import { MdEmail, MdOutlinePermIdentity } from 'react-icons/md';
import {
  FaSitemap,
  FaQuestionCircle,
  FaArrowRight,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  FaPinterestSquare,
  FaFacebook,
  FaRegArrowAltCircleUp,
} from 'react-icons/fa';
import { motion } from 'framer-motion'; // For animations

const Footer: React.FC = () => {
  // Animation variants
  const buttonVariants = {
    hover: { scale: 1.1, transition: { duration: 0.2 } },
    tap: { scale: 0.95 },
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-full">
      <footer className="relative flex flex-col justify-center items-center min-h-full text-white">
        {/* Background Layers */}
        <div className="absolute inset-0 flex flex-col">
          <div className="h-1/3 bg-gray-300"></div>
          <div className="h-2/3 bg-gradient-to-r from-gray-950 to-gray-700"></div>
        </div>

        {/* Main Content */}
        <div className="z-10 w-full max-w-screen-xl px-4 sm:px-6 lg:px-8">
          {/* Top Section */}
          <div className="rounded-lg bg-gradient-to-r from-orange-500 to-yellow-400 m-3 p-6 shadow-lg">
            <div className="flex flex-col lg:flex-row lg:justify-between gap-8 lg:gap-12">
              {/* Leave Message */}
              <div className="flex-1">
                <h4 className="text-xl font-bold mb-4">Leave a Message</h4>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="mx-3 text-sm font-medium">Name:</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full p-2 bg-transparent border border-white rounded-lg outline-none focus:ring-2 focus:ring-white"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mx-3 text-sm font-medium">Email:</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full p-2 bg-transparent border border-white rounded-lg outline-none focus:ring-2 focus:ring-white"
                    />
                  </div>
                  <div>
                    <textarea
                      id="message"
                      placeholder="Message"
                      className="w-full p-2 bg-transparent border border-white rounded-lg outline-none focus:ring-2 focus:ring-white h-24 resize-none mx-3"
                    ></textarea>
                  </div>
                  <motion.button
                    type="submit"
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                    className="mx-3 px-4 py-2 bg-white text-orange-500 font-semibold rounded-lg hover:bg-gray-100"
                  >
                    Submit
                  </motion.button>
                </form>
              </div>

              {/* Contact Us */}
              <div className="flex-1">
                <h4 className="text-xl font-bold mb-4 lg:mb-12">Contact Us</h4>
                <div className="space-y-3">
                  <div className="flex items-center"><IoMdCall size={24} className="mr-2" /> +250 788 764 885</div>
                  <div className="flex items-center"><IoMdCall size={24} className="mr-2" /> +250 733 77 0003</div>
                  <div className="flex items-center"><MdEmail size={24} className="mr-2" /> edgereachtech@gmail.com</div>
                  <div className="flex items-center"><MdOutlinePermIdentity size={24} className="mr-2" /> Kigali, Rwanda</div>
                </div>
              </div>

              {/* Support Center */}
              <div className="flex-1">
                <h4 className="text-xl font-bold mb-4 lg:mb-16">Support Center</h4>
                <div className="space-y-3">
                  <div className="flex items-center"><FaQuestionCircle size={24} className="mr-2" /> FAQs</div>
                  <div className="flex items-center"><FaSitemap size={24} className="mr-2" /> Site Map</div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col lg:flex-row gap-8 mt-8">
            {/* Left Side */}
            <div className="flex-1">
              <p className="text-2xl font-bold mb-4">Have an Idea or Project? Let’s Talk</p>
              <div className="flex items-center gap-4 mb-4">
                <h3 className="text-gray-400 font-semibold">Contact Us</h3>
                <FaArrowRight size={24} className="text-orange-400 hidden sm:block" />
              </div>
              <h3 className="text-violet-400 font-semibold mb-2">Social Media</h3>
              <div className="bg-gradient-to-r from-orange-500 to-yellow-400 rounded-lg p-3 flex justify-center items-center gap-4 w-full sm:w-80">
                <span className="font-semibold">Follow Us</span>
                <FaPinterestSquare size={20} className="cursor-pointer hover:text-white" />
                <FaGithub size={20} className="cursor-pointer hover:text-white" />
                <FaLinkedinIn size={20} className="cursor-pointer hover:text-white" />
                <FaInstagram size={20} className="cursor-pointer hover:text-white" />
                <FaTwitter size={20} className="cursor-pointer hover:text-white" />
                <FaFacebook size={20} className="cursor-pointer hover:text-white" />
              </div>
            </div>

            {/* Right Side */}
            <div className="flex-1">
              <h3 className="text-gray-400 font-semibold mb-2">Send me tips, trends, updates & offers</h3>
              <div className="flex w-full sm:w-80 bg-gradient-to-r from-cyan-300 to-cyan-600 rounded-lg overflow-hidden">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 p-2 bg-transparent text-white placeholder-gray-200 outline-none"
                />
                <motion.button
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className="px-4 py-2 bg-white text-cyan-600 font-semibold hover:bg-gray-100"
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </div>

          {/* Links Section */}
          <div className="flex flex-col md:flex-row justify-center gap-6 mt-8 text-center md:text-left">
            <h3 className="font-semibold">+250 788 674 885</h3>
            <h3 className="font-semibold">TERMS AND SERVICES</h3>
            <h3 className="font-semibold">COPYRIGHT</h3>
            <h3 className="font-semibold">KIGALI, RWANDA</h3>
            <h3 className="font-semibold">FAQ</h3>
          </div>

          {/* Bottom Text */}
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 mt-6 px-4 text-center">
            <p className="mb-4 md:mb-0">
              Created And Managed <span className="block md:inline">By EdgeReach Tech</span>
            </p>
            <p className="hidden md:block">EdgeReach Tech All Rights Reserved 2024</p>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.2 }}
          className="fixed bottom-5 right-5 z-20"
        >
          <FaRegArrowAltCircleUp
            size={40}
            className="text-cyan-500 cursor-pointer"
            onClick={scrollToTop}
          />
        </motion.div>
      </footer>
    </div>
  );
};

export default Footer;