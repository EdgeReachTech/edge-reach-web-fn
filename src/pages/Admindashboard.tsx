import React from 'react';
import WelcPanelBoardmain from './WelcPanelBoardmain';
import MainSidebar from './MainSidebar';

const data = [
  { id: '11111', names: 'Today', subject: 'Today', message: 'Today', email: 'Today', location: 'Today', date: 'Today' },
  { id: '11111', names: 'Today', subject: 'Today', message: 'Today', email: 'Today', location: 'Today', date: 'Today' },
  { id: '11111', names: 'Today', subject: 'Today', message: 'Today', email: 'Today', location: 'Today', date: 'Today' },
  { id: '11111', names: 'Today', subject: 'Today', message: 'Today', email: 'Today', location: 'Today', date: 'Today' },
  { id: '11111', names: 'Today', subject: 'Today', message: 'Today', email: 'Today', location: 'Today', date: 'Today' },
];

const Admindashboard: React.FC = () => {
  return (
    <div className="bg-[#C0C0C0] flex flex-col md:flex-row min-h-screen w-screen">
      {/* Sidebar */}
      <MainSidebar />

      {/* Main content */}
      <div className="w-full md:w-3/4 flex flex-col items-center  ">
        <WelcPanelBoardmain />
        
        {/* Table and Sort button */}
        <div className="p-4 md:p-8 bg-gray-100   rounded-lg w-full mt-4  ">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
                  <th className="py-2 px-4">ID</th>
                  <th className="py-2 px-4">Names</th>
                  <th className="py-2 px-4">Subject</th>
                  <th className="py-2 px-4">Message</th>
                  <th className="py-2 px-4">Email</th>
                  <th className="py-2 px-4">Location</th>
                  <th className="py-2 px-4">Date</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr
                    key={index}
                    className={`hover:bg-cyan-500 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-200'}`}
                  >
                    <td className="py-2 px-4">{item.id}</td>
                    <td className="py-2 px-4">{item.names}</td>
                    <td className="py-2 px-4">{item.subject}</td>
                    <td className="py-2 px-4">{item.message}</td>
                    <td className="py-2 px-4">{item.email}</td>
                    <td className="py-2 px-4">{item.location}</td>
                    <td className="py-2 px-4">{item.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Sort Button */}
          <div className="flex justify-center mt-4">
            <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white py-2 px-4 rounded-lg shadow-lg flex items-center">
              <span className="material-icons">filter_list</span> Sort
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admindashboard;
