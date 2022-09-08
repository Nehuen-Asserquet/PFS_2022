import * as rls from 'readline-sync';

let arreglo1 : number[] = new Array(6);
let arreglo2 : number[] = new Array(6);
let sumaArreglos :number[] = new Array(6);

console.log("Se van a sumar los elementos de cada una de las posiciones de 2 arreglos para guardar su resultado en uno nuevo.");

for (let i = 0; i < 6; i++) {
    arreglo1[i] = rls.questionInt(`Ingrese el valor del arreglo 1 que ira en la posicion ${i + 1}:`);
    arreglo2[i] = rls.questionInt(`Ingrese el valor del arreglo 2 que ira en la posicion ${i + 1}:`);
    sumaArreglos [i] = arreglo1[i] + arreglo2[i];
}

console.log("El arreglo formado quedo de esta forma:", sumaArreglos);