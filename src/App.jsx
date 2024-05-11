import HeaderMain from './components/HeaderMain'
import MenuCatalogo from './components/MenuCatalogo'
import PortadaCatalogo from './components/PortadaCatalogo'
import BestSeller from './components/BestSeller'
import MostWanted from './components/MostWanted'
import Product from './components/Product'


function App() {
  return (
    <>
      <HeaderMain></HeaderMain>
      <MenuCatalogo></MenuCatalogo>
      <PortadaCatalogo></PortadaCatalogo>
      <BestSeller></BestSeller>
      <MostWanted></MostWanted>
      <Product></Product>
    </>
  )
}

export default App
