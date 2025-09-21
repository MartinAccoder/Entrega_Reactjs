import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import EmptyCart from "./CartEmpty";
import CartView from "./CartView"; 
import '../css/Cart.css'


const Cart =() => {
    const {cart} = useContext(CartContext)
    console.log(cart, "contextCartContainer")
    return(
        <>
        {
            !cart.length ? <EmptyCart/> : <CartView/>
        }
</>
    )
}

export default Cart;