import './App.css'
import Desing from './components/Desing'
import Header from './components/Header'
import Information from './components/Information'
import FundoOvo from './img/FundoOvo.png'
import FundoCopo from './img/FundoCopo.png'
import Copo from './components/Copo'
import ImgFundo from './components/ImgFundo'
import Comentarios from './components/Comentarios'
import Graphic from './img/Graphic.png'
import Photography from './img/Photography.png'
import Imgs from './components/Imgs'
import Foteer from './components/Foteer'

function App() {
  return (

<>
<Header />
<Desing teste={FundoOvo}  />
<Information />
<Copo imgcopo={FundoCopo} />
<Information />
<ImgFundo imgfundo={Graphic} />
<ImgFundo imgfundo={Photography} />
<Comentarios />
<Comentarios />
<Comentarios />
<Imgs />
<Foteer />
</> 
  )
}

export default App
