import CartWidget from "./CartWidget";
import '../css/NavBar.css';
import { NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <nav className="Nav-Container">
    <NavLink to='/'><img alt="logo" src="../LogoPrincipal.png"/>
    </NavLink>
        <NavLink to='/' className="AnchorBar">Todos los Productos
        </NavLink>
        <NavLink to='/categoria/alarmas' className="AnchorBar">Sistemas de Alarmas
        </NavLink>
        <NavLink to='/categoria/camaras' className="AnchorBar">Cámaras de Seguridad
          </NavLink>     
        <NavLink to='/categoria/herramientas' className="AnchorBar">Herramientas
          </NavLink>   
        <CartWidget/>   
    </nav>
  );
} 

export default NavBar;