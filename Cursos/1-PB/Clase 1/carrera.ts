    //Importamos Readline Sync para poder utilizar inputs e introducir los datos de cada vuelta.
import * as rls from 'readline-sync';
    //Declaramos una constante donde se almacena el numero de vueltas totales, para su uso posterior en el calculo de promedio.
const numeroVueltas: number = 4;
    //El usuario indica los valores de cada vuelta para ser almacenados en sus respectivas variables.
let vuelta1: number =rls.questionFloat('Tiempo de la primer vuelta: ');    //Primera vuelta.
let vuelta2: number =rls.questionFloat('Tiempo de la segunda vuelta: ');   // Segunda vuelta.
let vuelta3: number =rls.questionFloat('Tiempo de la tercera vuelta: ');   //Tercera vuelta.
let vuelta4: number =rls.questionFloat('Tiempo de la cuarta vuelta: ');    //Cuarta vuelta.
    //Creamos una variable para almacenar el tiempo total de la carrera.
let tiempoCarrera: number = vuelta1 + vuelta2 + vuelta3 + vuelta4;
    //Creamos una variable para almacenar el tiempo promedio de la carrera, 
let tiempoPromedioVuelta: number = tiempoCarrera/numeroVueltas;
    //El comando console.log manda la información del tiempo de la carrera o tiempo total.
console.log("El tiempo de la carrera fue:", tiempoCarrera);
    //El comando console.log manda la información del promedio de tiempo por vuelta.
console.log("El tiempo promedio por vuelta fue:", tiempoPromedioVuelta);

//Sugerencia: Para una mejora en el futuro se podria añadir una función que convierta el 
//            numero de cada input en una medida de minutos y segundos.