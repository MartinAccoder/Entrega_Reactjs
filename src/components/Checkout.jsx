import React, { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { fs } from "../services/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import EmptyCart from "./CartEmpty";
import { Link } from "react-router-dom";
import '../css/FormStyle.css';
import Swal from "sweetalert2";


const Checkout = () => {
    const  [buyer, setBuyer]  = useState({ })
    const  [validMail, setValidMail]  = useState('')
    const  [orderId, setOrderId]  = useState(null)

    const { cart, totalPrice, clear } = useContext(CartContext)

    const buyerData = (e) => {
        setBuyer(
            {...buyer,
            [e.target.name]: e.target.value}
        )
    }

    const compraTerminada = (e) => {
        console.log(e)
        e.preventDefault()

        if (!buyer.name || !buyer.lastname || !buyer.address || !buyer.email) {
            Swal.fire({
                position:'top',
                title:'Complete los campos',
                time:1500,
                icon:'warning'
            })
        } else if (buyer.email !== validMail) {
            Swal.fire({
                position:'top',
                time:1500,
                title:'Los emails no coinciden',
                icon:'error'
            })
        } else {
            let order = {
                coprador: buyer,
                compra: cart,
                total: totalPrice(),
                date: serverTimestamp()
            }
        const venta = collection(fs, 'compras')
        addDoc(venta, order)
            .then((res) => {
                setOrderId(res.id)
                clear()
            })
            .catch((error) => console.log(error))
        }
    }
    if (!cart.length && !orderId) {
        return <EmptyCart />
    }
    
    return (
        <>{
            orderId ? <div className="text-center border p-4 m-4 bg-light ">
                <h1>Realizaste tu compra con exito!</h1>
                <h2>Compra numero :{orderId}</h2>
                <h3> Gracias por confiar en nosotros!</h3>
                <Link className="btn btn-dark" to='/'>Volver al Inicio</Link>
            </div>
                :
                <div className="formu">
                    <h1 className="formul">Completar el formulario</h1>
                    <form onSubmit={compraTerminada} >
                        <input placeholder='Ingrese su nombre' name='name' className="fomr-control" type="text" onChange={buyerData}></input>
                        <input placeholder='Ingrese su apellido' name='lastname' className="fomr-control" type="text" onChange={buyerData} />
                        <input placeholder='Ingrese su direccion' name='address' className="fomr-control" type="text" onChange={buyerData} />
                        <input placeholder='Ingrese su email' name='email' className="fomr-control" type="email" onChange={buyerData} />
                        <input placeholder='Valide su correo' name='second-email' className="fomr-control" type="email" onChange={(e) => setValidMail(e.target.value)} />

                        <button className="btn btn-primary" type='summit'>Enviar</button>
                    </form>
                </div>
        }</>
    )
}




export default Checkout;