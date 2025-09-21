import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar'; 
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import ErrorPage from './components/ErrorPage';
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart';
import Checkout from './components/Checkout';

// Componente principal de la aplicación

function App() {

  return (
    <BrowserRouter>
    <CartProvider>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/categoria/:category' element={<ItemListContainer />}/>
          <Route path='/item/:id' element={<ItemDetailContainer />}/>
          <Route path='*' element={<ErrorPage/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
        </Routes>
        </CartProvider>
        
    </BrowserRouter>
  )
}
export default App  
