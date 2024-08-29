import { useState } from "react"
import SidebarMobile from '../img/SidebarMobile.png'
import DownArrow from '../img/DownArrow.png'


export default function HeaderMobile (){
    const [sidebarOpen, setSidebarOpen]= useState (false)

    return(
        <div  className="md:hidden">
        <div className="h-screen bg-cover bg-center bg-[url('./img/HeaderMobileFundo.png')]">
    
    <div className="flex justify-between p-5">
    <h1 className="text-white text-[150%] font-bold font-fraunces ">sunnyside</h1>
   
   
   
   <div className={` top-0 left-0 
     ${sidebarOpen ? 'w-[220px] rounded-lg h-[340px] bg-white '
     : 'w-0'}transition-width duration-300 `}>
    
    

    <button onClick={() => setSidebarOpen(!sidebarOpen)}>
    <img src={SidebarMobile} className="w-6 mt-3 ml-2 mr-[2%]"/>
     {sidebarOpen ?
     <div className="grid my-5 mx-14  ">
     <button className="hover:bg-yellow-200 bg-yellow-400 w-28 h-12 rounded-full my-2 text-white ">
      About
     </button>
     <button className="hover:bg-yellow-200 w-28 h-12 rounded-full my-2 text-slate-400 ">
      Services
     </button>
     <button className="hover:bg-yellow-200 w-28 h-12 rounded-full my-2 text-slate-400 ">
      Projects
     </button>
     <button className="hover:bg-yellow-200 w-28 h-12 rounded-full my-2 text-slate-400 ">
      Contact
     </button>
     </div>
      : ''}
     </button>
    <div>
        
    </div>
  </div>
   </div> 
  <div className="grid justify-items-center">
   <h2 className="mt-28 text-[270%]  text-center text-white font-fraunces font-bold ">WE ARE CREATIVES</h2>
   <img className="mt-[40%] w-[40%]  " src={DownArrow}/>
      </div>  </div>
        </div>
    )
}