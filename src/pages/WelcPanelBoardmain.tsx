
const WelcPanelBoardmain = () => {
  return (
    <div className="w-full md:relative fixed">
       {/* Welcome Bar */}
       <div className="backGround h-[5em]  flex justify-between   items-center px-4 md:px-8">
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
  )
}

export default WelcPanelBoardmain
