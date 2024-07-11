// App.tsx
import React from 'react';
import Navbar from '../components/Navbar';
import PortfolioPage from './portfolioPage';
import HomePage from './homePage';
import Servicecontent from '../components/servicecontent';



const LandingPage: React.FC = () => {
  return (
    <div className='scroll-smooth overflow-auto h-full'>
    <Navbar />
    <HomePage />
    <Servicecontent />
    <PortfolioPage />
    </div>
    
   
  );
};

export default LandingPage;
