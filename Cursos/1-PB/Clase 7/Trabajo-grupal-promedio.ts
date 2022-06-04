import * as rls from "readline-sync";

let equipo : number[] = new Array(11); 

function aleatoria(minimo : number, maximo : number) : number {
    return Math.floor((Math.random() * (maximo - minimo)) + minimo);
}

function rellenarEdades(v : number[]) {
    for (let i = 0; i < v.length; i++) {
        v[i] = aleatoria(3 , 7);
    }
}

function promediarEdades(v : number[]) : number {
    let suma : number = 0;
    for (let i = 0; i < v.length; i++) {
        suma += v[i];
    }
    return Math.floor(suma/v.length*100)/100;
}

rellenarEdades(equipo);
console.log(`Las edades del equipo son ${equipo}`);
console.log(`El promedio de las edades del equipo es ${promediarEdades(equipo)}`);