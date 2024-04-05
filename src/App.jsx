import './App.css'
import ItemListContainer from './components/Navbar/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/Navbar/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './components/Navbar/context/CartContext'
import CartView from './components/Navbar/cartView/cartView'
import Navbar from './components/Navbar/Navbar/Navbar'
import Checkout from './components/Navbar/Checkout/Checkout'



const App = () => {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<ItemListContainer greeting={'¡Bienvenidos!'}/>}/>
            <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Productos filtrados'}/>}/>
            <Route path='/item/:itemId' element={<ItemDetailContainer />}/>
            <Route path='/cart' element={<CartView/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  )
}

export default App
