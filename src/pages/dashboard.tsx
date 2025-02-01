import  { useEffect, useState } from "react";
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
} from "@fortawesome/free-solid-svg-icons";
import { FaForward } from "react-icons/fa";
import { toast } from "react-toastify";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { Logout, getUser, loggedUser, isLoading } = useAuth();
  const { getMessage,message,sendMessage } = useMessage();
  const {users,getAllUsers}= useAuth()
  const [selectedUser,setSelectedUser] = useState<user|null>(null)
  const [msgcontent,setMsgContent] = useState<String|null>(null)

  useEffect(() => {
    const fetchUser = async () => {
      await getUser();
      await getAllUsers()
      await getMessage();
      
    };
    fetchUser();

  }, []);
  const handleSend=async(receiver:string)=>{
try {
  await sendMessage(msgcontent as string,receiver)
  await getMessage()

} catch (error) {
  toast.error('message failed')
  
}
  }

  if (isLoading) {
    return <p className="text-center">Loading...</p>;
  }

  if (!loggedUser) {
    return <p>No user found</p>;
  }

  return (
    <div>
      <WelcPanelBoardmain />
      <div className="flex">
        {/* Sidebar */}
        <button
          className="md:hidden fixed top-4 left-4 z-50 text-white bg-gray-800 p-2 rounded"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <FontAwesomeIcon icon={faBars} size="lg" />
        </button>

        <div
          className={`w-64 h-screen bg-gray-800 text-white flex flex-col transition-transform duration-300 ease-in-out z-40 
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
        >
          <div className="bg-gray-800 gap-3 mt-[-3.5em] cursor-pointer font-bold flex justify-center items-center pt-4">
            <div className="w-[80%] ml-[-3em]">
              <img src="/Logo.png" alt="company logo" />
            </div>
            <div className="ml-[-3.5em]">
              <h4 className="font-loboto text-[#8cf3f3]">EDGEREACH</h4>
              <span className="text-gray-400">ADMIN PANEL</span>
            </div>
          </div>

          {/* Navigation */}
          <ul className="flex-1 space-y-4 mt-[-3em] bg-gray-800 px-4">
            <li className="flex items-center space-x-3 cursor-pointer hover:bg-gray-700 rounded-md p-2">
              <FontAwesomeIcon icon={faThLarge} />
              <a href="#">Dashboard</a>
            </li>
            <li className="flex items-center space-x-3 cursor-pointer hover:bg-gray-700 rounded-md p-2">
              <FontAwesomeIcon icon={faNewspaper} />
              <a href="#">Blog</a>
            </li>
            <li className="flex items-center space-x-3 cursor-pointer hover:bg-gray-700 rounded-md p-2">
              <FontAwesomeIcon icon={faComments} />
              <a href="#">Comments</a>
            </li>
            <li className="flex items-center space-x-3 cursor-pointer hover:bg-gray-700 rounded-md p-2">
              <FontAwesomeIcon icon={faTasks} />
              <a href="#">Project</a>
            </li>
            <li className="flex items-center space-x-3 cursor-pointer hover:bg-gray-700 rounded-md p-2">
              <FontAwesomeIcon icon={faQuoteRight} />
              <a href="#">Testimonial</a>
            </li>
            <li className="flex items-center space-x-3 cursor-pointer hover:bg-gray-700 rounded-md p-2">
              <FontAwesomeIcon icon={faEnvelope} />
              <a href="#">Messaging</a>
            </li>
            <li className="flex items-center space-x-3 cursor-pointer hover:bg-gray-700 rounded-md p-2">
              <FontAwesomeIcon icon={faUsers} />
              <a href="#">Team Management</a>
            </li>
            <li className="flex items-center space-x-3 cursor-pointer hover:bg-gray-700 rounded-md p-2">
              <FontAwesomeIcon icon={faUserTie} />
              <a href="#">Employee</a>
            </li>
            <li className="flex items-center space-x-3 cursor-pointer hover:bg-gray-700 rounded-md p-2">
              <FontAwesomeIcon icon={faClipboardList} />
              <a href="#">Task Management</a>
            </li>
            <li className="flex items-center space-x-3 cursor-pointer hover:bg-gray-700 rounded-md p-2">
              <FontAwesomeIcon icon={faEnvelopeOpen} />
              <a href="#">Subscribers</a>
            </li>
            <li className="flex items-center space-x-3 cursor-pointer hover:bg-gray-700 rounded-md p-2">
              <FontAwesomeIcon icon={faPhone} />
              <a href="#">Contact</a>
            </li>
          </ul>

          <ul className="space-y-4 bg-gray-800 px-4 pb-4">
            <li className="flex items-center space-x-3 cursor-pointer hover:bg-gray-700 rounded-md p-2">
              <FontAwesomeIcon icon={faQuestionCircle} />
              <a href="#">Help</a>
            </li>
            <li className="flex items-center space-x-3 cursor-pointer hover:bg-gray-700 rounded-md p-2">
              <FontAwesomeIcon icon={faSignOutAlt} />
              <a onClick={() => Logout()}>Log Out</a>
            </li>
          </ul>
        </div>

        
        <div className="flex bg-gray-800 border-2 border-l-yellow-200 border-solid max-h-max flex-grow">
          <div className="flex flex-col p-2">
           {
            users.map((user)=>(
              <div className="flex gap-2 items-center border-b-2 p-2 border-b-gray-600 border-solid text-white w-64" onClick={()=>setSelectedUser(user)}>
              <img src="JAZZY.jpg" alt="Profile" className="w-10 h-10 rounded-full" />
              <div className="flex flex-col gap-2 text-start w-36">
                <h2 className="font-bold">{user._id===loggedUser._id?'You':user.firstName}</h2>
                <p className="overflow-x-hidden text-nowrap">
        {message
    .filter((m) => m.receiver === user._id || m.sender === user._id) 
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()) 
    .map((m) => m.content)[0] || "No messages yet"} 
</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <p className="text-blue-600 text-sm">{message
    .filter((m) => m.receiver === user._id || m.sender === user._id) 
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()) 
    .map((m) => m.createdAt.toLocaleString())[0] || ""} </p>
                <p className="bg-blue-500 text-white rounded-full text-center px-1 text-[12px]">{message
    .filter((m) => m.receiver === user._id || m.sender === user._id) 
    .map((m) => m.read===false).length|| ""} </p>
              </div>
            </div>
            ))
           }
          </div>
          <div className="border-2 border-white border-solid w-3/4">
{
selectedUser?<div className="flex flex-col">
<div className="flex gap-2 items-center text-white font-bold w-full bg-gray-400">
<img src="JAZZY.jpg" alt="Profile" className="w-10 h-10 rounded-full" />
<p>{selectedUser.firstName}</p>
</div>
<div className=""></div>
<div className="fixed bottom-0 w-1/2 py-2 px-3">
  <div className="rounded-lg border-2 flex gap-2 border-white border-solid "><input name="msg" type="text" onChange={(e)=>setMsgContent(e.target.value)} className="w-3/4"/>
   <button   onClick={()=>handleSend(selectedUser._id)} className="p-2 bg-blue-400 border-none rounded">send</button>
  </div>
</div>
</div>:<p>select user to chat please</p>
}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
