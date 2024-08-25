export default function ComentariosDesktop (props){
    return(
    
    <div className=" w-[28%] p-[2%] mb-[9%] mt-[1%] hidden md:block  ">
       <img src={props.perfilDesktop} className=" rounded-full w-20 mx-[40%] "/>
        <p className="mt-10 text-xl  text-gray-500 font-barlow-600 font-semibold">{props.paragraphDesktop}</p>
        <p className="text-2xl font-bold font-fraunces mt-[50px]">{props.nameDesktop}</p>
        <p className=" mt-3 text-gray-300 text-lg font-semibold  ">{props.professionDesktop}</p>
    </div>   
    )
}