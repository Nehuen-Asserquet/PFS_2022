import * as rls from 'readline-sync';

console.log("Ingrese 2 numeros para ver si el primer valor es multiplo del segundo.");

function esMultiplo (numero1:number, numero2:number):boolean {
    if (numero1 % numero2 == 0){
        return true;
    } 
        else {
            return false;
        }
} 

let numero1 : number = rls.questionInt("Ingrese el primer numero:");
let numero2 : number = rls.questionInt("Ingrese el segundo numero:");
console.log(esMultiplo(numero1, numero2));