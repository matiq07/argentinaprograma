const readlineSync = require('readline-sync');
let numero = readlineSync.question("ingresa un numero de 1 a 12: ");
//console.log('Tu edad es', x, ",entonces:");
numero = numero - 1;
let meses = ["enero", "febrero", "marzo","abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"]
let dias = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ]

if(numero<=meses.length){
    console.log("La cantidad de dias del mes de %s es %i", meses[numero], dias[numero])
}