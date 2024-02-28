import './App.css'
import {Routes , Route} from "react-router-dom"
import Home from './Pages/Home'
import Cart from "./Pages/Cart"
import Products from './Pages/Products'

function App() {


  return (
    <>
        
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={< Products />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>

    </>
  )
}

export default App
