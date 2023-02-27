/**
 * 11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)
 */

esDivisible();


function esDivisibleEn2(){
    var numeroA = parseInt(prompt("ingrese el valor del numero A")); 



if(numeroA% 2 === 0 ){
    document.write(`<p style= "color: black; font-size: 30px">  El Numeros A (${element})  <span style= "color: red; font-size: 30px" >Es divisible en 2 </span> </p>`)
}else{
    document.write(`<p style= "color: black; font-size: 30px">  El Numeros A (${numeroA})  <span style= "color: red; font-size: 30px" > No es divisible en 2 </span> </p>`)
}
if(numeroA% 3 === 0 ){
    document.write(`<p style= "color: black; font-size: 30px">  El Numeros A (${numeroA})  <span style= "color: red; font-size: 30px" >Es divisible en 3 </span> </p>`)
}else{
    document.write(`<p style= "color: black; font-size: 30px">  El Numeros A (${numeroA})  <span style= "color: red; font-size: 30px" > No es divisible en 3 </span> </p>`)
}
if(numeroA% 5 === 0 ){
    document.write(`<p style= "color: black; font-size: 30px">  El Numeros A (${numeroA})  <span style= "color: red; font-size: 30px" >Es divisible en 5 </span> </p>`)
}else{
    document.write(`<p style= "color: black; font-size: 30px">  El Numeros A (${numeroA})  <span style= "color: red; font-size: 30px" > No es divisible en 5 </span> </p>`)
}
if(numeroA% 7 === 0 ){
    document.write(`<p style= "color: black; font-size: 30px">  El Numeros A (${numeroA})  <span style= "color: red; font-size: 30px" >Es divisible en 7 </span> </p>`)
}else{
    document.write(`<p style= "color: black; font-size: 30px">  El Numeros A (${numeroA})  <span style= "color: red; font-size: 30px" > No es divisible en 7 </span> </p>`)
}

}