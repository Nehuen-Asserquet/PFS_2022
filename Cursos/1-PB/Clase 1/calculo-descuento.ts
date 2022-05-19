    // Primero creamos una variable para almacenar el precio inicial del producto.
let precio : number = 450.50;
    //Sacamos el descuento mediante un calculo simple.
let descuento : number = precio * 0.1;
    //Calculamos el precio final restando el descuento calculado del precio inicial.
let precioFinal : number = precio - descuento;
    //El comando console.log manda el mensaje con la información del precio a la consola.
console.log("El precio final del producto es de", precioFinal, "$.");
