export default function DesktopFundo (props){
    return(
        
        <div className="hidden md:block relative bottom-[222px]">
        <img src={props.imgFundoDesktop}  className='relative w-[800px]'/> 
        <div className="flex justify-center ">
        <p className="absolute bottom-[38%] font-fraunces text-3xl font-bold text-emerald-800 ">{props.titleFundoDesktop}</p>
        <p className="absolute bottom-[22%] text-center font-semibold font-barlow-600 text-emerald-900 text-lg mx-[5%]" >{props.paragraphFundoDesktop}</p>
        </div>
        </div>
    )
}