import { useState } from 'react';

const ItemCount = () => {

    const [count, setCount] = useState(0)

    const sumar = () => {
        setCount (count + 1)
    }
    const restar = () => {
        setCount( count - 1)
    }
    return (
        <div>
            <h2>Contador</h2>
            <h3>{count}</h3>
            <button className='btn btn-danger' onClick={restar}>-</button>
            <button className='btn btn-success' onClick={sumar}>+</button>
        </div>
    )
}
export default ItemCount