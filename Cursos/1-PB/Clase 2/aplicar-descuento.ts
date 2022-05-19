    //Importamos Readline Sync para poder utilizar inputs e introducir los datos de la compra.
import * as rls from 'readline-sync';
    //Declaramos las variables para que el usuario pueda poner la cantidad de un producto de una misma marca y su precio respectivo.
let cantidadProducto : number = rls.questionInt("Cantidad de productos a comprar (Misma marca): ");
let precioProducto : number = rls.questionFloat("Dinero a pagar por producto (Unidad/Unidad con centecimas): ");
    //Declaramos una variable con el calculo del precio de compra total.
let compra : number = cantidadProducto * precioProducto;
    //Hacemos una declaración if/else para que se aplique un descuento en caso de que la variable "compra" sea mayor a 1000$.
    //En el caso de que esto no sea verdadero se recomienda realizar una compra mayor a los 1000$.
if (compra > 1000) {
    let compraDescontada : number = compra - compra * 0.1;
    console.log("Su compra total fue de: " + compra + "$.", "por lo que se le hizo un descuento del 10%, por lo que el total actual es de:" + compraDescontada + "$.");
} else {
    console.log("Su compra total fue de: " + compra + "$. Aproveche la oferta para conseguir un descuento del 10% al hacer una compra superior a 1000$.");
}