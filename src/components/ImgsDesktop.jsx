import MilkDesktop from '../img/MilkDesktop.png'
import LaDesktop from '../img/LaDesktop.png'
import ConeDesktop from '../img/ConeDesktop.png'
import AçucarDesktop from '../img/AçucarDesktop.png'

export default function ImgsDesktop (){
    return(
        <div className='flex w-80'>
            
            <img src={LaDesktop} />
            <img src={ConeDesktop} />
            <img src={AçucarDesktop} />
            <img src={MilkDesktop} />
        </div>
    )
}