import { useEffect, useState } from 'react';
import '../css/ItemListContainer.css';
import { getProductos, productos } from '../Mock/AsyncMock';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import LoaderComponent from './LoaderComponent';
import { collection, query, getDocs, where, addDoc } from 'firebase/firestore';
import { fs } from '../services/firebase';

const ItemListContainer = ({mensaje}) => {
    const  [data, setData] = useState([]);
    const [loader, setLoader] = useState(false);
    const {category} = useParams();

    useEffect(() => {
        setLoader(true)

        const producCollec = category 
        ? query(collection(fs, 'productos'), where('category', '==', category))
        : collection(fs, 'productos') 

        getDocs(producCollec)
        .then((res) => {
            console.log(res.docs)
            const list = res.docs.map((doc) => {
                return {
                    id: doc.id,
                    ...doc.data()
                }
        })
        setData(list)
        })
        .catch((error) => console.log(error)) 
        .finally(() => setLoader(false));      
    },[category]) 
        /*  ---funcion para el boton de subir productos---
        const subirData = () => {
            console.log("subiendo data a firebase")
            const collectionAagregar = collection(fs, 'productos')
            productos.map( (prod) => {
                addDoc(collectionAagregar, prod)})
        } */

        return(
            <>
            {/* ---boton para subir productos---
             <button onClick={subirData}>Subir a firebase</button> */}
            {loader 
                ? <LoaderComponent />
                :
                <div className="ItemListContainer">
                <h1>{mensaje}</h1>
                <ItemList data={data} />
            </div>
            }
            </>
        )
    }
    
export default ItemListContainer;