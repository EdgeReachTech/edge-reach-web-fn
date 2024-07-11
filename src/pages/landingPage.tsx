// App.tsx
import React from 'react';
import Home from '../components/Home';
import Navbar from '../components/Navbar';
import Homebg from '../components/Homebg';
import Servicepage from './servicepage';


const LandingPage: React.FC = () => {
  return (
    <>
    <Homebg />
    <Navbar />
    <Home />
    <Servicepage />
    </>
   
  );
};

export default LandingPage;
