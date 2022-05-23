import * as rls from 'readline-sync';

function esMultiplo (numero1:number, numero2:number):boolean {
    if (numero1 % numero2 == 0){
        return true;
    } 
        else {
            return false;
        }
} 

function numDivisores(num:number):number {
    let suma : number = 0;
    for (let i = 1; i <= num; i++) {
        if (esMultiplo (num, i)) {
            suma++;
        }
    } 
    return suma;
}

let numero1 : number = rls.questionInt("Ingrese el numero que desea conocer su cantidad de divisores:");
console.log("Los divisores son: ", numDivisores(numero1), ".");