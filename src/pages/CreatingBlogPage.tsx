import React from 'react'
import Dashboard from '../components/GeneralDashboard'
import CreateBlog from '../components/createBlog'

const CreatingBlogPage = () => {
  return (
    <Dashboard MainComponent={CreateBlog} />
  )
}

export default CreatingBlogPage