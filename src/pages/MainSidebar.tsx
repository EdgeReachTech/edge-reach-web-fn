import {
  faBars,
  faClipboardList, faComments, faEnvelope, faEnvelopeOpen,
  faNewspaper, faPhone, faQuestionCircle, faQuoteRight,
  faSignOutAlt, faTasks, faThLarge, faUsers, faUserTie
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from 'react';
import { useAuth } from "../context/AuthContext";
const MainSidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
const {Logout} = useAuth()
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className=" " >
    <button 
      className="md:hidden fixed max-sm:ml-[-.7em] top-4 left-4 z-50 text-white bg-gray-800 p-2 rounded"
      onClick={toggleSidebar}
    >
      <FontAwesomeIcon icon={faBars} size="lg" />
    </button>

   
    <div className={`w-64 h-screen bg-gray-800 text-white flex flex-col   transition-transform duration-300 ease-in-out z-40
      ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}>
      
      <div className="bg-gray-800 gap-3 mt-[-3.5em] cursor-pointer font-bold  flex justify-center items-center pt-4">
        <div className="w-[80%] ml-[-3em]">
          <img src="/Logo.png" alt="company logo" />
        </div>
        <div className="ml-[-3.5em]">
          <h4 className="font-loboto text-[#8cf3f3]">EDGEREACH</h4>
          <span className="text-gray-400">ADMIN PANEL</span>
        </div>
      </div>

      {/* Navigation */}
      <ul className="flex-1  space-y-4 mt-[-3em] bg-gray-800 px-4">
        <li className="flex items-center backGround space-x-3 cursor-pointer hover:bg-gray-700 rounded-md p-2">
          <FontAwesomeIcon icon={faThLarge} />
         <a href="">Dashboard</a>
        </li>
        <li className="flex items-center space-x-3 cursor-pointer hover:bg-gray-700 rounded-md p-2">
          <FontAwesomeIcon icon={faNewspaper} />
          <a href="">Blog</a>
        </li>
        <li className="flex items-center space-x-3 cursor-pointer hover:bg-gray-700 rounded-md p-2">
          <FontAwesomeIcon icon={faComments} />
         <a href="">Comments</a>
        </li>
        <li className="flex items-center space-x-3 cursor-pointer hover:bg-gray-700 rounded-md p-2">
          <FontAwesomeIcon icon={faTasks} />
         <a href="">Project</a>
        </li>
        <li className="flex items-center space-x-3 cursor-pointer hover:bg-gray-700 rounded-md p-2">
          <FontAwesomeIcon icon={faQuoteRight} />
          <a href="">Testimonial</a>
        </li>
        <li className="flex items-center space-x-3 cursor-pointer hover:bg-gray-700 rounded-md p-2">
          <FontAwesomeIcon icon={faEnvelope} />
          <a href="">Messaging</a>
        </li>
        <li className="flex items-center space-x-3 cursor-pointer hover:bg-gray-700 rounded-md p-2">
          <FontAwesomeIcon icon={faUsers} />
          <a href="">Team Management</a>
        </li>
        <li className="flex items-center space-x-3 cursor-pointer hover:bg-gray-700 rounded-md p-2">
          <FontAwesomeIcon icon={faUserTie} />
          <a href="">Employee</a>
        </li>
        <li className="flex items-center space-x-3 cursor-pointer hover:bg-gray-700 rounded-md p-2">
          <FontAwesomeIcon icon={faClipboardList} />
          <a href="">Task Management</a>
        </li>
        <li className="flex items-center space-x-3 cursor-pointer hover:bg-gray-700 rounded-md p-2">
          <FontAwesomeIcon icon={faEnvelopeOpen} />
          <a href="">Subscribers</a>
        </li>
        <li className="flex items-center space-x-3 cursor-pointer hover:bg-gray-700 rounded-md p-2">
          <FontAwesomeIcon icon={faPhone} />
          <a href="">Contact</a>
        </li>
      </ul>

      
      <ul className="space-y-4 bg-gray-800 px-4 pb-4">
        <li className="flex items-center space-x-3 cursor-pointer hover:bg-gray-700 rounded-md p-2">
          <FontAwesomeIcon icon={faQuestionCircle} />
         <a href="">Help</a>
        </li>
        <li className="flex items-center space-x-3 cursor-pointer hover:bg-gray-700 rounded-md p-2">
          <FontAwesomeIcon icon={faSignOutAlt} />
         <a onClick={
          ()=>Logout()
         }>Log Out</a>
        </li>
      </ul>
    </div>

  </div>
  )
}

export default MainSidebar
