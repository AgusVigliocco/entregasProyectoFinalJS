//Camisetas

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
    auxMensaje.push("Solo elija el numero del producto que desea: ");
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
    constructor(id, short, precioShort) {
        this.id = id;
        this.short = short;
        this.precioShort = precioShort;
    }

    toString() {
        return `${this.id}. ${this.short}, ${this.precioShort} PESOS`;
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
    auxMensaje.push("Solo elija el numero del producto que desea: ")
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
    carrito1.forEach((el) => (precioShort += el.precioShort));
    alert(`Usted seleccionó:\n${carrito1.join("\n")} \n\nEl total a abonar es: ${precioShort} PESOS`);
} else {
    alert("¡Que pena, no seleccionaste nada!");

}


//Varios

alert("En el siguiente menu podrá elegir los productos de la categoria 'Varios'")

class Varios {
    constructor(id, varios, precioVarios) {
        this.id = id;
        this.varios = varios;
        this.precioVarios = precioVarios;
    }

    toString() {
        return `${this.id}. ${this.varios}, ${this.precioVarios} PESOS`;
    }
}

const arrayVarios = [];
arrayVarios.push(new Varios(1, "Buzo canguro", 13000));
arrayVarios.push(new Varios(2, "Rompeviento", 12500));
arrayVarios.push(new Varios(3, "Medias altas", 1000));
arrayVarios.push(new Varios(4, "Pelota", 2500));
arrayVarios.push(new Varios(5, "Zapatillas", 13500));
arrayVarios.push(new Varios(6, "Ojotas", 6500));



const mensaje2 = (listaProductos) => {
    let auxMensaje = [];
    auxMensaje.push("Solo elija el numero del producto que desea: ");
    for (let i = 0; i < listaProductos.length; i++) {
        auxMensaje.push(listaProductos[i].toString());
    }
    auxMensaje.push("\nPara finalizar su selección ingrese 0.");
    return auxMensaje.join("\n");
}

let elegirVarios;
let buscarVarios;
const carrito2 = [];
let precioVarios = 0;

// Ejecución
elegirVarios = parseInt(prompt(mensaje(arrayVarios)));

while ((elegirVarios > 0) && (elegirVarios <= arrayVarios.length) && (!isNaN(elegirVarios))) {
    buscarVarios = arrayVarios.find((el) => el.id === elegirVarios);
    carrito2.push(buscarVarios);
    elegirVarios = parseInt(prompt(mensaje(arrayVarios)));
}

if (carrito2.length > 0) {
    carrito2.forEach((el) => (precioVarios += el.precioVarios));
    alert(`Usted seleccionó:\n${carrito2.join("\n")} \n\nEl total a abonar es: ${precioVarios} PESOS`);
} else {
    alert("¡Que pena, no seleccionaste nada!");
}



let TotalCompraFinal = precio + precioShort + precioVarios

alert(`El total a pagar de su compras es: ${TotalCompraFinal} \n \n A continuacion elija la forma de pago:`)

function calculoPago() {
    pago = prompt('Elija el medio de pago: (Coloque el número de la opción)\n \n1.Transferencia (Sin recargo) \n2.Tarjeta de credito en 3 pagos (Recargo del 20%')

    switch (pago) {
        case '1':
            pago = TotalCompraFinal;
            alert(`El total de la compra sera de $${pago}. Podrás hacer la transferencia a nuestra cuenta con el alias: Tienda.River.Córdoba`);
            break;
        case '2':
            pago = TotalCompraFinal + (TotalCompraFinal * 0.20);
            alert(`El total de la compra sera de $${pago}.\n\nPodrás hacer el pago con Tarjeta VISA o MASTERCARD`);
            break
        default:
            alert('Ingresaste un modo de pago incorrecto');
    }
}


calculoPago()

