import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
//agregar al spam unidades contador funcional para sumar y restar unidades
const CartView = () => {
    const {cart,removeItem,clear, totalPrice} = useContext(CartContext)
    return (
        <div>
            <h1 style={{color:'white'}}>Tu Carrito</h1>
            <div>
                {
                    cart.map((compra) =>
                        <div key={compra.id} style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', border: '1px solid black', margin: '10px', background: 'white' }}>
                            <img src={compra.img} alt={compra.name} style={{ width:'10rem'}}/>
                            <h2>{compra.name}</h2>
                            <h2>${compra.price}</h2>
                            <h2>Unidades: {compra.quantity}</h2> 
                            <h2>Total ${compra.quantity * compra.price}.00</h2>
                            <button className="btn btn-secondary" onClick={() => removeItem(compra.id)}>X</button>
                        </div>)
                }
            </div>
        {}
        <h1 style={{color:'white'}}> Total a pagar: ${totalPrice()}</h1>
        <div style={{display:'flex', justifyContent:'space-between', alignContent:'center'}}>
            <button className="btn btn-danger" onClick={()=> clear()}>Vaciar Carrito</button>
            <Link to='/checkout' className="btn btn-dark">Comprar</Link>
        </div>
        </div>
    )
}
export default CartView;