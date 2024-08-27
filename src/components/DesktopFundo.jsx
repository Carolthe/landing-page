export default function DesktopFundo (){
    return(
        
    <div className="hidden md:flex ">
        <div className="h-[76%] w-[60%] bg-cover bg-center bg-[url('./img/CerejaDesktop.png')] content-center"> 
        <div className="justify-items-center grid mt-[40%] mb-[0.4%] ">
        <p className=" font-fraunces text-3xl font-bold text-emerald-800 ">Graphic Desingn</p>
        <p className=" text-center font-semibold font-barlow-600 text-emerald-900 text-lg mx-[5%] my-[5%] " >Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients' attention.</p>
        </div>
        </div>
        <div className="h-screen bg-cover bg-center bg-[url('./img/LaranjaDesktop.png')]"> 
        <div className="">
        <p className=" font-fraunces text-3xl font-bold text-emerald-800 "></p>
        <p className=" text-center font-semibold font-barlow-600 text-emerald-900 text-lg mx-[5%]" ></p>
        </div>
        </div>
    </div>
    )
}