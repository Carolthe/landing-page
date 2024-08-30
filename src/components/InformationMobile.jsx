export default function InformationMobile (props){
    return(
        
        <div className="grid justify-items-center mt-[20%] mb-[20%] md:hidden">
            <p className="text-4xl font-bold text-center font-fraunces mx-[7%]">{props.title}</p>
            <p className=" text-center mt-8 mx-[8%] text-lg font-semibold font-barlow-600 text-gray-500 ">{props.paragraph}</p>
            <p className="mt-[12%]  font-bold text-xl font-fraunces " >LEARN MORE</p>
        </div>
    )
}