

let personas = ["jose", "Maria", "Juan", "Andres", "Lionel", "Sofia", "Leandro", "Emilia"];
let rechazados = [];
let admitidos = [];

for (let i=0; i<personas.length; i++){
    if(personas[i]==="jose" || personas[i]=="Maria"){
        rechazados += [personas[i]];
    }else{
        admitidos += [personas[i]];
    }

}

console.log(rechazados)
console.log(admitidos)