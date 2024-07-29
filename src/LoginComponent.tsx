import { faBars, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import 'tailwindcss/tailwind.css';
const LoginComponent = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  
  return (
    <div className="min-h-screen gap-4 bg-teal-700 ">
        <div className="block lg:hidden relative">
          <button  className="text-white focus:outline-none absolute right-4 top-3 text-2xl">
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
        <div className='min-h-screen gap-4 bg-teal-700 flex items-center justify-center p-4'>
      <div className="max-w-md w-full max-sm:hidden bg-white p-8 rounded-lg shadow-lg ml-8">
        <div className="mb-4">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
        </div>
        <div className="flex justify-between items-center">
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded">
            &lt;
          </button>
          <div className="flex space-x-2">
            <span className="bg-gray-300 rounded-full w-3 h-3"></span>
            <span className="bg-gray-300 rounded-full w-3 h-3"></span>
            <span className="bg-gray-300 rounded-full w-3 h-3"></span>
          </div>
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded">
            &gt;
          </button>
        </div>
      </div>

      <div className="max-w-md w-full max-h-full bg-gray-100 p-4 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">EDGE-REACH TECH</h2>
        <p className="mb-6">Welcome Back to EDGE-REACH TECH</p>
        <form>
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email Address
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email Address"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <div className="relative">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                required
              />
              <button
                type="button"
                onClick={handleTogglePasswordVisibility}
                className="absolute inset-y-0 right-0 px-3 flex items-center text-gray-700"
              >
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between mb-4">
            <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
              Forgot your Password?
            </a>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Sign In
            </button>
          </div>
          <p className="mt-4">You don't have any account? <a href="#" className="text-blue-500">Sign Up Here.</a></p>
        </form>
      </div>
      </div>
      <footer>
        <p className='text-center text-white font-bold'>Copyright &copy; 2024 Edge_reach tech. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LoginComponent;

