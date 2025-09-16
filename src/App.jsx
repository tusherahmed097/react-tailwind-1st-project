import './App.css'
import Banner from './components/banner/Banner'
import Blog from './components/blog/Blog'
import Header from './components/header/Header'
import Learn from './components/learnMore/Learn'
import Logo from './components/logo/logo'
import Nabvar from './components/navbar/Nabvar'
import Service from './components/services/Service'
import Imageslider from './components/sliders/Imageslider'
import Supplier from './components/supplier/Supplier'
import Supply from './components/supply/Supply'
import Map from './components/map/Map'
import Area from './components/area/Area'
import Footer from './components/footer/Footer'
import Footerbg from './components/footerBg/Footerbg'


function App() {


  return (
   <div>
      <Header></Header>
      <Nabvar></Nabvar>
      <Banner></Banner>
      <Supplier></Supplier>
      <Imageslider></Imageslider>
      <Service></Service>
      <Supply></Supply>
      <Learn></Learn>
      <Logo></Logo>
      <Blog></Blog>
      <Map></Map>
      <Area></Area>
      <Footer></Footer>
      <Footerbg></Footerbg>
   </div>
  )
}

export default App
