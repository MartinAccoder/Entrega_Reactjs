import { useEffect, useState } from 'react';
import '../css/ItemListContainer.css';
import { getProductos } from '../Mock/AsyncMock';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';


const ItemListContainer = ({mensaje}) => {
    const  [data, setData] = useState([]);
    const {category} = useParams();

    useEffect(() => {
        getProductos()
        .then((res) => {
            if (category) {
                setData(res.filter((item) => item.category === category))

            } else {

                setData(res)
            }
        })
        .catch((err) => console.error(err))
    },[category]);

    console.log(data);
        return(
            <div className="ItemListContainer">
                <h1>{mensaje}</h1>
                <ItemList data={data} />
            </div>
        )
    }
    
export default ItemListContainer;