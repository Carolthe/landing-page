import { useState } from "react"
import SidebarMobile from '../img/SidebarMobile.png'
import DownArrow from '../img/DownArrow.png'
import ButtonSidebarMobile from "./ButtonSidebarMobile"
import XfecharMobile from '../img/XfecharMobile.png'

export default function HeaderMobile (){
    const [sidebarOpen, setSidebarOpen]= useState (false)

    return(
        <div  className="md:hidden">
        <div className="h-screen bg-cover bg-center bg-[url('./img/HeaderMobileFundo.png')]">
    <div className="flex justify-between p-5">
    <h1 className="text-white text-[150%] font-bold font-fraunces ">sunnyside</h1>
    <div className={` top-0 left-0 ${sidebarOpen ? 'w-[220px] rounded-lg h-[340px] bg-white '
     : 'w-0'}transition-width duration-300 `}>
    <a onClick={() => setSidebarOpen(!sidebarOpen)}>
    <img src={sidebarOpen ? XfecharMobile : SidebarMobile} className="w-6 mt-3 ml-2 mr-[2%] flex justify-end "/>
     </a>    
    {sidebarOpen && (
    <div className="">
    <ButtonSidebarMobile menu="About" />
    <ButtonSidebarMobile menu="Services" />
    <ButtonSidebarMobile menu="Projects" />
    <ButtonSidebarMobile menu="Contact" />
    </div>
    )}
  </div>
   </div> 
  <div className="grid justify-items-center absolute inset-12">
   <h2 className="my-40 text-[270%]  text-center text-white font-fraunces font-bold  ">WE ARE CREATIVES</h2>
   <img className="mb-52  w-[40%]  " src={DownArrow}/>
      </div>
        </div>
        </div>
    )
}