import * as rls from 'readline-sync';

let clave : string;
let contador : number = 3;

while (contador > 0 && clave != "eureka") {
    clave = rls.question("Ingrese su clave en minuscula, tiene tres intentos: ", {hideEchoBack: true });

if (clave == "eureka") {
    console.log("Felicidades, su clave es correcta.");
    break;
}

    else if (clave != "eureka") {
    console.log("La clave introducida es incorrecta, le quedan ", contador-1, " intentos.");
    contador-=1;
    }
}

if (contador == 0) {
    console.log("Te quedaste sin intentos, proba mas tarde.");
}