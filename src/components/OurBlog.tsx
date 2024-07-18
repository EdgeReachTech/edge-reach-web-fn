import React from "react";
import image1 from "../assets/image 1.jpg";
import image2 from "../assets/image 2.jpg";
import image3 from "../assets/image 3.jpg";

const OurBlog: React.FC = () => {
  return (
    <div className="relative min-h-screen">
      <div className="flex flex-row p-10 justify-between">
        <div className="">
          <h3 className="font-bold">
            <span className="mr-2 bg-gradient-to-l from-cyan-700 to-cyan-400 p-1">
              OUR
            </span>
            BLOG
          </h3>
          <h1 className="mt-10 text-2xl font-bold">
            Unleashing Innovation,
            <br /> One Project at a Time
          </h1>
          <div className="h-1 w-24 mt-10 bg-gray-500" />
          <p className="mt-14">
            Welcome to the EdgeReach Tech Blog! Here, we bridge the <br />
            gap between cutting-edge technology and real-world <br />
            business solutions. We're passionate about helping <br />
            businesses like yours thrive in today's digital landscape.
          </p>

          <div
            className=" mt-5 h-10 w-36 bg-gradient-to-r from-orange-600 to-yellow-400 rounded-3xl 
                flex justify-center items-center cursor-pointer hover:bg-gradient-to-l"
          >
            <h5 className="font-bold text-[12px]">VIEW ALL BLOGS</h5>
          </div>
        </div>
        <div className="flex-col grid gap-20">
          <div className="bg-white h-72 w-[450px] rounded-xl overflow-hidden mr-8">
            <img
              src={image1}
              alt="Image 1"
              className="h-full w-full object-cover"
            />
          </div>
          <div className=" absolute h-20 w-[450px] flex flex-col -mx-[50px] mt-[250px] bg-gradient-to-l from-cyan-700 to-cyan-300 rounded-xl justify-center items-center">
            <h3 className="font-bold text-gray-500 text-center">
              June 20, 2024 . Business
            </h3>
            <div className="flex flex-row mr-9">
              <div className="h-1 w-7 rounded-md bg-gradient-to-tr from-orange-400 to-yellow-300 mr-2 mt-3" />
              <p className="font-bold">Working Together as team</p>
            </div>
          </div>
          <div className="bg-white h-72 w-[450px] absolute -mx-[980px] mt-[430px] rounded-xl overflow-hidden">
            <img
              src={image2}
              alt="Image 2"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute h-20 w-[450px] flex flex-col -mx-[1030px] mt-[670px] bg-gradient-to-l from-cyan-700 to-cyan-300 rounded-xl justify-center items-center">
            <h3 className="font-bold text-gray-500 text-center">
              June 20, 2024 . Business
            </h3>
            <div className="flex flex-row mr-14">
              <div className="h-1 w-7 rounded-md bg-gradient-to-tr from-orange-400 to-yellow-300 mr-2 mt-3" />
              <p className="font-bold">
                Collaboration is key of <br />
                success
              </p>
            </div>
          </div>
          <div className="bg-white h-72 w-[450px] absolute -mx-[50px] mt-[430px] rounded-xl overflow-hidden">
            <img
              src={image3}
              alt="Image 3"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute h-20 w-[450px] flex flex-col -mx-[100px] mt-[670px] bg-gradient-to-l from-cyan-700 to-cyan-300 rounded-xl justify-center items-center">
            <h3 className="font-bold text-gray-500 text-center">
              June 20, 2024 . Business
            </h3>
            <div className="flex flex-row mr-14">
              <div className="h-1 w-7 rounded-md bg-gradient-to-tr from-orange-400 to-yellow-300 mr-2 mt-3" />
              <p className="font-bold">
                Collaboration is key of <br />
                success
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurBlog;
