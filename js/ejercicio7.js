/**
 * 7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
 */
calcularElMayorDeTresNumero(); 

function calcularElMayorDeTresNumero(){
var numeroA = prompt("ingrese el valor del numero A"); 
var numeroB = prompt("ingrese el valor del numero B"); 
var numeroC = prompt("ingrese el valor del numero C"); 

if(parseInt(numeroA) > parseInt(numeroB) && parseInt(numeroA) > parseInt(numeroC)){
document.write(`<p style= "color: black; font-size: 30px"> El mayor entre  los Numeros A  (${numeroA}) , B  (${numeroB})  y  C (${numeroC}) es: <span style= "color: red; font-size: 30px" > ${(parseInt(numeroA))}</span> </p>`)
}

if(parseInt(numeroB) > parseInt(numeroA) && parseInt(numeroB) > parseInt(numeroC)){
    document.write(`<p style= "color: black; font-size: 30px"> El mayor entre  los Numeros A  (${numeroA}) , B  (${numeroB})  y  C (${numeroC}) es: <span style= "color: red; font-size: 30px" > ${(parseInt(numeroB))}</span> </p>`)
}

if(parseInt(numeroC) > parseInt(numeroA) && parseInt(numeroC) > parseInt(numeroB)){
    document.write(`<p style= "color: black; font-size: 30px"> El mayor entre  los Numeros A  (${numeroA}) , B  (${numeroB})  y  C (${numeroC}) es: <span style= "color: red; font-size: 30px" > ${(parseInt(numeroC))}</span> </p>`)
 }

 if(parseInt(numeroC) ===  parseInt(numeroA) === parseInt(numeroB)  || parseInt(numeroC) ===  parseInt(numeroB) || parseInt(numeroB) ===  parseInt(numeroA) ){
    document.write(`<p style= "color: black; font-size: 30px"> El mayor entre  los Numeros A  (${numeroA}) , B  (${numeroB})  y  C (${numeroC}) es: <span style= "color: red; font-size: 30px" > los  numeros son iguales</span> </p>`)
 }

}