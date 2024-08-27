import Milk from '../img/Milk.png'
import Orange from '../img/Orange.png'
import Cone from '../img/Cone.png'
import SugarCubes from '../img/SugarCubes.png'

export default function ImgsFoteerMobile () {
    return(
        <div className='md:hidden'>
        <div className='grid-cols-2 grid mt-[20%] '>
        <img src={Milk} />
        <img src={Orange} />
        <img src={Cone} />
        <img src={SugarCubes} />
        </div></div>
    )
}