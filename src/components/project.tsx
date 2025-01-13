


import React from 'react'
import bigpc from '../assets/bigpc.png';
import portfolio1 from '../assets/portfolio1.png';
import portfolio2 from '../assets/portfolio2.png';
import portfolio3 from '../assets/portfolio3.png';
import portfolio4 from '../assets/portfolio4.png';
import portfolio5 from '../assets/portfolio5.png';
import portfolio6 from '../assets/portfolio6.png';
import { FaPinterestP } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { CiInstagram } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";

import Navbar from './Navbar';

const Project: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="bg-[#C7C5C5] min-h-full pt-20 md:pt-40">
        <div className="container mx-auto px-4">
          <div className="mb-6 lg:mb-0 lg:w-1/2">
            <h2 className="text-sm text-black text-center lg:text-left" style={{ fontFamily: 'Inter, sans-serif', fontWeight: '700', lineHeight: '10px', letterSpacing: '5px' }}>
              <span style={{
                background: "linear-gradient(90deg, #00FFFF 0%, #008080 100%)",
                display: "inline-block",
                padding: "5px",
              }}
              className="rounded-lg font-loboto"> PRO</span>JECT PAGE
            </h2>
            <h2 className="text-sm text-gray-900 text-center mt-4 lg:mt-0 lg:ml-[490px]"
              style={{ fontFamily: 'Inter', fontWeight: '700', lineHeight: '10px', letterSpacing: '2px' }}>
              <span style={{ background: "linear-gradient(88.76deg, #FFA500 1.06%, #FFE600 99.34%)", letterSpacing: '5px' }}>PORT</span><span style={{ letterSpacing: '5px' }} className="text-white">FOLIO</span>
            </h2>
            <p className="text-xl text-white mt-4 text-center lg:ml-[500px]" style={{ fontFamily: 'Inter', fontWeight: '200', letterSpacing: '2px' }}>Experienced in Gallery</p>
          </div>

          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between p-4 lg:p-8">
            <div className="mb-6 lg:mb-0 lg:w-[664px] lg:h-[1099px] flex justify-center lg:justify-start">
              <img
                src={bigpc}
                alt="Project Preview"
                className="rounded-lg shadow-lg max-w-full h-auto lg:max-w-[90%] lg:max-h-[160%]" />
            </div>

            <div className="w-full lg:w-[664px] lg:h-[1099px] grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[portfolio1, portfolio2, portfolio3, portfolio4, portfolio5, portfolio6].map((image, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  <img src={image} alt={`Portfolio ${index + 1}`} className="w-full h-auto" />
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-gray-800">
                      {index === 0 ? 'Corporate Website' : index === 1 ? 'Web App Development' : 'Branding, Coding'}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center items-center mt-16 pb-11">
            <div
              style={{
                background: "linear-gradient(88.76deg, #FFA500 1.06%, #FFE600 99.34%)",
                borderRadius: "8px",
                fontFamily: "'Josefin Sans', sans-serif",
              }}
              className="px-4 py-2 text-center font-bold"
            >
              Follow us
              <div className="flex flex-row gap-2 mt-2 justify-center">
                <FaPinterestP />
                <IoLogoGithub />
                <TiSocialLinkedinCircular />
                <CiInstagram />
                <FaXTwitter />
                <FaFacebookF />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;

