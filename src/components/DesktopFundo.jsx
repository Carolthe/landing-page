export default function DesktopFundo (props){
    return(
        <div className="hidden md:block relative">
        <img src={props.imgFundoDesktop}  className='relative '/> 
        <p className="absolute bottom-52 ">{props.titleFundoDesktop}</p>
        <p className="absolute bottom-32" >{props.paragraphFundoDesktop}</p>
        </div>
    )
}