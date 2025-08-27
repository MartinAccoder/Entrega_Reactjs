const productos = [
    {
        id:1,
        name:" ",
        price: 1,
        img:" ",
        stock: 1, 
        category:" "},
    {
        id:2,
        name:" ",
        price: 1,
        img:" ",
        stock: 1, 
        category:" "},
    {
        id:3,
        name:" ",
        price: 1,
        img:" ",
        stock: 1, 
        category:" "},
    {
        id:4,
        name:" ",
        price: 1,
        img:" ",
        stock: 1, 
        category:" "},
    {
        id:5,
        name:" ",
        price: 1,
        img:" ",
        stock: 1, 
        category:" "},
    {
        id:6,
        name:" ",
        price: 1,
        img:" ",
        stock: 1, 
        category:" "},
    {
        id:7,
        name:" ",
        price: 1,
        img:" ",
        stock: 1, 
        category:" "},
    {
        id:8,
        name:" ",
        price: 1,
        img:" ",
        stock: 1, 
        category:" "},
    {
        id:9,
        name:" ",
        price: 1,
        img:" ",
        stock: 1, 
        category:" "},
    {
        id:10,
        name:" ",
        price: 1,
        img:" ",
        stock: 1, 
        category:" "},
    {
        id:11,
        name:" ",
        price: 1,
        img:" ",
        stock: 1, 
        category:" "},
    {
        id:12,
        name:" ",
        price: 1,
        img:" ",
        stock: 1, 
        category:" "},
    {
        id:13,
        name:" ",
        price: 1,
        img:" ",
        stock: 1, 
        category:" "},
    {
        id:14,
        name:" ",
        price: 1,
        img:" ",
        stock: 1, 
        category:" "},
]

//promesa de los productos

let error = false
export const getProductos = () => {
    return new Promise ((resolve, reject) => {
        setTimeout (()=>{
            if (error) {
                reject('Sin Stock')
            } else {
                resolve(productos)
            }
        }, 2000)
    })
}

export default getProductos