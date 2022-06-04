import * as rls from 'readline-sync';

let longArreglo : number = rls.questionInt("Ingrese la dimension del arreglo: ")
let v1 : number[] = new Array(longArreglo);
let v2 : number[] = new Array(longArreglo);
let vSuma :number[] = new Array(longArreglo);

function cargarArreglo(v : number[]) {
    for (let i = 0; i < v.length; i++) {
        v[i] = aleatorio(0,100);
    }
}

function aleatorio(minimo : number, maximo : number) : number {
    return Math.floor((Math.random() * (maximo-minimo)) + minimo);   
}

function sumarArreglos(v1 : number[], v2 : number[], vSuma : number[]) {
    for (let i = 0; i < v1.length; i++) {
        vSuma[i] = v1[i] + v2[i];
    }
}

cargarArreglo(v1);
cargarArreglo(v2);
sumarArreglos(v1,v2,vSuma);

console.log(`El arreglo 1 es: ${v1}`);
console.log(`El arreglo 2 es: ${v2}`);
console.log(`La suma de arreglos es: ${vSuma}`);
