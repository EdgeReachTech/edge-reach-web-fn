import React from 'react';
import MainSidebar from './MainSidebar';
import WelcPanelBoardmain from './WelcPanelBoardmain';
import Button from '../components/Button';
import Card from '../components/Card';
import { FaEnvelope, FaTasks, FaEdit, FaPlus, FaEye} from 'react-icons/fa';
import { FaBlog, FaCommentDots, FaPaperPlane, FaPeopleGroup, FaPersonCircleCheck } from 'react-icons/fa6';
import { IoMdCheckmark } from 'react-icons/io';
import { MdPersonOutline } from 'react-icons/md';
import ProgressSection from '../components/ProgressSection';

const Adminpage: React.FC = () => {
  return (
    <div className="bg-[#C0C0C0] flex flex-col md:flex-row  ">
      <MainSidebar  />
      <div className="w-full flex flex-col items-center p-4">
        <WelcPanelBoardmain />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6 rounded-lg shadow-lg w-full ">
          {/* Left Section */}
          <div className="flex flex-col gap-4 border-2 border-gray-300 p-4 rounded-lg">
            <Card
              count={18}
              title="Total Messages"
              description={
                <div className="flex flex-row items-center justify-center gap-3">
                  <div className="flex flex-col items-center justify-center">
                    <p className="text-red-500 mx-auto text-2xl font-bold">8</p>
                    <p className="text-white flex items-center">
                      <IoMdCheckmark className="font-bold text-black" /> Read
                    </p>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <p className="text-red-500 mx-auto text-2xl font-bold">10</p>
                    <p className="text-white flex items-center">
                      <FaEnvelope className="text-black" /> Unread
                    </p>
                  </div>
                </div>
              }
              icon={<FaPaperPlane className="text-yellow-600" />}
              backgroundColor="bg-gradient-to-r from-teal-600 to-cyan-400"
            />
            {/* Other Cards */}
            <Card
              title="New Comments"
              count={18}
              icon={<FaCommentDots className="text-yellow-600" />}
              description={
                <div className="flex items-center gap-2 justify-center font-bold">
                  <FaEye className="text-black" /> View
                </div>
              }
              backgroundColor="bg-gray-200"
              textColor="text-blue-400"
            />
            <Card
              title="Total Blogs"
              count={18}
              icon={<FaBlog className="text-yellow-600" />}
              backgroundColor="bg-gradient-to-r from-teal-600 to-cyan-400"
            />
            <Card
              title="Subscribers"
              count={18}
              icon={<FaPeopleGroup className="text-blue-400" />}
              description={
                <div className="flex items-center gap-2 justify-center font-bold">
                  <FaEye className="text-black" /> View
                </div>
              }
              backgroundColor="bg-gray-200"
              textColor="text-blue-400"
            />
          </div>

          {/* Middle Section */}
          <div className='flex flex-col'>
          <div className="flex flex-col gap-4 border-2 border-gray-300 p-4 rounded-lg h-fit">
            <Card
              title="Task Overview"
              description={
                <div className='text-white'>
                  <div className="flex justify-between items-end">
                    <span>✔ Completed</span>
                    <span className="text-red-500 font-bold">18</span>
                  </div>
                  <div className="flex justify-between items-end">
                    <span>🕒 In Progress</span>
                    <span className="text-red-500 font-bold">18</span>
                  </div>
                  <div className="flex justify-between items-end">
                    <span>⏳ Pending</span>
                    <span className="text-red-500 font-bold">18</span>
                  </div>
                </div>
              }
              icon={<FaTasks className="text-yellow-500" />}
              backgroundColor="bg-gradient-to-r from-teal-600 to-cyan-400"
              iconPosition="above"
            />
            <Card
              title="Team Member"
              description={
                <div className="flex justify-center gap-3 font-bold">
                  <span>
                    <FaPersonCircleCheck className="text-black" /> Active
                  </span>
                  <span>
                    <MdPersonOutline className="text-black" /> Inactive
                  </span>
                </div>
              }
              icon={<FaPeopleGroup className="text-yellow-500" />}
              iconPosition="above"
               textColor="text-blue-400"
            />
            <Card
              title="New Contacts"
              count={18}
              backgroundColor="bg-gradient-to-r from-teal-600 to-cyan-400"
            />
          </div>
           {/* Buttons */}
           <div className="flex flex-col items-center gap-4 mt-4">
            <Button text="Edit User" icon={<FaEdit />} bgColor="bg-gradient-to-r from-teal-600 to-cyan-400" />
            <div className="flex flex-wrap justify-center gap-2 m-auto">
              <Button text="Project" icon={<FaPlus />} bgColor="bg-gradient-to-r from-teal-600 to-cyan-400" />
              <Button text="Assign Task" icon={<FaPlus />} />
              <Button text="New Blog" icon={<FaPlus />} bgColor="bg-gradient-to-r from-teal-600 to-cyan-400" />
              <Button text="New Blog" icon={<FaPlus />} />
            </div>
          </div>
          </div>
          {/* Right Section */}
          <ProgressSection />

         
        </div>
      </div>
    </div>
  );
};

export default Adminpage;
