# Entrega_Reactjs

Pequeña tienda React + Firebase (Firestore). Este README explica cómo ejecutar el proyecto, la estructura básica y las piezas clave (carrito, contador, checkout).

## Tecnologías
- React (Vite)
- Firebase Firestore
- React Router
- CSS / Bootstrap (clases utilizadas)

## Librerías instaladas
Las librerías principales usadas en el proyecto (instalación típica):

- react
- react-dom
- react-router-dom
- firebase
- react-bootstrap
- bootstrap
- react-icons
- vite

## Requisitos
- Node.js (>= 16)
- npm
- Cuenta y proyecto en Firebase (Firestore configurado)

## Instalación (Windows)
- Clonar Repositorio
- Usar comando 'cd Entrega_Reactjs'
- Instalar dependencias:
    npm install
- Levantar servidor de desarrollo:
    npm run dev

## Estructura relevante
- src/
  - components/
    - ItemListContainer.jsx — carga listados desde Firestore
    - ItemDetail.jsx, ItemCount.jsx — detalle de producto y contador (respeta `stock`)
    - CartView.jsx — vista del carrito (mapea `cart`)
    - Checkout.jsx — formulario y creación de orden en Firestore
    - EmptyCart.jsx / CartEmpty.jsx — vista carrito vacío
  - context/
    - CartContext.jsx — lógica del carrito (addItem, removeItem, clear, isInCart, totalPrice, cartQuantity)
  - service(s)/ or services/
    - firebase.js — inicialización de Firebase y export de `fs`

Ajusta rutas si tu archivo de firebase está en `service` o `services`.

## API rápida del carrito (CartContext)
Funciones expuestas típicas (revisa tu `CartContext.jsx` para nombres exactos):
- cart — array de items del carrito
- addItem(item, quantity) — agrega o suma al item existente (respetando `stock`)
- removeItem(id) — elimina un producto por id
- clear() — vacía el carrito
- isInCart(id) — booleano si existe
- cartQuantity() — total de unidades
- totalPrice() — precio total


## Uso del contador (ItemCount)
- Props esperadas: `stock`, `initial`, `onAdd`.
- La UI del contador debe impedir que la cantidad supere `stock`. El botón "+" debe deshabilitarse en el tope y "-" en 0.
- `onAdd(unidades)` debe invocar `addItem(item, unidades)` desde ItemDetail.

## Checkout y Firestore
- Checkout crea una orden con:
  - comprador: objeto con name, lastname, address, email
  - compras: array `cart`
  - total: función `totalPrice()` (o `total()` según tu contexto)
  - date: `serverTimestamp()`
- Configura correctamente la importación de Firestore (`db` o `fs`) según tu archivo `service/firebase.js`.

Desarrollado por Martin 