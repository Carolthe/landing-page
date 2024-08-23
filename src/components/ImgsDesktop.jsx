import MilkDesktop from '../img/MilkDesktop.png'
import LaDesktop from '../img/LaDesktop.png'
import ConeDesktop from '../img/ConeDesktop.png'
import AçucarDesktop from '../img/AçucarDesktop.png'

export default function ImgsDesktop (){
    return(
        <div className='w-80 hidden md:block'>
            
            <img src={LaDesktop} />
            <img src={ConeDesktop} />
            <img src={AçucarDesktop} />
            <img src={MilkDesktop} />
        </div>
    )
}