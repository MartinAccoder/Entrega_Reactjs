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
            <button onClick={sumar}>+</button>
            <button onClick={restar}>-</button>
        </div>
    )
}
export default ItemCount