import react, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { getItem } from "../Mock/AsyncMock";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [detalle, setDetalle] = useState({})
    const {id} = useParams()

    useEffect(() => {
        getItem(id)
        .then((res) => setDetalle(res))
        .catch((err) => console.error(err))
    },[id])

    return(
        <div className= 'd-flex justify-content-center align-items-center m-4 p-4 border border-3 border-dark rounded-3'>
            <ItemDetail detalle ={detalle}/>
        </div>
    )
}

export default ItemDetailContainer;