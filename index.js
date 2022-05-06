/* 
function calculoProducto() {
    producto = prompt('Elija un producto (Coloque el número de la opción):\n \n1)Camiseta \n2)Short \n3)Varios')

    switch (producto) {
        case '1':
            total = 7500;
            alert(`El costo del producto es $ ${total}`)
            break;
        case '2':
            total = 4000;
            alert(`El costo del producto es $ ${total}`)
            break;
        case '3':
            total = 5000;
            alert(`El costo del producto es $ ${total}`)
            break;
        default:
            alert("Ingresaste mal la opción")
    }
}
function calculoEnvio() {
    envio = prompt('¿Donde te enviamos el pedido? (Coloque el número de la opción)\n \n1)Buenos Aires (Costo envio: $500) \n2)Santa Fe(Costo envio: $700) \n3)Mendoza (Costo envio: $1000)')

    switch (envio) {
        case '1':
            envio = total + 500;
            alert(`el costo del producto mas el envio es de $ ${envio}`);
            break;
        case '2':
            envio = total + 700;
            alert(`el costo del producto mas el envio es de $ ${envio}`);
            break;
        case '3':
            envio = total + 1000;
            alert(`el costo del producto mas el envio es de $ ${envio}`);
            break;
        default:
            alert('Ingresaste mal la provincia');
            break;

    }
}

function calculoPago() {
    pago = prompt('Elija el medio de pago: (Coloque el número de la opción)\n \n1)Transferencia (Sin recargo) \n2)Tarjeta de credito en 3 pagos (Recargo del 20%')

    switch (pago) {
        case '1':
            pago = envio;
            alert(`El total de la compra sera de $${pago}. Podrás hacer la transferencia a nuestra cuenta con el alias: Tienda.River.Córdoba`);
            break;
        case '2':
            pago = envio + (envio * 0.20);
            alert(`El total de la compra sera de $${pago}. Podrás hacer el pago con Tarjeta VISA o MASTERCARD`);
            break
        default:
            alert('Ingresaste un modo de pago incorrecto');
    }
}


calculoProducto()
calculoEnvio()
calculoPago() */


alert("En el siguiente menu podrá elegir los productos de la categoria 'Camisetas'")
class Producto {
    constructor(id, camiseta, precio) {
        this.id = id;
        this.camiseta = camiseta;
        this.precio = precio;
    }

    toString() {
        return `${this.id}. ${this.camiseta}, ${this.precio} PESOS`;
    }
}

const arrayProductos = [];
arrayProductos.push(new Producto(1, "Camiseta titular 2022", 9000));
arrayProductos.push(new Producto(2, "Camiseta suplente 2022", 8500));
arrayProductos.push(new Producto(3, "Camiseta tercera 2021", 6000));
arrayProductos.push(new Producto(4, "Camiseta tricolor 2021", 7000));
arrayProductos.push(new Producto(5, "Camiseta arquero 2022", 8500));
arrayProductos.push(new Producto(6, "Camiseta tercera 2020", 4500));



const mensaje = (listaProductos) => {
    let auxMensaje = [];
    auxMensaje.push("Elija el producto que quiera comprar: ");
    for (let i = 0; i < listaProductos.length; i++) {
        auxMensaje.push(listaProductos[i].toString());
    }
    auxMensaje.push("\nPara finalizar su selección ingrese 0.");
    return auxMensaje.join("\n");
}

let elegirProductos;
let buscarProducto;
const carrito = [];
let precio = 0;

// Ejecución
elegirProductos = parseInt(prompt(mensaje(arrayProductos)));

while ((elegirProductos > 0) && (elegirProductos <= arrayProductos.length) && (!isNaN(elegirProductos))) {
    buscarProducto = arrayProductos.find((el) => el.id === elegirProductos);
    carrito.push(buscarProducto);
    elegirProductos = parseInt(prompt(mensaje(arrayProductos)));
}

if (carrito.length > 0) {
    carrito.forEach((el) => (precio += el.precio));
    alert(`Usted seleccionó:\n${carrito.join("\n")} \n\nEl total a abonar es: ${precio} PESOS`);
} else {
    alert("¡Que pena, no seleccionaste nada!");
}

//shorts

alert("En el siguiente menu podrá elegir los productos de la categoria 'Shorts'")

class Short {
    constructor(id, short, precio) {
        this.id = id;
        this.short = short;
        this.precio = precio;
    }

    toString() {
        return `${this.id}. ${this.short}, ${this.precio} PESOS`;
    }
}

const arrayShort = [];
arrayShort.push(new Short(1, "short titular blanco", 3000));
arrayShort.push(new Short(2, "short suplente rojo", 2500));
arrayShort.push(new Short(3, "short titular negro", 3000));
arrayShort.push(new Short(4, "short suplente negro", 2000));
arrayShort.push(new Short(5, "short titular 2022", 3500));
arrayShort.push(new Short(6, "short arquero 2020", 2500));



const mensaje1 = (listaProductos) => {
    let auxMensaje = [];
    auxMensaje.push("Elija el producto que quiera comprar: ");
    for (let i = 0; i < listaProductos.length; i++) {
        auxMensaje.push(listaProductos[i].toString());
    }
    auxMensaje.push("\nPara finalizar su selección ingrese 0.");
    return auxMensaje.join("\n");
}

let elegirShort;
let buscarShort;
const carrito1 = [];
let precioShort = 0;

// Ejecución
elegirShort = parseInt(prompt(mensaje(arrayShort)));

while ((elegirShort > 0) && (elegirShort <= arrayShort.length) && (!isNaN(elegirShort))) {
    buscarShort = arrayShort.find((el) => el.id === elegirShort);
    carrito1.push(buscarShort);
    elegirShort = parseInt(prompt(mensaje(arrayShort)));
}

if (carrito1.length > 0) {
    carrito1.forEach((el) => (precio += el.precio));
    alert(`Usted seleccionó:\n${carrito1.join("\n")} \n\nEl total a abonar junto con la/s camiseta/s es: ${precio} PESOS`);
} else {
    alert("¡Que pena, no seleccionaste nada!");
}






