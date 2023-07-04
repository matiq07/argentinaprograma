

let personas = ["jose", "Maria", "Juan", "Andres", "Lionel", "Sofia", "Leandro", "Emilia"];
let rechazados = [];
let admitidos = [];
let i= 0
while (i<personas.length){

    if(personas[i]==="jose" || personas[i]=="Maria"){
        rechazados.unshift(personas[i]);
    }else{
        admitidos.unshift(personas[i]);
    }
    i+=1

}

console.log("La lista de invitados rechazados es:")
rechazados.forEach(elemento=> console.log(elemento))
console.log("La lista de invitados admitidos es:")
admitidos.forEach(elemento=> console.log(elemento));
