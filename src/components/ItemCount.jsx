import { useEffect, useState } from 'react'

const ItemCount = ({ stock = 1, onAdd}) => {

    const [count, setCount] = useState(1);

    const sumar = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    };
    const restar = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    const añadirCarrito = () => {
        onAdd(count);
    }

    return (
        <div className='d-flex flex-column align-items-center'>
            <div className='d-flex gap-2 mb-2 align-items-center'>
                <button className='btn btn-danger' onClick={restar} disabled={count === 0} aria-label='Restar'>-</button>
                <span className='px-3'>{count}</span>
                <button className='btn btn-success' onClick={sumar} disabled={count >= stock} aria-label='Sumar'>+</button>
            </div>

            <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <button className='btn btn-primary' onClick={añadirCarrito} disabled={stock === 0 || count === 0}>Añadir al carrito</button>
            </div>
        </div>
    )
}
            export default ItemCount