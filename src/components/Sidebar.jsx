

export default function Sidebar (){
const Sidebar = ({ active }) => {
    const closeSidebar = () => {
        active(false)
    }
}
return(
   <div sidebar={active} >
    <div onClick={closeSidebar}  className="bg-slate-400 fixed h-[100%] w-[300px]">    
     <h1>Home</h1>        
     <h1>Home</h1>  
     <h1>Home</h1>  
    </div>
   </div>
    )
}