// App.tsx
import React from 'react';
import Home from '../components/Home';
import Navbar from '../components/Navbar';
import Homebg from '../components/Homebg';


const LandingPage: React.FC = () => {
  return (
    <>
    <Homebg />
    <Navbar />
    <Home />
    </>
   
  );
};

export default LandingPage;
