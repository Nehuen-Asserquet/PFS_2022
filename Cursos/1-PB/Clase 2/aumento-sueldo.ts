    //Importamos el rls para usar estos datos de entrada 
import * as rls from 'readline-sync';

    //Nombramos los rango por consola para que el usuario los vea 
console.log("Rangos salariales");
console.log("1/ 0 - 15000");
console.log("2/ 15001 - 20000");
console.log("3/ 20001 - 25000");
console.log("4/ 25000 +");

    //Ingrese un numero de la lista 
let salarioNro = rls.questionInt("Ingrese el numero de la lista en el que se encuadre su salario: ");
    //Especifica el salario
let salarioEnPesos = rls.questionFloat("Ingrese sus salario especifico en pesos ($) de acuerdo al intervalo del numero preseleccionado: " );

    //Esta condicional determina a que intervalo pertenece el salario especifico, mostrando el nuevo salario, el aumento y advirtiendo en caso de ingresar numeros erroneos. Todo nediante la consola
switch (salarioNro) {
    case (1): 
        if (salarioEnPesos <= 15000) {
        console.log("Al su sueldo ser inferior a $15000 recibio un aumento del 20%, felicitaciones. Su sueldo es ahora de: $" + (salarioEnPesos * 1.20) + ". El aumento en pesos es de " + salarioEnPesos * 0.2 + ".");
        }
            else {
                console.log("Este numero no pertenece al intervalo");
            }
            break;
            
    case (2):
        if (salarioEnPesos >= 15001 && salarioEnPesos <= 20000) {
        console.log("Al su sueldo encuadrarse entre los $15001 - $20000 recibio un aumento del 10%, felicitaciones. Su sueldo es ahora de: $" +(salarioEnPesos*1.10)+ ". El aumento en pesos es de " + salarioEnPesos*0.1+".");
        }
            else {
                console.log("Este numero no pertenece al intervalo");
            }
            break;
    case (3):
        if (salarioEnPesos >= 20001 && salarioEnPesos <= 25000) {
        console.log("Al su sueldo encuadrarse entre los $20001 - $25000 recibio un aumento del 5%, felicitaciones. Su sueldo es ahora de: $" +(salarioEnPesos*1.05)+ ". El aumento en pesos es de " + salarioEnPesos*0.05+".");
        }
            else {
                console.log("Este numero no pertenece al intervalo");
            }
            break;
    case (4):
        if (salarioEnPesos > 25000) {
        console.log("Al su sueldo ser superior a los $25000 no recibio un aumento. Su sueldo es aÃºn de: $" +salarioEnPesos);
        }
            else {
                console.log("Este numero no pertenece al intervalo");
            }
            break;

    default:
        console.log("Revise el numero de la lista ingresado e intentelo nuevamente.");
}