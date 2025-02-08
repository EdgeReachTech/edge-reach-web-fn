import { useEffect, useState } from "react";
import WelcPanelBoardmain from "../pages/WelcPanelBoardmain";
import { useAuth, user } from "../context/AuthContext";
import MainSidebar from "../pages/MainSidebar";
interface DashboardProps {
  MainComponent: React.ComponentType; // Accept a component as a prop
}
const Dashboard = ({ MainComponent }: DashboardProps) => {
  const { getUser, loggedUser, isLoading } = useAuth();

  useEffect(() => {
    const fetchUser = async () => {
      await
        getUser()
    };
    fetchUser();
  }, []);




  
  if (!loggedUser) return <div className="flex items-center justify-center h-screen">No user found</div>;

  return (
    <div className="h-screen flex flex-col">
      <WelcPanelBoardmain />
      <div className="flex flex-1 overflow-hidden relative">
        <MainSidebar />
        <MainComponent />


      </div>
    </div>
  );
};

export default Dashboard;