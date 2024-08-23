export default function DesktopFundo (props){
    return(
        <div className="hidden md:block relative">
        <img src={props.imgFundoDesktop}  className='relative w-[900px] '/> 
        <div className="flex justify-center ">
        <p className="absolute bottom-52 font-fraunces text-3xl font-bold text-emerald-800 ">{props.titleFundoDesktop}</p>
        <p className="absolute bottom-32 text-center font-semibold font-barlow-600 text-emerald-900 text-lg " >{props.paragraphFundoDesktop}</p>
        </div>
        </div>
    )
}