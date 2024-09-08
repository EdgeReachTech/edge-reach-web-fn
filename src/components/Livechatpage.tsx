import React from 'react';

const LiveChatPage: React.FC = () => {
  return (
    <div className="min-h-full">
      <div className="flex flex-col justify-center items-center min-h-full relative">
        <div className="absolute inset-0 flex flex-col">
          <div className="h-1/2 bg-slate-200"></div>
          <div className="h-1/2 bg-slate-300"></div>
        </div>
        <div className="flex flex-col justify-center items-center z-10">
          <p className="font-semibold  text-center mt-14 text-4xl font-loboto">
            <span className="bg-cyan-500 rounded-md p-2">OUR PRICE</span> PLAN
          </p>
          <p className="font-bold text-3xl text-center mt-8">
            Live Chat 24/7 Support
          </p>
          <div className="bg-slate-300 h-2 w-28 mt-8 mx-auto"></div>
          <div className="font-extrabold text-center mt-2 text-xl">
            Let's turn your ideas into reality. Contact EdgeReach Tech today!
          </div>
          <p className="text-center text-xl">
            Find Your Perfect Fit Explore EdgeReach Tech's Pricing Plans & Live
            Chat Support.
          </p>
        </div>

        <div className="sm:block p-2 lg:flex justify-center items-center lg:gap-10 h-auto z-10">
          <div className="card border border-gray-400 w-80 rounded-lg shadow-md max-w-full box-border mb-3">
            <div className="bg-cyan-500 h-15 w-full py-8 rounded-lg flex flex-col items-center">
              <p className="font-bold">Web App Development</p>
              {/* <p>All Design</p> */}
              <div className="h-1 w-52   bg-gray-300"></div>
            </div>
            <div className="p-10">
              <p className="mb-1">UI/UX Desig</p>
              <p className="mb-1">Responsive Design</p>
              <p className="mb-1">Progressive Web Apps (PWA)</p>
              <p className="mb-1">Front-End Development</p>
              <p className="mb-1">Back-End Developmen</p>
              <p className="mb-1">API Integration</p>
              <p className="mb-1">Custom APIs and Integration</p>
              <p className="mb-1">Database Design & Management</p>
              <p className="mb-1">E-commerce Solutions</p>
              <p className="mb-1">CMS Development</p>
              <p className="mb-1">Security & Compliance</p>
              <p className="mb-1">Maintenance & Suppor</p>
            </div>
            <button className="bg-cyan-500 rounded-full font-bold p-3 w-56 mb-10 mx-10">
              View Details
            </button>
          </div>

          <div className="card border border-gray-400 w-80 rounded-lg shadow-md mb-3">
            <div className="bg-gradient-to-r from-orange-500 to-yellow-400 h-15 w-full py-8 rounded-lg flex flex-col  items-center">
              <p className="font-bold">Mobile App Development</p>
              {/* <p>All Design</p> */}
              <div className="h-1 w-52  bg-gray-300"></div>
            </div>
            <div className="p-10">
              <p className="mb-1">iOS and Android Development</p>
              <p className="mb-1">Cross-Platform Development</p>
              <p className="mb-1">UI/UX Design</p>
              <p className="mb-1">App Store Optimization</p>
              <p className="mb-1">API & Backend Integration</p>
              <p className="mb-1">Push Notification</p>
              <p className="mb-1">Geo-location Service</p>
              <p className="mb-1">In-app Purchases & Subscriptions</p>
              <p className="mb-1">Mobile Security</p>
              <p className="mb-1">App Testing & QA</p>
              <p className="mb-1">Ongoing Support & Updates</p>
            </div>
            <button className="bg-gradient-to-r from-orange-500 to-yellow-400 rounded-full font-bold p-3 w-56 mb-10 mx-10">
              View Details
            </button>
          </div>

          <div className="card border border-gray-400 w-80 rounded-lg shadow-md mb-3">
            <div className="bg-cyan-500 h-15 w-full py-8 rounded-lg flex flex-col content-center items-center ">
              <p className="font-bold">Custom Solution Development</p>
              {/* <p>All Design</p> */}
              <div className="h-1 w-54  bg-gray-300"></div>
            </div>
            <div className="p-10">
              <p className="mb-1">SEO</p>
              <p className="mb-1">Web Analytics and Reporting</p>
              <p className="mb-1">Business Process Automation</p>
              <p className="mb-1">
                Enterprise Resource Planning (ERP) Solutions{" "}
              </p>
              <p className="mb-1">
                {" "}
                Customer Relationship Management (CRM) Solutions
              </p>
              <p className="mb-1">Data Analytics and Reporting Tools</p>
              <p className="mb-1">Cloud-Based Solution</p>
              <p className="mb-1">AI & Machine Learning Integration</p>
              <p className="mb-1">Legacy System Modernization</p>
              {/* <p className="mb-1">Custom SaaS Solutions</p> */}
              {/* <p className="mb-1">Security Solutions</p> */}
              {/* <p className="mb-1">Consultation & Problem-Solving</p> */}
            </div>
            <button className="bg-cyan-500 rounded-full font-bold p-3 w-56 mb-10 mx-10">
              View Detail
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LiveChatPage;
