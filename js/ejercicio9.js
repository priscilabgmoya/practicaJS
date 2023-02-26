/**
 * 9.- Escribe un programa que pida una frase y escriba las vocales que aparecen
Nota: Tener en cuenta la función length y substring o charAt (developer mozilla)
 */

obtenerVocales();

function obtenerVocales() {
  var frase = prompt("ingrese una frase");
  frase.toLowerCase();
  var  vocales = "";
  for (let i = 0; i < frase.length; i++) {
    const element = frase[i];
    switch (element) {
      case "a":
        vocales += frase.charAt(i)+ ' ' ;
        break;
      case "e" :
        vocales += frase.charAt(i) + ' ';
        break;
      case "i" :
        vocales += frase.charAt(i)+ ' '; 
        break;
      case "o" :
        vocales += frase.charAt(i) + ' ';
        break;
      case "u" :
        vocales += frase.charAt(i) + ' ' ;
        break;
    }
}
document.write(`<p style= "color: black; font-size: 30px">  La frase es : " ${frase} " y sus Vocales son: <span style= "color: red; font-size: 30px" > ${vocales}</span> </p>`)
}
