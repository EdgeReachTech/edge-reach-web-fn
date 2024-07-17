// App.tsx
import React from 'react';
import Navbar from '../components/Navbar';
import PortfolioPage from './portfolioPage';
import HomePage from './homePage';
import Servicecontent from '../components/servicecontent';
import LiveChatPage from '../components/Livechatpage';



const LandingPage: React.FC = () => {
  return (
    <div className='scroll-smooth overflow-auto h-full'>
    <Navbar />
    <HomePage />
    <Servicecontent />
    <PortfolioPage />
    <LiveChatPage/>
    </div>
    
   
  );
};

export default LandingPage;
