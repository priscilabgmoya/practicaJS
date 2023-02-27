/**
 * 8.- Escribe un programa que pida un número y diga si es divisible por 2
 */
esDivisibleEn2();

function esDivisibleEn2(){
    var numeroA = parseInt(prompt("ingrese el valor del numero A")); 
    
if(numeroA% 2 === 0 ){
    document.write(`<p style= "color: black; font-size: 30px">  El Numeros A (${numeroA})  <span style= "color: red; font-size: 30px" >Es divisible en 2 </span> </p>`)
}else{
    document.write(`<p style= "color: black; font-size: 30px">  El Numeros A (${numeroA})  <span style= "color: red; font-size: 30px" > No es divisible en 2 </span> </p>`)
}

}