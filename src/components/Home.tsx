import React from "react"

const home:React.FC = () => {
  return (
  <div className="h-screen bg-cover top-0 bg-center" style={{ backgroundImage: "url('/public/b.jpg')" }}>
   <div className="px-9 pt-36 h-screen bg-cover bg-center">
     <div className="mt-11 flex flex-row">
      <h5 className="px-3 bg-black text-white">Best</h5>
      <h5 className="px-1 text-black" >IT COMPANY</h5>
     </div>
      <p className="lg:w-2/5 md:w-3/5 sm:w-4/5 text-xl my-4 font-mono"> EdgeReach Tech is a connecting top-tier developers to deliver custom software for your business needs.</p>
    </div>
    </div>
  )
}

export default home
