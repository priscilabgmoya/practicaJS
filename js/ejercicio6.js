/**
 * 6.- Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
 */
calcularElMayorNumero(); 

function calcularElMayorNumero(){
var numeroA = prompt("ingrese el valor del numero A"); 
var numeroB = prompt("ingrese el valor del numero B"); 
if(parseInt(numeroA) > parseInt(numeroB)){
document.write(`<p style= "color: black; font-size: 30px"> El mayor entre  los Numeros A (${numeroA}) y B (${numeroB}) es: <span style= "color: red; font-size: 30px" > ${(parseInt(numeroA))}</span> </p>`)
}else {
    document.write(`<p style= "color: black; font-size: 30px"> El mayor entre  los Numeros A (${numeroA}) y B (${numeroB}) es: <span style= "color: red; font-size: 30px" > ${(parseInt(numeroB))}</span> </p>`)
}
}