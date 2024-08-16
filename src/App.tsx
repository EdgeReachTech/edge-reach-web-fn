
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/landingPage'
import React from 'react'
import LoginPage from './pages/LoginPage'
const App:React.FC = () =>{

  return (
    < BrowserRouter >
    <Routes>
      <Route path='/' Component={LandingPage} />
      <Route path='/login' Component={LoginPage} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
