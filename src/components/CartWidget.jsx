import React, { useContext } from 'react'
import Badge from 'react-bootstrap/Badge'
import { HiMiniShoppingCart } from "react-icons/hi2";
import  { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    const {cart, cartQuantity} = useContext(CartContext)
    console.log(cart, "context")
    return (
        <div>
            <Link to='/cart'><HiMiniShoppingCart size='2.5rem' color='white'/></Link>
            {cart.length >0 && <Badge bg="info">{cartQuantity()}</Badge>}
            </div>

    )
}

export default CartWidget;