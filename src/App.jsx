import './App.css'
import Desing from './components/Desing'
import Header from './components/Header'
import Information from './components/Information'
import FundoOvo from './img/FundoOvo.png'
import FundoCopo from './img/FundoCopo.png'

function App() {
  return (

<>
<Header />
<Desing teste={FundoOvo}  />
<Information />
<Desing teste={FundoCopo} />
</> 
  )
}

export default App
