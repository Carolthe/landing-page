// import { Container } from "postcss"
import { useState } from "react"

export default function SidebarMobile (){

    const [sidebar, setSidebar]= useState (false)
    const showSidebar = ()=> setSidebar(!sidebar)
    return(
        <div className="md:hidden">
            
                <img className="w-5 bg-white" onClick={showSidebar} src="file:///C:/Users/carol/Downloads/sunnyside-agency-landing-page-main%2010/sunnyside-agency-landing-page-main/images/icon-hamburger.svg" />
            
        </div>
    )
}