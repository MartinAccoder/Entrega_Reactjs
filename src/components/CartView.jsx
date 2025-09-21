import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const CartView = () => {
    const {cart,removeItem,clear, totalPrice} = useContext(CartContext)
    const confirmacion= () =>{
        Swal.fire({
            position:'top-center',
            title:'Quiere borrar el carrito?',
            showDenyButton:true,
            denyButtonText:'NO',
            confirmButtonText:'SI'
        }).then((result)=> {
            if (result.isConfirmed){
                clear()
            }
        })
    }
    return (
        <div>
            <h1 style={{color:'white'}}>Tu Carrito</h1>
            <div className="contenedorCart">
                {
                    cart.map((compra) =>
                        <div key={compra.id} >
                            <img src={compra.img} alt={compra.name}/>
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
        <div className="cont botonCart">
            <button className="btn btn-danger" onClick={confirmacion}>Vaciar Carrito</button>
            <Link to='/checkout' className="btn btn-success">Comprar</Link>
        </div>
        </div>
    )
}
export default CartView;