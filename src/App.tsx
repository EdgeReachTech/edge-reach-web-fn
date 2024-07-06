
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/landingPage'
import React from 'react'
// import landingPage from './pages/landingPage'
const App:React.FC = () =>{

  return (
    < BrowserRouter>
    <Routes>
      <Route path='/' Component={LandingPage}>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
