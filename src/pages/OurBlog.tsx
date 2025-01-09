import React from "react";
import image1 from "../assets/image1.webp";
import image2 from "../assets/image2.webp";
import image3 from "../assets/image3.webp";
import { FaPinterestP } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { CiInstagram } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const OurBlog: React.FC = () => {
  const navigate = useNavigate();
  const cards = [
    {
      id: 1,
      image: image1,
      date: "January 10, 2025",
      descr:
        "From Classroom to Boardroom: How Edgereach Tech Is Solving Real-Life Challenges Through Innovation",
    },
    {
      id: 2,
      image: image2,
      date: "January 10, 2025",
      descr:
        "The Power of Creativity in IT Solutions: Why It Matters for Modern Businesses",
    },
    {
      id: 3,
      image: image3,
      date: "January 10, 2025",
      descr:
        "The Evolution of Edgereach Tech: Turning University Projects Into Real-Life Impact",
    },
    {
      id: 4,
      image: image2,
      date: "January 10, 2025",
      descr:
        "The Importance of Localized IT Solutions: Solving Problems That Matter to Your Community",
    },
    {
      id: 5,
      image: image1,
      date: "January 10, 2025",
      descr:
        "A Beginner’s Guide to AI Integration for Small and Medium-Sized Enterprises",
    },
    {
      id: 6,
      image: image3,
      date: "January 10, 2025",
      descr:
        "Breaking the Mold: How to Make Your IT System Creative and Functional",
    },
    {
      id: 7,
      image: image3,
      date: "January 10, 2025",
      descr:
        "10 Ways Technology Can Transform Local Industries and Boost Economic Growth",
    },
    {
      id: 8,
      image: image3,
      date: "January 10, 2025",
      descr:
        "The Role of Students in Driving Technological Innovation in Developing Countries",
    },
  ];

  return (
    <div className="relative bg-[#C0C0C0] w-full min-h-screen p-4 md:p-10 lg:p-16">
      <div className="font-bold font-loboto text-[15px] md:text-[20px] lg:text-[20px]">
        <h2>
          <span className="bg-gradient-to-t from-[#00FFFF] to-[#008080] p-1 rounded-md">
            UP
          </span>
          DATES PAGES
        </h2>
      </div>

      <div className="flex flex-col justify-center items-center mt-10 md:mt-20">
        <h2 className="font-bold font-loboto text-[20px] md:text-[28px]">
          Read The Blog
        </h2>
        <p className="max-w-[600px] leading-relaxed text-center font-loboto mt-3">
          Welcome to the EdgeReach Tech Blog! Here, we bridge the gap between
          cutting-edge technology and real-world business solutions. We're
          passionate about helping businesses like yours thrive in today's
          digital landscape.
        </p>
      </div>

      <div className="flex flex-col gap-y-12 items-center justify-center md:ml-10 md:grid lg:grid md:grid-cols-2 lg:grid-cols-4 md:gap-x-1 lg:gap-x-1 md:gap-y-12 lg:gap-y-16 md:max-w-[1000px] lg:max-w-[1400px] mt-10 lg:mt-20 lg:ml-16">
        {cards.map((card) => (
          <div
            key={card.id}
            className="bg-white w-[330px] h-[370px] rounded-lg overflow-hidden ease-in-out transition-transform duration-300 hover:scale-105"
          >
            <img
              src={card.image}
              alt={card.descr}
              className="w-full h-48 object-cover hover:opacity-60"
            />
            <div className="p-4 flex flex-col h-[calc(100%-192px)] justify-between">
              <div>
                <p className="text-sm font-loboto text-gray-500">{card.date}</p>
                <p className="mt-2 text-[13px] font-bold font-loboto text-gray-800">
                  {card.descr}
                </p>
              </div>
              <div
                className="flex flex-row items-center gap-1 cursor-pointer hover:underline"
                onClick={() => navigate("/blogDetails")}
              >
                <p className="text-sm text-blue-500">Read Full Post</p>
                <FaArrowRight className="text-blue-500 h-[15px] w-[15px]" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col  justify-center items-center ml-  md:w-[710px] lg:ml-[400px] p-2 mt-10 w-80 bg-gradient-to-t from-[#FFA500] to-[#FFE600] rounded-lg shadow-md">
        <h2 className="mb-1 text-center">Follow Us</h2>

        <div className="flex flex-row gap-2 justify-center items-center">
          <FaPinterestP className="hover:text-white" />
          <IoLogoGithub className="hover:text-white" />
          <TiSocialLinkedinCircular className="hover:text-white" />
          <CiInstagram className="hover:text-white" />
          <FaXTwitter className="hover:text-white" />
          <FaFacebookF className="hover:text-white" />
        </div>
      </div>
    </div>
  );
};

export default OurBlog;
