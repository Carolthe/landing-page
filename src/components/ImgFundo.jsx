

export default function imgFundo (props){
    return(
    <div  className="relative grid justify-items-center  ">
        <img src={props.imgfundo} className='h-full w-full relative ' />
       <p  className="absolute bottom-48 font-fraunces text-3xl font-bold text-emerald-800 ">Graphic Desing</p>
       
       <p className="bottom-24 absolute mx-5 text-center"> Lorem is totam non quam, vel deleniti consequatur minus architecto laudantium inventore omnis eum soluta consectetur? Modi nobis enim consequatur!  </p>
   
   </div> 
   )
}