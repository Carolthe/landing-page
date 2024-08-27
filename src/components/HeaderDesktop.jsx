export default function HeaderDesktop (){
    return(
    <div  className="hidden md:block">
        <div className="h-screen bg-cover bg-center bg-[url('./img/HeaderFundo.png')]">
     <div className="flex justify-end justify-between ">
        <div>
    <h1 className="text-white text-[160%] font-bold font-fraunces p-8">sunnyside</h1>
    </div>
    <div className="flex justify-center items-center  gap-5 p-8 font-barlow text-white font-medium ">
    <p className="place-items-center hover:bg-opacity-35 hover:bg-white hover:rounded-full w-24
     h-9 flex justify-center">About</p>
    <p className="place-items-center hover:bg-opacity-35 hover:bg-white hover:rounded-full w-24 h-9 flex justify-center">Services</p>
    <p className="place-items-center hover:bg-opacity-35 hover:bg-white hover:rounded-full w-24 h-9 flex justify-center">Projects</p>
    <p className="place-items-center hover:bg-opacity-35 hover:bg-white hover:rounded-full w-24 h-9 flex justify-center">Contact</p>
    </div>
    </div>
    <h2 className="mt-[4%] text-[270%]  text-center text-white font-fraunces font-bold ">WE ARE CREATIVES</h2>
        </div>
    </div>
    )
}