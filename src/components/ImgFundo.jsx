

export default function imgFundo (props){
    return(
    <div  className="relative grid justify-items-center  ">
        <img src={props.imgfundo} className='h-full w-full relative md:block ' />
       
       <p  className="absolute bottom-48 font-fraunces text-3xl font-bold text-emerald-800 md:block ">Graphic Desing</p>
       
       <p className="bottom-24 absolute mx-8 text-center font-semibold font-barlow-600 text-emerald-900 text-lg top-[500px] md:block ">{props.paragraph} </p>
   
   </div> 
   )
}