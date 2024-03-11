import './App.css'
import Navbar from './components/Navbar/Navbar/Navbar'
import ItemListContainer from './components/Navbar/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/Navbar/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar />
<Routes>
    <Route path='/' element= {     <ItemListContainer greeting={'¡Bienvenidos!'} />}  />
    <Route path='/category/:categoryId' element= {<ItemListContainer greeting={'Producto de la categoria: '} />}  />
    <Route path='/item/:itemId' element= {      <ItemDetailContainer />}        />
</Routes>   
    </BrowserRouter>
    </>
  )
}

export default App
