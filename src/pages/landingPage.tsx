// App.tsx
import React from 'react';
import Navbar from '../components/Navbar';
import PortfolioPage from './portfolioPage';
import HomePage from './homePage';
import TestimonyPage from './TestimonyPage';
import OurBlogPage from './OurBlogPage';
import Servicecontent from '../components/servicecontent';
import LiveChatPage from '../components/Livechatpage';
import Footer from '../components/Footer';
import OurTeamComponent from '../components/OurTeamComponent';


const LandingPage: React.FC = () => {
  return (
    <div className='scroll-smooth overflow-auto h-full'>
    <Navbar />
    <HomePage />
    <Servicecontent />
    <PortfolioPage />
    <OurTeamComponent/>
    <TestimonyPage />
    <OurBlogPage />
    <LiveChatPage/>
    <Footer/>
    </div>
    
   
  );
};

export default LandingPage;
