import MainSidebar from "./MainSidebar";
import WelcPanelBoardmain from "./WelcPanelBoardmain";

const BoardMain = () => {
  return (
    <div className="bg-[#C0C0C0] flex flex-col md:flex-row">
     <WelcPanelBoardmain/>
           <MainSidebar/>
          
    
    </div>
  );
};

export default BoardMain;