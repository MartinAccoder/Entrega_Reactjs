import { useState } from 'react';

const ItemCount = () => {

    const [count, setCount] = useState(0)

    const sumar = () => setCount(count + 1)
    const restar = () => setCount(prev => Math.max(0, prev - 1))

    return (
        <div className='d-flex flex-column align-items-center'>
            <h3>{count}</h3>

            <div className='d-flex gap-2 mb-3'>
                <button className='btn btn-danger' onClick={restar} disabled={count === 0}>-</button>
                <button className='btn btn-success' onClick={sumar}>+</button>
            </div>

            <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <button className='btn btn-primary' disabled={count === 0}>Agregar al carrito</button>
            </div>
        </div>
    )
}
export default ItemCount