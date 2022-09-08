// Mi idea inicial era crear una matriz de datos para poder ver los datos facilmente.
let venCamila : number[] = new Array(32558, 36165, 34240, 39273, 34360, 21347, 20869, 21493, 23062, 31908, 30369, 30652); //Camila
let venFranco : number[] = new Array(27520, 31480, 24053, 34823, 32942, 38477, 23756, 21413, 26699, 22045, 25625, 26855); //Franco
let venAlicia : number[] = new Array(20584, 33473, 34300, 24598, 33955, 24040, 39173, 25542, 25105, 26759, 29790, 36218); //Alicia
let venMatias : number[] = new Array(27243, 38774, 21246, 30691, 24542, 39771, 31807, 31641, 20850, 29837, 37182, 28006); //Matias
let venSandra : number[] = new Array(23334, 32687, 25217, 26844, 27033, 35244, 25702, 25781, 35525, 34874, 38842, 20562); //Sandra
let meses : string[] = new Array("S1M1", "S2M1", "S3M1", "S4M1", "S1M2", "S2M2", "S3M2", "S4M2", "S1M3", "S2M3", "S3M3", "S4M3"); //Meses y semanas


let mayorVendedor;
let mayorVenta;
let menorVendedor;
let menorVenta;

//calcularMayorVenta()

function calcularMayorVenta(v : number[]) { // Aca pensaba crear una función para analizar cada array y buscar la mayor venta de cada uno de los vectores.

    for (let i = 0; i < v.length; i++) {
        //if (v[i] > mayorventa) {
            
        //}
    }
}

//Para sacar la venta minima tambien crearia una función para analizar cad vector.
//Para calcular el promedio semanal deberia tomar los datos indicando sus indices (De 0 a 11), sumarlos y dividirlos por 12. Asi podria hacer una función que saque el promedio semanal de cada vector.
//Para calcular el nombre y monto del mejor vendedor podria sacar el numero maximo de todos los vectores, compararlos y sacar el mayor numero de todas las ventas. Desconozco como podría indicar a que vendedor le corresponde ese valor, pero tranquilamente se podría realizar.
//Para calcular el nombre y monto del peor vendedor haria lo mismo que en el comentario anterior, solo que sacando el menor valor.
//No logre realizar el ejercicio, pero con mas práctica creo que podría hacerlo y pensarlo de manera mas lógica.