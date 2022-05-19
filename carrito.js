const contenedorProductos = document.getElementById('contenedor-productos');

stockProductos.forEach((producto) => {
    const div = document.createElement('div')
    div.classList.add('producto')
    div.innerHTML = `
    <img src=${producto.imagen} alt = "">
    <h3>${producto.nombre}</h3>
    <p>${producto.descripcion}</p>
    <p>Talle: ${producto.talle}</p>
    <p class = "precioProducto"> Precio: $${producto.precio}</p>
    <button id = "agregar${producto.id}" class = "boton-agregar"> Agregar <i class= "fas fa-shopping-cart"></i></button>
    `

    contenedorProductos.appendChild(div)

});


















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