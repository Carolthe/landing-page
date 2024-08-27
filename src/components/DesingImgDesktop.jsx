export default function DesingImgDesktop (){
    return(  
    <div className="hidden md:flex mb-[20%]">
        <div className="h-[120%] w-[66.6%] bg-cover bg-center bg-[url('./img/CerejaDesktop.png')] content-center"> 
        <div className="justify-items-center grid mt-[40%] mb-[0.4%] ">
        <p className=" font-fraunces text-[180%] font-bold text-emerald-800 ">Graphic Desingn</p>
        <p className=" text-center font-semibold font-barlow-600 text-emerald-900 text-[120%] mx-[5%] my-[5%] " >Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients' attention.</p>
        </div>
        </div>
        <div className=" h-[120%] w-[66.6%] bg-cover bg-center bg-[url('./img/LaranjaDesktop.png')] content-center"> 
        <div className="justify-items-center grid mt-[40%] mb-[0.4%]">
        <p className=" font-fraunces text-[180%] font-bold text-emerald-800 ">Photography</p>
        <p className=" text-center font-semibold font-barlow-600 text-emerald-900 text-[120%] mx-[5%] my-[5%]" >Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</p>
        </div>
        </div>
    </div>
    )
}