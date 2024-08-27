import './App.css'
//Components import Mobile
import HeaderMobile from './components/HeaderMobile'
import InformationMobile from './components/InformationMobile'
import OvoMobile from './components/OvoMobile'

//Imagens import Moblibe
import CopoMobile from './components/CopoMobile'
import ImgFundoMobile from './components/ImgFundoMobile'

//Componets import Desktop
import HeaderDesktop from './components/HeaderDesktop'
import DesktopFundo from './components/DesktopFundo'
import InformationDesktop from './components/InformationDesktop'
import InformationCopoDesktop from './components/InformationCopoDesktop'
import ImgsDesktop from './components/ImgsDesktop'
import ComentariosDesktop from './components/ComentariosDesktop'
import TitleComentariosDesktop from './components/TitleComentariosDesktop'

//Imagens import Desktop
import OvoOvoDesktop from './img/OvoOvoDesktop.png'
import FundoOvo from './img/FundoOvo.png'
import FundoCopo from './img/FundoCopo.png'
import DesktopCopo from './img/DesktopCopo.png'



import Comentarios from './components/Comentarios'
import Graphic from './img/Graphic.png'
import Photography from './img/Photography.png'
import Imgs from './components/Imgs'
import Foteer from './components/Foteer'
import Perfil1 from './img/Perfil1.png'
import Perfil2 from './img/Perfil2.png'
import Perfil3 from './img/Perfil3.png'










function App() {
  return (
<>
                                {/* Components Mobile */}
<HeaderMobile />
<OvoMobile ovoMobile={FundoOvo}  />
<InformationMobile className="" title="Transform your brand" paragraph="We are a full-service creative agency specializang in helping brands grow fast. Engage your clients through compelling visuals that do most of the markenting for you." />
<CopoMobile imgcopo={FundoCopo} />
<InformationMobile title="Stand out to the right audience" paragraph="Using a collaborative formula of designers, researchers, photographers, videographes, and copywriters, we'll bulind and extend your brand in digital places." />


                                {/* Components Desktop */}
<HeaderDesktop />
<InformationDesktop ovoDesktop={OvoOvoDesktop} titleDesktop="Transform your brand " paragraphDesktop="We are a full-service creative agency specializang in helping brands grow fast. Engage your clients through compelling visuals that do most of the markenting for you."  />
<InformationCopoDesktop copoDesktopp={DesktopCopo} titleDesktopp="Stand out to the right audience" paragraphDesktopp="Using a collaborative formula of designers, researchers, photographers, videographes, and copywriters, we'll bulind and extend your brand in digital places." />




<ImgFundoMobile imgfundo={Graphic} titleFundo="Graphic Design"  paragraph="Great desing makes you memorable. We deliver artwork that underscores you brand message and captures potential clients' attention." />
<ImgFundoMobile imgfundo={Photography} titleFundo="Photography" paragraph="Increase your credicility by getting the most stunning, high-quality photos thay improve your business image." />
<div className='md:flex '>
<DesktopFundo />
</div>
<div className=''>
<Comentarios perfil={Perfil1} title="CLIENT TESTIMONIALS" paragraph="We put our trust in Sunnyside and they dellivered, making sure our needs were met and seadlines were always hit." name="Emily R." profession="Marketing Director"  />
<Comentarios perfil={Perfil2}  paragraph="Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience." name="Thomas S." profession="Chief Operating Officer" />
<Comentarios perfil={Perfil3} paragraph="Increble end result! Our sales increased over 400% when we worked with Sunnyside, Highly recommended!" name="Jennie F." profession="Business Owner" />
</div>
<div className='flex justify-center'>
  <TitleComentariosDesktop perfilDesktop={Perfil2} titleDesktop="CLIENT TESTIMONIALS" />
</div>
<div className='flex justify-center text-center '>
  <ComentariosDesktop perfilDesktop={Perfil1} paragraphDesktop="We put our trust in Sunnyside and they dellivered, making sure our needs were met and seadlines were always hit." nameDesktop="Emily R." professionDesktop="Marketing Director" />
  <ComentariosDesktop perfilDesktop={Perfil2} paragraphDesktop="Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience." nameDesktop="Thomas S." professionDesktop="Chief Operating Officer" />
  <ComentariosDesktop perfilDesktop={Perfil3} paragraphDesktop="Increble end result! Our sales increased over 400% when we worked with Sunnyside, Highly recommended!" nameDesktop="Jennie F." professionDesktop="Business Owner"  />
</div>
<Imgs />
<ImgsDesktop />
<Foteer />
</> 
  )
}

export default App
