import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar'; 
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';

// Componente principal de la aplicación

function App() {

  return (
    <>
        <NavBar />
        <ItemListContainer />
        <ItemCount />
    </>
  )
}
export default App
