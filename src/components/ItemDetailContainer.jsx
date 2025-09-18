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
        <div className='d-flex justify-content-center align-items-center m-4'>
            <div className='bg-white border rounded-3 p-3' style={{ maxWidth: '900px', width: '100%', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}>
                <ItemDetail detalle={detalle} />
            </div>
        </div>
    )
}

export default ItemDetailContainer;