
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
import Aboutus from './about';


const LandingPage: React.FC = () => {
  return (
    <div className='scroll-smooth overflow-hidden h-full'>
    <Navbar />
    <HomePage />
    <Aboutus/>
    <Servicecontent />
    {/* <PortfolioPage /> */}
    <OurTeamComponent/>
    <TestimonyPage />
    <OurBlogPage />
    <LiveChatPage/>
    <Footer/>
    </div>
    
   
  );
};

export default LandingPage;
