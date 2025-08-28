import React from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({detalle}) => {
    return(
        <div className="text-center">
            <h1>Detalle del producto: {detalle.name}</h1>
            <img src={detalle.img} alt={detalle.name} style={{width: '30%', height:'25%'}}/>
            <h2>{detalle.description}</h2>
            <p>${detalle.price},00</p>
            <p>Disponibles: {detalle.stock}</p>
            <ItemCount />
        </div>
    )
}

export default ItemDetail;