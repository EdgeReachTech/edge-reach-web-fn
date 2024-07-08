import React from 'react'
import wwww from  '../assets/www.jpg'

const Homebg:React.FC = () => {
  return (
    <div className="bg-gray-300 w-full h-full absolute">
      <div className="clip-custom-3 w-7/12 h-1/4  bg-gradient-to-t from-cyan-400 to-cyan-600" />
      <img
        src={wwww}
        alt="edge"
        className="clip-img h-full fixed right-0 top-0"
      />
    </div>
  );
}

export default Homebg
