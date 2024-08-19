import React from "react"
const AuthButton: React.FC = () => {
  return (
    <div className={`flex flex-row justify  text-white font-bold `}>
      <a href="/login" className=" transition ease-in duration-300 bg-gradient-to-bl from-cyan-300 mr-5 w-32 hover:to-cyan-700 to-cyan-900 p-2 rounded-3xl ">
        SIGN IN
      </a>
      <a href="/register" className="bg-gradient-to-bl from-orange-500 w-32 to-yellow-200 hover:to-yellow-500 p-2 rounded-3xl transition hover:ease-in duration-100 ">
        SIGN UP
      </a>
    </div>
  );
};

export default AuthButton;
