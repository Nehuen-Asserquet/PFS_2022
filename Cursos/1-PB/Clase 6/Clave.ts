import * as rls from "readline-sync";

let palabra : string = rls.question("Indique na palabra para convertirla en una clave: ");

console.log(`La palabra (${palabra}) se codifico de esta manera: ${convertirClave(palabra)}`);

function convertirClave(palabra : string) : string {
    let vocales : string = "aeiou";
    let signos : string = ".,;:!";
    let simbolosMat : string = "0123456789+-*/";
    let clave : string = "";
    for (let i = 0; i < palabra.length; i++) {
        if (simbolosMat.indexOf(palabra[i]) >= 0) {
            clave += palabra[i];
        } else {
            if (vocales.indexOf(palabra[i]) >= 0) {
                clave += signos[vocales.indexOf(palabra[i])];
            } else {
                if (palabra[i] == palabra[i].toUpperCase())
                    clave += palabra[i].toLowerCase;
                else
                    clave += palabra[i].toUpperCase();
            }
        }
    }     
    return clave;
}