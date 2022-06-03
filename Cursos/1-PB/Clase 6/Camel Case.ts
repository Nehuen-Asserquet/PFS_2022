import * as rls from "readline-sync";

let texto : string = rls.question("Ingrese un texto para poder convertirlo a camel case: ");

console.log(`El texto (${texto}) quedo asi: ${camelCase(texto)}`);

function camelCase(texto : string) : string {
    let mayus : boolean = false;
    let camelCaseText : string = " ";
    for (let index = 0; index < texto.trim().length; index++) {
        if (texto[index] == " ") {
            mayus = true;
        } else {
            if (mayus) {
                camelCaseText += texto[index].toUpperCase();
                mayus = false;
            } else {
                camelCaseText += texto[index].toLowerCase();
            }
        }
        
    }
    return camelCaseText;
}