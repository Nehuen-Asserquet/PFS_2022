import * as rls from 'readline-sync';

let length : number= rls.questionInt("Ingresar la cantidad de elementos para el arreglo: ");
let arreglo1: number[] = new Array(length);
let numPos:number = 0;
let numNeg: number = 0;
let ceros: number = 0;

for(let i : number = 0; i < length; i++) {
    arreglo1[i] = rls.questionInt(`Ingrese el numero para la posicion ${i + 1}:`);
}

if (arreglo1[length] < 0) {
    numNeg++;
}

    else if (arreglo1[length] > 0) {
        numPos++;
}

    else {
        ceros++;
    }

console.log("Todos los elementos son: ", arreglo1);
console.log("Los numeros negativos son ", numNeg)
console.log("Los numeros positivos son: ", numPos)
console.log("Los ceros son: ", ceros);