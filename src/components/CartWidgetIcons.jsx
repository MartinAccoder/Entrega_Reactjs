import React, { useContext } from "react";
import { GisShoppingCart } from "react-icons/gi";
import { Badge } from "react-bootstrap";
import { CartContext } from "../context/CartContext";

const CartWidgetIcons = () => {
    const {cart} = useContext(CartContext)
    console.log(cart, "context")
    return (
        <div >
            <GisShoppingCart color='white' size={30} />
            <Badge bg="danger"></Badge>
        </div>
        )
}

export default CartWidgetIcons;