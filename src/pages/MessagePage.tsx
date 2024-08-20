import React, { useEffect } from "react";
import { FaBars, FaBell, FaHome, FaSearch } from "react-icons/fa";
import { FaEllipsisVertical, FaGear, FaMessage } from "react-icons/fa6";
import { useAuth } from "../context/AuthContext";

const MessagePage: React.FC = () => {
  const {isLoading, user, getUser } = useAuth();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      getUser(token as string);
    }
  });
  return (
    <div className="bg-[#018484] w-screen h-screen p-10 ">
      
        <div className="flex flex-row shadow-2xl w-full h-full">
          <div className="flex flex-col  justify-between h-full w-1/12  py-10 p-5 my-auto">
            <div className="flex flex-col gap-10 ">
              <FaBars size={40} className="mx-auto" />
              <img
                src="https://www.svgrepo.com/show/384674/account-avatar-profile-user-11.svg"
                alt="profile"
                className=" rounded-full h-14 w-14 mx-auto"
              />
              <FaHome size={40} className="mx-auto" />
              <FaMessage size={40} className="mx-auto" />
              <FaBell size={40} className="mx-auto" />
              <FaEllipsisVertical size={40} className="mx-auto" />
            </div>
            <div className="">
              <FaGear size={30} className="mx-auto" />
            </div>
          </div>
          <div className="bg-green-200 h-full w-3/12">
            <div className="flex flex-col items-start w-full p-10 gap-3 ">
              {/* @ts-ignore */}
              <h4>{user?.firstName}</h4>
              <div className="flex flex-row bg-[#0d3c3c] rounded-sm  w-full p-1  ">
                <FaSearch size={20} color="white " className="" />
                <input
                  type="search"
                  placeholder="search"
                  className="bg-transparent w-full outline-none ml-3 text-white "
                />
              </div>
            </div>
          </div>
          <div className=" w-8/12 bg-gray-50"></div>
        </div>
      
    </div>
  );
};

export default MessagePage;
