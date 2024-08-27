export default function DesingTitleDesktop(props){
    return(
    <div className='flex justify-center'>
        <div className="hidden md:block mt-[-14%] ">
            <p className="text-xl  text-gray-400 tracking-widest font-bold font-fraunces mt-5  mb-10">{props.titleDesktop}</p>
        </div>
    </div>
    )
}