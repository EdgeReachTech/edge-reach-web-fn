import {
  faBars,
  faClipboardList, faComments, faEnvelope, faEnvelopeOpen,
  faNewspaper, faPhone, faQuestionCircle, faQuoteRight,
  faSignOutAlt, faTasks, faThLarge, faUsers, faUserTie
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from 'react';

const BoardMain = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="bg-[#C0C0C0] flex flex-col md:flex-row">
      
      <button 
        className="md:hidden fixed  max-sm:ml-[-.7em] top-4 left-4 z-50 text-white bg-gray-800 p-2 rounded"
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
            <span>Dashboard</span>
          </li>
          <li className="flex items-center space-x-3 cursor-pointer hover:bg-gray-700 rounded-md p-2">
            <FontAwesomeIcon icon={faNewspaper} />
            <span>Blog</span>
          </li>
          <li className="flex items-center space-x-3 cursor-pointer hover:bg-gray-700 rounded-md p-2">
            <FontAwesomeIcon icon={faComments} />
            <span>Comments</span>
          </li>
          <li className="flex items-center space-x-3 cursor-pointer hover:bg-gray-700 rounded-md p-2">
            <FontAwesomeIcon icon={faTasks} />
            <span>Project</span>
          </li>
          <li className="flex items-center space-x-3 cursor-pointer hover:bg-gray-700 rounded-md p-2">
            <FontAwesomeIcon icon={faQuoteRight} />
            <span>Testimonial</span>
          </li>
          <li className="flex items-center space-x-3 cursor-pointer hover:bg-gray-700 rounded-md p-2">
            <FontAwesomeIcon icon={faEnvelope} />
            <span>Messaging</span>
          </li>
          <li className="flex items-center space-x-3 cursor-pointer hover:bg-gray-700 rounded-md p-2">
            <FontAwesomeIcon icon={faUsers} />
            <span>Team Management</span>
          </li>
          <li className="flex items-center space-x-3 cursor-pointer hover:bg-gray-700 rounded-md p-2">
            <FontAwesomeIcon icon={faUserTie} />
            <span>Employee</span>
          </li>
          <li className="flex items-center space-x-3 cursor-pointer hover:bg-gray-700 rounded-md p-2">
            <FontAwesomeIcon icon={faClipboardList} />
            <span>Task Management</span>
          </li>
          <li className="flex items-center space-x-3 cursor-pointer hover:bg-gray-700 rounded-md p-2">
            <FontAwesomeIcon icon={faEnvelopeOpen} />
            <span>Subscribers</span>
          </li>
          <li className="flex items-center space-x-3 cursor-pointer hover:bg-gray-700 rounded-md p-2">
            <FontAwesomeIcon icon={faPhone} />
            <span>Contact</span>
          </li>
        </ul>

        {/* Footer Items */}
        <ul className="space-y-4 bg-gray-800 px-4 pb-4">
          <li className="flex items-center space-x-3 cursor-pointer hover:bg-gray-700 rounded-md p-2">
            <FontAwesomeIcon icon={faQuestionCircle} />
            <span>Help</span>
          </li>
          <li className="flex items-center space-x-3 cursor-pointer hover:bg-gray-700 rounded-md p-2">
            <FontAwesomeIcon icon={faSignOutAlt} />
            <span>Log Out</span>
          </li>
        </ul>
      </div>

      {/* Welcome Bar */}
      <div className="backGround h-[5em] w-full flex justify-between md:relative fixed  items-center px-4 md:px-8">
        <div className="ml-12 max-sm:text-[10px]  max-md:text-[10px] ">
          <h1 className="mb-[-7px] max-sm:ml-[-15px] text-white font-bold">Welcome Back, ROD JAZZY</h1>
          <p className="text-gray-300 max-sm:ml-[-15px]">Edgereach Tech Admin Panel</p>
        </div>
        <div className="flex items-center max-sm:text-[10px] max-sm:gap-2 max-sm:mr-[-1.3em] max-sm:ml-[-.5em] max-md:text-[10px] gap-4">
          <div>
            <h1 className="mb-[-7px] text-white font-bold">ROD JAZZY</h1>
            <span className="text-gray-300">Project Manager</span>
          </div>
          <div className="w-10 h-9">
            <img className="rounded-full" src="/JAZZY.jpg" alt="ROD JAZZY PICTURE" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardMain;