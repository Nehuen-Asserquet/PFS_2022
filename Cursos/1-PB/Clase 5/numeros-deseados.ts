import * as rls from 'readline-sync';

let length : number = rls.question("Ingrese el tamaño del arreglo: ");
let numerosDeseados : number[] = new Array (length);
let i : number;

for (i = 0; i < length; i++) {
    numerosDeseados[i] = rls.question("Ingrese un numero: ");
}

for (i = 0; i < length; i++) {
    console.log("Posición ", (i + 1), numerosDeseados[i]);
}