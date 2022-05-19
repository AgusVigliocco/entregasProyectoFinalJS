const contenedorProductos = document.getElementById('contenedor-productos')
const contenedorCarrito = document.getElementById('carrito-contenedor')
const botonVaciar = document.getElementById('vaciar-carrito')
const contadorCarrito = document.getElementById('contadorCarrito')
const cantidad = document.getElementById('cantidad')
const precioTotal = document.getElementById('precioTotal')
const cantidadTotal = document.getElementById('cantidadTotal')

let carrito = []

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('carrito')) {
        carrito = JSON.parse(localStorage.getItem('carrito'))
        actualizarCarrito()
    }
})

botonVaciar.addEventListener('click', () => {
    carrito.length = 0
    actualizarCarrito()
})


stockProductos.forEach((producto) => {
    const div = document.createElement('div')
    div.classList.add('producto')
    div.innerHTML = `
    <img src=${producto.imagen} alt= "">
    <h3>${producto.nombre}</h3>
    <p>${producto.descripcion}</p>
    <p>Talle: ${producto.talle}</p>
    <p class="precioProducto">Precio:$ ${producto.precio}</p>
    <button id="agregar${producto.id}" class="boton-agregar">Agregar <i class="fas fa-shopping-cart"></i></button>
    `
    contenedorProductos.appendChild(div)


    const boton = document.getElementById(`agregar${producto.id}`)


    boton.addEventListener('click', () => {

        agregarAlCarrito(producto.id)

    })
})




const agregarAlCarrito = (prodId) => {


    const existe = carrito.some(prod => prod.id === prodId)
    if (existe) {
        const prod = carrito.map(prod => {
            if (prod.id === prodId) {
                prod.cantidad++
            }
        })
    } else {
        const item = stockProductos.find((prod) => prod.id === prodId)
        carrito.push(item)
    }

    actualizarCarrito()
}

const eliminarDelCarrito = (prodId) => {
    const item = carrito.find((prod) => prod.id === prodId)

    const indice = carrito.indexOf(item)
    carrito.splice(indice, 1)
    actualizarCarrito() /
        console.log(carrito)
}

const actualizarCarrito = () => {

    contenedorCarrito.innerHTML = ""
    carrito.forEach((prod) => {
        const div = document.createElement('div')
        div.className = ('productoEnCarrito')
        div.innerHTML = `
        <p>${prod.nombre}</p>
        <p>Precio:$${prod.precio}</p>
        <p>Cantidad: <span id="cantidad">${prod.cantidad}</span></p>
        <button onclick="eliminarDelCarrito(${prod.id})" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
        `

        contenedorCarrito.appendChild(div)

        localStorage.setItem('carrito', JSON.stringify(carrito))

    })

    contadorCarrito.innerText = carrito.length
    console.log(carrito)
    precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0)
}

















/* const contenedor = document.getElementById("productos");
const tablaCarrito = document.getElementById("tablaCarrito");
const carrito = [];
const PRODUCTOS = [
    {
        id: 1,
        nombre: "Camiseta Titular",
        precio: 15000,
        stock: 10,
        imagen: "./Imagenes/camiseta-local-oficial-river-plate-21-22.jpg"
    },
    {
        id: 2,
        nombre: "Short Titular",
        precio: 5000,
        stock: 6,
        imagen: "./Imagenes/shorts-uniforme-titular-river-plate-21-22.jpg"
    },
    {
        id: 3,
        nombre: "Medias",
        precio: 1500,
        stock: 0,
        imagen: "./Imagenes/medias-adisocks-unisex.jpg"
    }
];



const getCard = (item) => {
    return (
        `
        <div class="card" style="width: 18rem;">
            <img src="${item.imagen}" class="card-img-top" alt="${item.nombre}">
            <div class="card-body">
                <h5 class="card-title">${item.nombre}</h5>
                <p class="card-text">$${item.precio}</p>
                <p class="card-text">Stock: ${item.stock}</p>
                <button onclick=agregarCarrito(${item.id}) class="btn ${item.stock ? 'btn-primary' : 'btn-secondary'}" ${!item.stock ? 'disabled' : ''} >Agregar al carrito</button>
            </div>
        </div>
    `);
};

const getRow = (item) => {
    return (
        `
        <tr>
            <th scope="row">${item.id}</th>
            <td>${item.nombre}</td>
            <td>${item.cantidad}</td>
            <td>$${item.precio * item.cantidad} ($${item.precio})</td>
            <td><img style="width: 20%" src="${item.imagen}" alt="imagen"></td>
        </tr>
            `
    )
};

const cargarProductos = (datos, nodo, esTabla) => {
    let acumulador = "";
    datos.forEach((el) => {
        acumulador += esTabla ? getRow(el) : getCard(el);
    })
    nodo.innerHTML = acumulador;
};

const agregarCarrito = (id) => {
    const seleccion = PRODUCTOS.find(item => item.id === id);

    const busqueda = carrito.findIndex(el => el.id === id);
    console.log(busqueda)
    if (busqueda === -1) {
        carrito.push({
            id: seleccion.id,
            nombre: seleccion.nombre,
            precio: seleccion.precio,
            cantidad: 1,
            imagen: seleccion.imagen,
        })
    } else {
        carrito[busqueda].cantidad = carrito[busqueda].cantidad + 1
    }

    cargarProductos(carrito, tablaCarrito, true);
}

cargarProductos(PRODUCTOS, contenedor, false);



 */