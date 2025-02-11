import React, { useEffect, useState } from "react";
// import image1 from "../assets/image1.webp";
// import image2 from "../assets/image2.webp";
// import image3 from "../assets/image3.webp";
import { FaPinterestP } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { CiInstagram } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { LuLoader } from "react-icons/lu";
import Navbar from "../components/Navbar";
import { CardType } from "../types/types";
import { formatDate } from "../utils";
import { Link } from "react-router-dom";
import { API_BASE_URL } from "../config/BASE_API";

const OurBlog: React.FC = () => {
  const [cards, setCards] = useState<CardType[]>();
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    const getAllBlogs = async () => {
      setFetching(true);
      try {
        const response = await fetch(`${API_BASE_URL}/blog/blogs`, {
          method: "GET",
        });

        const contentType = response.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
          throw new Error("Received non-JSON response");
        }

        if (!response.ok) throw new Error("Network response wasn't ok");

        const data = await response.json();
        setCards(data);
      } catch (error) {
        console.log("Error fetching blogs", error);
      } finally {
        setFetching(false);
      }
    };
    getAllBlogs();
  }, []);

  if (fetching)
    return <LuLoader className="mt-10 w-4 h-4 animate-spin mx-auto" />;

  return (
    <>
      <Navbar />
      <div className="relative bg-[#C0C0C0] w-full min-h-screen p-2 md:p-10 lg:p-16">
        <div className="pt-20 font-bold font-loboto text-[20px]">
          <h2>
            <span className="bg-gradient-to-t from-[#00FFFF] to-[#008080] p-1 rounded-md">
              UP
            </span>
            DATES PAGES
          </h2>
        </div>

        <div className="flex flex-col justify-center items-center mt-10 md:mt-20">
          <h2 className="font-bold font-loboto text-[28px]">Read The Blog</h2>
          <p className="max-w-[600px] leading-relaxed text-center font-loboto mt-3">
            Welcome to the EdgeReach Tech Blog! Here, we bridge the gap between
            cutting-edge technology and real-world business solutions. We're
            passionate about helping businesses like yours thrive in today's
            digital landscape.
          </p>
        </div>

        {!cards?.length ? (
          <div className="flex items-center justify-center py-16 text-red-700 underline underline-offset-8">
            <p>No blog posts found. Please check back later.</p>
          </div>
        ) : (
          <div className="flex flex-col mt-8 gap-y-14 md:grid md:grid-cols-2 lg:grid lg:grid-cols-4 md:gap-x-1 lg:gap-x-1 md:gap-y-10 lg:gap-y-16 lg:max-w-[1400px] md:mt-10 lg:mt-20 md:ml-10 lg:ml-16">
            {cards.map((card: CardType) => (
              <div
                key={card._id}
                className="bg-white w-full md:w-[330px] h-[370px] rounded-lg overflow-hidden ease-in-out transition-transform duration-300 hover:scale-105"
              >
                <img
                  src={card.image}
                  alt={card._id}
                  className="w-full h-48 object-cover hover:opacity-60"
                />
                <div className="p-4 flex flex-col h-[calc(100%-192px)] justify-between">
                  <div className="flex flex-row gap-2">
                    <div className="h-[2px] w-[25px] mt-14 bg-gradient-to-r from-[#FFA500] to-[#FFE600] rounded-md" />
                    <div className="flex flex-col max-w-[250px] p-2">
                      <p className="text-sm font-loboto text-gray-500">
                        {formatDate(card.createdAt)}
                      </p>
                      <p className="mt-2 text-[13px] font-bold font-loboto text-gray-800 line-clamp-4">
                        {card.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row items-center gap-1 ml-10">
                    <Link to={`/blog/${card._id}`}>
                      <p className="text-sm text-blue-500 cursor-pointer hover:underline">
                        Read Full Post
                      </p>
                    </Link>
                    <FaArrowRight className="w-[13px] h-[13px] text-blue-500 " />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="flex flex-col  lg:justify-center lg:items-center lg:ml-[600px] mr-4 p-2 mt-10 lg:w-96 bg-gradient-to-t from-[#FFA500] to-[#FFE600] rounded-lg shadow-md">
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
    </>
  );
};

export default OurBlog;
