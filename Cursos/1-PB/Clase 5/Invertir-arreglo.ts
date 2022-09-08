import * as rls from 'readline-sync';

let n : number = rls.questionInt("Ingrese la cantidad de elementos del arreglo: ")
let arreglo1 : number[] = new Array(n);
let arregloInv : number[ ] = new Array(n);

for (let i = 0; i < n; i++) {
    arreglo1[i] = rls.questionInt(`Ingrese un valor para la posicion ${i + 1}`);
    arregloInv[n-1-i] = arreglo1[n]
}

console.log("El arreglo invertido resultante es: ", arregloInv)