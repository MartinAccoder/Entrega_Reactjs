import react, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { getItem } from "../Mock/AsyncMock";
import { useParams } from "react-router-dom";
import LoaderComponent from "./LoaderComponent";
import { doc, getDoc } from "firebase/firestore";
import { fs } from "../services/firebase";
import { Link } from "react-router-dom";

const ItemDetailContainer = () => {
    const [detalle, setDetalle] = useState({})
    const [cargado, setCargando] = useState(false)
    const [invalid, setInvalid] = useState(null)
    const {id} = useParams()

    useEffect(() => {
        setCargando(true)
        const docRef = doc(fs, 'productos', id)
        getDoc(docRef)
        .then((res) => {
            if(res.exists()){
                setDetalle({
                    id: res.id,
                    ...res.data()
                })
            } else {
                console.log('No existe el producto')
                setInvalid(true)
            }
        })
        .catch((error) => console.log(error))
        .finally(() => setCargando(false))
    }, [id])

    if (invalid) {
        return (
            <div className="text-center border p-4 m-4 bg-light ">
                <h2>Producto no encontrado</h2>
                <Link className="btn btn-dark" to='/'>Inicio</Link>
            </div>
        )
    }
    return(
        cargado ? 
            <LoaderComponent />  : <ItemDetail detalle={detalle}/>
            
    )
}

export default ItemDetailContainer;