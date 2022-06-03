let edades : number[] = new Array(270);

function aleatorio(minimo : number, maximo : number) : number {
    return Math.floor((Math.random() * (maximo-minimo)) + minimo);   
}

function rellenarEdades(v : number[]) {
    for (let i = 0; i < v.length; i++) {
        v[i] = aleatorio(18,40);
    }
}

function contarMayores(edades : number[]) {
    let contador : number = 0;
    for (let i = 0; i < edades.length; i++) {
        if (edades[i] >= 21) {
            contador++;
        }
    return contador;
    }
}

rellenarEdades(edades);
let mayores21 : number = contarMayores(edades);
let menores21 : number = 270 - mayores21;

console.log(`En la disco hay 270 personas. de las cuales ${mayores21} son mayores o iguales de 21 años y ${menores21} menores de 21 años`);