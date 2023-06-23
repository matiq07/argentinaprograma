const readlineSync = require('readline-sync');
const edad = readlineSync.question('Cual es tu edad? ');
console.log('Tu edad es', edad, ",entonces:");


if (edad>=18){
console.log("Eres Mayor de Edad")
}else{
console.log("Eres menor de Edad")
}