import CartWidget from "./CartWidget";

import '../css/NavBar.css';
const NavBar = () => {
  return (
    <nav className="Nav-Container">
    <img alt="logo" src="../LogoPrincipal.png"/>
        <a href="" className="AnchorBar">Todos los Productos</a>
        <a href="" className="AnchorBar">Alarmas</a>
        <a href="" className="AnchorBar">Camaras</a>   
        <a href="" className="AnchorBar">Electricidad</a>   
        <a href="" className="AnchorBar">Herramientas</a>   
        <CartWidget/>   
    </nav>
  );
} 

export default NavBar;