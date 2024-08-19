import React, { HtmlHTMLAttributes, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { ClipLoader } from "react-spinners";

const SignUpPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    Location: "",
    Password: "",
  });
  const { signed, Register } = useAuth();
  const handleFormData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRegister = async () => {
    try {
      setIsLoading(true);
      await Register(formData);
    } catch (error: any) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className=" h-screen bg-[#008080]">
      <div className="flex">
        <div className="w-1/2 flex items-center max-sm:hidden justify-center p-5 ">
          <div className="text-white text-center ">
            <h1 className="text-4xl mb-4">EDGE-REACH TECH</h1>
            <p className="mb-8">
              Welcome to EDGE-REACH TECH. Please fill in the form to sign up.
            </p>
            <div className="flex justify-center">
              <div className="bg-[#C0C0C0] text-black p-4 rounded shadow-md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                <div className="flex justify-between items-center">
                  <button className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded">
                    &lt;
                  </button>
                  <div className="flex space-x-2">
                    <span className="bg-slate-50 rounded-full w-3 h-3"></span>
                    <span className="bg-slate-50 rounded-full w-3 h-3"></span>
                    <span className="bg-slate-50 rounded-full w-3 h-3"></span>
                  </div>
                  <button className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded">
                    &gt;
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2 max-sm:w-screen flex items-center justify-center  bg-[#008080] mt-5 max-sm:m-0 mb-5 ">
          <div className="w-full max-w-md p-8 bg-[#C0C0C0] max-sm:bg-white shadow-md rounded">
            <h2 className="text-2xl font-bold mb-6">
              Welcome to EDGE-REACH TECH
            </h2>

            <form className="space-y-4">
              <div>
                <label className="block text-gray-700">First Name</label>
                <input
                  type="text"
                  className="w-full p-1 border border-gray-300 rounded focus:outline-none bg-slate-100"
                  name="firstName"
                  onChange={handleFormData}
                />
              </div>
              <div>
                <label className="block text-gray-700">Last Name</label>
                <input
                  className="w-full p-1 border border-gray-300 rounded focus:outline-none bg-slate-100"
                  type="text"
                  name="lastName"
                  onChange={handleFormData}
                />
              </div>
              <div>
                <label className="block text-gray-700">Email</label>
                <input
                  className="w-full p-1 border border-gray-300 rounded focus:outline-none bg-slate-100"
                  type="email"
                  name="email"
                  onChange={handleFormData}
                />
              </div>
              <div>
                <label className="block text-gray-700">Location</label>
                <input
                  className="w-full p-1 border border-gray-300 rounded focus:outline-none bg-slate-100"
                  type="text"
                  name="location"
                  onChange={handleFormData}
                />
              </div>
              <div>
                <label className="block text-gray-700">Password</label>
                <input
                  className="w-full p-1 border border-gray-300 rounded focus:outline-none bg-slate-100"
                  type="password"
                  name="password"
                  onChange={handleFormData}
                />
              </div>
              <div>
                <label className="block text-gray-700">Confirm Password</label>
                <input
                  className="w-full p-1 border border-gray-300 rounded focus:outline-none bg-slate-100"
                  type="password"
                  name="ComfirmPassword"
                />
              </div>
              <div className="text-right">
                <button
                  className={` text-white px-4 py-2 rounded ${
                    isLoading ? "bg-gray-700" : "bg-blue-500"
                  }`}
                  type="button"
                  onClick={handleRegister}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="flex flex-row justify-between items-center">
                      <ClipLoader size={20} color="white" /> loading...
                    </div>
                  ) : (
                    "Sign up"
                  )}
                </button>
              </div>
            </form>
            <div className="text-center mt-4">
              <p>
                Already have an Account?{" "}
                <a href="/login" className="text-blue-500">
                  Login here!
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <footer className="lg:bottom-0 fixed text-center w-full ">
        <p className="text-center text-white ">
          Copyright &copy; 2024 Edge_reach tech. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default SignUpPage;
