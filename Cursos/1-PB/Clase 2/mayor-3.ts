import * as rls from 'readline-sync';

let num1 = rls.questionFloat("Primer numero: ");
let num2 = rls.questionFloat("Segundo numero: ");
let num3 = rls.questionFloat("Tercer numero: ");

if (num1 > num2 && num1 > num3){
    console.log("El mayor número entre los valores ingresados es:", num1);
} 
else if (num2 > num1 && num2 > num3){
   console.log("El mayor número entre los valores ingresados es:", num2);
} 
else {
    console.log("El mayor número entre los valores ingresados es:", num3);
 }