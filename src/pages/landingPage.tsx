// App.tsx
import React from 'react';
import Navbar from '../components/Navbar';
import PortfolioPage from './portfolioPage';
import HomePage from './homePage';
import Servicecontent from '../components/servicecontent';
import LiveChatPage from '../components/Livechatpage';
import Footer from '../components/Footer';


const LandingPage: React.FC = () => {
  return (
    <div className='scroll-smooth overflow-auto h-full'>
    <Navbar />
    <HomePage />
    <Servicecontent />
    <PortfolioPage />
    <LiveChatPage/>
    <Footer/>
    </div>
    
   
  );
};

export default LandingPage;
