import React from 'react'
import Dashboard from '../components/GeneralDashboard'
import PortfolioAd from '../components/PortfolioAdmin'
const PortfolioAdPage = () => {
  return (
    <div>
      <Dashboard MainComponent={PortfolioAd}/>
    </div>
  )
}

export default PortfolioAdPage