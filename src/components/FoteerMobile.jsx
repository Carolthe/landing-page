import Facebook from '../img/Facebook.png'
import Instagram from '../img/Instagram.png'
import Twitter from '../img/Twitter.png'
import Pinterest from '../img/Pinterest.png'


export default function FoteerMobile (){
    return(
        <div className=" bg-greenclaro grid justify-center md:hidden ">
            <p className="mx-28 mt-16 mb-10 text-4xl font-bold text-emerald-700 font-barlow-600 ">sunnyside</p>
            <div className="flex gap-14 mb-10 justify-center font-semibold text-lg text-green font-barlow-600">
            <p>About</p>
            <p>Services</p>
            <p>Projects</p>
            </div>
            <div className="flex justify-center gap-10 mb-28 mt-8">
            <img className='w-5' src={Facebook} />
            <img src={Instagram} />
            <img src={Twitter} />
            <img src={Pinterest} />

            </div>
        </div>
    )
}