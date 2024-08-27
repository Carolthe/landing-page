export default function InformationCopoDesktop (props){
    return(
    <div className= "hidden md:flex">
        <img src={props.copoDesktopp} className="w-[86.1%] " />
        <div className=" justify-items-center grid mt-[10%] w-[86.1%] ">
        <p className="text-[220%] font-bold text-center mx-[7%] font-fraunces">{props.titleDesktopp}</p>
        <p className=" text-center mx-[7%] text-[120%] font-semibold font-barlow-600 text-gray-500 ">{props.paragraphDesktopp}</p>
        <p className=" font-bold text-[130%] mb-[20%] font-fraunces " >LEARN MORE</p>
        </div>
    </div>
    )
}