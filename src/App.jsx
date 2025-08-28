import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar'; 
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import ErrorPage from './components/ErrorPage';


// Componente principal de la aplicación

function App() {

  return (
    <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer mensaje='Bienvenidos a nuestra tienda'/>}/>
          <Route path='/categoria/:category' element={<ItemListContainer mensaje='Bienvenidos a nuestra tienda'/>}/>
          <Route path='/item/:id' element={<ItemDetailContainer />}/>
          <Route path='*' element={<ErrorPage/>}/>
        </Routes>
        
        
    </BrowserRouter>
  )
}
export default App  
