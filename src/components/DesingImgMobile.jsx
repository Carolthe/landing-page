export default function DesingImgMobile(props){
    return(
    <div  className="relative grid justify-items-center  md:hidden  ">
        <img src={props.imgfundo} className='h-full w-full relative ' />
       <p className="absolute bottom-[35%] font-fraunces text-3xl font-bold text-emerald-800 md:block ">{props.titleFundo}</p>
       <p className="absolute mx-8 text-center font-semibold font-barlow-600 text-emerald-900 text-lg top-[68%] md:block ">{props.paragraph} </p>
   
   </div> 
   )
}