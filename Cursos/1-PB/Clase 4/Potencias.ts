import * as rls from 'readline-sync';

console.log("Ingrese un numero entero que actue de base, otro que actue de exponente y encuentre el resultado.");

function potencia(base:number, exponente:number):number {
    if (exponente == 0) {
        return 1;
    }
        else if (exponente > 0) {
            return base ** exponente;
        }
}

let base : number = rls.questionInt ("Ingrese el numero de base para el calculo:");
let exponente : number = rls.questionInt("Ingrese el numero del exponente, tiene que ser mayor o igual a 0 para realizar el calculo:");

while (exponente < 0) {
    console.log("Exponente invalido, vuelva a ingresar un numero mayor o igual a 0");
    exponente = rls.questionInt("Ingrese el numero del exponente:");
}

 console.log("El resultado de la potencia es de: ", (potencia(base, exponente)), ".");