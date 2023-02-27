/**
 * 7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
 */
calcularElMayorDeTresNumero(); 

function calcularElMayorDeTresNumero(){
var numeroA = parseInt(prompt("ingrese el valor del numero A")); 
var numeroB = parseInt(prompt("ingrese el valor del numero B")); 
var numeroC = parseInt(prompt("ingrese el valor del numero C")); 

if(numeroA  > numeroB && numeroA  >numeroC){
document.write(`<p style= "color: black; font-size: 30px"> El mayor entre  los Numeros A  (${numeroA}) , B  (${numeroB})  y  C (${numeroC}) es: <span style= "color: red; font-size: 30px" > ${numeroA }</span> </p>`)
}else if (numeroB > numeroC){
    document.write(`<p style= "color: black; font-size: 30px"> El mayor entre  los Numeros A  (${numeroA}) , B  (${numeroB})  y  C (${numeroC}) es: <span style= "color: red; font-size: 30px" > ${numeroB}</span> </p>`)
}else if( numeroC > numeroA ){
    document.write(`<p style= "color: black; font-size: 30px"> El mayor entre  los Numeros A  (${numeroA}) , B  (${numeroB})  y  C (${numeroC}) es: <span style= "color: red; font-size: 30px" > ${numeroC}</span> </p>`)
 }else  if( numeroC ===  numeroA    || numeroC ===  numeroB || numeroB ===  numeroA  ){
    document.write(`<p style= "color: black; font-size: 30px"> El mayor entre  los Numeros A  (${numeroA}) , B  (${numeroB})  y  C (${numeroC}) es: <span style= "color: red; font-size: 30px" > los  numeros son iguales</span> </p>`)
 }
}