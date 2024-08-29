export default function ButtonSidebarMobile (props){
    return(
        <div className="grid  mx-14 ">
     <button className="hover:bg-yellow-300 w-28 h-12 rounded-full my-2 text-slate-400 ">
      {props.menu}
     </button>
    
        </div>
    )
}