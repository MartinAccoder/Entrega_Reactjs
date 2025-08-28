const productos = [
    {
        id:'01',
        name:"Ezviz c6n",
        price: 92000,
        description: 'lorem lorem lorem',
        img:"https://i.postimg.cc/vTLXjsbf/c6n.png",
        stock: 15, 
        category:"camaras"},
    {
        id:'02',
        name:"Garnet Innova",
        price: 36700,
        description: 'lorem lorem lorem',
        img:"https://i.postimg.cc/Dy6BPnCK/Paneles-Inalambricos-Hub.png",
        stock: 5, 
        category:"alarmas"},
    {
        id:'03',
        name:"Taladro Atornillador Ingoc",
        price: 19200,
        description: 'lorem lorem lorem',
        img:"https://i.postimg.cc/hGkrtjGV/Taladro-Atornillador.jpg",
        stock: 7, 
        category:"herramientas"},
    {
        id:'04',
        name:"Cable tipo taller",
        price: 1920,
        description: 'lorem lorem lorem',
        img:"https://i.postimg.cc/VNrgwMzY/Tipo-Taller.webp",
        stock: 7, 
        category:"electricidad"},
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

export const getItem = (id) => {
    return new Promise ((resolve) => {
        setTimeout (()=>{
            let detalle = productos.find((item) => item.id === id)
            resolve(detalle)
        }, 2000)
    })
}