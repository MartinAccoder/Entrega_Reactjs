import React from "react";
import Item from "./Item";

const ItemList = ({data}) => {
    return(
        <div className='d-flex justify-content-between flex-wrap align-items-center gap-2' >
            {data.map((productos)=> <Item key={productos.id} productos={productos}/>)}
        </div>
    )
}

export default ItemList