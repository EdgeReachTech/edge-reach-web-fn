import React from 'react'


const Homebg:React.FC = () => {
  return (
    <div className="bg-gray-300 m-0 w-full h-full  flex flex-row justify-between  absolute overflow-hidden">
      <div className="clip-custom-3 w-7/12 h-1/4  bg-gradient-to-t from-cyan-400 to-cyan-600 " />
      <div className=" bg-[url('/1.png')] w-1/2 h-full mr-2 hidden lg:block  p-2 ">
        <img
          src="/edge.jpg"
          className="hidden lg:block  rounded-bl-full h-full "
          alt=""
        />
      </div>
    </div>
  );
}

export default Homebg
