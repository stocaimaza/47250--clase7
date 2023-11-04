const misProductos = [
    { id: "1", nombre: "Yerba", stock:10, precio: 500, img: "../img/yerba.jpg", idCat: "2" },
    { id: "2", nombre: "Fideos", stock:10, precio: 200, img: "../img/fideos.jpg", idCat: "2" },
    { id: "3", nombre: "Arroz", stock:10, precio: 300, img: "../img/arroz.jpg", idCat: "3" },
    { id: "4", nombre: "Aceite", stock:10, precio: 900, img: "../img/aceite.jpg", idCat: "3" },
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(misProductos);
        }, 100)
    })
}


/*Actividad n° 3 Detalle de un Producto I */

/*Creamos una función similar a la anterior pero que solo nos retorne un solo item*/

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = misProductos.find(item => item.id === id);
            resolve(producto);
        }, 100)
    })
}

//Creamos una función que retorne toda una categoria: 

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productosCategoria = misProductos.filter(item => item.idCat === idCategoria);
            resolve(productosCategoria);
        }, 100)
    })
}