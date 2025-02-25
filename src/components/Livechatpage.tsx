import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const LiveChatPage: React.FC = () => {
  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hover: { scale: 1.05, boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.1)' },
  };

  const buttonVariants = {
    hover: { scale: 1.1, transition: { duration: 0.2 } },
    tap: { scale: 0.95 },
  };

  return (
    <div className="min-h-screen">
      <div className="flex flex-col justify-center items-center min-h-screen relative">
        {/* Background Layers */}
        <div className="absolute inset-0 flex flex-col">
          <div className="h-1/2 bg-slate-200"></div>
          <div className="h-1/2 bg-slate-300"></div>
        </div>

        {/* Header Section */}
        <div className="flex flex-col justify-center items-center z-10 text-center">
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-semibold text-4xl mt-14"
          >
            <span className="bg-cyan-500 rounded-md p-2 text-white">OUR PRICE</span> PLAN
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-bold text-3xl mt-8 text-gray-800"
          >
            Live Chat 24/7 Support
          </motion.p>
          <div className="bg-slate-400 h-1 w-28 mt-8 mx-auto"></div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="font-extrabold text-xl mt-2 text-gray-700"
          >
            Let's turn your ideas into reality. Contact EdgeReach Tech today!
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-xl text-gray-600 mt-2 max-w-2xl"
          >
            Find Your Perfect Fit. Explore EdgeReach Tech's Pricing Plans & Live Chat Support.
          </motion.p>
        </div>

        {/* Cards Section */}
        <div className="p-4 sm:p-6 lg:flex lg:justify-center lg:gap-10 z-10 max-w-7xl mx-auto">
          {/* Web App Development Card */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            whileHover="hover"
            className="border border-gray-400 w-full sm:w-80 rounded-lg shadow-md mb-6 lg:mb-0"
          >
            <div className="bg-cyan-500 py-8 rounded-t-lg flex flex-col items-center text-white">
              <p className="font-bold text-lg">Web App Development</p>
              <div className="h-1 w-52 bg-gray-300 mt-2"></div>
            </div>
            <ul className="p-6 text-gray-700 list-disc list-inside space-y-2">
              <li>UI/UX Design</li>
              <li>Responsive Design</li>
              <li>Progressive Web Apps (PWA)</li>
              <li>Front-End Development</li>
              <li>Back-End Development</li>
              <li>API Integration</li>
              <li>Custom APIs and Integration</li>
              <li>Database Design & Management</li>
              <li>E-commerce Solutions</li>
              <li>CMS Development</li>
              <li>Security & Compliance</li>
              <li>Maintenance & Support</li>
            </ul>
            <Link to="/contact">
              <motion.button
                variants={buttonVariants}
                whileHover={{ ...buttonVariants.hover, backgroundColor: '#06b6d4' }}
                whileTap="tap"
                className="bg-cyan-500 text-white rounded-full font-bold p-3 w-56 mb-6 mx-auto block"
              >
                Order Now
              </motion.button>
            </Link>
          </motion.div>

          {/* Mobile App Development Card */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            whileHover="hover"
            className="border border-gray-400 w-full sm:w-80 rounded-lg shadow-md mb-6 lg:mb-0"
          >
            <div className="bg-gradient-to-r from-orange-500 to-yellow-400 py-8 rounded-t-lg flex flex-col items-center text-white">
              <p className="font-bold text-lg">Mobile App Development</p>
              <div className="h-1 w-52 bg-gray-300 mt-2"></div>
            </div>
            <ul className="p-6 text-gray-700 list-disc list-inside space-y-2">
              <li>iOS and Android Development</li>
              <li>Cross-Platform Development</li>
              <li>UI/UX Design</li>
              <li>App Store Optimization</li>
              <li>API & Backend Integration</li>
              <li>Push Notifications</li>
              <li>Geo-location Services</li>
              <li>In-app Purchases & Subscriptions</li>
              <li>Mobile Security</li>
              <li>App Testing & QA</li>
              <li>Ongoing Support & Updates</li>
              <li>Ios and Android Apps</li>
              
            </ul>
            <Link to="/contact">
              <motion.button
                variants={buttonVariants}
                whileHover={{ ...buttonVariants.hover, backgroundImage: 'linear-gradient(to right, #f97316, #fde047)' }}
                whileTap="tap"
                className="bg-gradient-to-r from-orange-500 to-yellow-400 text-white rounded-full font-bold p-3 w-56 mb-6 mx-auto block"
              >
                Order Now
              </motion.button>
            </Link>
          </motion.div>

          {/* Custom Solution Development Card */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            whileHover="hover"
            className="border border-gray-400 w-full sm:w-80 rounded-lg shadow-md mb-6 lg:mb-0"
          >
            <div className="bg-cyan-500 py-8 rounded-t-lg flex flex-col items-center text-white">
              <p className="font-bold text-lg">Custom Solution Development</p>
              <div className="h-1 w-52 bg-gray-300 mt-2"></div>
            </div>
            <ul className="p-6 text-gray-700 list-disc list-inside space-y-2">
              <li>SEO</li>
              <li>Web Analytics and Reporting</li>
              <li>Business Process Automation</li>
              <li>Enterprise Resource Planning (ERP) Solutions</li>
              <li>Customer Relationship Management (CRM) Solutions</li>
              <li>Data Analytics and Reporting Tools</li>
              <li>Cloud-Based Solutions</li>
              <li>AI & Machine Learning Integration</li>
              <li>Legacy System Modernization</li>
              <li>Automation and machine Learning</li>
            </ul>
            <Link to="/contact">
              <motion.button
                variants={buttonVariants}
                whileHover={{ ...buttonVariants.hover, backgroundColor: '#06b6d4' }}
                whileTap="tap"
                className="bg-cyan-500 text-white rounded-full font-bold p-3 w-56 mb-6 mx-auto block"
              >
                Order Now
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LiveChatPage;