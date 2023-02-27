/**
 * 10.- Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)
 */

obtenerDivisible();

function obtenerDivisible() {
  var numero =  parseInt(prompt("ingrese un Numero A"));



  if (numero % 2 === 0){
    return document.write(`<p style= "color: black; font-size: 30px">  El Numeros A (${numero})  <span style= "color: red; font-size: 30px" >Es divisible en 2 </span> </p>`);
  }
  if (numero % 3 === 0){
  return document.write(`<p style= "color: black; font-size: 30px">  El Numeros A (${numero})  <span style= "color: red; font-size: 30px" >Es divisible en 3 </span> </p>`);
  }
  if (numero % 5 === 0){
    return document.write(`<p style= "color: black; font-size: 30px">  El Numeros A (${numero})  <span style= "color: red; font-size: 30px" >Es divisible en 5 </span> </p>`);
  }
  if (numero % 7 === 0){
    return document.write(`<p style= "color: black; font-size: 30px">  El Numeros A (${numero})  <span style= "color: red; font-size: 30px" >Es divisible en 7 </span> </p>`);
  }
}