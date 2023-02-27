/**
 * 5.- Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.
Nota: Tener en cuenta la siguiente función: parseInt
https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/parseInt

 */

sumaDeDosNumeros();

function sumaDeDosNumeros(){
    var numeroA = parseInt( prompt("ingrese el valor del numero A")); 
    var numeroB = parseInt(prompt("ingrese el valor del numero B")); 
    document.write(`<p style= "color: black; font-size: 30px"> La suma entre los Numeros A (${numeroA}) y B (${numeroB}) es: <span style= "color: red; font-size: 30px" > ${(numeroA+numeroB)}</span> </p>`)
}