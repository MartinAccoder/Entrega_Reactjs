import { useEffect, useState } from 'react';
import '../css/ItemListContainer.css';
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

        return(
            <>
            
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