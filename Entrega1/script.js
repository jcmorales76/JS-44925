// Calcular costo de compra
function calcular (precioProducto, cantidadProducto, descuentoProducto, fleteEnvio) {
    
    let descuento = (precioProducto * descuentoProducto) / 100
    let precioDescuento = precioProducto - descuento
    return (precioDescuento * cantidadProducto) + fleteEnvio
}

const envioL = 400 
const envioI = 800


let producto = parseFloat(prompt("Ingrese el precio del producto: "));
let cantidad = parseInt(prompt("Ingrese la cantidad de unidades del producto: "));
let descuento = parseInt(prompt("Ingresa % de descuento:")) 
let flete = parseInt(prompt("1. Local - 2. Internacional"))


if (flete === 1) {
    let precioFinal = calcular(producto, cantidad, descuento, envioL)
    alert("El precio total de tu compra local es S/ " + precioFinal)
    alert("Su pedido llegara en 2 días!")    
}else if(flete ===2){
    let precioFinal = calcular(producto, cantidad, descuento, envioI)
    alert("El precio total de tu compra Internacional es S/ " + precioFinal)
    alert("Su pedido internacional llegara aproximadamente en 7 días!")  
}else{
    alert("Ingrese un dato correcto")
}

