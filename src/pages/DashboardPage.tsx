import React from 'react'
import Dashboard from '../components/GeneralDashboard'
import dashboardComponent from '../components/dashboardComponent'

const DashboardPage = () => {
    return (
        <Dashboard MainComponent={dashboardComponent} />
    )
}

export default DashboardPage