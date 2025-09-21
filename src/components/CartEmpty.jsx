import React from "react";
import { Link } from "react-router-dom";

const EmptyCart =() => {
    return(
        <div className="d-flex flex-column justify-content-center align-items-center" style={{height:'80vh', backgroundColor:'#343a40', gap:'20px'}}> 
            <h2 style={{color:'white'}}>El carrito esta vacio</h2>
            <Link className="btn btn-dark" to='/'>Inicio</Link>
            </div>
    )
}       

export default EmptyCart;