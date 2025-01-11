import MainSidebar from "./MainSidebar";
import WelcPanelBoardmain from "./WelcPanelBoardmain";

const BoardMain = () => {
  return (
    <div className="bg-[#C0C0C0] flex flex-col md:flex-row">
      <MainSidebar/>
    <WelcPanelBoardmain/>
    </div>
  );
};

export default BoardMain;