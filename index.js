
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
calculoPago()















/* function calculoTotal() {

    let producto = prompt("Elija que producto desea:\n \nCamiseta \nShort \nVarios"); //A fines practicos todas las camisetas valen $7500 - todos los shorts valen $4500 - y todos los varios valen $3000

    prompt("Elija que equipacion desea comprar:\n \nTitular \nSuplente \nTercera")

    let pago = prompt("Elija la forma de pago:\n \nTransferencia (Sin Recargo) \nTarjeta Credito en 3 Pagos (Recargo del 20%)")

    let envio = prompt("A que provicia realizamos el envio? \n\nBuenos aires (Envio $1000) \nCordoba (Envio $1500) \nMendoza (Envio $2000)\n \nENVIO GRATIS A COMPRAS MAYORES DE $14999");


    while (producto != "" && pago != "" && envio != "") {
        switch (producto) {
            case producto === "titutlar" && pago === "transferencia" && envio === "buenos aires":
                total = 7500 + 1000
                alert('Su total es de: ', '$', total)
                break
            case producto === "titutlar" && pago === "transferencia" && envio === "cordoba":
                total = 7500 + 1500
                alert('Su total es de: ', '$', total)
                break
            case producto === "titutlar" && pago === "transferencia" && envio === "mendoza":
                total = 7500 + 2000
                alert('Su total es de: ', '$', total)
                break
            case producto === "titutlar" && pago === "transferencia" && envio === "buenos aires":
                total = 7500 + 2000
                alert('Su total es de: ', '$', total)
                break
        }

    }

}

calculoTotal(); */