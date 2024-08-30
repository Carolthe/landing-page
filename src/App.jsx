import './App.css'
//Components import Mobile
import HeaderMobile from './components/HeaderMobile'
// import SidebarMobile from './components/SidebarMobile'
import InformationMobile from './components/InformationMobile'
import OvoMobile from './components/OvoMobile'
import CopoMobile from './components/CopoMobile'
import DesingImgMobile from './components/DesingImgMobile'
import ClientMobile from './components/ClientMobile'
import ImgsFoteerMobile from './components/ImgsFoteerMobile'
import FoteerMobile from './components/FoteerMobile'

//Imagens import Moblibe




//Componets import Desktop
import HeaderDesktop from './components/HeaderDesktop'
import InformationDesktop from './components/InformationDesktop'
import InformationCopoDesktop from './components/InformationCopoDesktop'
import DesingImgDesktop from './components/DesingImgDesktop'
import DesingTitleDesktop from './components/DesingTitleDesktop'
import ClientsDesktop from './components/ClientsDesktop'
import ImgsFoteerDesktop from './components/ImgsFoteerDesktop'


//Imagens import Desktop
import OvoOvoDesktop from './img/OvoOvoDesktop.png'
import FundoOvo from './img/FundoOvo.png'
import FundoCopo from './img/FundoCopo.png'
import DesktopCopo from './img/DesktopCopo.png'




import Graphic from './img/Graphic.png'
import Photography from './img/Photography.png'
import Perfil1 from './img/Perfil1.png'
import Perfil2 from './img/Perfil2.png'
import Perfil3 from './img/Perfil3.png'
import FoteerDesktop from './components/FoteerDesktop'


function App() {
  return (
<>
{/* Components Mobile */}
<HeaderMobile />
{/* <SidebarMobile /> */}
<OvoMobile ovoMobile={FundoOvo}  />
<InformationMobile className="" title="Transform your brand" 
paragraph="We are a full-service creative agency specializang in helping brands grow fast. Engage your clients through compelling visuals that do most of the markenting for you." />
<CopoMobile imgcopo={FundoCopo} />
<InformationMobile title="Stand out to the right audience" 
paragraph="Using a collaborative formula of designers, researchers, photographers, videographes, and copywriters, we'll bulind and extend your brand in digital places." />
<DesingImgMobile imgfundo={Graphic} 
titleFundo="Graphic Design"  
paragraph="Great desing makes you memorable. We deliver artwork that underscores you brand message and captures potential clients' attention." />
<DesingImgMobile imgfundo={Photography} 
titleFundo="Photography" 
paragraph="Increase your credicility by getting the most stunning, high-quality photos thay improve your business image." />
<ClientMobile perfil={Perfil1} title="CLIENT TESTIMONIALS" 
paragraph="We put our trust in Sunnyside and they dellivered, making sure our needs were met and seadlines were always hit." 
name="Emily R." 
profession="Marketing Director"  />
<ClientMobile perfil={Perfil2}  
paragraph="Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience." 
name="Thomas S." 
profession="Chief Operating Officer" />
<ClientMobile perfil={Perfil3} 
paragraph="Increble end result! Our sales increased over 400% when we worked with Sunnyside, Highly recommended!" 
name="Jennie F." 
profession="Business Owner" />
<ImgsFoteerMobile />
<FoteerMobile />
{/* Components Desktop */}
<HeaderDesktop />
<InformationDesktop ovoDesktop={OvoOvoDesktop} 
titleDesktop="Transform your brand " 
paragraphDesktop="We are a full-service creative agency specializang in helping brands grow fast. Engage your clients through compelling visuals that do most of the markenting for you."  />
<InformationCopoDesktop copoDesktopp={DesktopCopo} 
titleDesktopp="Stand out to the right audience" 
paragraphDesktopp="Using a collaborative formula of designers, researchers, photographers, videographes, and copywriters, we'll bulind and extend your brand in digital places." />
<DesingImgDesktop/>
<DesingTitleDesktop perfilDesktop={Perfil2} 
titleDesktop="CLIENT TESTIMONIALS" />
<div className='flex justify-center text-center '>
<ClientsDesktop perfilDesktop={Perfil1} 
paragraphDesktop="We put our trust in Sunnyside and they dellivered, making sure our needs were met and seadlines were always hit." 
nameDesktop="Emily R." 
professionDesktop="Marketing Director" />
<ClientsDesktop perfilDesktop={Perfil2} 
paragraphDesktop="Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience." 
nameDesktop="Thomas S." 
professionDesktop="Chief Operating Officer" />
<ClientsDesktop perfilDesktop={Perfil3} 
paragraphDesktop="Increble end result! Our sales increased over 400% when we worked with Sunnyside, Highly recommended!" 
nameDesktop="Jennie F." 
professionDesktop="Business Owner"  />
</div>
<ImgsFoteerDesktop />
<FoteerDesktop />
</> 
  )
}

export default App