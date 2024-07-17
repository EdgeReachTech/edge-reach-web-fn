import React from 'react';

const LiveChatPage: React.FC = () => {
  return (
    <div className='min-h-full'>
      <div className="flex flex-col justify-center items-center min-h-full relative">
        <div className='absolute inset-0 flex flex-col'>
          <div className='h-1/2 bg-slate-200'></div>
          <div className='h-1/2 bg-slate-300'></div>
        </div>
        <div className="flex flex-col justify-center items-center z-10">
          <p className="font-semibold text-xl text-center mt-14">
            <span className="bg-cyan-500">OUR PRI</span>CE PLAN
          </p>
          <p className="font-bold text-3xl text-center mt-8">Live Chat 24/7 Support</p>
          <div className="bg-slate-300 h-2 w-28 mt-8 mx-auto"></div>
          <div className="font-extrabold text-center mt-2 text-xl">
            Let's turn your ideas into reality. Contact EdgeReach Tech today!
          </div>
          <p className="text-center text-xl">
            Find Your Perfect Fit Explore EdgeReach Tech's Pricing Plans & Live Chat Support.
          </p>
        </div>

        <div className="sm:block p-2 lg:flex justify-center items-center lg:gap-20 h-auto z-10">
          <div className="card border border-gray-400 w-60 rounded-lg shadow-md max-w-full box-border mb-3">
            <div className="bg-cyan-500 h-15 w-60 p-8 rounded-lg">
              <div className="px-10">
                <p className="font-bold">Web Design</p>
                <p>All Design</p>
                <div className="h-1 w-52 -mx-14  bg-gray-300"></div>
              </div>
            </div>
            <div className="p-10">
              <p className="mb-6">UI/UX Design</p>
              <p className="mb-12">
                Prototyping and <span className="block">Wireframing</span>
              </p>
              <p className="mb-3">Responsive Design</p>
            </div>
            <button className="bg-cyan-500 rounded-full font-bold p-3 w-56 mb-10 mx-2">ORDER NOW</button>
          </div>

          <div className="card border border-gray-400 w-60 rounded-lg shadow-md mb-3">
            <div className="bg-gradient-to-r from-orange-500 to-yellow-400 h-15 w-60 p-4 rounded-lg">
              <div className="px-10">
                <p className="font-bold">Web Development</p>
                <p>All Design</p>
                <div className="h-1 w-56 -mx-12 bg-gray-300"></div>
              </div>
            </div>
            <div className="p-2">
              <p className="mb-1">Custom Website</p>
              <p className="mb-1">Development</p>
              <p className="mb-1">E-Commerce Development</p>
              <p className="mb-1">
                Content Management <span className="block">System(CMS)</span>
              </p>
              <p className="mb-1">
                Progressive Web Apps <span className="block">System(PWAS)</span>
              </p>
              <p className="mb-1">Frontend Development</p>
              <p className="mb-1">Backend Development</p>
            </div>
            <button className="bg-gradient-to-r from-orange-500 to-yellow-400 rounded-full font-bold p-3 w-56 mb-10 mx-2">ORDER NOW</button>
          </div>

          <div className="card border border-gray-400 w-60 rounded-lg shadow-md mb-3">
            <div className="bg-cyan-500 h-15 w-60 p-7 rounded-lg">
              <div className="px-10">
                <p className="font-bold">Others</p>
                <p>All Design</p>
                <div className="h-1 w-52 -mx-14 bg-gray-300"></div>
              </div>
            </div>
            <div className="p-3">
              <p className="mb-3">
                Web Hosting <span className="block">Maintenance </span>
              </p>
              <p className="mb-3">SEO</p>
              <p className="mb-3">E-commerce Solutions </p>
              <p className="mb-3">
                Web Analytics and <span className="block">Reporting</span>
              </p>
              <p className="mb-4">Digital Marketing Services</p>
            </div>
            <button className="bg-cyan-500 rounded-full font-bold p-3 w-56 mb-10 mx-2">ORDER NOW</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LiveChatPage;
