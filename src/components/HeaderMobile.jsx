import { useState } from "react"
import Sidebar from '../img/Sidebar.png'

export default function HeaderMobile (){
    const [sidebar, setSidebar]= useState (false)
    const showSidebar = ()=> setSidebar(!sidebar)
    return(
        <div  className="md:hidden">
        <div className="h-screen bg-cover bg-center bg-[url('./img/HeaderMobileFundo.png')]">
    <div className="flex justify-between p-5">
    <h1 className="text-white text-[150%] font-bold font-fraunces ">sunnyside</h1>
    <img src={Sidebar} className="mr-[2%]" onClick={showSidebar} />
   </div> 
   <h2 className="mt-28 text-[270%]  text-center text-white font-fraunces font-bold ">WE ARE CREATIVES</h2>
       </div>
        </div>
    )
}