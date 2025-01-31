import React, { useEffect } from 'react'
import WelcPanelBoardmain from './WelcPanelBoardmain'
import MainSidebar from './MainSidebar'
import { useAuth } from '../context/AuthContext'

const dashboard = () => {
   const {getUser ,loggedUser,isLoading} = useAuth()
    useEffect(()=>{
    const fetchUser = async()=>{
      await getUser()
    }
    fetchUser()
    },[]) 
  if(isLoading){
    return <p className="text-center">loading...</p>
   }
   if(!loggedUser){
     return  <p>no user found</p>
   }
  return (

    <div>
      <WelcPanelBoardmain/>
      <MainSidebar/>
    </div>
  )
}

export default dashboard