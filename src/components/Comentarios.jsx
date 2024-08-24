export default function Comentarios (props){
    return(
        <div className="mt-10 grid justify-items-center text-center mx-8 md:hidden" >
            <div>
            <p className="text-xl  text-gray-400 tracking-widest font-bold font-fraunces mt-5  mb-10">{props.title}</p>
       </div> 
       <img src={props.perfil} className=" rounded-full w-20"/>
        <p className="mt-10 text-xl  text-gray-500 font-barlow-600 font-semibold">{props.paragraph}</p>
        <p className="text-2xl font-bold font-fraunces mt-[50px]">{props.name}</p>
        <p className=" mt-3 text-gray-300 text-lg font-semibold  ">{props.profession}</p>
        </div>
    )
}