import * as readlineSync from "readline-sync";

let elem : number = readlineSync.questionInt("Ingrese tamaño: ");
let nro : number = readlineSync.questionInt("Ingrese numero: ");
let arr : number[] = new Array(elem);
let ocu : number = sacarRepeticiones(arr,nro);

cargar(arr);
console.log(`El numero ${nro} aparece ${ocu} veces.`);
mostrar(arr);

function cargar(v : number[]) {
    for (let i = 0; i < v.length; i++) {
        v[i]=Math.floor(Math.random()*100);
    }       
}

function mostrar(v : number[]) {
    let c = "";
    for (let i = 0; i < v.length; i++) {
        c += v[i] + " ";
    }
    console.log(`El array es: ${c}.`);
}

function sacarRepeticiones(v : number[],n : number) {
    let o : number = 0;
    for (let i = 0; i < v.length; i++) {
        if (v[i] == n){
            o++;
        }
    }
    return o;
}