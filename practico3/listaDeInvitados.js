// objetivo: dada lista de nombres ->  devuelva listaDeInvitados(en esta lista no debe estar ni Jose ni Maria)

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