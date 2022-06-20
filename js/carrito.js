const contenedorProductos = document.getElementById('contenedor-productos')
const contenedorCarrito = document.getElementById('carrito-contenedor')
const botonVaciar = document.getElementById('vaciar-carrito')
const contadorCarrito = document.getElementById('contadorCarrito')
const cantidad = document.getElementById('cantidad')
const precioTotal = document.getElementById('precioTotal')
const cantidadTotal = document.getElementById('cantidadTotal')
const pagarMercadoPago = document.getElementById('pagar-mercadoPago')

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
    <div class= "tarjeta1">
    <img src=${producto.imagen} alt= "">  
    <p>${producto.descripcion}</p>
    <p>Talle: ${producto.talle}</p>
    <p class="precioProducto">Precio:$ ${producto.precio}</p>
    <button id="agregar${producto.id}" class="boton-agregar">Agregar <i class="fas fa-shopping-cart"></i></button>
    </div>
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
    swal("Listo!", "Lo agregamos al carrito!", "success");
    actualizarCarrito()
}

const eliminarDelCarrito = (prodId) => {
    const item = carrito.find((prod) => prod.id === prodId)
    const indice = carrito.indexOf(item)
    carrito.splice(indice, 1)
    actualizarCarrito() /
        swal("", "Eliminado", "warning");
    console.log(carrito)
}

const actualizarCarrito = () => {

    contenedorCarrito.innerHTML = ""
    carrito.forEach((prod) => {
        const div = document.createElement('div')
        div.className = ('productoEnCarrito')
        div.innerHTML = `
        <img class= "img-carrito" src=${prod.imagen} alt= "">
        <p>${prod.nombre}</p>
        <p>Precio: $ ${prod.precio}</p>
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




const pagar = async () => {
    const porductoToMap = carrito.map(Element => {
        let nuevoProducto = {

            title: producto.nombre,
            description: producto.descripcion,
            picture_url: producto.imagen,
            category_id: "",
            quantity: 1,
            currency_id: "ARS",
            unit_price: 10
        }
        return nuevoProducto;
    })
    let response = await fetch('https://api.mercadopago.com/checkout/preferences', {

        method: 'POST',
        headers: {
            Authorization: "Bearer TEST-7909832481632205-062013-270177f15846111795385f37ea40c8e0-174117220"
        },
        body: JSON.stringify({
            items: porductoToMap
        })

    })
    let data = await response.json()
    console.log(data)
}

/* curl -X POST \
    'https://api.mercadopago.com/checkout/preferences' \
    -H 'Authorization: Bearer YOUR_ACCESS_TOKEN' \
    -H 'Content-Type: application/json' \
    -d '{
  "items": [
    {
      "title": "Dummy Title",
      "description": "Dummy description",
      "picture_url": "http://www.myapp.com/myimage.jpg",
      "category_id": "car_electronics",
      "quantity": 1,
      "currency_id": "U$",
      "unit_price": 10
    }
  ],
  "payer": {
    "phone": {},
    "identification": {},
    "address": {}
  },
  "payment_methods": {
    "excluded_payment_methods": [
      {}
    ],
    "excluded_payment_types": [
      {}
    ]
  },
  "shipments": {
    "free_methods": [
      {}
    ],
    "receiver_address": {}
  },
  "back_urls": {},
  "differential_pricing": {},
  "tracks": [
    {
      "type": "google_ad"
    }
  ],
  "metadata": {}
' */