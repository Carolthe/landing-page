export default function InformationDesktop (props){
    return(
        <div className= " w-[50%] hidden md:block ">
        <div className=" justify-items-center grid mt-44 ">
            <p className="text-4xl font-bold text-center mx-10 font-fraunces">{props.titleDesktop}</p>
            <p className=" text-center mt-8 mx-8 text-lg font-semibold font-barlow-600 text-gray-500 ">{props.paragraphDesktop}</p>
            <p className="mt-10  font-bold text-xl font-fraunces " >LEARN MORE</p>
        </div>
        </div>
    )
}