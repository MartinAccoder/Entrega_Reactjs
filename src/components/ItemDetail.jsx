import React, {useContext, useState} from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "../context/CartContext";
import {Link} from "react-router-dom";


const ItemDetail = ({detalle}) => {

    const [purchased, setPurchased] = useState(false);

    const {addItem} = useContext(CartContext)

    const onAdd = (cantidad) => {
        setPurchased(true);
        addItem(detalle, cantidad);
        console.log(detalle, cantidad);
    }

    return(
        <div className="text-center border p-4 m-4 bg-light ">
            <h1>{detalle.name}</h1>
            <img src={detalle.img} alt={detalle.name} style={{width: '30%', height:'25%'}}/>
            <h2>{detalle.description}</h2>
            <p>${detalle.price},00</p>
            <p>Disponibles: {detalle.stock}</p>
            {purchased ? <Link to='/cart' className="btn btn-dark">Ir al carrito</Link> : <ItemCount stock={detalle.stock} onAdd={onAdd}/>}
        </div>
    )
}

export default ItemDetail;