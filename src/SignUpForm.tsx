import React from 'react';

const SignUpForm: React.FC = () => {
  return (
    <div className=" h-full bg-[#008080]">
      <div className='flex'>
      <div className="w-1/2 flex items-center max-sm:hidden justify-center p-5 ">
        <div className="text-white text-center ">
          <h1 className="text-4xl mb-4">EDGE-REACH TECH</h1>
          <p className="mb-8">Welcome to EDGE-REACH TECH. Please fill in the form to sign up.</p>
          <div className="flex justify-center">
            <div className="bg-[#C0C0C0] text-black p-4 rounded shadow-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.

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
          <h2 className="text-2xl font-bold mb-6">Welcome to EDGE-REACH TECH</h2>
          
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700">First Name</label>
              <input type="text" className="w-full p-1 border border-gray-300 rounded focus:outline-none bg-slate-100" />
            </div>
            <div>
              <label className="block text-gray-700">Last Name</label>
              <input type="text" className="w-full p-1 border border-gray-300 rounded focus:outline-none bg-slate-100" />
            </div>
            <div>
              <label className="block text-gray-700">Email</label>
              <input type="email" className="w-full p-1 border border-gray-300 rounded focus:outline-none bg-slate-100" />
            </div>
            <div>
              <label className="block text-gray-700">Gender</label>
              <input type="text" className="w-full p-1 border border-gray-300 rounded focus:outline-none bg-slate-100" />
            </div>
            <div>
              <label className="block text-gray-700">Password</label>
              <input type="password" className="w-full p-1 border border-gray-300 rounded focus:outline-none bg-slate-100" />
            </div>
            <div>
              <label className="block text-gray-700">Confirm Password</label>
              <input type="password" className="w-full p-1 border border-gray-300 rounded focus:outline-none bg-slate-100" />
            </div>
            <div className="text-right">
              <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Sign Up</button>
            </div>
          </form>
          <div className="text-center mt-4">
            <p>Already have an Account? <a href="#" className="text-blue-500">Login here!</a></p>
          </div>
        </div>
      </div>
      </div>
      <footer>
        <p className='text-center text-white'>Copyright &copy; 2024 Edge_reach tech. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default SignUpForm;

