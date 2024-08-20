import Facebook from '../img/Facebook.png'
import Instagram from '../img/Instagram.png'
import Twitter from '../img/Twitter.png'
import Pinterest from '../img/Pinterest.png'


export default function Foteer (){
    return(
        <div className=" bg-greenclaro grid justify-center ">
            <p className="mx-28 mt-16 mb-10">Sannyside</p>
            <div className="flex gap-20 mb-10">
            <p>About</p>
            <p>Services</p>
            <p>Projects</p>
            </div>
            <div className="flex justify-center gap-10 mb-28 mt-10">
            <img className='w-5' src={Facebook} />
            <img src={Instagram} />
            <img src={Twitter} />
            <img src={Pinterest} />

            </div>
        </div>
    )
}