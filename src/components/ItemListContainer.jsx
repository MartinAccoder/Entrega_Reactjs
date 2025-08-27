import { useEffect, useState } from 'react';
import '../css/ItemListContainer.css';
import { getProductos } from '../Mock/AsyncMock';


const ItemListContainer = ({mensaje}) => {
    const  [data, setData] = useState([]);

    useEffect(() => {
        getProductos()
        .then((res) => setData(res))
        .catch((err) => console.log(err, 'err'))
    },[]);

    console.log(data);
        return(
            <div>
                <h1>{mensaje}</h1>
            </div>
        )
    }
    
export default ItemListContainer