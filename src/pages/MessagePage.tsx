import React, { useEffect } from "react";
import { FaBars, FaBell, FaHome, FaSearch } from "react-icons/fa";
import { FaEllipsisVertical, FaGear, FaMessage } from "react-icons/fa6";
import { useAuth } from "../context/AuthContext";
import { ClipLoader } from "react-spinners";

const MessagePage: React.FC = () => {
  const {isLoading, user, getUser, getAllUsers,users } = useAuth();
  useEffect(() => {
    const token = localStorage.getItem("token");
    
      getUser(token as string);
      getAllUsers(token as string)
    
   
  },[]);
  return (
    <>
    {isLoading?(<div className="items-center justify-center flex h-screen">< ClipLoader /><strong className="text-xl ">Loading</strong></div>):(<div className="bg-[#018484] w-screen h-screen p-5 md:p-10">
      <div className="flex flex-col md:flex-row shadow-2xl w-full h-full">
        <div className="flex flex-row md:flex-col justify-between h-16 md:h-full w-full md:w-1/12 py-5 md:py-10 p-5">
          <div className="flex flex-row md:flex-col gap-5 md:gap-10">
            <FaBars size={30} className="lg:block hidden mx-auto" />
            <img
              src="https://www.svgrepo.com/show/384674/account-avatar-profile-user-11.svg"
              alt="profile"
              className="rounded-full h-10 w-10 md:h-14 md:w-14 mx-auto"
            />
            <FaHome size={30} className="mx-auto" />
            <FaMessage size={30} className="mx-auto" />
            <FaBell size={30} className="mx-auto" />
            <FaEllipsisVertical size={30} className="mx-auto" />
          </div>
          <div>
            <FaGear size={25} className="mx-auto" />
          </div>
        </div>
        <div className="bg-green-200 h-full w-full  md:w-3/12 p-5 md:p-10">
          <div className="flex flex-col items-start w-full gap-3">
            <h4 className="text-center w-full lg:text-left">Chats</h4>
            <div className="flex flex-row bg-[#0d3c3c] rounded-sm w-full p-1">
              <FaSearch size={20} color="white" />
              <input
                type="search"
                placeholder="search"
                className="bg-transparent w-full outline-none ml-3 text-white"
              />
            </div>
          </div>
          <div className="">
            {users.map((user) => (
              <div className="flex flex-row  mt-3">
                <img
                  src="https://www.svgrepo.com/show/384674/account-avatar-profile-user-11.svg"
                  alt=""
                  className="rounded-full h-10 w-10 md:h-14 md:w-14 mx-auto"
                />
                <div className="w-4/5 flex  flex-col ">
                  <span className="flex flex-row justify-between">
                    <strong>{user.firstName}</strong>
                    <p>time</p>
                  </span>
                  <span className="flex flex-row justify-between">
                    <p>message</p>
                    <span className="bg-white text-center rounded-full p-1">
                      <p>20</p>
                    </span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="hidden md:block w-full md:w-8/12 bg-gray-50 p-5"></div>
      </div>
    </div>
  )}
    </>
  )
};

export default MessagePage;
