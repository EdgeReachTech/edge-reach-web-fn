import React from 'react'
import { faSearch } from '@fortawesome/free-solid-svg-icons/faSearch'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faPhone } from '@fortawesome/free-solid-svg-icons'
const Navbar:React.FC = () => {
  return (
    <div  className=''>
        <FontAwesomeIcon icon={faBars} className='mt-11  text-neutral-500  text-3xl  fixed top-0 z-50 lg:hidden md:block sm:block'/>
        <div className=' lg:mt-7 sm:hidden md:hidden  lg:mx-36   bg-neutral-500 lg:flex lg:flex-row  fixed lg:top-0 z-50 shadow-md ' >
        <div className="m-6 px-5">
            <h5 className=''>EDGE-REACH TECH</h5>
            </div>
        <div className=" px-10 flex flex-row ">
            <button className='p-2'>Home</button>
            <button className='p-2'>About</button>
            <button className='p-2'>Services</button>
            <button className='p-2'>Projects</button>
            <button className='p-2'>Blogs</button>
            <button className='p-2'>Contact</button>
        </div>
        <div className="flex flex-row">
            <FontAwesomeIcon icon={faSearch} className='p-2 m-4 cursor-pointer bg-sky-500 rounded-full'/>
            
        <div className="flex flex-row p-3 bg-cyan-400">
            <FontAwesomeIcon icon={faPhone} className=' m-3'/>
            <div className="flex flex-col">     
       <p className=''>Call us</p>
       <p className=''>+250 786 605 505</p>
            </div>
        </div>
            
        </div>
      </div>
    </div>
  )
}

export default Navbar
