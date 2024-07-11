// App.tsx
import React from 'react';
import Navbar from '../components/Navbar';
import PortfolioPage from './portfolioPage';
import HomePage from './homePage';



const LandingPage: React.FC = () => {
  return (
    <div className='scroll-smooth overflow-auto h-full'>
    <Navbar />
    <HomePage />
    <PortfolioPage />
    </div>
    
   
  );
};

export default LandingPage;
