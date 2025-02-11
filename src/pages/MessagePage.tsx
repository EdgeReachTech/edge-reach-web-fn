import React from 'react'
import Dashboard from '../components/dashboard'
import message from '../components/message'
const MessagePage = () => {
  return (
    <div>
      <Dashboard MainComponent={message}/>
    </div>
  )
}

export default MessagePage