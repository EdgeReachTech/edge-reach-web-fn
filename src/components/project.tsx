import React from 'react'
import bigpc from '../assets/serviceimage/bigpc.png';
import portfolio1 from '../assets/serviceimage/portfolio1.png';
import portfolio2 from '../assets/serviceimage/portfolio2.png';
import portfolio3 from '../assets/serviceimage/portfolio3.png';



const project: React.FC = ()  => {
  return (
    <div className="bg-gray-100 min-h-full pt-20">
      <div className="container mx-auto px-4">
      <div className="mb-6 lg:mb-0 lg:w-1/2">
            <h2 className="text-3xl font-bold text-gray-900">
              PORT<span className="text-yellow-500">FOLIO</span>
            </h2>
            <p className="text-xl text-gray-700 mt-4">Experienced in Gallery</p>
          </div>
        
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between bg-gray-200 p-8 rounded-lg shadow-md">
          
         
          <div className="mb-6 lg:mb-0 lg:w-1/2   flex justify-center lg:justify-start">
            <img
              src={bigpc}
              alt="Project Preview"
              className="rounded-lg shadow-lg max-w-full lg:max-w-[90%] lg:max-h-[160%]"
            />
          </div>

          
          <div className="lg:w-1/2 grid grid-cols-1 gap-6">
            {[portfolio1, portfolio2, portfolio3].map((image, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <img src={image} alt={`Portfolio ${index + 1}`} className="w-full  " />
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-800">
                    {index === 0 ? 'Corporate Website' : index === 1 ? 'Web App Development' : 'Branding, Coding'}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <button className="bg-yellow-500 text-white py-3 px-8 rounded-full shadow-md hover:bg-yellow-600 transition-colors duration-300">
            Follow Us
          </button>
        </div>
      </div>
    </div>
  );
};

 

export default project


