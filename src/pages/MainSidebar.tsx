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
          className="md:hidden fixed top-4 left-4 z-50 text-white bg-gray-800 p-2 rounded"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <FontAwesomeIcon icon={faBars} size="lg" />
        </button>

        {/* Sidebar */}
        <div
          className={`w-64 md:w-auto md:relative absolute h-full bg-gray-800 text-white flex-shrink-0 flex flex-col transition-transform duration-300 ease-in-out z-40 
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
        >
          {/* Logo Section */}
          <div className="p-4 flex items-center space-x-2">
            <img src="/Logo.png" alt="company logo" className="h-8" />
            <div>
              <h4 className="text-[#8cf3f3] font-bold">EDGEREACH</h4>
              <span className="text-gray-400 text-sm">ADMIN PANEL</span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto">
            <ul className="space-y-1 px-2">
              {[
                { icon: faThLarge, text: "Dashboard" },
                { icon: faNewspaper, text: "Blog" },
                { icon: faComments, text: "Comments" },
                { icon: faTasks, text: "Project" },
                { icon: faQuoteRight, text: "Testimonial" },
                { icon: faEnvelope, text: "Messaging" },
                { icon: faUsers, text: "Team Management" },
                { icon: faUserTie, text: "Employee" },
                { icon: faClipboardList, text: "Task Management" },
                { icon: faEnvelopeOpen, text: "Subscribers" },
                { icon: faPhone, text: "Contact" },
              ].map((item) => (
                <li key={item.text}>
                  <a
                    href="#"
                    className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-700 transition-colors duration-200"
                  >
                    <FontAwesomeIcon icon={item.icon} className="w-5" />
                    <span>{item.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Footer Navigation */}
          <div className="p-4 space-y-2">
            <button className="w-full flex items-center space-x-3 p-2 rounded-md hover:bg-gray-700 transition-colors duration-200">
              <FontAwesomeIcon icon={faQuestionCircle} />
              <span>Help</span>
            </button>
            <button
              onClick={() => Logout()}
              className="w-full flex items-center space-x-3 p-2 rounded-md hover:bg-gray-700 transition-colors duration-200"
            >
              <FontAwesomeIcon icon={faSignOutAlt} />
              <span>Log Out</span>
            </button>
          </div>
        </div>

  </div>
  )
}

export default MainSidebar
