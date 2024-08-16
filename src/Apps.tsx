import { faBell, faFileContract, faLock, faShieldAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import 'tailwindcss/tailwind.css';

const Apps: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Router>
      <div className="min-h-screen flex bg-gray-200">
        <div className="bg-black text-white w-64 p-8">
          <div className="mb-6">
            <h2 className="text-2xl font-bold">Settings</h2>
          </div>
          <nav className="space-y-4">
            <Link to="/profile" className="flex items-center space-x-2">
              <FontAwesomeIcon icon={faUser} />
              <span>Profile</span>
            </Link>
            <Link to="/notifications" className="flex items-center space-x-2">
              <FontAwesomeIcon icon={faBell} />
              <span>Notifications</span>
            </Link>
            <Link to="/password" className="flex items-center space-x-2">
              <FontAwesomeIcon icon={faLock} />
              <span>Password</span>
            </Link>
            <Link to="/privacy-policy" className="flex items-center space-x-2">
              <FontAwesomeIcon icon={faShieldAlt} />
              <span>Privacy Policy</span>
            </Link>
            <Link to="/terms-of-service" className="flex items-center space-x-2">
              <FontAwesomeIcon icon={faFileContract} />
              <span>Terms of Service</span>
            </Link>
          </nav>
        </div>
        <div className="flex-grow p-8">
          <Routes>
            <Route path="/profile">
              <div>Profile Page</div>
            </Route>
            <Route path="/notifications">
              <div>Notifications Page</div>
            </Route>
            <Route path="/password">
              <div className="max-w-md w-full bg-gray-100 p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-4">Change Password</h2>
                <form>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                      New Password
                    </label>
                    <div className="relative">
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        type={showPassword ? 'text' : 'password'}
                        placeholder="New Password"
                      />
                      <button
                        type="button"
                        className="absolute inset-y-0 right-0 px-3 flex items-center text-gray-700"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        <FontAwesomeIcon icon={showPassword ? faLock : faLock} />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </Route>
            <Route path="/privacy-policy">
              <div className="bg-teal-700 text-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-6">Privacy Policy Details</h2>
                <ul className="space-y-2">
                  <li><Link to="/introduction">Introduction</Link></li>
                  <li><Link to="/information-we-collect">Information We Collect</Link></li>
                  <li><Link to="/how-we-collect-information">How We Collect Information</Link></li>
                  <li><Link to="/use-of-information">Use of Information</Link></li>
                  <li><Link to="/sharing-of-information">Sharing of Information</Link></li>
                  <li><Link to="/data-security">Data Security</Link></li>
                  <li><Link to="/data-retention">Data Retention</Link></li>
                  <li><Link to="/user-rights">User Rights</Link></li>
                  <li><Link to="/cookies-and-tracking-technologies">Cookies and Tracking Technologies</Link></li>
                  <li><Link to="/contact-information">Contact Information</Link></li>
                </ul>
              </div>
            </Route>
            <Route path="/terms-of-service">
              <div>Terms of Service Page</div>
            </Route>
            <Route path="/introduction">
              <div>Introduction Page</div>
            </Route>
            <Route path="/information-we-collect">
              <div>Information We Collect Page</div>
            </Route>
            <Route path="/how-we-collect-information">
              <div>How We Collect Information Page</div>
            </Route>
            <Route path="/use-of-information">
              <div>Use of Information Page</div>
            </Route>
            <Route path="/sharing-of-information">
              <div>Sharing of Information Page</div>
            </Route>
            <Route path="/data-security">
              <div>Data Security Page</div>
            </Route>
            <Route path="/data-retention">
              <div>Data Retention Page</div>
            </Route>
            <Route path="/user-rights">
              <div>User Rights Page</div>
            </Route>
            <Route path="/cookies-and-tracking-technologies">
              <div>Cookies and Tracking Technologies Page</div>
            </Route>
            <Route path="/contact-information">
              <div>Contact Information Page</div>
            </Route>
            <Route path="/">
              <div>Welcome to the Settings Dashboard</div>
            </Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default Apps;
