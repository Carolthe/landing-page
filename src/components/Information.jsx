export default function Information (props){
    return(
        <div className="grid justify-items-center mt-20 mb-20">
            <p className="text-4xl font-bold text-center mx-10 font-fraunces">{props.title}</p>
            <p className=" text-center mt-8 mx-8 text-lg font-semibold font-barlow-600 text-gray-500 ">{props.paragraph}</p>
            <p className="mt-10  font-bold text-xl font-fraunces " >LEARN MORE</p>
        </div>
    )
}