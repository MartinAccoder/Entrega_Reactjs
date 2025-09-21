import { createContext, useState } from "react";

export const CartContext = createContext();

//////////////////////////////////************************///////////////

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    console.log(cart, "estado del carrito")
    // Agrega o actualiza un item en el carrito

    const addItem = (item, qty)=> {
        if (isInCart(item.id)) {
            const carritoActualizado = cart.map((prod) => {
                if (item.id === prod.id) {
                    return { ...prod, quiantity: prod.quantity + qty }
                }else{
                return prod
            }
            })

            setCart(carritoActualizado)
        }else{
            setCart([...cart, { ...item, quantity:qty }])
    }
    }

    // Elimina un item completamente
    const removeItem = (id) => {
        setCart(cart.filter((prod) => prod.id !== id))
    }

    // Limpia el carrito
    const clear = () => setCart([])

    // El item está en el carrito o no
    const isInCart = (id) => {
        return (cart.some((prod) => prod.id === id)
        )
    }

    const cartQuantity = () => {
        return cart.reduce((acc, prod) => acc + prod.quantity, 0)
    }

    const totalPrice = () => {
        return cart.reduce((acc, prod) => acc += (prod.quantity * prod.price), 0)
    }
    return (
        <CartContext.Provider value={{cart,addItem,removeItem,clear, cartQuantity, totalPrice}}>
            {children}
        </CartContext.Provider>
    )
}