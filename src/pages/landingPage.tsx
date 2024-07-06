// App.tsx
import React from 'react';
import Home from '../components/Home';
import Navbar from '../components/Navbar';


const LandingPage: React.FC = () => {
  return (
    <>
    <Navbar />
    <Home />
    </>
   
  );
};

export default LandingPage;
