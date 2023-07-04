//devuelve un numero aleatorio entre min y max, con min y max como posibles valores de salida
function numerosAleatoriosEntre(min, max){
    return Math.round(Math.random() * (max - min) + min);
}


let jugadas= ["piedra", "papel", "tijeras"]


function obetenerJugadaComputadora(){
return jugadas[numerosAleatoriosEntre(0,2)];
}
console.log(obetenerJugadaComputadora())

const readlineSync = require('readline-sync');
let jugada = readlineSync.question("ingresa eleccion de jugada:\n");
function ObtenerJugadaUsuario(jugada){
    return jugada;
}


function piedraGanaATijera(jugador1,jugador2){
    return (jugador1=="piedra" && jugador2=="tijeras")
}


function tijeraGanaAPapel(jugador1,jugador2){
    return (jugador1=="tijeras" && jugador2=="papel")
}


function papelGanaAPiedra(jugador1,jugador2){
    return (jugador1=="papel" && jugador2=="piedra")
}


function gana(jugador1, jugador2){
   return piedraGanaATijera(jugador1,jugador2) || tijeraGanaAPapel(jugador1,jugador2) || papelGanaAPiedra(jugador1,jugador2)
}

function quienGana(judada_maquina, judada_usuario){
    if (gana(judada_maquina,judada_usuario)){
        return "Jugador1"
    }else if (gana(judada_usuario,judada_maquina)){
        return "Jugador2"
    }else{
        return "Empate"
    }
}

quienGana(obetenerJugadaComputadora(),ObtenerJugadaUsuario(jugada))
console.log(quienGana(obetenerJugadaComputadora(), ObtenerJugadaUsuario(jugada)))