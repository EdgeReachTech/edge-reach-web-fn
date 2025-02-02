import { useEffect, useState } from "react";
import WelcPanelBoardmain from "./WelcPanelBoardmain";
import { useAuth, user } from "../context/AuthContext";
import { useMessage } from "../context/messageAuth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faClipboardList,
  faComments,
  faEnvelope,
  faEnvelopeOpen,
  faNewspaper,
  faPhone,
  faQuestionCircle,
  faQuoteRight,
  faSignOutAlt,
  faTasks,
  faThLarge,
  faUsers,
  faUserTie,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { Logout, getUser, loggedUser, isLoading } = useAuth();
  const { getMessage, message, sendMessage } = useMessage();
  const { users, getAllUsers } = useAuth();
  const [selectedUser, setSelectedUser] = useState<user | null>(null);
  const [msgContent, setMsgContent] = useState<string>("");

  useEffect(() => {
    const fetchUser = async () => {
      await getUser();
      await getAllUsers();
      await getMessage();
    };
    fetchUser();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    if (days === 0) {
      return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    } else if (days === 1) {
      return 'Yesterday';
    } else if (days < 7) {
      return date.toLocaleDateString([], { weekday: 'short' });
    } else {
      return date.toLocaleDateString([], { month: 'short', day: 'numeric' });
    }
  };

  const handleSend = async (receiver: string) => {
    if (!msgContent.trim()) return;
    
    try {
      await sendMessage(msgContent, receiver);
      setMsgContent("");
    } catch (error) {
      toast.error('Message failed to send');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent, receiver: string) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend(receiver);
    }
  };

  if (isLoading) return <div className="flex items-center justify-center h-screen">Loading...</div>;
  if (!loggedUser) return <div className="flex items-center justify-center h-screen">No user found</div>;

  return (
    <div className="h-screen flex flex-col">
      <WelcPanelBoardmain />
      <div className="flex flex-1 overflow-hidden relative">
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

        {/* Main Chat Area */}
        <div className="flex-1 flex bg-gray-900">
          {/* Users List */}
          <div className="w-80 border-r border-gray-700 flex-shrink-0 overflow-y-auto">
            {users.filter((user)=>{
              return user._id!==loggedUser._id
            }).map((user) => (
              <div
                key={user._id}
                onClick={() => setSelectedUser(user)}
                className={`flex items-center p-4 border-b border-gray-700 hover:bg-gray-800 cursor-pointer transition-colors duration-200 
                ${selectedUser?._id === user._id ? 'bg-gray-800' : ''}`}
              >
                <img
                  src="JAZZY.jpg"
                  alt="Profile"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-4 flex-1 min-w-0">
                  <div className="flex justify-between items-baseline">
                    <h3 className="text-white font-medium truncate">
                      {user._id === loggedUser._id ? 'You' : user.firstName}
                    </h3>
                    <span className="text-xs text-gray-400 flex-shrink-0">
                      {message
                        .filter((m) => m.receiver === user._id || m.sender === user._id)
                        .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
                        .map((m) => formatDate(m.createdAt as string))[0] || ""}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm truncate">
                    {message
                      .filter((m) => m.receiver === user._id || m.sender === user._id)
                      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
                      .map((m) => m.content)[0] || "Recently Joined chat"}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Chat Section */}
          <div className="flex-1 flex flex-col bg-gray-900">
            {selectedUser ? (
              <>
                {/* Chat Header */}
                <div className="flex items-center p-4 border-b border-gray-700 bg-gray-800">
                  <img
                    src="JAZZY.jpg"
                    alt="Profile"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <h2 className="ml-4 text-white font-medium">{selectedUser.firstName}</h2>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {message
                    .filter((m) => m.sender === selectedUser._id || m.receiver === selectedUser._id)
                    .map((m, index) => (
                      <div
                        key={index}
                        className={`flex ${m.sender === loggedUser._id ? 'justify-end' : 'justify-start'}`}
                      >
                        <div
                          className={`max-w-[70%] rounded-lg p-3 ${
                            m.sender === loggedUser._id
                              ? 'bg-blue-600 text-white'
                              : 'bg-gray-700 text-white'
                          }`}
                        >
                          <p>{m.content}</p>
                          <span className="text-xs opacity-75 mt-1 block">
                            {formatDate(m.createdAt as string)}
                          </span>
                        </div>
                      </div>
                    ))}
                </div>

                {/* Message Input */}
                <div className="p-4 border-t border-gray-700">
                  <div className="flex items-center space-x-2">
                    <input
                      type="text"
                      value={msgContent}
                      onChange={(e) => setMsgContent(e.target.value)}
                      onKeyPress={(e) => handleKeyPress(e, selectedUser._id)}
                      placeholder="Type a message..."
                      className="flex-1 bg-gray-700 text-white rounded-full px-6 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                      onClick={() => handleSend(selectedUser._id)}
                      className="bg-blue-600 text-white rounded-full p-3 hover:bg-blue-700 transition-colors duration-200"
                    >
                      <FontAwesomeIcon icon={faPaperPlane} />
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex-1 flex items-center justify-center text-gray-400">
                Select a conversation to start messaging
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;