/**
 * 4.- Escribe un programa de dos líneas que pida el nombre del usuario con un prompt y escriba un texto que diga «Hola nombreUsuario»
 */
pedirUsuario()
function pedirUsuario(){
let nombre = prompt("¿Como es su Usuario?")
document.write(`<p style= "color: red; font-size: 30px" >Hola! ${nombre}. Un Gusto Conocerte!!!! </p>`)
}